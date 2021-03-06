/************
 * Functions
 ************/

function getIseSettings() {
  return new Promise(function(resolve, reject) {
    chrome.storage.local.get(
      ['isePanNode', 'iseMntNode', 'isePort', 'iseUser', 'isePass'],
      function(results) {
        resolve(results);
      }
    );
  });
}

function getIseInfo(result) {
  return new Promise(function(resolve, reject) {
    getIseSettings().then(settings => {
      var ise = new Array();

      if (settings.isePanNode) {
        ise['pan'] = settings.isePanNode;
      } else {
        console.log('Please define PAN node settings.');
      }

      if (settings.iseMntNode) {
        ise['mnt'] = settings.iseMntNode;
      } else {
        console.log('Please define MNT node settings.');
      }

      if (settings.isePort) {
        ise['port'] = settings.isePort;
      } else {
        console.log('Please define port settings.');
      }

      if (settings.iseUser && settings.isePass) {
        ise['auth'] = btoa(settings.iseUser + ':' + settings.isePass);
      } else {
        console.log('Please define username and password settings.');
      }

      ise['ersUrl'] = 'https://' + ise['pan'] + ':' + ise['port'] + '/ers/config/';
      ise['mntUrl'] = 'https://' + ise['mnt'] + '/admin/API/mnt/';

      resolve(ise);
    });
  });
}

function getGroupsFromIse(ise, groups, url = null, resolve, reject) {
	// Define URL to retrieve groups. Max is 100.
	let groupsURL = url ? url: ise['ersUrl'] + 'endpointgroup?size=100&page=1';

	fetch(groupsURL, {
		headers: {
			Authorization: 'Basic ' + ise['auth'],
			Accept: 'application/json'
		}
	})
		.then(response => {
			if (response.status == 200) {
				response.json().then(data => {
					data = data.SearchResult;
					const retrievedGroups = groups.concat(data.resources);
					if (data.nextPage && data.nextPage.href != '') {
						getGroupsFromIse(ise, retrievedGroups, data.nextPage.href, resolve, reject)
					} else {
						resolve(retrievedGroups);
					}
				});
			} else {
				if (response.status == 401) {
					notify(
						'Error!',
						'Configured username/password does not have required permission in ISE. Please update username/password or fix permissions. Alternatively, disable the extension to stop these errors.',
						'fail'
					);
				} else if (response.status == 0) {
					notify(
						'Error!',
						'Configured server is inaccessible. Please check server IP or DNS settings.',
						'fail'
					);
				}
				reject('Error with fetch.');
			}
		})
		.catch(
			error => {
					console.error('Error:', error);
					reject(error);
				}
		);
}

function buildMenu(groups) {
  buildCoaMenu();
  buildGroupMenu(groups);
  buildSessionInfoMenu();
  console.log('Menu built!');
}

function buildCoaMenu() {
  // define COA types
  coaTypes = {
    'reauth': {
      id: 'coa-reauth',
      name: '..with reauth'
    },
    'port-bounce': {
      id: 'coa-bounce',
      name: '..with port bounce'
    },
    'port-shutdown': {
      id: 'coa-shutdown',
      name: '..with port shutdown'
    }
  };

  // create parent menu object for performing COAs
  coaMenu = chrome.contextMenus.create({ title: 'Perform ISE CoA..', contexts: ['selection'] });

  // create child menu item for each COA type
  for (let coa in coaTypes) {
    coa = coaTypes[coa];
    chrome.contextMenus.create({
      id: coa.id,
      title: coa.name,
      parentId: coaMenu,
      contexts: ['selection']
    });
  }
}

function buildGroupMenu(groups) {
  // create parent menu object for moving endpoints to a different group
  moveGroupMenu = chrome.contextMenus.create({
    title: 'Add to Identity Group..',
    contexts: ['selection']
  });

	// sort groups alphabetically for better menu usability
	groups.sort(function(a, b) {
		var textA = a.name.toUpperCase();
		var textB = b.name.toUpperCase();
		return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
	});

	if (groups.length < 40) {
		// small number of groups, add to menu directly
		// for each group, create child menu object
		for (group in groups) {
			let groupId = groups[group]['id'];
			let groupName = groups[group]['name'];

			chrome.contextMenus.create({
				id: groupId,
				title: groupName,
				parentId: moveGroupMenu,
				contexts: ['selection']
			});
		}
	} else {
		// large number of groups, add alphabetical menu heirarchy
		const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

		alphabet.forEach(letter => {
			let groupId = 'letter-' + letter;
			let groupName = letter;

			chrome.contextMenus.create({
				id: groupId,
				title: groupName,
				parentId: moveGroupMenu,
				contexts: ['selection']
			});
		});

		const usedLetters = [];
		for (group in groups) {
			let groupId = groups[group]['id'];
			let groupName = groups[group]['name'];
			let firstLetter = groupName.slice(0, 1).toUpperCase();

			// To keep menu as concise as possible, we're going to keep track of
			// the letters we use and remove unused letter submenus.
			usedLetters.push(firstLetter);

			chrome.contextMenus.create({
				id: groupId,
				title: groupName,
				parentId: 'letter-' + firstLetter,
				contexts: ['selection']
			});
		}

		// Let's remove those unused sub-menus for brevity
		const unusedMenus = alphabet;
		usedLetters.forEach(letter => {
			let index = unusedMenus.indexOf(letter);
			if (index > -1) {
				unusedMenus.splice(index, 1);
			}
		});

		unusedMenus.forEach(letter => {
			chrome.contextMenus.remove('letter-' + letter);
		})
	}
}

function buildSessionInfoMenu() {
  chrome.contextMenus.create({
    id: 'get-session-info',
    title: 'Get Session Info...',
    contexts: ['selection']
  });
}

function findMacAddresses(selectedText) {
  colonNotation = RegExp(
    '[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}',
    'g'
  );
  dashNotation = RegExp(
    '[0-9A-Fa-f]{2}-[0-9A-Fa-f]{2}-[0-9A-Fa-f]{2}-[0-9A-Fa-f]{2}-[0-9A-Fa-f]{2}-[0-9A-Fa-f]{2}',
    'g'
  );
  dottedNotation = RegExp('[0-9A-Fa-f]{4}.[0-9A-Fa-f]{4}.[0-9A-Fa-f]{4}', 'g');

  // using string.match(regex) instead of regex.test(string) due to performance:
  // see https://jsperf.com/test-vs-match-regex
  if (
    selectedText.match(colonNotation) ||
    selectedText.match(dashNotation) ||
    selectedText.match(dottedNotation)
  ) {
    // valid MACs were found!
    let matches = new Array();

    // we have to only do the match if it matches, otherwise returns null value to array
    // this is "simpler" than writing loop to remove all null values from array
    if (selectedText.match(colonNotation)) {
      // 00:AA:B2:aa:Aa:0a, etc.
      matches = matches.concat(selectedText.match(colonNotation));
    }

    if (selectedText.match(dashNotation)) {
      // 00-AA-B2-aa-Aa-0a, etc.
      matches = matches.concat(selectedText.match(dashNotation));
    }

    if (selectedText.match(dottedNotation)) {
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
  });

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

  colonNotation = RegExp(
    '^[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}$',
    'g'
  );
  dashNotation = RegExp(
    '(^[0-9A-Fa-f]{2})([0-9A-Fa-f]{2}).([0-9A-Fa-f]{2})([0-9A-Fa-f]{2}).([0-9A-Fa-f]{2})([0-9A-Fa-f]{2}$)',
    'g'
  );
  dottedNotation = RegExp(
    '(^[0-9A-Fa-f]{2})-([0-9A-Fa-f]{2})-([0-9A-Fa-f]{2})-([0-9A-Fa-f]{2})-([0-9A-Fa-f]{2})-([0-9A-Fa-f]{2}$)',
    'g'
  );

  for (mac in uniqueMacs) {
    mac = uniqueMacs[mac];
    if (mac.match(colonNotation)) {
      // 00:AA:B2:aa:Aa:0a, etc.
      // In correct format. Let's just ensure it's fully in upper case for uniformity purposes.
      normalizedMacs.push(mac.toUpperCase());
    } else if (mac.match(dashNotation)) {
      // 00-AA-B2-aa-Aa-0a, etc.
      // Convert to correct format.
      mac = mac.replace(dashNotation, '$1:$2:$3:$4:$5:$6');
      normalizedMacs.push(mac.toUpperCase());
    } else if (mac.match(dottedNotation)) {
      // aa11.bb22.33cc, etc.
      // Convert to correct format.
      mac = mac.replace(dottedNotation, '$1:$2:$3:$4:$5:$6');
      normalizedMacs.push(mac.toUpperCase());
    }
  }

  return deduplicateMacs(normalizedMacs);
}

function getEndpointByMac(endpointMac) {
  return new Promise(function(resolve, reject) {
    getIseInfo()
      .then(ise => {
        // Specify URL for API call
        let endpointInfoURL = ise['ersUrl'] + 'endpoint/name/' + endpointMac;

        return fetch(endpointInfoURL, {
          headers: {
            Authorization: 'Basic ' + ise['auth'],
            Accept: 'application/json'
          }
        });
      })
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else if (response.status == 404) {
          notify('Error!', endpointMac + ' does not exist in ISE.', 'fail');
          reject();
        } else if (response.status == 401) {
          notify(
            'Error!',
            'Configured user does not have permissions required to retrieve endpoint info.',
            'fail'
          );
          reject();
        }
      })
      .then(data => {
        let results = data.ERSEndPoint;
        resolve(results);
      })
      .catch(
        error =>
          function() {
            console.error('Error:', error);
            reject(error);
          }
      );
  });
}

function moveEndpointsToGroup(endpointMacs, groupId) {
  // endpointMacs is an array, even if only a single mac
  return new Promise(function(resolve, reject) {
    getIseInfo().then(ise => {
      // check if this is a bulk update (e.g. >1 endpoint)
      if (endpointMacs.length > 1) {
        // if so, set flag for use later in function
        var isBulkMove = true;

        // get and set needed values to calculate progress
        var currentComplete = 0;
        var totalEndpoints = endpointMacs.length;

        // store the id of the progress we are creating in a var for later reference
        var progressBar = 'endpointMoveProgressBar';

        // and begin progress bar notification
        notify('Bulk Move Status', 'Initiating bulk move..', 'icon128', 'progress', progressBar);
      }

      for (mac in endpointMacs) {
        endpointMac = endpointMacs[mac];

        // get endpoint UUID
        getEndpointByMac(endpointMac)
          .then(endpoint => {
            endpointId = endpoint.id;
            endpointMac = endpoint.mac;

            let updateURL = ise['ersUrl'] + 'endpoint/' + endpointId;

            // build data payload for REST API PUT request
            var data = JSON.stringify({
              ERSEndPoint: {
                id: endpointId,
                groupId: groupId,
                staticGroupAssignment: true
              }
            });

            return fetch(updateURL, {
              method: 'PUT',
              headers: {
                Authorization: 'Basic ' + ise['auth'],
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: data
            });
          })
          .then(response => {
            if (response.status === 200) {
              return response.json();
            } else if (response.status === 401) {
              notify(
                'Error!',
                'Configured user does not have required permissions to modify endpoint.',
                'fail'
              );
            } else if (response.status === 500) {
              notify(
                'Error!',
                'Received server error from ISE for one endpoint request. This may be a rate-limit issue.',
                'fail'
              );
            } else if (response.status === 0) {
              notify('Error!', 'Received no response from server.', 'fail');
            }
          })
          .then(response => {
            try {
              if (response.UpdatedFieldsList.updatedField.length == 0) {
                throw 'not moved';
              } else {
                // Now that we're handling in bulk, the endpointMac var doesn't necessarily
                // match the MAC of the item handled by the response due to the async nature of Fetch.
                // endpointMac will always be equal to the value that it was for the last SENT request
                // since most HTTP PUTs were sent prior to receiving responses. For larger batches, it may
                // get some responses back before sending all of them.
                //
                // I digress... short story is that we have to handle notifications differently for single
                // MAC moves than we do for bulk moves.
                // This is also true because we're doing progress stlye notifications for bulk moves.

                if (isBulkMove) {
                  currentComplete = currentComplete + 1;
                  let status = ((currentComplete / totalEndpoints) * 100).toFixed();
                  let message =
                    'Moving endpoint ' + currentComplete + ' out of ' + totalEndpoints + '.';

                  notify('Bulk Move Status', message, 'icon128', 'progress', progressBar, status);
                } else {
                  notify(
                    'Success!',
                    '[' + endpointMac + '] Endpoint was moved successfully!',
                    'success'
                  );
                }
              }
            } catch (error) {
              if (isBulkMove) {
                currentComplete = currentComplete + 1;

                let status = ((currentComplete / totalEndpoints) * 100).toFixed();
                let message =
                  'Moving endpoint ' + currentComplete + ' out of ' + totalEndpoints + '.';

                notify('Bulk Move Status', message, 'icon128', 'progress', progressBar, status);
                notify(
                  'Error!',
                  'Endpoint ' +
                    error +
                    '. This is most commonly due to the endpoint already being in the target group.',
                  'fail'
                );
              } else {
                notify(
                  'Error!',
                  'Endpoint ' +
                    error +
                    '. This is most commonly due to the endpoint already being in the target group.',
                  'fail'
                );
              }
            }
          });
      }
    });
  });
}

function performCoa(endpointMacs, coaType) {
  // endpointMacs is an array, even if only a single mac
  getIseInfo().then(ise => {
    // check if this is a bulk update (e.g. >1 endpoint)
    if (endpointMacs.length > 1) {
      // if so, set flag for use later in function
      var isBulk = true;

      // get and set needed values to calculate progress
      var currentComplete = 0;
      var totalEndpoints = endpointMacs.length;

      // store the id of the progress we are creating in a var for later reference
      var progressBar = 'endpointCoaProgressBar';

      // and begin progress bar notification
      notify('Bulk CoA Status', 'Initiating bulk CoA..', 'icon128', 'progress', progressBar);
    }

    for (mac in endpointMacs) {
      endpointMac = endpointMacs[mac];

      // first, we have to get the active session info for that MAC to perform the CoA
      let sessionInfoURL = ise['mntUrl'] + 'Session/MACAddress/' + endpointMac;
      fetch(sessionInfoURL, {
        headers: {
          Authorization: 'Basic ' + ise['auth'],
          Accept: 'application/xml'
        }
      })
        .then(result => {
					if (result.status === 200) {
						// Return as text since response is XML
            return result.text();
          } else if (result.status === 401) {
            notify(
              'Error!',
              'Configured user does not have required permissions to modify endpoint.',
              'fail'
            );
          } else if (result.status === 500) {
            notify(
              'Error!',
              'Received server error from ISE for one endpoint request. This may be a rate-limit issue.',
              'fail'
            );
          } else if (result.status === 0) {
            notify('Error!', 'Received no response from server.', 'fail');
          }
        })
				.then(responseXml => {
          // unfortunately, the ISE API only returns XML here. Code is not as graceful without JSON.
          let parser = new DOMParser();
					let resp = parser.parseFromString(responseXml, 'text/xml');

          try {
            // what kind of CoA was requested, as they each have different URL targets
            if (coaType == 'coa-reauth') {
              // perform coa-reauth
							// get required information from active session
              let iseNode = resp.getElementsByTagName('acs_server')[0].childNodes[0].nodeValue;
              // build the URL, the trailing /2 indicates to do a coa with rerun
              let reauthURL = ise['mntUrl'] + 'CoA/Reauth/' + iseNode + '/' + endpointMac + '/2';

							fetch(reauthURL, {
								headers: {
									Authorization: 'Basic ' + ise['auth'],
									Accept: 'application/xml'
								}
							})
								.then(result => {
									if (result.status === 200) {
										return result.text();
                  } else if (result.status === 401) {
                    notify('Error!', 'Configured user does not have required permissions.', 'fail');
                  } else if (result.status === 500) {
                    notify(
                      'Error!',
                      "Received server error from ISE for CoA request. This normally means an active session wasn't found.",
                      'fail'
                    );
                  } else if (result.status === 0) {
                    notify('Error!', 'Received no response from server.', 'fail');
                  }
								})
								.then(responseXml => {
									coaResp = parser.parseFromString(responseXml, 'text/xml');
									coaResult = coaResp.getElementsByTagName('results')[0].childNodes[0].nodeValue;
									try {
										if (coaResult != 'true') {
											throw 'CoA failed.';
										} else {
											// Now that we're handling in bulk, the endpointMac var doesn't necessarily
											// match the MAC of the item handled by the response due to the async nature of Fetch.
											// endpointMac will always be equal to the value that it was for the last SENT request
											// since most HTTP PUTs were sent prior to receiving responses. For larger batches, it may
											// get some responses back before sending all of them.
											//
											// I digress... short story is that we have to handle notifications differently for single
											// MAC moves than we do for bulk moves.
											// This is also true because we're doing progress stlye notifications for bulk moves.

											if (isBulk) {
												currentComplete = currentComplete + 1;
												let status = ((currentComplete / totalEndpoints) * 100).toFixed();
												let message =
													'Endpoint CoA ' + currentComplete + ' out of ' + totalEndpoints + '.';

												notify(
													'Bulk CoA Status',
													message,
													'icon128',
													'progress',
													progressBar,
													status
												);
											} else {
												notify('Success!', 'Endpoint CoA was successful!', 'success');
											}
										}
									} catch (error) {
										if (isBulk) {
											currentComplete = currentComplete + 1;

											let status = ((currentComplete / totalEndpoints) * 100).toFixed();
											let message =
												'Moving endpoint ' + currentComplete + ' out of ' + totalEndpoints + '.';

											notify(
												'Bulk CoA Status',
												message,
												'icon128',
												'progress',
												progressBar,
												status
											);
											notify('Error!', 'Endpoint ' + error + '.', 'fail');
										} else {
											notify('Error!', 'Endpoint ' + error + '.', 'fail');
										}
									}
								});
            } else if (coaType == 'coa-bounce' || coaType == 'coa-shutdown') {
              // perform bounce/shutdown
              // get required information from active session
              let iseNode = resp.getElementsByTagName('acs_server')[0].childNodes[0].nodeValue;
              let nasIpAddress = resp.getElementsByTagName('nas_ip_address')[0].childNodes[0]
                .nodeValue;
              let endpointIpAddress = resp.getElementsByTagName('framed_ip_address')[0]
                .childNodes[0].nodeValue;
              if (coaType == 'coa-bounce') {
                portOption = '1';
              } else if (coaType == 'coa-shutdown') {
                portOption = '2';
              }

              // build the URL, the trailing /2 indicates to do a coa with rerun
              let reauthURL =
                ise['mntUrl'] +
                'CoA/Disconnect/' +
                iseNode +
                '/' +
                endpointMac +
                '/' +
                portOption +
                '/' +
                nasIpAddress +
                '/' +
                endpointIpAddress;

							fetch(reauthURL, {
								headers: {
									Authorization: 'Basic ' + ise['auth'],
									Accept: 'application/xml'
								}
							})
								.then(result => {
									if (result.status === 200) {
										return result.text();
									} else if (result.status === 401) {
										notify('Error!', 'Configured user does not have required permissions.', 'fail');
									} else if (result.status === 500) {
										notify(
											'Error!',
											"Received server error from ISE for CoA request. This normally means an active session wasn't found.",
											'fail'
										);
									} else if (result.status === 0) {
										notify('Error!', 'Received no response from server.', 'fail');
									}
								})
								.then(responseXml => {
									coaResp = parser.parseFromString(responseXml, 'text/xml');
									coaResult = coaResp.getElementsByTagName('results')[0].childNodes[0].nodeValue;

									try {
										if (coaResult != 'true') {
											throw 'CoA failed.';
										} else {
											// Now that we're handling in bulk, the endpointMac var doesn't necessarily
											// match the MAC of the item handled by the response due to the async nature of Fetch.
											// endpointMac will always be equal to the value that it was for the last SENT request
											// since most HTTP PUTs were sent prior to receiving responses. For larger batches, it may
											// get some responses back before sending all of them.
											//
											// I digress... short story is that we have to handle notifications differently for single
											// MAC moves than we do for bulk moves.
											// This is also true because we're doing progress stlye notifications for bulk moves.

											if (isBulk) {
												currentComplete = currentComplete + 1;
												let status = ((currentComplete / totalEndpoints) * 100).toFixed();
												let message =
													'Endpoint CoA ' + currentComplete + ' out of ' + totalEndpoints + '.';

												notify(
													'Bulk CoA Status',
													message,
													'icon128',
													'progress',
													progressBar,
													status
												);
											} else {
												notify('Success!', 'Endpoint CoA was successful!', 'success');
											}
										}
									} catch (error) {
										if (isBulk) {
											currentComplete = currentComplete + 1;

											let status = ((currentComplete / totalEndpoints) * 100).toFixed();
											let message =
												'Endpoint CoA ' + currentComplete + ' out of ' + totalEndpoints + '.';

											notify(
												'Bulk CoA Status',
												message,
												'icon128',
												'progress',
												progressBar,
												status
											);
											notify('Error!', 'Endpoint ' + error + '.', 'fail');
										} else {
											notify('Error!', 'Endpoint ' + error + '.', 'fail');
										}
									}
								});
            }
          } catch (error) {
            if (isBulk) {
              currentComplete = currentComplete + 1;

              let status = ((currentComplete / totalEndpoints) * 100).toFixed();
              let message =
                'Endpoint CoA ' + currentComplete + ' out of ' + totalEndpoints + '.';

              notify('Bulk CoA Status', message, 'icon128', 'progress', progressBar, status);
              notify('Error!', 'Endpoint ' + error + '.', 'fail');
            } else {
              notify('Error!', 'Endpoint ' + error + '.', 'fail');
            }
          }
        });
    }
  });
}

function openSessionInfoTab(mac) {
  chrome.tabs.create({ url: 'mac.html?mac=' + mac });
}

function getSessionInfo(mac) {
  // perform API call to get session info
  return getIseInfo()
    .then(ise => {
      let sessionURL =
      ise['mntUrl'] +
      'Session/MACAddress/' +
      mac;

      return fetch(sessionURL, {
        headers: {
          Authorization: 'Basic ' + ise['auth'],
          Accept: 'application/xml'
        }
      })
        .then(result => {
          if (result.status === 200) {
            return result.text()
              .then(text => {
                return { status: 200, xml: text };
            })
          } else if (result.status === 401) {
            notify('Error!', 'Configured user does not have required permissions.', 'fail');
            return { error: 401, status: 'Configured user does not have required permissions!' };
          } else if (result.status === 500) {
            notify(
              'Error!',
              "Received server error from ISE. This normally means an active session wasn't found.",
              'fail'
            );
            return { error: 500, status: 'No session found!' };
          } else if (result.status === 0) {
            notify('Error!', 'Received no response from server.', 'fail');
            return { error: 0, status: 'Received no response from server!' };
          }
        })
        .then(response => {
          if (response.status === 200) {
            let parser = new DOMParser();
            let xml = parser.parseFromString(response.xml, 'text/xml');
            let json = {};
            // makeshift conversion from XML to JSON
            xml.getElementsByTagName('sessionParameters')[0].childNodes.forEach(child => {
              json[child.tagName] = child.innerHTML;
            });
            return {success:true, data: json};
          } else {
            return { success: false, data: response.status };
          }
        })
        .then(data => {
          return data;
        });
    });
}

function notify(title, message, icon = 'icon128', type = 'basic', id = null, progress = 0) {
  // let's add .png to the passed icon string
  // icon can be 'success' or 'fail'
  icon = 'images/' + icon + '.png';
  progress = parseInt(progress);

  // chrome support progress type notifications, firefox does not
  // for compatability purposes, we need to check if firefox so we can use basic notifications instead

  if (type == 'progress') {
    if (typeof browser == 'undefined') {
      var browserName = 'chrome';
    } else {
      browserName = 'firefox';
    }

    if (browserName == 'firefox') {
      if (progress == 0) {
        chrome.notifications.create(id, {
          type: 'basic',
          iconUrl: icon,
          title: title,
          message: message || 'Initiating bulk move..'
        });
      } else if (progress > 0 && progress < 100) {
        chrome.notifications.create(id, {
          type: 'basic',
          iconUrl: icon,
          title: title,
          message: message || 'Moving endpoints (' + progress + '%)'
        });
      } else if (progress == 100) {
        chrome.notifications.create(id, {
          type: 'basic',
          iconUrl: icon,
          title: title,
          message: 'Done!'
        });
      }
    } else if (browserName == 'chrome') {
      if (progress == 0) {
        chrome.notifications.create(id, {
          type: type,
          iconUrl: icon,
          title: title,
          message: message || 'Initiating bulk move..',
          progress: progress
        });
      } else if (progress > 0 && progress < 100) {
        chrome.notifications.update(id, {
          progress: progress,
          message: message || 'Moving endpoints (' + progress + '%)'
        });
      } else if (progress == 100) {
        chrome.notifications.update(id, {
          progress: progress,
          message: 'Done!'
        });
      }
    }
  } else if (type == 'basic') {
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
