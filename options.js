function optionsLoad() {
  // get element objects
  var isePanField = document.getElementById('isePanField');
  var iseMntField = document.getElementById('iseMntField');
  var userField = document.getElementById('userField');
  var passField = document.getElementById('passField');
  var portField = document.getElementById('portField');

  // retrieve values from chrome local storage, place in input field if defined
  chrome.storage.local.get(['isePanNode'], function(result) {
    if(result.isePanNode) { isePanField.value = result.isePanNode } 
    else { isePanField.value = ''; }
  });

  chrome.storage.local.get(['iseMntNode'], function(result) {
    if(result.iseMntNode) { iseMntField.value = result.iseMntNode } 
    else { iseMntField.value = ''; }
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
  var isePanField = document.getElementById('isePanField');
  var iseMntField = document.getElementById('iseMntField');
  var portField = document.getElementById('portField');
  var userField = document.getElementById('userField');
  var passField = document.getElementById('passField');
  
  // set chrome local storage values to field values
  chrome.storage.local.set({isePanNode: isePanField.value});
  chrome.storage.local.set({iseMntNode: iseMntField.value});
  chrome.storage.local.set({isePort: portField.value});
  chrome.storage.local.set({iseUser: userField.value});
  chrome.storage.local.set({isePass: passField.value});

  window.close();
  chrome.runtime.reload();
}

document.getElementById('refreshGroups').onclick = function() {
  window.close();
  chrome.runtime.reload();
}