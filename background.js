/****************
 * Extension run
 ****************/
console.log('ISE Assistant is running!');
var moveGroupMenu = null;
var coaMenu = null;
var manifestData = chrome.runtime.getManifest();

// onInstall, popup useful information / intro page.
chrome.runtime.onInstalled.addListener(function(details) {
  switch (details.reason) {
    case 'install':
      // first installation
      chrome.tabs.create({ url: './intro.html' });
      break;
    case 'update':
      // on update, but only if version changed on reload
      if (details.previousVersion != manifestData.version) {
        chrome.tabs.create({ url: './update.html' });
      }
      break;
  }
});

// Get list of Identity Groups on run
chrome.storage.local.get(['isePanNode', 'iseMntNode', 'isePort', 'iseUser', 'isePass'], function(
  result
) {
  var ise = getIseInfo(result);

  // let's fire the canons
  getIseSettings()
    .then(settings => getIseInfo(settings))
		.then(ise => {
			return new Promise((resolve, reject) => {
				getGroupsFromIse(ise, [], null, resolve, reject)
			})
		})
    .then(groups => buildMenu(groups));
});

chrome.contextMenus.onClicked.addListener(function (item) {
  // what to do when menu item is clicked!
  // get the selected text
  let selectedText = item.selectionText;

  // find all of the MAC addressess in the selection
  let endpointMacs = findMacAddresses(selectedText);

  // if endpoints were found
  if (endpointMacs.length > 0) {
    // normalize the mac addresses (convert all to AA:BB:CC:11:22:33 format)
    endpointMacs = normalizeMacs(endpointMacs);

		// What menu action was clicked?
    if (item.parentMenuItemId && (item.parentMenuItemId == moveGroupMenu || String(item.parentMenuItemId).startsWith('letter'))) {
      // get the group we're moving to
      let newGroupId = item.menuItemId;
      // move the macs
      moveEndpointsToGroup(endpointMacs, newGroupId);
    } else if (item.parentMenuItemId && item.parentMenuItemId == coaMenu) {
      performCoa(endpointMacs, item.menuItemId);
    } else if (item.menuItemId == 'get-mac-info') {
      // Since this opens a new tab for each, we're capping it at 10.
      endpointMacs.slice(0,10).forEach(mac => {
        openMacInfoTab(mac)
      });
    }
  } else {
    notify(
      'No MAC addresses found the selection.',
      'The text you selected did not contain any accepted MAC address formats. The MAC address must be in one of the following formats: xx:xx:xx:xx:xx:xx, xx-xx-xx-xx-xx-xx, xxxx.xxxx.xxxx',
      'fail'
    );
  }
});

chrome.runtime.onMessage.addListener(
  function (message, sender, sendResponse) {
    if (message.action == 'get-mac-info') {
      const url = new URL(sender.tab.url);
      const mac = url.searchParams.get("mac");
      getMacInfo(mac).then(macInfo => {
        if (macInfo) {
          sendResponse(macInfo);
        }
      });
    }
    // this let's chrome know that an asynchronous response is coming
    return true;
  });