function optionsLoad() {
  // get element objects
  var iseField = document.getElementById('iseField');
  var userField = document.getElementById('userField');
  var passField = document.getElementById('passField');
  var portField = document.getElementById('portField');

  // retrieve values from chrome local storage, place in input field if defined
  chrome.storage.local.get(['iseServer'], function(result) {
    if(result.iseServer) { iseField.value = result.iseServer } 
    else { iseField.value = ''; }
  });

  chrome.storage.local.get(['isePort'], function(result) {
    if(result.isePort) { portField.value = result.isePort } 
    else { portField.value = '9060'; }
  });

  chrome.storage.local.get(['iseUser'], function(result) {
    if(result.iseUser) { userField.value = result.iseUser } 
    else { userField.value = ''; }
  });

  chrome.storage.local.get(['isePass'], function(result) {
    if(result.isePass) { passField.value = result.isePass } 
    else { passField.value = ''; }
  });

}

optionsLoad();


document.getElementById('optionsSubmit').onclick = function() {
  // get element fields
  var iseField = document.getElementById('iseField');
  var portField = document.getElementById('portField');
  var userField = document.getElementById('userField');
  var passField = document.getElementById('passField');
  
  // set chrome local storage values to field values
  chrome.storage.local.set({iseServer: iseField.value});
  chrome.storage.local.set({isePort: portField.value});
  chrome.storage.local.set({iseUser: userField.value});
  chrome.storage.local.set({isePass: passField.value});

  window.close();
}
