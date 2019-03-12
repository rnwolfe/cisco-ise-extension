chrome.runtime.sendMessage({action: "get-mac-info"}, function(response) {
  let txt = '<table class="table table-responsive table-hover">';
  Object.keys(response).forEach(key => {
    txt += "<tr><td>" + key + "</td><td>" + response[key] + "</td></tr>";
  });
  txt += '</table>';
  document.getElementById('content').innerHTML = txt;
});