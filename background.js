// Get list of Identity Groups on install
chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.local.get(['iseServer', 'isePort', 'iseUser', 'isePass'], function(result) {
		var ise = getIseInfo(result);

		// let's fire the canons
		getGroupsFromIse(ise, function(result) {
			groups = result;

			buildMenu(groups);
		});

	});

	console.log("ISE Assistant is running!");
});


chrome.contextMenus.onClicked.addListener(function(item) {
	// what to do when menu item is clicked!
	let selectedText = item.selectionText;
	let endpointMacs = findMacAddresses(selectedText);

	let newGroupId   = item.menuItemId

	if( endpointMacs ) {
		// normalize the mac addresses		
		endpointMacs = normalizeMacs(endpointMacs);

		// move the macs
		for( mac in endpointMacs ) {
			mac = endpointMacs[mac];

			moveEndpointToGroup(mac, newGroupId);
		}
	} else {
		notify("Not a valid MAC address format.", "The text you selected did not match an accepted MAC address format. The MAC address must be in one of the following formats: xx:xx:xx:xx:xx:xx, xx-xx-xx-xx-xx-xx, xxxx.xxxx.xxxx", "fail");
	}

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
	let groupsURL = ise['url'] + "endpointgroup"

	// Create HTTP request
	let xhr = new XMLHttpRequest();
	// This function will handle response when it is return (given the request is sent asynchronously)
	xhr.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        let resp = JSON.parse(this.responseText);
	        let results = resp.SearchResult;

	        callback(results);
	    } else {
	    	if (this.readyState == 4 && this.status == 401) {
	    		notify("Error!", "Configured username/password does not have required permission in ISE. Please update username/password or fix permissions. Alternatively, disable the extension to stop these errors.", "fail");
	    	} else if (this.readyState == 4 && this.status == 0 ) {
	    		notify("Error!", "Configured server is inaccessible. Please check server IP or DNS settings.", "fail");
	    	}
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

	console.log("Menu built!");
}

function findMacAddresses(selectedText) {
	colonNotation  = RegExp('[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}', 'g');
	dashNotation   = RegExp('[0-9A-Fa-f]{2}-[0-9A-Fa-f]{2}-[0-9A-Fa-f]{2}-[0-9A-Fa-f]{2}-[0-9A-Fa-f]{2}-[0-9A-Fa-f]{2}', 'g');
	dottedNotation = RegExp('[0-9A-Fa-f]{4}\.[0-9A-Fa-f]{4}\.[0-9A-Fa-f]{4}', 'g');
	
	if( colonNotation.test(selectedText) || dashNotation.test(selectedText) || dottedNotation.test(selectedText) ) {
		// valid MACs were found!
		let matches = new Array();

		// we have to only do the match if it matches, otherwise returns null value to array
		// this is "simpler" than writing loop to remove all null values from array
		if( colonNotation.test(selectedText) ) {
		// 00:AA:B2:aa:Aa:0a, etc.
			matches = matches.concat(selectedText.match(colonNotation));
		}

		if( dashNotation.test(selectedText) ) {
		// 00-AA-B2-aa-Aa-0a, etc.
			matches = matches.concat(selectedText.match(dashNotation));
		}

		if( dottedNotation.test(selectedText) ) {
		// aa11.bb22.33cc, etc.
			matches = matches.concat(selectedText.match(dottedNotation));
		}

		return matches;
	} else {
		// no valid MACs were found
		return false;
	}
}

function deduplicateMacs(macs) {
	let uniqueMacs = macs.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })

    return uniqueMacs;
}

function normalizeMacs(macs) {
	// The ISE API requires the MAC address be in the XX:XX:XX:XX:XX:XX format. 
	// This function will return a MAC address in that format if a valid MAC is presented; otherwise,
	// it will return false.

	// after adding ability to highlight a bunch of text and findMacAddresses(), the array
	// that is passed here should only contain valid MAC addresses. So, returning false if invalid is not
	// necessary, as that function should have done that already. 

	// remove any duplicates that were passed, we will have to do this again after normalization 
	// because AA:BB:CC:11:22:33 != AA-BB-CC-11-22-33 != aabb.cc11.2233
	// but, best to do it now to as to not normalize duplicate versions of the same mac

	let uniqueMacs = deduplicateMacs(macs);

	let normalizedMacs = new Array();

	for( mac in uniqueMacs ) {
		mac = uniqueMacs[mac];
		if( mac.match(/^[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}$/g) ) {
		// 00:AA:B2:aa:Aa:0a, etc.
			// In correct format. Let's just ensure it's fully in upper case for uniformity purposes.
			normalizedMacs.push(mac.toUpperCase());
		} else if( mac.match(/^[0-9A-Fa-f]{4}\.[0-9A-Fa-f]{4}\.[0-9A-Fa-f]{4}$/g) ) {
		// aa11.bb22.33cc, etc.
			// Convert to correct format.
			mac = mac.replace(/(^[0-9A-Fa-f]{2})([0-9A-Fa-f]{2})\.([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})\.([0-9A-Fa-f]{2})([0-9A-Fa-f]{2}$)/, "$1:$2:$3:$4:$5:$6")
			normalizedMacs.push(mac.toUpperCase());
		} else if( mac.match(/^[0-9A-Fa-f]{2}-[0-9A-Fa-f]{2}-[0-9A-Fa-f]{2}-[0-9A-Fa-f]{2}-[0-9A-Fa-f]{2}-[0-9A-Fa-f]{2}$/g) ) {
		// 00-AA-B2-aa-Aa-0a, etc.
			// Convert to correct format.
			mac = mac.replace(/(^[0-9A-Fa-f]{2})-([0-9A-Fa-f]{2})-([0-9A-Fa-f]{2})-([0-9A-Fa-f]{2})-([0-9A-Fa-f]{2})-([0-9A-Fa-f]{2}$)/, "$1:$2:$3:$4:$5:$6")
			normalizedMacs.push(mac.toUpperCase());
		}
	}

	return deduplicateMacs(normalizedMacs);
}

function getEndpointByMac(endpointMac, callback) {
	chrome.storage.local.get(['iseServer', 'isePort', 'iseUser', 'isePass'], function(result) {
		// get ISE settings
		var ise = getIseInfo(result);

		// Specify URL for API call
		let endpointInfoURL = ise['url'] + "endpoint/name/" + endpointMac;

		// Create HTTP request
		let xhr = new XMLHttpRequest();

		// This will handle response when it is returned (given the request is sent asynchronously)
		xhr.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		        let resp = JSON.parse(this.response);
		        let results = resp.ERSEndPoint;

		        callback(results);
		    } else {
		    	// handle errors
		    	if( this.readyState == 4 && this.status == 404 ) {
			  		notify("Error!", endpointMac + " does not exist in ISE.", "fail");
		    	} else if( this.readyState == 4 && this.status == 401 ) {
			  		notify("Error!", "Configured user does not have permissions required to retrieve endpoint info.", "fail");
		    	}
		    }
		};

		xhr.open("GET", endpointInfoURL, true);

		// Set required HTTP headers
		xhr.setRequestHeader("Authorization", "Basic " + ise['auth']);
		xhr.setRequestHeader("Accept", "application/json");

		// Bombs away
		xhr.send();
	});
}

function moveEndpointToGroup(endpointMac, groupId) {
	// get endpoint UUID
	getEndpointByMac(endpointMac, function(result) {
		
		endpointId = result.id;
		endpointMac = result.mac;

		chrome.storage.local.get(['iseServer', 'isePort', 'iseUser', 'isePass'], function(result) {
			var ise = getIseInfo(result);

			let updateURL = ise['url'] + "endpoint/" + endpointId;

			// build data payload for REST API PUT request
			var data = JSON.stringify({
			  "ERSEndPoint": {
			    "id": endpointId,
			    "groupId": groupId,
			    "staticGroupAssignment": true
			  }
			});

			var xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function () {
			  if (this.readyState === 4 && this.status == 200) {
			    resp = JSON.parse(this.responseText);

			    try {
			    	if( resp.UpdatedFieldsList.updatedField.length == 0 ) {
			    		throw "not moved";
			    	} else {
			    		notify("Success!", endpointMac + " was moved successfully!", "success");
			    	}
			    } catch(error) {
			    	notify("Error!", endpointMac + " " + error + ". This is most commonly due to the endpoint already being in the target group.", "fail");
			    }
			  } else {
			  	// handle non-200 status codes
			  	// at this point, a 404 should never really occur given we already 
			  	// looked up the endpoint for it's UUID, if it didn't exist, the error already occurred.

			  	// The primary errors we'd expect here are authorization or other API errors. A user may be 
			  	// authorized to read groups/endpoint info but not to modify it. This could also occur if a user's
			  	// permissions changed after they loaded their existing session.

			  	if( this.readyState === 4 && this.status === 401 ) {
			  		notify("Error!", "Configured user does not have required permissions to modify endpoint.", "fail");
			  	}
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

function notify(title, message, icon) {
	// let's add .png to the passed icon string
	// icon can be 'success' or 'fail'
	icon = "images/" + icon + ".png";

	var options = {
		type: "basic", 
		title: title, 
		message: message,
		iconUrl: icon
	};

	chrome.notifications.create(options, function() {
		return true;
	});
}