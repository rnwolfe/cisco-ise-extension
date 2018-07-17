// Get list of Identity Groups on install
chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.local.get(['iseServer', 'isePort', 'iseUser', 'isePass'], function(result) {
		var ise = getIseInfo(result);
				
		// let's fire the canons
		getGroupsFromIse(ise, function(result) {
			groups = result;

			console.log("Runtime exec: ");
			console.log(result);
			
			buildMenu(groups);
		});

	});
});


chrome.contextMenus.onClicked.addListener(function(item, tab) {
	// what to do when menu item is clicked!
	let endpointMac = item.selectionText; // Need to make sure this is a MAC Address format at some point...
	let newGroupId = item.menuItemId;

	console.log("moveEndpointToGroup("+endpointMac+", "+newGroupId+")");
	moveEndpointToGroup(endpointMac, newGroupId);
});






/////////////////////////////////////////


function getIseInfo(result) {
	var ise = new Array();

    if(result.iseServer) { ise['server'] = result.iseServer } 
    else { console.log("Please define server settings.") }

    if(result.isePort) { ise['port'] = result.isePort } 
    else { console.log("Please define port settings.") }

    if(result.iseUser && result.isePass) { 
    	ise['auth'] = btoa(result.iseUser + ":" + result.isePass);
    } else { 
    	console.log("Please define username and password settings."); 
    }
    
    ise['url'] = "https://" + ise['server'] + ":" + ise['port'] + "/ers/config/";

    return ise;
}

function getGroupsFromIse(ise, callback) {
	// Define ISE Parameters
	console.log(ise);
	let groupsURL = ise['url'] + "endpointgroup"

	// Create HTTP request
	let xhr = new XMLHttpRequest();
	// This function will handle response when it is return (given the request is sent asynchronously)
	xhr.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        let resp = JSON.parse(this.responseText);
	        let results = resp.SearchResult;

	        callback(results);
	    }
	};

	xhr.open("GET", groupsURL, true);

	xhr.setRequestHeader("Authorization", "Basic " + ise['auth']);
	xhr.setRequestHeader("Accept", "application/json");

	// Bombs away
	xhr.send();
}

function buildMenu(menuItems) {
	// create parent menu object
	var parent = chrome.contextMenus.create({"title": "Add to Identity Group..", "contexts": ["selection"]});

	// get ID/name of each group in JSON response
	groups = menuItems.resources;
	
	// for each group, create child menu object
	for (group in groups) {
		let groupId = groups[group]['id'];
		let groupName = groups[group]['name'];

		chrome.contextMenus.create({
			id: groupId,
			title: groupName, 
			parentId: parent, 
			contexts: ["selection"]
		});
	}
}

function getEndpointByMac(endpointMac, callback) {
	chrome.storage.local.get(['iseServer', 'isePort', 'iseUser', 'isePass'], function(result) {
		// get ISE settings
		var ise = getIseInfo(result);

		// Specify URL for API call
		let endpointInfoURL = ise['url'] + "endpoint/name/" + endpointMac;
		// Create HTTP request
		let xhr = new XMLHttpRequest();
		// This function will handle response when it is return (given the request is sent asynchronously)
		xhr.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	console.log(this);
		        let resp = JSON.parse(this.response);
		        let results = resp.ERSEndPoint;

		        console.log(results.mac + " has a UUID of " + results.id);
		        callback(results);
		    }
		};

		xhr.open("GET", endpointInfoURL, true);

		xhr.setRequestHeader("Authorization", "Basic " + ise['auth']);
		xhr.setRequestHeader("Accept", "application/json");

		// Bombs away
		xhr.send();
	});
}

function moveEndpointToGroup(endpointMac, groupId) {

	// get endpoint UUID
	getEndpointByMac(endpointMac, function(result) {
		// debugging
		console.log("getEndpointByMac..");
		console.log(result);
		console.log(result.mac, result.id);

		// actual function
		endpointId = result.id;
		endpointMac = result.mac;

		chrome.storage.local.get(['iseServer', 'isePort', 'iseUser', 'isePass'], function(result) {
			var ise = getIseInfo(result);

			let updateURL = ise['url'] + "endpoint/" + endpointId;

			var data = JSON.stringify({
			  "ERSEndPoint": {
			    "id": endpointId,
			    "groupId": groupId,
			    "staticGroupAssignment": true
			  }
			});

			var xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function () {
			  if (this.readyState === 4) {
			    console.log(this.responseText);
			  }
			};

			xhr.open("PUT", updateURL);
			xhr.setRequestHeader("Authorization", "Basic " + ise['auth']);
			xhr.setRequestHeader("Accept", "application/json");
			xhr.setRequestHeader("content-type", "application/json");

			xhr.send(data);
		});
	});
}