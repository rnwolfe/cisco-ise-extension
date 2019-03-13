chrome.runtime.sendMessage({ action: "get-session-info" }, function (response) {
  console.log(response);

  if (!response.success) {
    // If information wasn't successful for any reason.
    document.querySelector('#header').innerHTML = response.data;
    document.querySelector('#show-raw').style.display = 'none';
  } else {
    let radius_response = response['data']['response'].slice(1, -2).split(';');
    const info = response['data'];
    let authz_result = '';
    radius_response.forEach(item => {
      if (item == '') return;
      authz_result += item.trim() + "<br />";
    });

    // Set page header
    document.querySelector('#header').innerHTML = "Endpoint Info: " + info['calling_station_id'];

    let table = openTable();
    table += addHeader('Active Session Details');
    table += addRow('Auth Status', info['passed'] == 'true' ?
      '<span class="text-success">Passed</span>' :
      '<span class="text-danger">Failed</span>');
    table += addRow('AuthC Timestamp', info['auth_acs_timestamp']);
    table += addRow('Input Packets', info['acct_input_packets']);
    table += addRow('Output Packets', info['acct_output_packets']);
    table += addRow('Input Octets', `${info['acct_input_octets']} (${octetsToMegabytes(info['acct_input_octets'])} Megabytes)`);
    table += addRow('Output Octets', `${info['acct_output_octets']} (${octetsToMegabytes(info['acct_output_octets'])} Megabytes)`);

    table += addHeader('Endpoint Details');
    table += addRow('MAC Address', info['calling_station_id']);
    table += addRow('Device IP Address', info['framed_ip_address']);
    table += addRow('Device Profile', info['endpoint_policy']);

    table += addHeader('Identity Info');
    table += addRow('Username', info['user_name']);
    table += addRow('Identity Group', info['identity_group']);
    table += addRow('Identity Store', info['identity_store']);

    table += addHeader('Network Device Info');
    table += addRow('Network Device Name', info['network_device_name']);
    table += addRow('Network Device Type', info['device_type']);
    table += addRow('Network Device Location', info['location']);
    table += addRow('Network Device IP', info['nas_ip_address']);
    table += addRow('Network Device Port', info['nas_port_id']);

    table += addHeader('Authentication Info');
    table += addRow('AuthC Timestamp', info['auth_acs_timestamp']);
    table += addRow('RADIUS Service Type', info['service_type']);
    table += addRow('AuthC Method', info['authentication_method']);
    table += addRow('AuthC Protocol', info['authentication_protocol']);
    table += addRow('ISE Node', info['acs_server']);
    table += addRow('Audit Session ID', info['audit_session_id']);
    table += addRow('Response Time (ms)', info['reponse_time']);

    table += addHeader('Authorization Info');
    table += addRow('AuthZ Profile(s)', info['selected_azn_profiles']);
    table += addRow('DACL', info['dacl']);
    table += addRow('CTS Security Group', info['cts_security_group']);
    table += addRow('RADIUS Response', `${authz_result}`);
    table += closeTable();

    table += openTable(small = true);
    table += addHeader('Detailed Execution Steps');

    steps = info['execution_steps'].split(',');
    steps.forEach(step => {
      table += addRow(step, messages[step].text);
    })
    table += closeTable();


    document.querySelector('#content').innerHTML = table;
    // This is to fix some random issue with the <table> tag adding 'undefined' to innerHTML
    document.querySelector('.table-responsive').childNodes[0].nodeValue = '';

    // Show code block with raw attributes (hidden by default).
    let pre = '';
    Object.keys(info).forEach(key => {
      pre += `<strong>${key}</strong>: ${info[key]} <br />`;
    });

    document.querySelector('#raw').innerHTML = pre;

    // Show/hide functionality for raw attributes
    document.querySelector('#show-raw').addEventListener("click", function () {
      if (document.querySelector('#raw').style.display != 'block') {
        document.querySelector('#raw').style.display = "block";
      }
      else if (document.querySelector('#raw').style.display == 'block') {
        document.querySelector('#raw').style.display = "none";
      }
    });
  }
});

function openTable(small = false) {
  if (small) {
    return `<table class="table table-sm table-hover">`;
  } else {
    return `<div class="table-responsive"><table class="table table-hover">`;
  }
}

function addHeader(header) {
  return `<thead class="bg-primary text-white text-center"><tr><th colspan="2">${header}</th></tr></thead>`;
}

function addRow(attr, value=undefined) {
  if (value) {
    return `<tr><th style="min-width: 250px;">${attr}</th><td>${value}</td></tr>`;
  }
}

function closeTable() {
  return `</table></div>`;
}

function octetsToMegabytes(octets) {
  return (((octets / 8) / 1024) / 1024).toPrecision(4);
}