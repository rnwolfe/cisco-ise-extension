// Get list of Identity Groups on install
chrome.storage.local.get(['iseServer', 'isePort', 'iseUser', 'isePass'], function(result) {
	var ise = getIseInfo(result);

	// let's fire the canons
	getGroupsFromIse(ise, function(result) {
		groups = result;

		buildMenu(groups);
	});

});

console.log("ISE Assistant is running!");


chrome.contextMenus.onClicked.addListener(function(item) {
	// what to do when menu item is clicked!
	// get the group we're moving to
	let newGroupId   = item.menuItemId

	// get the selected text
	let selectedText = item.selectionText;

	// find all of the MAC addressess in the selection
	let endpointMacs = findMacAddresses(selectedText);

	// if endpoints were found
	if( endpointMacs.length > 0 ) {
		// normalize the mac addresses (convert all to AA:BB:CC:11:22:33 format)
		endpointMacs = normalizeMacs(endpointMacs);

		// move the macs
		moveEndpointsToGroup(endpointMacs, newGroupId);
	} else {
		notify("No MAC addresses found the selection.", "The text you selected did not contain any accepted MAC address formats. The MAC address must be in one of the following formats: xx:xx:xx:xx:xx:xx, xx-xx-xx-xx-xx-xx, xxxx.xxxx.xxxx", "fail");
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
	dottedNotation = RegExp('[0-9A-Fa-f]{4}.[0-9A-Fa-f]{4}.[0-9A-Fa-f]{4}', 'g');

	// using string.match(regex) instead of regex.test(string) due to performance:
	// see https://jsperf.com/test-vs-match-regex
	if( selectedText.match(colonNotation) || selectedText.match(dashNotation) || selectedText.match(dottedNotation) ) {
		// valid MACs were found!
		let matches = new Array();

		// we have to only do the match if it matches, otherwise returns null value to array
		// this is "simpler" than writing loop to remove all null values from array
		if( selectedText.match(colonNotation) ) {
		// 00:AA:B2:aa:Aa:0a, etc.
			matches = matches.concat(selectedText.match(colonNotation));
		}

		if( selectedText.match(dashNotation) ) {
		// 00-AA-B2-aa-Aa-0a, etc.
			matches = matches.concat(selectedText.match(dashNotation));
		}

		if( selectedText.match(dottedNotation) ) {
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

	colonNotation  = RegExp('^[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}$', 'g');
	dashNotation   = RegExp('(^[0-9A-Fa-f]{2})([0-9A-Fa-f]{2}).([0-9A-Fa-f]{2})([0-9A-Fa-f]{2}).([0-9A-Fa-f]{2})([0-9A-Fa-f]{2}$)', 'g');
	dottedNotation = RegExp('(^[0-9A-Fa-f]{2})-([0-9A-Fa-f]{2})-([0-9A-Fa-f]{2})-([0-9A-Fa-f]{2})-([0-9A-Fa-f]{2})-([0-9A-Fa-f]{2}$)', 'g');

	for( mac in uniqueMacs ) {
		mac = uniqueMacs[mac];
		if( mac.match(colonNotation) ) {
		// 00:AA:B2:aa:Aa:0a, etc.
			// In correct format. Let's just ensure it's fully in upper case for uniformity purposes.
			normalizedMacs.push(mac.toUpperCase());
		} else if( mac.match(dashNotation) ) {
		// 00-AA-B2-aa-Aa-0a, etc.
			// Convert to correct format.
			mac = mac.replace(dashNotation, "$1:$2:$3:$4:$5:$6")
			normalizedMacs.push(mac.toUpperCase());
		} else if( mac.match(dottedNotation) ) {
		// aa11.bb22.33cc, etc.
			// Convert to correct format.
			mac = mac.replace(dottedNotation, "$1:$2:$3:$4:$5:$6")
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

function moveEndpointsToGroup(endpointMacs, groupId) {
	// endpointMacs is an array, even if only a single mac

	chrome.storage.local.get(['iseServer', 'isePort', 'iseUser', 'isePass'], function(result) {
		var ise = getIseInfo(result);

		// check if this is a bulk update (e.g. >1 endpoint) 
		if( endpointMacs.length > 1 ) {
			// if so, set flag for use later in function
			var isBulkMove = true;

			// get and set needed values to calculate progress
			var currentComplete = 0;
			var totalEndpoints = endpointMacs.length;

			// store the id of the progress we are creating in a var for later reference
			var progressBar = "endpointMoveProgressBar";

			// and begin progress bar notification
			notify("Bulk Move Status", "Initiating bulk move..", "icon128", "progress", progressBar);
		}

		for( mac in endpointMacs ) {
			endpointMac = endpointMacs[mac];

			// get endpoint UUID
			getEndpointByMac(endpointMac, function(result) {
				
				endpointId = result.id;
				//endpointMac = result.mac;
				console.log(result);

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

				xhr.open("PUT", updateURL);
				xhr.setRequestHeader("Authorization", "Basic " + ise['auth']);
				xhr.setRequestHeader("Accept", "application/json");
				xhr.setRequestHeader("content-type", "application/json");

				xhr.send(data);
				xhr.onreadystatechange = function () {
					if ( this.readyState === 4 ) {
					  	if( this.status === 200 ) {
						    resp = JSON.parse(this.responseText);
						    console.log(resp);
						    try {
						    	if( resp.UpdatedFieldsList.updatedField.length == 0 ) {
						    		throw "not moved";
						    	} else {
						    		// Now that we're handling in bulk, the endpointMac var doesn't necessarily 
						    		// match the MAC of the item handled by the response due to the async nature of XHR.
						    		// endpointMac will always be equal to the value that it was for the last SENT request
						    		// since most HTTP PUTs were sent prior to receiving responses. For larger batches, it may 
						    		// get some responses back before sending all of them.
						    		// 
						    		// I digress... short story is that we have to handle notifications differently for single 
						    		// MAC moves than we do for bulk moves. 
						    		// This is also true because we're doing progress stlye notifications for bulk moves.

						    		if( isBulkMove ) {
						    			currentComplete = currentComplete + 1;
						    			let status = (( currentComplete / totalEndpoints ) * 100).toFixed();
						    			let message = "Moving endpoint " + currentComplete + " out of " + totalEndpoints + ".";
						    			console.log("Moved endpoint, status: " + status);
						    			notify("Bulk Move Status", message, "icon128", "progress", progressBar, status)
						    		} else {
							    		notify("Success!", "Endpoint was moved successfully!", "success");
						    		}
						    	}
						    } catch(error) {
					    		if( isBulkMove ) {
					    			currentComplete = currentComplete + 1;

					    			let status = (( currentComplete / totalEndpoints ) * 100).toFixed();						    			
					    			let message = "Moving endpoint " + currentComplete + " out of " + totalEndpoints + ".";

					    			notify("Bulk Move Status", message, "icon128", "progress", progressBar, status)
							    	notify("Error!", "Endpoint " + error + ". This is most commonly due to the endpoint already being in the target group.", "fail");
					    		} else {
							    	notify("Error!", "Endpoint " + error + ". This is most commonly due to the endpoint already being in the target group.", "fail");
					    		}
						    }

						// handle non-200 status codes
					  	// at this point, a 404 should never really occur given we already 
					  	// looked up the endpoint for it's UUID, if it didn't exist, the error already occurred.

					  	// The primary errors we'd expect here are authorization or other API errors. A user may be 
					  	// authorized to read groups/endpoint info but not to modify it. This could also occur if a user's
					  	// permissions changed after they loaded their existing session.
						} else if( this.status === 401 ) {
							notify("Error!", "Configured user does not have required permissions to modify endpoint.", "fail");
						} else if( this.status === 500 ) {
							notify("Error!", "Received server error from ISE for one endpoint request. This may be a rate-limit issue.", "fail");
						} else if( this.status === 0 ) {
							notify("Error!", "Received no response from server.", "fail");
						}
					}
				};
			});
		}
	});
}

function notify(title, message, icon = "icon128", type = "basic", id = null, progress = 0) {
	// let's add .png to the passed icon string
	// icon can be 'success' or 'fail'
	icon = "images/" + icon + ".png";
	progress = parseInt(progress);

	// chrome support progress type notifications, firefox does not
	// for compatability purposes, we need to check if firefox so we can use basic notifications instead

	if( type == 'progress' ) {
		if( typeof browser == "undefined") {
			var browserName = "chrome";
		} else {
			browserName = "firefox";
		}

		if( browserName == "firefox" ) {

			if( progress == 0 ) {
				console.log("create progress bar");
				chrome.notifications.create(id, {
				    type: "basic",
				    iconUrl: icon,
				    title: title,
				    message: message || "Initiating bulk move..",
				});
			} else if ( progress > 0 && progress < 100 ) {
				console.log("Updating status to " + progress);
				chrome.notifications.create(id, {
				    type: "basic",
				    iconUrl: icon,
				    title: title,
				    message: message || "Moving endpoints (" + progress + "%)"
				});
			} else if ( progress == 100 ) {
				console.log("Updating status to " + progress);
				chrome.notifications.create(id, {
				    type: "basic",
				    iconUrl: icon,
				    title: title,
				    message: "Done!"
				});
			}
		} else if ( browserName == "chrome" ) {
			if( progress == 0 ) {
				console.log("create progress bar");
				chrome.notifications.create(id, {
				    type: type,
				    iconUrl: icon,
				    title: title,
				    message: message || "Initiating bulk move..",
				    progress: progress
				});
			} else if ( progress > 0 && progress < 100 ) {
				console.log("Updating status to " + progress);

				chrome.notifications.update(id, {
				    progress: progress,
				    message: message || "Moving endpoints (" + progress + "%)"
				});
			} else if ( progress == 100 ) {
				console.log("Updating status to " + progress);

				chrome.notifications.update(id, {
				    progress: progress,
				    message: "Done!"
				});
			}
		}

	} else if ( type == 'basic' ) {
		var options = {
			type: type, 
			title: title, 
			message: message,
			iconUrl: icon
		};

		chrome.notifications.create(options, function() {
			return true;
		});
	}
}

