const messages = {
    "3000": {
        "code": 3000,
        "severity": "NOTICE",
        "text": "RADIUS Accounting start request",
        "description": "RADIUS Accounting start request"
    },
    "3001": {
        "code": 3001,
        "severity": "NOTICE",
        "text": "RADIUS Accounting stop request",
        "description": "RADIUS Accounting stop request"
    },
    "3002": {
        "code": 3002,
        "severity": "NOTICE",
        "text": "RADIUS Accounting watchdog update",
        "description": "RADIUS Accounting watchdog update"
    },
    "3003": {
        "code": 3003,
        "severity": "NOTICE",
        "text": "RADIUS Accounting is on",
        "description": "RADIUS Accounting is on"
    },
    "3004": {
        "code": 3004,
        "severity": "NOTICE",
        "text": "RADIUS Accounting is off",
        "description": "RADIUS Accounting is off"
    },
    "3005": {
        "code": 3005,
        "severity": "NOTICE",
        "text": "RADIUS Accounting tunnel start request",
        "description": "RADIUS Accounting tunnel start request"
    },
    "3006": {
        "code": 3006,
        "severity": "NOTICE",
        "text": "RADIUS Accounting tunnel stop request",
        "description": "RADIUS Accounting tunnel stop request"
    },
    "3007": {
        "code": 3007,
        "severity": "NOTICE",
        "text": "RADIUS Accounting tunnel rejected",
        "description": "RADIUS Accounting tunnel rejected"
    },
    "3008": {
        "code": 3008,
        "severity": "NOTICE",
        "text": "RADIUS Accounting tunnel link start",
        "description": "RADIUS Accounting tunnel link start"
    },
    "3009": {
        "code": 3009,
        "severity": "NOTICE",
        "text": "RADIUS Accounting tunnel link stop",
        "description": "RADIUS Accounting tunnel link stop"
    },
    "3010": {
        "code": 3010,
        "severity": "NOTICE",
        "text": "RADIUS Accounting tunnel link rejected",
        "description": "RADIUS Accounting tunnel link rejected"
    },
    "3300": {
        "code": 3300,
        "severity": "NOTICE",
        "text": "TACACS+ Accounting with Command",
        "description": "Received a TACACS+ Accounting request containing a command"
    },
    "3301": {
        "code": 3301,
        "severity": "NOTICE",
        "text": "TACACS+ Accounting START",
        "description": "Received a TACACS+ Accounting START request"
    },
    "3302": {
        "code": 3302,
        "severity": "NOTICE",
        "text": "TACACS+ Accounting STOP",
        "description": "Received a TACACS+ Accounting STOP request"
    },
    "3303": {
        "code": 3303,
        "severity": "NOTICE",
        "text": "TACACS+ Accounting WATCHDOG",
        "description": "Received a TACACS+ Accounting WATCHDOG request"
    },
    "3304": {
        "code": 3304,
        "severity": "NOTICE",
        "text": "TACACS+ Accounting request rejected",
        "description": "Received a TACACS+ Accounting request but it has been rejected. See FailureReason for more information"
    },
    "5200": {
        "code": 5200,
        "severity": "NOTICE",
        "text": "Authentication succeeded",
        "description": "User authentication ended successfully"
    },
    "5201": {
        "code": 5201,
        "severity": "NOTICE",
        "text": "Authentication succeeded",
        "description": "User authentication ended successfully"
    },
    "5202": {
        "code": 5202,
        "severity": "NOTICE",
        "text": "Command Authorization succeeded",
        "description": "The requested Command Authorization passed"
    },
    "5203": {
        "code": 5203,
        "severity": "NOTICE",
        "text": "Session Authorization succeeded",
        "description": "The requested Session Authorization passed"
    },
    "5204": {
        "code": 5204,
        "severity": "NOTICE",
        "text": "Change password succeeded",
        "description": "User change password ended successfully"
    },
    "5205": {
        "code": 5205,
        "severity": "NOTICE",
        "text": "Dynamic Authorization succeeded",
        "description": "Dynamic Authorization succeeded"
    },
    "5206": {
        "code": 5206,
        "severity": "NOTICE",
        "text": "PAC provisioned",
        "description": "Access rejected after successful in-band PAC provisioning"
    },
    "5231": {
        "code": 5231,
        "severity": "NOTICE",
        "text": "Guest Authentication Passed",
        "description": "Guest Authentication Passed"
    },
    "5232": {
        "code": 5232,
        "severity": "NOTICE",
        "text": "DACL Download Succeeded",
        "description": "DACL Download Succeeded"
    },
    "5233": {
        "code": 5233,
        "severity": "NOTICE",
        "text": "TrustSec Data Download Succeeded",
        "description": "TrustSec Data Download Succeeded"
    },
    "5234": {
        "code": 5234,
        "severity": "NOTICE",
        "text": "TrustSec Peer Policy Download Succeeded",
        "description": "TrustSec Peer Policy Download Succeeded"
    },
    "5236": {
        "code": 5236,
        "severity": "NOTICE",
        "text": "Authorize-Only succeeded",
        "description": "Authorize-Only ended successfully"
    },
    "5237": {
        "code": 5237,
        "severity": "NOTICE",
        "text": "Device Registration Web Authentication Passed",
        "description": "Device Registration Web Authentication passed"
    },
    "5238": {
        "code": 5238,
        "severity": "WARN",
        "text": "Endpoint authentication problem was fixed",
        "description": "Endpoint authentication problem was fixed"
    },
    "5239": {
        "code": 5239,
        "severity": "WARN",
        "text": "NAS problem was fixed",
        "description": "NAS problem was fixed"
    },
    "5240": {
        "code": 5240,
        "severity": "INFO",
        "text": "Previously rejected endpoint was released to continue authentications",
        "description": "Previously rejected endpoint was released to continue authentications"
    },
    "5241": {
        "code": 5241,
        "severity": "NOTICE",
        "text": "RADIUS DTLS handshake succeeded",
        "description": "RADIUS DTLS handshake succeeded"
    },
    "5400": {
        "code": 5400,
        "severity": "NOTICE",
        "text": "Authentication failed",
        "description": "User authentication failed. See FailureReason for more information"
    },
    "5401": {
        "code": 5401,
        "severity": "NOTICE",
        "text": "Authentication failed",
        "description": "User authentication failed. See FailureReason for more information"
    },
    "5402": {
        "code": 5402,
        "severity": "NOTICE",
        "text": "Command Authorization failed",
        "description": "Command Authorization failed"
    },
    "5403": {
        "code": 5403,
        "severity": "NOTICE",
        "text": "Session Authorization failed",
        "description": "Session Authorization failed"
    },
    "5404": {
        "code": 5404,
        "severity": "NOTICE",
        "text": "Authorization failed",
        "description": "Authorization failed"
    },
    "5405": {
        "code": 5405,
        "severity": "NOTICE",
        "text": "RADIUS Request dropped",
        "description": "RADIUS request dropped"
    },
    "5406": {
        "code": 5406,
        "severity": "NOTICE",
        "text": "TACACS+ Request dropped",
        "description": "TACACS+ request dropped"
    },
    "5407": {
        "code": 5407,
        "severity": "NOTICE",
        "text": "TACACS+ Authorization failed",
        "description": "TACACS+ Authorization failed"
    },
    "5408": {
        "code": 5408,
        "severity": "NOTICE",
        "text": "Command Authorization encountered an error",
        "description": "Command Authorization encountered error. See FailureReason for more information"
    },
    "5409": {
        "code": 5409,
        "severity": "NOTICE",
        "text": "Session Authorization encountered an error",
        "description": "Session Authorization encountered an error. See FailureReason for more information"
    },
    "5410": {
        "code": 5410,
        "severity": "NOTICE",
        "text": "TACACS+ Authorization encountered an error",
        "description": "TACACS+ Authorization encountered an error"
    },
    "5411": {
        "code": 5411,
        "severity": "NOTICE",
        "text": "Supplicant stopped responding to ISE",
        "description": "Supplicant did not respond to the last message that ISE sent to it"
    },
    "5412": {
        "code": 5412,
        "severity": "NOTICE",
        "text": "TACACS+ authentication request ended with error",
        "description": "TACACS+ authentication request ended with an error"
    },
    "5413": {
        "code": 5413,
        "severity": "NOTICE",
        "text": "RADIUS Accounting-Request dropped",
        "description": "The RADIUS Accounting-Request was dropped."
    },
    "5414": {
        "code": 5414,
        "severity": "NOTICE",
        "text": "TACACS+ accounting has failed",
        "description": "TACACS+ accounting has failed. For more information, see the failure reason records."
    },
    "5415": {
        "code": 5415,
        "severity": "NOTICE",
        "text": "Change password failed",
        "description": "User change password failed. See FailureReason for more information."
    },
    "5416": {
        "code": 5416,
        "severity": "NOTICE",
        "text": "RADIUS PAP session cleaned up",
        "description": "The RADIUS PAP session has been cleaned up"
    },
    "5417": {
        "code": 5417,
        "severity": "NOTICE",
        "text": "Dynamic Authorization failed",
        "description": "Dynamic Authorization failed"
    },
    "5418": {
        "code": 5418,
        "severity": "NOTICE",
        "text": "Guest Authentication Failed",
        "description": "Guest Authentication failed; please see Failure code for more details"
    },
    "5419": {
        "code": 5419,
        "severity": "NOTICE",
        "text": "DACL Download Failed",
        "description": "DACL Download Failed"
    },
    "5420": {
        "code": 5420,
        "severity": "NOTICE",
        "text": "TrustSec Data Download Failed",
        "description": "TrustSec Data Download Failed"
    },
    "5421": {
        "code": 5421,
        "severity": "NOTICE",
        "text": "TrustSec Peer Policy Download Failed",
        "description": "TrustSec Peer Policy Download Failed"
    },
    "5422": {
        "code": 5422,
        "severity": "NOTICE",
        "text": "Authorize-Only failed",
        "description": "Authorize-Only failed. See FailureReason for more information"
    },
    "5423": {
        "code": 5423,
        "severity": "NOTICE",
        "text": "Device Registration Web Authentication Failed",
        "description": "Device Registration Web Authentication Failed"
    },
    "5434": {
        "code": 5434,
        "severity": "WARN",
        "text": "Endpoint conducted several failed authentications of the same scenario",
        "description": "Endpoint conducted several failed authentications of the same scenario"
    },
    "5435": {
        "code": 5435,
        "severity": "WARN",
        "text": "NAS conducted several failed authentications of the same scenario",
        "description": "NAS conducted several failed authentications of the same scenario"
    },
    "5436": {
        "code": 5436,
        "severity": "WARN",
        "text": "RADIUS packet already in the process",
        "description": "Ignoring this request because it is a duplicate of another packet that is currently being processed"
    },
    "5437": {
        "code": 5437,
        "severity": "WARN",
        "text": "Duplicate RADIUS packet for existing session but with different RADIUS parameters",
        "description": "A duplicate RADIUS request was detected for the packet that was already processed or for the packet that was already accepted but this time with at least one different parameter in Source IP, Source Port, RADIUS ID. Dropping. Possible unexpected NAD behavior."
    },
    "5438": {
        "code": 5438,
        "severity": "WARN",
        "text": "RADIUS packet contains session on this PSN that does not exist",
        "description": "Session was not found on this ISE. Possible unexpected NAD behavior. Session belongs to this ISE according to hostname but may has already been reaped by timeout. This packet arrived too late."
    },
    "5439": {
        "code": 5439,
        "severity": "WARN",
        "text": "RADIUS packet contains session not started on this PSN",
        "description": "Session does not belong to this ISE according to hostname. Possible unexpected NAD behavior. Maybe NAD sent a packet from the middle of the conversation with another ISE."
    },
    "5440": {
        "code": 5440,
        "severity": "WARN",
        "text": "Endpoint abandoned EAP session and started new",
        "description": "Endpoint started new authentication while previous is still in progress. Most probable that supplicant on that endpoint stopped conducting the previous authentication and started the new one. Closing the previous authentication."
    },
    "5441": {
        "code": 5441,
        "severity": "WARN",
        "text": "Endpoint started new session while the packet of previous session is being processed. Dropping new session.",
        "description": "Endpoint started new session while the packet of previous session is being processed"
    },
    "5442": {
        "code": 5442,
        "severity": "WARN",
        "text": "RADIUS request dropped due to system overload",
        "description": "A RADIUS request was dropped due to system overload. This condition can be caused by too many parallel authentication requests."
    },
    "5443": {
        "code": 5443,
        "severity": "WARN",
        "text": "RADIUS request dropped due to reaching EAP sessions limit",
        "description": "A RADIUS request was dropped due to reaching EAP sessions limit. This condition can be caused by too many parallel EAP authentication requests."
    },
    "5447": {
        "code": 5447,
        "severity": "NOTICE",
        "text": "MDM Authentication Passed",
        "description": "MDM Authentication passed"
    },
    "5448": {
        "code": 5448,
        "severity": "NOTICE",
        "text": "MDM Authentication Failed",
        "description": "MDM Authentication failed; please see Failure code for more details"
    },
    "5449": {
        "code": 5449,
        "severity": "WARN",
        "text": "Endpoint failed authentication of the same scenario several times and was rejected",
        "description": "Endpoint failed authentication of the same scenario several times and all further requests will be rejected for the duration of the Request Rejection Interval"
    },
    "5450": {
        "code": 5450,
        "severity": "NOTICE",
        "text": "RADIUS DTLS handshake failed",
        "description": "RADIUS DTLS handshake failed"
    },
    "5451": {
        "code": 5451,
        "severity": "INFO",
        "text": "Social Login: User did not grant permission for ISE application to read user's information from Facebook",
        "description": "Indicates that User did not grant permission for ISE application to read user's information from Facebook"
    },
    "5452": {
        "code": 5452,
        "severity": "WARN",
        "text": "Social Login: Error while getting Social User info",
        "description": "Indicates that there is an error while getting Social User info"
    },
    "10000": {
        "code": 10000,
        "severity": "DEBUG",
        "text": "Received Administrator authentication request",
        "description": "Handling incoming Administrator authentication request"
    },
    "10001": {
        "code": 10001,
        "severity": "ERROR",
        "text": "Internal error. Incorrect configuration version",
        "description": "An internal error occurred: Undetermined configuration version"
    },
    "10002": {
        "code": 10002,
        "severity": "ERROR",
        "text": "Internal error: Failure to load appropriate service",
        "description": "Internal error: Failure to load AAC service"
    },
    "10003": {
        "code": 10003,
        "severity": "ERROR",
        "text": "Internal error: Administrator authentication received blank Administrator name",
        "description": "Internal error: AAC RT component received Administrator authentication request with blank Administrator name"
    },
    "10004": {
        "code": 10004,
        "severity": "ERROR",
        "text": "Internal error: Administrator authentication received blank Administrator password",
        "description": "Internal error: AAC RT component received an Administrator authentication request with blank admin password"
    },
    "10005": {
        "code": 10005,
        "severity": "INFO",
        "text": "Administrator authenticated successfully",
        "description": "Administrator authenticated successfully"
    },
    "10006": {
        "code": 10006,
        "severity": "INFO",
        "text": "Administrator authentication failed",
        "description": "Administrator authentication failed"
    },
    "10007": {
        "code": 10007,
        "severity": "ERROR",
        "text": "Administrator authentication failed - DB Error",
        "description": "Administrator authentication failed - DB Error"
    },
    "10008": {
        "code": 10008,
        "severity": "DEBUG",
        "text": "Received valid Administrator authentication request",
        "description": "Received valid Administrator authentication request"
    },
    "10009": {
        "code": 10009,
        "severity": "DEBUG",
        "text": "Received Administrator authentication request",
        "description": "Successfully performed service selection"
    },
    "10010": {
        "code": 10010,
        "severity": "INFO",
        "text": "Admin password change reminder",
        "description": "Reminder - Please change the admin password"
    },
    "10011": {
        "code": 10011,
        "severity": "INFO",
        "text": "Admin password change required due to expired password",
        "description": "Admin password has expired -Please change it."
    },
    "10012": {
        "code": 10012,
        "severity": "INFO",
        "text": "Admin password change required due to account inactivity",
        "description": "Due to admin account inactivity the admin password must be changed."
    },
    "10013": {
        "code": 10013,
        "severity": "INFO",
        "text": "Admin account set as 'never disabled'",
        "description": "Admin account cannot be disabled since 'never disable' option is set."
    },
    "10014": {
        "code": 10014,
        "severity": "INFO",
        "text": "Admin account set to change password on next login",
        "description": "Admin account is set to change password at the next login"
    },
    "11001": {
        "code": 11001,
        "severity": "DEBUG",
        "text": "Received RADIUS Access-Request",
        "description": "Received RADIUS Access-Request"
    },
    "11002": {
        "code": 11002,
        "severity": "DEBUG",
        "text": "Returned RADIUS Access-Accept",
        "description": "Returned RADIUS Access-Accept - authentication succeeded"
    },
    "11003": {
        "code": 11003,
        "severity": "DEBUG",
        "text": "Returned RADIUS Access-Reject",
        "description": "Returned RADIUS Access-Reject - authentication failed"
    },
    "11004": {
        "code": 11004,
        "severity": "DEBUG",
        "text": "Received RADIUS Accounting-Request",
        "description": "Received RADIUS Accounting-Request"
    },
    "11005": {
        "code": 11005,
        "severity": "DEBUG",
        "text": "Returned RADIUS Accounting-Response",
        "description": "Returned RADIUS Accounting-Response - acknowledging receipt of Accounting-Request"
    },
    "11006": {
        "code": 11006,
        "severity": "DEBUG",
        "text": "Returned RADIUS Access-Challenge",
        "description": "Returned RADIUS Access-Challenge asking for additional information"
    },
    "11007": {
        "code": 11007,
        "severity": "DEBUG",
        "text": "Could not locate Network Device or AAA Client",
        "description": "Could not find the network device or the AAA Client while accessing NAS by IP during authentication."
    },
    "11008": {
        "code": 11008,
        "severity": "DEBUG",
        "text": "Received Service-Type = Call Check (but there is no Calling-Station-ID)",
        "description": "Although the request contained a Service-Type attribute with the value, Call Check (10), the Host Lookup UseCase was not detected. This is because the Calling-Station-ID attribute was not present in the request"
    },
    "11009": {
        "code": 11009,
        "severity": "INFO",
        "text": "RADIUS listener started",
        "description": "Started listening for incoming RADIUS requests on submitted ports"
    },
    "11010": {
        "code": 11010,
        "severity": "INFO",
        "text": "RADIUS listener stopped",
        "description": "Stopped listening for RADIUS requests"
    },
    "11011": {
        "code": 11011,
        "severity": "ERROR",
        "text": "RADIUS listener failed to open",
        "description": "Could not open one or more of the ports used to receive RADIUS requests"
    },
    "11012": {
        "code": 11012,
        "severity": "ERROR",
        "text": "RADIUS packet contains invalid header",
        "description": "The header of the RADIUS packet did not parse correctly"
    },
    "11014": {
        "code": 11014,
        "severity": "ERROR",
        "text": "RADIUS packet contains invalid attribute(s)",
        "description": "One of the attributes in the RADIUS packet did not parse correctly"
    },
    "11015": {
        "code": 11015,
        "severity": "WARN",
        "text": "An Access-Request MUST contain at least a NAS-IP-Address, NAS-IPv6-Address, or a NAS-Identifier; Continue processing",
        "description": "According to the RADIUS standard, an Access-Request MUST contain at least a NAS-IP-Address, NAS-IPv6-Address or a NAS-Identifier. This condition is ignored and processing continues."
    },
    "11016": {
        "code": 11016,
        "severity": "DEBUG",
        "text": "Translating EAP protocol result into RADIUS result",
        "description": "Translating EAP protocol result into RADIUS result"
    },
    "11017": {
        "code": 11017,
        "severity": "DEBUG",
        "text": "RADIUS created a new session",
        "description": "RADIUS created a new session for the request"
    },
    "11018": {
        "code": 11018,
        "severity": "DEBUG",
        "text": "RADIUS is re-using an existing session",
        "description": "RADIUS is re-using an existing session while processing this request"
    },
    "11019": {
        "code": 11019,
        "severity": "INFO",
        "text": "Selected DenyAccess Service",
        "description": "The Service Selection policy selected the DenyAccess Service"
    },
    "11020": {
        "code": 11020,
        "severity": "ERROR",
        "text": "RADIUS session authorization did not return a valid result",
        "description": "An unexpected error occurred. The RADIUS session authorization should return a valid result."
    },
    "11021": {
        "code": 11021,
        "severity": "ERROR",
        "text": "RADIUS could not decipher password. packet missing necessary attributes",
        "description": "RADIUS could not decipher password because the packet does not have the necessary attributes"
    },
    "11022": {
        "code": 11022,
        "severity": "DEBUG",
        "text": "Added the dACL specified in the Authorization Profile",
        "description": "The Downloadable ACL (dACL) specified in the Authorization Profile, was added to the set of attributes that should be returned in the response"
    },
    "11023": {
        "code": 11023,
        "severity": "WARN",
        "text": "The requested dACL is not found. This is an unknown dACL name",
        "description": "Could not find the Downloadable ACL (dACL) specified in the Authorization Profile"
    },
    "11024": {
        "code": 11024,
        "severity": "ERROR",
        "text": "The Access-Request for the requested dACL is missing a Message-Authenticator attribute. The request is rejected",
        "description": "The Access-Request does not have a Message-Authenticator attribute that is required for Downloadable ACL requests. The request is rejected because of this"
    },
    "11025": {
        "code": 11025,
        "severity": "ERROR",
        "text": "The Access-Request for the requested dACL is missing a cisco-av-pair attribute with the value aaa:event=acl-download. The request is rejected",
        "description": "The Access-Request is missing a cisco-av-pair attribute with the value aaa:event=acl-download that is required for Downloadable ACL requests. The request is rejected because of this."
    },
    "11026": {
        "code": 11026,
        "severity": "ERROR",
        "text": "The requested dACL is not found",
        "description": "The version of the Downloadable ACL requested in the Access-Request is not found. The request is rejected because of this."
    },
    "11027": {
        "code": 11027,
        "severity": "DEBUG",
        "text": "Detected Host Lookup UseCase (Service-Type = Call Check (10))",
        "description": "Detected Host Lookup UseCase (Service-Type = Call Check (10))"
    },
    "11028": {
        "code": 11028,
        "severity": "DEBUG",
        "text": "Detected Host Lookup UseCase (UserName = Calling-Station-ID)",
        "description": "Detected Host Lookup UseCase (UserName = Calling-Station-ID)"
    },
    "11029": {
        "code": 11029,
        "severity": "WARN",
        "text": "Unsupported RADIUS packet type",
        "description": "The RADIUS packet type is not supported by ISE"
    },
    "11030": {
        "code": 11030,
        "severity": "WARN",
        "text": "Pre-parsing of the RADIUS packet failed",
        "description": "Pre-parsing of the RADIUS packet failed. This packet does not appear to be a valid RADIUS packet"
    },
    "11031": {
        "code": 11031,
        "severity": "WARN",
        "text": "RADIUS packet type is not a valid Request",
        "description": "RADIUS packet type is not a valid Request."
    },
    "11032": {
        "code": 11032,
        "severity": "INFO",
        "text": "Selected Access Service type is not Device Administration",
        "description": "TACACS+ requests can only be processed by Access Services that are of type Device Administration"
    },
    "11033": {
        "code": 11033,
        "severity": "INFO",
        "text": "Selected Service type is not Network Access",
        "description": "RADIUS requests can only be processed by Access Services that are of type Network Access"
    },
    "11034": {
        "code": 11034,
        "severity": "DEBUG",
        "text": "Process Host Lookup is disabled. (Service-Type = Call Check (10) cannot be applied)",
        "description": "Process Host Lookup option was not enabled in the Allowed Protocols; so the earlier detection of Service-Type = Call Check (10) is ignored"
    },
    "11035": {
        "code": 11035,
        "severity": "WARN",
        "text": "The session associated with the requested dACL has timed out",
        "description": "The session associated with the requested Downloadable ACL (dACL) has timed out. The request is rejected"
    },
    "11036": {
        "code": 11036,
        "severity": "WARN",
        "text": "The Message-Authenticator RADIUS attribute is invalid",
        "description": "The Message-Authenticator RADIUS attribute is invalid. This maybe because of mismatched Shared Secrets."
    },
    "11037": {
        "code": 11037,
        "severity": "ERROR",
        "text": "Dropped accounting request received via unsupported port",
        "description": "Accounting request was dropped because it was received via an unsupported UDP port number."
    },
    "11038": {
        "code": 11038,
        "severity": "WARN",
        "text": "RADIUS Accounting-Request header contains invalid Authenticator field",
        "description": "ISE cannot validate the Authenticator field in the header of the RADIUS Accounting-Request packet. Note that the Authenticator field should not be confused with the Message-Authenticator RADIUS attribute."
    },
    "11039": {
        "code": 11039,
        "severity": "INFO",
        "text": "RADIUS authentication request rejected due to critical logging error",
        "description": "A RADIUS authentication request was rejected due to a critical logging error."
    },
    "11040": {
        "code": 11040,
        "severity": "INFO",
        "text": "RADIUS accounting request dropped due to critical logging error",
        "description": "The RADIUS accounting request was dropped due to a critical logging error."
    },
    "11041": {
        "code": 11041,
        "severity": "WARN",
        "text": "RADIUS PAP session timed out",
        "description": "A RADIUS PAP session timed out."
    },
    "11042": {
        "code": 11042,
        "severity": "DEBUG",
        "text": "Received duplicate RADIUS request; retransmitting previous response",
        "description": "Received a duplicate RADIUS request. Retransmitting the previously transmitted corresponding RADIUS response."
    },
    "11043": {
        "code": 11043,
        "severity": "DEBUG",
        "text": "Received RADIUS CoA request",
        "description": "Received RADIUS CoA request"
    },
    "11044": {
        "code": 11044,
        "severity": "DEBUG",
        "text": "Received RADIUS disconnect request",
        "description": "Received RADIUS disconnect request"
    },
    "11045": {
        "code": 11045,
        "severity": "DEBUG",
        "text": "Returned RADIUS CoA ACK",
        "description": "Returned RADIUS CoA ACK"
    },
    "11046": {
        "code": 11046,
        "severity": "DEBUG",
        "text": "Returned RADIUS CoA NAK",
        "description": "Returned RADIUS CoA NAK"
    },
    "11047": {
        "code": 11047,
        "severity": "DEBUG",
        "text": "Returned RADIUS disconnect ACK",
        "description": "Returned RADIUS disconnect ACK"
    },
    "11048": {
        "code": 11048,
        "severity": "DEBUG",
        "text": "Returned RADIUS disconnect NAK",
        "description": "Returned RADIUS disconnect NAK"
    },
    "11049": {
        "code": 11049,
        "severity": "INFO",
        "text": "Settings of RADIUS default network device will be used",
        "description": "Settings of RADIUS default network device will be used"
    },
    "11051": {
        "code": 11051,
        "severity": "WARN",
        "text": "RADIUS packet contains invalid state attribute",
        "description": "The state attribute in the RADIUS packet did not match any active session."
    },
    "11052": {
        "code": 11052,
        "severity": "ERROR",
        "text": "Authentication request dropped due to unsupported port number",
        "description": "An authentication request was dropped because it was received through an unsupported port number."
    },
    "11053": {
        "code": 11053,
        "severity": "WARN",
        "text": "Invalid attributes in outgoing radius packet - possibly some attributes exceeded their size limit",
        "description": "The RADIUS response packet is invalid. A likely reason is that at least one of the attributes has exceeded its allowed length or that the total size of the attributes attached to this response packet exceeded 4k (max radius packet size)"
    },
    "11054": {
        "code": 11054,
        "severity": "WARN",
        "text": "Request from a non-wireless device was dropped due to installed Wireless license",
        "description": "The RADIUS request from a non-wireless device was dropped because the installed license is for wireless devices only"
    },
    "11055": {
        "code": 11055,
        "severity": "INFO",
        "text": "User name change detected for the session. Attributes for the session will be removed from the cache",
        "description": "User name change detected for the session. Attributes for the session will be removed from the cache"
    },
    "11056": {
        "code": 11056,
        "severity": "INFO",
        "text": "Duplicate of previously processed (but not the last) RADIUS Request packet received",
        "description": "Duplicate of previously processed (but not the last) RADIUS Request packet received"
    },
    "11057": {
        "code": 11057,
        "severity": "WARN",
        "text": "The Access-Request for the requested RADIUS is missing",
        "description": "Please mention that Message-Authenticator RADIUS attribute is configured as mandatory in Allowed Protocols"
    },
    "11100": {
        "code": 11100,
        "severity": "DEBUG",
        "text": "RADIUS-Client about to send request",
        "description": "RADIUS-Client about to send request"
    },
    "11101": {
        "code": 11101,
        "severity": "DEBUG",
        "text": "RADIUS-Client received response",
        "description": "RADIUS-Client received a response"
    },
    "11102": {
        "code": 11102,
        "severity": "DEBUG",
        "text": "RADIUS-Client silently discarded invalid response",
        "description": "RADIUS-Client silently discarded an invalid response"
    },
    "11103": {
        "code": 11103,
        "severity": "ERROR",
        "text": "RADIUS-Client encountered error during processing flow",
        "description": "RADIUS-Client encountered an error during processing flow"
    },
    "11104": {
        "code": 11104,
        "severity": "DEBUG",
        "text": "RADIUS-Client request timeout expired",
        "description": "RADIUS-Client request timeout expired"
    },
    "11105": {
        "code": 11105,
        "severity": "DEBUG",
        "text": "Request received from a device that is configured with KeyWrap in ISE.",
        "description": "Request received from a device that is configured with KeyWrap in ISE."
    },
    "11106": {
        "code": 11106,
        "severity": "DEBUG",
        "text": "Error in KeyWrap configuration",
        "description": "Error in KeyWrap configuration"
    },
    "11107": {
        "code": 11107,
        "severity": "DEBUG",
        "text": "Required attributes for KeyWrap are missing",
        "description": "Required attributes for KeyWrap are missing"
    },
    "11108": {
        "code": 11108,
        "severity": "DEBUG",
        "text": "Missing required EapMessage attribute for KeyWrap",
        "description": "The RADIUS request from a KeyWrap enabled device is missing the required EapMessage attribute"
    },
    "11109": {
        "code": 11109,
        "severity": "DEBUG",
        "text": "RADIUS request improperly contains both KeyWrap and MessageAuthenticator attributes",
        "description": "RADIUS request improperly contains both KeyWrap and MessageAuthenticator attributes"
    },
    "11110": {
        "code": 11110,
        "severity": "DEBUG",
        "text": "Request received from a KeyWrap enabled device. The TunnelPassword attribute is present in KeyWrap.",
        "description": "Request received from a KeyWrap enabled device. The TunnelPassword attribute is present in KeyWrap."
    },
    "11111": {
        "code": 11111,
        "severity": "DEBUG",
        "text": "RADIUS request has been received with KeyWrap attributes. However, KeyWrap is not configured for the requesting device in ISE.",
        "description": "RADIUS request has been received with KeyWrap attributes. However, KeyWrap is not configured for the requesting device in ISE."
    },
    "11112": {
        "code": 11112,
        "severity": "DEBUG",
        "text": "KeyWrap keys accepted from PAC_OPAQUE.",
        "description": "KeyWrap keys accepted from PAC_OPAQUE."
    },
    "11113": {
        "code": 11113,
        "severity": "DEBUG",
        "text": "KeyWrap is not supported in Proxy.",
        "description": "KeyWrap is not supported in Proxy."
    },
    "11114": {
        "code": 11114,
        "severity": "DEBUG",
        "text": "KeyWrap parameters on RADIUS request packet are not compatible with the earlier KeyWrap request in this session.",
        "description": "KeyWrap parameters on RADIUS request packet are not compatible with the earlier KeyWrap request in this session."
    },
    "11115": {
        "code": 11115,
        "severity": "ERROR",
        "text": "The AAA Client Message Authenticator Code Key does not match the configured ISE Server Message Authenticator Code Key.",
        "description": "The AAA Client Message Authenticator Code Key does not match the configured ISE Server Message Authenticator Code Key."
    },
    "11116": {
        "code": 11116,
        "severity": "DEBUG",
        "text": "Stitched existing session from Session Cache",
        "description": "Stitched existing session from Session Cache. Session ID is reused."
    },
    "11117": {
        "code": 11117,
        "severity": "DEBUG",
        "text": "Generated a new session ID",
        "description": "Generated a new session ID based on the Radius attributes"
    },
    "11200": {
        "code": 11200,
        "severity": "ERROR",
        "text": "Received invalid dynamic authorization request",
        "description": "An invalid dynamic authorization request was received."
    },
    "11201": {
        "code": 11201,
        "severity": "DEBUG",
        "text": "Received disconnect dynamic authorization request",
        "description": "A disconnect dynamic authorization request was received"
    },
    "11202": {
        "code": 11202,
        "severity": "DEBUG",
        "text": "Received disconnect and port shutdown dynamic authorization request",
        "description": "A disconnect and port shutdown dynamic authorization request was received"
    },
    "11203": {
        "code": 11203,
        "severity": "DEBUG",
        "text": "Received disconnect and port bounce dynamic authorization request",
        "description": "A disconnect and port bounce dynamic authorization request was received"
    },
    "11204": {
        "code": 11204,
        "severity": "DEBUG",
        "text": "Received reauthenticate request",
        "description": "A reauthenticate request was received"
    },
    "11205": {
        "code": 11205,
        "severity": "ERROR",
        "text": "Could not find Network Access Device",
        "description": "Cannot find the Network Access Device designated for applying dynamic authorization change."
    },
    "11206": {
        "code": 11206,
        "severity": "ERROR",
        "text": "Could not find Client ISE Node",
        "description": "Cannot find the Client ISE Node."
    },
    "11207": {
        "code": 11207,
        "severity": "DEBUG",
        "text": "Received disconnect dynamic authorization response",
        "description": "A disconnect dynamic authorization response has been received"
    },
    "11208": {
        "code": 11208,
        "severity": "DEBUG",
        "text": "Received disconnect and port shutdown dynamic authorization response",
        "description": "A disconnect and port shutdown dynamic authorization response has been received"
    },
    "11209": {
        "code": 11209,
        "severity": "DEBUG",
        "text": "Received disconnect and port bounce dynamic authorization response",
        "description": "Received disconnect and port bounce dynamic authorization response."
    },
    "11210": {
        "code": 11210,
        "severity": "DEBUG",
        "text": "Received a reauthenticate response",
        "description": "Received a reauthenticate response."
    },
    "11211": {
        "code": 11211,
        "severity": "DEBUG",
        "text": "Proxying request to Dynamic Authorization Client ISE",
        "description": "Forwarding your request to Dynamic Authorization Client in ISE."
    },
    "11212": {
        "code": 11212,
        "severity": "DEBUG",
        "text": "Forwarding your request to Network Access Device",
        "description": "Forwarding your request to Network Access Device."
    },
    "11213": {
        "code": 11213,
        "severity": "WARN",
        "text": "No response received from Network Access Device after sending a Dynamic Authorization request",
        "description": "No response received from Network Access Device after sending a Dynamic Authorization request"
    },
    "11214": {
        "code": 11214,
        "severity": "WARN",
        "text": "An invalid response received from Network Access Device",
        "description": "An invalid response received from Network Access Device."
    },
    "11215": {
        "code": 11215,
        "severity": "WARN",
        "text": "No response has been received from Dynamic Authorization Client in ISE",
        "description": "No response has been received from Dynamic Authorization Client in ISE."
    },
    "11216": {
        "code": 11216,
        "severity": "ERROR",
        "text": "The Internal Proxy PAC generation has failed",
        "description": "The Internal Proxy PAC generation has failed."
    },
    "11217": {
        "code": 11217,
        "severity": "DEBUG",
        "text": "Prepared the disconnect dynamic authorization request",
        "description": "Prepared the disconnect dynamic authorization request."
    },
    "11218": {
        "code": 11218,
        "severity": "DEBUG",
        "text": "Prepared the disconnect and port shutdown dynamic authorization request",
        "description": "Prepared the disconnect and port shutdown dynamic authorization request."
    },
    "11219": {
        "code": 11219,
        "severity": "DEBUG",
        "text": "Prepared the disconnect and port bounce dynamic authorization request",
        "description": "Prepared the disconnect and port bounce dynamic authorization request."
    },
    "11220": {
        "code": 11220,
        "severity": "DEBUG",
        "text": "Prepared the reauthenticate request",
        "description": "Prepared the reauthenticate request."
    },
    "11221": {
        "code": 11221,
        "severity": "DEBUG",
        "text": "Received a disconnect dynamic authorization ACK response",
        "description": "Received a disconnect dynamic authorization ACK response."
    },
    "11222": {
        "code": 11222,
        "severity": "DEBUG",
        "text": "Received a disconnect dynamic authorization NAK response",
        "description": "Received a disconnect dynamic authorization NAK response."
    },
    "11223": {
        "code": 11223,
        "severity": "DEBUG",
        "text": "Received a dynamic authorization CoA ACK response",
        "description": "Received a dynamic authorization CoA ACK response."
    },
    "11224": {
        "code": 11224,
        "severity": "DEBUG",
        "text": "Received a dynamic authorization CoA NAK response",
        "description": "Received a dynamic authorization CoA NAK response."
    },
    "11225": {
        "code": 11225,
        "severity": "INFO",
        "text": "The dynamic authorization request was rejected due to a critical logging error",
        "description": "The dynamic authorization request was rejected due to a critical logging error."
    },
    "11226": {
        "code": 11226,
        "severity": "ERROR",
        "text": "ISE Proxy Node, functioning as Dynamic Authorization Client, is deregistered from the deployment",
        "description": "ISE Proxy Node, functioning as Dynamic Authorization Client, is deregistered from the deployment."
    },
    "11227": {
        "code": 11227,
        "severity": "ERROR",
        "text": "ISE Proxy Node, functioning as Dynamic Authorization Client, is marked as inactive in the deployment",
        "description": "ISE Proxy Node, functioning as Dynamic Authorization Client, is marked as inactive in the deployment."
    },
    "11300": {
        "code": 11300,
        "severity": "WARN",
        "text": "Could not locate TrustSec Device",
        "description": "Could not find an TrustSec device using the SGA ID."
    },
    "11301": {
        "code": 11301,
        "severity": "INFO",
        "text": "TrustSec Device found",
        "description": "Succeeded in locating the TrustSec device using the TrustSec ID."
    },
    "11302": {
        "code": 11302,
        "severity": "WARN",
        "text": "Received Secure RADIUS request without a cts-pac-opaque cisco-av-pair attribute",
        "description": "The request does not have a cisco-av-pair attribute starting with the value cts-pac-opaque. This value is a required attribute for Secure RADIUS requests."
    },
    "11303": {
        "code": 11303,
        "severity": "WARN",
        "text": "Could not parse the cts-pac-opaque attribute",
        "description": "The cts-pac-opaque cisco-av-pair attribute contained in the Secure RADIUS request did not parse."
    },
    "11304": {
        "code": 11304,
        "severity": "WARN",
        "text": "Could not retrieve requested Security Group Tag",
        "description": "The request for a Security Group Tag contains a non-exist value."
    },
    "11305": {
        "code": 11305,
        "severity": "INFO",
        "text": "Could not retrieve requested Security Group ACL",
        "description": "The request for a Security Group ACL contains a non-exist value."
    },
    "11306": {
        "code": 11306,
        "severity": "WARN",
        "text": "PAC has expired",
        "description": "The PAC received in the cts-pac-opaque RADIUS attribute has expired."
    },
    "11307": {
        "code": 11307,
        "severity": "ERROR",
        "text": "Incorrect RADIUS CHAP attribute",
        "description": "Incorrect RADIUS CHAP attribute."
    },
    "11308": {
        "code": 11308,
        "severity": "ERROR",
        "text": "Incorrect RADIUS MS-CHAP v1 attribute",
        "description": "Incorrect RADIUS MS-CHAP v1 attribute."
    },
    "11309": {
        "code": 11309,
        "severity": "ERROR",
        "text": "Incorrect RADIUS MS-CHAP v2 attribute",
        "description": "Incorrect RADIUS MS-CHAP v2 attribute."
    },
    "11310": {
        "code": 11310,
        "severity": "INFO",
        "text": "Sent Security Group Access Control List to client",
        "description": "Successfully sent the Security Group Access Control List to the client."
    },
    "11311": {
        "code": 11311,
        "severity": "INFO",
        "text": "Failed to locate ACE of Security Group Access Control List",
        "description": "Failed to locate the ACE number in the Security Group Access Control List."
    },
    "11312": {
        "code": 11312,
        "severity": "INFO",
        "text": "Sent fragmented Security Group Access Control List data to client; awaiting follow-up request to download remaining ACEs",
        "description": "Successfully sent fragmented Security Group Access Control List data to the client."
    },
    "11313": {
        "code": 11313,
        "severity": "WARN",
        "text": "ISE detected that the Unknown SGT was provisioned to a network device or endpoint.",
        "description": "ISE provisioned the Unknown SGT as part of the authorization flow. Unknown SGT should not be assigned as part of a known flow"
    },
    "11314": {
        "code": 11314,
        "severity": "WARN",
        "text": "ISE detected a malformed TrustSec PAC.",
        "description": "ISE could not parse a TrustSec PAC recieved from device."
    },
    "11315": {
        "code": 11315,
        "severity": "WARN",
        "text": "TrustSec environment data request failed",
        "description": "ISE recieved illigal Environment Data request"
    },
    "11316": {
        "code": 11316,
        "severity": "WARN",
        "text": "TrustSec CoA message ignored",
        "description": "ISE sent a TrustSec CoA message and didn't receive a response. Verify network device is CoA capable. Check network device configuration"
    },
    "11317": {
        "code": 11317,
        "severity": "WARN",
        "text": "TrustSec SSH connection failed",
        "description": "ISE failed to establish SSH connection to a network device. Verify network device SSH credentials in the Network Device page are similar to the credentials configured on the network device. Check network device enabled ssh connections from ISE (ip address)"
    },
    "11318": {
        "code": 11318,
        "severity": "WARN",
        "text": "Some TrustSec network devices don't have the latest ISE IP-SGT mapping configuration",
        "description": "ISE identified some network devices have a different IP-SGT mapping sets then ISE. Use the IP-SGT mapping Deploy option to update the devices"
    },
    "11319": {
        "code": 11319,
        "severity": "WARN",
        "text": "TrustSec works only with TLS 1.0",
        "description": "TrustSec works only with TLS1.0, if you plan to use TrustSec, make sure it is enabled"
    },
    "11320": {
        "code": 11320,
        "severity": "DEBUG",
        "text": "Sent fragmented Environment data to client; awaiting follow-up request to download remaining data",
        "description": "Successfully sent fragmented Environment data to the client."
    },
    "11321": {
        "code": 11321,
        "severity": "WARN",
        "text": "TrustSec default egress policy was modified",
        "description": "The TrustSec default egress policy cell was modified, make sure it is aligned with your security policy"
    },
    "11322": {
        "code": 11322,
        "severity": "INFO",
        "text": "Trustsec egress policy was successfully downloaded",
        "description": "Trustsec egress policy was successfully downloaded"
    },
    "11323": {
        "code": 11323,
        "severity": "INFO",
        "text": "Failed to download Trustsec egress policy",
        "description": "Failed to download Trustsec egress policy"
    },
    "11324": {
        "code": 11324,
        "severity": "WARN",
        "text": "Failed to send mail regarding workflow operation",
        "description": "Failed to send mail regarding workflow operation"
    },
    "11325": {
        "code": 11325,
        "severity": "INFO",
        "text": "Trustsec security group access control list (SGACL) was successfully downloaded",
        "description": "Successfully sent Security Group Access Control List data to the client."
    },
    "11350": {
        "code": 11350,
        "severity": "WARN",
        "text": "Detected proxy loop; dropping request",
        "description": "ISE has detected a proxy loop, because the IP address of this ISE server is already present in the sequence of RADIUS proxy servers that have forwarded this RADIUS request. In order to avoid the senseless further forwarding of this request in an endless proxy loop, ISE has dropped this request."
    },
    "11351": {
        "code": 11351,
        "severity": "WARN",
        "text": "Failed to read RADIUS server sequence configuration; dropping request",
        "description": "ISE detected an error when trying to read the RADIUS server sequence configuration. Dropping the request."
    },
    "11352": {
        "code": 11352,
        "severity": "WARN",
        "text": "Response Proxy-State attribute validation failed",
        "description": "Response Proxy-State attribute must contain this ISE stamp to allow verification that the response from external RADIUS server matches the request sent to it. Verification failed. Dropping the request."
    },
    "11353": {
        "code": 11353,
        "severity": "WARN",
        "text": "No more external RADIUS servers; can't perform failover",
        "description": "Failover is not possible because no more external RADIUS servers are configured. Dropping the request."
    },
    "11354": {
        "code": 11354,
        "severity": "WARN",
        "text": "Accounting request received but neither local nor remote accounting is configured",
        "description": "An accounting request was received; however, neither local nor remote accounting is configured."
    },
    "11355": {
        "code": 11355,
        "severity": "INFO",
        "text": "Start forwarding request to remote RADIUS server",
        "description": "The request is being forwarded to the next remote RADIUS server from the list configured for the selected ISE proxy service."
    },
    "11356": {
        "code": 11356,
        "severity": "WARN",
        "text": "Failed to forward request to current remote RADIUS server",
        "description": "Current remote RADIUS server has failed to process the forwarded request due to any of the following reasons: The remote RADIUS server is down ; The remote RADIUS server is not configured properly ; The remote RADIUS server dropped the request."
    },
    "11357": {
        "code": 11357,
        "severity": "INFO",
        "text": "Successfully forwarded request to current remote RADIUS server",
        "description": "Current remote RADIUS server successfully processed the forwarded request and replied with a valid response, which is being forwarded back to the NAS."
    },
    "11358": {
        "code": 11358,
        "severity": "INFO",
        "text": "Received request for RADIUS server sequence.",
        "description": "The RADIUS server sequence has received an incoming request. Validating the request and preparing to forward it to a configured external RADIUS server."
    },
    "11359": {
        "code": 11359,
        "severity": "INFO",
        "text": "Failed to forward request to current remote RADIUS server; an invalid response was received",
        "description": "The current remote RADIUS server has replied with an invalid response that would be forwarded to the next remote RADIUS server, if available."
    },
    "11360": {
        "code": 11360,
        "severity": "WARN",
        "text": "RADIUS server sequence failed to validate incoming request",
        "description": "RADIUS server sequence failed to validate the incoming request."
    },
    "11361": {
        "code": 11361,
        "severity": "INFO",
        "text": "Valid incoming authentication request",
        "description": "The RADIUS server sequence has received a valid incoming authentication request."
    },
    "11362": {
        "code": 11362,
        "severity": "INFO",
        "text": "Valid incoming accounting request",
        "description": "The RADIUS server sequence has received a valid incoming accounting request."
    },
    "11363": {
        "code": 11363,
        "severity": "INFO",
        "text": "RADIUS server sequence performing local accounting",
        "description": "The RADIUS server sequence is performing a local accounting based on the incoming accounting request received."
    },
    "11364": {
        "code": 11364,
        "severity": "INFO",
        "text": "RADIUS server sequence performing remote accounting",
        "description": "The RADIUS server sequence is performing a remote accounting based on the incoming accounting request received."
    },
    "11365": {
        "code": 11365,
        "severity": "INFO",
        "text": "Modify attributes before sending request to external radius server",
        "description": "The RADIUS server sequence is modifing attributes before sending request to external radius server"
    },
    "11366": {
        "code": 11366,
        "severity": "INFO",
        "text": "Modify attributes before sending RADIUS Access-Accept",
        "description": "The RADIUS server sequence is modify attributes before sending RADIUS-accept."
    },
    "11367": {
        "code": 11367,
        "severity": "INFO",
        "text": "Could not add attribute(s) since attribute already exist",
        "description": "Could not add attribute(s) to the request since attribute already exist and the attribute is not multiple allowed."
    },
    "11368": {
        "code": 11368,
        "severity": "DEBUG",
        "text": "Please review logs on the External RADIUS Server to determine the precise failure reason.",
        "description": "Please review logs on the External RADIUS Server to determine the precise failure reason."
    },
    "11369": {
        "code": 11369,
        "severity": "WARN",
        "text": "Proxy request was rejected, as the external RADIUS server that handled previous related EAP messages is now down",
        "description": "ISE received an RADIUS proxy request but the external RADIUS server that handled previous related EAP messages is now down. Without the context of the previous EAP messages, there is no point in sending this request to another external RADIUS server"
    },
    "11400": {
        "code": 11400,
        "severity": "WARN",
        "text": "EAP-MSCHAP password change not allowed by the Allowed Protocols",
        "description": "The attempt to change the password failed because password change for the MS-CHAPv2 inner method is disabled in Allowed Protocols."
    },
    "11401": {
        "code": 11401,
        "severity": "INFO",
        "text": "Prepared RADIUS Access-Reject after the successful in-band PAC provisioning",
        "description": "As part of the standard in-band PAC provisioning behavior, a result of EAP-Failure and RADIUS Access-Reject will be returned, even when the PAC request was successfully approved. This admittedly-misleading result value is nevertheless normal, does not truly imply a failure, and can/should be safely ignored. (Most likely, the ISE logs will show a subsequent EAP-FAST conversation for this user attempting to actually authenticate using the PAC that was currently provisioned.)"
    },
    "11402": {
        "code": 11402,
        "severity": "WARN",
        "text": "EAP-GTC password change not allowed by the Allowed Protocols",
        "description": "The attempt to change the password failed because the relevant Allowed Protocols does not allow password change for the EAP-GTC inner method."
    },
    "11500": {
        "code": 11500,
        "severity": "WARN",
        "text": "Invalid or unexpected EAP payload received",
        "description": "Internal error, possibly in the supplicant: Could not validate an EAP payload."
    },
    "11501": {
        "code": 11501,
        "severity": "WARN",
        "text": "Invalid EAP payload",
        "description": "Internal error, possibly in the supplicant: Could not validate an EAP payload."
    },
    "11502": {
        "code": 11502,
        "severity": "WARN",
        "text": "EAP packet contains invalid type",
        "description": "Internal error, possibly in the supplicant: The EAP packet contains an invalid EAP type; Could not find a corresponding protocol handler."
    },
    "11503": {
        "code": 11503,
        "severity": "INFO",
        "text": "Prepared EAP-Success",
        "description": "Created an EAP-Success packet, to be attached to a RADIUS message."
    },
    "11504": {
        "code": 11504,
        "severity": "INFO",
        "text": "Prepared EAP-Failure",
        "description": "Created an EAP-Failure packet, to be attached to a RADIUS message."
    },
    "11506": {
        "code": 11506,
        "severity": "INFO",
        "text": "Prepared EAP-Request/Identity",
        "description": "Created an EAP-Request/Identity packet, to be attached to a RADIUS message."
    },
    "11507": {
        "code": 11507,
        "severity": "INFO",
        "text": "Extracted EAP-Response/Identity",
        "description": "Extracted an EAP-Response/Identity packet from the RADIUS message."
    },
    "11508": {
        "code": 11508,
        "severity": "WARN",
        "text": "EAP-Response/Identity contains invalid identity data",
        "description": "As part of fallback processing due to an invalid PAC, the inner method extracted an EAP-Response/Identity packet. Since this packet's identity data does not match the originally received identity, it is considered as invalid."
    },
    "11509": {
        "code": 11509,
        "severity": "WARN",
        "text": "Allowed Protocols does not allow any EAP protocols",
        "description": "EAP-negotiation failed because the Allowed Protocols has no EAP-based protocols enabled."
    },
    "11510": {
        "code": 11510,
        "severity": "WARN",
        "text": "Supplicant declined EAP method selected by Authentication Policy but did not propose another one; EAP negotiation failed",
        "description": "In previous EAP message ISE started an EAP method selected by Authentication Policy. Supplicant declined this EAP method by sending EAP NAK message but did not propose another EAP method that it is ready to conduct. Owing to this, EAP-negotiation failed."
    },
    "11511": {
        "code": 11511,
        "severity": "WARN",
        "text": "Extracted EAP-Response/NAK packet not requesting any EAP protocols; EAP-negotiation failed",
        "description": "An invalid EAP-Response/NAK packet was extracted from the RADIUS message. This packet rejected the EAP-based protocol that was proposed earlier. However, it is not requesting any other protocols, based on the configuration of the client's supplicant."
    },
    "11512": {
        "code": 11512,
        "severity": "INFO",
        "text": "Extracted EAP-Response/NAK packet requesting to use unsupported EAP protocol; EAP-negotiation failed",
        "description": "Extracted from the RADIUS message an EAP-Response/NAK packet, rejecting the previously-proposed EAP-based protocol, and requesting to use another protocol instead, per the configuration of the client's supplicant. However, the requested EAP-based protocol is currently not supported by ISE."
    },
    "11513": {
        "code": 11513,
        "severity": "WARN",
        "text": "Extracted second EAP-Response/NAK in current EAP conversation; failed to negotiate EAP",
        "description": "For the second time in the current EAP conversation, extracted from the RADIUS message an EAP-Response/NAK packet rejecting the previously-proposed EAP-based protocol."
    },
    "11514": {
        "code": 11514,
        "severity": "WARN",
        "text": "Unexpectedly received empty TLS message; treating as a rejection by the client",
        "description": "While trying to negotiate a TLS handshake with the client, ISE expected to receive a non-empty TLS message or TLS alert message, but instead received an empty TLS message. This could be due to an inconformity in the implementation of the protocol between ISE and the supplicant. For example, it is a known issue that the XP supplicant sends an empty TLS message instead of a non-empty TLS alert message. It might also involve the supplicant not trusting the ISE server certificate for some reason. ISE treated the unexpected message as a sign that the client rejected the tunnel establishment."
    },
    "11515": {
        "code": 11515,
        "severity": "WARN",
        "text": "Supplicant declined inner EAP method selected by Authentication Policy but did not proposed another one; inner EAP negotiation failed",
        "description": "In previous inner EAP message ISE started an inner EAP method selected by Authentication Policy. Supplicant declined this inner EAP method by sending inner EAP NAK message but did not proposed another inner EAP method that it is ready to conduct. Owing to this, inner EAP negotiation failed."
    },
    "11516": {
        "code": 11516,
        "severity": "WARN",
        "text": "Extracted EAP-Response/NAK packet not requesting any EAP protocols for inner EAP method; inner EAP-negotiation failed",
        "description": "From the EAP-Response packet encountered in the outer EAP method, extracted an EAP-Response/NAK packet rejecting the EAP-based protocol previously proposed for the inner EAP method, but -- per the configuration of the client's supplicant -- not requesting any other protocols. Negotiation of the inner EAP method failed."
    },
    "11517": {
        "code": 11517,
        "severity": "WARN",
        "text": "Extracted EAP-Response/NAK packet requesting to use unsupported inner EAP protocol; inner EAP-negotiation failed",
        "description": "From the EAP-Response packet encountered in the outer EAP method, extracted an EAP-Response/NAK packet rejecting the EAP-based protocol previously proposed for the inner EAP method, and requesting to use another protocol instead, per the configuration of the client's supplicant. However, the requested inner EAP-based protocol is currently not supported by ISE. Negotiation of the inner EAP method failed."
    },
    "11518": {
        "code": 11518,
        "severity": "WARN",
        "text": "Extracted second EAP-Response/NAK in current inner EAP conversation; inner EAP-negotiation failed",
        "description": "For the second time in the current inner EAP conversation, extracted from the EAP-Response packet in the outer EAP method an EAP-Response/NAK packet rejecting the EAP-based protocol previously proposed for the inner EAP method. Negotiation of the inner EAP method failed."
    },
    "11519": {
        "code": 11519,
        "severity": "INFO",
        "text": "Prepared EAP-Success for inner EAP method",
        "description": "Created an EAP-Success packet, for encapsulation within the outer EAP method's outgoing EAP-Request packet, and for ultimate attachment to a RADIUS message."
    },
    "11520": {
        "code": 11520,
        "severity": "INFO",
        "text": "Prepared EAP-Failure for inner EAP method",
        "description": "Created an EAP-Failure packet, for encapsulation within the outer EAP method's outgoing EAP-Request packet, and for ultimate attachment to a RADIUS message."
    },
    "11521": {
        "code": 11521,
        "severity": "INFO",
        "text": "Prepared EAP-Request/Identity for inner EAP method",
        "description": "Created an EAP-Request/Identity packet, for encapsulation within the outer EAP method's outgoing EAP-Request packet, and for ultimate attachment to a RADIUS message."
    },
    "11522": {
        "code": 11522,
        "severity": "INFO",
        "text": "Extracted EAP-Response/Identity for inner EAP method",
        "description": "From the EAP-Response packet encountered in the outer EAP method, extracted an EAP-Response/Identity packet for the inner EAP method."
    },
    "11523": {
        "code": 11523,
        "severity": "WARN",
        "text": "Invalid or unexpected inner-EAP payload received",
        "description": "Internal error, possibly in the supplicant: failed to validate an EAP inner-method payload."
    },
    "11524": {
        "code": 11524,
        "severity": "WARN",
        "text": "Invalid inner-EAP payload",
        "description": "Internal error, possibly in the supplicant: failed to validate an EAP inner-method payload."
    },
    "11800": {
        "code": 11800,
        "severity": "INFO",
        "text": "Prepared EAP-Request proposing EAP-MSCHAP with challenge",
        "description": "Created an EAP-Request packet proposing to use the EAP-MSCHAP protocol, and also providing an MSCHAP challenge, for attachment to a RADIUS message. The EAP-MSCHAP protocol was proposed because it was one of the EAP-based protocols allowed in Allowed Protocols."
    },
    "11801": {
        "code": 11801,
        "severity": "INFO",
        "text": "Extracted EAP-Response/NAK requesting to use EAP-MSCHAP instead",
        "description": "Extracted from the RADIUS message an EAP-Response/NAK packet, rejecting the previously-proposed EAP-based protocol, and requesting to use EAP-MSCHAP instead, per the configuration of the client's supplicant."
    },
    "11802": {
        "code": 11802,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing EAP-MSCHAP challenge-response and accepting EAP-MSCHAP as negotiated",
        "description": "Extracted from the RADIUS message an EAP-Response packet containing an EAP-MSCHAP challenge-response, and accepting EAP-MSCHAP as negotiated."
    },
    "11803": {
        "code": 11803,
        "severity": "WARN",
        "text": "Failed to negotiate EAP because EAP-MSCHAP not allowed in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the previously-proposed EAP-based protocol, and requesting to use EAP-MSCHAP instead. However, EAP-MSCHAP is not allowed in Allowed Protocols."
    },
    "11804": {
        "code": 11804,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing MSCHAP challenge-response",
        "description": "Continuing the EAP-MSCHAP protocol; processing the EAP-MSCHAP challenge-response in the extracted EAP-Response."
    },
    "11805": {
        "code": 11805,
        "severity": "INFO",
        "text": "Prepared EAP-Request with another EAP-MSCHAP challenge",
        "description": "As part of the continuation of the EAP-MSCHAP protocol, created an EAP-Request packet containing another EAP-MSCHAP challenge, for attachment to a RADIUS message."
    },
    "11806": {
        "code": 11806,
        "severity": "INFO",
        "text": "Prepared EAP-Request for inner method proposing EAP-MSCHAP with challenge",
        "description": "Created an EAP-Request packet proposing to use the EAP-MSCHAP protocol for the inner method, and also providing an MSCHAP challenge, for attachment to a RADIUS message. The EAP-MSCHAP protocol was proposed because it was one of the EAP-based protocols allowed in Allowed Protocols."
    },
    "11807": {
        "code": 11807,
        "severity": "INFO",
        "text": "Extracted EAP-Response/NAK for inner method requesting to use EAP-MSCHAP instead",
        "description": "From the EAP-Response packet encountered in the outer EAP method, extracted an EAP-Response/NAK packet, rejecting the EAP-based protocol previously proposed for the inner method, and requesting to use EAP-MSCHAP instead, per the configuration of the client's supplicant."
    },
    "11808": {
        "code": 11808,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing EAP-MSCHAP challenge-response for inner method and accepting EAP-MSCHAP as negotiated",
        "description": "From the EAP-Response packet encountered in the outer EAP method, extracted an EAP-Response packet containing an EAP-MSCHAP challenge-response, and accepting EAP-MSCHAP as negotiated for the inner method."
    },
    "11809": {
        "code": 11809,
        "severity": "WARN",
        "text": "Failed to negotiate EAP for inner method because EAP-MSCHAPv2 not allowed in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the EAP-based protocol previously proposed for the inner method, and requesting to use EAP-MSCHAPv2 instead. However, EAP-MSCHAPv2 is not allowed in Allowed Protocols."
    },
    "11810": {
        "code": 11810,
        "severity": "INFO",
        "text": "Extracted EAP-Response for inner method containing MSCHAP challenge-response",
        "description": "Continuing the inner EAP-MSCHAP protocol; processing the EAP-MSCHAP challenge-response in the extracted EAP-Response."
    },
    "11811": {
        "code": 11811,
        "severity": "INFO",
        "text": "Prepared EAP-Request for inner method with another EAP-MSCHAP challenge",
        "description": "As part of the continuation of the inner EAP-MSCHAP protocol, created an EAP-Request packet containing another EAP-MSCHAP challenge, for encapsulation within the outer EAP method's outgoing EAP-Request packet, and for ultimate attachment to a RADIUS message."
    },
    "11812": {
        "code": 11812,
        "severity": "INFO",
        "text": "EAP-MSCHAP authentication succeeded",
        "description": "EAP-MSCHAP authentication succeeded."
    },
    "11813": {
        "code": 11813,
        "severity": "INFO",
        "text": "EAP-MSCHAP authentication failed",
        "description": "EAP-MSCHAP authentication failed."
    },
    "11814": {
        "code": 11814,
        "severity": "INFO",
        "text": "Inner EAP-MSCHAP authentication succeeded",
        "description": "EAP-MSCHAP authentication for the inner EAP method succeeded."
    },
    "11815": {
        "code": 11815,
        "severity": "INFO",
        "text": "Inner EAP-MSCHAP authentication failed",
        "description": "EAP-MSCHAP authentication for the inner EAP method failed."
    },
    "11816": {
        "code": 11816,
        "severity": "WARN",
        "text": "MSCHAP username doesn't match inner method EAP-Response/Identity",
        "description": "The MSCHAP username does not match the username received in the inner method EAP-Response/Identity packet. One possible reason might be that the client's supplicant is preconfigured with another username not matching that entered by the user."
    },
    "11817": {
        "code": 11817,
        "severity": "WARN",
        "text": "Received unexpected EAP-MSCHAP message",
        "description": "ISE was expecting certain EAP-MSCHAP message, but received another one. This could be due to a possible inconformity in the implementation of the protocol between ISE and the supplicant."
    },
    "11818": {
        "code": 11818,
        "severity": "INFO",
        "text": "Failed to parse EAP-MSCHAP packet",
        "description": "Failed to parse EAP-MSCHAP packet."
    },
    "11819": {
        "code": 11819,
        "severity": "INFO",
        "text": "Received EAP-MSCHAP packet with invalid argument",
        "description": "Received EAP-MSCHAP packet with invalid argument."
    },
    "11821": {
        "code": 11821,
        "severity": "INFO",
        "text": "EAP-MSCHAP password change attempt failed",
        "description": "The attempt to change the password failed because password change for the MS-CHAPv2 inner method is not enabled in Allowed Protocols."
    },
    "11822": {
        "code": 11822,
        "severity": "DEBUG",
        "text": "EAP-MSCHAP password change attempt passed",
        "description": "The attempt to change the EAP-MSCHAP password passed."
    },
    "11823": {
        "code": 11823,
        "severity": "INFO",
        "text": "EAP-MSCHAP authentication attempt failed",
        "description": "EAP-MSCHAP authentication attempt failed."
    },
    "11824": {
        "code": 11824,
        "severity": "DEBUG",
        "text": "EAP-MSCHAP authentication attempt passed",
        "description": "EAP-MSCHAP authentication attempt passed."
    },
    "11825": {
        "code": 11825,
        "severity": "WARN",
        "text": "MSCHAP inner method username is missing",
        "description": "The username received in the inner method EAP-Response/Identity packet was empty. One possible reason might be that the user did not enter a username."
    },
    "12000": {
        "code": 12000,
        "severity": "INFO",
        "text": "Prepared EAP-Request proposing EAP-MD5 with challenge",
        "description": "Created an EAP-Request packet proposing to use the EAP-MD5 protocol, and also providing an EAP-MD5 challenge, for attachment to a RADIUS message. The EAP-MD5 protocol was proposed because it was one of the EAP-based protocols allowed in Allowed Protocols."
    },
    "12001": {
        "code": 12001,
        "severity": "INFO",
        "text": "Extracted EAP-Response/NAK requesting to use EAP-MD5 instead",
        "description": "Extracted from the RADIUS message an EAP-Response/NAK packet, rejecting the previously-proposed EAP-based protocol, and requesting to use EAP-MD5 instead, per the configuration of the client's supplicant."
    },
    "12002": {
        "code": 12002,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing EAP-MD5 challenge-response and accepting EAP-MD5 as negotiated",
        "description": "Extracted from the RADIUS message an EAP-Response packet containing an EAP-MD5 challenge-response, and accepting EAP-MD5 as negotiated"
    },
    "12003": {
        "code": 12003,
        "severity": "WARN",
        "text": "Failed to negotiate EAP because EAP-MD5 not allowed in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the previously-proposed EAP-based protocol, and requesting to use EAP-MD5 instead. However, EAP-MD5 is not allowed in Allowed Protocols."
    },
    "12004": {
        "code": 12004,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing EAP-MD5 challenge-response",
        "description": "Continuing the EAP-MD5 protocol; processing the EAP-MD5 challenge-response in the extracted EAP-Response."
    },
    "12005": {
        "code": 12005,
        "severity": "INFO",
        "text": "EAP-MD5 authentication succeeded",
        "description": "EAP-MD5 authentication succeeded."
    },
    "12006": {
        "code": 12006,
        "severity": "INFO",
        "text": "EAP-MD5 authentication failed",
        "description": "EAP-MD5 authentication failed."
    },
    "12007": {
        "code": 12007,
        "severity": "WARN",
        "text": "Internal error - invalid EAP-MD5 state",
        "description": "Internal error: invalid EAP-MD5 state."
    },
    "12008": {
        "code": 12008,
        "severity": "INFO",
        "text": "Failed to parse EAP-MD5 packet",
        "description": "Failed to parse EAP-MD5 packet."
    },
    "12100": {
        "code": 12100,
        "severity": "INFO",
        "text": "Prepared EAP-Request proposing EAP-FAST with challenge",
        "description": "Created an EAP-Request packet proposing to use the EAP-FAST protocol, and also providing an EAP-FAST challenge, for attachment to a RADIUS message. The EAP-FAST protocol was proposed because it was one of the EAP-based protocols allowed in Allowed Protocols."
    },
    "12101": {
        "code": 12101,
        "severity": "INFO",
        "text": "Extracted EAP-Response/NAK requesting to use EAP-FAST instead",
        "description": "Extracted from the RADIUS message an EAP-Response/NAK packet, rejecting the previously-proposed EAP-based protocol, and requesting to use EAP-FAST instead, per the configuration of the client's supplicant."
    },
    "12102": {
        "code": 12102,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing EAP-FAST challenge-response and accepting EAP-FAST as negotiated",
        "description": "Extracted from the RADIUS message an EAP-Response packet containing an EAP-FAST challenge-response, and accepting EAP-FAST as negotiated"
    },
    "12103": {
        "code": 12103,
        "severity": "WARN",
        "text": "Failed to negotiate EAP because EAP-FAST not allowed in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the previously-proposed EAP-based protocol, and requesting to use EAP-FAST instead. However, EAP-FAST is not allowed in Allowed Protocols."
    },
    "12104": {
        "code": 12104,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing EAP-FAST challenge-response",
        "description": "Continuing the EAP-FAST protocol; processing the EAP-FAST challenge-response in the extracted EAP-Response."
    },
    "12105": {
        "code": 12105,
        "severity": "INFO",
        "text": "Prepared EAP-Request with another EAP-FAST challenge",
        "description": "As part of the continuation of the EAP-FAST protocol, created an EAP-Request packet containing another EAP-FAST challenge, for attachment to a RADIUS message."
    },
    "12106": {
        "code": 12106,
        "severity": "INFO",
        "text": "EAP-FAST authentication phase finished successfully",
        "description": "EAP-FAST authentication phase finished successfully."
    },
    "12107": {
        "code": 12107,
        "severity": "INFO",
        "text": "EAP-FAST provisioning phase finished successfully",
        "description": "EAP-FAST provisioning phase finished successfully."
    },
    "12108": {
        "code": 12108,
        "severity": "WARN",
        "text": "EAP-FAST authentication failed",
        "description": "EAP-FAST authentication failed."
    },
    "12109": {
        "code": 12109,
        "severity": "INFO",
        "text": "EAP-FAST provisioning phase finished",
        "description": "Completed the EAP-FAST PAC-provisioning phase. According to the standard, a result of EAP-Failure and RADIUS Access-Reject will be returned, even when the PAC request was successfully approved. Thus, there is a need to check if the PAC was indeed actually issued or not."
    },
    "12110": {
        "code": 12110,
        "severity": "WARN",
        "text": "PAC verification failed",
        "description": "Received from the client a PAC that failed to pass verification."
    },
    "12111": {
        "code": 12111,
        "severity": "WARN",
        "text": "PAC contains invalid Authority ID",
        "description": "The Authority ID of the client's PAC does not match that of the ISE server that processed the authentication request, probably because the client's PAC was created by another ISE."
    },
    "12112": {
        "code": 12112,
        "severity": "WARN",
        "text": "PAC contains invalid PAC type",
        "description": "Received from the client a PAC containing an invalid PAC type."
    },
    "12113": {
        "code": 12113,
        "severity": "WARN",
        "text": "PAC has expired - rejecting it",
        "description": "Received from the client a PAC that has expired. Rejecting it."
    },
    "12114": {
        "code": 12114,
        "severity": "WARN",
        "text": "PAC contains invalid Authentication Tag",
        "description": "Received from the client a PAC containing an invalid Authentication Tag."
    },
    "12115": {
        "code": 12115,
        "severity": "INFO",
        "text": "Successfully finished EAP-FAST PAC provisioning/update",
        "description": "Successfully finished EAP-FAST PAC provisioning/update."
    },
    "12116": {
        "code": 12116,
        "severity": "WARN",
        "text": "Client sent Result TLV indicating failure",
        "description": "EAP-FAST authentication failed because client sent Result TLV indicating failure."
    },
    "12117": {
        "code": 12117,
        "severity": "WARN",
        "text": "EAP-FAST inner method finished with failure",
        "description": "EAP-FAST inner method finished with failure."
    },
    "12118": {
        "code": 12118,
        "severity": "WARN",
        "text": "EAP-FAST cryptobinding verification failed",
        "description": "EAP-FAST cryptobinding verification failed."
    },
    "12119": {
        "code": 12119,
        "severity": "INFO",
        "text": "EAP-FAST needs to proactively update PAC that is about to expire",
        "description": "EAP-FAST needs to proactively update PAC that is about to expire."
    },
    "12120": {
        "code": 12120,
        "severity": "WARN",
        "text": "Neither anonymous nor authenticated provisioning allowed by Allowed Protocols",
        "description": "The attempt to provision a PAC failed because the relevant Allowed Protocols allows neither anonymous nor authenticated in-band PAC provisioning."
    },
    "12121": {
        "code": 12121,
        "severity": "WARN",
        "text": "Client didn't provide suitable ciphers for anonymous PAC-provisioning",
        "description": "The EAP-FAST in-band PAC-provisioning request issued by the client's supplicant has internally specified a cipher. This cipher is not compatible with the provisioning method currently allowed by Allowed Protocols configuration: Anonymous In-Band PAC provisioning. If you need this provisioning method, this message indicates that the supplicant is either configured incorrectly or that it cannot be used to perform Anonymous provisioning using the current version of ISE. If you need Authenticated provisioning, this message indicates that the Allowed Protocols configuration currently does not allow Authenticated In-Band PAC provisioning."
    },
    "12122": {
        "code": 12122,
        "severity": "WARN",
        "text": "Client didn't provide suitable ciphers for authenticated PAC provisioning",
        "description": "The EAP-FAST in-band PAC-provisioning request issued by the client's supplicant internally specified a cipher that is not compatible with the only provisioning method currently allowed by Allowed Protocols configuration: Authenticated In-Band PAC Provisioning. If this is indeed the desired provisioning method, then this message indicates that the supplicant is either configured improperly or that it cannot be used to perform authenticated provisioning with the current version of ISE. Alternatively, if anonymous provisioning is the method actually desired, then this message indicates that Allowed Protocols configuration currently does not allow Anonymous In-Band PAC Provisioning."
    },
    "12123": {
        "code": 12123,
        "severity": "WARN",
        "text": "Client didn't provide suitable ciphers for either anonymous or authenticated PAC-provisioning",
        "description": "The EAP-FAST in-band PAC-provisioning request issued by the client's supplicant has internally specified a cipher. This cipher is not compatible with either of the two provisioning methods currently allowed by Allowed Protocols configuration: Anonymous In-Band PAC provisioning or Authenticated In-Band PAC provisioning. The supplicant is either configured incorrectly or it cannot be used to perform PAC provisioning with the current version of ISE."
    },
    "12124": {
        "code": 12124,
        "severity": "INFO",
        "text": "EAP-FAST inner method skipped",
        "description": "Skipped the EAP-FAST inner method."
    },
    "12125": {
        "code": 12125,
        "severity": "INFO",
        "text": "EAP-FAST inner method started",
        "description": "Started the EAP-FAST inner method."
    },
    "12126": {
        "code": 12126,
        "severity": "DEBUG",
        "text": "EAP-FAST cryptobinding verification passed",
        "description": "EAP-FAST cryptobinding verification passed."
    },
    "12127": {
        "code": 12127,
        "severity": "INFO",
        "text": "Approved EAP-FAST client PAC request",
        "description": "Approved the EAP-FAST request by the client's supplicant to provision a PAC."
    },
    "12128": {
        "code": 12128,
        "severity": "INFO",
        "text": "EAP-FAST inner method finished successfully",
        "description": "EAP-FAST inner method finished successfully."
    },
    "12129": {
        "code": 12129,
        "severity": "WARN",
        "text": "EAP-FAST provisioning failed. General error",
        "description": "EAP-FAST provisioning failed. Could not build secure tunnel."
    },
    "12130": {
        "code": 12130,
        "severity": "WARN",
        "text": "Failed to decrypt PAC",
        "description": "Failed to decrypt the PAC received from the client's supplicant."
    },
    "12131": {
        "code": 12131,
        "severity": "INFO",
        "text": "EAP-FAST built anonymous tunnel for purpose of PAC provisioning",
        "description": "EAP-FAST full handshake finished successfully - built anonymous tunnel for purpose of phase-0 PAC provisioning."
    },
    "12132": {
        "code": 12132,
        "severity": "INFO",
        "text": "EAP-FAST built PAC-based tunnel for purpose of authentication",
        "description": "EAP-FAST short handshake finished successfully - built PAC-based tunnel for purpose of phase-1 authentication."
    },
    "12133": {
        "code": 12133,
        "severity": "WARN",
        "text": "Successfully updated Seed key",
        "description": "Successfully updated the Seed key, used for further generation of master keys."
    },
    "12134": {
        "code": 12134,
        "severity": "WARN",
        "text": "Failed to update seed key",
        "description": "Internal error: failed to update seed key, needed for further generation of master keys, most likely because an internal configuration object could not be properly fetched."
    },
    "12135": {
        "code": 12135,
        "severity": "INFO",
        "text": "Updated Master Key Generation period",
        "description": "Updated the Master Key Generation period."
    },
    "12136": {
        "code": 12136,
        "severity": "INFO",
        "text": "Sent NDAC Authentication to client",
        "description": "Sent NDAC Authentication to client."
    },
    "12137": {
        "code": 12137,
        "severity": "INFO",
        "text": "Received NDAC Authentication response from client",
        "description": "Received NDAC Authentication response from client."
    },
    "12138": {
        "code": 12138,
        "severity": "INFO",
        "text": "Received Authorization PAC",
        "description": "Received Authorization PAC from client."
    },
    "12139": {
        "code": 12139,
        "severity": "INFO",
        "text": "Anonymous TLS renegotiation succeeded",
        "description": "EAP-FAST Anonymous TLS renegotiation finished with success"
    },
    "12140": {
        "code": 12140,
        "severity": "WARN",
        "text": "Anonymous TLS renegotiation failed",
        "description": "Anonymous TLS renegotiation failed."
    },
    "12141": {
        "code": 12141,
        "severity": "WARN",
        "text": "Failed to find Legacy Master Key",
        "description": "Failed to find EAP-FAST Legacy Master Key."
    },
    "12142": {
        "code": 12142,
        "severity": "WARN",
        "text": "Legacy Master Key expired",
        "description": "EAP-FAST Legacy Master Key expired."
    },
    "12143": {
        "code": 12143,
        "severity": "WARN",
        "text": "Failed to derive EAP-FAST Master Key",
        "description": "Failed to derive EAP-FAST Master Key."
    },
    "12144": {
        "code": 12144,
        "severity": "WARN",
        "text": "Fallback on invalid PAC: no available additional cipher configured on server",
        "description": "Fallback on invalid PAC: no available additional cipher configured on server."
    },
    "12145": {
        "code": 12145,
        "severity": "WARN",
        "text": "Cannot perform more then one invalid PAC fallback",
        "description": "There seems to be an internal problem with the client's supplicant, which is incorrectly trying to send an invalid PAC more then once during a single EAP-FAST conversation."
    },
    "12146": {
        "code": 12146,
        "severity": "WARN",
        "text": "No cipher on client side for invalid PAC fallback",
        "description": "ISE is unable to complete the TLS handshake, because none of the ciphersuites suggested by the client's supplicant are compatible with invalid PAC fallback. This might be due to the fact that a manually-provisioned PAC is no longer valid, and configuration in Allowed Protocols does not allow any of the forms of in-band PAC provisioning expected by the client."
    },
    "12147": {
        "code": 12147,
        "severity": "WARN",
        "text": "Machine Authentication is disabled",
        "description": "EAP-FAST authentication failed because Machine Authentication is disabled."
    },
    "12148": {
        "code": 12148,
        "severity": "INFO",
        "text": "Allowed Protocols does not allow Stateless Session Resume; performing full authentication",
        "description": "Allowed Protocols configuration does not allow Stateless Session Resume; performing full authentication."
    },
    "12149": {
        "code": 12149,
        "severity": "INFO",
        "text": "EAP-FAST built authenticated tunnel for purpose of PAC provisioning",
        "description": "EAP-FAST full handshake finished successfully - built authenticated tunnel for purpose of phase-0 PAC provisioning."
    },
    "12151": {
        "code": 12151,
        "severity": "INFO",
        "text": "Perform fallback on invalid PAC to provisioning",
        "description": "ISE received an invalid PAC during authentication and perform fallback to PAC provisioning."
    },
    "12152": {
        "code": 12152,
        "severity": "WARN",
        "text": "Rejected PAC provisioning request because supplicant failed to adhere to protocol",
        "description": "Rejected the PAC provisioning request because the client's supplicant failed to properly adhere to the EAP-FAST protocol. Not only did it fail to send an ACK for the almost-provisioned PAC, but it also failed to properly follow up by sending a valid additional request for a Tunnel PAC or a Machine PAC."
    },
    "12153": {
        "code": 12153,
        "severity": "WARN",
        "text": "EAP-FAST failed SSL/TLS handshake because the client rejected the ISE local-certificate",
        "description": "EAP-FAST failed SSL/TLS handshake because the client rejected the ISE local-certificate"
    },
    "12154": {
        "code": 12154,
        "severity": "WARN",
        "text": "EAP-FAST failed SSL/TLS handshake after a client alert",
        "description": "EAP-FAST failed SSL/TLS handshake after a client alert"
    },
    "12155": {
        "code": 12155,
        "severity": "WARN",
        "text": "One Tunnel PAC has already been requested in this conversation. Another Tunnel PAC request will be ignored",
        "description": "One Tunnel PAC has already been requested in this conversation. Another Tunnel PAC request will be ignored"
    },
    "12156": {
        "code": 12156,
        "severity": "WARN",
        "text": "One CTS PAC has already been requested in this conversation. Another Tunnel PAC request will be ignored",
        "description": "One CTS PAC has already been requested in this conversation. Another Tunnel PAC request will be ignored"
    },
    "12157": {
        "code": 12157,
        "severity": "WARN",
        "text": "One Tunnel PAC has already been requested in this conversation. Another CTS PAC request will be ignored",
        "description": "One Tunnel PAC has already been requested in this conversation. Another CTS PAC request will be ignored"
    },
    "12158": {
        "code": 12158,
        "severity": "WARN",
        "text": "One CTS PAC has already been requested in this conversation. Another CTS PAC request will be ignored",
        "description": "One CTS PAC has already been requested in this conversation. Another CTS PAC request will be ignored"
    },
    "12159": {
        "code": 12159,
        "severity": "WARN",
        "text": "One Machine PAC has already been requested in this conversation. Another Machine PAC request will be ignored",
        "description": "One Machine PAC has already been requested in this conversation. Another Machine PAC request will be ignored"
    },
    "12160": {
        "code": 12160,
        "severity": "WARN",
        "text": "Cannot provision Machine PAC on anonymous provisioning. Machine PAC can be provisioned only on authenticated provisioning",
        "description": "Cannot provision Machine PAC on anonymous provisioning. Machine PAC can be provisioned only on authenticated provisioning"
    },
    "12161": {
        "code": 12161,
        "severity": "WARN",
        "text": "Cannot provision Authorization PAC when the stateless session resume is disabled",
        "description": "Cannot provision Authorization PAC when the stateless session resume is disabled. Enable the stateless session resume in service settings to allow Authorization PAC provisioning"
    },
    "12162": {
        "code": 12162,
        "severity": "WARN",
        "text": "Cannot provision Authorization PAC on anonymous provisioning. Authorization PAC can be provisioned only on authenticated provisioning",
        "description": "Cannot provision Authorization PAC on anonymous provisioning. Authorization PAC can be provisioned only on authenticated provisioning"
    },
    "12163": {
        "code": 12163,
        "severity": "WARN",
        "text": "One Authorization PAC has already been requested in this conversation. Another Authorization PAC request will be ignored",
        "description": "One Authorization PAC has already been requested in this conversation. Another Authorization PAC request will be ignored"
    },
    "12164": {
        "code": 12164,
        "severity": "WARN",
        "text": "Invalid PAC type requested. Ignoring this request",
        "description": "Invalid PAC type requested. Ignoring this request"
    },
    "12165": {
        "code": 12165,
        "severity": "WARN",
        "text": "Authorization PAC I-ID does not match user identity. Ignoring this Authorization PAC request",
        "description": "Authorization PAC I-ID does not match user identity. Ignoring this Authorization PAC request"
    },
    "12166": {
        "code": 12166,
        "severity": "WARN",
        "text": "Machine PAC request does not contain I-ID. Ignoring this Machine PAC request",
        "description": "Machine PAC request does not contain I-ID. Ignoring this Machine PAC request"
    },
    "12167": {
        "code": 12167,
        "severity": "WARN",
        "text": "Authorization PAC can be provided only with Tunnel PAC",
        "description": "Authorization PAC can be provided only with Tunnel PAC"
    },
    "12168": {
        "code": 12168,
        "severity": "INFO",
        "text": "Received CTS PAC",
        "description": "Received CTS PAC from client"
    },
    "12169": {
        "code": 12169,
        "severity": "INFO",
        "text": "Successfully finished EAP-FAST tunnel PAC provisioning/update",
        "description": "Successfully finished the EAP-FAST tunnel PAC provisioning or update."
    },
    "12170": {
        "code": 12170,
        "severity": "INFO",
        "text": "Successfully finished EAP-FAST machine PAC provisioning/update",
        "description": "Successfully finished the EAP-FAST machine PAC provisioning or update."
    },
    "12171": {
        "code": 12171,
        "severity": "INFO",
        "text": "Successfully finished EAP-FAST user authorization PAC provisioning/update",
        "description": "Successfully finished the EAP-FAST user authorization PAC provisioning or update."
    },
    "12172": {
        "code": 12172,
        "severity": "INFO",
        "text": "Successfully finished EAP-FAST posture PAC provisioning/update",
        "description": "Successfully finished the EAP-FAST posture PAC provisioning or update."
    },
    "12173": {
        "code": 12173,
        "severity": "INFO",
        "text": "Successfully finished EAP-FAST CTS PAC provisioning/update",
        "description": "Successfully finished the EAP-FAST CTS PAC provisioning or update."
    },
    "12174": {
        "code": 12174,
        "severity": "INFO",
        "text": "Received Machine PAC",
        "description": "Received Machine PAC from client."
    },
    "12175": {
        "code": 12175,
        "severity": "INFO",
        "text": "Received Tunnel PAC",
        "description": "Received Tunnel PAC from client."
    },
    "12176": {
        "code": 12176,
        "severity": "INFO",
        "text": "EAP-FAST PAC-less full handshake finished successfully",
        "description": "Using the PAC-less mode of EAP-FAST authentication. The tunnel was successfully built using full handshake."
    },
    "12177": {
        "code": 12177,
        "severity": "WARN",
        "text": "No cipher for PAC-less EAP-FAST authentication",
        "description": "The cipher specified by the client's supplicant during the TLS handshake portion of EAP-FAST is not compatible with the PAC-less mode of operation currently configured in Allowed protocols configuration. This could be because the supplicant is either incorrectly configured, or even inherently unable in general, to work with PAC-less EAP-FAST authentication using the current version of ISE."
    },
    "12178": {
        "code": 12178,
        "severity": "WARN",
        "text": "Rejected PAC unexpectedly received during PAC-less mode of EAP-FAST",
        "description": "Despite the fact that Allowed protocols has configured EAP-FAST to use the PAC-less mode of operation, the client's supplicant has sent a PAC to ISE, as if the PAC-based mode is being used."
    },
    "12179": {
        "code": 12179,
        "severity": "INFO",
        "text": "Successfully finished EAP-FAST machine authorization PAC provisioning/update",
        "description": "Successfully finished the EAP-FAST machine authorization PAC provisioning or update."
    },
    "12200": {
        "code": 12200,
        "severity": "INFO",
        "text": "Approved EAP-FAST client Tunnel PAC request",
        "description": "Approved the EAP-FAST request by the client's supplicant to provision a Tunnel PAC."
    },
    "12201": {
        "code": 12201,
        "severity": "INFO",
        "text": "Approved EAP-FAST client Machine PAC request",
        "description": "Approved the EAP-FAST request by the client's supplicant to provision a Machine PAC."
    },
    "12202": {
        "code": 12202,
        "severity": "INFO",
        "text": "Approved EAP-FAST client Authorization PAC request",
        "description": "Approved the EAP-FAST request by the client's supplicant to provision an Authorization PAC."
    },
    "12203": {
        "code": 12203,
        "severity": "INFO",
        "text": "Using client certificate for authentication",
        "description": "ISE received client certificate during tunnel establishment or inside the tunnel. ISE is going to verify this certificate and use it for authentication."
    },
    "12204": {
        "code": 12204,
        "severity": "INFO",
        "text": "Client certificate was received inside the tunnel",
        "description": "The supplicant provided client certificate inside the tunnel (certificate was send encrypted)"
    },
    "12205": {
        "code": 12205,
        "severity": "INFO",
        "text": "Client certificate was requested but not received inside the tunnel. Will continue with inner method.",
        "description": "ISE requested client certificate inside the tunnel but the supplicant has not provided the client certificate. ISE will continue authenticating the supplicant by running the inner method."
    },
    "12206": {
        "code": 12206,
        "severity": "INFO",
        "text": "Client certificate was received during tunnel establishment",
        "description": "The supplicant provided a client certificate during tunnel establishment (certificate was sent not encrypted)"
    },
    "12207": {
        "code": 12207,
        "severity": "INFO",
        "text": "Client certificate was requested but not received during tunnel establishment. Will renegotiate and request client certificate inside the tunnel.",
        "description": "ISE requested client certificate during tunnel establishment but the supplicant did not provided the client certificate. The supplicant may be configured to not send the client certificte unless encrypted. ISE will renegotiate and request the client certificate inside the tunnel."
    },
    "12208": {
        "code": 12208,
        "severity": "INFO",
        "text": "Client certificate was received but authentication failed",
        "description": "ISE received client certificate during tunnel establishment or inside the tunnel but the authentication failed."
    },
    "12209": {
        "code": 12209,
        "severity": "INFO",
        "text": "Starting EAP chaining",
        "description": "ISE is configured to perform EAP chaining. ISE is starting EAP chanining and assume that client also supports EAP chaining."
    },
    "12210": {
        "code": 12210,
        "severity": "INFO",
        "text": "Received User Authorization PAC",
        "description": "Received User Authorization PAC from client."
    },
    "12211": {
        "code": 12211,
        "severity": "INFO",
        "text": "Received Machine Authorization PAC",
        "description": "Received Machine Authorization PAC from client."
    },
    "12212": {
        "code": 12212,
        "severity": "INFO",
        "text": "Identity type provided by client is equal to requested",
        "description": "ISE requested a specific identity type from the client for current inner method and the client confirmed usage of this identity type."
    },
    "12213": {
        "code": 12213,
        "severity": "INFO",
        "text": "Identity type provided by client is not equal to requested type",
        "description": "ISE requested a specific identity type from the client for the current inner method and the client denied usage of this identity type."
    },
    "12214": {
        "code": 12214,
        "severity": "INFO",
        "text": "Client suggested 'User' identity type instead",
        "description": "Client sugested using the identity type 'User' in the current inner method."
    },
    "12215": {
        "code": 12215,
        "severity": "INFO",
        "text": "Client suggested 'Machine' identity type instead",
        "description": "Client sugested using the identity type 'Machine' in the current inner method."
    },
    "12216": {
        "code": 12216,
        "severity": "INFO",
        "text": "Identity type provided by client was already used for authentication",
        "description": "Client sugested to use an identity type in the current inner method that was already used in a previous inner method. ISE is rejecting this identity type."
    },
    "12217": {
        "code": 12217,
        "severity": "INFO",
        "text": "Identity type provided by client is currently unsupported",
        "description": "Client sugested using an identity type in current inner method that is not supported by ISE. ISE is rejecting this identity type."
    },
    "12218": {
        "code": 12218,
        "severity": "INFO",
        "text": "Selected identity type 'User'",
        "description": "ISE selected identity type 'User' to use in current inner method."
    },
    "12219": {
        "code": 12219,
        "severity": "INFO",
        "text": "Selected identity type 'Machine'",
        "description": "ISE selected identity type 'Machine' to use in current inner method."
    },
    "12220": {
        "code": 12220,
        "severity": "INFO",
        "text": "Client does not support EAP chaining. Switching to usual mode",
        "description": "ISE send Identity Type TLV in EAP request to client to conduct EP chaining. However Identity Type TLV is not present in client response. So EAP chaining is not supported by the client. ISE is switching to usual mode."
    },
    "12221": {
        "code": 12221,
        "severity": "INFO",
        "text": "Client does not support TLS renegotiation. Will continue with inner method",
        "description": "ISE tried to renegotiate handshake to ask for client certificate inside the tunnel but client does not support TLS renegotiation"
    },
    "12222": {
        "code": 12222,
        "severity": "INFO",
        "text": "EAP-FAST PAC-less session resumed successfully",
        "description": "Using the PAC-less mode of EAP-FAST authentication. The tunnel was successfully built using short handshake."
    },
    "12223": {
        "code": 12223,
        "severity": "INFO",
        "text": "Ignore PAC send by supplicant during fallback to provisioning conversation",
        "description": "ISE performed fallback on invalid PAC to provisioning. However during this provisioning conversation supplicant sent the PAC again. ISE will ignore this PAC."
    },
    "12224": {
        "code": 12224,
        "severity": "INFO",
        "text": "User Authorization PAC request ignored because PAC of the same type was already used to skip inner method",
        "description": "User Authorization PAC request ignored because PAC of the same type was already used to skip inner method. Authorization PAC could be provided only after full authentication conversation."
    },
    "12225": {
        "code": 12225,
        "severity": "INFO",
        "text": "Ignore Machine Authorization PAC request because of current PAC of the same type was used to skip inner method",
        "description": "Ignore Machine Authorization PAC request because of current PAC of the same type was used to skip inner method. Authorization PAC could be provided only after full authentication conversation."
    },
    "12226": {
        "code": 12226,
        "severity": "INFO",
        "text": "Started renegotiated TLS handshake",
        "description": "ISE preformed TLS renegotiation and started another TLS handshake."
    },
    "12227": {
        "code": 12227,
        "severity": "INFO",
        "text": "User Authorization PAC has expired - will run inner method",
        "description": "Received from the client User Authorization PAC that has expired. Expired Authorization PAC cannot be used for fast reconnect so ISE will run inner method to authenticate the user."
    },
    "12228": {
        "code": 12228,
        "severity": "INFO",
        "text": "Machine Authorization PAC has expired - will run inner method",
        "description": "Received from the client Machine Authorization PAC that has expired. Expired Authorization PAC cannot be used for fast reconnect so ISE will run inner method to authenticate the machine."
    },
    "12229": {
        "code": 12229,
        "severity": "WARN",
        "text": "No valid PAC requests on provisioning",
        "description": "Client did not send valid PAC request at the end of EAP-FAST provisioning conversation. Provisioning conversation should always finish with sending requested one or more PACs to the client. Legacy client may not ask for specific PAC since in initial draft of EAP-FAST protocol there was only one PAC type and it was unnecessary to specify it. ISE provides legacy Tunnel V1 PAC in such case. More advanced client may reequest several PAC types but they need to conform certain rules. For example, ISE cannot provide User Authorization PAC if Tunnel PAC was not requested."
    },
    "12230": {
        "code": 12230,
        "severity": "INFO",
        "text": "Ignore any PAC requests in PAC-less mode",
        "description": "ISE ignores any PAC requests when it is configured for PAC-less mode"
    },
    "12231": {
        "code": 12231,
        "severity": "INFO",
        "text": "Ignore Machine Authorization PAC request when there is no EAP chaining",
        "description": "ISE ignores Machine Authorization PAC request when there is no EAP chaining happens in the conversation. Machine Authorization PAC can be provided only during EAP chaining conversation. Note that EAP chaining can be configured in ISE but disabled or not supported in client so the conversation was conducted in no chaining mode."
    },
    "12232": {
        "code": 12232,
        "severity": "WARN",
        "text": "Cannot decrypt PAC because of specified master key was not found - rejecting the PAC",
        "description": "Received from the client a PAC that cannot be decrypted because of specified master key was not found. Rejecting it."
    },
    "12233": {
        "code": 12233,
        "severity": "INFO",
        "text": "Cisco IP Phone detected. Turn EAP chaining off",
        "description": "Turn EAP chaining off for Cisco IP Phone authentication"
    },
    "12234": {
        "code": 12234,
        "severity": "INFO",
        "text": "Client is detected as Cisco IP Phone",
        "description": "Client is detected as Cisco IP Phone"
    },
    "12235": {
        "code": 12235,
        "severity": "WARN",
        "text": "Unexpectedly received empty TLS message during EAP-FAST handshake; treating as a rejection by the client",
        "description": "While trying to negotiate a TLS handshake with the client inside the EAP-FAST tunnel, ISE expected to receive a non-empty TLS message or TLS alert message, but instead received an empty TLS message. This could be due to an inconformity in the implementation of the protocol between ISE and the supplicant. ISE treated the unexpected message as a sign that the client rejected the tunnel renegotiation."
    },
    "12236": {
        "code": 12236,
        "severity": "WARN",
        "text": "Machine Authorization PAC I-ID does not match user identity. Ignoring this Machine Authorization PAC request",
        "description": "Machine Authorization PAC I-ID does not match user identity. Ignoring this Machine Authorization PAC request"
    },
    "12300": {
        "code": 12300,
        "severity": "INFO",
        "text": "Prepared EAP-Request proposing PEAP with challenge",
        "description": "Created an EAP-Request packet proposing to use the PEAP protocol, and also providing a PEAP challenge, for attachment to a RADIUS message. The PEAP protocol was proposed because it was one of the EAP-based protocols allowed in Allowed Protocols."
    },
    "12301": {
        "code": 12301,
        "severity": "INFO",
        "text": "Extracted EAP-Response/NAK requesting to use PEAP instead",
        "description": "Extracted from the RADIUS message an EAP-Response/NAK packet, rejecting the previously-proposed EAP-based protocol, and requesting to use PEAP instead, per the configuration of the client's supplicant."
    },
    "12302": {
        "code": 12302,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing PEAP challenge-response and accepting PEAP as negotiated",
        "description": "Extracted from the RADIUS message an EAP-Response packet containing a PEAP challenge-response, and accepting PEAP as negotiated."
    },
    "12303": {
        "code": 12303,
        "severity": "WARN",
        "text": "Failed to negotiate EAP because PEAP not allowed in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the previously-proposed EAP-based protocol, and requesting to use PEAP instead. However, PEAP is not allowed in Allowed Protocols."
    },
    "12304": {
        "code": 12304,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing PEAP challenge-response",
        "description": "Continuing the PEAP protocol; processing the PEAP challenge-response in the extracted EAP-Response."
    },
    "12305": {
        "code": 12305,
        "severity": "INFO",
        "text": "Prepared EAP-Request with another PEAP challenge",
        "description": "As part of the continuation of the PEAP protocol, created an EAP-Request packet containing another PEAP challenge, for attachment to a RADIUS message."
    },
    "12306": {
        "code": 12306,
        "severity": "INFO",
        "text": "PEAP authentication succeeded",
        "description": "PEAP authentication succeeded."
    },
    "12307": {
        "code": 12307,
        "severity": "INFO",
        "text": "PEAP authentication failed",
        "description": "PEAP authentication failed."
    },
    "12308": {
        "code": 12308,
        "severity": "WARN",
        "text": "Client sent Result TLV indicating failure",
        "description": "Internal error, possibly in the supplicant: PEAP v0 authentication failed because client sent Result TLV indicating failure. Client indicates that it does not support Crypto-Binding TLV"
    },
    "12309": {
        "code": 12309,
        "severity": "WARN",
        "text": "PEAP handshake failed",
        "description": "PEAP handshake failed."
    },
    "12310": {
        "code": 12310,
        "severity": "INFO",
        "text": "PEAP full handshake finished successfully",
        "description": "PEAP full handshake finished successfully."
    },
    "12311": {
        "code": 12311,
        "severity": "INFO",
        "text": "PEAP session resumed successfully",
        "description": "PEAP short handshake finished successfully - resumed previous session."
    },
    "12312": {
        "code": 12312,
        "severity": "INFO",
        "text": "PEAP fast-reconnect - skipping inner method",
        "description": "PEAP fast-reconnect - skipping inner method."
    },
    "12313": {
        "code": 12313,
        "severity": "INFO",
        "text": "PEAP inner method started",
        "description": "Started the PEAP inner method."
    },
    "12314": {
        "code": 12314,
        "severity": "INFO",
        "text": "PEAP inner method finished successfully",
        "description": "PEAP inner method finished successfully."
    },
    "12315": {
        "code": 12315,
        "severity": "INFO",
        "text": "PEAP inner method finished with failure",
        "description": "PEAP inner method finished with failure."
    },
    "12316": {
        "code": 12316,
        "severity": "WARN",
        "text": "PEAP version negotiation failed",
        "description": "PEAP version negotiation failed, apparently because the supplicant supports neither v0 nor v1."
    },
    "12317": {
        "code": 12317,
        "severity": "INFO",
        "text": "PEAP fast-reconnect failed; starting inner method",
        "description": "PEAP fast-reconnect failed, possibly due to internal caching-related issues, or to the possibility that the inner method used in the previous authentication is no longer enabled for PEAP. ISE needs to conduct the full PEAP authentication when fast reconnect is enabled in PEAP settings. Starting inner method."
    },
    "12318": {
        "code": 12318,
        "severity": "INFO",
        "text": "Successfully negotiated PEAP version 0",
        "description": "Successfully negotiated PEAP version 0."
    },
    "12319": {
        "code": 12319,
        "severity": "INFO",
        "text": "Successfully negotiated PEAP version 1",
        "description": "Successfully negotiated PEAP version 1."
    },
    "12320": {
        "code": 12320,
        "severity": "WARN",
        "text": "Client failed to acknowledge receipt of success or failure result",
        "description": "Internal error, possibly in the supplicant: PEAP v1 authentication failed because client failed to acknowledge receipt of success or failure result."
    },
    "12321": {
        "code": 12321,
        "severity": "WARN",
        "text": "PEAP failed SSL/TLS handshake because the client rejected the ISE local-certificate",
        "description": "PEAP failed SSL/TLS handshake because the client rejected the ISE local-certificate"
    },
    "12322": {
        "code": 12322,
        "severity": "WARN",
        "text": "PEAP failed SSL/TLS handshake after a client alert",
        "description": "PEAP failed SSL/TLS handshake after a client alert"
    },
    "12323": {
        "code": 12323,
        "severity": "WARN",
        "text": "PEAP cryptobinding verification failed",
        "description": "PEAP cryptobinding verification failed."
    },
    "12324": {
        "code": 12324,
        "severity": "DEBUG",
        "text": "PEAP cryptobinding verification passed",
        "description": "PEAP cryptobinding verification passed."
    },
    "12500": {
        "code": 12500,
        "severity": "INFO",
        "text": "Prepared EAP-Request proposing EAP-TLS with challenge",
        "description": "Created an EAP-Request packet proposing to use the EAP-TLS protocol, and also providing an EAP-TLS challenge, for attachment to a RADIUS message. The TLS protocol was proposed because it was one of the EAP-based protocols allowed in Allowed Protocols."
    },
    "12501": {
        "code": 12501,
        "severity": "INFO",
        "text": "Extracted EAP-Response/NAK requesting to use EAP-TLS instead",
        "description": "Extracted from the RADIUS message an EAP-Response/NAK packet, rejecting the previously-proposed EAP-based protocol, and requesting to use EAP-TLS instead, per the configuration of the client's supplicant."
    },
    "12502": {
        "code": 12502,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing EAP-TLS challenge-response and accepting EAP-TLS as negotiated",
        "description": "Extracted from the RADIUS message an EAP-Response packet containing an EAP-TLS challenge-response, and accepting EAP-TLS as negotiated"
    },
    "12503": {
        "code": 12503,
        "severity": "WARN",
        "text": "Failed to negotiate EAP because EAP-TLS not enabled in Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the previously-proposed EAP-based protocol, and requesting to use EAP-TLS instead. However, EAP-TLS is not allowed in the Allowed Protocols."
    },
    "12504": {
        "code": 12504,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing EAP-TLS challenge-response",
        "description": "Continuing the EAP-TLS protocol; processing the EAP-TLS challenge-response in the extracted EAP-Response."
    },
    "12505": {
        "code": 12505,
        "severity": "INFO",
        "text": "Prepared EAP-Request with another EAP-TLS challenge",
        "description": "As part of the continuation of the EAP-TLS protocol, created an EAP-Request packet containing another EAP-TLS challenge, for attachment to a RADIUS message."
    },
    "12506": {
        "code": 12506,
        "severity": "INFO",
        "text": "EAP-TLS authentication succeeded",
        "description": "EAP-TLS authentication succeeded."
    },
    "12507": {
        "code": 12507,
        "severity": "INFO",
        "text": "EAP-TLS authentication failed",
        "description": "EAP-TLS authentication failed."
    },
    "12508": {
        "code": 12508,
        "severity": "WARN",
        "text": "EAP-TLS handshake failed",
        "description": "EAP-TLS handshake failed."
    },
    "12509": {
        "code": 12509,
        "severity": "INFO",
        "text": "EAP-TLS full handshake finished successfully",
        "description": "EAP-TLS full handshake finished successfully."
    },
    "12510": {
        "code": 12510,
        "severity": "INFO",
        "text": "EAP-TLS session resumed successfully",
        "description": "EAP-TLS short handshake finished successfully - resumed previous session."
    },
    "12511": {
        "code": 12511,
        "severity": "WARN",
        "text": "Unexpectedly received TLS alert message; treating as a rejection by the client",
        "description": "While trying to negotiate a TLS handshake with the client, ISE received an unexpected TLS alert message. This might be due to the supplicant not trusting the ISE server certificate for some reason. ISE treated the unexpected message as a sign that the client rejected the tunnel establishment."
    },
    "12512": {
        "code": 12512,
        "severity": "WARN",
        "text": "Treat the unexpected TLS acknowledge message as a rejection from the client",
        "description": "Treat the unexpected TLS acknowledge message during tunnel building as a rejection from the client"
    },
    "12513": {
        "code": 12513,
        "severity": "WARN",
        "text": "Could not establish the EAP TLS SSL session",
        "description": "Could not establish the EAP TLS SSL session"
    },
    "12514": {
        "code": 12514,
        "severity": "WARN",
        "text": "EAP-TLS failed SSL/TLS handshake because of an unknown CA in the client certificates chain",
        "description": "EAP-TLS failed SSL/TLS handshake because of an unknown CA in the client certificates chain"
    },
    "12515": {
        "code": 12515,
        "severity": "WARN",
        "text": "EAP-TLS failed SSL/TLS handshake because of an expired CRL associated with a CA in the client certificates chain",
        "description": "EAP-TLS failed SSL/TLS handshake because of an expired CRL associated with a CA in the client certificates chain"
    },
    "12516": {
        "code": 12516,
        "severity": "WARN",
        "text": "EAP-TLS failed SSL/TLS handshake because of an expired certificate in the client certificates chain",
        "description": "EAP-TLS failed SSL/TLS handshake because of an expired certificate in the client certificates chain"
    },
    "12517": {
        "code": 12517,
        "severity": "WARN",
        "text": "EAP-TLS failed SSL/TLS handshake because of a revoked certificate in the client certificate chain",
        "description": "EAP-TLS failed SSL/TLS handshake because of a revoked certificate in the client certificate chain"
    },
    "12518": {
        "code": 12518,
        "severity": "WARN",
        "text": "EAP-TLS failed SSL/TLS handshake because of a bad certificate in the client certificate chain",
        "description": "EAP-TLS failed SSL/TLS handshake because of a bad certificate in the client certificate chain"
    },
    "12519": {
        "code": 12519,
        "severity": "WARN",
        "text": "EAP-TLS failed SSL/TLS handshake because of an unsupported certificate in the client certificate chain",
        "description": "EAP-TLS failed SSL/TLS handshake because of an unsupported certificate in the client certificate chain"
    },
    "12520": {
        "code": 12520,
        "severity": "WARN",
        "text": "EAP-TLS failed SSL/TLS handshake because the client rejected the ISE local-certificate",
        "description": "EAP-TLS failed SSL/TLS handshake because the client rejected the ISE local-certificate"
    },
    "12521": {
        "code": 12521,
        "severity": "WARN",
        "text": "EAP-TLS failed SSL/TLS handshake after a client alert",
        "description": "EAP-TLS failed SSL/TLS handshake after a client alert"
    },
    "12522": {
        "code": 12522,
        "severity": "INFO",
        "text": "Prepared EAP-Request for inner method proposing EAP-TLS with challenge",
        "description": "Created an EAP-Request packet proposing to use the EAP-TLS protocol for the inner method, and also providing an TLS challenge, for attachment to a RADIUS message. The EAP-TLS protocol was proposed because it was one of the EAP-based protocols allowed in Allowed Protocols."
    },
    "12523": {
        "code": 12523,
        "severity": "INFO",
        "text": "Extracted EAP-Response/NAK for inner method requesting to use EAP-TLS instead",
        "description": "From the EAP-Response packet encountered in the outer EAP method, extracted an EAP-Response/NAK packet, rejecting the EAP-based protocol previously proposed for the inner method, and requesting to use EAP-TLS instead, per the configuration of the client's supplicant."
    },
    "12524": {
        "code": 12524,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing EAP-TLS challenge-response for inner method and accepting EAP-TLS as negotiated",
        "description": "From the EAP-Response packet encountered in the outer EAP method, extracted an EAP-Response packet containing an EAP-TLS challenge-response, and accepting EAP-TLS as negotiated for the inner method."
    },
    "12525": {
        "code": 12525,
        "severity": "WARN",
        "text": "Failed to negotiate EAP for inner method because EAP-TLS not allowed in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the EAP-based protocol previously proposed for the inner method, and requesting to use EAP-TLS instead. However, EAP-TLS is not allowed in Allowed Protocols."
    },
    "12526": {
        "code": 12526,
        "severity": "INFO",
        "text": "Extracted EAP-Response for inner method containing TLS challenge-response",
        "description": "Continuing the inner EAP-TLS protocol; processing the EAP-TLS challenge-response in the extracted EAP-Response."
    },
    "12527": {
        "code": 12527,
        "severity": "INFO",
        "text": "Prepared EAP-Request for inner method with another EAP-TLS challenge",
        "description": "As part of the continuation of the inner EAP-TLS protocol, created an EAP-Request packet containing another EAP-TLS challenge, for encapsulation within the outer EAP method's outgoing EAP-Request packet, and for ultimate attachment to a RADIUS message."
    },
    "12528": {
        "code": 12528,
        "severity": "INFO",
        "text": "Inner EAP-TLS authentication succeeded",
        "description": "EAP-TLS authentication for the inner EAP method succeeded."
    },
    "12529": {
        "code": 12529,
        "severity": "INFO",
        "text": "Inner EAP-TLS authentication failed",
        "description": "EAP-TLS authentication for the inner EAP method failed."
    },
    "12530": {
        "code": 12530,
        "severity": "WARN",
        "text": "EAP-TLS failed SSL/TLS handshake because of the client certificate is not yet valid",
        "description": "EAP-TLS failed SSL/TLS handshake because of the client certificate is not yet valid"
    },
    "12531": {
        "code": 12531,
        "severity": "WARN",
        "text": "Successfully updated EAP-TLS seed key",
        "description": "Successfully updated the EAP-TLS seed key, used for further generation of master keys."
    },
    "12532": {
        "code": 12532,
        "severity": "WARN",
        "text": "Failed to update seed key",
        "description": "Internal error: failed to update EAP-TLS seed key, needed for further generation of master keys, most likely because an internal configuration object could not be properly fetched."
    },
    "12533": {
        "code": 12533,
        "severity": "INFO",
        "text": "Updated EAP-TLS Master Key Generation period",
        "description": "Updated the EAP-TLS Master Key Generation period."
    },
    "12534": {
        "code": 12534,
        "severity": "INFO",
        "text": "EAP-TLS session ticket received from supplicant",
        "description": "EAP-TLS session ticket received from supplicant."
    },
    "12535": {
        "code": 12535,
        "severity": "WARN",
        "text": "The EAP-TLS session ticket received from supplicant is expired",
        "description": "Received from the supplicant the session ticket that has expired. Rejecting it."
    },
    "12536": {
        "code": 12536,
        "severity": "WARN",
        "text": "Failed to verify the EAP-TLS session ticket received from supplicant.",
        "description": "Failed to verify the EAP-TLS session ticket received from supplicant."
    },
    "12537": {
        "code": 12537,
        "severity": "WARN",
        "text": "The EAP-TLS session ticket identity does not match the EAP identity",
        "description": "The EAP-TLS session ticket identity does not match the EAP identity."
    },
    "12538": {
        "code": 12538,
        "severity": "WARN",
        "text": "The EAP-TLS session ticket received from supplicant contains an invalid authentication code",
        "description": "The EAP-TLS session ticket received from supplicant contains an invalid authentication code."
    },
    "12539": {
        "code": 12539,
        "severity": "WARN",
        "text": "Failed to decrypt the EAP-TLS session ticket received from supplicant",
        "description": "Failed to decrypt the EAP-TLS session ticket received from supplicant."
    },
    "12540": {
        "code": 12540,
        "severity": "INFO",
        "text": "Successfully finished EAP-TLS session ticket provisioning/update",
        "description": "Successfully finished EAP-TLS session ticket provisioning/update,"
    },
    "12541": {
        "code": 12541,
        "severity": "INFO",
        "text": "EAP-TLS needs to proactively update session ticket that is about to expire",
        "description": "EAP-TLS needs to proactively update session ticket that is about to expire."
    },
    "12542": {
        "code": 12542,
        "severity": "WARN",
        "text": "The EAP-TLS session ticket received from supplicant while the stateless session resume is disabled. Performing full authentication",
        "description": "The EAP-TLS session ticket received from supplicant while the stateless session resume is disabled. Performing full authentication."
    },
    "12543": {
        "code": 12543,
        "severity": "WARN",
        "text": "Cannot generate a new session ticket",
        "description": "Encountered an internal error while attempting to issue a new session ticket."
    },
    "12544": {
        "code": 12544,
        "severity": "WARN",
        "text": "The EAP-TLS session ticket contains invalid Authority ID",
        "description": "The Authority ID of the session ticket received from the client does not match that of the ISE deployment that processed the authentication request, probably because the session ticket of the client was created by another ISE deployment."
    },
    "12545": {
        "code": 12545,
        "severity": "INFO",
        "text": "Client requested EAP-TLS session ticket",
        "description": "Client sent empty EAP-TLS session ticket client hello extension awaiting new EAP-TLS session ticket in reposnse from ISE."
    },
    "12546": {
        "code": 12546,
        "severity": "WARN",
        "text": "The EAP-TLS session ticket received from supplicant. Inner EAP-TLS does not support stateless session resume. Performing full authentication",
        "description": "The EAP-TLS session ticket received from supplicant. Inner EAP-TLS does not support stateless session resume. Performing full authentication."
    },
    "12550": {
        "code": 12550,
        "severity": "INFO",
        "text": "Sent an OCSP request to the primary OCSP server for the CA",
        "description": "Send an OCSP request to the primary OCSP server for the CA."
    },
    "12551": {
        "code": 12551,
        "severity": "INFO",
        "text": "Sent an OCSP request to the secondary OCSP server for the CA",
        "description": "Send an OCSP request to the secondary OCSP server for the CA."
    },
    "12552": {
        "code": 12552,
        "severity": "WARN",
        "text": "Conversation with OCSP server ended with failure",
        "description": "Conversation with OCSP server ended with failure."
    },
    "12553": {
        "code": 12553,
        "severity": "INFO",
        "text": "Received OCSP response",
        "description": "Received OCSP response."
    },
    "12554": {
        "code": 12554,
        "severity": "INFO",
        "text": "OCSP status of user certificate is good",
        "description": "The OCSP server reported that the user certificate status is good."
    },
    "12555": {
        "code": 12555,
        "severity": "WARN",
        "text": "OCSP status of user certificate is revoked",
        "description": "The OCSP server reported that the user certificate status is revoked."
    },
    "12556": {
        "code": 12556,
        "severity": "INFO",
        "text": "OCSP status of user certificate is unknown",
        "description": "The OCSP server reported that the user certificate status is unknown or ISE was unable to connect to the OCSP server."
    },
    "12557": {
        "code": 12557,
        "severity": "WARN",
        "text": "User Auth failed because OCSP status is unknown",
        "description": "User Auth failed because OCSP status is unknown."
    },
    "12558": {
        "code": 12558,
        "severity": "INFO",
        "text": "Performed fallback to secondary OCSP server",
        "description": "Performed fallback to secondary OCSP server."
    },
    "12559": {
        "code": 12559,
        "severity": "WARN",
        "text": "Internal error occurred during communication with the OCSP server",
        "description": "Internal error during communication with the OCSP server. The configuration of the OCSP server doesn't match the ISE OCSP client."
    },
    "12560": {
        "code": 12560,
        "severity": "WARN",
        "text": "OCSP server URL is invalid",
        "description": "OCSP server URL is invalid and cannot be properly parsed."
    },
    "12561": {
        "code": 12561,
        "severity": "WARN",
        "text": "Connection to OCSP server failed",
        "description": "Connection attempt to OCSP server failed."
    },
    "12562": {
        "code": 12562,
        "severity": "WARN",
        "text": "OCSP server response is invalid",
        "description": "OCSP server returned a response that cannot be parsed by ISE."
    },
    "12563": {
        "code": 12563,
        "severity": "WARN",
        "text": "OCSP server returned an error",
        "description": "OCSP server returned an error in response to the ISE OCSP request."
    },
    "12564": {
        "code": 12564,
        "severity": "WARN",
        "text": "OCSP server did not provide the required nonce in response",
        "description": "Specific OCSP service in ISE is configured to use nonce for OCSP server verification but the OCSP server did not provide a nonce in response."
    },
    "12565": {
        "code": 12565,
        "severity": "WARN",
        "text": "OCSP server response nonce verification failed",
        "description": "Cryptographic verification of nonce returned in OCSP server response failed."
    },
    "12566": {
        "code": 12566,
        "severity": "WARN",
        "text": "OCSP server response time verification failed",
        "description": "In the OCSP server response verification of 'This Update' or 'Next Update' fields failed."
    },
    "12567": {
        "code": 12567,
        "severity": "WARN",
        "text": "OCSP server response signature verification failed",
        "description": "OCSP server response signature verification failed."
    },
    "12568": {
        "code": 12568,
        "severity": "INFO",
        "text": "Lookup user certificate status in OCSP cache",
        "description": "Lookup user certificate status in OCSP cache."
    },
    "12569": {
        "code": 12569,
        "severity": "INFO",
        "text": "User certificate status was not found in OCSP cache",
        "description": "User certificate status was not found in OCSP cache; ISE is going to perform OCSP request to the configured OCSP server."
    },
    "12570": {
        "code": 12570,
        "severity": "INFO",
        "text": "Lookup user certificate status in OCSP cache succeeded",
        "description": "Lookup user certificate status in OCSP cache succeeded; ISE is going to use this status without performing OCSP request to the configured OCSP server."
    },
    "12571": {
        "code": 12571,
        "severity": "INFO",
        "text": "ISE will continue to CRL verification if it is configured for specific CA",
        "description": "OCSP verification either failed or returned unknown certificate status. ISE will continue to CRL verification if it is configured for specific CA."
    },
    "12572": {
        "code": 12572,
        "severity": "DEBUG",
        "text": "OCSP response not cached",
        "description": "Response from OCSP server indicates that the contents of the response should not be cached"
    },
    "12600": {
        "code": 12600,
        "severity": "INFO",
        "text": "Prepared EAP-Request proposing EAP-GTC with challenge",
        "description": "Created an EAP-Request packet to propose to use the EAP-GTC protocol, and also providing an GTC challenge, for attachment to a RADIUS message. The EAP-GTC protocol was proposed because it was one of the EAP-based protocols allowed in Allowed Protocols."
    },
    "12601": {
        "code": 12601,
        "severity": "INFO",
        "text": "Extracted EAP-Response/NAK requesting to use EAP-GTC instead",
        "description": "Extracted from the RADIUS message an EAP-Response/NAK packet, rejecting the previously-proposed EAP-based protocol, and requesting to use EAP-GTC instead, per the configuration of the client's supplicant."
    },
    "12602": {
        "code": 12602,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing EAP-GTC challenge-response and accepting EAP-GTC as negotiated",
        "description": "Extracted from the RADIUS message an EAP-Response packet containing an EAP-GTC challenge-response, and accepting EAP-GTC as negotiated."
    },
    "12603": {
        "code": 12603,
        "severity": "WARN",
        "text": "Failed to negotiate EAP because EAP-GTC not allowed in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the previously-proposed EAP-based protocol, and requesting to use EAP-GTC instead. However, EAP-GTC is not allowed in Allowed Protocols."
    },
    "12604": {
        "code": 12604,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing GTC challenge-response",
        "description": "Continuing the EAP-GTC protocol; processing the EAP-GTC challenge-response in the extracted EAP-Response."
    },
    "12605": {
        "code": 12605,
        "severity": "INFO",
        "text": "Prepared EAP-Request with another EAP-GTC challenge",
        "description": "As part of the continuation of the EAP-GTC protocol, created an EAP-Request packet containing another EAP-GTC challenge, for attachment to a RADIUS message."
    },
    "12606": {
        "code": 12606,
        "severity": "INFO",
        "text": "Prepared EAP-Request for inner method proposing EAP-GTC with challenge",
        "description": "Created an EAP-Request packet to propose to use the EAP-GTC protocol for the inner method, and also providing an GTC challenge, for attachment to a RADIUS message. The EAP-GTC protocol was proposed because it was one of the EAP-based protocols allowed in Allowed Protocols."
    },
    "12607": {
        "code": 12607,
        "severity": "INFO",
        "text": "Extracted EAP-Response/NAK for inner method requesting to use EAP-GTC instead",
        "description": "From the EAP-Response packet encountered in the outer EAP method, extracted an EAP-Response/NAK packet, rejecting the EAP-based protocol previously proposed for the inner method, and requesting to use EAP-GTC instead, per the configuration of the client's supplicant."
    },
    "12608": {
        "code": 12608,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing EAP-GTC challenge-response for inner method and accepting EAP-GTC as negotiated",
        "description": "From the EAP-Response packet encountered in the outer EAP method, extracted an EAP-Response packet containing an EAP-GTC challenge-response, and accepting EAP-GTC as negotiated for the inner method."
    },
    "12609": {
        "code": 12609,
        "severity": "WARN",
        "text": "Failed to negotiate EAP for inner method because EAP-GTC not allowed in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the EAP-based protocol previously proposed for the inner method, and requesting to use EAP-GTC instead. However, EAP-GTC is not allowed in Allowed Protocols."
    },
    "12610": {
        "code": 12610,
        "severity": "INFO",
        "text": "Extracted EAP-Response for inner method containing GTC challenge-response",
        "description": "Continuing the inner EAP-GTC protocol; processing the EAP-GTC challenge-response in the extracted EAP-Response."
    },
    "12611": {
        "code": 12611,
        "severity": "INFO",
        "text": "Prepared EAP-Request for inner method with another EAP-GTC challenge",
        "description": "As part of the continuation of the inner EAP-GTC protocol, created an EAP-Request packet containing another EAP-GTC challenge, for encapsulation within the outer EAP method's outgoing EAP-Request packet, and for ultimate attachment to a RADIUS message."
    },
    "12612": {
        "code": 12612,
        "severity": "INFO",
        "text": "EAP-GTC authentication succeeded",
        "description": "EAP-GTC authentication has succeeded."
    },
    "12613": {
        "code": 12613,
        "severity": "INFO",
        "text": "EAP-GTC authentication failed",
        "description": "EAP-GTC authentication has failed."
    },
    "12614": {
        "code": 12614,
        "severity": "INFO",
        "text": "Inner EAP-GTC authentication succeeded",
        "description": "EAP-GTC authentication for the inner EAP method has succeeded."
    },
    "12615": {
        "code": 12615,
        "severity": "INFO",
        "text": "Inner EAP-GTC authentication failed",
        "description": "EAP-GTC authentication for the inner EAP method has failed."
    },
    "12616": {
        "code": 12616,
        "severity": "WARN",
        "text": "GTC username doesn't match inner method EAP-Response/Identity",
        "description": "The GTC username does not match the username received in the inner method EAP-Response/Identity packet. One possible reason might be that the client's supplicant is preconfigured with another username not matching that entered by the user."
    },
    "12617": {
        "code": 12617,
        "severity": "WARN",
        "text": "Internal error: invalid EAP-GTC state",
        "description": "Internal error: invalid EAP-GTC state."
    },
    "12618": {
        "code": 12618,
        "severity": "INFO",
        "text": "Failed to parse EAP-GTC packet",
        "description": "Failed to parse the EAP-GTC packet."
    },
    "12619": {
        "code": 12619,
        "severity": "INFO",
        "text": "Received EAP-GTC packet with invalid argument",
        "description": "Received an EAP-GTC packet with an invalid argument."
    },
    "12621": {
        "code": 12621,
        "severity": "INFO",
        "text": "EAP-GTC password change attempt failed",
        "description": "The attempt to change the password failed because the Allowed Protocols does not allow password change for the GTC inner method."
    },
    "12622": {
        "code": 12622,
        "severity": "DEBUG",
        "text": "EAP-GTC password change attempt passed",
        "description": "The EAP-GTC password change attempt has passed."
    },
    "12623": {
        "code": 12623,
        "severity": "INFO",
        "text": "EAP-GTC authentication attempt failed",
        "description": "The EAP-GTC authentication attempt has failed."
    },
    "12624": {
        "code": 12624,
        "severity": "DEBUG",
        "text": "EAP-GTC authentication attempt passed",
        "description": "The EAP-GTC authentication attempt has passed."
    },
    "12625": {
        "code": 12625,
        "severity": "DEBUG",
        "text": "Valid EAP-Key-Name attribute received",
        "description": "A valid EAP-Key-Name attribute was received. ISE will provide the EAP-Key-Name attribute filled with EAP-Session-ID on RADIUS Access-Accept message."
    },
    "12626": {
        "code": 12626,
        "severity": "WARN",
        "text": "Invalid EAP-Key-Name attribute received",
        "description": "An invalid EAP-Key-Name attribute was received. The attribute value must be empty."
    },
    "12628": {
        "code": 12628,
        "severity": "WARN",
        "text": "Invalid operation performed",
        "description": "Internal error, invalid operation performed, cannot continue current conversation. Refer to debug log for detailed information and contact TAC engineer to report the problem"
    },
    "12650": {
        "code": 12650,
        "severity": "WARN",
        "text": "Invalid operation performed",
        "description": "Internal error, invalid operation performed. Refer to debug log for detailed information and contact TAC engineer to report the problem"
    },
    "12651": {
        "code": 12651,
        "severity": "INFO",
        "text": "Accept client on authenticated provisioning",
        "description": "Accept client on authenticated provisioning"
    },
    "12652": {
        "code": 12652,
        "severity": "INFO",
        "text": "Accept client on provisioning after invalid PAC fallback",
        "description": "Accept client on provisioning after invalid PAC fallback"
    },
    "12653": {
        "code": 12653,
        "severity": "WARN",
        "text": "Failed to negotiate EAP for inner method because EAP-GTC denied for anonymous PAC provisioning",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the EAP-based protocol previously proposed for the inner method, and requesting to use EAP-GTC instead. However, EAP-GTC cannot be used for anonymous PAC provisioning."
    },
    "12700": {
        "code": 12700,
        "severity": "INFO",
        "text": "Prepared EAP-Request proposing LEAP with challenge",
        "description": "Created an EAP-Request packet to propose to use the LEAP protocol, and also providing a LEAP challenge, for attachment to a RADIUS message. The LEAP protocol was proposed because it was one of the EAP-based protocols allowed in Allowed Protocols."
    },
    "12701": {
        "code": 12701,
        "severity": "INFO",
        "text": "Extracted EAP-Response/NAK requesting to use LEAP instead",
        "description": "Extracted from the RADIUS message an EAP-Response/NAK packet, rejecting the previously-proposed EAP-based protocol, and requesting to use LEAP instead, per the configuration of the client's supplicant."
    },
    "12702": {
        "code": 12702,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing LEAP challenge-response and accepting LEAP as negotiated",
        "description": "Extracted from the RADIUS message an EAP-Response packet containing a LEAP challenge-response, and accepting LEAP as negotiated"
    },
    "12703": {
        "code": 12703,
        "severity": "WARN",
        "text": "Failed to negotiate EAP because LEAP not allowed in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the previously-proposed EAP-based protocol, and requesting to use LEAP instead. However, LEAP is not allowed in Allowed Protocols."
    },
    "12704": {
        "code": 12704,
        "severity": "INFO",
        "text": "LEAP completed. Sent EAP-Response containing LEAP challenge-response and cisco-av-pair containing LEAP session-key",
        "description": "Completed the LEAP protocol. Sent the LEAP challenge-response in EAP-Response, and LEAP session-key in cisco-av-pair."
    },
    "12705": {
        "code": 12705,
        "severity": "INFO",
        "text": "LEAP authentication passed; Continuing protocol",
        "description": "LEAP authentication passed. Continue LEAP protocol."
    },
    "12706": {
        "code": 12706,
        "severity": "INFO",
        "text": "LEAP authentication failed; Finishing protocol",
        "description": "LEAP authentication has failed. Protocol finished with a failure."
    },
    "12707": {
        "code": 12707,
        "severity": "INFO",
        "text": "LEAP authentication error; Finishing protocol",
        "description": "A LEAP authentication error has occurred. Protocol finished with an error."
    },
    "12708": {
        "code": 12708,
        "severity": "WARN",
        "text": "LEAP packet validation failed",
        "description": "Failed to validate LEAP packet."
    },
    "12709": {
        "code": 12709,
        "severity": "WARN",
        "text": "LEAP packet parsing failed",
        "description": "Failed to parse LEAP packet."
    },
    "12710": {
        "code": 12710,
        "severity": "WARN",
        "text": "LEAP internal error: Invalid state",
        "description": "LEAP internal error: Invalid state."
    },
    "12711": {
        "code": 12711,
        "severity": "WARN",
        "text": "LEAP internal error: LEAP challenge not created",
        "description": "LEAP internal error: LEAP challenge was not created."
    },
    "12712": {
        "code": 12712,
        "severity": "WARN",
        "text": "LEAP internal error: LEAP challenge-response and session-key not created",
        "description": "LEAP internal error: LEAP challenge-response and session-key were not created."
    },
    "12750": {
        "code": 12750,
        "severity": "WARN",
        "text": "Failed to negotiate EAP for inner method because EAP-MSCHAP not allowed under PEAP configuration in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the EAP-based protocol previously proposed for the inner method, and requesting to use EAP-MSCHAP instead. However, EAP-MSCHAP is not allowed under PEAP configuration in Allowed Protocols."
    },
    "12751": {
        "code": 12751,
        "severity": "WARN",
        "text": "Failed to negotiate EAP for inner method because EAP-MSCHAP not allowed under EAP-FAST configuration in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the EAP-based protocol previously proposed for the inner method, and requesting to use EAP-MSCHAP instead. However, EAP-MSCHAP is not allowed under EAP-FAST configuration in Allowed Protocols."
    },
    "12752": {
        "code": 12752,
        "severity": "WARN",
        "text": "Failed to negotiate EAP for inner method because EAP-TLS not allowed under PEAP configuration in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the EAP-based protocol that was previously proposed for the inner method, and requested to use EAP-TLS instead. However, ISE does not allow EAP-TLS under PEAP configuration in the Allowed Protocols."
    },
    "12753": {
        "code": 12753,
        "severity": "WARN",
        "text": "Failed to negotiate EAP for inner method because EAP-TLS not allowed under EAP-FAST configuration in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the EAP-based protocol that was previously proposed for the inner method, and requested to use EAP-TLS instead. However, ISE does not allow EAP-TLS under EAP-FAST configuration in the Allowed Protocols."
    },
    "12754": {
        "code": 12754,
        "severity": "WARN",
        "text": "Failed to negotiate EAP for inner method because EAP-GTC not allowed under PEAP configuration in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the EAP-based protocol previously proposed for the inner method, and requesting to use EAP-GTC instead. However, EAP-GTC is not allowed under PEAP configuration in Allowed Protocols."
    },
    "12755": {
        "code": 12755,
        "severity": "WARN",
        "text": "Failed to negotiate EAP for inner method because EAP-GTC not allowed under EAP-FAST configuration in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the EAP-based protocol that was previously proposed for the inner method, and requested to use EAP-GTC instead. However, ISE does not allow EAP-GTC under EAP-FAST configuration in Allowed Protocols."
    },
    "12800": {
        "code": 12800,
        "severity": "INFO",
        "text": "Extracted first TLS record; TLS handshake started",
        "description": "For the first time in the current EAP conversation, extracted from the EAP-Response packet a TLS record, presumably containing in turn a TLS ClientHello message. ISE recognizes this as an attempt by the client's supplicant to initiate a TLS handshake."
    },
    "12801": {
        "code": 12801,
        "severity": "INFO",
        "text": "Prepared TLS ChangeCipherSpec message",
        "description": "As part of the TLS handshake currently in progress, prepared a TLS record containing a TLS ChangeCipherSpec message, for encapsulation within the outgoing EAP-Request packet, and for ultimate attachment to a RADIUS message."
    },
    "12802": {
        "code": 12802,
        "severity": "INFO",
        "text": "Prepared TLS Finished message",
        "description": "As part of the TLS handshake currently in progress, prepared a TLS record containing a TLS Finished message, for encapsulation within the outgoing EAP-Request packet, and for ultimate attachment to a RADIUS message. ISE is indicating that it is ready to finish the TLS handshake."
    },
    "12803": {
        "code": 12803,
        "severity": "INFO",
        "text": "Extracted TLS ChangeCipherSpec message",
        "description": "As part of the TLS handshake currently in progress, extracted from the EAP-Response packet a TLS record containing a TLS ChangeCipherSpec message."
    },
    "12804": {
        "code": 12804,
        "severity": "INFO",
        "text": "Extracted TLS Finished message",
        "description": "As part of the TLS handshake currently in progress, extracted from the EAP-Response packet a TLS record containing a TLS Finished message. The client's supplicant is indicating that it is ready to finish the TLS handshake."
    },
    "12805": {
        "code": 12805,
        "severity": "INFO",
        "text": "Extracted TLS ClientHello message",
        "description": "As part of the TLS handshake currently in progress, extracted from the EAP-Response packet a TLS record containing a TLS ClientHello message."
    },
    "12806": {
        "code": 12806,
        "severity": "INFO",
        "text": "Prepared TLS ServerHello message",
        "description": "As part of the TLS handshake currently in progress, prepared a TLS record containing a TLS ServerHello message, for encapsulation within the outgoing EAP-Request packet, and for ultimate attachment to a RADIUS message."
    },
    "12807": {
        "code": 12807,
        "severity": "INFO",
        "text": "Prepared TLS Certificate message",
        "description": "As part of the TLS handshake currently in progress, prepared a TLS record containing a TLS Certificate message, in turn containing the ISE local server certificate, for encapsulation within the outgoing EAP-Request packet, and for ultimate attachment to a RADIUS message."
    },
    "12808": {
        "code": 12808,
        "severity": "INFO",
        "text": "Prepared TLS ServerKeyExchange message",
        "description": "As part of the TLS handshake currently in progress, prepared a TLS record containing a TLS ServerKeyExchange message, for encapsulation within the outgoing EAP-Request packet, and for ultimate attachment to a RADIUS message."
    },
    "12809": {
        "code": 12809,
        "severity": "INFO",
        "text": "Prepared TLS CertificateRequest message",
        "description": "As part of the TLS handshake currently in progress, prepared a TLS record containing a TLS CertificateRequest message, for encapsulation within the outgoing EAP-Request packet, and for ultimate attachment to a RADIUS message."
    },
    "12810": {
        "code": 12810,
        "severity": "INFO",
        "text": "Prepared TLS ServerDone message",
        "description": "As part of the TLS handshake currently in progress, prepared a TLS record containing a TLS ServerDone message, for encapsulation within the outgoing EAP-Request packet, and for ultimate attachment to a RADIUS message."
    },
    "12811": {
        "code": 12811,
        "severity": "INFO",
        "text": "Extracted TLS Certificate message containing client certificate",
        "description": "As part of the TLS handshake currently in progress, extracted from the EAP-Response packet a TLS record containing a TLS Certificate message, in turn containing the client's certificate."
    },
    "12812": {
        "code": 12812,
        "severity": "INFO",
        "text": "Extracted TLS ClientKeyExchange message",
        "description": "As part of the TLS handshake currently in progress, extracted from the EAP-Response packet a TLS record containing a TLS ClientKeyExchange message."
    },
    "12813": {
        "code": 12813,
        "severity": "INFO",
        "text": "Extracted TLS CertificateVerify message",
        "description": "As part of the TLS handshake currently in progress, extracted from the EAP-Response packet a TLS record containing a TLS CertificateVerify message."
    },
    "12814": {
        "code": 12814,
        "severity": "INFO",
        "text": "Prepared TLS Alert message",
        "description": "ISE has detected a problem with the TLS handshake currently in progress. Prepared a TLS record containing a TLS Alert message, for encapsulation within the outgoing EAP-Request packet, and for ultimate attachment to a RADIUS message."
    },
    "12815": {
        "code": 12815,
        "severity": "INFO",
        "text": "Extracted TLS Alert message",
        "description": "As part of the TLS handshake currently in progress, extracted from the EAP-Response packet a TLS record containing a TLS Alert message, indicating that the client has detected a problem with the handshake."
    },
    "12816": {
        "code": 12816,
        "severity": "INFO",
        "text": "TLS handshake succeeded",
        "description": "The TLS handshake initiated by the client's supplicant has completed successfully."
    },
    "12817": {
        "code": 12817,
        "severity": "INFO",
        "text": "TLS handshake failed",
        "description": "The TLS handshake initiated by the client's supplicant has failed."
    },
    "12818": {
        "code": 12818,
        "severity": "WARN",
        "text": "Expected TLS acknowledge for last alert but received another message",
        "description": "ISE recently sent TLS alert to supplicant and expected TLS acknowledge from supplicant for the alert but received another message. This could be due to a possible incomformity in the implementation of the protocol between ISE and the supplicant."
    },
    "12819": {
        "code": 12819,
        "severity": "WARN",
        "text": "Expected TLS acknowledge for handshake succeeded but received another message",
        "description": "ISE recently has successfully finished TLS handshake with the supplicant and expected TLS acknowledge from supplicant to confirm the handshake but received another message. This could be due to improper supplicant configuration or a possible incomformity in the implementation of the protocol between ISE and the supplicant."
    },
    "12830": {
        "code": 12830,
        "severity": "WARN",
        "text": "CRL verification bypassed",
        "description": "ISE was unable to download CRL; CRL verification bypassed"
    },
    "12831": {
        "code": 12831,
        "severity": "WARN",
        "text": "Unable to download CRL",
        "description": "ISE was unable to download CRL; corresponding authentication has failed"
    },
    "12832": {
        "code": 12832,
        "severity": "WARN",
        "text": "Tunnel build with local server certificate is not yet active or it has already expired",
        "description": "Local server certificate has a specific period of time when it is active and can be used. The certificate cannot be used now because of either its 'Valid From' field is greater then the current date and time or its 'Valid To' field is less then the current date and time."
    },
    "12833": {
        "code": 12833,
        "severity": "WARN",
        "text": "EAP-FAST provisioning mode is restricted to anonymous",
        "description": "Local server certificate is invalid because it is not yet active or it has already expired. Thus, the EAP-FAST provisioning mode is restricted to anonymous (if anonymous provisioning is allowed in configuration). Authenticated provisioning is prohibited even if it is allowed in configuration"
    },
    "12834": {
        "code": 12834,
        "severity": "WARN",
        "text": "ISE used a CRL that is not active yet or has expired",
        "description": "ISE used a CRL even though it is not yet active or has expired"
    },
    "12835": {
        "code": 12835,
        "severity": "WARN",
        "text": "Expired certificate was accepted from the client",
        "description": "ISE accepted expired user or machine certificate per configuration"
    },
    "12850": {
        "code": 12850,
        "severity": "WARN",
        "text": "Received NAK TLV. Client rejected the conversation",
        "description": "ISE expects for regular conversation continuation but client sent NAK TLV inside the tunnel. It means that client rejected conversation for some reason that is unknown to ISE. Known issue: CSSC 5.1.1.10 sends NAK TLV during EAP-FAST/EAP-GTC conversation to reject the conversation according to user's input."
    },
    "12851": {
        "code": 12851,
        "severity": "WARN",
        "text": "Received unexpected EAP NAK message. Client rejected the conversation",
        "description": "ISE expects for regular conversation continuation but client sent outer EAP method NAK message. It means that client rejected conversation for some reason that is unknown to ISE. Known issue: CSSC 5.1.1.10 sends outer EAP method NAK during EAP-FAST/EAP-GTC conversation to reject the conversation according to user's input."
    },
    "12852": {
        "code": 12852,
        "severity": "WARN",
        "text": "Cryptographic processing of received buffer failed",
        "description": "ISE received invalid encrypted buffer from client. Cryptographic processing of this buffer failed."
    },
    "12853": {
        "code": 12853,
        "severity": "WARN",
        "text": "Empty EAP-GTC message received",
        "description": "ISE received empty EAP-GTC message inside the tunnel during EAP-FAST conversation. Known issue: CSSC 5.1.1.10 sends empty EaP-GTC message after it prompts user to retry entering passcode."
    },
    "12854": {
        "code": 12854,
        "severity": "WARN",
        "text": "Cannot authenticate because password was not present or was empty",
        "description": "ISE did not receive user password or received empty password. Plain password authentication cannot be performed with no password or empty password"
    },
    "12855": {
        "code": 12855,
        "severity": "INFO",
        "text": "PAC was not sent due to authorization failure",
        "description": "ISE did not send a PAC to the supplicant because authorization failed and thus the whole conversation is considered failed"
    },
    "12856": {
        "code": 12856,
        "severity": "INFO",
        "text": "User certificate was revoked by CRL verification",
        "description": "CRL verification returned revoked certificate status."
    },
    "12857": {
        "code": 12857,
        "severity": "WARN",
        "text": "Client certificate authentication failed",
        "description": "Client certificate authentication failed"
    },
    "12914": {
        "code": 12914,
        "severity": "INFO",
        "text": "Using weak TLS cipher",
        "description": "Using weak TLS cipher"
    },
    "12915": {
        "code": 12915,
        "severity": "WARN",
        "text": "PEAP version negotiation failed",
        "description": "PEAP version negotiation failed because supplicant proposed version 1 while the option 'Allow PEAPv 0 Only' is turned on."
    },
    "12916": {
        "code": 12916,
        "severity": "WARN",
        "text": "Expected TLS acknowledge for TLS fragment but received another message",
        "description": "ISE recently has sent another TLS fragment to the supplicant and expected TLS acknowledge from supplicant to confirm the fragment before sending it the next one but received another message. This could be due to improper supplicant configuration or a possible incomformity in the implementation of the protocol between ISE and the supplicant."
    },
    "12917": {
        "code": 12917,
        "severity": "WARN",
        "text": "Expected TLS acknowledge for PEAPv1 protected termination but received another message",
        "description": "ISE recently has sent PEAPv1 protected termination EAP Success message to the supplicant and expected TLS acknowledge from supplicant to confirm that but received another message. This could be due to improper supplicant configuration or a possible incomformity in the implementation of the protocol between ISE and the supplicant."
    },
    "12918": {
        "code": 12918,
        "severity": "WARN",
        "text": "Supplicant sent unmatched EAP Response packet identifier",
        "description": "ISE sent EAP Request to the supplicant with a certain identifier. According to EAP specification supplicant must respond to this request with EAP Response packet with the same identifier. However the EAP identifier in the response was different from the request."
    },
    "12919": {
        "code": 12919,
        "severity": "WARN",
        "text": "Supplicant sent unmatched inner EAP Response packet identifier",
        "description": "ISE sent inner EAP Request to the supplicant with a certain identifier. According to EAP specification supplicant must respond to this request with EAP Response packet with the same identifier. However the EAP identifier in the response was different from the request."
    },
    "12929": {
        "code": 12929,
        "severity": "WARN",
        "text": "NAS sends RADIUS accounting update messages too frequently",
        "description": "NAS sends RADIUS accounting update messages too frequently"
    },
    "12930": {
        "code": 12930,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE after sending it the first PEAP message",
        "description": "Supplicant stopped responding to ISE after sending it the first PEAP message"
    },
    "12931": {
        "code": 12931,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE after sending it the first EAP-TLS message",
        "description": "Supplicant stopped responding to ISE after sending it the first EAP-TLS message"
    },
    "12932": {
        "code": 12932,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE after sending it the first EAP-FAST message",
        "description": "Supplicant stopped responding to ISE after sending it the first EAP-FAST message"
    },
    "12933": {
        "code": 12933,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE during EAP-FAST tunnel establishment",
        "description": "Supplicant stopped responding to ISE during EAP-FAST tunnel establishment"
    },
    "12934": {
        "code": 12934,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE during PEAP tunnel establishment",
        "description": "Supplicant stopped responding to ISE during PEAP tunnel establishment"
    },
    "12935": {
        "code": 12935,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE during EAP-TLS certificate exchange",
        "description": "Supplicant stopped responding to ISE during EAP-TLS certificate exchange"
    },
    "12936": {
        "code": 12936,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE after sending it inner EAP Identity Request",
        "description": "Supplicant stopped responding to ISE after sending it inner EAP Identity Request"
    },
    "12937": {
        "code": 12937,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE after sending it the first inner EAP-MSCHAPv2 message",
        "description": "Supplicant stopped responding to ISE after sending it the first inner EAP-MSCHAPv2 message"
    },
    "12938": {
        "code": 12938,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE after sending it the first inner EAP-GTC message",
        "description": "Supplicant stopped responding to ISE after sending it the first inner EAP-GTC message"
    },
    "12939": {
        "code": 12939,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE after sending it the first inner EAP-TLS message",
        "description": "Supplicant stopped responding to ISE after sending it the first inner EAP-TLS message"
    },
    "12940": {
        "code": 12940,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE during conducting inner EAP-MSCHAPv2 method",
        "description": "Supplicant stopped responding to ISE during conducting inner EAP-MSCHAPv2 method"
    },
    "12941": {
        "code": 12941,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE during conducting inner EAP-GTC method",
        "description": "Supplicant stopped responding to ISE during conducting inner EAP-GTC method"
    },
    "12942": {
        "code": 12942,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE during conducting inner EAP-TLS method",
        "description": "Supplicant stopped responding to ISE during conducting inner EAP-TLS method"
    },
    "12943": {
        "code": 12943,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE during PEAPv0 protected termination",
        "description": "Supplicant stopped responding to ISE during PEAPv0 protected termination"
    },
    "12944": {
        "code": 12944,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE during PEAPv1 protected termination",
        "description": "Supplicant stopped responding to ISE during PEAPv1 protected termination"
    },
    "12945": {
        "code": 12945,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE during EAP-FAST protected termination",
        "description": "Supplicant stopped responding to ISE during EAP-FAST protected termination"
    },
    "12946": {
        "code": 12946,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE during LEAP",
        "description": "Supplicant stopped responding to ISE during LEAP"
    },
    "12947": {
        "code": 12947,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE during EAP-MD5",
        "description": "Supplicant stopped responding to ISE during EAP-MD5"
    },
    "12948": {
        "code": 12948,
        "severity": "WARN",
        "text": "Supplicant sent unexpected unencrypted TLS handshake message instead of TLS application data in PEAP protocol",
        "description": "Supplicant sent unexpected unencrypted TLS handshake message instead of TLS application data in PEAP protocol"
    },
    "12949": {
        "code": 12949,
        "severity": "WARN",
        "text": "Supplicant sent malformed PEAP message - wrong block cioher padding",
        "description": "Supplicant sent malformed PEAP message - wrong block cioher padding"
    },
    "12950": {
        "code": 12950,
        "severity": "WARN",
        "text": "Supplicant sent malformed PEAP message - bad record MAC",
        "description": "Supplicant sent malformed PEAP message - bad record MAC"
    },
    "12951": {
        "code": 12951,
        "severity": "WARN",
        "text": "Unexpected renegotiation received. Renegotiation is not supported in PEAP",
        "description": "Unexpected renegotiation received. Renegotiation is not supported in PEAP"
    },
    "12952": {
        "code": 12952,
        "severity": "WARN",
        "text": "Received EAP packet from the middle of conversation but the conversation was not started on this PSN",
        "description": "Session does not belong to this PSN according to hostname. Possible unexpected NAD behavior. Maybe NAD sent a packet from the middle of the conversation with another PSN."
    },
    "12953": {
        "code": 12953,
        "severity": "WARN",
        "text": "Received EAP packet from the middle of conversation that contains a session on this PSN that does not exist",
        "description": "Session was not found on this PSN. Possible unexpected NAD behavior. Session belongs to this PSN according to hostname but may has already been reaped by timeout. This packet arrived too late."
    },
    "12954": {
        "code": 12954,
        "severity": "WARN",
        "text": "CRL signature check failed",
        "description": "The CRL found for specific CA does not fit the CA. Possible usage of more than one CA with the same name and CRL with no AKI for one of them. So ISE cannot determine to which CA the CRL belongs."
    },
    "12955": {
        "code": 12955,
        "severity": "WARN",
        "text": "RADIUS request that contains EAP message must contain MessageAuthenticator attribute",
        "description": "RADIUS request that contains EAP message must contain MessageAuthenticator attribute"
    },
    "12956": {
        "code": 12956,
        "severity": "WARN",
        "text": "Client certificate validation failed due to name constraints permitted subtree violation",
        "description": "Client certificate validation failed due to name constraints permitted subtree violation"
    },
    "12957": {
        "code": 12957,
        "severity": "WARN",
        "text": "Client certificate validation failed due to name constraints excluded subtree violation",
        "description": "Client certificate validation failed due to name constraints excluded subtree violation"
    },
    "12958": {
        "code": 12958,
        "severity": "WARN",
        "text": "Client certificate validation failed due to min or max name constraints values violation",
        "description": "Client certificate validation failed due to min or max name constraints values violation"
    },
    "12959": {
        "code": 12959,
        "severity": "WARN",
        "text": "Client certificate validation failed due to unsupported name constraint type",
        "description": "Client certificate validation failed due to unsupported name constraint type"
    },
    "12960": {
        "code": 12960,
        "severity": "WARN",
        "text": "Client certificate validation failed due to bad or unsupported name constraint syntax",
        "description": "Client certificate validation failed due to bad or unsupported name constraint syntax"
    },
    "12961": {
        "code": 12961,
        "severity": "WARN",
        "text": "Client certificate validation failed due to bad or unsupported name syntax of the constraint",
        "description": "Client certificate validation failed due to bad or unsupported name syntax of the constraint"
    },
    "12962": {
        "code": 12962,
        "severity": "WARN",
        "text": "Reject User Authorization PAC since its Initiator-ID does not match the Tunnel PAC Initiator-ID",
        "description": "Reject User Authorization PAC since its Initiator-ID does not match the Tunnel PAC Initiator-ID"
    },
    "12963": {
        "code": 12963,
        "severity": "WARN",
        "text": "Received malformed EAP Payload TLV",
        "description": "ISE received malformed EAP Payload TLV from the supplicat"
    },
    "12964": {
        "code": 12964,
        "severity": "DEBUG",
        "text": "Sent EAP Result TLV indicating success",
        "description": "ISE sent EAP Result TLV indicating success"
    },
    "12965": {
        "code": 12965,
        "severity": "DEBUG",
        "text": "Sent EAP Result TLV indicating failure",
        "description": "ISE sent EAP Result TLV indicating failure"
    },
    "12966": {
        "code": 12966,
        "severity": "DEBUG",
        "text": "Sent EAP Intermediate Result TLV indicating success",
        "description": "ISE sent EAP Intermediate Result TLV indicating success"
    },
    "12967": {
        "code": 12967,
        "severity": "DEBUG",
        "text": "Sent EAP Intermediate Result TLV indicating failure",
        "description": "ISE sent EAP Intermediate Result TLV indicating failure"
    },
    "12968": {
        "code": 12968,
        "severity": "WARN",
        "text": "Client didn't provide suitable ciphers",
        "description": "Client didn't provide suitable ciphers that are allowed on ISE"
    },
    "12970": {
        "code": 12970,
        "severity": "INFO",
        "text": "EAP-TTLS inner method finished with failure",
        "description": "EAP-TTLS inner method finished with failure."
    },
    "12971": {
        "code": 12971,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing EAP-TTLS challenge-response",
        "description": "Continuing the EAP-TTLS protocol; processing the EAP-TTLS challenge-response in the extracted EAP-Response."
    },
    "12972": {
        "code": 12972,
        "severity": "WARN",
        "text": "EAP-TTLS failed SSL/TLS handshake because the client rejected the ISE local-certificate",
        "description": "EAP-TTLS failed SSL/TLS handshake because the client rejected the ISE local-certificate"
    },
    "12973": {
        "code": 12973,
        "severity": "WARN",
        "text": "EAP-TTLS failed SSL/TLS handshake after a client alert",
        "description": "EAP-TTLS failed SSL/TLS handshake after a client alert"
    },
    "12974": {
        "code": 12974,
        "severity": "WARN",
        "text": "EAP-TTLS handshake failed",
        "description": "EAP-TTLS handshake failed."
    },
    "12975": {
        "code": 12975,
        "severity": "INFO",
        "text": "EAP-TTLS authentication succeeded",
        "description": "EAP-TTLS authentication succeeded."
    },
    "12976": {
        "code": 12976,
        "severity": "INFO",
        "text": "EAP-TTLS authentication failed",
        "description": "EAP-TTLS authentication failed."
    },
    "12977": {
        "code": 12977,
        "severity": "INFO",
        "text": "EAP-TTLS built tunnel based on earlier generated keys, this will imply authentication",
        "description": "EAP-TTLS short handshake finished successfully - built tunnel for purpose of authentication."
    },
    "12978": {
        "code": 12978,
        "severity": "INFO",
        "text": "Extracted EAP-Response containing EAP-TTLS challenge-response and accepting EAP-TTLS as negotiated",
        "description": "Extracted from the RADIUS message an EAP-Response packet containing a EAP-TTLS challenge-response, and accepting EAP-TTLS as negotiated."
    },
    "12979": {
        "code": 12979,
        "severity": "INFO",
        "text": "Extracted EAP-Response/NAK requesting to use EAP-TTLS instead",
        "description": "Extracted from the RADIUS message an EAP-Response/NAK packet, rejecting the previously-proposed EAP-based protocol, and requesting to use EAP-TTLS instead, per the configuration of the client's supplicant."
    },
    "12980": {
        "code": 12980,
        "severity": "WARN",
        "text": "Failed to negotiate EAP because EAP-TTLS not allowed in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the previously-proposed EAP-based protocol, and requesting to use EAP-TTLS instead. However, EAP-TTLS is not allowed in Allowed Protocols."
    },
    "12981": {
        "code": 12981,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE during EAP-TTLS tunnel establishment",
        "description": "Supplicant stopped responding to ISE during EAP-TTLS tunnel establishment"
    },
    "12982": {
        "code": 12982,
        "severity": "WARN",
        "text": "Supplicant stopped responding to ISE during EAP-TTLS plain inner MSCHAPv2 authentication flow",
        "description": "Supplicant stopped responding to ISE during EAP-TTLS plain inner MSCHAPv2 authentication flow"
    },
    "12983": {
        "code": 12983,
        "severity": "INFO",
        "text": "Prepared EAP-Request proposing EAP-TTLS with challenge",
        "description": "Created an EAP-Request packet proposing to use the EAP-TTLS protocol, and also providing a EAP-TTLS challenge, for attachment to a RADIUS message. The EAP-TTLS protocol was proposed because it was one of the EAP-based protocols allowed in Allowed Protocols."
    },
    "12984": {
        "code": 12984,
        "severity": "WARN",
        "text": "Unexpected renegotiation received. Renegotiation is not supported in EAP_TTLS",
        "description": "Unexpected renegotiation received. Renegotiation is not supported in EAP_TTLS"
    },
    "12985": {
        "code": 12985,
        "severity": "INFO",
        "text": "Prepared EAP-Request with another EAP-TTLS challenge",
        "description": "As part of the continuation of the EAP-TTLS protocol, created an EAP-Request packet containing another EAP-TTLS challenge, for attachment to a RADIUS message."
    },
    "12986": {
        "code": 12986,
        "severity": "WARN",
        "text": "Client requested TLSv1.0 or TLSv1.1 that is not allowed",
        "description": "Client requested TLSv1.0 or TLSv1.1 as the highest version but it is not allowed in the security settings"
    },
    "12987": {
        "code": 12987,
        "severity": "INFO",
        "text": "Take OCSP servers list from AIA extension of client certificate",
        "description": "Take OCSP servers list from AIA extension of client certificate"
    },
    "12988": {
        "code": 12988,
        "severity": "INFO",
        "text": "Take OCSP servers list from OCSP service configuration",
        "description": "Take OCSP servers list from OCSP service configuration"
    },
    "12989": {
        "code": 12989,
        "severity": "INFO",
        "text": "Sent an OCSP request to the next OCSP server in the list",
        "description": "Sent an OCSP request to the next OCSP server in the list"
    },
    "12990": {
        "code": 12990,
        "severity": "WARN",
        "text": "No valid OCSP server URLs found in the AIA extension of client certificate",
        "description": "If the OCSP service was configured to take OCSP servers list from the AIA extension of client certificate then at least one valid OCSP server URL must be present."
    },
    "12991": {
        "code": 12991,
        "severity": "INFO",
        "text": "No more OCSP servers in AIA estension of client certificate",
        "description": "No more OCSP servers in AIA estension of client certificate"
    },
    "12992": {
        "code": 12992,
        "severity": "INFO",
        "text": "No AIA extension in client certificate",
        "description": "No AIA extension in client certificate"
    },
    "12993": {
        "code": 12993,
        "severity": "WARN",
        "text": "User Auth failed because OCSP is unreachable",
        "description": "User Auth failed because OCSP is unreachable"
    },
    "12994": {
        "code": 12994,
        "severity": "WARN",
        "text": "EAP-TTLS inner method CHAP is not allowed in Allowed Protocols",
        "description": "EAP-TTLS inner method CHAP is not allowed in Allowed Protocols"
    },
    "12995": {
        "code": 12995,
        "severity": "WARN",
        "text": "EAP-TTLS inner method MSCHAPv1 is not allowed in Allowed Protocols",
        "description": "EAP-TTLS inner method MSCHAPv1 is not allowed in Allowed Protocols"
    },
    "12996": {
        "code": 12996,
        "severity": "WARN",
        "text": "EAP-TTLS inner method MSCHAPv2 is not allowed in Allowed Protocols",
        "description": "EAP-TTLS inner method MSCHAPv2 is not allowed in Allowed Protocols"
    },
    "12997": {
        "code": 12997,
        "severity": "WARN",
        "text": "EAP-TTLS inner method PAP is not allowed in Allowed Protocols",
        "description": "EAP-TTLS inner method PAP is not allowed in Allowed Protocols"
    },
    "12998": {
        "code": 12998,
        "severity": "WARN",
        "text": "Failed to negotiate EAP for inner method because EAP-MD5 not allowed under EAP-TTLS configuration in the Allowed Protocols",
        "description": "The client's supplicant sent an EAP-Response/NAK packet rejecting the EAP-based protocol that was previously proposed for the inner method, and requested to use EAP-MD5 instead. However, ISE does not allow EAP-MD5 under EAP-TTLS configuration in Allowed Protocols."
    },
    "12999": {
        "code": 12999,
        "severity": "INFO",
        "text": "Extracted EAP-Response/NAK for inner method requesting to use EAP-MD5 instead",
        "description": "From the EAP-Response packet encountered in the outer EAP method, extracted an EAP-Response/NAK packet, rejecting the EAP-based protocol previously proposed for the inner method, and requesting to use EAP-MD5 instead, per the configuration of the client's supplicant."
    },
    "13000": {
        "code": 13000,
        "severity": "WARN",
        "text": "Invalid TACACS+ authorization request",
        "description": "The TACACS+ authorization request was not one that ISE supports"
    },
    "13001": {
        "code": 13001,
        "severity": "WARN",
        "text": "Invalid TACACS+ accounting request",
        "description": "The TACACS+ accounting request was not one that ISE supports"
    },
    "13002": {
        "code": 13002,
        "severity": "INFO",
        "text": "Started TACACS+ listener",
        "description": "Started TACACS+ listener"
    },
    "13003": {
        "code": 13003,
        "severity": "INFO",
        "text": "Stopped TACACS+ listener",
        "description": "Stopped TACACS+ listener"
    },
    "13004": {
        "code": 13004,
        "severity": "ERROR",
        "text": "TACACS+ listener failed",
        "description": "TACACS+ listener failed"
    },
    "13005": {
        "code": 13005,
        "severity": "DEBUG",
        "text": "Received TACACS+ Authorization Request",
        "description": "Received TACACS+ Authorization Request"
    },
    "13006": {
        "code": 13006,
        "severity": "DEBUG",
        "text": "Received TACACS+ Accounting Request",
        "description": "Received TACACS+ Accounting Request"
    },
    "13007": {
        "code": 13007,
        "severity": "WARN",
        "text": "Invalid TACACS+ packet header",
        "description": "The header of the TACACS+ packet failed to parse correctly"
    },
    "13008": {
        "code": 13008,
        "severity": "WARN",
        "text": "Reached TACACS+ maximum client limit",
        "description": "Check the Network Device or AAA Client and/or the network in between that device and ISE for hardware problems"
    },
    "13009": {
        "code": 13009,
        "severity": "WARN",
        "text": "Failed to accept TACACS+ client connection",
        "description": "The attempt to accept a connection request from a TACACS+ client failed. This could occur if the client, after initiating the request 'hangs up' before ISE is able to accept the connection. If this happens frequently it could indicate a faulty device or a potential DOS attack"
    },
    "13010": {
        "code": 13010,
        "severity": "WARN",
        "text": "Received TACACS+ packet with invalid length",
        "description": "Received TACACS+ packet with less then 12 bytes or more than the defined maximum length"
    },
    "13011": {
        "code": 13011,
        "severity": "WARN",
        "text": "Invalid TACACS+ request packet - possibly mismatched Shared Secrets",
        "description": "The TACACS+ request packet was invalid. A likely reason is that the Shared Secret configured in the device and the Shared Secret configured for the Network Device or AAA Client in ISE do not match"
    },
    "13013": {
        "code": 13013,
        "severity": "DEBUG",
        "text": "Received TACACS+ Authentication START Request",
        "description": "Received TACACS+ Authentication START Request"
    },
    "13014": {
        "code": 13014,
        "severity": "DEBUG",
        "text": "Received TACACS+ Authentication CONTINUE Request",
        "description": "Received TACACS+ Authentication CONTINUE Request"
    },
    "13015": {
        "code": 13015,
        "severity": "DEBUG",
        "text": "Returned TACACS+ Authentication Reply",
        "description": "Returned TACACS+ Authentication Reply"
    },
    "13017": {
        "code": 13017,
        "severity": "DEBUG",
        "text": "Received TACACS+ packet from unknown Network Device or AAA Client",
        "description": "A TACACS+ packet was received with a source IP Address that did not match any configured Network Device or AAA Client"
    },
    "13019": {
        "code": 13019,
        "severity": "ERROR",
        "text": "Failed to obtain TACACS+ Settings",
        "description": "Internal Error: Failed to obtain TACACS+ settings from the configuration database"
    },
    "13020": {
        "code": 13020,
        "severity": "INFO",
        "text": "Get TACACS+ default network device setting",
        "description": "Obtain TACACS+ default network device setting."
    },
    "13021": {
        "code": 13021,
        "severity": "WARN",
        "text": "TACACS+ request was dropped because of system overload",
        "description": "TACACS+ request was dropped because of system overload."
    },
    "13023": {
        "code": 13023,
        "severity": "DEBUG",
        "text": "Command matched a Deny-Always rule",
        "description": "The requested Command matched a Deny-Always rule in one of the Command Sets"
    },
    "13024": {
        "code": 13024,
        "severity": "DEBUG",
        "text": "Command matched a Permit rule",
        "description": "Command matched a Permit rule"
    },
    "13025": {
        "code": 13025,
        "severity": "DEBUG",
        "text": "Command failed to match a Permit rule",
        "description": "The requested command failed to match a Permit rule in any of the Command Sets"
    },
    "13027": {
        "code": 13027,
        "severity": "WARN",
        "text": "TACACS+ authorization request missing both User and Remote-Address attributes",
        "description": "The TACACS+ authorization request is missing both the User and Remote-Address attributes"
    },
    "13029": {
        "code": 13029,
        "severity": "ERROR",
        "text": "Requested privilege level too high",
        "description": "The TACACS+ user requested a higher privilege level than the Maximum Privilege Level configured in the Shell Profile"
    },
    "13030": {
        "code": 13030,
        "severity": "WARN",
        "text": "TACACS+ authentication request missing a User name",
        "description": "The TACACS+ authentication request did not provide a User name"
    },
    "13031": {
        "code": 13031,
        "severity": "WARN",
        "text": "TACACS+ authentication request missing user Password",
        "description": "The TACACS+ authentication request did not provide a user Password"
    },
    "13032": {
        "code": 13032,
        "severity": "ERROR",
        "text": "Fatal error accessing TACACS+ configuration",
        "description": "Internal Error: Unable to access Access Service configuration in the database"
    },
    "13034": {
        "code": 13034,
        "severity": "DEBUG",
        "text": "Returned TACACS+ Authorization Reply",
        "description": "Returned TACACS+ Authorization Reply"
    },
    "13035": {
        "code": 13035,
        "severity": "DEBUG",
        "text": "Returned TACACS+ Accounting Reply",
        "description": "Returned TACACS+ Accounting Reply"
    },
    "13036": {
        "code": 13036,
        "severity": "INFO",
        "text": "Selected Shell Profile is DenyAccess",
        "description": "Selected Shell Profile fails for thsi request"
    },
    "13037": {
        "code": 13037,
        "severity": "INFO",
        "text": "Shell Profile Privilege Level not configured correctly",
        "description": "Shell Profile Privilege Level not configured correctly"
    },
    "13038": {
        "code": 13038,
        "severity": "INFO",
        "text": "TACACS+ request failed because of a critical logging error",
        "description": "The TACACS+ request failed because of a critical logging error."
    },
    "13039": {
        "code": 13039,
        "severity": "WARN",
        "text": "TACACS+ authentication request does not contain the user's new password",
        "description": "The TACACS+ authentication request does not contain the user's new password."
    },
    "13040": {
        "code": 13040,
        "severity": "WARN",
        "text": "TACACS+ authentication request contains an empty string in the Confirm New User Password field",
        "description": "The TACACS+ authentication request does not contain the user's new password to confirm the change password request."
    },
    "13041": {
        "code": 13041,
        "severity": "WARN",
        "text": "TACACS+ authentication request switches from Login to Change Password functionality",
        "description": "The TACACS+ authentication request switches from Login to Change Password functionality."
    },
    "13042": {
        "code": 13042,
        "severity": "WARN",
        "text": "TACACS+ authentication request to confirm a user's new password has failed",
        "description": "The TACACS+ authentication request to change a user's password does not contain a confirmation password."
    },
    "13043": {
        "code": 13043,
        "severity": "WARN",
        "text": "Challenge-response mechanism is not supported by the selected TACACS+ authentication type",
        "description": "Challenge-response mechanism is not supported by the selected TACACS+ authentication type."
    },
    "13044": {
        "code": 13044,
        "severity": "INFO",
        "text": "TACACS+ will use the password prompt returned by the identity store",
        "description": "TACACS+ will use the password prompt returned by the identity store."
    },
    "13045": {
        "code": 13045,
        "severity": "INFO",
        "text": "TACACS+ will use the password prompt from global TACACS+ configuration",
        "description": "TACACS+ will use the password prompt from global TACACS+ configuration."
    },
    "13046": {
        "code": 13046,
        "severity": "INFO",
        "text": "TACACS+ ASCII change password request",
        "description": "TACACS+ ASCII change password request."
    },
    "13050": {
        "code": 13050,
        "severity": "ERROR",
        "text": "Invalid TACACS+ MSCHAP flag value.",
        "description": "Invalid TACACS+ MSCHAP flag value."
    },
    "13051": {
        "code": 13051,
        "severity": "ERROR",
        "text": "Size of data fieid is small.",
        "description": "Size of data fieid is small."
    },
    "13052": {
        "code": 13052,
        "severity": "ERROR",
        "text": "Size of data fieid is small.",
        "description": "Size of data fieid is small."
    },
    "13060": {
        "code": 13060,
        "severity": "WARN",
        "text": "Failed to read TACACS proxy configuration.",
        "description": "ACS detected an error when trying to read the TACACS proxy configuration."
    },
    "13061": {
        "code": 13061,
        "severity": "WARN",
        "text": "Accounting request received but neither local nor remote accounting is configured.",
        "description": "An accounting request was received; however, neither local nor remote accounting is configured."
    },
    "13062": {
        "code": 13062,
        "severity": "WARN",
        "text": "No more external TACACS servers; canot perform failover.",
        "description": "Failover is not possible because no more external TACACS servers are configured."
    },
    "13063": {
        "code": 13063,
        "severity": "INFO",
        "text": "Start forwarding request to remote TACACS server.",
        "description": "The request is being forwarded to the next remote TACACS server from the list configured for the selected ACS proxy service."
    },
    "13064": {
        "code": 13064,
        "severity": "INFO",
        "text": "TACACS proxy received incoming request for forwarding.",
        "description": "The TACACS proxy has received an incoming request. Validating the request and preparing to forward it to a configured remote TACACS server."
    },
    "13065": {
        "code": 13065,
        "severity": "INFO",
        "text": "TACACS proxy received valid incoming authentication request.",
        "description": "The TACACS proxy has received a valid incoming authentication request."
    },
    "13066": {
        "code": 13066,
        "severity": "INFO",
        "text": "TACACS proxy received valid incoming authorization request.",
        "description": "The TACACS proxy has received a valid incoming authorization request."
    },
    "13067": {
        "code": 13067,
        "severity": "INFO",
        "text": "TACACS proxy received valid incoming accounting request.",
        "description": "The TACACS proxy has received a valid incoming accounting request."
    },
    "13068": {
        "code": 13068,
        "severity": "INFO",
        "text": "TACACS proxy performing local accounting.",
        "description": "The TACACS proxy is performing a local accounting based on the incoming accounting request received."
    },
    "13069": {
        "code": 13069,
        "severity": "INFO",
        "text": "TACACS proxy performing remote accounting.",
        "description": "The TACACS proxy is performing a remote accounting based on the incoming accounting request received."
    },
    "13070": {
        "code": 13070,
        "severity": "WARN",
        "text": "Failed to forward request to current remote TACACS server.",
        "description": "Current remote TACACS server has failed to process the forwarded request due to any of the following reasons: The remote TACACS server is down ; The remote TACACS server is not configured properly ; The remote TACACS server dropped the request."
    },
    "13071": {
        "code": 13071,
        "severity": "WARN",
        "text": "Continue flow (seq_no > 1).",
        "description": "Continue previous flow. Request will be send to server, what response to the previous request."
    },
    "13072": {
        "code": 13072,
        "severity": "WARN",
        "text": "Failed to forward request to current remote TACACS server.",
        "description": "Failed to forward request to current remote TACACS server. Becouse flow is continue request can not be forward to the next TACACS server."
    },
    "13073": {
        "code": 13073,
        "severity": "INFO",
        "text": "TACACS+ Proxy request failed because of a critical logging error.",
        "description": "The TACACS+ Proxy request failed because of a critical logging error."
    },
    "13074": {
        "code": 13074,
        "severity": "INFO",
        "text": "Finished to process TACACS Proxy request.",
        "description": "Finished to process TACACS Proxy request."
    },
    "13075": {
        "code": 13075,
        "severity": "INFO",
        "text": "TACACS+ Proxy request won't continue.",
        "description": "TACACS+ Proxy request won't continue."
    },
    "15001": {
        "code": 15001,
        "severity": "ERROR",
        "text": "Adapter must contain at least one value",
        "description": "This is a database configuration problem"
    },
    "15002": {
        "code": 15002,
        "severity": "ERROR",
        "text": "Configured operator failed to match the value type",
        "description": "This is a database configuration problem, the operator and value type mismatch"
    },
    "15003": {
        "code": 15003,
        "severity": "ERROR",
        "text": "Incorrect database configuration",
        "description": "Incorrect database configuration"
    },
    "15004": {
        "code": 15004,
        "severity": "DEBUG",
        "text": "Matched rule",
        "description": "Matched rule"
    },
    "15005": {
        "code": 15005,
        "severity": "DEBUG",
        "text": "Matched monitored rule",
        "description": "Matched monitored rule"
    },
    "15006": {
        "code": 15006,
        "severity": "DEBUG",
        "text": "Matched Default Rule",
        "description": "The policy default rule matched"
    },
    "15007": {
        "code": 15007,
        "severity": "ERROR",
        "text": "Policy result type did not match expected result",
        "description": "Policy result type did not match expected result"
    },
    "15008": {
        "code": 15008,
        "severity": "DEBUG",
        "text": "Evaluating Service Selection Policy",
        "description": "Evaluating Service Selection Policy"
    },
    "15009": {
        "code": 15009,
        "severity": "DEBUG",
        "text": "Exception Authorization Policy not configured",
        "description": "Exception Authorization Policy not configured"
    },
    "15010": {
        "code": 15010,
        "severity": "ERROR",
        "text": "Identity policy is not configured",
        "description": "Identity policy is not configured."
    },
    "15011": {
        "code": 15011,
        "severity": "INFO",
        "text": "Authorization Policy not configured",
        "description": "Authorization Policy not configured"
    },
    "15012": {
        "code": 15012,
        "severity": "DEBUG",
        "text": "Selected Access Service",
        "description": "Selected Access Service"
    },
    "15013": {
        "code": 15013,
        "severity": "DEBUG",
        "text": "Selected Identity Source",
        "description": "Selected Identity Source"
    },
    "15015": {
        "code": 15015,
        "severity": "ERROR",
        "text": "Could not find ID Store",
        "description": "Could not find ID Store in the database"
    },
    "15016": {
        "code": 15016,
        "severity": "DEBUG",
        "text": "Selected Authorization Profile",
        "description": "Selected Authorization Profile"
    },
    "15017": {
        "code": 15017,
        "severity": "DEBUG",
        "text": "Selected Shell Profile",
        "description": "Selected Shell Profile"
    },
    "15018": {
        "code": 15018,
        "severity": "DEBUG",
        "text": "Selected Command Set",
        "description": "Selected Command Set"
    },
    "15019": {
        "code": 15019,
        "severity": "DEBUG",
        "text": "Could not find selected Authorization Profiles",
        "description": "Could not find selected Authorization Profiles"
    },
    "15020": {
        "code": 15020,
        "severity": "WARN",
        "text": "Could not find selected Shell Profiles",
        "description": "Could not find selected Shell Profiles"
    },
    "15021": {
        "code": 15021,
        "severity": "ERROR",
        "text": "Could not find selected Command Set",
        "description": "Could not find selected Command Set"
    },
    "15022": {
        "code": 15022,
        "severity": "ERROR",
        "text": "Could not find selected Access Service",
        "description": "Could not find selected Access Service"
    },
    "15023": {
        "code": 15023,
        "severity": "DEBUG",
        "text": "Could not match rule",
        "description": "Could not match rule"
    },
    "15024": {
        "code": 15024,
        "severity": "INFO",
        "text": "PAP is not allowed",
        "description": "PAP is not allowed"
    },
    "15025": {
        "code": 15025,
        "severity": "DEBUG",
        "text": "External Policy Check Policy not configured",
        "description": "External Policy Check Policy not configured"
    },
    "15026": {
        "code": 15026,
        "severity": "DEBUG",
        "text": "External Policy Server not found",
        "description": "External Policy Server not found"
    },
    "15027": {
        "code": 15027,
        "severity": "DEBUG",
        "text": "External Policy Server selected",
        "description": "External Policy Server selected"
    },
    "15028": {
        "code": 15028,
        "severity": "DEBUG",
        "text": "Sending request to External Policy Server",
        "description": "Sending request to External Policy Server"
    },
    "15029": {
        "code": 15029,
        "severity": "DEBUG",
        "text": "Could not retrieve attributes from External Policy Server",
        "description": "Could not retrieve attributes from External Policy Server"
    },
    "15030": {
        "code": 15030,
        "severity": "DEBUG",
        "text": "Apparent misconfiguration of External Policy Server",
        "description": "Apparent misconfiguration of External Policy Server"
    },
    "15031": {
        "code": 15031,
        "severity": "DEBUG",
        "text": "External Policy attributes retrieved",
        "description": "External Policy attributes retrieved"
    },
    "15032": {
        "code": 15032,
        "severity": "DEBUG",
        "text": "Evaluating External Policy Check Policy",
        "description": "Evaluating External Policy Check Policy"
    },
    "15033": {
        "code": 15033,
        "severity": "INFO",
        "text": "Group Mapping Policy not configured",
        "description": "Group Mapping Policy not configured"
    },
    "15034": {
        "code": 15034,
        "severity": "DEBUG",
        "text": "Skip External Policy Check",
        "description": "Skip External Policy Check"
    },
    "15035": {
        "code": 15035,
        "severity": "DEBUG",
        "text": "Evaluating Exception Authorization Policy",
        "description": "Evaluating Exception Authorization Policy"
    },
    "15036": {
        "code": 15036,
        "severity": "DEBUG",
        "text": "Evaluating Authorization Policy",
        "description": "Evaluating Authorization Policy"
    },
    "15037": {
        "code": 15037,
        "severity": "DEBUG",
        "text": "Using previously selected Access Service",
        "description": "Using previously selected Access Service"
    },
    "15038": {
        "code": 15038,
        "severity": "DEBUG",
        "text": "Skipping External Policy because of missing or malformed required attributes",
        "description": "Skipping External Policy because of missing or malformed required attributes"
    },
    "15039": {
        "code": 15039,
        "severity": "INFO",
        "text": "Rejected per authorization profile",
        "description": "Selected Authorization Profile contains ACCESS_REJECT attribute"
    },
    "15040": {
        "code": 15040,
        "severity": "INFO",
        "text": "User name attribute not defined in certificate profile",
        "description": "User name attribute not defined in certificate profile"
    },
    "15041": {
        "code": 15041,
        "severity": "DEBUG",
        "text": "Evaluating Identity Policy",
        "description": "Evaluating Identity Policy"
    },
    "15042": {
        "code": 15042,
        "severity": "INFO",
        "text": "No rule was matched",
        "description": "The evaluated policy did not match any rule"
    },
    "15043": {
        "code": 15043,
        "severity": "INFO",
        "text": "Dynamic attribute value is unavailable",
        "description": "Dynamic attribute value is unavailable, Referenced attribute that contains the value does not exist"
    },
    "15044": {
        "code": 15044,
        "severity": "DEBUG",
        "text": "Evaluating Group Mapping Policy",
        "description": "Evaluating Group Mapping Policy"
    },
    "15045": {
        "code": 15045,
        "severity": "ERROR",
        "text": "CHAP is not allowed",
        "description": "CHAP is not allowed."
    },
    "15046": {
        "code": 15046,
        "severity": "ERROR",
        "text": "MS-CHAP v1 is disabled under allowed protocols.",
        "description": "MS-CHAP v1 is disabled under allowed protocols."
    },
    "15047": {
        "code": 15047,
        "severity": "ERROR",
        "text": "MS-CHAP v2 is disabled under allowed protocols.",
        "description": "MS-CHAP v2 is disabled under allowed protocols."
    },
    "15048": {
        "code": 15048,
        "severity": "DEBUG",
        "text": "Queried PIP",
        "description": "The Policy Engine queried a PIP for attributes that were referenced by the policy"
    },
    "15049": {
        "code": 15049,
        "severity": "DEBUG",
        "text": "Evaluating Policy Group",
        "description": "Evaluating Policy Group"
    },
    "15050": {
        "code": 15050,
        "severity": "DEBUG",
        "text": "Network Access Device does not support configuration of VLAN",
        "description": "Network Access Device does not support configuration of VLAN"
    },
    "15051": {
        "code": 15051,
        "severity": "DEBUG",
        "text": "Network Access Device does not support configuration of ACL",
        "description": "Network Access Device does not support configuration of ACL"
    },
    "15052": {
        "code": 15052,
        "severity": "DEBUG",
        "text": "Authorization profile/s specified are not suited for this Network Access Device",
        "description": "Authorization profile/s specified are not suited for this Network Access Device"
    },
    "15053": {
        "code": 15053,
        "severity": "DEBUG",
        "text": "Network Access Device does not support CoA",
        "description": "Network Access Device does not support CoA"
    },
    "15054": {
        "code": 15054,
        "severity": "DEBUG",
        "text": "Sending SNMP set :",
        "description": "Sending SNMP set :"
    },
    "15055": {
        "code": 15055,
        "severity": "DEBUG",
        "text": "SNMP CoA failed",
        "description": "SNMP CoA failed"
    },
    "15056": {
        "code": 15056,
        "severity": "ERROR",
        "text": "IP Address for interface selected in portal settings is undefined",
        "description": "IP Address for interface selected in portal settings is undefined. Please use CLI to configure IP address for selected interface"
    },
    "22000": {
        "code": 22000,
        "severity": "ERROR",
        "text": "Authentication resulted in internal error",
        "description": "Authentication resulted in internal error"
    },
    "22001": {
        "code": 22001,
        "severity": "INFO",
        "text": "Restricted attribute(s) found",
        "description": "Restricted attribute(s) found"
    },
    "22002": {
        "code": 22002,
        "severity": "DEBUG",
        "text": "Authentication complete",
        "description": "Authentication complete"
    },
    "22003": {
        "code": 22003,
        "severity": "INFO",
        "text": "Missing attribute for authentication",
        "description": "Missing attribute for authentication"
    },
    "22004": {
        "code": 22004,
        "severity": "INFO",
        "text": "Wrong password",
        "description": "Wrong password"
    },
    "22005": {
        "code": 22005,
        "severity": "INFO",
        "text": "Could not get shell profile object",
        "description": "Could not get shell profile object"
    },
    "22006": {
        "code": 22006,
        "severity": "INFO",
        "text": "Shell profile object is not configured",
        "description": "Shell profile object is not configured"
    },
    "22007": {
        "code": 22007,
        "severity": "INFO",
        "text": "Username attribute is not present in the authentication request",
        "description": "Username attribute is not present in the authentication request."
    },
    "22008": {
        "code": 22008,
        "severity": "DEBUG",
        "text": "Changing enable password is not allowed",
        "description": "Changing enable password is not allowed because user was authenticated against regular password"
    },
    "22015": {
        "code": 22015,
        "severity": "DEBUG",
        "text": "Identity sequence continues to the next IDStore",
        "description": "Identity sequence continues to the next IDStore"
    },
    "22016": {
        "code": 22016,
        "severity": "DEBUG",
        "text": "Identity sequence completed iterating the IDStores",
        "description": "Identity sequence completed iterating the IDStores"
    },
    "22017": {
        "code": 22017,
        "severity": "INFO",
        "text": "Selected Identity Source is DenyAccess",
        "description": "Selected Identity Source is DenyAccess"
    },
    "22019": {
        "code": 22019,
        "severity": "DEBUG",
        "text": "Identity Policy was evaluated before; Identity Sequence continuing",
        "description": "Identity Policy was evaluated before. Identity Sequence continuing"
    },
    "22020": {
        "code": 22020,
        "severity": "ERROR",
        "text": "Configuration error: identity source blank",
        "description": "Configuration error: identity source blank"
    },
    "22021": {
        "code": 22021,
        "severity": "ERROR",
        "text": "Configuration error: authentication IDStores list blank",
        "description": "Configuration error, authentication IDStores list blank"
    },
    "22022": {
        "code": 22022,
        "severity": "ERROR",
        "text": "Error in setting fail open options",
        "description": "Error in setting fail open options"
    },
    "22023": {
        "code": 22023,
        "severity": "INFO",
        "text": "Proceed to attribute retrieval",
        "description": "Authentication completed successfully. Proceed to attribute retrieval"
    },
    "22028": {
        "code": 22028,
        "severity": "INFO",
        "text": "Authentication failed and the advanced options are ignored",
        "description": "Authentication of the user failed and the advanced option settings specified in the identity portion of the relevant authentication policy were ignored. For PEAP, LEAP, EAP-FAST or RADIUS MSCHAP authentications, when authentication fails, ISE stops processing the request."
    },
    "22034": {
        "code": 22034,
        "severity": "INFO",
        "text": "Attribute retrieval failed",
        "description": "Attribute retrieval failed"
    },
    "22036": {
        "code": 22036,
        "severity": "INFO",
        "text": "Retrieved Attributes successfully from current IDStore",
        "description": "Retrieved Attributes successfully from the current IDStore"
    },
    "22037": {
        "code": 22037,
        "severity": "DEBUG",
        "text": "Authentication Passed",
        "description": "Authentication Passed, Skipping Attribute Retrieval"
    },
    "22038": {
        "code": 22038,
        "severity": "INFO",
        "text": "Skipping the next IDStore for attribute retrieval because it is the one we authenticated against",
        "description": "Skipping the next IDStore for attribute retrieval because it is the one we authenticated against"
    },
    "22039": {
        "code": 22039,
        "severity": "ERROR",
        "text": "Invalid workflow sequence type",
        "description": "Invalid workflow sequence type"
    },
    "22040": {
        "code": 22040,
        "severity": "INFO",
        "text": "Wrong password or invalid shared secret",
        "description": "Wrong password or invalid shared secret"
    },
    "22043": {
        "code": 22043,
        "severity": "INFO",
        "text": "Current Identity Store does not support the authentication method; Skipping it",
        "description": "Current Identity Store does not support the authentication method. Skipping it."
    },
    "22044": {
        "code": 22044,
        "severity": "INFO",
        "text": "Identity policy result is configured for certificate based authentication methods but received password based",
        "description": "Identity policy result is configured for certificate based authentication methods but received password based"
    },
    "22045": {
        "code": 22045,
        "severity": "INFO",
        "text": "Identity policy result is configured for password based authentication methods but received certificate based authentication request",
        "description": "Identity policy result is configured for password based authentication methods but received certificate based authentication request"
    },
    "22046": {
        "code": 22046,
        "severity": "DEBUG",
        "text": "Identity sequence received a certificate authentication request",
        "description": "Identity sequence received a certificate authentication request"
    },
    "22047": {
        "code": 22047,
        "severity": "DEBUG",
        "text": "User name attribute is missing in client certificate",
        "description": "User name attribute is missing in client certificate"
    },
    "22048": {
        "code": 22048,
        "severity": "DEBUG",
        "text": "Client certificate binary is missing",
        "description": "Client certificate binary is missing"
    },
    "22049": {
        "code": 22049,
        "severity": "DEBUG",
        "text": "Binary comparison of certificates failed",
        "description": "Binary comparison of certificates failed"
    },
    "22050": {
        "code": 22050,
        "severity": "INFO",
        "text": "User or host disabled in current IDStore in attribute retrieval mode",
        "description": "The user or host is disabled in the current IDStore in attribute retrieval mode"
    },
    "22051": {
        "code": 22051,
        "severity": "INFO",
        "text": "User or host disabled in Internal IDStore, proceed according to Advanced Option",
        "description": "The user or host is disabled in the Internal IDStore, proceed according to Advanced Option"
    },
    "22052": {
        "code": 22052,
        "severity": "ERROR",
        "text": "Authentication IDStore empty after completing authentication",
        "description": "Authentication IDStore empty after completing authentication"
    },
    "22054": {
        "code": 22054,
        "severity": "DEBUG",
        "text": "Binary comparison of certificates succeeded",
        "description": "Binary comparison of certificates succeeded."
    },
    "22055": {
        "code": 22055,
        "severity": "INFO",
        "text": "Failed to find expected Principal Username X509 Attribute in user's certificate",
        "description": "The user's certificate does not contain the specific Principal Username X509 Attribute that has been configured in the selected Certificate Authentication Profile."
    },
    "22056": {
        "code": 22056,
        "severity": "DEBUG",
        "text": "Subject not found in the applicable identity store(s)",
        "description": "Subject not found in the applicable identity store(s)."
    },
    "22057": {
        "code": 22057,
        "severity": "INFO",
        "text": "The advanced option that is configured for a failed authentication request is used",
        "description": "The advanced option that is configured for a failed authentication request is used."
    },
    "22058": {
        "code": 22058,
        "severity": "INFO",
        "text": "The advanced option that is configured for an unknown user is used",
        "description": "The advanced option that is configured for an unknown user is used."
    },
    "22059": {
        "code": 22059,
        "severity": "INFO",
        "text": "The advanced option that is configured for process failure is used",
        "description": "The advanced option that is configured for process failure is used."
    },
    "22060": {
        "code": 22060,
        "severity": "INFO",
        "text": "The 'Continue' advanced option is configured in case of a failed authentication request",
        "description": "In case of a failed authentication request, the Continue advanced option is configured."
    },
    "22061": {
        "code": 22061,
        "severity": "INFO",
        "text": "The 'Reject' advanced option is configured in case of a failed authentication request",
        "description": "In case of a failed authentication request, the Reject advanced option is configured."
    },
    "22062": {
        "code": 22062,
        "severity": "INFO",
        "text": "The 'Drop' advanced option is configured in case of a failed authentication request",
        "description": "In case of a failed authentication request, the Drop advanced option is configured."
    },
    "22063": {
        "code": 22063,
        "severity": "INFO",
        "text": "Wrong password",
        "description": "Wrong password"
    },
    "22064": {
        "code": 22064,
        "severity": "DEBUG",
        "text": "Authentication method is not supported by any applicable identity store(s)",
        "description": "Authentication method is not supported by any applicable identity store(s)"
    },
    "22065": {
        "code": 22065,
        "severity": "WARN",
        "text": "Guest session limit could not be enforced as MnT node not reachable",
        "description": "Guest session limit could not be enforced as MnT node not reachable"
    },
    "22066": {
        "code": 22066,
        "severity": "INFO",
        "text": "Guest session limit is active; removing older guest sessions",
        "description": "Guest session limit is active; removing older guest sessions"
    },
    "22067": {
        "code": 22067,
        "severity": "WARN",
        "text": "Guest session limit response is missing relevant information in order to remove old guest sessions",
        "description": "Guest session limit response is missing relevant information in order to remove old guest sessions"
    },
    "22068": {
        "code": 22068,
        "severity": "DEBUG",
        "text": "Binary comparison of certificates skipped on EAP session resume.",
        "description": "Binary comparison of certificates skipped on EAP session resume."
    },
    "22069": {
        "code": 22069,
        "severity": "DEBUG",
        "text": "AD account search attribute is missing in client certificate",
        "description": "Attribute selected in Certificate Authentication Profile for AD account search is missing in client certificate"
    },
    "22070": {
        "code": 22070,
        "severity": "DEBUG",
        "text": "Identity name is taken from certificate attribute",
        "description": "Identity name is taken from certificate attribute according to Certificate Authentication Profile settings"
    },
    "22071": {
        "code": 22071,
        "severity": "DEBUG",
        "text": "Identity name is taken from AD account Implicit UPN",
        "description": "Identity name is taken from AD account Implicit UPN according to Certificate Authentication Profile settings"
    },
    "22072": {
        "code": 22072,
        "severity": "INFO",
        "text": "Selected identity source sequence",
        "description": "Selected identity source sequence"
    },
    "22073": {
        "code": 22073,
        "severity": "INFO",
        "text": "Guest session limit is active; removing newest guest session",
        "description": "Guest session limit is active; removing newest guest session"
    },
    "22074": {
        "code": 22074,
        "severity": "ERROR",
        "text": "This Protocol is disabled in FIPS mode.",
        "description": "Protocol is disabled in FIPS mode."
    },
    "22080": {
        "code": 22080,
        "severity": "INFO",
        "text": "New accounting session created in Session cache",
        "description": "New accounting session created in Session cache."
    },
    "22081": {
        "code": 22081,
        "severity": "INFO",
        "text": "Max sessions policy passed",
        "description": "Max sessions policy passed."
    },
    "22082": {
        "code": 22082,
        "severity": "INFO",
        "text": "Max sessions policy disabled",
        "description": "Max sessions policy disabled."
    },
    "22083": {
        "code": 22083,
        "severity": "INFO",
        "text": "User/group session counters incremented on accounting start",
        "description": "User/group session counters incremented on accounting start"
    },
    "22084": {
        "code": 22084,
        "severity": "INFO",
        "text": "User/group session counters decremented on accounting stop",
        "description": "User/group session counters decremented on accounting stop. The session was removed."
    },
    "22085": {
        "code": 22085,
        "severity": "INFO",
        "text": "The accounting session was updated in Session cache",
        "description": "The accounting session was updated in Session cache"
    },
    "22086": {
        "code": 22086,
        "severity": "INFO",
        "text": "The active sessions were purged for device",
        "description": "The active sessions were purged for device"
    },
    "22087": {
        "code": 22087,
        "severity": "INFO",
        "text": "The accounting session was timed out",
        "description": "The accounting session was timed out"
    },
    "22088": {
        "code": 22088,
        "severity": "INFO",
        "text": "The accounting session was purged",
        "description": "The accounting session was purged"
    },
    "22089": {
        "code": 22089,
        "severity": "INFO",
        "text": "New user session not permitted. Max sessions user limit has been reached",
        "description": "New user session not permitted. Max sessions user limit exceeded."
    },
    "22090": {
        "code": 22090,
        "severity": "WARN",
        "text": "One or more attributes are missing for the accounting Session Key",
        "description": "One or more attributes are missing for the accounting Session Key. Please ACS and network device configuration."
    },
    "22091": {
        "code": 22091,
        "severity": "INFO",
        "text": "Authentication failed. User account is disabled due to excessive failed authentication attempts at global level",
        "description": "Authentication failed. User account is disabled due to excessive failed authentication attempts at global level."
    },
    "22092": {
        "code": 22092,
        "severity": "INFO",
        "text": "No accounting start was received for the session",
        "description": "No accounting start was received for the session. The request will be ignored."
    },
    "22093": {
        "code": 22093,
        "severity": "INFO",
        "text": "Duplicate session was found with a different user name",
        "description": "Duplicate session was found with a different user name. The request will be ignored. Check the session key configuration."
    },
    "22094": {
        "code": 22094,
        "severity": "INFO",
        "text": "Audit session was not found",
        "description": "Audit session was not found. The session is expired or purged."
    },
    "22095": {
        "code": 22095,
        "severity": "INFO",
        "text": "Accounting start was received for non-existing session",
        "description": "Accounting start was received for the session that was not found in the cache. Either the session was not created or it was purged."
    },
    "22096": {
        "code": 22096,
        "severity": "INFO",
        "text": "Max session policy is not available for Proxy",
        "description": "Max session policy is not available for Proxy."
    },
    "22097": {
        "code": 22097,
        "severity": "INFO",
        "text": "New user session not permitted. Max sessions group limit has been reached",
        "description": "New user session not permitted. Max sessions group limit has been reached."
    },
    "22098": {
        "code": 22098,
        "severity": "INFO",
        "text": "New user session not permitted. Max sessions user in group limit has been reached",
        "description": "New user session not permitted. Max sessions user in group limit has been reached."
    },
    "24000": {
        "code": 24000,
        "severity": "INFO",
        "text": "Connection established with LDAP server",
        "description": "Connection established with LDAP server"
    },
    "24001": {
        "code": 24001,
        "severity": "ERROR",
        "text": "Cannot establish connection with LDAP server",
        "description": "Cannot establish connection with LDAP server"
    },
    "24002": {
        "code": 24002,
        "severity": "ERROR",
        "text": "Cannot bind connection with administrator credentials",
        "description": "Cannot bind connection with administrator credentials"
    },
    "24003": {
        "code": 24003,
        "severity": "ERROR",
        "text": "Cannot bind connection with anonymous credentials",
        "description": "Cannot bind connection with anonymous credentials"
    },
    "24004": {
        "code": 24004,
        "severity": "DEBUG",
        "text": "User search finished successfully",
        "description": "User search finished successfully in LDAP Server"
    },
    "24005": {
        "code": 24005,
        "severity": "DEBUG",
        "text": "Host search finished successfully",
        "description": "Host search finished successfully in LDAP Server"
    },
    "24006": {
        "code": 24006,
        "severity": "ERROR",
        "text": "User search ended with an error",
        "description": "User search ended with an error"
    },
    "24007": {
        "code": 24007,
        "severity": "ERROR",
        "text": "Host search ended with an error",
        "description": "Host search ended with an error"
    },
    "24008": {
        "code": 24008,
        "severity": "DEBUG",
        "text": "User not found in LDAP Server",
        "description": "User is not found in LDAP Server"
    },
    "24009": {
        "code": 24009,
        "severity": "DEBUG",
        "text": "Host not found in LDAP Server",
        "description": "Host is not found in LDAP Server"
    },
    "24010": {
        "code": 24010,
        "severity": "DEBUG",
        "text": "Ambiguous user",
        "description": "Multiple users matching the username are found in LDAP Server"
    },
    "24011": {
        "code": 24011,
        "severity": "DEBUG",
        "text": "Ambiguous host",
        "description": "Multiple users matching the hostname are found in LDAP Server"
    },
    "24014": {
        "code": 24014,
        "severity": "DEBUG",
        "text": "Noncompliant attributes detected in LDAP",
        "description": "Noncompliant attributes detected in LDAP"
    },
    "24015": {
        "code": 24015,
        "severity": "DEBUG",
        "text": "Authenticating user against LDAP Server",
        "description": "Authenticating user against LDAP Server"
    },
    "24016": {
        "code": 24016,
        "severity": "DEBUG",
        "text": "Looking up user in LDAP Server",
        "description": "Looking up user in LDAP Server"
    },
    "24017": {
        "code": 24017,
        "severity": "DEBUG",
        "text": "Looking up host in LDAP Server",
        "description": "Looking up host in LDAP Server"
    },
    "24018": {
        "code": 24018,
        "severity": "DEBUG",
        "text": "Cannot retrieve user's certificate",
        "description": "Certificate is not found on user's record in LDAP Server"
    },
    "24019": {
        "code": 24019,
        "severity": "ERROR",
        "text": "LDAP connection error was encountered",
        "description": "ISE cannot connect to LDAP external ID store"
    },
    "24020": {
        "code": 24020,
        "severity": "DEBUG",
        "text": "User authentication against the LDAP Server failed",
        "description": "User authentication against the LDAP Server failed. The user entered the wrong password or the user record in the LDAP Server is disabled or expired"
    },
    "24021": {
        "code": 24021,
        "severity": "ERROR",
        "text": "User authentication ended with an error",
        "description": "User authentication against LDAP Server ended with an error"
    },
    "24022": {
        "code": 24022,
        "severity": "DEBUG",
        "text": "User authentication succeeded",
        "description": "User authentication against LDAP Server succeeded"
    },
    "24023": {
        "code": 24023,
        "severity": "DEBUG",
        "text": "User's groups are retrieved",
        "description": "User's groups are retrieved from LDAP Server"
    },
    "24024": {
        "code": 24024,
        "severity": "DEBUG",
        "text": "Host's groups are retrieved",
        "description": "Host's groups are retrieved from LDAP Server"
    },
    "24025": {
        "code": 24025,
        "severity": "DEBUG",
        "text": "No user's groups are found",
        "description": "No user's groups are found on LDAP Server"
    },
    "24026": {
        "code": 24026,
        "severity": "DEBUG",
        "text": "No host's groups are found",
        "description": "No host's groups are found on LDAP Server"
    },
    "24027": {
        "code": 24027,
        "severity": "ERROR",
        "text": "Groups search ended with an error",
        "description": "Groups search ended with an error"
    },
    "24028": {
        "code": 24028,
        "severity": "DEBUG",
        "text": "User's attributes are retrieved",
        "description": "User's attributes are retrieved from LDAP Server"
    },
    "24029": {
        "code": 24029,
        "severity": "DEBUG",
        "text": "Host's attributes are retrieved",
        "description": "Host's attributes are retrieved from LDAP Server"
    },
    "24030": {
        "code": 24030,
        "severity": "ERROR",
        "text": "SSL connection error was encountered",
        "description": "SSL connection error was encountered"
    },
    "24031": {
        "code": 24031,
        "severity": "INFO",
        "text": "Sending request to primary LDAP server",
        "description": "Sending request to primary LDAP server"
    },
    "24032": {
        "code": 24032,
        "severity": "INFO",
        "text": "Sending request to secondary LDAP server",
        "description": "Sending request to secondary LDAP server"
    },
    "24033": {
        "code": 24033,
        "severity": "INFO",
        "text": "Primary server failover. Switching to secondary server",
        "description": "Unable to connect to the primary server"
    },
    "24034": {
        "code": 24034,
        "severity": "INFO",
        "text": "Secondary server failover. Switching to primary server",
        "description": "Unable to connect to the secondary server"
    },
    "24035": {
        "code": 24035,
        "severity": "INFO",
        "text": "Perform domain prefix stripping",
        "description": "Perform domain prefix stripping"
    },
    "24036": {
        "code": 24036,
        "severity": "INFO",
        "text": "Perform domain suffix stripping",
        "description": "Perform domain suffix stripping"
    },
    "24037": {
        "code": 24037,
        "severity": "DEBUG",
        "text": "Sent a subject search request",
        "description": "Sent a subject search request."
    },
    "24038": {
        "code": 24038,
        "severity": "DEBUG",
        "text": "Received a subject search response",
        "description": "Received a subject search response."
    },
    "24039": {
        "code": 24039,
        "severity": "DEBUG",
        "text": "Sent a subject's group search request",
        "description": "Sent a subject's group search request."
    },
    "24040": {
        "code": 24040,
        "severity": "DEBUG",
        "text": "Received a subject's group search response",
        "description": "Received a subject's group search response."
    },
    "24041": {
        "code": 24041,
        "severity": "DEBUG",
        "text": "Sent subject bind request",
        "description": "Sent subject bind request"
    },
    "24042": {
        "code": 24042,
        "severity": "DEBUG",
        "text": "Received subject bind response",
        "description": "Received subject bind response"
    },
    "24043": {
        "code": 24043,
        "severity": "DEBUG",
        "text": "Sent an administrator bind request",
        "description": "Sent an administrator bind request."
    },
    "24044": {
        "code": 24044,
        "severity": "DEBUG",
        "text": "Received an administrator bind response",
        "description": "Received an administrator bind response."
    },
    "24050": {
        "code": 24050,
        "severity": "WARN",
        "text": "Cannot authenticate with LDAP Identity Store because password was not present or was empty",
        "description": "ISE did not receive user password or received empty password. Plain password authentication cannot be performed with no password or empty password"
    },
    "24051": {
        "code": 24051,
        "severity": "ERROR",
        "text": "Secure LDAP failed SSL handshake because of an unknown CA in the certificates chain",
        "description": "Secure LDAP failed SSL handshake because of an unknown CA in the certificates chain"
    },
    "24052": {
        "code": 24052,
        "severity": "ERROR",
        "text": "Secure LDAP connection reconnect due to OCSP found revoked certificate",
        "description": "OCSP check result is that the certificate used for LDAP connection is revoked"
    },
    "24053": {
        "code": 24053,
        "severity": "ERROR",
        "text": "Secure LDAP connection reconnect due to CRL found revoked certificate",
        "description": "CRL check result is that the certificate used for LDAP connection is revoked"
    },
    "24054": {
        "code": 24054,
        "severity": "DEBUG",
        "text": "User authentication against LDAP server detected that user password has expired",
        "description": "The password has expired but there are remaining grace authentications. The user needs to change it"
    },
    "24055": {
        "code": 24055,
        "severity": "DEBUG",
        "text": "User authentication against LDAP server detected that the user is authenticating for the first time after the password administrator set the password",
        "description": "The user needs to change his password immediately"
    },
    "24056": {
        "code": 24056,
        "severity": "WARN",
        "text": "User authentication against LDAP server detected that user password has expired and there are no more grace authentications",
        "description": "The user needs to contact the password administrator in order to have its password reset"
    },
    "24057": {
        "code": 24057,
        "severity": "WARN",
        "text": "User authentication against LDAP server detected that the password failure limit has been reached and the account is locked",
        "description": "The user needs to retry later or contact the password administrator to reset the password"
    },
    "24058": {
        "code": 24058,
        "severity": "ERROR",
        "text": "LDAP server does not support password modify extended operation (RFC 3062)",
        "description": "ACS Administrator should disable password change on LDAP Identity Store configuration"
    },
    "24059": {
        "code": 24059,
        "severity": "ERROR",
        "text": "User password change ended with an error",
        "description": "LDAP server logs should be examined for getting more details"
    },
    "24060": {
        "code": 24060,
        "severity": "INFO",
        "text": "Changing user's password on LDAP Server",
        "description": "Changing user's password on LDAP Server"
    },
    "24061": {
        "code": 24061,
        "severity": "DEBUG",
        "text": "Sent password modify request",
        "description": "Sent password modify request"
    },
    "24062": {
        "code": 24062,
        "severity": "DEBUG",
        "text": "Received password modify response",
        "description": "Received password modify response"
    },
    "24063": {
        "code": 24063,
        "severity": "WARN",
        "text": "The user's password will expire soon",
        "description": "The user's password will expire soon"
    },
    "24064": {
        "code": 24064,
        "severity": "WARN",
        "text": "The user doesn't have sufficient rights to change password",
        "description": "The user doesn't have sufficient rights to change password"
    },
    "24065": {
        "code": 24065,
        "severity": "WARN",
        "text": "The new password does not conform to LDAP password policy",
        "description": "The new password does not conform to LDAP password policy"
    },
    "24066": {
        "code": 24066,
        "severity": "INFO",
        "text": "User password change succeeded",
        "description": "User password change on LDAP Server succeeded"
    },
    "24067": {
        "code": 24067,
        "severity": "WARN",
        "text": "The password change is not enabled on LDAP Identity Store configuration page",
        "description": "The password change is not enabled on LDAP Identity Store configuration page"
    },
    "24100": {
        "code": 24100,
        "severity": "DEBUG",
        "text": "Some of the expected attributes are not found on the subject record. The default values, if configured, will be used for these attributes",
        "description": "Some of the expected attributes are not found on the subject record. The default values, if configured, will be used for these attributes."
    },
    "24101": {
        "code": 24101,
        "severity": "WARN",
        "text": "Some of the retrieved attributes contain multiple values. These values are discarded. The default values, if configured, will be used for these attributes",
        "description": "Some of the retrieved attributes contain multiple values. These values are discarded. The default values, if configured, will be used for these attributes."
    },
    "24102": {
        "code": 24102,
        "severity": "WARN",
        "text": "Some of the retrieved attributes contain values that are of an incompatible type. These values are discarded. The default values, if configured, will be used for these attributes",
        "description": "Some of the retrieved attributes contain values that are of an incompatible type. These values are discarded. The default values, if configured, will be used for these attributes."
    },
    "24201": {
        "code": 24201,
        "severity": "INFO",
        "text": "Internal ID Store successfully connected to database",
        "description": "Internal ID Store successfully connected to database"
    },
    "24202": {
        "code": 24202,
        "severity": "ERROR",
        "text": "Internal ID Store could not connect to the database",
        "description": "Internal ID Store could not connect to the database"
    },
    "24203": {
        "code": 24203,
        "severity": "INFO",
        "text": "User need to change password",
        "description": "User was marked to change password in Internal database"
    },
    "24204": {
        "code": 24204,
        "severity": "INFO",
        "text": "Password changed successfully",
        "description": "Password of user was changed successfully in Internal database"
    },
    "24205": {
        "code": 24205,
        "severity": "ERROR",
        "text": "Could not change password to new password",
        "description": "Could not change password to new password in Internal database"
    },
    "24206": {
        "code": 24206,
        "severity": "INFO",
        "text": "User disabled",
        "description": "User marked disabled in Internal database."
    },
    "24207": {
        "code": 24207,
        "severity": "INFO",
        "text": "Host disabled",
        "description": "Host marked disabled in Internal database."
    },
    "24208": {
        "code": 24208,
        "severity": "DEBUG",
        "text": "Looking up Admin in Internal Admins IDStore",
        "description": "Looking up Admin in Internal Admins IDStore"
    },
    "24209": {
        "code": 24209,
        "severity": "DEBUG",
        "text": "Looking up Endpoint in Internal Endpoints IDStore",
        "description": "Looking up Endpoint in Internal Endpoints IDStore"
    },
    "24210": {
        "code": 24210,
        "severity": "DEBUG",
        "text": "Looking up User in Internal Users IDStore",
        "description": "Looking up User in Internal Users IDStore"
    },
    "24211": {
        "code": 24211,
        "severity": "DEBUG",
        "text": "Found Endpoint in Internal Endpoints IDStore",
        "description": "Found Endpoint in Internal Endpoints IDStore"
    },
    "24212": {
        "code": 24212,
        "severity": "DEBUG",
        "text": "Found User in Internal Users IDStore",
        "description": "Found User in Internal Users IDStore"
    },
    "24213": {
        "code": 24213,
        "severity": "DEBUG",
        "text": "Found TrustSec Device in Network Devices and AAA Clients",
        "description": "Found TrustSec Device in Network Devices and AAA Clients"
    },
    "24214": {
        "code": 24214,
        "severity": "INFO",
        "text": "MSCHAP is used for the change password request in the internal users identity store",
        "description": "MSCHAP is used for the change password request in the internal users identity store."
    },
    "24215": {
        "code": 24215,
        "severity": "INFO",
        "text": "PAP is used for the change password request in the internal identity store",
        "description": "PAP is used for the change password request in the internal identity store."
    },
    "24216": {
        "code": 24216,
        "severity": "DEBUG",
        "text": "The user is not found in the internal users identity store",
        "description": "The specified user is not found in the internal users identity store."
    },
    "24217": {
        "code": 24217,
        "severity": "DEBUG",
        "text": "The host is not found in the internal endpoints identity store",
        "description": "The specified host is not found in the internal endpoints identity store."
    },
    "24218": {
        "code": 24218,
        "severity": "DEBUG",
        "text": "The TrustSec device is not defined under Network Devices and AAA Clients in ISE",
        "description": "The specified TrustSec device is not defined under Network Devices and AAA Clients in ISE."
    },
    "24219": {
        "code": 24219,
        "severity": "INFO",
        "text": "User account suspended",
        "description": "User account is suspended due to multiple failed authentication attempts"
    },
    "24300": {
        "code": 24300,
        "severity": "ERROR",
        "text": "No domain controller available",
        "description": "No domain controller available"
    },
    "24301": {
        "code": 24301,
        "severity": "ERROR",
        "text": "No writable domain controller available",
        "description": "No writable domain controller available"
    },
    "24302": {
        "code": 24302,
        "severity": "ERROR",
        "text": "No global catalog available",
        "description": "No global catalog available"
    },
    "24303": {
        "code": 24303,
        "severity": "WARN",
        "text": "Communication with domain controller failed",
        "description": "Communication with domain controller failed"
    },
    "24304": {
        "code": 24304,
        "severity": "WARN",
        "text": "Communication with global catalog failed",
        "description": "Communication with global catalog failed"
    },
    "24305": {
        "code": 24305,
        "severity": "ERROR",
        "text": "Failover threshold has been exceeded",
        "description": "Failover threshold has been exceeded"
    },
    "24306": {
        "code": 24306,
        "severity": "ERROR",
        "text": "No DNS server available",
        "description": "No DNS server available"
    },
    "24307": {
        "code": 24307,
        "severity": "ERROR",
        "text": "DNS server returned error",
        "description": "DNS server returned error"
    },
    "24308": {
        "code": 24308,
        "severity": "ERROR",
        "text": "None of required domains is joined",
        "description": "None of required domains is joined"
    },
    "24309": {
        "code": 24309,
        "severity": "DEBUG",
        "text": "Identity name with no domain markup has been rejected by join points",
        "description": "Identity name with no domain markup has been rejected according to AD Identity Store Advanced Settings"
    },
    "24310": {
        "code": 24310,
        "severity": "DEBUG",
        "text": "User Principal Name (UPN) format recognized",
        "description": "User Principal Name (UPN) format recognized"
    },
    "24311": {
        "code": 24311,
        "severity": "DEBUG",
        "text": "Down-Level Logon (NetBIOS) Name format recognized",
        "description": "Down-Level Logon (NetBIOS) Name format recognized"
    },
    "24312": {
        "code": 24312,
        "severity": "DEBUG",
        "text": "SAM Account Name format recognized",
        "description": "SAM Account Name format recognized"
    },
    "24313": {
        "code": 24313,
        "severity": "DEBUG",
        "text": "Search for matching accounts at join point",
        "description": "Search for matching accounts at join point"
    },
    "24314": {
        "code": 24314,
        "severity": "DEBUG",
        "text": "No matching account found in domain",
        "description": "No matching account found in domain"
    },
    "24315": {
        "code": 24315,
        "severity": "DEBUG",
        "text": "Single matching account found in domain",
        "description": "Single matching account found in domain"
    },
    "24316": {
        "code": 24316,
        "severity": "DEBUG",
        "text": "Multiple matching accounts found in domain",
        "description": "Multiple matching accounts found in domain"
    },
    "24317": {
        "code": 24317,
        "severity": "ERROR",
        "text": "LDAP search in domain failed",
        "description": "LDAP search in domain failed"
    },
    "24318": {
        "code": 24318,
        "severity": "DEBUG",
        "text": "No matching account found in forest",
        "description": "No matching account found in forest"
    },
    "24319": {
        "code": 24319,
        "severity": "DEBUG",
        "text": "Single matching account found in forest",
        "description": "Single matching account found in forest"
    },
    "24320": {
        "code": 24320,
        "severity": "DEBUG",
        "text": "Multiple matching accounts in forest",
        "description": "Multiple matching accounts in forest"
    },
    "24321": {
        "code": 24321,
        "severity": "ERROR",
        "text": "LDAP search in forest failed",
        "description": "LDAP search in forest failed"
    },
    "24322": {
        "code": 24322,
        "severity": "DEBUG",
        "text": "Identity resolution detected no matching account",
        "description": "Identity resolution detected no matching account"
    },
    "24323": {
        "code": 24323,
        "severity": "DEBUG",
        "text": "Identity resolution detected single matching account",
        "description": "Identity resolution detected single matching account"
    },
    "24324": {
        "code": 24324,
        "severity": "DEBUG",
        "text": "Identity resolution detected multiple matching accounts",
        "description": "Identity resolution detected multiple matching accounts"
    },
    "24325": {
        "code": 24325,
        "severity": "DEBUG",
        "text": "Resolving identity",
        "description": "Resolving identity"
    },
    "24326": {
        "code": 24326,
        "severity": "DEBUG",
        "text": "Searching subject object by UPN",
        "description": "Searching subject object by UPN"
    },
    "24327": {
        "code": 24327,
        "severity": "DEBUG",
        "text": "Subject object found in a cache",
        "description": "Subject object found in a cache"
    },
    "24328": {
        "code": 24328,
        "severity": "DEBUG",
        "text": "Subject object not found in a cache",
        "description": "Subject object not found in a cache"
    },
    "24329": {
        "code": 24329,
        "severity": "DEBUG",
        "text": "Subject cache entry expired",
        "description": "Subject cache entry expired"
    },
    "24330": {
        "code": 24330,
        "severity": "DEBUG",
        "text": "Lookup SID By Name request succeeded",
        "description": "Lookup SID By Name request succeeded"
    },
    "24331": {
        "code": 24331,
        "severity": "DEBUG",
        "text": "Lookup SID By Name request failed",
        "description": "Lookup SID By Name request failed"
    },
    "24332": {
        "code": 24332,
        "severity": "DEBUG",
        "text": "Lookup Object By SID request succeeded",
        "description": "Lookup Object By SID request succeeded"
    },
    "24333": {
        "code": 24333,
        "severity": "DEBUG",
        "text": "Lookup Object By SID request failed",
        "description": "Lookup Object By SID request failed"
    },
    "24336": {
        "code": 24336,
        "severity": "DEBUG",
        "text": "Subject object cached",
        "description": "Subject object cached"
    },
    "24337": {
        "code": 24337,
        "severity": "DEBUG",
        "text": "Authentication Ticket (TGT) request succeeded",
        "description": "Authentication Ticket (TGT) request succeeded"
    },
    "24338": {
        "code": 24338,
        "severity": "DEBUG",
        "text": "Authentication Ticket (TGT) request failed",
        "description": "Authentication Ticket (TGT) request failed"
    },
    "24339": {
        "code": 24339,
        "severity": "DEBUG",
        "text": "Service Ticket request succeeded",
        "description": "Service Ticket request succeeded"
    },
    "24340": {
        "code": 24340,
        "severity": "DEBUG",
        "text": "Service Ticket request failed",
        "description": "Service Ticket request failed"
    },
    "24341": {
        "code": 24341,
        "severity": "DEBUG",
        "text": "Service Ticket validation succeeded",
        "description": "Service Ticket validation succeeded"
    },
    "24342": {
        "code": 24342,
        "severity": "DEBUG",
        "text": "Service Ticket validation failed",
        "description": "Service Ticket validation failed"
    },
    "24343": {
        "code": 24343,
        "severity": "DEBUG",
        "text": "RPC Logon request succeeded",
        "description": "RPC Logon request succeeded"
    },
    "24344": {
        "code": 24344,
        "severity": "DEBUG",
        "text": "RPC Logon request failed",
        "description": "RPC Logon request failed"
    },
    "24345": {
        "code": 24345,
        "severity": "DEBUG",
        "text": "RPC Change Password request succeeded",
        "description": "RPC Change Password request succeeded"
    },
    "24346": {
        "code": 24346,
        "severity": "DEBUG",
        "text": "RPC Change Password request failed",
        "description": "RPC Change Password request failed"
    },
    "24347": {
        "code": 24347,
        "severity": "ERROR",
        "text": "Account disabled",
        "description": "Account disabled"
    },
    "24348": {
        "code": 24348,
        "severity": "ERROR",
        "text": "Account locked",
        "description": "Account locked"
    },
    "24349": {
        "code": 24349,
        "severity": "ERROR",
        "text": "Account expired",
        "description": "Account expired"
    },
    "24350": {
        "code": 24350,
        "severity": "ERROR",
        "text": "Password expired",
        "description": "Password expired"
    },
    "24351": {
        "code": 24351,
        "severity": "DEBUG",
        "text": "Account validation succeeded",
        "description": "Account validation succeeded"
    },
    "24352": {
        "code": 24352,
        "severity": "DEBUG",
        "text": "Identity resolution failed",
        "description": "Identity resolution failed"
    },
    "24353": {
        "code": 24353,
        "severity": "DEBUG",
        "text": "Resolving identity",
        "description": "Resolving identity"
    },
    "24354": {
        "code": 24354,
        "severity": "DEBUG",
        "text": "LDAP fetch found no matching account in domain",
        "description": "LDAP fetch found no matching account in domain"
    },
    "24355": {
        "code": 24355,
        "severity": "DEBUG",
        "text": "LDAP fetch succeeded",
        "description": "LDAP fetch succeeded"
    },
    "24356": {
        "code": 24356,
        "severity": "ERROR",
        "text": "LDAP fetch failed",
        "description": "LDAP fetch failed"
    },
    "24357": {
        "code": 24357,
        "severity": "DEBUG",
        "text": "Incoming identity was rewritten",
        "description": "Incoming identity was rewritten"
    },
    "24358": {
        "code": 24358,
        "severity": "DEBUG",
        "text": "Match was not found for any existing identity rewrite rule",
        "description": "Match was not found for any existing identity rewrite rule"
    },
    "24359": {
        "code": 24359,
        "severity": "DEBUG",
        "text": "Incoming identity was not rewritten",
        "description": "Incoming identity was not rewritten"
    },
    "24360": {
        "code": 24360,
        "severity": "DEBUG",
        "text": "[Diagnostic step] : Identity was found, but filtered since it is not in authentication domsins",
        "description": "[Diagnostic step] : Identity was found, but filtered since it is not in authentication domains"
    },
    "24361": {
        "code": 24361,
        "severity": "INFO",
        "text": "Machine authentication is disabled for some of the configured join points",
        "description": "Machine authentication is disabled for some of the configured join points"
    },
    "24362": {
        "code": 24362,
        "severity": "DEBUG",
        "text": "Client certificate matches AD account certificate",
        "description": "Client certificate matches AD account certificate"
    },
    "24363": {
        "code": 24363,
        "severity": "DEBUG",
        "text": "Client certificate does not match AD account certificate",
        "description": "Client certificate does not match AD account certificate"
    },
    "24364": {
        "code": 24364,
        "severity": "DEBUG",
        "text": "Resolve certificate identity ambiguity using certificates match",
        "description": "Resolve certificate identity ambiguity using certificates match"
    },
    "24365": {
        "code": 24365,
        "severity": "DEBUG",
        "text": "Resolve identity ambiguity using password verification",
        "description": "Resolve identity ambiguity using password verification"
    },
    "24366": {
        "code": 24366,
        "severity": "DEBUG",
        "text": "Skipping unjoined domain",
        "description": "Identity search in join point was skipped because ISE is not joined to the domain"
    },
    "24367": {
        "code": 24367,
        "severity": "INFO",
        "text": "Skipping unusable domain",
        "description": "Identity search in join point was skipped because the domain is unusable"
    },
    "24368": {
        "code": 24368,
        "severity": "INFO",
        "text": "Skipping unavailable domain",
        "description": "Identity search in join point was skipped because the domain is unavailable"
    },
    "24369": {
        "code": 24369,
        "severity": "INFO",
        "text": "Skipping unavailable forest",
        "description": "Identity search in join point was skipped because the forest is unavailable"
    },
    "24370": {
        "code": 24370,
        "severity": "ERROR",
        "text": "User credentials have been revoked.",
        "description": "User credentials have been revoked."
    },
    "24371": {
        "code": 24371,
        "severity": "ERROR",
        "text": "The ISE machine account does not have the required privileges to fetch groups.",
        "description": "The ISE machine account does not have the required privileges to fetch groups."
    },
    "24400": {
        "code": 24400,
        "severity": "INFO",
        "text": "Connection to ISE Active Directory agent established successfully",
        "description": "Connection to ISE Active Directory agent established successfully"
    },
    "24401": {
        "code": 24401,
        "severity": "ERROR",
        "text": "Could not establish connection with ISE Active Directory agent",
        "description": "Could not establish connection with ISE Active Directory agent"
    },
    "24402": {
        "code": 24402,
        "severity": "INFO",
        "text": "User authentication against Active Directory succeeded",
        "description": "User authentication against Active Directory succeeded"
    },
    "24403": {
        "code": 24403,
        "severity": "ERROR",
        "text": "User authentication against Active Directory failed",
        "description": "User authentication against Active Directory failed"
    },
    "24404": {
        "code": 24404,
        "severity": "DEBUG",
        "text": "Active Directory operation failed because of an invalid input parameter",
        "description": "Active Directory operation failed because of an invalid input parameter"
    },
    "24405": {
        "code": 24405,
        "severity": "ERROR",
        "text": "Active Directory operation failed because of a timeout error",
        "description": "Active Directory operation failed because of a timeout error"
    },
    "24406": {
        "code": 24406,
        "severity": "DEBUG",
        "text": "User authentication against Active Directory failed since user has invalid credentials",
        "description": "User authentication against Active Directory failed since user has invalid credentials"
    },
    "24407": {
        "code": 24407,
        "severity": "DEBUG",
        "text": "User authentication against Active Directory failed since user is required to change his password",
        "description": "User authentication against Active Directory failed since user is required to change his password"
    },
    "24408": {
        "code": 24408,
        "severity": "DEBUG",
        "text": "User authentication against Active Directory failed since user has entered the wrong password",
        "description": "User authentication against Active Directory failed since user has entered the wrong password"
    },
    "24409": {
        "code": 24409,
        "severity": "DEBUG",
        "text": "User authentication against Active Directory failed since the user's account is disabled",
        "description": "User authentication against Active Directory failed since the user's account is disabled"
    },
    "24410": {
        "code": 24410,
        "severity": "DEBUG",
        "text": "User authentication against Active Directory failed since user is considered to be in restricted logon hours",
        "description": "User authentication against Active Directory failed since user is considered to be in restricted logon hours"
    },
    "24411": {
        "code": 24411,
        "severity": "DEBUG",
        "text": "Change password against Active Directory failed since user has a non-compliant password",
        "description": "Change password against Active Directory failed since user has a non-compliant password"
    },
    "24412": {
        "code": 24412,
        "severity": "DEBUG",
        "text": "User not found in Active Directory",
        "description": "User not found in Active Directory"
    },
    "24413": {
        "code": 24413,
        "severity": "DEBUG",
        "text": "User's domain is not recognized by Active Directory",
        "description": "User's domain is not recognized by Active Directory"
    },
    "24414": {
        "code": 24414,
        "severity": "DEBUG",
        "text": "User authentication against Active Directory failed since the user's account has expired",
        "description": "User authentication against Active Directory failed since the user's account has expired"
    },
    "24415": {
        "code": 24415,
        "severity": "DEBUG",
        "text": "User authentication against Active Directory failed since user's account is locked out",
        "description": "User authentication against Active Directory failed since user's account is locked out"
    },
    "24416": {
        "code": 24416,
        "severity": "INFO",
        "text": "User's Groups retrieval from Active Directory succeeded",
        "description": "User's Groups retrieval from Active Directory succeeded"
    },
    "24417": {
        "code": 24417,
        "severity": "ERROR",
        "text": "User's Groups retrieval from Active Directory failed",
        "description": "User's Groups retrieval from Active Directory failed"
    },
    "24418": {
        "code": 24418,
        "severity": "ERROR",
        "text": "Machine authentication against Active Directory failed since it is disabled in configuration",
        "description": "Machine authentication against Active Directory failed since it is disabled in configuration"
    },
    "24419": {
        "code": 24419,
        "severity": "ERROR",
        "text": "User's Attributes retrieval from Active Directory failed",
        "description": "User's Attributes retrieval from Active Directory failed"
    },
    "24420": {
        "code": 24420,
        "severity": "INFO",
        "text": "User's Attributes retrieval from Active Directory succeeded",
        "description": "User's Attributes retrieval from Active Directory succeeded"
    },
    "24421": {
        "code": 24421,
        "severity": "DEBUG",
        "text": "Change password against Active Directory failed since it is disabled in configuration",
        "description": "Change password against Active Directory failed since it is disabled in configuration"
    },
    "24422": {
        "code": 24422,
        "severity": "INFO",
        "text": "ISE has confirmed previous successful machine authentication for user in Active Directory",
        "description": "ISE has confirmed previous successful machine authentication for user in Active Directory"
    },
    "24423": {
        "code": 24423,
        "severity": "DEBUG",
        "text": "ISE has not been able to confirm previous successful machine authentication",
        "description": "ISE has not been able to confirm previous successful machine authentication"
    },
    "24424": {
        "code": 24424,
        "severity": "DEBUG",
        "text": "Noncompliant attributes detected in Active Directory",
        "description": "Noncompliant attributes detected in Active Directory"
    },
    "24425": {
        "code": 24425,
        "severity": "INFO",
        "text": "User change password against Active Directory succeeded",
        "description": "User change password against Active Directory succeeded"
    },
    "24426": {
        "code": 24426,
        "severity": "ERROR",
        "text": "User change password against Active Directory failed",
        "description": "User change password against Active Directory failed"
    },
    "24427": {
        "code": 24427,
        "severity": "ERROR",
        "text": "Access to Active Directory failed",
        "description": "Access to Active Directory failed"
    },
    "24428": {
        "code": 24428,
        "severity": "ERROR",
        "text": "Connection related error has occurred in either LRPC, LDAP or KERBEROS",
        "description": "This RPC connection problem may be because the stub received incorrect data"
    },
    "24429": {
        "code": 24429,
        "severity": "ERROR",
        "text": "Could not establish connection with Active Directory",
        "description": "Could not establish connection with Active Directory"
    },
    "24430": {
        "code": 24430,
        "severity": "DEBUG",
        "text": "Authenticating user against Active Directory",
        "description": "Authenticating user against Active Directory"
    },
    "24431": {
        "code": 24431,
        "severity": "DEBUG",
        "text": "Authenticating machine against Active Directory",
        "description": "Authenticating machine against Active Directory"
    },
    "24432": {
        "code": 24432,
        "severity": "DEBUG",
        "text": "Looking up user in Active Directory",
        "description": "Looking up user in Active Directory"
    },
    "24433": {
        "code": 24433,
        "severity": "DEBUG",
        "text": "Looking up machine in Active Directory",
        "description": "Looking up machine in Active Directory"
    },
    "24434": {
        "code": 24434,
        "severity": "DEBUG",
        "text": "Performing Change Password in Active Directory",
        "description": "Performing Change Password in Active Directory"
    },
    "24435": {
        "code": 24435,
        "severity": "INFO",
        "text": "Machine Groups retrieval from Active Directory succeeded",
        "description": "Machine Groups retrieval from Active Directory succeeded"
    },
    "24436": {
        "code": 24436,
        "severity": "ERROR",
        "text": "Machine Lookup in Active Directory failed",
        "description": "Machine Lookup in Active Directory failed"
    },
    "24437": {
        "code": 24437,
        "severity": "DEBUG",
        "text": "Machine not found in Active Directory",
        "description": "Machine not found in Active Directory"
    },
    "24438": {
        "code": 24438,
        "severity": "ERROR",
        "text": "Found multiple occurrences of the machine in Active Directory",
        "description": "Found multiple occurrences of the machine in Active Directory"
    },
    "24439": {
        "code": 24439,
        "severity": "INFO",
        "text": "Machine Attributes retrieval from Active Directory succeeded",
        "description": "Machine Attributes retrieval from Active Directory succeeded"
    },
    "24440": {
        "code": 24440,
        "severity": "ERROR",
        "text": "Machine primary group name does not exist in Active Directory",
        "description": "Machine primary group name does not exist in Active Directory"
    },
    "24441": {
        "code": 24441,
        "severity": "ERROR",
        "text": "ISE machine account is not permitted to log on",
        "description": "ISE machine account is not permitted to log on"
    },
    "24442": {
        "code": 24442,
        "severity": "ERROR",
        "text": "User-related object retrieval operation from Active Directory has failed",
        "description": "User-related object retrieval operation from Active Directory has failed"
    },
    "24443": {
        "code": 24443,
        "severity": "INFO",
        "text": "User's Groups retrieval from Active Directory succeeded partially",
        "description": "Only a partial retrieval of user's groups has occurred. This is because either Lookup by Group SID has failed or that canonical name attribute was not found."
    },
    "24444": {
        "code": 24444,
        "severity": "ERROR",
        "text": "Active Directory operation has failed because of an unspecified error in the ISE",
        "description": "Active Directory operation has failed because of an unspecified error in the ISE"
    },
    "24445": {
        "code": 24445,
        "severity": "INFO",
        "text": "Machine Groups retrieval from Active Directory succeeded partially",
        "description": "Partial retrieval of machine groups because Canonical Name attribute was not found"
    },
    "24446": {
        "code": 24446,
        "severity": "ERROR",
        "text": "Active Directory domain controller is unreachable",
        "description": "Active Directory domain controller is unreachable"
    },
    "24447": {
        "code": 24447,
        "severity": "ERROR",
        "text": "ISE appliance machine account in Active Directory is disabled, deleted or reset",
        "description": "ISE appliance machine in Active Directory is disabled, deleted or reset."
    },
    "24448": {
        "code": 24448,
        "severity": "ERROR",
        "text": "User object retrieval from Active Directory failed because of a timeout error",
        "description": "User object retrieval from Active Directory failed because of a timeout error"
    },
    "24449": {
        "code": 24449,
        "severity": "ERROR",
        "text": "User's Groups retrieval from Active Directory failed because of a timeout error",
        "description": "User's Groups retrieval from Active Directory failed because of a timeout error"
    },
    "24450": {
        "code": 24450,
        "severity": "ERROR",
        "text": "User's Attributes retrieval from Active Directory failed because of a timeout error",
        "description": "User's Attributes retrieval from Active Directory failed because of a timeout error"
    },
    "24451": {
        "code": 24451,
        "severity": "ERROR",
        "text": "Machine object retrieval from Active Directory failed because of a timeout error",
        "description": "Machine object retrieval from Active Directory failed because of a timeout error"
    },
    "24452": {
        "code": 24452,
        "severity": "ERROR",
        "text": "Machine primary group retrieval from Active Directory failed because of a timeout error",
        "description": "Machine primary group retrieval from Active Directory failed because of a timeout error"
    },
    "24453": {
        "code": 24453,
        "severity": "ERROR",
        "text": "Machine Attributes retrieval from Active Directory failed because of a timeout error",
        "description": "Machine Attributes retrieval from Active Directory failed because of a timeout error"
    },
    "24454": {
        "code": 24454,
        "severity": "ERROR",
        "text": "User authentication against Active Directory failed because of a timeout error",
        "description": "User authentication against Active Directory failed because of a timeout error"
    },
    "24455": {
        "code": 24455,
        "severity": "ERROR",
        "text": "Change password against Active Directory failed because of a timeout error",
        "description": "Change password against Active Directory failed because of a timeout error"
    },
    "24456": {
        "code": 24456,
        "severity": "WARN",
        "text": "Not all user Active Directory groups are retrieved successfully. One of the groups was not retrieved by its SID",
        "description": "Not all user Active Directory groups are retrieved successfully. One of the groups was not retrieved by its SID"
    },
    "24457": {
        "code": 24457,
        "severity": "WARN",
        "text": "Not all user Active Directory groups are retrieved successfully. One or more of the group's canonical name was not retrieved",
        "description": "Not all user Active Directory groups are retrieved successfully. One or more of the group's canonical name was not retrieved"
    },
    "24458": {
        "code": 24458,
        "severity": "WARN",
        "text": "Not all Active Directory attributes are retrieved successfully",
        "description": "Not all Active Directory attributes are retrieved successfully"
    },
    "24459": {
        "code": 24459,
        "severity": "WARN",
        "text": "Host memberOf groups do not exist or cannot be retrieved",
        "description": "Host memberOf groups do not exist or cannot be retrieved"
    },
    "24460": {
        "code": 24460,
        "severity": "ERROR",
        "text": "There are multiple occurrences of the user name in the Active directory",
        "description": "There are multiple occurrences of the user name in the Active directory"
    },
    "24461": {
        "code": 24461,
        "severity": "ERROR",
        "text": "Could not locate the user in the Active directory using User Lookup",
        "description": "Could not locate the user in the Active directory using User Lookup"
    },
    "24462": {
        "code": 24462,
        "severity": "ERROR",
        "text": "The ISE Active Directory module does not have sufficient memory",
        "description": "The ISE Active Directory module does not have sufficient memory"
    },
    "24463": {
        "code": 24463,
        "severity": "ERROR",
        "text": "Internal error in the ISE Active Directory",
        "description": "A function related to the Active Directory may have received an illegal parameter, option, or session handler. Alternatively, this directory may be missing a parameter, option, or session handler."
    },
    "24464": {
        "code": 24464,
        "severity": "ERROR",
        "text": "The Active Directory does not have the required privileges",
        "description": "The Active Directory does not have the required privileges to perform the specified task."
    },
    "24465": {
        "code": 24465,
        "severity": "ERROR",
        "text": "ISE is not joined to an Active Directory Domain Controller",
        "description": "ISE is not joined to an Active Directory Domain Controller"
    },
    "24466": {
        "code": 24466,
        "severity": "ERROR",
        "text": "ISE Active Directory agent is down",
        "description": "ISE Active Directory agent is down"
    },
    "24467": {
        "code": 24467,
        "severity": "ERROR",
        "text": "Could not retrieve the specified object",
        "description": "Could not retrieve the specified object because it belongs to an inaccessible domain"
    },
    "24468": {
        "code": 24468,
        "severity": "ERROR",
        "text": "Failed to retrieve the user certificate from Active Directory",
        "description": "Failed to retrieve the user certificate from Active Directory."
    },
    "24469": {
        "code": 24469,
        "severity": "INFO",
        "text": "The user certificate was retrieved from Active Directory successfully",
        "description": "The user certificate was retrieved from Active Directory successfully."
    },
    "24470": {
        "code": 24470,
        "severity": "INFO",
        "text": "Machine authentication against Active Directory is successful",
        "description": "Machine authentication against Active Directory is successful."
    },
    "24471": {
        "code": 24471,
        "severity": "INFO",
        "text": "Active Directory does not support the change EnablePassword option",
        "description": "Active Directory does not support the change EnablePassword option."
    },
    "24472": {
        "code": 24472,
        "severity": "DEBUG",
        "text": "The user or host account is locked out; setting the IdentityAccessRestricted flag to true",
        "description": "The user or host account is locked out; ISE sets the IdentityAccessRestricted flag to true."
    },
    "24473": {
        "code": 24473,
        "severity": "DEBUG",
        "text": "The user's password has expired; setting the IdentityAccessRestricted flag to true",
        "description": "The user's password has expired; ISE sets the IdentityAccessRestricted flag to true."
    },
    "24474": {
        "code": 24474,
        "severity": "DEBUG",
        "text": "The user's or host's account has expired; setting the IdentityAccessRestricted flag to true",
        "description": "The user's or host's account has expired; ISE sets the IdentityAccessRestricted flag to true."
    },
    "24475": {
        "code": 24475,
        "severity": "DEBUG",
        "text": "The user's or host's account is disabled; setting the IdentityAccessRestricted flag to true",
        "description": "The user's or host's account is disabled; ISE sets the IdentityAccessRestricted flag to true."
    },
    "24476": {
        "code": 24476,
        "severity": "DEBUG",
        "text": "The user's or host's account is in restricted logon hours; setting the IdentityAccessRestricted flag to true. true",
        "description": "The user's or host's account is in restricted logon hours; ISE sets the IdentityAccessRestricted flag to true."
    },
    "24477": {
        "code": 24477,
        "severity": "DEBUG",
        "text": "The user is not permitted to log in to Active Directory using the current workstation; setting the IdentityAccessRestricted flag to true",
        "description": "The user is not permitted to log in to Active Directory using the current workstation; setting the IdentityAccessRestricted flag to true."
    },
    "24478": {
        "code": 24478,
        "severity": "WARN",
        "text": "Error while validating the user or host in Active Directory; the IdentityAccessRestricted flag is not altered",
        "description": "If there is an error while validating the user or host in Active Directory, ISE does not alter the IdentityAccessRestricted flag."
    },
    "24479": {
        "code": 24479,
        "severity": "WARN",
        "text": "Not all machines in the Active Directory groups are retrieved; one or more of the group's canonical name is not retrieved",
        "description": "Not all machines in the Active Directory groups are retrieved; one or more of the group's canonical name is not retrieved."
    },
    "24480": {
        "code": 24480,
        "severity": "ERROR",
        "text": "The machine-related object retrieval operation from Active Directory has failed",
        "description": "The machine-related object retrieval operation from Active Directory has failed."
    },
    "24481": {
        "code": 24481,
        "severity": "ERROR",
        "text": "The machine's attribute retrieval from Active Directory has failed",
        "description": "The machine's attribute retrieval from Active Directory has failed."
    },
    "24482": {
        "code": 24482,
        "severity": "INFO",
        "text": "Successfully retrieved the machine certificate from Active Directory",
        "description": "Successfully retrieved the machine certificate from Active Directory."
    },
    "24483": {
        "code": 24483,
        "severity": "ERROR",
        "text": "Failed to retrieve the machine certificate from Active Directory",
        "description": "Failed to retrieve the machine certificate from Active Directory."
    },
    "24484": {
        "code": 24484,
        "severity": "DEBUG",
        "text": "Machine authentication against Active Directory has failed because the machine's password has expired",
        "description": "Machine authentication against Active Directory has failed because the machine's password has expired."
    },
    "24485": {
        "code": 24485,
        "severity": "DEBUG",
        "text": "Machine authentication against Active Directory has failed because of wrong password",
        "description": "Machine authentication against Active Directory has failed because of wrong password."
    },
    "24486": {
        "code": 24486,
        "severity": "DEBUG",
        "text": "Machine authentication against Active Directory has failed because the machine's account is disabled",
        "description": "Machine authentication against Active Directory has failed because the machine's account is disabled."
    },
    "24487": {
        "code": 24487,
        "severity": "DEBUG",
        "text": "Machine authentication against Active Directory failed since machine is considered to be in restricted logon hours",
        "description": "Machine authentication against Active Directory failed since machine is considered to be in restricted logon hours"
    },
    "24488": {
        "code": 24488,
        "severity": "DEBUG",
        "text": "The machine's domain is not recognized by Active Directory",
        "description": "The machine's domain is not recognized by Active Directory."
    },
    "24489": {
        "code": 24489,
        "severity": "DEBUG",
        "text": "Machine authentication against Active Directory has failed because the machine's account has expired",
        "description": "Machine authentication against Active Directory has failed because the machine's account has expired."
    },
    "24490": {
        "code": 24490,
        "severity": "DEBUG",
        "text": "Machine authentication against Active Directory has failed because the machine's account is locked out",
        "description": "Machine authentication against Active Directory has failed because the machine's account is locked out."
    },
    "24491": {
        "code": 24491,
        "severity": "DEBUG",
        "text": "Machine authentication against Active Directory has failed because the machine has invalid credentials",
        "description": "Machine authentication against Active Directory has failed because the machine has invalid credentials."
    },
    "24492": {
        "code": 24492,
        "severity": "ERROR",
        "text": "Machine authentication against Active Directory has failed",
        "description": "Machine authentication against Active Directory has failed."
    },
    "24493": {
        "code": 24493,
        "severity": "ERROR",
        "text": "ISE has problems communicating with Active Directory using its machine credentials",
        "description": "ISE has problems communicating with Active Directory using its machine credentials."
    },
    "24494": {
        "code": 24494,
        "severity": "ERROR",
        "text": "Active Directory DNS servers are not available",
        "description": "Active Directory DNS servers are not available."
    },
    "24495": {
        "code": 24495,
        "severity": "ERROR",
        "text": "Active Directory servers are not available",
        "description": "Active Directory servers are not available."
    },
    "24496": {
        "code": 24496,
        "severity": "WARN",
        "text": "Authentication rejected due to a white or black list restriction",
        "description": "Authentication rejected due to a white or black list restriction"
    },
    "24497": {
        "code": 24497,
        "severity": "ERROR",
        "text": "Selected Active Directory Scope is empty",
        "description": "Selected Active Directory Scope is empty"
    },
    "24498": {
        "code": 24498,
        "severity": "ERROR",
        "text": "Resolve identity exceeded time limit",
        "description": "User's Attributes retrieval from Active Directory failed because of a timeout error"
    },
    "24500": {
        "code": 24500,
        "severity": "DEBUG",
        "text": "Authenticating user against the RSA SecurID Server",
        "description": "Authenticating user against the RSA SecurID Server."
    },
    "24501": {
        "code": 24501,
        "severity": "DEBUG",
        "text": "A session is established with the RSA SecurID Server",
        "description": "A session is established with the RSA SecurID Server."
    },
    "24502": {
        "code": 24502,
        "severity": "DEBUG",
        "text": "The session with RSA SecurID Server is closed",
        "description": "The session with RSA SecurID Server is closed"
    },
    "24503": {
        "code": 24503,
        "severity": "ERROR",
        "text": "Cannot establish a session with the RSA SecurID Server",
        "description": "Cannot establish a session with the RSA SecurID Server."
    },
    "24504": {
        "code": 24504,
        "severity": "ERROR",
        "text": "The lock user request has failed",
        "description": "The lock user request has failed."
    },
    "24505": {
        "code": 24505,
        "severity": "DEBUG",
        "text": "User authentication has succeeded",
        "description": "User authentication against the RSA SecurID Server has succeeded."
    },
    "24506": {
        "code": 24506,
        "severity": "DEBUG",
        "text": "Check passcode operation succeeded",
        "description": "Check passcode operation against RSA SecurID Server succeeded"
    },
    "24507": {
        "code": 24507,
        "severity": "DEBUG",
        "text": "Next Tokencode operation succeeded",
        "description": "Next Tokencode operation against RSA SecurID Server succeeded"
    },
    "24508": {
        "code": 24508,
        "severity": "DEBUG",
        "text": "User authentication failed",
        "description": "User authentication against RSA SecurID Server failed"
    },
    "24509": {
        "code": 24509,
        "severity": "DEBUG",
        "text": "Check passcode resulted in Next Tokencode required",
        "description": "Check passcode resulted in Next Tokencode required"
    },
    "24510": {
        "code": 24510,
        "severity": "DEBUG",
        "text": "Check passcode resulted in setting New PIN required",
        "description": "Check passcode resulted in setting New PIN required"
    },
    "24511": {
        "code": 24511,
        "severity": "ERROR",
        "text": "Check passcode operation against RSA SecurID Server resulted in error",
        "description": "Check passcode operation against RSA SecurID Server resulted in error"
    },
    "24512": {
        "code": 24512,
        "severity": "ERROR",
        "text": "Next tokencode operation in RSA SecurID Server resulted in error",
        "description": "Next tokencode operation in RSA SecurID Server resulted in error"
    },
    "24513": {
        "code": 24513,
        "severity": "ERROR",
        "text": "Set New PIN operation in RSA SecurID Server resulted in error",
        "description": "Set New PIN operation in RSA SecurID Server resulted in error"
    },
    "24514": {
        "code": 24514,
        "severity": "DEBUG",
        "text": "Next tokencode operation in RSA SecurID Server failed",
        "description": "Next tokencode operation in RSA SecurID Server failed"
    },
    "24515": {
        "code": 24515,
        "severity": "DEBUG",
        "text": "Set New PIN operation in RSA SecurID Server failed",
        "description": "Set New PIN operation in RSA SecurID Server failed"
    },
    "24516": {
        "code": 24516,
        "severity": "DEBUG",
        "text": "New PIN was set successfully",
        "description": "New PIN was set successfully"
    },
    "24517": {
        "code": 24517,
        "severity": "DEBUG",
        "text": "User accepts system's PIN",
        "description": "User chose to accept system's PIN"
    },
    "24518": {
        "code": 24518,
        "severity": "DEBUG",
        "text": "User canceled New PIN operation; User authentication against RSA SecurIDServer failed",
        "description": "User canceled New PIN operation; User authentication against RSA SecurID Server failed"
    },
    "24519": {
        "code": 24519,
        "severity": "DEBUG",
        "text": "User entered invalid PIN; PIN must only contain alpha-numeric characters",
        "description": "User entered invalid PIN; PIN must only contain alpha-numeric characters"
    },
    "24520": {
        "code": 24520,
        "severity": "DEBUG",
        "text": "User entered invalid PIN; PIN must only contain numeric characters",
        "description": "User entered invalid PIN; PIN must only contain numeric characters"
    },
    "24521": {
        "code": 24521,
        "severity": "DEBUG",
        "text": "User entered PIN with invalid length",
        "description": "User entered PIN with invalid length"
    },
    "24522": {
        "code": 24522,
        "severity": "DEBUG",
        "text": "PIN Accepted. Wait for the token code to change, then reauthenticate using the new passcode.",
        "description": "PIN Accepted. Wait for the token code to change, then reauthenticate using the new passcode."
    },
    "24523": {
        "code": 24523,
        "severity": "DEBUG",
        "text": "Returned challenge asking the user to enter next tokencode",
        "description": "Returned challenge asking the enter next tokencode"
    },
    "24524": {
        "code": 24524,
        "severity": "DEBUG",
        "text": "Received user response for next tokencode challenge",
        "description": "Received user response for next tokencode challenge"
    },
    "24525": {
        "code": 24525,
        "severity": "DEBUG",
        "text": "Returned challenge asking the user to accept system's PIN",
        "description": "Returned challenge asking the user to accept system's PIN"
    },
    "24526": {
        "code": 24526,
        "severity": "DEBUG",
        "text": "Received user response for accept system PIN challenge",
        "description": "Received user response for accept system PIN challenge"
    },
    "24527": {
        "code": 24527,
        "severity": "DEBUG",
        "text": "Returned challenge asking the user to enter new PIN",
        "description": "Returned challenge asking the user to enter new PIN"
    },
    "24528": {
        "code": 24528,
        "severity": "DEBUG",
        "text": "Received user response for enter new PIN challenge",
        "description": "Received user response for enter new PIN challenge"
    },
    "24529": {
        "code": 24529,
        "severity": "DEBUG",
        "text": "Returned challenge displaying the user his new PIN",
        "description": "Returned challenge displaying the user his new PIN"
    },
    "24530": {
        "code": 24530,
        "severity": "DEBUG",
        "text": "Received user response for challenge displaying him his new PIN",
        "description": "Received user response for challenge displaying him his new PIN"
    },
    "24531": {
        "code": 24531,
        "severity": "DEBUG",
        "text": "Returned challenge asking the user to reenter new PIN",
        "description": "Returned challenge asking the user to reenter new PIN"
    },
    "24532": {
        "code": 24532,
        "severity": "DEBUG",
        "text": "Received user response for challenge asking the user to reenter new PIN",
        "description": "Received user response for challenge asking the user to reenter new PIN"
    },
    "24533": {
        "code": 24533,
        "severity": "ERROR",
        "text": "User reentered a different PIN",
        "description": "User reentered a different PIN"
    },
    "24534": {
        "code": 24534,
        "severity": "DEBUG",
        "text": "Returned challenge asking the user whether he is going to accept system's PIN or will enter a new PIN by himself",
        "description": "Returned challenge asking the user whether he is going to accept system's PIN or will enter a new PIN by himself"
    },
    "24535": {
        "code": 24535,
        "severity": "DEBUG",
        "text": "Received user response for challenge asking the user to accept system's PIN or enter a new PIN",
        "description": "Received user response for challenge asking the user to accept system's PIN or enter a new PIN"
    },
    "24536": {
        "code": 24536,
        "severity": "DEBUG",
        "text": "User chose to enter a new PIN",
        "description": "User chose to enter a new PIN"
    },
    "24537": {
        "code": 24537,
        "severity": "DEBUG",
        "text": "User chose to accept system's PIN",
        "description": "User chose to accept system's PIN"
    },
    "24538": {
        "code": 24538,
        "severity": "DEBUG",
        "text": "RSA Session was invalidated",
        "description": "RSA Session was invalidated due to agent configuration changes during session"
    },
    "24539": {
        "code": 24539,
        "severity": "INFO",
        "text": "RSA agent configuration loaded, RSA agent started",
        "description": "RSA agent configuration loaded, RSA agent started"
    },
    "24540": {
        "code": 24540,
        "severity": "INFO",
        "text": "RSA agent configuration initialized, RSA agent started",
        "description": "RSA agent configuration initialized, RSA agent started"
    },
    "24541": {
        "code": 24541,
        "severity": "INFO",
        "text": "RSA agent configuration updated, RSA agent restarted",
        "description": "RSA agent configuration updated, RSA agent restarted"
    },
    "24542": {
        "code": 24542,
        "severity": "INFO",
        "text": "RSA agent configuration deleted, RSA agent stopped",
        "description": "RSA agent configuration deleted, RSA agent stopped"
    },
    "24543": {
        "code": 24543,
        "severity": "DEBUG",
        "text": "RSA session timeout, session cancelled",
        "description": "RSA session timeout, session cancelled"
    },
    "24544": {
        "code": 24544,
        "severity": "ERROR",
        "text": "RSA agent initialization failed",
        "description": "RSA agent initialization failed"
    },
    "24545": {
        "code": 24545,
        "severity": "INFO",
        "text": "The securid file has been removed",
        "description": "The securid file has been removed"
    },
    "24546": {
        "code": 24546,
        "severity": "INFO",
        "text": "The sdstatus.12 file has been removed",
        "description": "The sdstatus.12 file has been removed"
    },
    "24547": {
        "code": 24547,
        "severity": "WARN",
        "text": "RSA request timeout expired. RSA authentication session cancelled",
        "description": "RSA request timeout expired. RSA authentication session cancelled."
    },
    "24548": {
        "code": 24548,
        "severity": "ERROR",
        "text": "RSA agent configuration load failed",
        "description": "RSA agent configuration load failed"
    },
    "24549": {
        "code": 24549,
        "severity": "ERROR",
        "text": "RSA agent configuration initialization failed",
        "description": "RSA agent configuration initialization failed"
    },
    "24550": {
        "code": 24550,
        "severity": "ERROR",
        "text": "RSA agent configuration update failed",
        "description": "RSA agent configuration update failed"
    },
    "24551": {
        "code": 24551,
        "severity": "WARN",
        "text": "RSA request is declined, because RSA agent initialization has failed",
        "description": "RSA request is declined, because RSA agent initialization has failed."
    },
    "24552": {
        "code": 24552,
        "severity": "DEBUG",
        "text": "Reject response from the RSA server is considered as User not found",
        "description": "According to the configuration of RSA Identity Store, reject response from the RSA server is considered as User not found."
    },
    "24553": {
        "code": 24553,
        "severity": "DEBUG",
        "text": "User record was cached",
        "description": "Following a successful authentication against the RSA SecurID server, user record was cached."
    },
    "24554": {
        "code": 24554,
        "severity": "DEBUG",
        "text": "User record was not cached",
        "description": "User record was not cached."
    },
    "24555": {
        "code": 24555,
        "severity": "DEBUG",
        "text": "User record was found in the cache",
        "description": "User record was found and retrieved from the cache"
    },
    "24556": {
        "code": 24556,
        "severity": "DEBUG",
        "text": "User record was not found in the cache",
        "description": "User record was not found in the cache."
    },
    "24557": {
        "code": 24557,
        "severity": "DEBUG",
        "text": "An error occurred while searching for user records in the cache",
        "description": "An error occurred while searching for user records in the cache."
    },
    "24558": {
        "code": 24558,
        "severity": "DEBUG",
        "text": "User cache is not enabled in the RSA identity store configuration",
        "description": "User cache is not enabled in the RSA Identity Store configuration."
    },
    "24559": {
        "code": 24559,
        "severity": "DEBUG",
        "text": "Searching for user in the RSA identity store",
        "description": "Searching for user in the RSA identity store."
    },
    "24560": {
        "code": 24560,
        "severity": "DEBUG",
        "text": "Searching for user record in RSA identity store Passcode cache",
        "description": "Token Cache for RSA identity store is enabled. Searching for user record in RSA identity store Passcode cache in order to authenticate via cache."
    },
    "24561": {
        "code": 24561,
        "severity": "DEBUG",
        "text": "User record was found in Passcode cache",
        "description": "User record was found in RSA identity store Passcode cache."
    },
    "24562": {
        "code": 24562,
        "severity": "DEBUG",
        "text": "User record was not found in Passcode cache",
        "description": "User record was not found in RSA identity store Passcode cache. ISE will try to authenticate user against RSA Identity Store."
    },
    "24563": {
        "code": 24563,
        "severity": "DEBUG",
        "text": "An error occurred while searching for user record in the Passcode cache",
        "description": "An error occurred while searching for user record in the Passcode cache."
    },
    "24564": {
        "code": 24564,
        "severity": "DEBUG",
        "text": "Passcode cache is not enabled in the RSA identity store configuration",
        "description": "Passcode cache is not enabled in the RSA Identity Store configuration."
    },
    "24565": {
        "code": 24565,
        "severity": "DEBUG",
        "text": "Authentication passed via Passcode cache",
        "description": "User record was found in Passcode cache, passcode matches the passcode on the authentication request. Authentication passed via Passcode cache."
    },
    "24566": {
        "code": 24566,
        "severity": "DEBUG",
        "text": "Cached Passcode doesn't match passcode in authentication request. Passcode will be removed from the cache",
        "description": "Cached Passcode doesn't match passcode in authentication request. ISE will try to authenticate user against RSA Identity Store."
    },
    "24567": {
        "code": 24567,
        "severity": "DEBUG",
        "text": "User record was cached in Passcode cache",
        "description": "Following a successful authentication against the RSA SecurID server, user record was cached in passcode cache."
    },
    "24568": {
        "code": 24568,
        "severity": "DEBUG",
        "text": "User record was not cached in Passcode cache",
        "description": "User record was not cached in Passcode cache"
    },
    "24600": {
        "code": 24600,
        "severity": "INFO",
        "text": "RADIUS token identity store is created",
        "description": "RADIUS token identity store is created."
    },
    "24601": {
        "code": 24601,
        "severity": "INFO",
        "text": "RADIUS token identity store is destroyed",
        "description": "RADIUS token identity store is destroyed."
    },
    "24602": {
        "code": 24602,
        "severity": "INFO",
        "text": "RADIUS token identity store is configured with static prompt",
        "description": "RADIUS token identity store is configured with static prompt."
    },
    "24603": {
        "code": 24603,
        "severity": "INFO",
        "text": "RADIUS token identity store configured to obtain prompt from RADIUS token server",
        "description": "RADIUS token identity store configured to obtain prompt from RADIUS token server"
    },
    "24604": {
        "code": 24604,
        "severity": "INFO",
        "text": "RADIUS token primary server was created",
        "description": "RADIUS token primary server was created"
    },
    "24605": {
        "code": 24605,
        "severity": "INFO",
        "text": "RADIUS token secondary server was created",
        "description": "RADIUS token secondary server was created"
    },
    "24606": {
        "code": 24606,
        "severity": "INFO",
        "text": "RADIUS token identity store configured to fail on authentication reject",
        "description": "RADIUS token identity store configured to fail on authentication reject"
    },
    "24607": {
        "code": 24607,
        "severity": "INFO",
        "text": "RADIUS token identity store configured to return unknown user error on authentication reject",
        "description": "RADIUS token identity store configured to return unknown user error on authentication reject"
    },
    "24608": {
        "code": 24608,
        "severity": "ERROR",
        "text": "RADIUS token identity store failed due to wrong input",
        "description": "RADIUS token identity store has failed due to wrong input."
    },
    "24609": {
        "code": 24609,
        "severity": "INFO",
        "text": "RADIUS token identity store is authenticating against the primary server",
        "description": "RADIUS token identity store is authenticating against the primary server."
    },
    "24610": {
        "code": 24610,
        "severity": "INFO",
        "text": "RADIUS token identity store is authenticating against the secondary server",
        "description": "RADIUS token identity store is authenticating against the secondary server."
    },
    "24611": {
        "code": 24611,
        "severity": "ERROR",
        "text": "RADIUS token server configuration error",
        "description": "RADIUS token server configuration error"
    },
    "24612": {
        "code": 24612,
        "severity": "INFO",
        "text": "Authentication against the RADIUS token server succeeded",
        "description": "Authentication against the RADIUS token server succeeded."
    },
    "24613": {
        "code": 24613,
        "severity": "ERROR",
        "text": "Authentication against the RADIUS token server failed",
        "description": "Authentication against the RADIUS token server failed."
    },
    "24614": {
        "code": 24614,
        "severity": "INFO",
        "text": "RADIUS token server authentication failure is translated as Unknown user failure",
        "description": "RADIUS token server authentication failure is translated as Unknown user failure."
    },
    "24615": {
        "code": 24615,
        "severity": "INFO",
        "text": "RADIUS token identity store received access challenge response",
        "description": "RADIUS token identity store received access challenge response."
    },
    "24616": {
        "code": 24616,
        "severity": "ERROR",
        "text": "RADIUS token identity store received timeout error",
        "description": "RADIUS token identity store received timeout error"
    },
    "24617": {
        "code": 24617,
        "severity": "ERROR",
        "text": "RADIUS token identity store received external error",
        "description": "RADIUS token identity store received external error"
    },
    "24618": {
        "code": 24618,
        "severity": "ERROR",
        "text": "RADIUS token identity store received unknown error",
        "description": "RADIUS token identity store received unknown error"
    },
    "24619": {
        "code": 24619,
        "severity": "DEBUG",
        "text": "Non-compliant attributes detected in the RADIUS token identity store",
        "description": "Non-compliant attributes are detected in the RADIUS token identity store."
    },
    "24620": {
        "code": 24620,
        "severity": "INFO",
        "text": "User name format was changed after authentication with the RADIUS token server",
        "description": "User name format was changed after authentication with the RADIUS token server."
    },
    "24621": {
        "code": 24621,
        "severity": "INFO",
        "text": "RADIUS token identity store configured to return defined prompt",
        "description": "RADIUS token identity store has been configured to return defined prompt."
    },
    "24622": {
        "code": 24622,
        "severity": "INFO",
        "text": "RADIUS token identity store configured to return prompt from the RADIUS token server",
        "description": "RADIUS token identity store has been configured to return prompt from the RADIUS token server."
    },
    "24623": {
        "code": 24623,
        "severity": "DEBUG",
        "text": "User record was cached",
        "description": "User record was cached after successful authentication against Radius Token Server"
    },
    "24624": {
        "code": 24624,
        "severity": "DEBUG",
        "text": "User record was not cached",
        "description": "User record was not cached."
    },
    "24625": {
        "code": 24625,
        "severity": "DEBUG",
        "text": "User record found in the cache",
        "description": "User record was found and retrieved from the cache."
    },
    "24626": {
        "code": 24626,
        "severity": "DEBUG",
        "text": "User record not found in the cache",
        "description": "User record was not found in the cache."
    },
    "24627": {
        "code": 24627,
        "severity": "DEBUG",
        "text": "An error occurred while searching for user records in the cache",
        "description": "An error occurred while searching for user records in the cache."
    },
    "24628": {
        "code": 24628,
        "severity": "DEBUG",
        "text": "User cache not enabled in the RADIUS token identity store configuration",
        "description": "User cache is not enabled in the RADIUS token identity store configuration."
    },
    "24629": {
        "code": 24629,
        "severity": "DEBUG",
        "text": "Searching for user in the RADIUS token identity store",
        "description": "Searching for user in the RADIUS token identity store."
    },
    "24630": {
        "code": 24630,
        "severity": "ERROR",
        "text": "Failed to get Server IP by name",
        "description": "Failed to get Server IP by name"
    },
    "24631": {
        "code": 24631,
        "severity": "DEBUG",
        "text": "Looking up User in Internal Guests IDStore",
        "description": "Looking up User in Internal Guests IDStore"
    },
    "24632": {
        "code": 24632,
        "severity": "DEBUG",
        "text": "Found User in Internal Guests IDStore",
        "description": "Found User in Internal Guests IDStore"
    },
    "24633": {
        "code": 24633,
        "severity": "DEBUG",
        "text": "The user is not found in the internal guests identity store",
        "description": "The specified user is not found in the internal guests identity store."
    },
    "24634": {
        "code": 24634,
        "severity": "DEBUG",
        "text": "Searching for user record in RADIUS token identity store Passcode cache",
        "description": "Token Cache for RADIUS token identity store is enabled. Searching for user record in RADIUS token identity store Passcode cache in order to authenticate via cache."
    },
    "24635": {
        "code": 24635,
        "severity": "DEBUG",
        "text": "User record was found in Passcode cache",
        "description": "User record was found in RADIUS token identity store Passcode cache."
    },
    "24636": {
        "code": 24636,
        "severity": "DEBUG",
        "text": "User record was not found in Passcode cache",
        "description": "User record was not found in RADIUS token identity store Passcode cache. ISE will try to authenticate user against RADIUS token Identity Store."
    },
    "24637": {
        "code": 24637,
        "severity": "DEBUG",
        "text": "An error occurred while searching for user record in the Passcode cache",
        "description": "An error occurred while searching for user record in the Passcode cache."
    },
    "24638": {
        "code": 24638,
        "severity": "DEBUG",
        "text": "Passcode cache is not enabled in the RADIUS token identity store configuration",
        "description": "Passcode cache is not enabled in the RADIUS token Identity Store configuration."
    },
    "24639": {
        "code": 24639,
        "severity": "DEBUG",
        "text": "Authentication passed via Passcode cache",
        "description": "User record was found in Passcode cache, passcode matches the passcode on the authentication request. Authentication passed via Passcode cache."
    },
    "24640": {
        "code": 24640,
        "severity": "DEBUG",
        "text": "Cached Passcode doesn't match passcode in authentication request. Passcode will be removed from the cache",
        "description": "Cached Passcode doesn't match passcode in authentication request. ISE will try to authenticate user against RADIUS token Identity Store."
    },
    "24641": {
        "code": 24641,
        "severity": "DEBUG",
        "text": "User record was cached in Passcode cache",
        "description": "Following a successful authentication against the RADIUS token SecurID server, user record was cached in passcode cache."
    },
    "24642": {
        "code": 24642,
        "severity": "DEBUG",
        "text": "User record was not cached in Passcode cache",
        "description": "User record was not cached in Passcode cache."
    },
    "24700": {
        "code": 24700,
        "severity": "DEBUG",
        "text": "Identity resolution by certificate succeeded",
        "description": "Identity resolution by certificate succeeded"
    },
    "24701": {
        "code": 24701,
        "severity": "DEBUG",
        "text": "Identity resolution by certificate failed",
        "description": "Identity resolution by certificate failed"
    },
    "24702": {
        "code": 24702,
        "severity": "DEBUG",
        "text": "Identity resolution by certificate found no matching account",
        "description": "Identity resolution by certificate found no matching account"
    },
    "24703": {
        "code": 24703,
        "severity": "DEBUG",
        "text": "Identity resolution by certificate found ambiguous accounts",
        "description": "Identity resolution by certificate found ambiguous accounts"
    },
    "24704": {
        "code": 24704,
        "severity": "DEBUG",
        "text": "Authentication failed because identity credentials are ambiguous",
        "description": "Authentication found several accounts matching to the given credentials (i.e identity name and password)"
    },
    "24705": {
        "code": 24705,
        "severity": "DEBUG",
        "text": "Authentication failed because ISE server is not joined to required domains",
        "description": "Authentication failed because ISE server is not joined to required domains"
    },
    "24706": {
        "code": 24706,
        "severity": "DEBUG",
        "text": "Authentication failed because NTLM was blocked",
        "description": "Authentication failed because NTLM was blocked"
    },
    "24707": {
        "code": 24707,
        "severity": "DEBUG",
        "text": "Authentication failed because all identity names have been rejected",
        "description": "Authentication failed all identity names has been rejected according AD Identity Store Advanced Settings"
    },
    "24708": {
        "code": 24708,
        "severity": "DEBUG",
        "text": "User not found in Active Directory. Some authentication domains were not available",
        "description": "User not found in Active Directory. Some authentication domains were not available during identity resolution"
    },
    "24709": {
        "code": 24709,
        "severity": "DEBUG",
        "text": "Host not found in Active Directory. Some authentication domains were not available",
        "description": "Host not found in Active Directory. Some authentication domains were not available during identity resolution"
    },
    "24710": {
        "code": 24710,
        "severity": "DEBUG",
        "text": "Identity resolution is configured to drop request if required domain is not available",
        "description": "Identity resolution is configured to drop request if required domain is not available"
    },
    "24711": {
        "code": 24711,
        "severity": "DEBUG",
        "text": "Domain controller cannot pass request through the trust path to the account domain",
        "description": "Domain controller cannot pass request through the trust path from the join point domain to the domain where user account is located"
    },
    "24712": {
        "code": 24712,
        "severity": "DEBUG",
        "text": "Authentication failed because domain trust is restricted",
        "description": "Authentication failed because domain trust is restricted"
    },
    "24713": {
        "code": 24713,
        "severity": "DEBUG",
        "text": "ISE peer has confirmed previous successful machine authentication for user in Active Directory",
        "description": "ISE peer has confirmed previous successful machine authentication for user in Active Directory"
    },
    "24714": {
        "code": 24714,
        "severity": "DEBUG",
        "text": "ISE peers have not confirmed previous successful machine authentication for user in Active Directory",
        "description": "ISE peers have not confirmed previous successful machine authentication for user in Active Directory"
    },
    "24715": {
        "code": 24715,
        "severity": "DEBUG",
        "text": "ISE has not confirmed locally previous successful machine authentication for user in Active Directory",
        "description": "ISE has not confirmed locally previous successful machine authentication for user in Active Directory. ACS is quering peers for confirmation"
    },
    "24716": {
        "code": 24716,
        "severity": "INFO",
        "text": "Active Directory Kerberos ticket authentication succeeded",
        "description": "Active Directory Kerberos ticket authentication succeeded"
    },
    "24717": {
        "code": 24717,
        "severity": "ERROR",
        "text": "Active Directory Kerberos ticket authentication failed",
        "description": "Active Directory Kerberos ticket authentication failed"
    },
    "24718": {
        "code": 24718,
        "severity": "ERROR",
        "text": "Active Directory Kerberos ticket expired",
        "description": "Active Directory Kerberos ticket expired"
    },
    "24719": {
        "code": 24719,
        "severity": "DEBUG",
        "text": "Active Directory Kerberos ticket authentication failed because of the ISE account password mismatch, integrity check failure or expired ticket",
        "description": "Active Directory Kerberos ticket authentication failed because of the ISE account password mismatch, integrity check failure or expired ticket"
    },
    "24800": {
        "code": 24800,
        "severity": "INFO",
        "text": "SAML Portal metadata was exported",
        "description": "SAML Portal metadata was exported"
    },
    "24801": {
        "code": 24801,
        "severity": "INFO",
        "text": "Unable to decode SAML request",
        "description": "Unable to decode SAML request"
    },
    "24802": {
        "code": 24802,
        "severity": "INFO",
        "text": "Unknown SAML attribute value type assertion used for 'username'",
        "description": "Unknown SAML attribute value type assertion used for 'username'"
    },
    "24803": {
        "code": 24803,
        "severity": "INFO",
        "text": "Unable to find 'username' attribute assertion",
        "description": "Unable to find 'username' attribute assertion"
    },
    "24804": {
        "code": 24804,
        "severity": "INFO",
        "text": "SAML message intended destination (required by binding) was not present",
        "description": "SAML message intended destination (required by binding) was not present"
    },
    "24805": {
        "code": 24805,
        "severity": "INFO",
        "text": "SAML message intended destination endpoint did not match recipient endpoint",
        "description": "SAML message intended destination endpoint did not match recipient endpoint"
    },
    "24806": {
        "code": 24806,
        "severity": "WARN",
        "text": "SAML IdentityProvider Certificate is not valid",
        "description": "SAML IdentityProvider Certificate is not valid"
    },
    "24807": {
        "code": 24807,
        "severity": "WARN",
        "text": "SAML IdentityProvider Certificate was not checked",
        "description": "SAML IdentityProvider Certificate was not checked"
    },
    "24808": {
        "code": 24808,
        "severity": "WARN",
        "text": "SAML IdentityProvider Certificate is expired",
        "description": "SAML IdentityProvider Certificate is expired"
    },
    "24809": {
        "code": 24809,
        "severity": "WARN",
        "text": "SAML IdentityProvider Certificate is revoked",
        "description": "SAML IdentityProvider Certificate is revoked"
    },
    "24810": {
        "code": 24810,
        "severity": "WARN",
        "text": "SAML IdentityProvider CA Certificate is not valid",
        "description": "SAML IdentityProvider CA Certificate is not valid"
    },
    "24811": {
        "code": 24811,
        "severity": "INFO",
        "text": "The request could not be performed due to an error on the part of the requester",
        "description": "The request could not be performed due to an error on the part of the requester"
    },
    "24812": {
        "code": 24812,
        "severity": "INFO",
        "text": "The request could not be performed due to an error on the part of the SAML responder or SAML authority",
        "description": "The request could not be performed due to an error on the part of the SAML responder or SAML authority"
    },
    "24813": {
        "code": 24813,
        "severity": "INFO",
        "text": "The SAML responder could not process the request because the version of the request message was incorrect",
        "description": "The SAML responder could not process the request because the version of the request message was incorrect"
    },
    "24814": {
        "code": 24814,
        "severity": "INFO",
        "text": "The responding provider was unable to successfully authenticate the principal",
        "description": "The responding provider was unable to successfully authenticate the principal"
    },
    "24815": {
        "code": 24815,
        "severity": "INFO",
        "text": "Unexpected or invalid content was encountered within a saml:Attribute or saml:AttributeValue element",
        "description": "Unexpected or invalid content was encountered within a saml:Attribute or saml:AttributeValue element"
    },
    "24816": {
        "code": 24816,
        "severity": "INFO",
        "text": "The SAML responder or SAML authority is able to process the request but has chosen not to respond.",
        "description": "The SAML responder or SAML authority is able to process the request but has chosen not to respond. This status code MAY be used when there is concern about the security context of the request message or the sequence of request messages received from a particular requester"
    },
    "24817": {
        "code": 24817,
        "severity": "INFO",
        "text": "The SAML responder or SAML authority does not support the request",
        "description": "The SAML responder or SAML authority does not support the request"
    },
    "24818": {
        "code": 24818,
        "severity": "INFO",
        "text": "The SAML responder cannot properly fulfil the request using the protocol binding specified in the request",
        "description": "The SAML responder cannot properly fulfil the request using the protocol binding specified in the request"
    },
    "24819": {
        "code": 24819,
        "severity": "INFO",
        "text": "Failed to retrieve signing certificate from the SAML response",
        "description": "Failed to retrieve signing certificate from the SAML response"
    },
    "24820": {
        "code": 24820,
        "severity": "DEBUG",
        "text": "Assertion does not contain Issuer",
        "description": "Assertion must contain Issuer"
    },
    "24821": {
        "code": 24821,
        "severity": "DEBUG",
        "text": "Assertion does not contain authentication statement",
        "description": "Assertion must contain authentication statement"
    },
    "24822": {
        "code": 24822,
        "severity": "DEBUG",
        "text": "Assertion does not contain audience restriction conditions",
        "description": "Assertion must contain audience restriction conditions"
    },
    "24823": {
        "code": 24823,
        "severity": "DEBUG",
        "text": "Assertion does not contain matching service provider identifier in the audience restriction conditions",
        "description": "Assertion must contain matching service provider identifier in the audience restriction conditions"
    },
    "24824": {
        "code": 24824,
        "severity": "DEBUG",
        "text": "Subject confirmation does not contain subject confirmation data",
        "description": "Subject confirmation must contain subject confirmation data"
    },
    "24825": {
        "code": 24825,
        "severity": "DEBUG",
        "text": "The response must contain single assertion",
        "description": "The response must contain single assertion"
    },
    "24826": {
        "code": 24826,
        "severity": "DEBUG",
        "text": "Recipient does not match assertion consumption URL",
        "description": "Recipient must match assertion consumption URL"
    },
    "24827": {
        "code": 24827,
        "severity": "DEBUG",
        "text": "Subject confirmation data does not contain NotOnOrAfter",
        "description": "Subject confirmation data must contain NotOnOrAfter"
    },
    "24828": {
        "code": 24828,
        "severity": "DEBUG",
        "text": "Assertion is expired",
        "description": "Assertion is expired"
    },
    "24829": {
        "code": 24829,
        "severity": "DEBUG",
        "text": "Subject confirmation data IP address does not match end user IP address",
        "description": "Subject confirmation data IP address does not match end user IP address"
    },
    "24830": {
        "code": 24830,
        "severity": "DEBUG",
        "text": "Subject confirmation data does not contain InResponseTo",
        "description": "Subject confirmation data must contain InResponseTo"
    },
    "24831": {
        "code": 24831,
        "severity": "DEBUG",
        "text": "The InResponseTo does not match the original request id",
        "description": "The InResponseTo must match the original request id"
    },
    "24832": {
        "code": 24832,
        "severity": "DEBUG",
        "text": "Issuer format is not equal to urn:oasis:names:tc:SAML:2.0:nameid-format:entity",
        "description": "Issuer format must be equal to urn:oasis:names:tc:SAML:2.0:nameid-format:entity"
    },
    "24833": {
        "code": 24833,
        "severity": "DEBUG",
        "text": "Issuer does not match Identity Provider ID",
        "description": "Issuer does not match Identity Provider ID"
    },
    "24834": {
        "code": 24834,
        "severity": "DEBUG",
        "text": "Assertion does not contain subject",
        "description": "Assertion must contain subject"
    },
    "24835": {
        "code": 24835,
        "severity": "DEBUG",
        "text": "Assertion does not contain subject confirmation",
        "description": "Assertion must contain subject confirmation"
    },
    "24836": {
        "code": 24836,
        "severity": "DEBUG",
        "text": "Assertion does not contain bearer subject confirmation",
        "description": "Assertion must contain bearer subject confirmation"
    },
    "24837": {
        "code": 24837,
        "severity": "DEBUG",
        "text": "The signed response does not contain a Destination",
        "description": "The signed response must contain a Destination"
    },
    "24838": {
        "code": 24838,
        "severity": "DEBUG",
        "text": "The Destination on the response does not match the assertion consumer URL",
        "description": "The Destination on the response must match the assertion consumer URL"
    },
    "24839": {
        "code": 24839,
        "severity": "DEBUG",
        "text": "The response does not contain assertion",
        "description": "The response must contain assertion"
    },
    "24840": {
        "code": 24840,
        "severity": "DEBUG",
        "text": "The response signature is invalid",
        "description": "The response signature is invalid"
    },
    "24841": {
        "code": 24841,
        "severity": "DEBUG",
        "text": "Response signature did not validate against the IdP signature certificate",
        "description": "Response signature did not validate against the signature certificate configured on SAML Identity Provider in ISE"
    },
    "24842": {
        "code": 24842,
        "severity": "DEBUG",
        "text": "The assertion signature on the response is invalid",
        "description": "The assertion signature on the response is invalid"
    },
    "24843": {
        "code": 24843,
        "severity": "DEBUG",
        "text": "Assertion signature is not not validated against the IdP signature certificate",
        "description": "Assertion signature did not validate against the signature certificate configured on SAML Identity Provider in ISE"
    },
    "24844": {
        "code": 24844,
        "severity": "DEBUG",
        "text": "Neither SAML response nor assertion are signed",
        "description": "Neither SAML response nor assertion are signed"
    },
    "24845": {
        "code": 24845,
        "severity": "DEBUG",
        "text": "SAML response can contain only one signing certificate",
        "description": "SAML response contains several certificates, can not determine certificate for signature validation"
    },
    "24846": {
        "code": 24846,
        "severity": "DEBUG",
        "text": "Several certificates are configured on IdP,however can not determine certificate for signature",
        "description": "Several certificates configured on SAML Identity Provider in ISE but SAML response doesn't contain signing certificate. Can not determine certificate for signature validation"
    },
    "24847": {
        "code": 24847,
        "severity": "DEBUG",
        "text": "Certificate is invalid",
        "description": "Certificate is invalid"
    },
    "24848": {
        "code": 24848,
        "severity": "DEBUG",
        "text": "Failed to get signing certificate from IdP configuration",
        "description": "Unexpected problem with Identity Provider configuration in ISE, Failed to get signing certificate"
    },
    "24849": {
        "code": 24849,
        "severity": "DEBUG",
        "text": "Connecting to external ODBC database",
        "description": "ISE is going to establish a new connection to external ODBC database"
    },
    "24850": {
        "code": 24850,
        "severity": "DEBUG",
        "text": "Successfully connected to external ODBC database",
        "description": "ISE successfully established a new connection to external ODBC database"
    },
    "24851": {
        "code": 24851,
        "severity": "DEBUG",
        "text": "Connection to external ODBC database failed",
        "description": "ISE failed to establish a new connection to external ODBC database"
    },
    "24852": {
        "code": 24852,
        "severity": "DEBUG",
        "text": "Perform plain text password authentication in external ODBC database",
        "description": "ISE is starting plain text password authentication against the external ODBC database"
    },
    "24853": {
        "code": 24853,
        "severity": "DEBUG",
        "text": "Plain text password authentication in external ODBC database succeeded",
        "description": "Plain text password authentication in external ODBC database succeeded"
    },
    "24854": {
        "code": 24854,
        "severity": "DEBUG",
        "text": "Plain text password authentication in external ODBC database failed",
        "description": "Plain text password authentication in external ODBC database failed"
    },
    "24855": {
        "code": 24855,
        "severity": "DEBUG",
        "text": "Expect external ODBC database stored procedure to return results in a recordset",
        "description": "Expect external ODBC database stored procedure to return results in a recordset"
    },
    "24856": {
        "code": 24856,
        "severity": "DEBUG",
        "text": "Expect external ODBC database stored procedure to return results in output parameters",
        "description": "Expect external ODBC database stored procedure to return results in output parameters"
    },
    "24857": {
        "code": 24857,
        "severity": "DEBUG",
        "text": "Failed processing external ODBC database stored procedure results in a returned recordset",
        "description": "Failed processing external ODBC database stored procedure results in a returned recordset"
    },
    "24858": {
        "code": 24858,
        "severity": "DEBUG",
        "text": "Failed processing external ODBC database stored procedure results in a returned output parameters",
        "description": "Failed processing external ODBC database stored procedure results in a returned output parameters"
    },
    "24859": {
        "code": 24859,
        "severity": "DEBUG",
        "text": "Failed calling external ODBC database stored procedure",
        "description": "ISE failed to call external ODBC database stored procedure configured for specific credential check type"
    },
    "24860": {
        "code": 24860,
        "severity": "DEBUG",
        "text": "ODBC database indicated plain text password authentication failure",
        "description": "ODBC database indicated plain text password authentication failure"
    },
    "24861": {
        "code": 24861,
        "severity": "DEBUG",
        "text": "Perform fetch of plain text password from external ODBC database",
        "description": "ISE is starting fetching plain text password from the external ODBC database"
    },
    "24862": {
        "code": 24862,
        "severity": "DEBUG",
        "text": "Fetch plain text password from external ODBC database succeeded",
        "description": "Fetch plain text password from external ODBC database succeeded"
    },
    "24863": {
        "code": 24863,
        "severity": "DEBUG",
        "text": "Fetch plain text password from external ODBC database failed",
        "description": "Fetch plain text password from external ODBC database failed"
    },
    "24864": {
        "code": 24864,
        "severity": "DEBUG",
        "text": "ODBC database indicated fetching plain text password failure",
        "description": "ODBC database indicated fetching plain text password failure"
    },
    "24865": {
        "code": 24865,
        "severity": "DEBUG",
        "text": "Perform lookup of the user external ODBC database",
        "description": "ISE is starting lookup of the user the external ODBC database"
    },
    "24866": {
        "code": 24866,
        "severity": "DEBUG",
        "text": "Lookup of the user in external ODBC database succeeded",
        "description": "Lookup of the user in external ODBC database succeede"
    },
    "24867": {
        "code": 24867,
        "severity": "DEBUG",
        "text": "Lookup of the user in external ODBC database failed",
        "description": "Lookup of the user in external ODBC database failed"
    },
    "24868": {
        "code": 24868,
        "severity": "DEBUG",
        "text": "ODBC database indicated user lookup failure",
        "description": "ODBC database indicated user lookup failure"
    },
    "24869": {
        "code": 24869,
        "severity": "DEBUG",
        "text": "Perform fetching of the user groups in external ODBC database",
        "description": "ISE is starting fetching of the user groups in external ODBC database"
    },
    "24870": {
        "code": 24870,
        "severity": "DEBUG",
        "text": "Fetching of the user groups in external ODBC database succeeded",
        "description": "Fetching of the user groups in external ODBC database succeeded"
    },
    "24871": {
        "code": 24871,
        "severity": "DEBUG",
        "text": "Fetching of the user groups in external ODBC database failed",
        "description": "Fetching of the user groups in external ODBC database failed"
    },
    "24872": {
        "code": 24872,
        "severity": "DEBUG",
        "text": "Perform fetching of the user attributes in external ODBC database",
        "description": "ISE is starting fetching of the user attributes in external ODBC database"
    },
    "24873": {
        "code": 24873,
        "severity": "DEBUG",
        "text": "Fetching of the user attributes in external ODBC database succeeded",
        "description": "Fetching of the user attributes in external ODBC database succeeded"
    },
    "24874": {
        "code": 24874,
        "severity": "DEBUG",
        "text": "Fetching of the user attributes in external ODBC database failed",
        "description": "Fetching of the user attributes in external ODBC database failed"
    },
    "24875": {
        "code": 24875,
        "severity": "DEBUG",
        "text": "Faied to process results of fetching of the user attributes from external ODBC database",
        "description": "Faied to process results of fetching of the user attributes from external ODBC database"
    },
    "24876": {
        "code": 24876,
        "severity": "DEBUG",
        "text": "Faied to process results of fetching of the user groups from external ODBC database",
        "description": "Faied to process results of fetching of the user groups from external ODBC database"
    },
    "24877": {
        "code": 24877,
        "severity": "INFO",
        "text": "Subject formats persistent or transient are not supported as Identity Attribute",
        "description": "Subject format in assertions is persistent or transient. These formats are not supported as Identity Attribute"
    },
    "24878": {
        "code": 24878,
        "severity": "DEBUG",
        "text": "Retry failed ODBC operation",
        "description": "Previous ODBC operation failed and retry is possible. Pefrom the next retry"
    },
    "24879": {
        "code": 24879,
        "severity": "INFO",
        "text": "Identity provider metadata is not set",
        "description": "Identity provider metadata is not loaded"
    },
    "24880": {
        "code": 24880,
        "severity": "WARN",
        "text": "ODBC operation failed due to timeout elapsed",
        "description": "ODBC operation failed due to timeout elapsed"
    },
    "24890": {
        "code": 24890,
        "severity": "WARN",
        "text": "Social Login operation failed",
        "description": "Social Login operation failed. Check the message details for more information"
    },
    "25000": {
        "code": 25000,
        "severity": "INFO",
        "text": "ISE server password update succeeded",
        "description": "ISE server password update succeeded"
    },
    "25001": {
        "code": 25001,
        "severity": "ERROR",
        "text": "AD: ISE account password update failed.",
        "description": "ISE server has failed to update its AD machine account password."
    },
    "25002": {
        "code": 25002,
        "severity": "INFO",
        "text": "ISE server TGT refresh succeeded",
        "description": "ISE server TGT refresh succeeded"
    },
    "25003": {
        "code": 25003,
        "severity": "ERROR",
        "text": "AD: Machine TGT refresh failed.",
        "description": "ISE server TGT (Ticket Granting Ticket) refresh has failed; it is used for AD connectivity and services."
    },
    "25004": {
        "code": 25004,
        "severity": "INFO",
        "text": "AD Connector started",
        "description": "AD Connector started"
    },
    "25005": {
        "code": 25005,
        "severity": "INFO",
        "text": "AD Connector stopped",
        "description": "AD Connector stopped"
    },
    "25006": {
        "code": 25006,
        "severity": "WARN",
        "text": "AD Connector had to be restarted.",
        "description": "AD Connector had to be automatically restarted as it stopped unexpectedly."
    },
    "25007": {
        "code": 25007,
        "severity": "INFO",
        "text": "Join point connector started",
        "description": "Join point connector started"
    },
    "25008": {
        "code": 25008,
        "severity": "INFO",
        "text": "Join point connector stopped",
        "description": "Join point connector stopped"
    },
    "25009": {
        "code": 25009,
        "severity": "INFO",
        "text": "Trusted domains discovery succeeded",
        "description": "Trusted domains discovery succeeded"
    },
    "25010": {
        "code": 25010,
        "severity": "ERROR",
        "text": "Trusted domains discovery failed",
        "description": "Trusted domains discovery failed"
    },
    "25011": {
        "code": 25011,
        "severity": "INFO",
        "text": "Domain join succeeded",
        "description": "Domain join succeeded"
    },
    "25012": {
        "code": 25012,
        "severity": "WARN",
        "text": "Domain join failed",
        "description": "Domain join failed"
    },
    "25013": {
        "code": 25013,
        "severity": "INFO",
        "text": "Domain leave succeeded",
        "description": "Domain leave succeeded"
    },
    "25014": {
        "code": 25014,
        "severity": "WARN",
        "text": "Domain leave failed",
        "description": "Domain leave failed"
    },
    "25015": {
        "code": 25015,
        "severity": "INFO",
        "text": "DNS SRV query succeeded",
        "description": "DNS SRV query succeeded"
    },
    "25016": {
        "code": 25016,
        "severity": "ERROR",
        "text": "DNS SRV query failed",
        "description": "DNS SRV query failed"
    },
    "25017": {
        "code": 25017,
        "severity": "INFO",
        "text": "DC discovery succeeded",
        "description": "DC discovery succeeded"
    },
    "25018": {
        "code": 25018,
        "severity": "ERROR",
        "text": "DC discovery failed",
        "description": "DC discovery failed"
    },
    "25019": {
        "code": 25019,
        "severity": "INFO",
        "text": "KDC discovery succeeded",
        "description": "KDC discovery succeeded"
    },
    "25020": {
        "code": 25020,
        "severity": "ERROR",
        "text": "KDC discovery failed",
        "description": "KDC discovery failed"
    },
    "25021": {
        "code": 25021,
        "severity": "INFO",
        "text": "GC discovery succeeded",
        "description": "GC discovery succeeded"
    },
    "25022": {
        "code": 25022,
        "severity": "ERROR",
        "text": "GC discovery failed",
        "description": "GC discovery failed"
    },
    "25023": {
        "code": 25023,
        "severity": "INFO",
        "text": "LDAP connect to domain controller succeeded",
        "description": "LDAP connect to domain controller succeeded"
    },
    "25024": {
        "code": 25024,
        "severity": "ERROR",
        "text": "LDAP connect to domain controller failed",
        "description": "LDAP connect to domain controller failed"
    },
    "25025": {
        "code": 25025,
        "severity": "INFO",
        "text": "LDAP connect to global catalog succeeded",
        "description": "LDAP connect to domain controller succeeded"
    },
    "25026": {
        "code": 25026,
        "severity": "ERROR",
        "text": "LDAP connect to global catalog failed",
        "description": "LDAP connect to domain controller failed"
    },
    "25027": {
        "code": 25027,
        "severity": "INFO",
        "text": "RPC connect to domain controller succeeded",
        "description": "RPC connect to domain controller succeeded"
    },
    "25028": {
        "code": 25028,
        "severity": "ERROR",
        "text": "RPC connect to domain controller failed",
        "description": "RPC connect to domain controller failed"
    },
    "25029": {
        "code": 25029,
        "severity": "INFO",
        "text": "KDC connect to domain controller succeeded",
        "description": "KDC connect to domain controller succeeded"
    },
    "25030": {
        "code": 25030,
        "severity": "ERROR",
        "text": "KDC connect to domain controller failed",
        "description": "KDC connect to domain controller failed"
    },
    "25031": {
        "code": 25031,
        "severity": "ERROR",
        "text": "AD Provider failed to start",
        "description": "AD Provider failed to start"
    },
    "25032": {
        "code": 25032,
        "severity": "INFO",
        "text": "Trusted domain discovered",
        "description": "Trusted domain discovered"
    },
    "25033": {
        "code": 25033,
        "severity": "INFO",
        "text": "DNS A/AAAA query succeeded",
        "description": "DNS A/AAAA query succeeded"
    },
    "25034": {
        "code": 25034,
        "severity": "ERROR",
        "text": "DNS A/AAAA query failed",
        "description": "DNS A/AAAA query failed"
    },
    "25035": {
        "code": 25035,
        "severity": "INFO",
        "text": "Writeable DC discovery succeeded",
        "description": "Writeable DC discovery succeeded"
    },
    "25036": {
        "code": 25036,
        "severity": "ERROR",
        "text": "Writeable DC discovery failed",
        "description": "Writeable DC discovery failed"
    },
    "25037": {
        "code": 25037,
        "severity": "INFO",
        "text": "DC record cached",
        "description": "DC record cached"
    },
    "25038": {
        "code": 25038,
        "severity": "INFO",
        "text": "GC record cached",
        "description": "GC record cached"
    },
    "25039": {
        "code": 25039,
        "severity": "ERROR",
        "text": "LDAP SASL bind failed",
        "description": "LDAP SASL bind failed"
    },
    "25040": {
        "code": 25040,
        "severity": "ERROR",
        "text": "RPC secure channel establishment failed",
        "description": "RPC secure channel establishment failed"
    },
    "25041": {
        "code": 25041,
        "severity": "INFO",
        "text": "ISE Server site discovered",
        "description": "ISE Server site discovered"
    },
    "25042": {
        "code": 25042,
        "severity": "WARN",
        "text": "ISE Server is not assigned to any AD site",
        "description": "ISE Server is not assigned to any AD site"
    },
    "25043": {
        "code": 25043,
        "severity": "WARN",
        "text": "No domain controller found in ISE Server site",
        "description": "No domain controller found in ISE Server site"
    },
    "25044": {
        "code": 25044,
        "severity": "ERROR",
        "text": "Communication to domain failed",
        "description": "Communication to domain failed"
    },
    "25045": {
        "code": 25045,
        "severity": "ERROR",
        "text": "Configured nameserver is down",
        "description": "The configured nameserver is down. As a result AD operations will fail."
    },
    "25046": {
        "code": 25046,
        "severity": "ERROR",
        "text": "Joined domain is unavailable",
        "description": "Joined domain is unavailable, and cannot be used for authentication, authorization and group and attribute retrieval"
    },
    "25047": {
        "code": 25047,
        "severity": "ERROR",
        "text": "Authentication domain is unavailable",
        "description": "Authentication domain is unavailable, and cannot be used for authentication, authorization and group and attribute retrieval"
    },
    "25048": {
        "code": 25048,
        "severity": "ERROR",
        "text": "Active-Directory forest is unavailable",
        "description": "Active Directory forest GC (Global Catalog) is unavailable, and cannot be used for authentication, authorization and group and attribute retrieval"
    },
    "25049": {
        "code": 25049,
        "severity": "WARN",
        "text": "Machine account was not found",
        "description": "Machine account was not found during leave opeartion with credentials."
    },
    "25050": {
        "code": 25050,
        "severity": "INFO",
        "text": "Machine account was deleted from AD",
        "description": "Machine account was deleted from AD"
    },
    "25051": {
        "code": 25051,
        "severity": "ERROR",
        "text": "Machine account deletion was failed",
        "description": "User credentials permissions is insufficient to delete the machine account"
    },
    "25052": {
        "code": 25052,
        "severity": "INFO",
        "text": "Periodic trusts discovery started",
        "description": "Periodic trusts discovery started"
    },
    "25053": {
        "code": 25053,
        "severity": "INFO",
        "text": "Detected offline forest",
        "description": "Detected offline forest"
    },
    "25054": {
        "code": 25054,
        "severity": "INFO",
        "text": "Trust removed by discovery",
        "description": "Trust removed bt discovery"
    },
    "25055": {
        "code": 25055,
        "severity": "INFO",
        "text": "DC added to black list",
        "description": "Domain Controller added to black list"
    },
    "25056": {
        "code": 25056,
        "severity": "INFO",
        "text": "DC removed from black list",
        "description": "Domain Controller removed from black list"
    },
    "25057": {
        "code": 25057,
        "severity": "ERROR",
        "text": "The ISE machine account does not have the required privileges to fetch groups.",
        "description": "The ISE machine account does not have the required privileges to fetch groups."
    },
    "25058": {
        "code": 25058,
        "severity": "ERROR",
        "text": "ISE is not joined to an Active Directory Domain Controller",
        "description": "ISE is not joined to an Active Directory Domain Controller"
    },
    "30000": {
        "code": 30000,
        "severity": "FATAL",
        "text": "Unknown fatal management error",
        "description": "MGMT fatal unknown error.To recover try to re-run ISE"
    },
    "31000": {
        "code": 31000,
        "severity": "ERROR",
        "text": "Could not initialize notification dispatcher",
        "description": "Could not initialize notification dispatcher"
    },
    "31001": {
        "code": 31001,
        "severity": "ERROR",
        "text": "Could not send configuration notification message",
        "description": "Could not send configuration notification message"
    },
    "31100": {
        "code": 31100,
        "severity": "DEBUG",
        "text": "Applying configuration changes initiated",
        "description": "Applying configuration changes in Runtime initiated"
    },
    "31101": {
        "code": 31101,
        "severity": "DEBUG",
        "text": "Applying configuration changes succeeded",
        "description": "Applying configuration changes in Runtime succeeded. A new configuration version was activated"
    },
    "31102": {
        "code": 31102,
        "severity": "FATAL",
        "text": "Applying configuration changes failed",
        "description": "Applying configuration changes failed. Runtime process will restart."
    },
    "31103": {
        "code": 31103,
        "severity": "DEBUG",
        "text": "Start up configuration load succeeded",
        "description": "Start up configuration load succeeded"
    },
    "31104": {
        "code": 31104,
        "severity": "FATAL",
        "text": "Start up configuration load failed",
        "description": "Start up configuration load failed. Runtime process will go down"
    },
    "31105": {
        "code": 31105,
        "severity": "WARN",
        "text": "Transaction is ignored",
        "description": "A transaction with wrong ID is ignored. Runtime is waiting for transaction with another ID."
    },
    "31106": {
        "code": 31106,
        "severity": "FATAL",
        "text": "Configuration management could not translate configuration change. Runtime configuration changes will not take effect",
        "description": "Configuration management could not translate configuration change. Runtime configuration changes will not take effect"
    },
    "31107": {
        "code": 31107,
        "severity": "INFO",
        "text": "Cold configuration restart complete",
        "description": "Cold configuration restart complete"
    },
    "31108": {
        "code": 31108,
        "severity": "FATAL",
        "text": "Cold configuration restart failed",
        "description": "Cold configuration restart failed. Runtime process will restart."
    },
    "31109": {
        "code": 31109,
        "severity": "INFO",
        "text": "Warm configuration restart complete",
        "description": "Warm configuration restart complete"
    },
    "31110": {
        "code": 31110,
        "severity": "WARN",
        "text": "Warm configuration restart failed",
        "description": "Warm configuration restart failed. Falling back to the cold configuration restart"
    },
    "31111": {
        "code": 31111,
        "severity": "WARN",
        "text": "The Runtime notifications are out of sync",
        "description": "The Runtime notifications are out of sync. Issuing a sync message to Management."
    },
    "31200": {
        "code": 31200,
        "severity": "ERROR",
        "text": "Encountered invalid/Null Log Record encountered",
        "description": "Invalid or null log record"
    },
    "31201": {
        "code": 31201,
        "severity": "ERROR",
        "text": "Encountered invalid or null system message",
        "description": "Could not create corresponding system message from opcode"
    },
    "31202": {
        "code": 31202,
        "severity": "ERROR",
        "text": "Encountered invalid or null user context",
        "description": "Encountered invalid or null user context"
    },
    "31203": {
        "code": 31203,
        "severity": "ERROR",
        "text": "Encountered error while recording the audit record for successful login",
        "description": "Encountered error while recording the audit record for successful login"
    },
    "31204": {
        "code": 31204,
        "severity": "ERROR",
        "text": "Encountered error while recording the audit record for failed login",
        "description": "Encountered error while recording the audit record for failed login"
    },
    "31205": {
        "code": 31205,
        "severity": "ERROR",
        "text": "Encountered error while recording the audit record for logout",
        "description": "Encountered error while recording the audit record for logout"
    },
    "31206": {
        "code": 31206,
        "severity": "ERROR",
        "text": "Encountered error while recording the audit record for failover mode",
        "description": "Encountered error while recording the audit record for failover mode"
    },
    "31207": {
        "code": 31207,
        "severity": "ERROR",
        "text": "Encountered error while recording the audit record for session timeout",
        "description": "Encountered error while recording the audit record for session timeout"
    },
    "31500": {
        "code": 31500,
        "severity": "INFO",
        "text": "Started Management",
        "description": "Started Management"
    },
    "31501": {
        "code": 31501,
        "severity": "INFO",
        "text": "Stopped Management",
        "description": "Stopped Management"
    },
    "31502": {
        "code": 31502,
        "severity": "INFO",
        "text": "Started Runtime",
        "description": "Started Runtime"
    },
    "31503": {
        "code": 31503,
        "severity": "INFO",
        "text": "Stopped Runtime",
        "description": "Stopped Runtime"
    },
    "31504": {
        "code": 31504,
        "severity": "FATAL",
        "text": "The cryptographic module could not initialize",
        "description": "The cryptographic module could not initialize"
    },
    "32000": {
        "code": 32000,
        "severity": "INFO",
        "text": "Started logging component",
        "description": "Started logging component"
    },
    "32001": {
        "code": 32001,
        "severity": "INFO",
        "text": "Shut down logging component",
        "description": "Shut down logging component"
    },
    "32002": {
        "code": 32002,
        "severity": "DEBUG",
        "text": "Using startup default configuration",
        "description": "Using startup default configuration"
    },
    "32005": {
        "code": 32005,
        "severity": "WARN",
        "text": "Could not log message to logger",
        "description": "Could not log message to logger"
    },
    "32006": {
        "code": 32006,
        "severity": "WARN",
        "text": "Could not log to critical logger",
        "description": "Could not log to critical logger"
    },
    "32008": {
        "code": 32008,
        "severity": "DEBUG",
        "text": "Logging component now ready to receive configuration changes",
        "description": "Logging successfully subscribed to receive logging configuration changes"
    },
    "32012": {
        "code": 32012,
        "severity": "ERROR",
        "text": "Could not write to local storage file",
        "description": "Could not write to local storage CSV file"
    },
    "32013": {
        "code": 32013,
        "severity": "ERROR",
        "text": "Could not create a local storage file",
        "description": "Could not create a local storage CSV file"
    },
    "32014": {
        "code": 32014,
        "severity": "ERROR",
        "text": "Could not delete a local storage CSV file",
        "description": "Could not delete a local storage CSV file"
    },
    "32015": {
        "code": 32015,
        "severity": "DEBUG",
        "text": "Local storage file deleted",
        "description": "Local storage CSV file deleted"
    },
    "32016": {
        "code": 32016,
        "severity": "FATAL",
        "text": "System reached low disk space limit",
        "description": "System reached low disk space limit. Change local storage cleanup settings to free space"
    },
    "32017": {
        "code": 32017,
        "severity": "FATAL",
        "text": "Could not to open a UDP socket",
        "description": "Could not open a UDP socket"
    },
    "32018": {
        "code": 32018,
        "severity": "WARN",
        "text": "Could not send data on socket",
        "description": "Could not send data on socket"
    },
    "32025": {
        "code": 32025,
        "severity": "DEBUG",
        "text": "Rolled over local storage file",
        "description": "Rolled over local storage CSV file"
    },
    "32026": {
        "code": 32026,
        "severity": "ERROR",
        "text": "Could not roll over local storage file",
        "description": "Could not roll over local storage CSV file"
    },
    "32500": {
        "code": 32500,
        "severity": "ERROR",
        "text": "General database error",
        "description": "General database error"
    },
    "32600": {
        "code": 32600,
        "severity": "INFO",
        "text": "Connected message bus",
        "description": "Connected message bus"
    },
    "32601": {
        "code": 32601,
        "severity": "ERROR",
        "text": "Could not start message bus",
        "description": "Could not start message bus"
    },
    "32602": {
        "code": 32602,
        "severity": "INFO",
        "text": "Retrying message bus connection",
        "description": "Retrying message bus connection"
    },
    "32603": {
        "code": 32603,
        "severity": "ERROR",
        "text": "Dropped connection. Reconnecting",
        "description": "Dropped connection. Reconnecting"
    },
    "32604": {
        "code": 32604,
        "severity": "ERROR",
        "text": "Unknown bus error",
        "description": "Unknown bus error"
    },
    "32605": {
        "code": 32605,
        "severity": "ERROR",
        "text": "Unknown attribute",
        "description": "Unknown attribute"
    },
    "32606": {
        "code": 32606,
        "severity": "ERROR",
        "text": "Dropped unknown message type",
        "description": "Dropped unknown message type"
    },
    "32607": {
        "code": 32607,
        "severity": "INFO",
        "text": "Missing attribute",
        "description": "Missing attribute"
    },
    "32700": {
        "code": 32700,
        "severity": "WARN",
        "text": "Failover mode caused by an internal error. Configuration changes may not take effect",
        "description": "Failover mode caused by an internal error. Configuration changes may not take effect"
    },
    "33101": {
        "code": 33101,
        "severity": "INFO",
        "text": "Created new ISE configuration session",
        "description": "acs-config CLI was invoked"
    },
    "33102": {
        "code": 33102,
        "severity": "INFO",
        "text": "Successful user login to ISE configuration mode",
        "description": "ISE administrator logged in to ISE configuration mode"
    },
    "33103": {
        "code": 33103,
        "severity": "INFO",
        "text": "User login to ISE configuration mode failed",
        "description": "Login to ISE configuration mode failed"
    },
    "33104": {
        "code": 33104,
        "severity": "INFO",
        "text": "Closed ISE configuration session",
        "description": "Closed ISE configuration session. Possibly because of request timeout"
    },
    "33105": {
        "code": 33105,
        "severity": "INFO",
        "text": "Set debug log level",
        "description": "Set debug log level through CLI for a specific component. (See attribute.)"
    },
    "33106": {
        "code": 33106,
        "severity": "INFO",
        "text": "Set default debug log level",
        "description": "Reset debug log level to the default level ('warn') for a single component or a group of components"
    },
    "33107": {
        "code": 33107,
        "severity": "DEBUG",
        "text": "Show debugging log status",
        "description": "Invoked show debugging log CLI. (See attribute component)"
    },
    "33108": {
        "code": 33108,
        "severity": "INFO",
        "text": "Reset admin password to its default value",
        "description": "The CLI reset the ACSAdmin user to its default value"
    },
    "33201": {
        "code": 33201,
        "severity": "ERROR",
        "text": "AD Operation failure",
        "description": "ISE failed during any of the following: While initiating an event to join Active Directory domain. While disconnecting from Active Directory domain. While getting status from Active Directory domain."
    },
    "33202": {
        "code": 33202,
        "severity": "INFO",
        "text": "AD Operation Success",
        "description": "ISE initiated an event for the following reasons: To join the AD domain. To disconnect from the AD domain. To get the status from the AD domain."
    },
    "33203": {
        "code": 33203,
        "severity": "INFO",
        "text": "Hit Count reset",
        "description": "Administrator requested to reset hit count counters for all configured policies"
    },
    "33204": {
        "code": 33204,
        "severity": "INFO",
        "text": "Hit Count recollect",
        "description": "Periodic request initiated to collect and accumulate the hit count counter values for all configured policies"
    },
    "33205": {
        "code": 33205,
        "severity": "ERROR",
        "text": "General PI error",
        "description": "Unexpected error found by the ISE web service provisioning component."
    },
    "33206": {
        "code": 33206,
        "severity": "INFO",
        "text": "AD Operation information",
        "description": "ISE information during any of the following: While initiating an event to join Active Directory domain. While disconnecting from Active Directory domain. While getting status from Active Directory domain."
    },
    "33207": {
        "code": 33207,
        "severity": "WARN",
        "text": "AD Operation warning",
        "description": "ISE encountered warnings during getting status from Active Directory domain."
    },
    "33208": {
        "code": 33208,
        "severity": "DEBUG",
        "text": "Result for testing connection against AD",
        "description": "ISE reports on test connection against active directory server."
    },
    "33209": {
        "code": 33209,
        "severity": "DEBUG",
        "text": "Result for testing connection against LDAP",
        "description": "ISE reports on test connection against LDAP server."
    },
    "33210": {
        "code": 33210,
        "severity": "DEBUG",
        "text": "LDAP traffic info",
        "description": "LDAP traffic info against LDAP server."
    },
    "33211": {
        "code": 33211,
        "severity": "INFO",
        "text": "ISE is using a self signed certificate for Management Interface authentication",
        "description": "ISE is using a self signed certificate for Management Interface authentication"
    },
    "33212": {
        "code": 33212,
        "severity": "WARN",
        "text": "Due to system failure, ISE could not load the associated certificate for the Management Interface",
        "description": "Due to system failure, ISE could not load the associated certificate for the Management Interface. The default self signed certificate is used."
    },
    "33300": {
        "code": 33300,
        "severity": "ERROR",
        "text": "General GUI error",
        "description": "Unexpected error found by ISE graphical user interface."
    },
    "33400": {
        "code": 33400,
        "severity": "INFO",
        "text": "Certificate Revocation List was added",
        "description": "Certificate Revocation List was downloaded and will be used by ISE"
    },
    "33450": {
        "code": 33450,
        "severity": "INFO",
        "text": "Received a request to clear OCSP cache",
        "description": "Received a request to clear OCSP cache"
    },
    "33451": {
        "code": 33451,
        "severity": "INFO",
        "text": "Successfully clear OCSP cache",
        "description": "Successfully clear OCSP cache"
    },
    "33452": {
        "code": 33452,
        "severity": "ERROR",
        "text": "Failed to clear OCSP cache",
        "description": "Failed to clear OCSP cache"
    },
    "33500": {
        "code": 33500,
        "severity": "ERROR",
        "text": "Could not initialize EAP-TLS",
        "description": "The EAP-TLS module could not initialize and will be disabled."
    },
    "33501": {
        "code": 33501,
        "severity": "ERROR",
        "text": "Could not initialize EAP-FAST",
        "description": "The EAP-FAST module could not initialize and will be disabled"
    },
    "33502": {
        "code": 33502,
        "severity": "ERROR",
        "text": "Could not initialize PEAP",
        "description": "The PEAP module could not initialize and will be disabled"
    },
    "33503": {
        "code": 33503,
        "severity": "WARN",
        "text": "A blank CTL was configured for EAP-TLS",
        "description": "The EAP-TLS module has initialized with a blank CTL"
    },
    "33504": {
        "code": 33504,
        "severity": "WARN",
        "text": "CTL initialization failed",
        "description": "The EAP-TLS or EAP-FAST module could not initialize part of the CTL configuration."
    },
    "33505": {
        "code": 33505,
        "severity": "WARN",
        "text": "Could not initialize EAP-TLS server-certificate",
        "description": "The EAP-TLS module could not initialize the server-certificate because of a configuration problem."
    },
    "33506": {
        "code": 33506,
        "severity": "WARN",
        "text": "Could not initialize EAP-FAST server-certificate",
        "description": "The EAP-FAST module could not initialize the server-certificate because of a configuration problem. This problem affects only the authenticated provisioning mode of EAP-FAST."
    },
    "33507": {
        "code": 33507,
        "severity": "WARN",
        "text": "Could not initialize PEAP server-certificate",
        "description": "The EAP-TLS module could not initialize the server-certificate because of a configuration problem."
    },
    "33508": {
        "code": 33508,
        "severity": "WARN",
        "text": "Could not initialize the complete EAP-TLS server-certificate chain",
        "description": "The EAP-TLS module could not initialize the server-certificate complete chain because of a configuration problem."
    },
    "33509": {
        "code": 33509,
        "severity": "WARN",
        "text": "PEAP failed to completely initialize the server-certificate chain",
        "description": "The PEAP module could not initialize the server-certificate complete chain because of a configuration problem."
    },
    "33510": {
        "code": 33510,
        "severity": "WARN",
        "text": "Could not initialize the complete EAP-FAST server-certificate chain",
        "description": "The EAP-FAST module could not initialize the server-certificate complete chain because of a configuration problem."
    },
    "34000": {
        "code": 34000,
        "severity": "INFO",
        "text": "Appending transaction",
        "description": "The transaction was applied to the configuration and appended to the transaction log"
    },
    "34001": {
        "code": 34001,
        "severity": "INFO",
        "text": "Dispatching transaction",
        "description": "The transaction was sent to Secondary nodes for replication"
    },
    "34002": {
        "code": 34002,
        "severity": "INFO",
        "text": "Received transaction",
        "description": "The transaction was received from the Primary node"
    },
    "34003": {
        "code": 34003,
        "severity": "INFO",
        "text": "Applied transaction",
        "description": "The replicated transaction was applied to the local configuration"
    },
    "34005": {
        "code": 34005,
        "severity": "FATAL",
        "text": "Policy cache sync failed",
        "description": "Failed to synchronize policy cache"
    },
    "34050": {
        "code": 34050,
        "severity": "INFO",
        "text": "RT Control port is up",
        "description": "RT is listening on RT Control port."
    },
    "34051": {
        "code": 34051,
        "severity": "ERROR",
        "text": "RT Control port is blocked",
        "description": "RT failed to open the RT Control port. RT Control services are not available. RT will try to open the port again."
    },
    "34110": {
        "code": 34110,
        "severity": "ERROR",
        "text": "Error processing the REST request",
        "description": "Server has encountered error while processing the REST request"
    },
    "34111": {
        "code": 34111,
        "severity": "INFO",
        "text": "Successfully processed the REST request",
        "description": "REST Request is successfully processed"
    },
    "34112": {
        "code": 34112,
        "severity": "ERROR",
        "text": "Invalid REST request data",
        "description": "REST Request data has invalid syntax"
    },
    "34113": {
        "code": 34113,
        "severity": "WARN",
        "text": "Specified resource not found",
        "description": "Specified resource is not found"
    },
    "34114": {
        "code": 34114,
        "severity": "WARN",
        "text": "Specified resource already exists",
        "description": "Specified resource already exists"
    },
    "34115": {
        "code": 34115,
        "severity": "WARN",
        "text": "Specified associated resource does not exist",
        "description": "Specified associated resource does not exist"
    },
    "34116": {
        "code": 34116,
        "severity": "WARN",
        "text": "Specified policy is not found",
        "description": "Specified policy is not found"
    },
    "34117": {
        "code": 34117,
        "severity": "ERROR",
        "text": "Error connecting to remote feed URL",
        "description": "This message is generated when remote feed site is down"
    },
    "34118": {
        "code": 34118,
        "severity": "ERROR",
        "text": "Error processing package from Cisco download feed site",
        "description": "Error processing package from Cisco download feed site"
    },
    "34119": {
        "code": 34119,
        "severity": "ERROR",
        "text": "Profile received an error response from NAC Manager for notification event",
        "description": "Profiler sends a notification event to NAC Manager, but the notification fails because NAC Manager cannot process it. Check NAC Manager logs for details"
    },
    "34120": {
        "code": 34120,
        "severity": "ERROR",
        "text": "Profiler failed to get the connection to NAC Manager",
        "description": "Profiler sends a notification event to NAC Manager, but the notification fails because could not connect to NAC Manager"
    },
    "34123": {
        "code": 34123,
        "severity": "FATAL",
        "text": "The virtual memory usage is high indicating the process may be running out of memory resources",
        "description": "The virtual memory is high indicating the process may be running out of memory resources"
    },
    "34124": {
        "code": 34124,
        "severity": "FATAL",
        "text": "Due to low memory resources the amount of concurrent EAP sessions will be limited",
        "description": "Due to low memory resources the amount of concurrent EAP sessions will be limited"
    },
    "34125": {
        "code": 34125,
        "severity": "FATAL",
        "text": "Due to low memory resources a CRL could not be updated.",
        "description": "Due to low memory resources a CRL could not be updated."
    },
    "34126": {
        "code": 34126,
        "severity": "WARN",
        "text": "Remote syslog target is unavailable",
        "description": "Remote syslog target is unavailable"
    },
    "34127": {
        "code": 34127,
        "severity": "WARN",
        "text": "Remote syslog target connection resume",
        "description": "Remote syslog target connection resume"
    },
    "34128": {
        "code": 34128,
        "severity": "DEBUG",
        "text": "Remote syslog target buffer is cleared",
        "description": "Remote syslog target buffer is cleared due to configuration change"
    },
    "34129": {
        "code": 34129,
        "severity": "WARN",
        "text": "Could not initialize syslog client certificate",
        "description": "Could not initialize syslog client certificate because of configuration problem"
    },
    "34130": {
        "code": 34130,
        "severity": "WARN",
        "text": "CTL for syslog server certificate is empty",
        "description": "CTL for syslog server certificate is empty. No syslog server will be accepted"
    },
    "34131": {
        "code": 34131,
        "severity": "WARN",
        "text": "Could not initialize the complete syslog client certificate chain",
        "description": "Could not initialize the complete syslog client certificate chain because of a configuration problem"
    },
    "34132": {
        "code": 34132,
        "severity": "INFO",
        "text": "TLS handshake with syslog server succeeded",
        "description": "TLS handshake with syslog server succeeded"
    },
    "34133": {
        "code": 34133,
        "severity": "WARN",
        "text": "TLS handshake with syslog server failed",
        "description": "TLS handshake with syslog server failed"
    },
    "34134": {
        "code": 34134,
        "severity": "WARN",
        "text": "Could not initialize CTL for syslog server certificate verification",
        "description": "Could not initialize CTL for syslog server certificate verification"
    },
    "34135": {
        "code": 34135,
        "severity": "WARN",
        "text": "Syslog server is slow or down. Buffered syslog messages are being deleted.",
        "description": "Syslog sever is slow, down or unable to read syslog messages. Buffered syslog messages are being deleted. This may be due to server, network or load balancer issues."
    },
    "34137": {
        "code": 34137,
        "severity": "WARN",
        "text": "Secure syslog server rejected ISE syslog client certificate",
        "description": "Secure syslog server rejected ISE syslog client certificate"
    },
    "34138": {
        "code": 34138,
        "severity": "WARN",
        "text": "ISE failed secure syslog connection because of unsupported certificate in syslog server certificate chain",
        "description": "ISE failed secure syslog connection because of unsupported certificate in syslog server certificate chain"
    },
    "34139": {
        "code": 34139,
        "severity": "WARN",
        "text": "ISE failed secure syslog connection because it was unable to download CRL for the CA that signed syslog server certificate",
        "description": "ISE failed secure syslog connection because it was unable to download CRL for the CA that signed syslog server certificate"
    },
    "34140": {
        "code": 34140,
        "severity": "WARN",
        "text": "ISE failed secure syslog connection because of unknown certificate in syslog server certificate chain",
        "description": "ISE failed secure syslog connection because of unknown certificate in syslog server certificate chain"
    },
    "34141": {
        "code": 34141,
        "severity": "WARN",
        "text": "ISE failed secure syslog connection because of expired certificate in syslog server certificate chain",
        "description": "ISE failed secure syslog connection because of expired certificate in syslog server certificate chain"
    },
    "34142": {
        "code": 34142,
        "severity": "WARN",
        "text": "ISE failed secure syslog connection because of expired CRL for the CA that signed syslog server certificate",
        "description": "ISE failed secure syslog connection because of expired CRL for the CA that signed syslog server certificate"
    },
    "34143": {
        "code": 34143,
        "severity": "WARN",
        "text": "ISE failed secure syslog connection because of revoked certificate in syslog server certificate chain",
        "description": "ISE failed secure syslog connection because of revoked certificate in syslog server certificate chain"
    },
    "34144": {
        "code": 34144,
        "severity": "WARN",
        "text": "ISE failed secure syslog connection because of bad certificate in syslog server certificate chain",
        "description": "ISE failed secure syslog connection because of bad certificate in syslog server certificate chain"
    },
    "34145": {
        "code": 34145,
        "severity": "WARN",
        "text": "Secure syslog connection reconnect due to OCSP found revoked certificate",
        "description": "OCSP check result is that the certificate used for syslog connection is revoke"
    },
    "34146": {
        "code": 34146,
        "severity": "WARN",
        "text": "Secure syslog connection reconnect due to CRL found revoked certificate",
        "description": "CRL check result is that the certificate used for syslog connection is revoke"
    },
    "34147": {
        "code": 34147,
        "severity": "WARN",
        "text": "JGroups TLS Handshake Failed",
        "description": "JGroups TLS Handshake Failed"
    },
    "34148": {
        "code": 34148,
        "severity": "INFO",
        "text": "JGroups TLS Handshake Succeeded",
        "description": "JGroups TLS Handshake Succeeded"
    },
    "34149": {
        "code": 34149,
        "severity": "WARN",
        "text": "HTTPS TLS Handshake Failed",
        "description": "HTTPS TLS Handshake Failed"
    },
    "34150": {
        "code": 34150,
        "severity": "INFO",
        "text": "HTTPS TLS Handshake Succeeded",
        "description": "HTTPS TLS Handshake Succeeded"
    },
    "34151": {
        "code": 34151,
        "severity": "WARN",
        "text": "Certificate Validation Failed",
        "description": "Certificate Validation Failed"
    },
    "34152": {
        "code": 34152,
        "severity": "INFO",
        "text": "Certificate Validation Succeeded",
        "description": "Certificate Validation Succeeded"
    },
    "34153": {
        "code": 34153,
        "severity": "WARN",
        "text": "Secure LDAP ID Store Connecion Failed",
        "description": "Secure LDAP ID Store Connecion Failed"
    },
    "34154": {
        "code": 34154,
        "severity": "INFO",
        "text": "Secure LDAP ID Store Connecion Succeeded",
        "description": "Secure LDAP ID Store Connecion Succeeded"
    },
    "34155": {
        "code": 34155,
        "severity": "ERROR",
        "text": "Endpoint with the same Mac Address already exists",
        "description": "Endpoint with the same Mac Address already exists"
    },
    "34156": {
        "code": 34156,
        "severity": "INFO",
        "text": "CARS Network configuration has been reset",
        "description": "CARS Network configuration has been reset"
    },
    "34157": {
        "code": 34157,
        "severity": "ERROR",
        "text": "Could not initialize EAP-TTLS",
        "description": "The EAP-TTLS module could not initialize and will be disabled."
    },
    "34158": {
        "code": 34158,
        "severity": "WARN",
        "text": "Could not initialize EAP-TTLS server-certificate",
        "description": "The EAP-TTLS module could not initialize the server-certificate because of a configuration problem."
    },
    "34159": {
        "code": 34159,
        "severity": "INFO",
        "text": "LDAPS connection established successfully",
        "description": "LDAPS connection established successfully"
    },
    "34160": {
        "code": 34160,
        "severity": "INFO",
        "text": "LDAPS connection terminated successfully",
        "description": "LDAPS connection terminated successfully"
    },
    "34161": {
        "code": 34161,
        "severity": "WARN",
        "text": "LDAPS connection establishment failed with SSL error",
        "description": "LDAPS connection establishment failed with SSL error"
    },
    "34162": {
        "code": 34162,
        "severity": "WARN",
        "text": "LDAPS connection terminated with SSL error",
        "description": "LDAPS connection terminated with SSL error"
    },
    "34163": {
        "code": 34163,
        "severity": "WARN",
        "text": "LDAPS connection establishment failed with non-SSL error",
        "description": "LDAPS connection establishment failed with non-SSL error"
    },
    "34164": {
        "code": 34164,
        "severity": "WARN",
        "text": "LDAPS connection terminated with non-SSL error",
        "description": "LDAPS connection terminated with non-SSL error"
    },
    "35000": {
        "code": 35000,
        "severity": "WARN",
        "text": "Smart Licensing registration failed",
        "description": "Smart Licensing registration failed"
    },
    "35001": {
        "code": 35001,
        "severity": "WARN",
        "text": "Smart Licensing disabled",
        "description": "Smart Licensing disabled"
    },
    "35002": {
        "code": 35002,
        "severity": "INFO",
        "text": "Smart Licensing communication failure",
        "description": "Smart Licensing communication failure"
    },
    "35003": {
        "code": 35003,
        "severity": "INFO",
        "text": "Smart Licensing communication restored",
        "description": "Smart Licensing communication restored"
    },
    "35004": {
        "code": 35004,
        "severity": "INFO",
        "text": "Smart Licensing Id Certificate renew failure",
        "description": "Smart Licensing Id Certificate renew failure"
    },
    "35005": {
        "code": 35005,
        "severity": "INFO",
        "text": "Smart Licensing Id Certificate renew success",
        "description": "Smart Licensing Id Certificate renew success"
    },
    "35006": {
        "code": 35006,
        "severity": "WARN",
        "text": "Smart Licensing Agent is Out Of Compliance",
        "description": "Smart Licensing Agent is Out Of Compliance"
    },
    "35007": {
        "code": 35007,
        "severity": "WARN",
        "text": "Smart Licensing evaluation period expired",
        "description": "Smart Licensing evaluation period expired"
    },
    "35008": {
        "code": 35008,
        "severity": "WARN",
        "text": "Smart Licensing authorization expired",
        "description": "Smart Licensing authorization expired"
    },
    "35009": {
        "code": 35009,
        "severity": "WARN",
        "text": "Invalid Smart Licensing request issued",
        "description": "Invalid Smart Licensing request issued"
    },
    "35010": {
        "code": 35010,
        "severity": "WARN",
        "text": "License is set to expire soon",
        "description": "A License that is currently installed in the ISE Deployment is set to expire soon."
    },
    "35011": {
        "code": 35011,
        "severity": "ERROR",
        "text": "License expired",
        "description": "A License in the ISE Deployment has expired."
    },
    "35012": {
        "code": 35012,
        "severity": "WARN",
        "text": "Device count exceeded for base license",
        "description": "Device count exceeded for base license. Upgrade to large deployment required."
    },
    "35013": {
        "code": 35013,
        "severity": "ERROR",
        "text": "License deletion failed",
        "description": "License deletion failed"
    },
    "35014": {
        "code": 35014,
        "severity": "ERROR",
        "text": "License create failed",
        "description": "License create failed"
    },
    "35015": {
        "code": 35015,
        "severity": "ERROR",
        "text": "License update failed",
        "description": "License update failed"
    },
    "35016": {
        "code": 35016,
        "severity": "INFO",
        "text": "Smart Licensing registration success",
        "description": "Smart Licensing registration success"
    },
    "35017": {
        "code": 35017,
        "severity": "INFO",
        "text": "Smart Licensing authorization renewal success",
        "description": "Smart Licensing authorization renewal success"
    },
    "35018": {
        "code": 35018,
        "severity": "WARN",
        "text": "Smart Licensing authorization renewal failure",
        "description": "Smart Licensing authorization renewal failure"
    },
    "35019": {
        "code": 35019,
        "severity": "INFO",
        "text": "Smart Licensing de-registration success",
        "description": "Smart Licensing de-registration success"
    },
    "35020": {
        "code": 35020,
        "severity": "WARN",
        "text": "Smart Licensing de-registration failure",
        "description": "Smart Licensing de-registration failure"
    },
    "35021": {
        "code": 35021,
        "severity": "WARN",
        "text": "Smart Licensing id certificate expired",
        "description": "Smart Licensing id certificate expired"
    },
    "35022": {
        "code": 35022,
        "severity": "INFO",
        "text": "Smart Licensing HA Role changed",
        "description": "Smart Licensing HA Role changed"
    },
    "35023": {
        "code": 35023,
        "severity": "INFO",
        "text": "License expiring within 90 Days",
        "description": "License expiring within 90 Days"
    },
    "35024": {
        "code": 35024,
        "severity": "WARN",
        "text": "License expiring within 60 Days",
        "description": "License expiring within 60 Days"
    },
    "35025": {
        "code": 35025,
        "severity": "ERROR",
        "text": "License expiring within 30 Days",
        "description": "License expiring within 30 Days"
    },
    "35026": {
        "code": 35026,
        "severity": "ERROR",
        "text": "License Out of Compliance for 5 or more days",
        "description": "License Out of Compliance for 5 or more days"
    },
    "35027": {
        "code": 35027,
        "severity": "ERROR",
        "text": "License Out of Compliance for 15 or more days",
        "description": "License Out of Compliance for 15 or more days"
    },
    "35028": {
        "code": 35028,
        "severity": "ERROR",
        "text": "License Out of Compliance for 30 or more days",
        "description": "License Out of Compliance for 30 or more days"
    },
    "35029": {
        "code": 35029,
        "severity": "ERROR",
        "text": "License Out of Compliance for more than 45 Days Services Configuration Disabled",
        "description": "License Out of Compliance for more than 45 Days Services Configuration Disabled"
    },
    "35030": {
        "code": 35030,
        "severity": "WARN",
        "text": "License exceeded 100% session usage",
        "description": "License exceeded 100% session usage"
    },
    "35031": {
        "code": 35031,
        "severity": "ERROR",
        "text": "License exceeded 125% session usage",
        "description": "License exceeded 125% session usage"
    },
    "35032": {
        "code": 35032,
        "severity": "INFO",
        "text": "License expiring Within 90 Days",
        "description": "License expiring Within 90 Days"
    },
    "35033": {
        "code": 35033,
        "severity": "WARN",
        "text": "License expiring Within 60 Days",
        "description": "License expiring Within 60 Days"
    },
    "35034": {
        "code": 35034,
        "severity": "ERROR",
        "text": "License expiring Within 30 Days",
        "description": "License expiring Within 30 Days"
    },
    "35035": {
        "code": 35035,
        "severity": "ERROR",
        "text": "License expired",
        "description": "License expired"
    },
    "35036": {
        "code": 35036,
        "severity": "INFO",
        "text": "License expiring Within 90 Days",
        "description": "License expiring Within 90 Days"
    },
    "35037": {
        "code": 35037,
        "severity": "WARN",
        "text": "License expiring Within 60 Days",
        "description": "License expiring Within 60 Days"
    },
    "35038": {
        "code": 35038,
        "severity": "ERROR",
        "text": "License expiring Within 30 Days",
        "description": "License expiring Within 30 Days"
    },
    "35039": {
        "code": 35039,
        "severity": "ERROR",
        "text": "License expired",
        "description": "License expired"
    },
    "35040": {
        "code": 35040,
        "severity": "WARN",
        "text": "Fewer VM licenses installed than VM nodes deployed",
        "description": "The number of VM licenses installed is fewer than the number of VM nodes deployed"
    },
    "35041": {
        "code": 35041,
        "severity": "WARN",
        "text": "Fewer Device Admin licenses installed than Device Admin nodes deployed",
        "description": "The number of Device Admin licenses installed is fewer than the number of Device Admin nodes deployed"
    },
    "41000": {
        "code": 41000,
        "severity": "WARN",
        "text": "Memory statistics not found",
        "description": "The system call made to generate the local system's memory usage failed."
    },
    "41001": {
        "code": 41001,
        "severity": "WARN",
        "text": "Total memory not found",
        "description": "The system call made to generate the total system memory failed."
    },
    "41002": {
        "code": 41002,
        "severity": "WARN",
        "text": "Total swap not found",
        "description": "The system call made to generate the Total Swap size failed."
    },
    "41003": {
        "code": 41003,
        "severity": "WARN",
        "text": "Disk size not found",
        "description": "The system call made to generate the Disk Size failed."
    },
    "41004": {
        "code": 41004,
        "severity": "WARN",
        "text": "Disk device not found",
        "description": "The system call made to generate the list of Disk Devices failed."
    },
    "41005": {
        "code": 41005,
        "severity": "WARN",
        "text": "ISE version not found",
        "description": "The system call made to obtain the ISE Software version failed."
    },
    "41007": {
        "code": 41007,
        "severity": "INFO",
        "text": "ISE Node record found",
        "description": "The underlying ISE Node record could not be found in the database."
    },
    "41008": {
        "code": 41008,
        "severity": "INFO",
        "text": "Primary ISE Node record found taking over primary role",
        "description": "Since the appropriate ISE Node record for the local device could not be found, the Primary ISE Node record was found. Therefore, the local node is taking over the Primary role."
    },
    "41009": {
        "code": 41009,
        "severity": "INFO",
        "text": "Default ISE Deployment created",
        "description": "During system initialization the default ISE Deployment record was created in the database. This is the normal behavior for the system."
    },
    "41010": {
        "code": 41010,
        "severity": "INFO",
        "text": "Default ISE Node created",
        "description": "During system initialization the Default ISE Node record was created in the database. This is the normal behavior for the system."
    },
    "41011": {
        "code": 41011,
        "severity": "INFO",
        "text": "Node Status initialized",
        "description": "During system initialization Node Status initialized."
    },
    "41012": {
        "code": 41012,
        "severity": "INFO",
        "text": "Secondary registered",
        "description": "A new ISE instance has joined the deployment."
    },
    "41013": {
        "code": 41013,
        "severity": "INFO",
        "text": "ISE Node has been deregistered and is now running as a Primary node",
        "description": "The ISE Node has been deregistered and is now running as a Primary node"
    },
    "41014": {
        "code": 41014,
        "severity": "ERROR",
        "text": "Software version not found",
        "description": "The system call that obtains the ISE Software version failed."
    },
    "41015": {
        "code": 41015,
        "severity": "ERROR",
        "text": "Could not run",
        "description": "The system call that was activated, did not run correctly."
    },
    "41016": {
        "code": 41016,
        "severity": "ERROR",
        "text": "could not read stdout",
        "description": "While running a system call, the stdout of the system call could not be read."
    },
    "41017": {
        "code": 41017,
        "severity": "WARN",
        "text": "Hostname not found",
        "description": "The system call that obtains the local system's hostname failed."
    },
    "41018": {
        "code": 41018,
        "severity": "ERROR",
        "text": "Service Selection Policy update failed",
        "description": "During system initialization the Default Service Selection Policy update failed."
    },
    "41019": {
        "code": 41019,
        "severity": "ERROR",
        "text": "Could not add relation to Service Selection Policy",
        "description": "During system initialization the Default Service Selection Policy update failed."
    },
    "41020": {
        "code": 41020,
        "severity": "ERROR",
        "text": "Could not initialize Service Selection Policy",
        "description": "During system initialization the Default Service Selection Policy update failed."
    },
    "41021": {
        "code": 41021,
        "severity": "ERROR",
        "text": "Could not update ISE Node Object",
        "description": "Failed to update ISE Node with the local node information when the system started."
    },
    "41022": {
        "code": 41022,
        "severity": "ERROR",
        "text": "An error occurred while collecting NodeInfo",
        "description": "Collection of the local node information failed."
    },
    "41023": {
        "code": 41023,
        "severity": "ERROR",
        "text": "An error occurred while collecting replication status",
        "description": "Collection of the replication status failed."
    },
    "41024": {
        "code": 41024,
        "severity": "ERROR",
        "text": "Error loading NodeInfo",
        "description": "The NodeInfo file did not load correctly."
    },
    "41025": {
        "code": 41025,
        "severity": "ERROR",
        "text": "NodeInfo file contains incomplete information",
        "description": "NodeInfo file contains incomplete information and has loaded incorrectly."
    },
    "41026": {
        "code": 41026,
        "severity": "ERROR",
        "text": "Management config directory could not be created",
        "description": "The Management config directory could not be created."
    },
    "41027": {
        "code": 41027,
        "severity": "ERROR",
        "text": "NodeInfo file could not be created",
        "description": "NodeInfo file could not be created in the config directory."
    },
    "41028": {
        "code": 41028,
        "severity": "ERROR",
        "text": "MAC Address not found during initialization",
        "description": "Machine Network Address could not be found in the system network interface output during initialization."
    },
    "41029": {
        "code": 41029,
        "severity": "ERROR",
        "text": "ISE Node record not found in existing nodes. ISE cannot start",
        "description": "During system initialization the ISE Node record representing the local instance was not found in the existing nodes. ISE Management could not to start."
    },
    "41030": {
        "code": 41030,
        "severity": "ERROR",
        "text": "MAC Id not found in ACSNodeInfo",
        "description": "The Machine address field was not found in the ACSNodeInfo record in the database."
    },
    "41031": {
        "code": 41031,
        "severity": "ERROR",
        "text": "Registering Secondary Hostname already exists in Primary database",
        "description": "An attempt is being made to register the Secondary hostname. However, it already exists in the Primary database."
    },
    "41032": {
        "code": 41032,
        "severity": "ERROR",
        "text": "Register failed since Secondary MAC address already exists in the Primary database",
        "description": "An attempt is being made to register the machine address of the Secondary hostname. However, it already exists in the Primary database."
    },
    "41033": {
        "code": 41033,
        "severity": "ERROR",
        "text": "Deregistration failed since Secondary ISE Node not found in the Primary database",
        "description": "ISE instance de-registration failed since the Secondary's ISE Node record was not found in Primary database."
    },
    "41034": {
        "code": 41034,
        "severity": "ERROR",
        "text": "Activation failed since Secondary ISE Node is not found",
        "description": "Activation of the Secondary node from the Primary database failed because the Secondary ACSNode record was not found in the database."
    },
    "41035": {
        "code": 41035,
        "severity": "ERROR",
        "text": "Remote host is not a Primary AcsNode",
        "description": "During a Distributed Management Remote operation connection to the Primary was not possible because the host is not a Primary instance."
    },
    "41036": {
        "code": 41036,
        "severity": "ERROR",
        "text": "Cannot deregister a Primary ISE Node",
        "description": "The Primary instance of a deployment cannot be de-registered."
    },
    "41037": {
        "code": 41037,
        "severity": "ERROR",
        "text": "ISE Deployment record cannot be found, therefore Primary initialization is incorrect",
        "description": "During system initialization the ISE Deployment record could not be found and the system could not start correctly."
    },
    "41038": {
        "code": 41038,
        "severity": "ERROR",
        "text": "Interface configuration cannot be found",
        "description": "During the System call to obtain the Network Interface configuration, a failure occurred."
    },
    "41039": {
        "code": 41039,
        "severity": "ERROR",
        "text": "Network interface eth0 cannot be found",
        "description": "During the system call to obtain the Network Interface eth0 configuration, a failure occurred and the interface was not found."
    },
    "41040": {
        "code": 41040,
        "severity": "ERROR",
        "text": "Network interface eth0 hardware address cannot be found",
        "description": "During the system call to obtain the Network Interface eth0 configuration hardware address, a failure occurred and the hardware address was not found."
    },
    "41041": {
        "code": 41041,
        "severity": "ERROR",
        "text": "Network interface eth0 inet address cannot be found",
        "description": "During the System call to obtain the Network Interface eth0 configuration IP address, a failure occurred and the IP address was not found."
    },
    "41042": {
        "code": 41042,
        "severity": "ERROR",
        "text": "Network interface eth0 mask cannot be found",
        "description": "During the system call to obtain the Network Interface eth0 configuration subnet mask a failure occurred and the subnet mask was not found."
    },
    "41043": {
        "code": 41043,
        "severity": "ERROR",
        "text": "Could not create ACSNodeInfo",
        "description": "The system failed to create AcsNodeInfo record and attach it to the AcsNode record for the instance."
    },
    "41044": {
        "code": 41044,
        "severity": "ERROR",
        "text": "Failure to find the reconnection Acs Instance in the primary, please check that the Acs Instance exists in the Primary Acs Instance Listing page",
        "description": "During a Hardware Replacement or LocalMode reconnection the AcsNode record with the specified Replacement Keyword could not be found. This keyword is the hostname of the system by default."
    },
    "41045": {
        "code": 41045,
        "severity": "ERROR",
        "text": "Failure. Specified replacement keyword is associated with a registered instance",
        "description": "During hardware replacement the specified replacement keyword is associated with an ISE instance that has already been registered."
    },
    "41046": {
        "code": 41046,
        "severity": "INFO",
        "text": "Registering to Primary",
        "description": "An ISE instance is in the process of registering to the Primary node."
    },
    "41047": {
        "code": 41047,
        "severity": "INFO",
        "text": "Initiate Full Sync of Data from Primary",
        "description": "A full synchronization of data from the Primary node has been initiated for the specified ISE instance."
    },
    "41048": {
        "code": 41048,
        "severity": "INFO",
        "text": "ACSNode has been replaced",
        "description": "The specified ISE instance has been hardware-replaced correctly."
    },
    "41049": {
        "code": 41049,
        "severity": "INFO",
        "text": "New ACSNode Registering to Primary",
        "description": "A new ISE instance has been registered to the Primary node."
    },
    "41050": {
        "code": 41050,
        "severity": "INFO",
        "text": "Activating ACSNode",
        "description": "The specified ISE instance is being activated on the Primary."
    },
    "41051": {
        "code": 41051,
        "severity": "INFO",
        "text": "Deactivating ACSNode",
        "description": "The specified ISE instance is being deactivated on the Primary."
    },
    "41053": {
        "code": 41053,
        "severity": "INFO",
        "text": "Promote node to Primary",
        "description": "The specified ISE instance is being promoted to the Primary node of the deployment."
    },
    "41054": {
        "code": 41054,
        "severity": "INFO",
        "text": "Switching Secondary to Local Mode Operation",
        "description": "The specified ISE instance is switching to Local Mode Operation."
    },
    "41055": {
        "code": 41055,
        "severity": "INFO",
        "text": "Upgrading node to new software version",
        "description": "The specified ISE instance is being upgraded/patched to a new software version."
    },
    "41056": {
        "code": 41056,
        "severity": "INFO",
        "text": "Apply upgrade",
        "description": "A software upgrade is being applied to the local ISE instance."
    },
    "41057": {
        "code": 41057,
        "severity": "INFO",
        "text": "Automatic backup being created",
        "description": "The system is being backed up as part of applying an upgrade or patch."
    },
    "41058": {
        "code": 41058,
        "severity": "INFO",
        "text": "Downloading bundle for Primary hosting",
        "description": "The Primary node is downloading the software upgrade/patch bundle from the remote host so it can be hosted on the primary node."
    },
    "41059": {
        "code": 41059,
        "severity": "INFO",
        "text": "Node upgrade completed",
        "description": "The upgrade or patch process has completed on the local node."
    },
    "41060": {
        "code": 41060,
        "severity": "INFO",
        "text": "Enabling Log Collector Target",
        "description": "Enabling Log Collector Target for the ISE deployment. After it is enabled, remote logging from each instance in the deployment will be sent to the collector."
    },
    "41061": {
        "code": 41061,
        "severity": "INFO",
        "text": "Disabling Log Collector Target",
        "description": "Disabling Log Collector Target for the ISE Deployment. Remote logging to the Log collector will cease until re-enabled."
    },
    "41062": {
        "code": 41062,
        "severity": "INFO",
        "text": "Select the Log Collector Node",
        "description": "The Log Collector ISE instance has been selected for the deployment. After Log Collector is enabled, remote logging will appear on the collector."
    },
    "41063": {
        "code": 41063,
        "severity": "INFO",
        "text": "Remote Syslog Target for Log Collector has been created",
        "description": "Remote Syslog Target for the Log Collector has been created and remote logging to the Log Collector will begin."
    },
    "41064": {
        "code": 41064,
        "severity": "ERROR",
        "text": "The deployment Log Collector cannot be deregistered",
        "description": "The deployment cannot be left without a Log Collector configured. De-registering this node will remove the selected Log Collector."
    },
    "41065": {
        "code": 41065,
        "severity": "INFO",
        "text": "Apply upgrade diagnostic messages",
        "description": "Apply upgrade diagnostic messages"
    },
    "51000": {
        "code": 51000,
        "severity": "NOTICE",
        "text": "Administrator authentication failed",
        "description": "Administrator authentication failed"
    },
    "51001": {
        "code": 51001,
        "severity": "NOTICE",
        "text": "Administrator authentication succeeded",
        "description": "Administrator authentication succeeded"
    },
    "51002": {
        "code": 51002,
        "severity": "NOTICE",
        "text": "Administrator logged off",
        "description": "Administrator logged off"
    },
    "51003": {
        "code": 51003,
        "severity": "NOTICE",
        "text": "Session Timeout",
        "description": "Administrator had a session timeout"
    },
    "51004": {
        "code": 51004,
        "severity": "NOTICE",
        "text": "Rejected administrator session from unauthorized client IP address",
        "description": "An attempt to start an administration session from an unauthorized client IP address was rejected. Check the client's administration access setting."
    },
    "51005": {
        "code": 51005,
        "severity": "NOTICE",
        "text": "Administrator authentication failed. Administrator account is disabled",
        "description": "Administrator authentication failed. Administrator account is disabled."
    },
    "51006": {
        "code": 51006,
        "severity": "NOTICE",
        "text": "Administrator authentication failed. Account is disabled due to inactivity",
        "description": "Administrator authentication failed. Account is disabled due to inactivity."
    },
    "51007": {
        "code": 51007,
        "severity": "NOTICE",
        "text": "Authentication failed. Account is disabled due to password expiration",
        "description": "Authentication failed. Account is disabled due to password expiration"
    },
    "51008": {
        "code": 51008,
        "severity": "NOTICE",
        "text": "Administrator authentication failed. Account is disabled due to excessive failed authentication attempts",
        "description": "Administrator authentication failed. Account is disabled due to excessive failed authentication attempts."
    },
    "51009": {
        "code": 51009,
        "severity": "NOTICE",
        "text": "Authentication failed. ISE Runtime is not running",
        "description": "Authentication failed. ISE Runtime is not running"
    },
    "51020": {
        "code": 51020,
        "severity": "NOTICE",
        "text": "Administrator authentication failed. Login username does not exist.",
        "description": "Administrator authentication failed. Login username does not exist."
    },
    "51021": {
        "code": 51021,
        "severity": "NOTICE",
        "text": "Administrator authentication failed. Wrong password.",
        "description": "Administrator authentication failed. Wrong password."
    },
    "51022": {
        "code": 51022,
        "severity": "NOTICE",
        "text": "Administrator authentication failed. System Error",
        "description": "Administrator authentication failed. System Error"
    },
    "51023": {
        "code": 51023,
        "severity": "NOTICE",
        "text": "Administrator account is unlocked",
        "description": "Administrator account is unlocked"
    },
    "51100": {
        "code": 51100,
        "severity": "NOTICE",
        "text": "Password changed successfully",
        "description": "The password has been changed successfully"
    },
    "51101": {
        "code": 51101,
        "severity": "NOTICE",
        "text": "Invalid new password. Password is too short",
        "description": "Invalid new password. Password too short."
    },
    "51102": {
        "code": 51102,
        "severity": "NOTICE",
        "text": "Invalid new password. Too many repeating characters",
        "description": "Invalid new password. Too many repeating characters."
    },
    "51103": {
        "code": 51103,
        "severity": "NOTICE",
        "text": "Invalid new password. Missing required character type",
        "description": "Invalid new password. Missing required character type."
    },
    "51104": {
        "code": 51104,
        "severity": "NOTICE",
        "text": "Invalid new password. Contains username",
        "description": "Invalid new password. A password cannot contain a username."
    },
    "51105": {
        "code": 51105,
        "severity": "NOTICE",
        "text": "Invalid new password. Contains reserved word",
        "description": "Invalid new password. A password cannot contain a reserved word."
    },
    "51106": {
        "code": 51106,
        "severity": "NOTICE",
        "text": "Authentication for web services failed",
        "description": "Authentication for web services failed."
    },
    "51107": {
        "code": 51107,
        "severity": "NOTICE",
        "text": "Invalid new password",
        "description": "Invalid new password"
    },
    "51115": {
        "code": 51115,
        "severity": "NOTICE",
        "text": "The new password is invalid. This password has been previously used.",
        "description": "The new password is invalid. This password has been previously used."
    },
    "51116": {
        "code": 51116,
        "severity": "NOTICE",
        "text": "Invalid new password. Password must not contain dictionary words or their characters in reverse order",
        "description": "Invalid new password. Password must not contain dictionary words or their characters in reverse order"
    },
    "52000": {
        "code": 52000,
        "severity": "NOTICE",
        "text": "Added configuration",
        "description": "Added configuration"
    },
    "52001": {
        "code": 52001,
        "severity": "NOTICE",
        "text": "Changed configuration",
        "description": "Changed configuration"
    },
    "52002": {
        "code": 52002,
        "severity": "NOTICE",
        "text": "Deleted configuration",
        "description": "Deleted configuration"
    },
    "52003": {
        "code": 52003,
        "severity": "NOTICE",
        "text": "Deregister Node",
        "description": "One of the ISE instances in the deployment has been de-registered."
    },
    "52004": {
        "code": 52004,
        "severity": "NOTICE",
        "text": "Register Node",
        "description": "A new ISE instance has been registered and has joined the deployment."
    },
    "52005": {
        "code": 52005,
        "severity": "NOTICE",
        "text": "Activate Node",
        "description": "An ISE instance has been activated to receive updates from the Primary node."
    },
    "52006": {
        "code": 52006,
        "severity": "NOTICE",
        "text": "Deactivate ISE Node",
        "description": "An ISE instance has been deactivated and will no longer receive updates from the Primary node."
    },
    "52007": {
        "code": 52007,
        "severity": "NOTICE",
        "text": "Force Full replication",
        "description": "A Force Full replication has been issued for an ISE instance."
    },
    "52008": {
        "code": 52008,
        "severity": "NOTICE",
        "text": "Replacement Register Handler",
        "description": "A new ISE instance has joined the deployment through hardware replacement."
    },
    "52009": {
        "code": 52009,
        "severity": "NOTICE",
        "text": "Promote Node",
        "description": "A Secondary node has been promoted to be the Primary node of the deployment."
    },
    "52010": {
        "code": 52010,
        "severity": "NOTICE",
        "text": "Promote Node Handler",
        "description": "A Secondary node has been promoted to be the Primary node of the deployment."
    },
    "52011": {
        "code": 52011,
        "severity": "NOTICE",
        "text": "Local Mode",
        "description": "An ISE instance has been switched to Local Mode operation and is no longer receiving updates from the Primary node."
    },
    "52012": {
        "code": 52012,
        "severity": "NOTICE",
        "text": "Local Mode Handler",
        "description": "An ISE instance has been switched to Local Mode operation and is no longer receiving updates from the Primary node."
    },
    "52013": {
        "code": 52013,
        "severity": "NOTICE",
        "text": "Hardware Replacement",
        "description": "A new ISE instance has joined the deployment through hardware replacement."
    },
    "52014": {
        "code": 52014,
        "severity": "NOTICE",
        "text": "Deregister Handler",
        "description": "One of the ISE instances in the deployment has been de-registered."
    },
    "52015": {
        "code": 52015,
        "severity": "NOTICE",
        "text": "Enable LogCollector Target",
        "description": "Enable the deployment Log Collector target."
    },
    "52016": {
        "code": 52016,
        "severity": "NOTICE",
        "text": "Select LogCollector Node",
        "description": "The Log Collector node for the deployment has been selected."
    },
    "52017": {
        "code": 52017,
        "severity": "NOTICE",
        "text": "Apply software update",
        "description": "Apply a software update to the selected ISE instances."
    },
    "52018": {
        "code": 52018,
        "severity": "NOTICE",
        "text": "Overriding an ISE Instances Log Categories",
        "description": "An ISE Instance has had its Log Categories overridden to allow it to be configured separately from the Global Log Categories configuration."
    },
    "52019": {
        "code": 52019,
        "severity": "NOTICE",
        "text": "Restoring an ISE Instances Log Categories to Global",
        "description": "An ISE Instance has had its Log Categories restored to use the Global Log Categories configuration."
    },
    "52020": {
        "code": 52020,
        "severity": "NOTICE",
        "text": "Full Replication",
        "description": "The primary requested full replication"
    },
    "52021": {
        "code": 52021,
        "severity": "NOTICE",
        "text": "Full replication request",
        "description": "The secondary requested full replication"
    },
    "52022": {
        "code": 52022,
        "severity": "NOTICE",
        "text": "Full replication",
        "description": "Creating a link between the primary and secondary nodes"
    },
    "52023": {
        "code": 52023,
        "severity": "NOTICE",
        "text": "Full replication failed",
        "description": "Failed to create a link between the primary and secondary nodes"
    },
    "52024": {
        "code": 52024,
        "severity": "NOTICE",
        "text": "Full replication",
        "description": "Creating a local credential file on the node"
    },
    "52025": {
        "code": 52025,
        "severity": "NOTICE",
        "text": "Full replication",
        "description": "Retrieving the remote database key"
    },
    "52026": {
        "code": 52026,
        "severity": "NOTICE",
        "text": "Full replication",
        "description": "Retrieving the database from the primary over the secure Sybase channel"
    },
    "52027": {
        "code": 52027,
        "severity": "NOTICE",
        "text": "Full replication",
        "description": "Stopping the message bus heartbeat channel"
    },
    "52028": {
        "code": 52028,
        "severity": "NOTICE",
        "text": "Full replication",
        "description": "Deleting backup files"
    },
    "52029": {
        "code": 52029,
        "severity": "NOTICE",
        "text": "Full replication",
        "description": "Running the cleanup script and restarting ISE services"
    },
    "52030": {
        "code": 52030,
        "severity": "NOTICE",
        "text": "Full replication succeeded",
        "description": "Full replication was completed successfully"
    },
    "52031": {
        "code": 52031,
        "severity": "NOTICE",
        "text": "Full replication failed",
        "description": "Failed to complete full replication"
    },
    "52032": {
        "code": 52032,
        "severity": "NOTICE",
        "text": "Registration request",
        "description": "An ISE instance requested to join a distributed environment"
    },
    "52033": {
        "code": 52033,
        "severity": "NOTICE",
        "text": "Registration succeeded",
        "description": "Registration with the primary node was completed successfully"
    },
    "52034": {
        "code": 52034,
        "severity": "NOTICE",
        "text": "Registration request",
        "description": "The primary instance has requested full replication"
    },
    "52035": {
        "code": 52035,
        "severity": "NOTICE",
        "text": "Registration failed",
        "description": "Failed to perform the full replication requested by the primary instance"
    },
    "52036": {
        "code": 52036,
        "severity": "NOTICE",
        "text": "Registration",
        "description": "Changing an ISE instance from primary to secondary"
    },
    "52037": {
        "code": 52037,
        "severity": "NOTICE",
        "text": "Registration",
        "description": "Updating the primary instance to secondary in the database"
    },
    "52038": {
        "code": 52038,
        "severity": "NOTICE",
        "text": "Registration succeeded",
        "description": "The ISE instance was successfully joined to a distributed ISE deployment"
    },
    "52039": {
        "code": 52039,
        "severity": "NOTICE",
        "text": "Registration failed",
        "description": "The ISE instance was unable to join a distributed deployment"
    },
    "52040": {
        "code": 52040,
        "severity": "NOTICE",
        "text": "Promotion request",
        "description": "Issued a request to promote a secondary instance"
    },
    "52041": {
        "code": 52041,
        "severity": "NOTICE",
        "text": "Promotion request",
        "description": "A secondary instance requested to be promoted to be the primary instance"
    },
    "52042": {
        "code": 52042,
        "severity": "NOTICE",
        "text": "Demotion succeeded",
        "description": "Demotion of the existing primary instance was completed successfully"
    },
    "52043": {
        "code": 52043,
        "severity": "NOTICE",
        "text": "Demotion failed",
        "description": "Demotion of the existing primary instance failed"
    },
    "52044": {
        "code": 52044,
        "severity": "NOTICE",
        "text": "Promotion",
        "description": "The global deployment ID was successfully updated"
    },
    "52045": {
        "code": 52045,
        "severity": "NOTICE",
        "text": "Promotion succeeded",
        "description": "Promotion of the secondary instance was completed successfully"
    },
    "52046": {
        "code": 52046,
        "severity": "NOTICE",
        "text": "Promotion failed",
        "description": "Promotion of a secondary instance failed"
    },
    "52047": {
        "code": 52047,
        "severity": "NOTICE",
        "text": "Local mode reconnect request",
        "description": "The ISE instance in local mode issued a request to reconnect to the deployment"
    },
    "52048": {
        "code": 52048,
        "severity": "NOTICE",
        "text": "Local mode start",
        "description": "The ISE instance in local mode issued a remote call to the primary to reconnect to the deployment"
    },
    "52049": {
        "code": 52049,
        "severity": "NOTICE",
        "text": "Local mode reconnect",
        "description": "Initiating full replication for an ISE instance in local mode"
    },
    "52050": {
        "code": 52050,
        "severity": "NOTICE",
        "text": "Local mode reconnect",
        "description": "Changing ISE instance status to secondary"
    },
    "52051": {
        "code": 52051,
        "severity": "NOTICE",
        "text": "Local mode reconnect",
        "description": "Updating instance status to secondary in the database"
    },
    "52052": {
        "code": 52052,
        "severity": "NOTICE",
        "text": "Local mode reconnect succeeded",
        "description": "Reconnecting a local mode instance to the deployment was completed successfully"
    },
    "52053": {
        "code": 52053,
        "severity": "NOTICE",
        "text": "Local mode reconnect failed",
        "description": "Reconnect a local mode instance to the deployment failed"
    },
    "52054": {
        "code": 52054,
        "severity": "NOTICE",
        "text": "Local mode request",
        "description": "Issued a request to local mode"
    },
    "52055": {
        "code": 52055,
        "severity": "NOTICE",
        "text": "Local mode request",
        "description": "The secondary instance requested to be placed in local mode"
    },
    "52056": {
        "code": 52056,
        "severity": "NOTICE",
        "text": "Local mode",
        "description": "Changing the ISE instance status to local mode"
    },
    "52057": {
        "code": 52057,
        "severity": "NOTICE",
        "text": "Local mode",
        "description": "Updating the instance status to local mode in the database"
    },
    "52058": {
        "code": 52058,
        "severity": "NOTICE",
        "text": "Local mode succeeded",
        "description": "Local mode request was completed successfully"
    },
    "52059": {
        "code": 52059,
        "severity": "NOTICE",
        "text": "Local mode failed",
        "description": "Local mode request failed"
    },
    "52060": {
        "code": 52060,
        "severity": "NOTICE",
        "text": "Deregister request",
        "description": "A primary requested to deregister a secondary from the distributed deployment"
    },
    "52061": {
        "code": 52061,
        "severity": "NOTICE",
        "text": "Deregister request",
        "description": "A secondary requested to deregister from the distributed deployment"
    },
    "52062": {
        "code": 52062,
        "severity": "NOTICE",
        "text": "Deregister",
        "description": "Removing the connection between the secondary and the primary"
    },
    "52063": {
        "code": 52063,
        "severity": "NOTICE",
        "text": "Deregister",
        "description": "Restarting registration heartbeat channel"
    },
    "52070": {
        "code": 52070,
        "severity": "NOTICE",
        "text": "Deregister request",
        "description": "The secondary requested that the primary deregister itself"
    },
    "52071": {
        "code": 52071,
        "severity": "NOTICE",
        "text": "Deregister",
        "description": "The primary deleted the secondary certificate information"
    },
    "52072": {
        "code": 52072,
        "severity": "NOTICE",
        "text": "Deregister succeeded",
        "description": "Deregistration was completed successfully"
    },
    "52073": {
        "code": 52073,
        "severity": "NOTICE",
        "text": "Deregister failed",
        "description": "Deregistration failed"
    },
    "52074": {
        "code": 52074,
        "severity": "NOTICE",
        "text": "Delete node request",
        "description": "The ISE secondary instance in inactive mode requested to disconnect from the deployment"
    },
    "52075": {
        "code": 52075,
        "severity": "NOTICE",
        "text": "Delete node request",
        "description": "The ISE secondary instance in inactive mode requested to disconnect from the primary instance"
    },
    "52076": {
        "code": 52076,
        "severity": "NOTICE",
        "text": "Delete node request",
        "description": "The ISE primary instance requested to delete the secondary instance in inactive mode"
    },
    "52077": {
        "code": 52077,
        "severity": "NOTICE",
        "text": "Delete node",
        "description": "The ISE secondary instance in inactive mode successfully disconnected from the deployment"
    },
    "52078": {
        "code": 52078,
        "severity": "NOTICE",
        "text": "Delete node failed",
        "description": "Failed to delete the ISE secondary instance in inactive mode from the deployment"
    },
    "52079": {
        "code": 52079,
        "severity": "NOTICE",
        "text": "Delete node succeeded",
        "description": "The ISE primary instance successfully deleted the secondary instance in inactive mode"
    },
    "52080": {
        "code": 52080,
        "severity": "NOTICE",
        "text": "Delete node failed",
        "description": "Failed to delete the ISE secondary instance in inactive mode from the primary instance"
    },
    "52081": {
        "code": 52081,
        "severity": "NOTICE",
        "text": "Backup request",
        "description": "An immediate backup for the secondary instance was requested"
    },
    "52082": {
        "code": 52082,
        "severity": "NOTICE",
        "text": "Backup failed",
        "description": "An immediate backup for the secondary instance failed"
    },
    "52083": {
        "code": 52083,
        "severity": "NOTICE",
        "text": "Backup request",
        "description": "An immediate backup for the primary instance was requested"
    },
    "52084": {
        "code": 52084,
        "severity": "NOTICE",
        "text": "Backup succeeded",
        "description": "An immediate backup for the primary instance was completed successfully"
    },
    "52085": {
        "code": 52085,
        "severity": "NOTICE",
        "text": "Backup failed",
        "description": "An immediate backup for the primary failed"
    },
    "52086": {
        "code": 52086,
        "severity": "NOTICE",
        "text": "Software update request",
        "description": "A software update was requested"
    },
    "52088": {
        "code": 52088,
        "severity": "NOTICE",
        "text": "Software update",
        "description": "Applying software update"
    },
    "52089": {
        "code": 52089,
        "severity": "NOTICE",
        "text": "Software update",
        "description": "Software update requires backup before the update"
    },
    "52090": {
        "code": 52090,
        "severity": "NOTICE",
        "text": "Software update",
        "description": "The software update is downloading the update bundle from the primary instance"
    },
    "52091": {
        "code": 52091,
        "severity": "NOTICE",
        "text": "Software update failed",
        "description": "Software update download of update bundle failed"
    },
    "52092": {
        "code": 52092,
        "severity": "NOTICE",
        "text": "Software update succeeded",
        "description": "The software update was completed successfully"
    },
    "52093": {
        "code": 52093,
        "severity": "NOTICE",
        "text": "Software update failed",
        "description": "The software update failed"
    },
    "52094": {
        "code": 52094,
        "severity": "NOTICE",
        "text": "Activate request",
        "description": "Request to activate a secondary instance"
    },
    "52095": {
        "code": 52095,
        "severity": "NOTICE",
        "text": "Register",
        "description": "Request to perform hardware replacement of secondary instance in the deployment"
    },
    "52096": {
        "code": 52096,
        "severity": "NOTICE",
        "text": "Activate",
        "description": "Unable to retrieve the primary instance information"
    },
    "52097": {
        "code": 52097,
        "severity": "NOTICE",
        "text": "Activate",
        "description": "Requested the secondary to initiate full replication"
    },
    "52098": {
        "code": 52098,
        "severity": "NOTICE",
        "text": "Activate",
        "description": "Request to activate a secondary instance completed successfully"
    },
    "52099": {
        "code": 52099,
        "severity": "NOTICE",
        "text": "Activate",
        "description": "Request to activate a secondary instance failed"
    },
    "52100": {
        "code": 52100,
        "severity": "NOTICE",
        "text": "Deregister",
        "description": "Check status process on secondary detected that it is now deregistered on the primary."
    },
    "52101": {
        "code": 52101,
        "severity": "NOTICE",
        "text": "Deregister",
        "description": "Check status process on primary detected that a secondary instance has deregistered itself."
    },
    "52102": {
        "code": 52102,
        "severity": "NOTICE",
        "text": "SCHEDULED BACKUP",
        "description": "Scheduled backup starting on primary instance."
    },
    "52103": {
        "code": 52103,
        "severity": "NOTICE",
        "text": "SCHEDULED BACKUP",
        "description": "Scheduled backup failed to start due to invalid character in backup name."
    },
    "52104": {
        "code": 52104,
        "severity": "NOTICE",
        "text": "SCHEDULED BACKUP",
        "description": "Scheduled backup failed to start due to invalid repository."
    },
    "52105": {
        "code": 52105,
        "severity": "NOTICE",
        "text": "SCHEDULED BACKUP",
        "description": "Scheduled backup failed due to internal error."
    },
    "52106": {
        "code": 52106,
        "severity": "NOTICE",
        "text": "SCHEDULED BACKUP",
        "description": "Scheduled backup successfully completed."
    },
    "57000": {
        "code": 57000,
        "severity": "NOTICE",
        "text": "Deleted rolled-over local log file(s)",
        "description": "Deleted rolled-over local log file(s)"
    },
    "58001": {
        "code": 58001,
        "severity": "NOTICE",
        "text": "ISE process started",
        "description": "An ISE process has started"
    },
    "58002": {
        "code": 58002,
        "severity": "NOTICE",
        "text": "ISE process stopped",
        "description": "An ISE process has stopped"
    },
    "58003": {
        "code": 58003,
        "severity": "NOTICE",
        "text": "ISE processes started",
        "description": "All ISE processes have started"
    },
    "58004": {
        "code": 58004,
        "severity": "NOTICE",
        "text": "ISE processes stopped",
        "description": "All ISE processes have stopped"
    },
    "58005": {
        "code": 58005,
        "severity": "NOTICE",
        "text": "ISE process was restarted by watchdog service",
        "description": "The watchdog service has restarted an ISE process"
    },
    "58006": {
        "code": 58006,
        "severity": "NOTICE",
        "text": "Watchdog configuration reloaded",
        "description": "The watchdog configuration has been reloaded"
    },
    "58007": {
        "code": 58007,
        "severity": "NOTICE",
        "text": "ISE process reported start/stop error",
        "description": "An ISE process has reported a start or stop"
    },
    "58008": {
        "code": 58008,
        "severity": "NOTICE",
        "text": "CARS backup complete",
        "description": "The CARS backup was completed successfully"
    },
    "58009": {
        "code": 58009,
        "severity": "NOTICE",
        "text": "CARS restore complete",
        "description": "The CARS restore was completed successfully"
    },
    "58010": {
        "code": 58010,
        "severity": "NOTICE",
        "text": "ISE database backup",
        "description": "The ISE database backup was completed successfully"
    },
    "58011": {
        "code": 58011,
        "severity": "NOTICE",
        "text": "ISE database restore",
        "description": "The ISE database restore was completed successfully"
    },
    "58012": {
        "code": 58012,
        "severity": "NOTICE",
        "text": "ISE support bundle collected",
        "description": "The ISE support bundle has been collected"
    },
    "58013": {
        "code": 58013,
        "severity": "NOTICE",
        "text": "ISE database reset",
        "description": "The ISE database has been reset"
    },
    "58014": {
        "code": 58014,
        "severity": "NOTICE",
        "text": "ISE core files deleted",
        "description": "The ISE core files have been deleted"
    },
    "58015": {
        "code": 58015,
        "severity": "NOTICE",
        "text": "ISE log files deleted",
        "description": "The ISE log files have been deleted"
    },
    "58016": {
        "code": 58016,
        "severity": "NOTICE",
        "text": "ISE upgrade",
        "description": "The ISE upgrade was completed successfully"
    },
    "58017": {
        "code": 58017,
        "severity": "NOTICE",
        "text": "ISE patch install",
        "description": "The ISE patch was successfully installed"
    },
    "58018": {
        "code": 58018,
        "severity": "NOTICE",
        "text": "ISE migration interface enabled/disabled",
        "description": "The ISE migration interface has been enabled or disabled"
    },
    "58019": {
        "code": 58019,
        "severity": "NOTICE",
        "text": "ISE administrator password reset",
        "description": "The ISE administrator password has been reset"
    },
    "58020": {
        "code": 58020,
        "severity": "NOTICE",
        "text": "Clock set",
        "description": "The clock has been set"
    },
    "58021": {
        "code": 58021,
        "severity": "NOTICE",
        "text": "Time zone set",
        "description": "The time zone has been set"
    },
    "58022": {
        "code": 58022,
        "severity": "NOTICE",
        "text": "NTP Server set",
        "description": "The NTP Server has been set"
    },
    "58023": {
        "code": 58023,
        "severity": "NOTICE",
        "text": "Hostname set",
        "description": "The hostname has been set"
    },
    "58024": {
        "code": 58024,
        "severity": "NOTICE",
        "text": "IP address set",
        "description": "The IP address has been set"
    },
    "58025": {
        "code": 58025,
        "severity": "NOTICE",
        "text": "IP address state",
        "description": "IP address state"
    },
    "58026": {
        "code": 58026,
        "severity": "NOTICE",
        "text": "Default gateway set",
        "description": "The default gateway has been set"
    },
    "58027": {
        "code": 58027,
        "severity": "NOTICE",
        "text": "Name server set",
        "description": "The name server has been set"
    },
    "58028": {
        "code": 58028,
        "severity": "NOTICE",
        "text": "ADE OS Xfer library error",
        "description": "An error occurred in the ADE OS Xfer library"
    },
    "58029": {
        "code": 58029,
        "severity": "NOTICE",
        "text": "ADE OS install library error",
        "description": "An error occurred in the ADE OS install library"
    },
    "58030": {
        "code": 58030,
        "severity": "NOTICE",
        "text": "ISE upgrade - schema change",
        "description": "The ISE schema upgrade is complete"
    },
    "58031": {
        "code": 58031,
        "severity": "NOTICE",
        "text": "ISE upgrade - dictionary",
        "description": "The ISE dictionary upgrade is complete"
    },
    "58032": {
        "code": 58032,
        "severity": "NOTICE",
        "text": "ISE upgrade - data manipulation",
        "description": "ISE upgrade - data manipulation stage complete"
    },
    "58033": {
        "code": 58033,
        "severity": "NOTICE",
        "text": "ISE upgrade - AAC",
        "description": "The ISE AAC upgrade is complete"
    },
    "58034": {
        "code": 58034,
        "severity": "NOTICE",
        "text": "ISE upgrade - PKI",
        "description": "The ISE PKI upgrade is complete"
    },
    "58035": {
        "code": 58035,
        "severity": "NOTICE",
        "text": "ISE upgrade - MnT",
        "description": "The MnT upgrade is complete"
    },
    "58036": {
        "code": 58036,
        "severity": "NOTICE",
        "text": "ISE upgrade",
        "description": "The ISE upgrade has been started"
    },
    "58037": {
        "code": 58037,
        "severity": "NOTICE",
        "text": "ISE install",
        "description": "The ISE installation has been started"
    },
    "58038": {
        "code": 58038,
        "severity": "NOTICE",
        "text": "Failed to join to AD",
        "description": "The AD agent failed to join the AD domain"
    },
    "58039": {
        "code": 58039,
        "severity": "NOTICE",
        "text": "AD join",
        "description": "The AD agent has joined the AD domain"
    },
    "58040": {
        "code": 58040,
        "severity": "NOTICE",
        "text": "AD leave",
        "description": "The AD agent has left the AD domain"
    },
    "58041": {
        "code": 58041,
        "severity": "NOTICE",
        "text": "Import/export process aborted",
        "description": "The import/export process has aborted"
    },
    "58042": {
        "code": 58042,
        "severity": "NOTICE",
        "text": "Import/export process started",
        "description": "The import/export process has started"
    },
    "58043": {
        "code": 58043,
        "severity": "NOTICE",
        "text": "Import/export process complete",
        "description": "The import/export process is complete"
    },
    "58044": {
        "code": 58044,
        "severity": "NOTICE",
        "text": "Error in import/export process",
        "description": "An error occurred during the import/export process"
    },
    "58045": {
        "code": 58045,
        "severity": "NOTICE",
        "text": "Only single network interface is allowed",
        "description": "Only single network interface is allowed"
    },
    "59000": {
        "code": 59000,
        "severity": "NOTICE",
        "text": "Received request to revoke all PACs",
        "description": "The administrator requested to revoke all previously issued EAP-FAST-related keys and PACs by generating a new EAP-FAST seed key."
    },
    "59001": {
        "code": 59001,
        "severity": "NOTICE",
        "text": "Generated new EAP-FAST seed key",
        "description": "A new EAP-FAST seed key was successfully generated. All EAP-FAST-related keys and PACs will be revoked."
    },
    "59002": {
        "code": 59002,
        "severity": "NOTICE",
        "text": "Successfully updated EAP-FAST seed key",
        "description": "Successfully updated the EAP-FAST seed key, which will be used to derive master keys. All previously generated EAP-FAST keys and PACs have been revoked."
    },
    "59003": {
        "code": 59003,
        "severity": "NOTICE",
        "text": "User not authorized to revoke all EAP-FAST PACs",
        "description": "The user is not authorized to revoke all EAP-FAST PACs."
    },
    "59004": {
        "code": 59004,
        "severity": "NOTICE",
        "text": "Timed out during attempt to revoke EAP-FAST keys and PACs",
        "description": "The ISE runtime experienced a timeout while attempting to revoke previously generated EAP-FAST keys and PACs."
    },
    "59005": {
        "code": 59005,
        "severity": "NOTICE",
        "text": "Received request to generate Tunnel PAC",
        "description": "The administrator requested to manually issue an out-of-band EAP-FAST Tunnel PAC."
    },
    "59006": {
        "code": 59006,
        "severity": "NOTICE",
        "text": "Received request to generate Machine PAC",
        "description": "The administrator requested to manually issue an out-of-band EAP-FAST Machine PAC."
    },
    "59007": {
        "code": 59007,
        "severity": "NOTICE",
        "text": "Failed to generate PAC",
        "description": "Encountered an error while attempting to issue an out-of-band EAP-FAST PAC."
    },
    "59008": {
        "code": 59008,
        "severity": "NOTICE",
        "text": "Successfully generated PAC",
        "description": "Succeeded in manually issuing an out-of-band EAP-FAST PAC."
    },
    "59009": {
        "code": 59009,
        "severity": "NOTICE",
        "text": "Received request to generate TrustSec PAC",
        "description": "The administrator requested to manually issue an out-of-band EAP-FAST TrustSec PAC."
    },
    "59010": {
        "code": 59010,
        "severity": "NOTICE",
        "text": "Failed to generate TrustSec PAC",
        "description": "Encountered an error while attempting to issue an out-of-band EAP-FAST TrustSec PAC."
    },
    "59011": {
        "code": 59011,
        "severity": "NOTICE",
        "text": "Successfully generated TrustSec PAC",
        "description": "Succeeded in manually issuing an out-of-band EAP-FAST TrustSec PAC."
    },
    "59050": {
        "code": 59050,
        "severity": "NOTICE",
        "text": "Received request to revoke all Tickets",
        "description": "The administrator requested to revoke all previously issued EAP-TLS-related keys and Tickets by generating a new EAP-TLS seed key."
    },
    "59051": {
        "code": 59051,
        "severity": "NOTICE",
        "text": "Generated new EAP-TLS seed key",
        "description": "A new EAP-TLS seed key was successfully generated. All EAP-TLS-related keys and Tickets will be revoked."
    },
    "59052": {
        "code": 59052,
        "severity": "NOTICE",
        "text": "Successfully updated EAP-TLS seed key",
        "description": "Successfully updated the EAP-TLS seed key, which will be used to derive master keys. All previously generated EAP-TLS keys and tickets have been revoked."
    },
    "59100": {
        "code": 59100,
        "severity": "NOTICE",
        "text": "Delete local store logs",
        "description": "The admin requested to delete the local store logs"
    },
    "59101": {
        "code": 59101,
        "severity": "NOTICE",
        "text": "Delete local store logs",
        "description": "The local store log file was deleted successfully"
    },
    "59102": {
        "code": 59102,
        "severity": "NOTICE",
        "text": "Delete local store logs",
        "description": "The local store log files were deleted successfully"
    },
    "59103": {
        "code": 59103,
        "severity": "NOTICE",
        "text": "Delete local store logs",
        "description": "Failed to delete the local store log files"
    },
    "59200": {
        "code": 59200,
        "severity": "NOTICE",
        "text": "Set log collector",
        "description": "The admin requested to set a log collector"
    },
    "59201": {
        "code": 59201,
        "severity": "NOTICE",
        "text": "Set log collector",
        "description": "A log collector was set successfully"
    },
    "59202": {
        "code": 59202,
        "severity": "NOTICE",
        "text": "Set log collector",
        "description": "An error occurred while setting a log collector"
    },
    "59203": {
        "code": 59203,
        "severity": "NOTICE",
        "text": "Resume log collector",
        "description": "The admin requested to resume the log collector"
    },
    "59204": {
        "code": 59204,
        "severity": "NOTICE",
        "text": "Resume log collector",
        "description": "The log collector was resumed successfully"
    },
    "59205": {
        "code": 59205,
        "severity": "NOTICE",
        "text": "Resume log collector",
        "description": "An error occurred while resuming the log collector"
    },
    "59206": {
        "code": 59206,
        "severity": "NOTICE",
        "text": "Suspend log collector",
        "description": "The admin requested to suspend the log collector"
    },
    "59207": {
        "code": 59207,
        "severity": "NOTICE",
        "text": "Suspend log collector",
        "description": "The log collector was suspended successfully"
    },
    "59208": {
        "code": 59208,
        "severity": "NOTICE",
        "text": "Suspend log collector",
        "description": "An error occurred while suspending the log collector"
    },
    "59250": {
        "code": 59250,
        "severity": "NOTICE",
        "text": "Administrator reset the access setting from CLI",
        "description": "The administrator successfully activated the access-setting command from the config-acs shell. See the command-line information within this message for details."
    },
    "59251": {
        "code": 59251,
        "severity": "NOTICE",
        "text": "Administrator activated/deactivated AD debug level from CLI",
        "description": "The administrator has successfully activated the debug-adclient command from the config-acs shell. See the command-line information within this message for details."
    },
    "59252": {
        "code": 59252,
        "severity": "NOTICE",
        "text": "Administrator changed component debug log level from CLI",
        "description": "The administrator has successfully activated the debug-log command from the config-acs shell. See the command-line information within this message for details."
    },
    "59253": {
        "code": 59253,
        "severity": "NOTICE",
        "text": "Administrator started export configuration data process from CLI",
        "description": "The administrator has successfully activated the export-data command from the config-acs shell. See the command-line information within this message for details."
    },
    "59254": {
        "code": 59254,
        "severity": "NOTICE",
        "text": "Administrator started export configuration data process from CLI",
        "description": "The administrator has successfully activated the import-data command from the config-acs shell. See the command-line information within this message for details."
    },
    "59255": {
        "code": 59255,
        "severity": "NOTICE",
        "text": "Administrator aborted import/export configuration data process from CLI",
        "description": "The administrator has successfully activated the import-export-abort command from the config-acs shell. See the command-line information within this message for details."
    },
    "59256": {
        "code": 59256,
        "severity": "NOTICE",
        "text": "Administrator started replication process from CLI",
        "description": "The administrator has successfully activated the replication command from the config-acs shell. See the command-line information within this message for details."
    },
    "59257": {
        "code": 59257,
        "severity": "NOTICE",
        "text": "Administrator reset management interface certificate from CLI",
        "description": "The administrator has successfully activated the reset-management-interface-certificate command from the config-acs shell. See the command-line information within this message for details."
    },
    "59258": {
        "code": 59258,
        "severity": "NOTICE",
        "text": "Administrator decrypted support bundle from CLI",
        "description": "The administrator has successfully activated the decrypt-support-bundle command from the config-acs shell. More details can be found in the command line information within this message"
    },
    "59259": {
        "code": 59259,
        "severity": "WARN",
        "text": "Replication failed",
        "description": "Replicated failed and will stop applying new configuration changes"
    },
    "60000": {
        "code": 60000,
        "severity": "NOTICE",
        "text": "Patch installation completed successfully on the node",
        "description": "Patch installation completed successfully on the node"
    },
    "60001": {
        "code": 60001,
        "severity": "NOTICE",
        "text": "Patch installation failed on the node",
        "description": "Patch installation failed on the node"
    },
    "60002": {
        "code": 60002,
        "severity": "NOTICE",
        "text": "Patch rollback completed successfully on the node",
        "description": "Patch rollback completed successfully on the node"
    },
    "60003": {
        "code": 60003,
        "severity": "NOTICE",
        "text": "Patch rollback failed on the node",
        "description": "Patch rollback failed on the node"
    },
    "60050": {
        "code": 60050,
        "severity": "NOTICE",
        "text": "Node added to deployment successfully",
        "description": "Node added to deployment successfully"
    },
    "60051": {
        "code": 60051,
        "severity": "NOTICE",
        "text": "Failed to add node to deployment",
        "description": "Failed to add node to deployment"
    },
    "60052": {
        "code": 60052,
        "severity": "NOTICE",
        "text": "Node removed from deployment",
        "description": "Node removed from deployment"
    },
    "60053": {
        "code": 60053,
        "severity": "NOTICE",
        "text": "Failed to remove node from deployment",
        "description": "Failed to remove node from deployment"
    },
    "60054": {
        "code": 60054,
        "severity": "NOTICE",
        "text": "Node updated successfully",
        "description": "Node updated successfully"
    },
    "60055": {
        "code": 60055,
        "severity": "NOTICE",
        "text": "Failed to update node",
        "description": "Failed to update node"
    },
    "60056": {
        "code": 60056,
        "severity": "NOTICE",
        "text": "The runtime status of the node group has changed",
        "description": "There is a change in the cluster state"
    },
    "60057": {
        "code": 60057,
        "severity": "NOTICE",
        "text": "A PSN node went down",
        "description": "One of the PSN nodes in the node group has gone down"
    },
    "60058": {
        "code": 60058,
        "severity": "NOTICE",
        "text": "The initial status of the heartbeat system",
        "description": "The initial status of the heartbeat system"
    },
    "60059": {
        "code": 60059,
        "severity": "NOTICE",
        "text": "Node has successfully registered with MnT",
        "description": "Node has successfully registered with MnT"
    },
    "60060": {
        "code": 60060,
        "severity": "NOTICE",
        "text": "Administrator invoked OCSP Clear Cache operation for all Policy Service nodes",
        "description": "The ISE Administrator invoked OCSP Clear Cache operation for all Policy Service nodes"
    },
    "60061": {
        "code": 60061,
        "severity": "NOTICE",
        "text": "OCSP Clear Cache operation completed successfully",
        "description": "OCSP Clear Cache operation completed successfully on all Policy Service nodes"
    },
    "60062": {
        "code": 60062,
        "severity": "NOTICE",
        "text": "OCSP Clear Cache operation terminated with error",
        "description": "OCSP Clear Cache clear operation terminated with error on one or more Policy Service nodes"
    },
    "60063": {
        "code": 60063,
        "severity": "NOTICE",
        "text": "Replication to node completed successfully",
        "description": "Replication of data to secondary node completed successfully"
    },
    "60064": {
        "code": 60064,
        "severity": "NOTICE",
        "text": "Replication to node failed",
        "description": "Replication of data to secondary node failed"
    },
    "60065": {
        "code": 60065,
        "severity": "NOTICE",
        "text": "The maximum number of Administrative sessions have been exceeded",
        "description": "The maximum number of Administrative sessions have been exceeded"
    },
    "60066": {
        "code": 60066,
        "severity": "NOTICE",
        "text": "The delta between the old and the new is not matched",
        "description": "The delta between the old and the new is not matched"
    },
    "60067": {
        "code": 60067,
        "severity": "INFO",
        "text": "Profiler Feed Service - automatic download intitiated",
        "description": "The Profiler Feed Service has begun the scheduled check and download of new and/or updated Profiles"
    },
    "60068": {
        "code": 60068,
        "severity": "INFO",
        "text": "Profiler Feed Service - manual download initiated",
        "description": "The Profiler Feed Service has begun the check and download of new and/or updated Profiles in response to Administrator's request"
    },
    "60069": {
        "code": 60069,
        "severity": "INFO",
        "text": "Profiler Feed Service - Profiles Downloaded",
        "description": "The Profiler Feed Service has downloaded new and/or updated Profiles"
    },
    "60070": {
        "code": 60070,
        "severity": "INFO",
        "text": "Profiler Feed Service - No Profiles Downloaded",
        "description": "The Profiler Feed Service found no new and/or updated Profiles to download"
    },
    "60071": {
        "code": 60071,
        "severity": "WARN",
        "text": "Feed Server communication issue",
        "description": "The Profiler Feed Service could not be reached"
    },
    "60072": {
        "code": 60072,
        "severity": "ERROR",
        "text": "Profiler Feed Service reported that the Feed is unavailable",
        "description": "The Feed that was queried for was not known by the Profiler Feed Service"
    },
    "60073": {
        "code": 60073,
        "severity": "ERROR",
        "text": "Querying the Profiler Feed Service resulted in an unexpected error",
        "description": "Received an unexpected error when querying the the Profiler Feed Service"
    },
    "60074": {
        "code": 60074,
        "severity": "ERROR",
        "text": "Importing downloaded profiles from the Profiler Feed Service resulted in an unexpected error",
        "description": "Received an unexpected error when importing downloaded profiles from the Profiler Feed Service"
    },
    "60075": {
        "code": 60075,
        "severity": "NOTICE",
        "text": "Sponsor has successfully authenticated",
        "description": "Sponsor has successfully authenticated"
    },
    "60076": {
        "code": 60076,
        "severity": "NOTICE",
        "text": "Sponsor authentication has failed",
        "description": "Sponsor authentication has failed; please see Failure Code for more details"
    },
    "60077": {
        "code": 60077,
        "severity": "NOTICE",
        "text": "MyDevices user authentication has failed",
        "description": "MyDevices user authentication has failed"
    },
    "60078": {
        "code": 60078,
        "severity": "INFO",
        "text": "MyDevices user has successfully authenticated",
        "description": "MyDevices user has successfully authenticated"
    },
    "60079": {
        "code": 60079,
        "severity": "INFO",
        "text": "A failure to establish an SSL session was detected",
        "description": "A failure to establish an SSL session was detected"
    },
    "60080": {
        "code": 60080,
        "severity": "INFO",
        "text": "A SSH CLI user has successfully logged in",
        "description": "A SSH CLI User has successfully logged in"
    },
    "60081": {
        "code": 60081,
        "severity": "INFO",
        "text": "A SSH CLI user has attempted unsuccessfully to login",
        "description": "A SSH CLI user has attempted unsuccessfully to login"
    },
    "60082": {
        "code": 60082,
        "severity": "INFO",
        "text": "A SSH CLI user has attempted to login, however account is locked out",
        "description": "A SSH CLI user has attempted to login, however account is locked out"
    },
    "60083": {
        "code": 60083,
        "severity": "INFO",
        "text": "Syslog Server configuration change",
        "description": "Syslog Server configuration change has occurred"
    },
    "60084": {
        "code": 60084,
        "severity": "INFO",
        "text": "ADEOS CLI user configuration change",
        "description": "Configuration change occurred for ADEOS CLI user"
    },
    "60085": {
        "code": 60085,
        "severity": "INFO",
        "text": "ADEOS Repository configuration change",
        "description": "Configuration change occurred for ADEOS repository"
    },
    "60086": {
        "code": 60086,
        "severity": "INFO",
        "text": "ADEOS SSH Service configuration change",
        "description": "Configuration change occurred for ADEOS SSH Service"
    },
    "60087": {
        "code": 60087,
        "severity": "INFO",
        "text": "ADEOS Maximum SSH CLI sessions configuration change",
        "description": "Configuration change occurred for ADEOS Maximum CLI sessions"
    },
    "60088": {
        "code": 60088,
        "severity": "INFO",
        "text": "ADEOS SNMP agent configuration change",
        "description": "Configuration change occurred for ADEOS SNMP agent"
    },
    "60089": {
        "code": 60089,
        "severity": "INFO",
        "text": "ADEOS CLI kron scheduler policy configuration change",
        "description": "Configuration change occurred for ADEOS CLI kron scheduler policy"
    },
    "60090": {
        "code": 60090,
        "severity": "INFO",
        "text": "ADEOS CLI kron scheduler occurence configuration change",
        "description": "Configuration change occurred for ADEOS CLI kron scheduler occurence"
    },
    "60091": {
        "code": 60091,
        "severity": "INFO",
        "text": "ADEOS CLI pre-login banner configuration change",
        "description": "Configuration change occurred for ADEOS CLI pre-login banner"
    },
    "60092": {
        "code": 60092,
        "severity": "INFO",
        "text": "ADEOS CLI post-login banner configuration change",
        "description": "Configuration change occurred for ADEOS CLI post-login banner"
    },
    "60093": {
        "code": 60093,
        "severity": "INFO",
        "text": "ISE Backup has started",
        "description": "ISE Backup has started"
    },
    "60094": {
        "code": 60094,
        "severity": "INFO",
        "text": "ISE Backup has completed successfully",
        "description": "ISE Backup has completed successfully"
    },
    "60095": {
        "code": 60095,
        "severity": "ERROR",
        "text": "ISE Backup has failed",
        "description": "ISE Backup has failed"
    },
    "60096": {
        "code": 60096,
        "severity": "INFO",
        "text": "ISE Log backup has started",
        "description": "ISE Log Backup has started"
    },
    "60097": {
        "code": 60097,
        "severity": "INFO",
        "text": "ISE Log Backup has completed successfully",
        "description": "ISE Log Backup has completed successfully"
    },
    "60098": {
        "code": 60098,
        "severity": "ERROR",
        "text": "ISE Log Backup has failed",
        "description": "ISE Log Backup has failed"
    },
    "60099": {
        "code": 60099,
        "severity": "INFO",
        "text": "ISE Restore has started",
        "description": "ISE Restore has started"
    },
    "60100": {
        "code": 60100,
        "severity": "INFO",
        "text": "ISE Restore has completed successfully",
        "description": "ISE Restore has completed successfully"
    },
    "60101": {
        "code": 60101,
        "severity": "ERROR",
        "text": "ISE Restore has failed",
        "description": "ISE Restore has failed"
    },
    "60102": {
        "code": 60102,
        "severity": "INFO",
        "text": "Application installation completed successfully",
        "description": "Application installation completed successfully"
    },
    "60103": {
        "code": 60103,
        "severity": "ERROR",
        "text": "Application installation failed",
        "description": "Application installation failed"
    },
    "60104": {
        "code": 60104,
        "severity": "INFO",
        "text": "Application remove started",
        "description": "Application remove started"
    },
    "60105": {
        "code": 60105,
        "severity": "INFO",
        "text": "Application remove completed successfully",
        "description": "Application remove completed successfully"
    },
    "60106": {
        "code": 60106,
        "severity": "ERROR",
        "text": "Application remove failed",
        "description": "Application remove failed"
    },
    "60107": {
        "code": 60107,
        "severity": "ERROR",
        "text": "Application upgrade failed",
        "description": "Application upgrade failed"
    },
    "60108": {
        "code": 60108,
        "severity": "INFO",
        "text": "Application patch started",
        "description": "Application patch started"
    },
    "60109": {
        "code": 60109,
        "severity": "INFO",
        "text": "Application patch remove has started",
        "description": "Application patch remove has started"
    },
    "60111": {
        "code": 60111,
        "severity": "INFO",
        "text": "Application patch remove has completed successfully",
        "description": "Application patch remove has completed successfully"
    },
    "60112": {
        "code": 60112,
        "severity": "ERROR",
        "text": "Application patch remove has failed",
        "description": "Application patch remove has failed"
    },
    "60113": {
        "code": 60113,
        "severity": "WARNING",
        "text": "ISE server reload has been initiated",
        "description": "ISE server reload has been initiated"
    },
    "60114": {
        "code": 60114,
        "severity": "WARNING",
        "text": "ISE server shutdown has been initiated",
        "description": "ISE server shutdown has been initiated"
    },
    "60115": {
        "code": 60115,
        "severity": "INFO",
        "text": "A CLI user has logged in from SSH",
        "description": "A CLI user has logged in from SSH"
    },
    "60116": {
        "code": 60116,
        "severity": "INFO",
        "text": "A CLI user has logged out from SSH",
        "description": "A CLI user has logged out from SSH"
    },
    "60117": {
        "code": 60117,
        "severity": "INFO",
        "text": "ADEOS CLI user has been force logged out",
        "description": "ADEOS CLI user has force logged out"
    },
    "60118": {
        "code": 60118,
        "severity": "INFO",
        "text": "ADEOS CLI user has used delete CLI to delete file",
        "description": "ADEOS CLI user has used delete CLI to delete file"
    },
    "60119": {
        "code": 60119,
        "severity": "INFO",
        "text": "ADEOS CLI user has used copy CLI to copy file",
        "description": "ADEOS CLI user has used copy CLI to copy file"
    },
    "60120": {
        "code": 60120,
        "severity": "INFO",
        "text": "ADEOS CLI user has used mkdir CLI to create a directory",
        "description": "ADEOS CLI user has used mkdir CLI to create a directory"
    },
    "60121": {
        "code": 60121,
        "severity": "INFO",
        "text": "ADEOS CLI user has copied out running system configuration",
        "description": "ADEOS CLI user has copied out running system configuration"
    },
    "60122": {
        "code": 60122,
        "severity": "INFO",
        "text": "ADEOS CLI user has copied in system configuration",
        "description": "ADEOS CLI user has copied in system configuration"
    },
    "60123": {
        "code": 60123,
        "severity": "INFO",
        "text": "ADEOS CLI user has saved running system configuration",
        "description": "ADEOS CLI user has saved running system configuration"
    },
    "60124": {
        "code": 60124,
        "severity": "WARNING",
        "text": "ADEOS CLI user failed to login because password has expired",
        "description": "ADEOS CLI user failed to login because password has expired"
    },
    "60125": {
        "code": 60125,
        "severity": "INFO",
        "text": "A malformed SSH requested has been detected",
        "description": "A malformed SSH requested has been detected"
    },
    "60126": {
        "code": 60126,
        "severity": "ERROR",
        "text": "Application patch installation failed",
        "description": "Application patch installation failed"
    },
    "60127": {
        "code": 60127,
        "severity": "ERROR",
        "text": "Maximum number of concurrent CLI sessions has been reached",
        "description": "Maximum number of concurrent CLI sessions has been reached"
    },
    "60128": {
        "code": 60128,
        "severity": "ERROR",
        "text": "Failure occurred trying to copy file in from ADEOS CLI",
        "description": "Failure occurred trying to copy file in from ADEOS CLI"
    },
    "60129": {
        "code": 60129,
        "severity": "ERROR",
        "text": "Failure occurred trying to copy file out from ADEOS CLI",
        "description": "Failure occurred trying to copy file out from ADEOS CLI"
    },
    "60130": {
        "code": 60130,
        "severity": "INFO",
        "text": "ISE Scheduled Backup has been configured",
        "description": "ISE Scheduled Backup has been configured"
    },
    "60131": {
        "code": 60131,
        "severity": "INFO",
        "text": "ISE Support bundle has been created from web UI",
        "description": "ISE Support bundle has been created from web UI"
    },
    "60132": {
        "code": 60132,
        "severity": "INFO",
        "text": "ISE Support bundle has been deleted from web UI",
        "description": "ISE Support bundle has been deleted from web UI"
    },
    "60133": {
        "code": 60133,
        "severity": "ERROR",
        "text": "ISE Support bundle generation from web UI has failed",
        "description": "ISE Support bundle generation from web UI has failed"
    },
    "60134": {
        "code": 60134,
        "severity": "FATAL",
        "text": "DNS Resolution failure",
        "description": "DNS Resolution failure on node"
    },
    "60135": {
        "code": 60135,
        "severity": "INFO",
        "text": "MyDevices user SSO logout has failed",
        "description": "MyDevices user SSO logout has failed"
    },
    "60136": {
        "code": 60136,
        "severity": "INFO",
        "text": "Sponsor user SSO logout has failed",
        "description": "Sponsor user SSO logout has failed"
    },
    "60150": {
        "code": 60150,
        "severity": "INFO",
        "text": "Slow Replication",
        "description": "Replication is slow"
    },
    "60151": {
        "code": 60151,
        "severity": "WARN",
        "text": "Slow Replication",
        "description": "Replication is slow"
    },
    "60152": {
        "code": 60152,
        "severity": "ERROR",
        "text": "Slow Replication",
        "description": "Replication is slow"
    },
    "60153": {
        "code": 60153,
        "severity": "INFO",
        "text": "Certificate has been exported",
        "description": "Certificate has been exported"
    },
    "60154": {
        "code": 60154,
        "severity": "INFO",
        "text": "Application patch install has completed successfully",
        "description": "Application patch install has completed successfully"
    },
    "60155": {
        "code": 60155,
        "severity": "INFO",
        "text": "Secure communication with syslog server established",
        "description": "Secure communication with syslog server established"
    },
    "60156": {
        "code": 60156,
        "severity": "WARN",
        "text": "Secure communication establishment with syslog server failed",
        "description": "Secure communication establishment with syslog server failed"
    },
    "60157": {
        "code": 60157,
        "severity": "ERROR",
        "text": "Unable to copy the exported report file to configured repository",
        "description": "Copying the exported report file to configured repository failed"
    },
    "60158": {
        "code": 60158,
        "severity": "INFO",
        "text": "All xGrid administrator actions are logged using this message",
        "description": "All xGrid administrator actions are logged using this message"
    },
    "60159": {
        "code": 60159,
        "severity": "INFO",
        "text": "Posture requirements update has started from the remote feed URL",
        "description": "The system received a request to check for posture requirement updates on remote feed URL. Update started."
    },
    "60160": {
        "code": 60160,
        "severity": "NOTICE",
        "text": "Successfully finished updating posture requirements from remote feed URL",
        "description": "The posture update from the remote feed URL has finished successfully"
    },
    "60161": {
        "code": 60161,
        "severity": "ERROR",
        "text": "Failed to update Posture requirements from the remote feed URL",
        "description": "The Posture update from the remote feed URL has failed"
    },
    "60162": {
        "code": 60162,
        "severity": "DEBUG",
        "text": "Checking for the updated Posture requirements on the remote feed URL",
        "description": "Starting the process of checking whether there are updated posture requirements on the remote feed URL"
    },
    "60163": {
        "code": 60163,
        "severity": "DEBUG",
        "text": "Processing the updated Posture requirements received from the remote feed URL",
        "description": "Starting to process updated posture requirements received from the remote feed URL"
    },
    "60164": {
        "code": 60164,
        "severity": "ERROR",
        "text": "NTP Service is down on the node",
        "description": "NTP Service is down on the node"
    },
    "60165": {
        "code": 60165,
        "severity": "ERROR",
        "text": "NTP failed to sync with configured servers",
        "description": "NTP failed to sync with the configured servers"
    },
    "60166": {
        "code": 60166,
        "severity": "WARN",
        "text": "Certificate will expire soon",
        "description": "Certificate Expiration warning"
    },
    "60167": {
        "code": 60167,
        "severity": "WARN",
        "text": "Certificate has expired",
        "description": "Certificate has expired"
    },
    "60168": {
        "code": 60168,
        "severity": "INFO",
        "text": "Session Repeat Count has reset successfully",
        "description": "Session Repeat Count has reset successfully"
    },
    "60169": {
        "code": 60169,
        "severity": "INFO",
        "text": "Session Repeat Count reset has failed",
        "description": "Session Repeat Count reset has failed"
    },
    "60170": {
        "code": 60170,
        "severity": "INFO",
        "text": "Resetting Repeat Count is successful for all sessions",
        "description": "Resetting Repeat Count is successful for all sessions"
    },
    "60171": {
        "code": 60171,
        "severity": "INFO",
        "text": "Resetting Repeat Count has failed for all sessions",
        "description": "Resetting Repeat Count has failed for all sessions"
    },
    "60172": {
        "code": 60172,
        "severity": "INFO",
        "text": "Alarm(s) has/have been acknowledged",
        "description": "These alarms are acknowledged and will not be displayed on the Dashboard"
    },
    "60173": {
        "code": 60173,
        "severity": "INFO",
        "text": "Outdated alarms are purged",
        "description": "Only latest 15000 alarms would be retained and rest of them are purged"
    },
    "60174": {
        "code": 60174,
        "severity": "ERROR",
        "text": "Could not add Certificate Revocation List",
        "description": "Could not add Certificate Revocation List. The Certificate Revocation List will not be used by ISE"
    },
    "60175": {
        "code": 60175,
        "severity": "ERROR",
        "text": "Could not download Certificate Revocation List",
        "description": "Could not download Certificate Revocation List. The Certificate Revocation List will not be used by ISE"
    },
    "60176": {
        "code": 60176,
        "severity": "INFO",
        "text": "Posture Update",
        "description": "Posture Update"
    },
    "60177": {
        "code": 60177,
        "severity": "ERROR",
        "text": "Application upgrade preparation failed",
        "description": "Application upgrade preparation failed"
    },
    "60178": {
        "code": 60178,
        "severity": "INFO",
        "text": "Application upgrade preparation successful",
        "description": "Application upgrade preparation successful"
    },
    "60179": {
        "code": 60179,
        "severity": "INFO",
        "text": "Application upgrade preparation started",
        "description": "Application upgrade preparation started"
    },
    "60180": {
        "code": 60180,
        "severity": "WARN",
        "text": "Syslog server Identity check failed",
        "description": "Syslog server Identity check failed, Secure communication not established with syslog server"
    },
    "60184": {
        "code": 60184,
        "severity": "INFO",
        "text": "A console CLI user has successfully logged in",
        "description": "A console CLI User has successfully logged in"
    },
    "60185": {
        "code": 60185,
        "severity": "INFO",
        "text": "A console CLI user has attempted unsuccessfully to login",
        "description": "A console CLI user has attempted unsuccessfully to login"
    },
    "60186": {
        "code": 60186,
        "severity": "INFO",
        "text": "A console CLI user has attempted to login, however account is locked out",
        "description": "A console CLI user has attempted to login, however account is locked out"
    },
    "60187": {
        "code": 60187,
        "severity": "INFO",
        "text": "Application upgrade succeeded",
        "description": "Application upgrade succeeded"
    },
    "60188": {
        "code": 60188,
        "severity": "INFO",
        "text": "An attempted SSH connection has failed",
        "description": "An attempted SSH connection has failed"
    },
    "60189": {
        "code": 60189,
        "severity": "INFO",
        "text": "Terminal Session timeout has been modified",
        "description": "Configuration change occurred for ADEOS CLI Terminal Session timeout"
    },
    "60190": {
        "code": 60190,
        "severity": "INFO",
        "text": "xGrid Administrator Action",
        "description": "xGrid Administrator Action"
    },
    "60191": {
        "code": 60191,
        "severity": "ERROR",
        "text": "Insufficient Virtual Machine Resources on node",
        "description": "Insufficient Virtual Machine Resources on node"
    },
    "60192": {
        "code": 60192,
        "severity": "ERROR",
        "text": "Firmware update required on node",
        "description": "Firmware update required on node"
    },
    "60193": {
        "code": 60193,
        "severity": "INFO",
        "text": "RSA key configuration has been modified",
        "description": "Configuration change occurred for ADEOS CLI RSA key"
    },
    "60194": {
        "code": 60194,
        "severity": "INFO",
        "text": "Host key configuration has been modified",
        "description": "Configuration change occurred for ADEOS CLI host key"
    },
    "60195": {
        "code": 60195,
        "severity": "INFO",
        "text": "CA Service started",
        "description": "CA Service started"
    },
    "60196": {
        "code": 60196,
        "severity": "INFO",
        "text": "CA Service stopped",
        "description": "CA Service stopped"
    },
    "60197": {
        "code": 60197,
        "severity": "NOTICE",
        "text": "Revoked ISE CA issued Certificate.",
        "description": "Certificate issued to Endpoint by ISE CA is revoked by Administrator"
    },
    "60198": {
        "code": 60198,
        "severity": "INFO",
        "text": "MnT purge event occurred",
        "description": "MnT purge event occurred"
    },
    "60199": {
        "code": 60199,
        "severity": "INFO",
        "text": "An IP-SGT mapping was deployed successfully",
        "description": "An IP-SGT mapping was deployed successfully to a TrustSec device"
    },
    "60200": {
        "code": 60200,
        "severity": "INFO",
        "text": "An IP-SGT mapping has failed deploying",
        "description": "An IP-SGT mapping has failed deploying to a TrustSec device"
    },
    "60201": {
        "code": 60201,
        "severity": "INFO",
        "text": "IP-SGT deployment to TrustSec device was successful",
        "description": "IP-SGT deployment to TrustSec device was successful"
    },
    "60202": {
        "code": 60202,
        "severity": "INFO",
        "text": "IP-SGT deployment to TrustSec device failed",
        "description": "IP-SGT deployment to TrustSec device failed"
    },
    "60203": {
        "code": 60203,
        "severity": "INFO",
        "text": "IP-SGT deployment to the TrustSec devices finished",
        "description": "IP-SGT deployment to the TrustSec devices finished"
    },
    "60204": {
        "code": 60204,
        "severity": "INFO",
        "text": "System root CLI account has successfully logged in",
        "description": "System root CLI account has successfully logged in"
    },
    "60205": {
        "code": 60205,
        "severity": "INFO",
        "text": "A CLI user has logged in from console",
        "description": "A CLI user has logged in from console"
    },
    "60206": {
        "code": 60206,
        "severity": "INFO",
        "text": "A CLI user has logged out from console",
        "description": "A CLI user has logged out from console"
    },
    "60207": {
        "code": 60207,
        "severity": "INFO",
        "text": "logging loglevel configuration has been modified",
        "description": "Configuration change occurred for ADEOS CLI logging loglevel"
    },
    "60208": {
        "code": 60208,
        "severity": "INFO",
        "text": "Root CA certificate has been replaced",
        "description": "Root CA certificate has been replaced"
    },
    "60209": {
        "code": 60209,
        "severity": "INFO",
        "text": "CA service enabled",
        "description": "CA service enabled"
    },
    "60210": {
        "code": 60210,
        "severity": "INFO",
        "text": "CA service disabled",
        "description": "CA service disabled"
    },
    "60211": {
        "code": 60211,
        "severity": "INFO",
        "text": "ISE acquired subordinate certificate authority from 3rd party CA server",
        "description": "ISE acquired subordinate certificate authority from 3rd party CA server"
    },
    "60212": {
        "code": 60212,
        "severity": "WARNING",
        "text": "Portal could not start on this node since Certificate tag is missing",
        "description": "Portal could not start on this node since Certificate tag is missing"
    },
    "60213": {
        "code": 60213,
        "severity": "INFO",
        "text": "CA keys were replaced by import operation",
        "description": "CA keys were replaced by import operation"
    },
    "60214": {
        "code": 60214,
        "severity": "INFO",
        "text": "CA keys were exported",
        "description": "CA keys were exported"
    },
    "60215": {
        "code": 60215,
        "severity": "INFO",
        "text": "Endpoint certs were marked expired",
        "description": "Endpoint certs were marked expired by daily scheduled job"
    },
    "60216": {
        "code": 60216,
        "severity": "INFO",
        "text": "Endpoint certs were purged",
        "description": "Endpoint certs were purged by daily scheduled job"
    },
    "60217": {
        "code": 60217,
        "severity": "WARN",
        "text": "Certificate replication failed and will be retried",
        "description": "The PAP failed to push a replicated certificate, such as a wildcard certificate, to a secondary node"
    },
    "60218": {
        "code": 60218,
        "severity": "WARN",
        "text": "Certificate replication failed",
        "description": "The PAP failed to push a replicated certificate, such as a wildcard certificate, to a secondary node"
    },
    "60219": {
        "code": 60219,
        "severity": "WARN",
        "text": "Administration Node has not received any PAN HA monitoring request from monitoring node",
        "description": "Administration Node has not received any PAN HA monitoring request from monitoring node"
    },
    "60221": {
        "code": 60221,
        "severity": "WARN",
        "text": "Misconfiguration in PAN HA monitoring",
        "description": "Misconfiguration in PAN HA monitoring"
    },
    "60222": {
        "code": 60222,
        "severity": "WARN",
        "text": "PAN is not reachable or unhealthy",
        "description": "PAN is not reachable or unhealthy"
    },
    "60223": {
        "code": 60223,
        "severity": "ERROR",
        "text": "PAN HA Promotion request failed",
        "description": "PAN HA Promotion request failed"
    },
    "60224": {
        "code": 60224,
        "severity": "INFO",
        "text": "Automatic failover to the Secondary PAN is successfully triggered",
        "description": "Automatic failover to the Secondary PAN is successfully triggered"
    },
    "60225": {
        "code": 60225,
        "severity": "ERROR",
        "text": "Unable to build the certificate chain",
        "description": "Two or more certificates have been found with same value of CN attribute in the subject field leading to certificate chain building error"
    },
    "60226": {
        "code": 60226,
        "severity": "INFO",
        "text": "Successfully performed CoA termination(s) for a user certificate being revoked",
        "description": "Successfully performed CoA termination(s) for a user certificate being revoked"
    },
    "60227": {
        "code": 60227,
        "severity": "INFO",
        "text": "Failed to perform a CoA termination",
        "description": "Please make sure that the NAD is configured to send the client MAC Address when making RADIUS access-requests to ISE"
    },
    "60228": {
        "code": 60228,
        "severity": "ERROR",
        "text": "MSE Server is unreachable",
        "description": "MSE Server is unreachable"
    },
    "60229": {
        "code": 60229,
        "severity": "INFO",
        "text": "MSE Server is back online",
        "description": "MSE Server is back online"
    },
    "60231": {
        "code": 60231,
        "severity": "INFO",
        "text": "Queried MSE server",
        "description": "MSE server was queried to get endpoint location"
    },
    "60232": {
        "code": 60232,
        "severity": "INFO",
        "text": "Started ongoing sessions check against automatically retrieved CRL",
        "description": "Started all ongoing TLS sessions check as soon as the CRL is downloaded."
    },
    "60233": {
        "code": 60233,
        "severity": "INFO",
        "text": "The endpoint session is terminated due to the revoked certificate",
        "description": "The endpoint session is terminated due to the revoked endpoint certificate, following the ongoing sessions check against downloaded CRL"
    },
    "60234": {
        "code": 60234,
        "severity": "ERROR",
        "text": "The SXP connection has been disconnected",
        "description": "The SXP connection has been disconnected"
    },
    "60235": {
        "code": 60235,
        "severity": "INFO",
        "text": "SXP connection succeeded",
        "description": "SXP connection succeeded"
    },
    "60236": {
        "code": 60236,
        "severity": "WARN",
        "text": "SXP connection failed",
        "description": "SXP connection failed"
    },
    "60237": {
        "code": 60237,
        "severity": "INFO",
        "text": "SXP binding is successful",
        "description": "SXP binding is successful"
    },
    "60238": {
        "code": 60238,
        "severity": "INFO",
        "text": "SXP binding failed",
        "description": "SXP binding failed"
    },
    "60239": {
        "code": 60239,
        "severity": "WARN",
        "text": "SXP binding conflict has occurred",
        "description": "SXP binding conflict has occurred"
    },
    "60400": {
        "code": 60400,
        "severity": "INFO",
        "text": "Policy elements have been generated based on network device profile configuration.",
        "description": "Policy elements have been generated based on network device profile configuration."
    },
    "60401": {
        "code": 60401,
        "severity": "INFO",
        "text": "Reminder: Assign NAD Profiles.",
        "description": "Network Access Devices now have a NAD Profile which defines their capabilities. All existing devices have been assigned a default Cisco NAD Profile which should be changed for non-Cisco devices."
    },
    "60451": {
        "code": 60451,
        "severity": "INFO",
        "text": "Telemetry is enabled on this deployment",
        "description": "Telemetry is enabled on this deployment"
    },
    "60452": {
        "code": 60452,
        "severity": "INFO",
        "text": "Telemetry is disabled on this deployment",
        "description": "Telemetry is disabled on this deployment"
    },
    "60453": {
        "code": 60453,
        "severity": "INFO",
        "text": "Telemetry messages were sent successfully",
        "description": "Telemetry messages were sent successfully"
    },
    "60454": {
        "code": 60454,
        "severity": "INFO",
        "text": "Telemetry messages were not sent successfully",
        "description": "Telemetry messages were not sent successfully"
    },
    "60455": {
        "code": 60455,
        "severity": "INFO",
        "text": "Easy Wired is selected on Allowed Protocol but Identity Mapping has NOT been activated",
        "description": "Easy Wired is selected on Allowed Protocol but Identity Mapping has NOT been activated"
    },
    "60456": {
        "code": 60456,
        "severity": "INFO",
        "text": "Started CRL/OCSP periodic certificate check",
        "description": "Started CRL/OCSP periodic certificate check"
    },
    "60457": {
        "code": 60457,
        "severity": "INFO",
        "text": "Authentication Type Method for Admin UI Access",
        "description": "Successful message for Authentication Type Method Configuration update"
    },
    "60458": {
        "code": 60458,
        "severity": "INFO",
        "text": "Authentication Type Method for Admin UI Access",
        "description": "Unsuccessful message for Authentication Type Method Configuration update"
    },
    "60459": {
        "code": 60459,
        "severity": "ERROR",
        "text": "SXP binding binding not propagated because binding threshold has been reached",
        "description": "SXP binding threshold reached"
    },
    "60460": {
        "code": 60460,
        "severity": "INFO",
        "text": "Account disabled due to inactivity",
        "description": "Account disabled due to inactivity"
    },
    "60461": {
        "code": 60461,
        "severity": "INFO",
        "text": "Account disabled due to user level date expiry",
        "description": "Account disabled due to user level date expiry"
    },
    "60462": {
        "code": 60462,
        "severity": "INFO",
        "text": "Account disabled due to global level date expiry",
        "description": "Account disabled due to global level date expiry"
    },
    "60463": {
        "code": 60463,
        "severity": "INFO",
        "text": "Account disabled due to global level days expiry",
        "description": "Account disabled due to global level days expiry"
    },
    "60464": {
        "code": 60464,
        "severity": "INFO",
        "text": "Smart Call Home messages were sent successfully",
        "description": "Smart Call Home messages were sent successfully"
    },
    "60465": {
        "code": 60465,
        "severity": "INFO",
        "text": "Smart Call Home messages were not sent successfully",
        "description": "Smart Call Home messages were not sent successfully"
    },
    "60501": {
        "code": 60501,
        "severity": "WARN",
        "text": "ERS xml input is a suspect for XSS or Injection attack",
        "description": "Please review your xml input"
    },
    "60502": {
        "code": 60502,
        "severity": "WARN",
        "text": "ERS identified deprecated url",
        "description": "The request url is deprecated and recommended avoid using it"
    },
    "60503": {
        "code": 60503,
        "severity": "WARN",
        "text": "ERS identified out-dated url",
        "description": "the request url is out-dated and recommended to use a newer one. This url will not be removed in future releases"
    },
    "60504": {
        "code": 60504,
        "severity": "WARN",
        "text": "ERS request content-type header is out-dated",
        "description": "The request resource version stated in the request content-type header is out-dated. That means that the resource schema has been modified. one or more attribute might been added or removed and to overcome that with out-dated schema, the ERS Engine will use default values"
    },
    "60505": {
        "code": 60505,
        "severity": "ERROR",
        "text": "ERS request rejected due to invalid input.",
        "description": "The ERS request was rejected because the input was invalid"
    },
    "60506": {
        "code": 60506,
        "severity": "ERROR",
        "text": "ERS request suspicious of malicious attack",
        "description": "The ERS request is suspicious of a malicious attack."
    },
    "60507": {
        "code": 60507,
        "severity": "ERROR",
        "text": "ERS request rejected due to unauthorized user.",
        "description": "ERS request was rejected because the user who sent the request is unauthorized."
    },
    "60508": {
        "code": 60508,
        "severity": "ERROR",
        "text": "ERS request was rejected due to illegal request on a non-primary node",
        "description": "The ERS request was rejected because an illegal request was sent to a non-primary node"
    },
    "60509": {
        "code": 60509,
        "severity": "ERROR",
        "text": "ERS request was denied as maximum possible connection was exceeded",
        "description": "ERS request was denied as maximum possible connection was exceeded"
    },
    "61001": {
        "code": 61001,
        "severity": "INFO",
        "text": "APIC self signed Certificate was used",
        "description": "Self signed Certificate was used ? ISE verified APIC using a self signed certificate."
    },
    "61002": {
        "code": 61002,
        "severity": "INFO",
        "text": "ISE has learned a new SGT from IEPG",
        "description": "ISE has learned a new SGT from IEPG"
    },
    "61003": {
        "code": 61003,
        "severity": "INFO",
        "text": "ISE has propagated a new EEPG to APIC",
        "description": "ISE has propagated a new EEPG to APIC."
    },
    "61004": {
        "code": 61004,
        "severity": "INFO",
        "text": "ISE has learned a new SXP mapping from APIC endpoint",
        "description": "ISE has learned a new SXP mapping from APIC endpoint"
    },
    "61005": {
        "code": 61005,
        "severity": "INFO",
        "text": "ISE has propagated a new endpoint(SXP mapping) to APIC",
        "description": "ISE has propagated a new endpoint(SXP mapping) to APIC"
    },
    "61006": {
        "code": 61006,
        "severity": "INFO",
        "text": "ISE has removed an SGT due to deleted IEPG",
        "description": "ISE has removed an SGT due to deleted IEPG"
    },
    "61007": {
        "code": 61007,
        "severity": "INFO",
        "text": "ISE has removed EEPG from APIC due to SGT deletion",
        "description": "ISE has removed EEPG from APIC due to SGT deletion"
    },
    "61008": {
        "code": 61008,
        "severity": "INFO",
        "text": "ISE has removed an SXP mapping due to endpoint deletion on APIC",
        "description": "ISE has removed an SXP mapping due to endpoint deletion on APIC"
    },
    "61009": {
        "code": 61009,
        "severity": "INFO",
        "text": "ISE has removed endpoint APIC due to SXP mapping removal a new SXP mapping to APIC",
        "description": "ISE has removed endpoint APIC due to SXP mapping removal a new SXP mapping to APIC"
    },
    "61010": {
        "code": 61010,
        "severity": "INFO",
        "text": "ISE has established connection to APIC",
        "description": "ISE has established connection to APIC"
    },
    "61011": {
        "code": 61011,
        "severity": "INFO",
        "text": "ISE was disconnected from APIC",
        "description": "ISE was disconnected from APIC"
    },
    "61012": {
        "code": 61012,
        "severity": "INFO",
        "text": "ISE has authenticated against APIC successfully",
        "description": "ISE has authenticated against APIC successfully"
    },
    "61013": {
        "code": 61013,
        "severity": "INFO",
        "text": "ISE failed to authenticate against APIC",
        "description": "ISE failed to authenticate against APIC"
    },
    "61014": {
        "code": 61014,
        "severity": "INFO",
        "text": "ISE has refreshed authentication against APIC successfully",
        "description": "ISE has refreshed authentication against APIC successfully"
    },
    "61015": {
        "code": 61015,
        "severity": "INFO",
        "text": "ISE failed to refresh authenticate against APIC",
        "description": "ISE failed to refresh authenticate against APIC"
    },
    "61016": {
        "code": 61016,
        "severity": "INFO",
        "text": "ISE failed to refresh EPG subscriber against APIC",
        "description": "ISE failed to refresh EPG subscriber against APIC"
    },
    "61017": {
        "code": 61017,
        "severity": "INFO",
        "text": "ISE failed to refresh endpoint subscriber against APIC",
        "description": "ISE failed to refresh endpoint subscriber against APIC"
    },
    "61018": {
        "code": 61018,
        "severity": "INFO",
        "text": "ISE failed to refresh EEPG subscriber against APIC",
        "description": "ISE failed to refresh EEPG subscriber against APIC"
    },
    "61020": {
        "code": 61020,
        "severity": "INFO",
        "text": "ISE failed to refresh L3EXTOUT subscriber against APIC",
        "description": "ISE failed to refresh L3EXTOUT subscriber against APIC"
    },
    "61021": {
        "code": 61021,
        "severity": "INFO",
        "text": "After 3 retries, ISE recieved EPG with class id: ANY. Ignoring this EPG",
        "description": "After 3 retries, ISE recieved EPG with class id: ANY. Ignoring this EPG"
    },
    "61022": {
        "code": 61022,
        "severity": "INFO",
        "text": "ISE has failed to propagate SGT to EEPG",
        "description": "ISE has failed to propagate SGT to EEPG"
    },
    "61023": {
        "code": 61023,
        "severity": "INFO",
        "text": "ISE has failed to learn IEPG from APIC",
        "description": "ISE has failed to learn IEPG from APIC"
    },
    "61024": {
        "code": 61024,
        "severity": "INFO",
        "text": "ISE has failed to parse VRF for EPG",
        "description": "ISE has failed to parse VRF for EPG"
    },
    "61025": {
        "code": 61025,
        "severity": "INFO",
        "text": "Open secure connection with TLS peer",
        "description": "Secure connection established with TLS peer"
    },
    "61026": {
        "code": 61026,
        "severity": "INFO",
        "text": "Shutdown secure connection with TLS peer",
        "description": "Secure connection with TLS peer shutdown"
    },
    "61027": {
        "code": 61027,
        "severity": "WARN",
        "text": "Received Invalid or Bad HTTP request",
        "description": "The system detected an invalid or bad HTTP request. This could be an attempted security attack"
    },
    "61028": {
        "code": 61028,
        "severity": "INFO",
        "text": "TrustSec deploy verification has started.",
        "description": "TrustSec deployment verification process has started."
    },
    "61029": {
        "code": 61029,
        "severity": "INFO",
        "text": "TrustSec deploy verification has finished.",
        "description": "TrustSec deployment verification process has finished."
    },
    "61030": {
        "code": 61030,
        "severity": "INFO",
        "text": "TrustSec deploy verification was canceled.",
        "description": "TrustSec deployment verification process was canceled as a new TrustSec deploy started."
    },
    "61031": {
        "code": 61031,
        "severity": "WARN",
        "text": "TrustSec deploy verification failed to reach NAD.",
        "description": "TrustSec deployment verification process failed to connect to a network access device."
    },
    "61032": {
        "code": 61032,
        "severity": "WARN",
        "text": "TrustSec deploy verification - policy difference.",
        "description": "TrustSec deploy verification process found a difference between a network access device and ISE TrustSec configuration."
    },
    "61033": {
        "code": 61033,
        "severity": "INFO",
        "text": "TrustSec deployment verification process succeeded.",
        "description": "ISE trustsec configuration was successfully deployed to all network access devices."
    },
    "61034": {
        "code": 61034,
        "severity": "INFO",
        "text": "Maximum resource limit reached.",
        "description": "Maximum resource limit reached."
    },
    "61035": {
        "code": 61035,
        "severity": "INFO",
        "text": "IP SGT static mapping has been sent to the NAD.",
        "description": "IP SGT static mapping has been sent to the NAD."
    },
    "61051": {
        "code": 61051,
        "severity": "INFO",
        "text": "Synflood-limit configured",
        "description": "Synflood-limit configured"
    },
    "61052": {
        "code": 61052,
        "severity": "INFO",
        "text": "rate-limit configured",
        "description": "rate-limit configured"
    },
    "61053": {
        "code": 61053,
        "severity": "WARN",
        "text": "Invalid user input detected. * \\ $ @ characters are not allowed",
        "description": "Invalid user input detected. * \\ $ @ characters are not allowed"
    },
    "61054": {
        "code": 61054,
        "severity": "ERROR",
        "text": "ISE found Invalid authorization profile",
        "description": "ISE found Invalid authorization profile"
    },
    "61055": {
        "code": 61055,
        "severity": "ERROR",
        "text": "The memory consumed by the queue is high",
        "description": "The memory consumed by the queue is high"
    },
    "61056": {
        "code": 61056,
        "severity": "ERROR",
        "text": "The federation link was down",
        "description": "The federation link was down"
    },
    "61057": {
        "code": 61057,
        "severity": "ERROR",
        "text": "The space available to the queue is low",
        "description": "The space available to the queue is low"
    },
    "61058": {
        "code": 61058,
        "severity": "ERROR",
        "text": "ISE has failed to update the APIC server with SGT/SGT-IP mappings",
        "description": "ISE has failed to update the APIC server with SGT/SGT-IP mappings"
    },
    "70000": {
        "code": 70000,
        "severity": "NOTICE",
        "text": "ISE Utilization",
        "description": "ISE Utilization"
    },
    "70001": {
        "code": 70001,
        "severity": "NOTICE",
        "text": "ISE Process Health",
        "description": "ISE Process Health"
    },
    "70002": {
        "code": 70002,
        "severity": "NOTICE",
        "text": "ISE Process Health Unavailable",
        "description": "ISE Process Health Unavailable"
    },
    "70010": {
        "code": 70010,
        "severity": "INFO",
        "text": "OCSP Statistics",
        "description": "OCSP Statistics"
    },
    "70011": {
        "code": 70011,
        "severity": "INFO",
        "text": "ISE Counters",
        "description": "ISE Counters"
    },
    "80001": {
        "code": 80001,
        "severity": "INFO",
        "text": "Profiler EndPoint collection event occurred",
        "description": "This message is generated when a profiler end point is collected"
    },
    "80002": {
        "code": 80002,
        "severity": "INFO",
        "text": "Profiler EndPoint profiling event occurred",
        "description": "This message is generated when a profiler end point is profiled"
    },
    "80003": {
        "code": 80003,
        "severity": "ERROR",
        "text": "Profiler Probe failed to load",
        "description": "This message is generated when a probe fails to start"
    },
    "80004": {
        "code": 80004,
        "severity": "INFO",
        "text": "Profiler Performance Counters Snapshot update event occurred",
        "description": "This message is generated when a new Profiler performance-counters snapshot is reported"
    },
    "80005": {
        "code": 80005,
        "severity": "INFO",
        "text": "Profiler Exception Action execution occurred",
        "description": "This message is generated when a profiler end point is profiled and matched an exception rule"
    },
    "80006": {
        "code": 80006,
        "severity": "INFO",
        "text": "Profiler is triggering Change Of Authorization Request",
        "description": "Profiler is triggering Change Of Authorization Request"
    },
    "80007": {
        "code": 80007,
        "severity": "DEBUG",
        "text": "Profiler SNMP request sent",
        "description": "This message is generated when profiler sends the SNMP request."
    },
    "80008": {
        "code": 80008,
        "severity": "DEBUG",
        "text": "Profiler SNMP response received",
        "description": "This message is generated when profiler receives the SNMP response."
    },
    "80009": {
        "code": 80009,
        "severity": "ERROR",
        "text": "Profiler SNMP request failure",
        "description": "This message is generated when profiler SNMP request fails."
    },
    "80010": {
        "code": 80010,
        "severity": "INFO",
        "text": "Profiler DNS request sent",
        "description": "This message is generated when profiler sends the DNS request."
    },
    "80013": {
        "code": 80013,
        "severity": "INFO",
        "text": "Profiler EndPoint feed profiling event occurred",
        "description": "Profiler re-profiles the endpoint due to Feed Service policy"
    },
    "80014": {
        "code": 80014,
        "severity": "INFO",
        "text": "Profiler EndPoint purge event occurred",
        "description": "This message is generated when a profiler end point purge policy is evaluated and matched"
    },
    "80015": {
        "code": 80015,
        "severity": "WARN",
        "text": "Profiler queue size limit has been reached.",
        "description": "Profiler queue size limit has been reached. Events received after the queue size limit has been reached will be dropped."
    },
    "80016": {
        "code": 80016,
        "severity": "WARN",
        "text": "Anomalous behavior detected",
        "description": "MAC spoofing detection is enabled and endpoints exhibit anomalous behavior"
    },
    "83001": {
        "code": 83001,
        "severity": "DEBUG",
        "text": "Posture request from endpoint matched the policy",
        "description": "Posture request from endpoint matched the policy"
    },
    "83003": {
        "code": 83003,
        "severity": "DEBUG",
        "text": "Received a reassessment request from an endpoint",
        "description": "A reassessment request is received from an endpoint"
    },
    "83007": {
        "code": 83007,
        "severity": "WARN",
        "text": "Terminating the non-compliant endpoint session",
        "description": "A change of authorization request is sent to the device for terminating the current non-compliant endpoint session"
    },
    "83009": {
        "code": 83009,
        "severity": "INFO",
        "text": "NAC agent on client is terminated",
        "description": "NAC agent on client is closed by the end user"
    },
    "83015": {
        "code": 83015,
        "severity": "INFO",
        "text": "Posture service is triggering a Change Of Authorization request",
        "description": "Posture service is triggering a new Change Of Authorization request due to changes in the session posture status"
    },
    "84002": {
        "code": 84002,
        "severity": "WARN",
        "text": "Provisioning is disabled. You are not allowed to perform any provisioning related operations at this time",
        "description": "Provisioning is disabled. You are not allowed to perform any provisioning related operations at this time"
    },
    "84003": {
        "code": 84003,
        "severity": "WARN",
        "text": "Posture component not provisioned due to version incompatibility with agent version",
        "description": "Posture component on server is not compatible with agent version, hence it is not provisioned"
    },
    "85000": {
        "code": 85000,
        "severity": "INFO",
        "text": "Endpoint Protection Service is triggering a Change Of Authorization request",
        "description": "Endpoint Protection Service is triggering a new Change Of Authorization request"
    },
    "86001": {
        "code": 86001,
        "severity": "INFO",
        "text": "Guest user has entered the guest portal login page",
        "description": "Guest user has entered the guest portal login page"
    },
    "86002": {
        "code": 86002,
        "severity": "INFO",
        "text": "Sponsor has suspended a guest user account",
        "description": "Sponsor has suspended a guest user account"
    },
    "86003": {
        "code": 86003,
        "severity": "INFO",
        "text": "Sponsor has enabled a guest user account",
        "description": "Sponsor has enabled a guest user account"
    },
    "86004": {
        "code": 86004,
        "severity": "INFO",
        "text": "Guest user has changed the password",
        "description": "Guest user has changed the password"
    },
    "86005": {
        "code": 86005,
        "severity": "INFO",
        "text": "Guest user has accepted the Use Policy",
        "description": "Guest user has accepted the use policy"
    },
    "86006": {
        "code": 86006,
        "severity": "INFO",
        "text": "Guest user account is created",
        "description": "Guest user account is created"
    },
    "86007": {
        "code": 86007,
        "severity": "INFO",
        "text": "Guest user account is updated",
        "description": "Guest user account is updated"
    },
    "86008": {
        "code": 86008,
        "severity": "INFO",
        "text": "Guest user account is deleted",
        "description": "Guest user account is deleted"
    },
    "86009": {
        "code": 86009,
        "severity": "INFO",
        "text": "Guest user is not found",
        "description": "Guest user record is not found in the database"
    },
    "86010": {
        "code": 86010,
        "severity": "INFO",
        "text": "Guest user authentication failed",
        "description": "Guest user authentication failed. Please check your password and account permission"
    },
    "86011": {
        "code": 86011,
        "severity": "INFO",
        "text": "Guest user is not enabled",
        "description": "Guest user authentication failed. User is not enabled. Please contact your system administrator"
    },
    "86012": {
        "code": 86012,
        "severity": "INFO",
        "text": "User declined Access-Use Policy",
        "description": "Guest User must accept Access-Use policy before network access is granted"
    },
    "86013": {
        "code": 86013,
        "severity": "INFO",
        "text": "Portal not found",
        "description": "Portal is not found in the database. Please contact your system administrator"
    },
    "86014": {
        "code": 86014,
        "severity": "INFO",
        "text": "User is suspended",
        "description": "User authentication failed. User account is suspended"
    },
    "86015": {
        "code": 86015,
        "severity": "INFO",
        "text": "Invalid Password Change",
        "description": "Invalid password change. Use correct password based on the password policy"
    },
    "86016": {
        "code": 86016,
        "severity": "INFO",
        "text": "Guest Timeout Exceeded",
        "description": "Timeout from server has exceeded the threshold. Please contact your system administrator"
    },
    "86017": {
        "code": 86017,
        "severity": "INFO",
        "text": "Session Missing",
        "description": "SessionID is missing. Please contact your System Administrator"
    },
    "86018": {
        "code": 86018,
        "severity": "INFO",
        "text": "Guest Change of Authorization Failed",
        "description": "Guest Change of Authorization has failed. Please contact your System Administrator"
    },
    "86019": {
        "code": 86019,
        "severity": "INFO",
        "text": "Guest User restricted",
        "description": "User access is restricted based on time profile. Please contact your system administrator"
    },
    "86020": {
        "code": 86020,
        "severity": "INFO",
        "text": "Guest Unknown Error",
        "description": "User authentication failed. Please contact your System Administrator"
    },
    "86021": {
        "code": 86021,
        "severity": "INFO",
        "text": "Entering Device Registration Web Authentication Portal",
        "description": "Entering Device Registration Web Authentication Portal"
    },
    "86022": {
        "code": 86022,
        "severity": "INFO",
        "text": "Device Registration Web Authentication AUP Accepted",
        "description": "Device Registration Web Authentication AUP (Acceptable Use Policy) accepted"
    },
    "86023": {
        "code": 86023,
        "severity": "INFO",
        "text": "Device Registration Web Authentication AUP Declined",
        "description": "Device Registration Web Authentication AUP (Acceptable Use Policy) declined"
    },
    "86024": {
        "code": 86024,
        "severity": "INFO",
        "text": "Device Registration Web Authentication Portal Endpoint Creation Passed",
        "description": "Device Registration Web Authentication Portal successfully created an endpoint"
    },
    "86025": {
        "code": 86025,
        "severity": "ERROR",
        "text": "Device Registration Web Authentication Portal Endpoint Creation Failed",
        "description": "Device Registration Web Authentication Portal failed to created an endpoint"
    },
    "86026": {
        "code": 86026,
        "severity": "ERROR",
        "text": "Device Registration Web Authentication Portal CoA Termination Failed",
        "description": "Device Registration Web Authentication Portal failed to perform a CoA termination"
    },
    "86027": {
        "code": 86027,
        "severity": "INFO",
        "text": "Device Registration Web Authentication sending CoA Termination message",
        "description": "Device Registration Web Authentication sending CoA Termination message"
    },
    "86028": {
        "code": 86028,
        "severity": "INFO",
        "text": "Successfully performed CoA termination(s) for a deleted guest or a suspended guest",
        "description": "Successfully performed CoA termination(s) for a deleted guest or a suspended guest"
    },
    "86029": {
        "code": 86029,
        "severity": "WARN",
        "text": "Failed to perform a CoA termination",
        "description": "Failed to perform a CoA termination"
    },
    "86030": {
        "code": 86030,
        "severity": "INFO",
        "text": "Sponsor user accepted the user policy",
        "description": "Indicates that a sponsor user accepted user policy"
    },
    "86031": {
        "code": 86031,
        "severity": "INFO",
        "text": "Sponsor user declined the user policy",
        "description": "Indicates that a sponsor user declined user policy"
    },
    "87000": {
        "code": 87000,
        "severity": "NOTICE",
        "text": "Received a posture report from an endpoint",
        "description": "Received a posture report from an endpoint"
    },
    "87001": {
        "code": 87001,
        "severity": "NOTICE",
        "text": "Posture service received a reassessment report from an endpoint",
        "description": "Received a PRA report request from an endpoint"
    },
    "87002": {
        "code": 87002,
        "severity": "NOTICE",
        "text": "Terminating endpoint session: reassessment timeout",
        "description": "A change of authorization request is sent to the device for terminating the current endpoint session per reassessment timeout"
    },
    "87004": {
        "code": 87004,
        "severity": "NOTICE",
        "text": "Posture service received a USB-check report from an endpoint",
        "description": "Received a USB-check report message from an endpoint"
    },
    "87500": {
        "code": 87500,
        "severity": "NOTICE",
        "text": "Client provisioning succeeded",
        "description": "Client provisioning succeeded"
    },
    "87501": {
        "code": 87501,
        "severity": "NOTICE",
        "text": "Client provisioning failed",
        "description": "Client provisioning failed"
    },
    "87600": {
        "code": 87600,
        "severity": "NOTICE",
        "text": "Supplicant provisioning succeeded",
        "description": "Supplicant provisioning for client succeeded"
    },
    "87601": {
        "code": 87601,
        "severity": "NOTICE",
        "text": "Supplicant provisioning failed",
        "description": "Supplicant provisioning failed"
    },
    "87602": {
        "code": 87602,
        "severity": "NOTICE",
        "text": "Supplicant provisioning is in progress",
        "description": "Supplicant provisioning is in progress"
    },
    "87603": {
        "code": 87603,
        "severity": "NOTICE",
        "text": "Supplicant provisioning disabled",
        "description": "Supplicant provisioning for client is disabled"
    },
    "87604": {
        "code": 87604,
        "severity": "WARN",
        "text": "CA Server is down",
        "description": "CA Server is down"
    },
    "87605": {
        "code": 87605,
        "severity": "INFO",
        "text": "CA Server is up",
        "description": "CA Server is up"
    },
    "87606": {
        "code": 87606,
        "severity": "ERROR",
        "text": "Certificate request forwarding failed",
        "description": "Certificate request forwarding failed"
    },
    "87607": {
        "code": 87607,
        "severity": "WARN",
        "text": "High volume of OCSP transactions",
        "description": "High volume of OCSP transactions"
    },
    "87608": {
        "code": 87608,
        "severity": "WARN",
        "text": "EST Service is down",
        "description": "EST Service is down"
    },
    "87609": {
        "code": 87609,
        "severity": "INFO",
        "text": "EST Service is up",
        "description": "EST Service is up"
    },
    "87750": {
        "code": 87750,
        "severity": "NOTICE",
        "text": "Endpoint Protection Service has received a request to perform an operation",
        "description": "Endpoint Protection Service performs the requested operation on an endpoint"
    },
    "87751": {
        "code": 87751,
        "severity": "NOTICE",
        "text": "Endpoint Protection Service has obtained the result of an operation",
        "description": "Endpoint Protection Service stores the result of an operation in the Operation Status"
    },
    "87752": {
        "code": 87752,
        "severity": "NOTICE",
        "text": "Manual Certificate Provisioning Portal - Request submitted",
        "description": "A certificate request is initiated from the Manual Certificate Provisioning Portal"
    },
    "87753": {
        "code": 87753,
        "severity": "NOTICE",
        "text": "Manual Certificate Provisioning Portal - Status Update",
        "description": "Status update to a certificate request"
    },
    "87754": {
        "code": 87754,
        "severity": "NOTICE",
        "text": "Manual Certificate Provisioning Portal - User login occurred",
        "description": "The new sessions is created for a user logging into the Manual Certificate Provisioning Portal"
    },
    "88000": {
        "code": 88000,
        "severity": "INFO",
        "text": "Successfully added a device (endpoint)",
        "description": "Successfully added a device (endpoint)"
    },
    "88001": {
        "code": 88001,
        "severity": "ERROR",
        "text": "Failed to added a device (endpoint)",
        "description": "Please verify that the MAC Address format is valid and that the MAC Address is not already registered"
    },
    "88002": {
        "code": 88002,
        "severity": "INFO",
        "text": "Successfully modified the device (endpoint)",
        "description": "Successfully modified the device (endpoint)"
    },
    "88003": {
        "code": 88003,
        "severity": "ERROR",
        "text": "Failed to modify the device (endpoint)",
        "description": "Endpoint may not exist or there is a communication error with server/db. Please contact your Administrator"
    },
    "88004": {
        "code": 88004,
        "severity": "INFO",
        "text": "Successfully deleted the device (endpoint)",
        "description": "Successfully deleted the device (endpoint)"
    },
    "88005": {
        "code": 88005,
        "severity": "ERROR",
        "text": "Failed to delete the device (endpoint)",
        "description": "Endpoint may not exist or there is a communication error with server/db. Please contact your Administrator"
    },
    "88006": {
        "code": 88006,
        "severity": "INFO",
        "text": "Successfully blacklisted the device (endpoint)",
        "description": "Successfully blacklisted the device (endpoint)"
    },
    "88007": {
        "code": 88007,
        "severity": "ERROR",
        "text": "Failed to blacklist the device (endpoint)",
        "description": "Endpoint may not exist or there is a communication error with server/db. Please contact your Administrator"
    },
    "88008": {
        "code": 88008,
        "severity": "INFO",
        "text": "Successfully reinstated the device (endpoint)",
        "description": "Successfully reinstated the device (endpoint)"
    },
    "88009": {
        "code": 88009,
        "severity": "ERROR",
        "text": "Failed to reinstate the device (endpoint)",
        "description": "Endpoint may not exist or there is a communication error with server/db. Please contact your Administrator"
    },
    "88010": {
        "code": 88010,
        "severity": "INFO",
        "text": "Successfully registered/provisioned the device (endpoint)",
        "description": "Successfully registered/provisioned the device (endpoint)"
    },
    "88011": {
        "code": 88011,
        "severity": "ERROR",
        "text": "Failed to register/provision the device (endpoint)",
        "description": "Please contact your Administrator"
    },
    "88012": {
        "code": 88012,
        "severity": "INFO",
        "text": "Successfully performed a CoA termination",
        "description": "Successfully performed a CoA termination"
    },
    "88013": {
        "code": 88013,
        "severity": "ERROR",
        "text": "Failed to perform a CoA termination",
        "description": "Please make sure that the NAD is configured to send the client MAC Address when making RADIUS access-requests to ISE."
    },
    "88014": {
        "code": 88014,
        "severity": "INFO",
        "text": "Successfully performed a CoA re-authentication",
        "description": "Successfully performed a CoA re-authentication"
    },
    "88015": {
        "code": 88015,
        "severity": "ERROR",
        "text": "Failed to perform a CoA re-authentication",
        "description": "Please contact your administrator"
    },
    "89000": {
        "code": 89000,
        "severity": "INFO",
        "text": "Mabile device manager unregistered",
        "description": "Device is not registered with Mobile device manager"
    },
    "89001": {
        "code": 89001,
        "severity": "INFO",
        "text": "Mobile device management compliant",
        "description": "Device is compliant with Mobile device management"
    },
    "89002": {
        "code": 89002,
        "severity": "INFO",
        "text": "Mobile device management non-compliant",
        "description": "Device is non-compliant with Mobile device management"
    },
    "89003": {
        "code": 89003,
        "severity": "WARN",
        "text": "Failed to connect to MDM server",
        "description": "Failed to connect to MDM server"
    },
    "89004": {
        "code": 89004,
        "severity": "ERROR",
        "text": "MDM server API version mismatch",
        "description": "MDM server API version doesn't match that configured in ISE"
    },
    "89005": {
        "code": 89005,
        "severity": "WARN",
        "text": "MDM server response error",
        "description": "MDM server response error"
    },
    "89050": {
        "code": 89050,
        "severity": "INFO",
        "text": "Administrative action submitted",
        "description": "An administrative action (of given type) has been submitted"
    },
    "89051": {
        "code": 89051,
        "severity": "INFO",
        "text": "Administrative action delivered to mobile device",
        "description": "Indicates that the mobile device has acknowledged the administrative action (of given type)"
    },
    "89052": {
        "code": 89052,
        "severity": "ERROR",
        "text": "Administrative action failed",
        "description": "Indicates that the mobile device has failed the administrative action (of given type)"
    },
    "89100": {
        "code": 89100,
        "severity": "INFO",
        "text": "Mobile device enrollment initiated",
        "description": "Indicates that the Mobile Device enrollment has started"
    },
    "89101": {
        "code": 89101,
        "severity": "ERROR",
        "text": "Mobile device enrollment failed",
        "description": "Mobile device enrollment terminated due to a reason"
    },
    "89102": {
        "code": 89102,
        "severity": "INFO",
        "text": "Mobile device enrolled successfully",
        "description": "Mobile Device is successfully enrolled"
    },
    "89103": {
        "code": 89103,
        "severity": "INFO",
        "text": "Mobile device deregistered",
        "description": "Unenrollment of a Mobile Device has completed"
    },
    "89104": {
        "code": 89104,
        "severity": "INFO",
        "text": "Mobile Device Service initialized",
        "description": "Mobile Device Service initialization is completed"
    },
    "89105": {
        "code": 89105,
        "severity": "ERROR",
        "text": "Mobile Device Service initialization failed",
        "description": "Mobile Device Service is unable to start"
    },
    "89106": {
        "code": 89106,
        "severity": "INFO",
        "text": "Mobile Device Service stopped",
        "description": "Mobile Device Service is terminated"
    },
    "89107": {
        "code": 89107,
        "severity": "ERROR",
        "text": "Unable to send notifications to mobile device",
        "description": "Indicates failures to notify mobile devices via Push Notification Systems"
    },
    "89108": {
        "code": 89108,
        "severity": "WARN",
        "text": "APNS Certificate is about to expire",
        "description": "Indicates that the APNS Certificate used for Notification services is about to expire soon"
    },
    "89109": {
        "code": 89109,
        "severity": "WARN",
        "text": "Endpoint certificate is going to expire soon.",
        "description": "Indicates that an endpoint certificate used for MDM operations is about to expire soon, within 1/2 of the configured renewal period, suggesting that its automatic renewal had previously failed."
    },
    "89110": {
        "code": 89110,
        "severity": "ERROR",
        "text": "Mobile Device check-in request is not authorized.",
        "description": "Indicates that the Mobile Device check-in request has not been authorized due to unknown/revoked/expired client certificate."
    },
    "89111": {
        "code": 89111,
        "severity": "INFO",
        "text": "Mobile Device check-in request is authorized.",
        "description": "Indicates that the Mobile Device check-in request has been authorized."
    },
    "89112": {
        "code": 89112,
        "severity": "INFO",
        "text": "Endpoint certificate is renewed.",
        "description": "Indicates that an endpoint certificate used for MDM operations is renewed."
    },
    "89113": {
        "code": 89113,
        "severity": "WARN",
        "text": "Inactive Mobile Device is detected",
        "description": "Indicates the mobile device is no longer active and possibly unenrolled"
    },
    "89114": {
        "code": 89114,
        "severity": "INFO",
        "text": "GeoLocation coordinates received",
        "description": "Indicates that the mobile device has responded with geolocation coordinates"
    },
    "89115": {
        "code": 89115,
        "severity": "INFO",
        "text": "Profile Installed",
        "description": "Indicates that the mobile device has installed a profile. Profile information is provided in event details attribute"
    },
    "89116": {
        "code": 89116,
        "severity": "INFO",
        "text": "Profile Removed",
        "description": "Indicates that the mobile device has removed a profile. Profile information is provided in event details attribute"
    },
    "89117": {
        "code": 89117,
        "severity": "INFO",
        "text": "Application Installed",
        "description": "Indicates that the mobile device has installed an application. Application information is provided in event details attribute"
    },
    "89118": {
        "code": 89118,
        "severity": "INFO",
        "text": "Application Removed",
        "description": "Indicates that the mobile device has removed an application. Application information is provided in event details attribute"
    },
    "89119": {
        "code": 89119,
        "severity": "WARN",
        "text": "Device reassessment has failed.",
        "description": "Indicates that periodic, administrator or user initiated device reassessment has failed. The event details include the failure reason."
    },
    "89132": {
        "code": 89132,
        "severity": "WARN",
        "text": "Endpoint certificate is going to expire soon.",
        "description": "Indicates that an endpoint certificate used for MDM operations is about to expire soon, within 1/4 of the configured renewal period, suggesting that its automatic renewal according to the configured renewal period had previously failed."
    },
    "89133": {
        "code": 89133,
        "severity": "ERROR",
        "text": "Endpoint certificate has expired.",
        "description": "Indicates that an endpoint certificate used for MDM operations has expired. The mobile device must be re-enrolled."
    },
    "89142": {
        "code": 89142,
        "severity": "ERROR",
        "text": "Provisioning operation failed.",
        "description": "Indicates that a provisioning operation (profile/application) has failed. Profile/Application information and the failure reason is provided in the event details."
    },
    "89143": {
        "code": 89143,
        "severity": "INFO",
        "text": "Mobile device record is updated with new device information",
        "description": "Indicates that the mobile device information (OS version, AnyConnect version, etc) has been retrieved and the database record is updated. The updated information is provided in the event details."
    },
    "89144": {
        "code": 89144,
        "severity": "WARN",
        "text": "Endpoint certificate renewal has failed.",
        "description": "Indicates that renewal of an endpoint certificate used for MDM operations has failed. Certificate renewal will be reattempted during the next periodic reassessment."
    },
    "89149": {
        "code": 89149,
        "severity": "INFO",
        "text": "Mobile device is compliant",
        "description": "Indicates the device is compliant with mobile device management policies"
    },
    "89150": {
        "code": 89150,
        "severity": "INFO",
        "text": "Mobile device is not compliant",
        "description": "Indicates the device is not compliant with mobile device management policies"
    },
    "89151": {
        "code": 89151,
        "severity": "WARN",
        "text": "Certificate issued by external CA can be revoked because the mobile device no longer uses it.",
        "description": "Indicates that a client certificate generated by an external CA is no longer needed on the mobile device. It can be manually revoked for additional security."
    },
    "89152": {
        "code": 89152,
        "severity": "INFO",
        "text": "Mobile device unenrollment initiated",
        "description": "Indicates that the Mobile Device unenrollment has started"
    },
    "89153": {
        "code": 89153,
        "severity": "ERROR",
        "text": "Certificates missing for Notification Systems.",
        "description": "Indicates that one or more identity certificates required for authenticating ISE to Mobile Device Notification Systems have not been configured."
    },
    "89154": {
        "code": 89154,
        "severity": "ERROR",
        "text": "Apple Volume Purchase Plan (VPP) service token is invalid.",
        "description": "Indicates that service token for Apple Volume Purchase Plan (VPP) is invalid."
    },
    "89155": {
        "code": 89155,
        "severity": "ERROR",
        "text": "Failed to access Apple Volume Purchase Plan (VPP) services.",
        "description": "Errors encountered accessing Apple Volume Purchase Plan (VPP) service. More information is provided in the event details."
    },
    "89156": {
        "code": 89156,
        "severity": "ERROR",
        "text": "CMCS server unreachable",
        "description": "ISE is unable to communicate with the Cisco MDM Cloud Service"
    },
    "89157": {
        "code": 89157,
        "severity": "ERROR",
        "text": "CMCS authentication failure",
        "description": "ISE is unable to authenticate with the Cisco MDM Cloud Service"
    },
    "89158": {
        "code": 89158,
        "severity": "ERROR",
        "text": "APNS server unreachable",
        "description": "ISE is unable to communicate with the Apple Push Notification System (APNS)"
    },
    "89159": {
        "code": 89159,
        "severity": "ERROR",
        "text": "APNS authentication failure",
        "description": "ISE is unable to authenticate with the Apple Push Notification System (APNS)"
    },
    "89160": {
        "code": 89160,
        "severity": "INFO",
        "text": "MDM User Authentication completed",
        "description": "The User Authentication part of mobile device enrollment has completed"
    },
    "89200": {
        "code": 89200,
        "severity": "ERROR",
        "text": "Invalid payload encountered in inmobile device enrollment request.",
        "description": "Indicates that the enrollment request contains an invalid payload."
    },
    "89201": {
        "code": 89201,
        "severity": "ERROR",
        "text": "Invalid session encountered in mobile device enrollment request.",
        "description": "Indicates that the enrollment request contains invalid session information."
    },
    "89202": {
        "code": 89202,
        "severity": "ERROR",
        "text": "Authentication failure encountered while handling mobile device enrollment request.",
        "description": "Indicates that the enrollment request has failed due to authentication failure."
    },
    "89203": {
        "code": 89203,
        "severity": "ERROR",
        "text": "Authorization failure encountered while handling mobile device enrollment request.",
        "description": "Indicates that the enrollment request contains invalid authorization information."
    },
    "89204": {
        "code": 89204,
        "severity": "ERROR",
        "text": "Authorization failure encountered while handling mobile device enrollment request. The user must uninstall the iOS MDM profile before retrying the enrollment.",
        "description": "Indicates that the enrollment request contains invalid authorization information. The user must uninstall the iOS MDM profile before retrying the enrollment."
    },
    "89205": {
        "code": 89205,
        "severity": "ERROR",
        "text": "Internal error encountered while handling mobile device enrollment request.",
        "description": "Indicates that the enrollment request has failed due to an ISE internal error."
    },
    "89206": {
        "code": 89206,
        "severity": "ERROR",
        "text": "Mobile device enrollment attempt has expired.",
        "description": "Indicates that the enrollment attempt did not complete within an acceptable time frame."
    },
    "89207": {
        "code": 89207,
        "severity": "ERROR",
        "text": "Unsupported mobile device platform encountered while handling enrollment request.",
        "description": "Indicates that the mobile device does not meet the minimum platform version requirements. The platform version is included in the event details."
    },
    "89208": {
        "code": 89208,
        "severity": "ERROR",
        "text": "Maximum number of authentication attempts has been exceeded.",
        "description": "Indicates that the maximum number of authentication attempts has been exceeded during enrollment."
    },
    "89209": {
        "code": 89209,
        "severity": "ERROR",
        "text": "Mobile device enrollment request failed due to no matching MDM profile.",
        "description": "Indicates that no MDM profile is configured for this mobile device."
    },
    "89210": {
        "code": 89210,
        "severity": "ERROR",
        "text": "Mobile device enrollment request failed due to unconfigured MDM trust anchor",
        "description": "Indicates that the MDM trust anchor has not been configured. The device cannot be enrolled."
    },
    "89211": {
        "code": 89211,
        "severity": "ERROR",
        "text": "Invalid payload encountered in inmobile device check-in request.",
        "description": "Indicates that the check-in request contains an invalid payload."
    },
    "89212": {
        "code": 89212,
        "severity": "ERROR",
        "text": "Unsupported mobile device platform encountered while handling check-in request.",
        "description": "Indicates that the mobile device does not meet the minimum platform version requirements. The platform version is included in the event details."
    },
    "89213": {
        "code": 89213,
        "severity": "ERROR",
        "text": "Profile signing failed.",
        "description": "Indicates that the cryptographic signing of the profile via the configured profile signing certificate has failed."
    },
    "89214": {
        "code": 89214,
        "severity": "ERROR",
        "text": "Profile encryption failed.",
        "description": "Indicates that the cryptographic encryption of the profile has failed."
    },
    "89215": {
        "code": 89215,
        "severity": "ERROR",
        "text": "Invalid payload encountered while handling profile provisioning request.",
        "description": "Indicates that the profile provisioning request has failed due to an invalid payload being encountered."
    },
    "89216": {
        "code": 89216,
        "severity": "ERROR",
        "text": "Authorization failure encountered while handling profile provisioning request.",
        "description": "Indicates that the profile provisioning request has failed due to an authorization failure."
    },
    "89217": {
        "code": 89217,
        "severity": "ERROR",
        "text": "Internal error encountered while handling profile provisioning request.",
        "description": "Indicates that the profile provisioning request has failed due to an ISE internal error."
    },
    "89218": {
        "code": 89218,
        "severity": "ERROR",
        "text": "Profile signing failed due to misconfiguration of the MDM certificate.",
        "description": "Indicates that the cryptographic signing of the profile has failed due to misconfiguration of the MDM certificate chain."
    },
    "89219": {
        "code": 89219,
        "severity": "ERROR",
        "text": "The application request timed out.",
        "description": "Indicates that the application request has timed out."
    },
    "89220": {
        "code": 89220,
        "severity": "ERROR",
        "text": "Internal error encountered while handling application request.",
        "description": "Indicates that the application request has failed due to an ISE internal error."
    },
    "89221": {
        "code": 89221,
        "severity": "ERROR",
        "text": "The profile request timed out",
        "description": "Indicates that the profile request has timed out"
    },
    "89222": {
        "code": 89222,
        "severity": "ERROR",
        "text": "Maximum number of token resets exceeded",
        "description": "Indicates the user has exceeded the maximum number of token reset attempts and needs to wait until they can reset their token again"
    },
    "89223": {
        "code": 89223,
        "severity": "ERROR",
        "text": "Failed to send token",
        "description": "Indicates a token could not be sent to the user using the configured SMS or email information"
    },
    "89224": {
        "code": 89224,
        "severity": "ERROR",
        "text": "Token configurations are incomplete",
        "description": "Indicates token configurations are incomplete. Please ensure SMS or email information has been configured for the user"
    },
    "90046": {
        "code": 90046,
        "severity": "ERROR",
        "text": "Internal error",
        "description": "Internal error"
    },
    "90047": {
        "code": 90047,
        "severity": "INFO",
        "text": "PassiveID is now the primary node",
        "description": "PassiveID is now the primary node"
    },
    "90048": {
        "code": 90048,
        "severity": "INFO",
        "text": "PassiveID is no longer the primary node",
        "description": "PassiveID is no longer the primary node"
    },
    "90049": {
        "code": 90049,
        "severity": "INFO",
        "text": "PassiveID primary node was elected",
        "description": "PassiveID primary node was elected"
    },
    "90050": {
        "code": 90050,
        "severity": "ERROR",
        "text": "PassiveID primary node is not responsive",
        "description": "PassiveID primary node is not responsive"
    },
    "90051": {
        "code": 90051,
        "severity": "INFO",
        "text": "Service started",
        "description": "Service started"
    },
    "90052": {
        "code": 90052,
        "severity": "ERROR",
        "text": "Keep alive between PassiveID services is unavailable",
        "description": "Keep alive between PassiveID services is unavailable"
    },
    "90053": {
        "code": 90053,
        "severity": "ERROR",
        "text": "Cannot resolve PassiveID service name",
        "description": "Cannot resolve PassiveID service name"
    },
    "90054": {
        "code": 90054,
        "severity": "INFO",
        "text": "Active PassiveID service is set",
        "description": "Active PassiveID service is set"
    },
    "90055": {
        "code": 90055,
        "severity": "INFO",
        "text": "Standby PassiveID service is set",
        "description": "Standby PassiveID service is set"
    },
    "90056": {
        "code": 90056,
        "severity": "ERROR",
        "text": "Service cannot apply configuration, service is unavailable",
        "description": "Service cannot apply configuration, service is unavailable"
    },
    "90057": {
        "code": 90057,
        "severity": "INFO",
        "text": "Service applied configuration",
        "description": "Service applied configuration"
    },
    "90058": {
        "code": 90058,
        "severity": "ERROR",
        "text": "Cannot resolve hostname",
        "description": "Cannot resolve hostname"
    },
    "90059": {
        "code": 90059,
        "severity": "ERROR",
        "text": "Cannot get Domain Controller Windows version",
        "description": "Cannot get Domain Controller Windows version"
    },
    "90060": {
        "code": 90060,
        "severity": "ERROR",
        "text": "Domain Controller Windows version is unsupported",
        "description": "Domain Controller Windows version is unsupported"
    },
    "90061": {
        "code": 90061,
        "severity": "ERROR",
        "text": "Cannot get Domain Controller NetBIOS",
        "description": "Cannot get Domain Controller NetBIOS"
    },
    "90062": {
        "code": 90062,
        "severity": "ERROR",
        "text": "Cannot connect to Domain Controller",
        "description": "Cannot connect to Domain Controller"
    },
    "90063": {
        "code": 90063,
        "severity": "INFO",
        "text": "Successfully establish connection to Domain Controller",
        "description": "Successfully establish connection to Domain Controller"
    },
    "90064": {
        "code": 90064,
        "severity": "ERROR",
        "text": "Cannot get history login events",
        "description": "Cannot get history login events"
    },
    "90065": {
        "code": 90065,
        "severity": "DEBUG",
        "text": "Received history login events",
        "description": "Received history login events"
    },
    "90066": {
        "code": 90066,
        "severity": "ERROR",
        "text": "Lost connection with Domain Controller",
        "description": "Lost connection with Domain Controller"
    },
    "90067": {
        "code": 90067,
        "severity": "DEBUG",
        "text": "Received login event",
        "description": "Received login event"
    },
    "90068": {
        "code": 90068,
        "severity": "DEBUG",
        "text": "Received machine login event",
        "description": "Received machine login event"
    },
    "90069": {
        "code": 90069,
        "severity": "DEBUG",
        "text": "Replaced local IP",
        "description": "Replaced local IP"
    },
    "90070": {
        "code": 90070,
        "severity": "WARN",
        "text": "Received incorrect login event",
        "description": "Received incorrect login event"
    },
    "90071": {
        "code": 90071,
        "severity": "WARN",
        "text": "Received unsupported login event",
        "description": "Received unsupported login event"
    },
    "90072": {
        "code": 90072,
        "severity": "DEBUG",
        "text": "Filtered login event",
        "description": "Filtered login event"
    },
    "90073": {
        "code": 90073,
        "severity": "ERROR",
        "text": "Login events are being dropped as storage size has been exceeded",
        "description": "Login events are being dropped as storage size has been exceeded"
    },
    "90074": {
        "code": 90074,
        "severity": "DEBUG",
        "text": "Forwarded login event to session directory",
        "description": "Forwarded login event to session directory"
    },
    "90075": {
        "code": 90075,
        "severity": "ERROR",
        "text": "Cannot forward login event to session directory",
        "description": "Cannot forward login event to session directory"
    },
    "90076": {
        "code": 90076,
        "severity": "INFO",
        "text": "The number of events handled in the last 24 hours",
        "description": "The number of events handled in the last 24 hours"
    },
    "90077": {
        "code": 90077,
        "severity": "DEBUG",
        "text": "The number of events handled in the last hour",
        "description": "The number of events handled in the last hour"
    },
    "90078": {
        "code": 90078,
        "severity": "INFO",
        "text": "Closed connection to Domain Controller",
        "description": "Closed connection to Domain Controller"
    },
    "90079": {
        "code": 90079,
        "severity": "INFO",
        "text": "Service shutdown",
        "description": "Service shutdown"
    },
    "90080": {
        "code": 90080,
        "severity": "NOTICE",
        "text": "PassiveID service collected details",
        "description": "PassiveID service collected details"
    },
    "90081": {
        "code": 90081,
        "severity": "ERROR",
        "text": "Failed to start REST server",
        "description": "Failed to start REST server"
    },
    "90082": {
        "code": 90082,
        "severity": "ERROR",
        "text": "Failed to open syslog port",
        "description": "Failed to open syslog port"
    },
    "90083": {
        "code": 90083,
        "severity": "NOTICE",
        "text": "Forwarded logout event to session directory",
        "description": "Forwarded logout event to session directory"
    },
    "90084": {
        "code": 90084,
        "severity": "INFO",
        "text": "Endpoint Probe Service is Starting",
        "description": "Endpoint Probe Service is Starting"
    },
    "90085": {
        "code": 90085,
        "severity": "INFO",
        "text": "Endpoint Probe Service Stoped",
        "description": "Endpoint Probe Service stop"
    },
    "90086": {
        "code": 90086,
        "severity": "FATAL",
        "text": "Endpoint Probe unexpected service termination",
        "description": "Endpoint Probe Service stop"
    },
    "90088": {
        "code": 90088,
        "severity": "INFO",
        "text": "Endpoint Probe configuration update domain admin list",
        "description": "Endpoint probe can only monitor known domain admins , list been updated"
    },
    "90089": {
        "code": 90089,
        "severity": "DEBUG",
        "text": "Endpoint Probe configuration update domain information",
        "description": "Endpoint probe can only monitor known domain admins , list been updated"
    },
    "90090": {
        "code": 90090,
        "severity": "INFO",
        "text": "Endpoint Probe configuration deleted a domain admin",
        "description": "Endpoint probe can only monitor known domain admins , list been updated"
    },
    "90091": {
        "code": 90091,
        "severity": "INFO",
        "text": "Endpoint Probe service status changed to disabled",
        "description": "Endpoint Probe service status changed to disabled"
    },
    "90092": {
        "code": 90092,
        "severity": "INFO",
        "text": "Endpoint Probe service status changed to enabled",
        "description": "Endpoint Probe service status changed to enabled"
    },
    "90093": {
        "code": 90093,
        "severity": "INFO",
        "text": "Endpoint Probe service status changed result with ERROR !",
        "description": "Failed to change current probe status , please check debug logs for detailed information"
    },
    "90094": {
        "code": 90094,
        "severity": "INFO",
        "text": "Endpoint Probe service status changed result with ERROR !",
        "description": "Failed to change current probe status , please check debug logs for detailed information"
    },
    "90095": {
        "code": 90095,
        "severity": "INFO",
        "text": "Endpoint Probe service status changed to enabled !",
        "description": "PIC mode only , Endpoint Probe Setting set to Enabled"
    },
    "90096": {
        "code": 90096,
        "severity": "INFO",
        "text": "Endpoint Probe service status changed to disabled !",
        "description": "PIC mode only , Endpoint Probe Setting set to disabled"
    },
    "90097": {
        "code": 90097,
        "severity": "ERROR",
        "text": "Endpoint Probe configuration apply new configuration result with error",
        "description": "Create Endpoint Probe configuration was not successful. Please try service restated in order to fix the issue"
    },
    "90098": {
        "code": 90098,
        "severity": "ERROR",
        "text": "Endpoint Probe delete configuration result with error",
        "description": "Delete Endpoint Probe configuration was not successful. Please try service restated in order to fix the issue"
    },
    "90099": {
        "code": 90099,
        "severity": "ERROR",
        "text": "Endpoint Probe update configuration result with error",
        "description": "Update Endpoint Probe configuration was not successful. Please try service restated in order to fix the issue"
    },
    "90100": {
        "code": 90100,
        "severity": "ERROR",
        "text": "Endpoint Probe Manual Check completed with error",
        "description": "Unexpected error occur during endpoint manual check request"
    },
    "90101": {
        "code": 90101,
        "severity": "INFO",
        "text": "Endpoint Probe Manual Check starting",
        "description": "Starting manual endpoint check"
    },
    "90102": {
        "code": 90102,
        "severity": "INFO",
        "text": "Endpoint Probe Scheduler starting",
        "description": "Starting to check endpoints. Retrieving list of session to query"
    },
    "90103": {
        "code": 90103,
        "severity": "DEBUG",
        "text": "Endpoint Probe complete fetching endpoint list to verify current login identity",
        "description": "Retrieved list of endpoints to query"
    },
    "90104": {
        "code": 90104,
        "severity": "INFO",
        "text": "Endpoint Probe monitor check completed successfully.",
        "description": "Done querying all endpoints"
    },
    "90105": {
        "code": 90105,
        "severity": "ERROR",
        "text": "Endpoint Probe monitor check completed with ERROR",
        "description": "Endpoint check completed unsuccessfully"
    },
    "90106": {
        "code": 90106,
        "severity": "DEBUG",
        "text": "Endpoint Probe Scheduler Manager Starting",
        "description": "Setting probe to check endpoints periodically"
    },
    "90107": {
        "code": 90107,
        "severity": "DEBUG",
        "text": "Endpoint Probe Scheduler Manager canceled",
        "description": "Stopped querying new endpoints"
    },
    "90108": {
        "code": 90108,
        "severity": "DEBUG",
        "text": "Endpoint Probe enabling WMI on Endpoint",
        "description": "WMI Services were not enabled on the endpoint and were enabled for further checks"
    },
    "90109": {
        "code": 90109,
        "severity": "DEBUG",
        "text": "Endpoint Probe failed to enable WMI on Endpoint",
        "description": "Failed to enable WMI on endpoint. Please verify Active Directory configuration credentials"
    },
    "90110": {
        "code": 90110,
        "severity": "DEBUG",
        "text": "Endpoint Probe enabling WMI on Endpoint",
        "description": "WMI Services are not enable on endpoint will be set for further checks ."
    },
    "90111": {
        "code": 90111,
        "severity": "DEBUG",
        "text": "Endpoint domain admin credentials are not known for provided DOMAIN",
        "description": "chekc your PassiveID Active Directory configuration , is that a known DOMAIN ?"
    },
    "90112": {
        "code": 90112,
        "severity": "DEBUG",
        "text": "Endpoint probe check result with user is still active",
        "description": "The current known user is still logged on"
    },
    "90113": {
        "code": 90113,
        "severity": "DEBUG",
        "text": "Endpoint probe check result with user is still active",
        "description": "The current known user is no longer logged on. Removing the session"
    },
    "90114": {
        "code": 90114,
        "severity": "DEBUG",
        "text": "Endpoint probe check result with unreachable endpoint",
        "description": "Endpoint is unreachable. Please verify connectivity to endpoint"
    },
    "90115": {
        "code": 90115,
        "severity": "WARN",
        "text": "Endpoint Probe : DNS reverse lookup failed .",
        "description": "DNS reverse lookup is mandatory for successful monitoring of endpoints"
    },
    "90116": {
        "code": 90116,
        "severity": "INFO",
        "text": "Endpoint Probe configuration list of endpoint network subnet to monitor",
        "description": "Only endpoints that match one of the configured subnets will be monitor by this node"
    },
    "90117": {
        "code": 90117,
        "severity": "DEBUG",
        "text": "Endpoint Probe Total number of session need valid login user",
        "description": "DNS reverse lookup is mandatory in order to successful monitor endpoint login users ."
    },
    "90118": {
        "code": 90118,
        "severity": "FATAL",
        "text": "Fatal error occourd during SYSLOG probe startup",
        "description": "Fatal error occourd during SYSLOG probe startup"
    },
    "90119": {
        "code": 90119,
        "severity": "INFO",
        "text": "Start listening to tcp port",
        "description": "Start listening to tcp port"
    },
    "90120": {
        "code": 90120,
        "severity": "INFO",
        "text": "Start listening to udp port",
        "description": "Start listening to udp port"
    },
    "90121": {
        "code": 90121,
        "severity": "INFO",
        "text": "Applied template for hostname",
        "description": "Applied template for hostname"
    },
    "90122": {
        "code": 90122,
        "severity": "ERROR",
        "text": "DNS resoultion failed for syslog client, Will not parse messages from this client",
        "description": "DNS resoultion failed for syslog client, Will not parse messages from this client, Please check DNS can resolve ip to hostname"
    },
    "90123": {
        "code": 90123,
        "severity": "DEBUG",
        "text": "Receive message from unkown client, Droping message",
        "description": "Receive message from unkown client, Droping message"
    },
    "90124": {
        "code": 90124,
        "severity": "DEBUG",
        "text": "Receive unkown syslog format message",
        "description": "Receive unkown syslog format message"
    },
    "90125": {
        "code": 90125,
        "severity": "WARN",
        "text": "Couldn't find session ID in ISE/ACS syslog message",
        "description": "Couldn't find session ID in ISE/ACS syslog message"
    },
    "90126": {
        "code": 90126,
        "severity": "WARN",
        "text": "Couldn't find IP address in ISE/ACS syslog message",
        "description": "Couldn't find address in ISE/ACS syslog message"
    },
    "90127": {
        "code": 90127,
        "severity": "WARN",
        "text": "Receive ISE/ACS start/update radius message without pass authentication, Can't create PassiveID session",
        "description": "Receive ISE/ACS start/update radius message without pass authentication, Can't create PassiveID session"
    },
    "90128": {
        "code": 90128,
        "severity": "ERROR",
        "text": "Failed to apply configuration",
        "description": "Failed to apply configuration"
    },
    "90129": {
        "code": 90129,
        "severity": "ERROR",
        "text": "Error",
        "description": "Failed to publish DHCP event to MNT"
    },
    "90130": {
        "code": 90130,
        "severity": "ERROR",
        "text": "Error",
        "description": "Failed to retrieve ad user's info from active directory"
    },
    "90131": {
        "code": 90131,
        "severity": "ERROR",
        "text": "Error",
        "description": "Can not resolve syslog provider hostname to ip address"
    },
    "90132": {
        "code": 90132,
        "severity": "DEBUG",
        "text": "Could not parse Syslog message",
        "description": "Could not parse Syslog message"
    },
    "90133": {
        "code": 90133,
        "severity": "ERROR",
        "text": "Invalid Syslog message format",
        "description": "Invalid Syslog message format"
    },
    "90134": {
        "code": 90134,
        "severity": "ERROR",
        "text": "Could not parse Syslog hostname from message",
        "description": "Could not parse Syslog hostname from message"
    },
    "90135": {
        "code": 90135,
        "severity": "DEBUG",
        "text": "Message received",
        "description": "Message received"
    },
    "90136": {
        "code": 90136,
        "severity": "WARN",
        "text": "Syslog protocol server error",
        "description": "Received message in wrong format, dropped"
    },
    "90137": {
        "code": 90137,
        "severity": "NOTICE",
        "text": "Syslog listener is up",
        "description": "Syslog listener is up"
    },
    "90138": {
        "code": 90138,
        "severity": "NOTICE",
        "text": "Syslog listener is down",
        "description": "Syslog listener is down"
    },
    "90139": {
        "code": 90139,
        "severity": "DEBUG",
        "text": "Identity Mapping message received, dropped",
        "description": "Identity Mapping message received, dropped"
    },
    "90140": {
        "code": 90140,
        "severity": "INFO",
        "text": "Message parsed",
        "description": "Message parsed"
    },
    "90141": {
        "code": 90141,
        "severity": "DEBUG",
        "text": "Incomplete message received, dropped",
        "description": "Incomplete message received, dropped"
    },
    "90142": {
        "code": 90142,
        "severity": "INFO",
        "text": "No Active Directory with credentials were found. Endpoint check will not run",
        "description": "No Active Directory with credentials were found. Endpoint probing will not run"
    },
    "90143": {
        "code": 90143,
        "severity": "INFO",
        "text": "This IP is not part of any configured subnet. Endpoint check will not run",
        "description": "This IP is not part of any configured subnet. Endpoint check will not run"
    },
    "90200": {
        "code": 90200,
        "severity": "INFO",
        "text": "REST server started succesfully.",
        "description": "Waiting for inconming requests"
    },
    "90201": {
        "code": 90201,
        "severity": "INFO",
        "text": "New authentication token was issued for client.",
        "description": "Token will be used on further requests."
    },
    "90202": {
        "code": 90202,
        "severity": "ERROR",
        "text": "Authentication request failed",
        "description": "Check credentials used for initial basic authentication"
    },
    "90203": {
        "code": 90203,
        "severity": "INFO",
        "text": "Token was revoked according to client request.",
        "description": "Further requests with a revoked token will be denied."
    },
    "90204": {
        "code": 90204,
        "severity": "ERROR",
        "text": "Failed to reverse resolve ip to hostname",
        "description": "Failed to reverse resolve ip to hostname, configure reverse DNS for the REST client host."
    },
    "90205": {
        "code": 90205,
        "severity": "DEBUG",
        "text": "Request from unknown clinet was dropped.",
        "description": "Request from unknown clinet was dropped. Try to configure client in ISE."
    },
    "90206": {
        "code": 90206,
        "severity": "ERROR",
        "text": "Request dropped due to invalid or missing token.",
        "description": "Request dropped due to invalid or missing token. Make sure the client is sending valid token."
    },
    "90300": {
        "code": 90300,
        "severity": "ERROR",
        "text": "Probe didn't receive keep-alive signal from agent.",
        "description": "Make sure agent is up and running."
    },
    "90301": {
        "code": 90301,
        "severity": "ERROR",
        "text": "Probe received incorrect number of client status.",
        "description": "Check debug logs for further infomation."
    },
    "90500": {
        "code": 90500,
        "severity": "NOTICE",
        "text": "New Identity Mapping",
        "description": "PassiveID new mapping event received"
    },
    "90501": {
        "code": 90501,
        "severity": "NOTICE",
        "text": "Update Identity Mapping",
        "description": "PassiveID updated mapping event received"
    },
    "90502": {
        "code": 90502,
        "severity": "NOTICE",
        "text": "Remove Identity Mapping",
        "description": "PassiveID delete mapping event received"
    },
    "91001": {
        "code": 91001,
        "severity": "ERROR",
        "text": "IRF Core Engine is not running",
        "description": "IRF Core Engine is not running"
    },
    "91002": {
        "code": 91002,
        "severity": "ERROR",
        "text": "Lost connection to adapter",
        "description": "Lost connection to adapter"
    },
    "91003": {
        "code": 91003,
        "severity": "INFO",
        "text": "Stopped adapter instance",
        "description": "Stopped adapter instance"
    },
    "91004": {
        "code": 91004,
        "severity": "INFO",
        "text": "Started adapter instance",
        "description": "Started adapter instance"
    },
    "91005": {
        "code": 91005,
        "severity": "INFO",
        "text": "Configuration changed for adapter instance",
        "description": "Configuration changed for adapter instance"
    },
    "91006": {
        "code": 91006,
        "severity": "ERROR",
        "text": "An error occurred for adapter instance",
        "description": "An error occurred for adapter instance"
    },
    "91007": {
        "code": 91007,
        "severity": "INFO",
        "text": "Threat event received",
        "description": "Threat event received"
    },
    "91008": {
        "code": 91008,
        "severity": "FATAL",
        "text": "Vulnerability Scan failure",
        "description": "Vulnerability Scan failure"
    },
    "91009": {
        "code": 91009,
        "severity": "FATAL",
        "text": "Adapter had encountered a connection or configuration error",
        "description": "Adapter had encountered a connection or configuration error"
    },
    "91010": {
        "code": 91010,
        "severity": "FATAL",
        "text": "An IRF Service component has reported some errors",
        "description": "An IRF Service component has reported some errors"
    },
    "91011": {
        "code": 91011,
        "severity": "INFO",
        "text": "An IRF Service component has send some notification",
        "description": "An IRF Service component has send some notification"
    },
    "91012": {
        "code": 91012,
        "severity": "FATAL",
        "text": "An IRF Service component is down",
        "description": "An IRF Service component is down"
    },
    "91013": {
        "code": 91013,
        "severity": "INFO",
        "text": "COA initiated",
        "description": "Change of authority initiated"
    },
    "91014": {
        "code": 91014,
        "severity": "INFO",
        "text": "COA successful",
        "description": "Change of authority successful"
    },
    "91015": {
        "code": 91015,
        "severity": "ERROR",
        "text": "COA initiated",
        "description": "Change of authority initiated"
    },
    "91016": {
        "code": 91016,
        "severity": "INFO",
        "text": "Adapter connection initiated",
        "description": "Adapter connection initiated"
    },
    "91017": {
        "code": 91017,
        "severity": "INFO",
        "text": "Adapter connection success",
        "description": "Adapter connection success"
    },
    "91018": {
        "code": 91018,
        "severity": "ERROR",
        "text": "Adapter connection failed",
        "description": "Adapter connection failed"
    },
    "91019": {
        "code": 91019,
        "severity": "INFO",
        "text": "Vulnerability Assessment Scan Status",
        "description": "Vulnerability Assessment Scan Status"
    },
    "91020": {
        "code": 91020,
        "severity": "ERROR",
        "text": "Active Directory dialin access denied for user.",
        "description": "Active Directory dialin access denied for user."
    },
    "91030": {
        "code": 91030,
        "severity": "INFO",
        "text": "RADIUS DTLS handshake started",
        "description": "RADIUS DTLS handshake started"
    },
    "91031": {
        "code": 91031,
        "severity": "INFO",
        "text": "RADIUS DTLS: received client hello message",
        "description": "RADIUS DTLS: received client hello message"
    },
    "91032": {
        "code": 91032,
        "severity": "INFO",
        "text": "RADIUS DTLS: sent server hello message",
        "description": "RADIUS DTLS: sent server hello message"
    },
    "91033": {
        "code": 91033,
        "severity": "INFO",
        "text": "RADIUS DTLS: sent server certificate",
        "description": "RADIUS DTLS: sent server certificate"
    },
    "91034": {
        "code": 91034,
        "severity": "INFO",
        "text": "RADIUS DTLS: sent client certificate request",
        "description": "RADIUS DTLS: sent client certificate request"
    },
    "91035": {
        "code": 91035,
        "severity": "INFO",
        "text": "RADIUS DTLS: sent server done message",
        "description": "RADIUS DTLS: sent server done message"
    },
    "91036": {
        "code": 91036,
        "severity": "INFO",
        "text": "RADIUS DTLS: received client certificate",
        "description": "RADIUS DTLS: received client certificate"
    },
    "91037": {
        "code": 91037,
        "severity": "INFO",
        "text": "RADIUS DTLS: received client key exchange message",
        "description": "RADIUS DTLS: received client key exchange message"
    },
    "91038": {
        "code": 91038,
        "severity": "INFO",
        "text": "RADIUS DTLS: received certificate verify message",
        "description": "RADIUS DTLS: received certificate verify message"
    },
    "91039": {
        "code": 91039,
        "severity": "INFO",
        "text": "RADIUS DTLS: received finished message",
        "description": "RADIUS DTLS: received finished message"
    },
    "91040": {
        "code": 91040,
        "severity": "INFO",
        "text": "RADIUS DTLS: sent change cipher spec message",
        "description": "RADIUS DTLS: sent change cipher spec message"
    },
    "91041": {
        "code": 91041,
        "severity": "INFO",
        "text": "RADIUS DTLS: sent finished message",
        "description": "RADIUS DTLS: sent finished message"
    },
    "91042": {
        "code": 91042,
        "severity": "INFO",
        "text": "RADIUS DTLS: sent client hello message",
        "description": "RADIUS DTLS: sent client hello message"
    },
    "91043": {
        "code": 91043,
        "severity": "INFO",
        "text": "RADIUS DTLS: received server hello message",
        "description": "RADIUS DTLS: received server hello message"
    },
    "91044": {
        "code": 91044,
        "severity": "INFO",
        "text": "RADIUS DTLS: received server certificate",
        "description": "RADIUS DTLS: received server certificate"
    },
    "91045": {
        "code": 91045,
        "severity": "INFO",
        "text": "RADIUS DTLS: received server certificate request",
        "description": "RADIUS DTLS: received server certificate request"
    },
    "91046": {
        "code": 91046,
        "severity": "INFO",
        "text": "RADIUS DTLS: received server done message",
        "description": "RADIUS DTLS: received server done message"
    },
    "91047": {
        "code": 91047,
        "severity": "INFO",
        "text": "RADIUS DTLS: sent client certificate",
        "description": "RADIUS DTLS: sent client certificate"
    },
    "91048": {
        "code": 91048,
        "severity": "INFO",
        "text": "RADIUS DTLS: sent client key exchange message",
        "description": "RADIUS DTLS: sent client key exchange message"
    },
    "91049": {
        "code": 91049,
        "severity": "INFO",
        "text": "RADIUS DTLS: read server session ticket",
        "description": "RADIUS DTLS: read server session ticket"
    },
    "91050": {
        "code": 91050,
        "severity": "WARN",
        "text": "RADIUS DTLS: TLS handshake failed because of an unknown CA in the certificates chain",
        "description": "RADIUS DTLS: SSL handshake failed because of an unknown CA in the certificates chain"
    },
    "91051": {
        "code": 91051,
        "severity": "WARN",
        "text": "RADIUS DTLS: TLS handshake failed because of a bad certificate in the certificate chain",
        "description": "RADIUS DTLS: TLS handshake failed because of a bad certificate in the certificate chain"
    },
    "91052": {
        "code": 91052,
        "severity": "WARN",
        "text": "RADIUS DTLS: TLS handshake failed because decryption error",
        "description": "RADIUS DTLS: TLS handshake failed because decryption error"
    },
    "91053": {
        "code": 91053,
        "severity": "WARN",
        "text": "RADIUS DTLS: TLS handshake failed because certificate has expired",
        "description": "RADIUS DTLS: TLS handshake failed because certificate has expired"
    },
    "91054": {
        "code": 91054,
        "severity": "WARN",
        "text": "RADIUS DTLS: TLS handshake failed because unknown certificate",
        "description": "RADIUS DTLS: TLS handshake failed because unknown certificate"
    },
    "91055": {
        "code": 91055,
        "severity": "INFO",
        "text": "RADIUS packet is encrypted",
        "description": "RADIUS packet is encrypted"
    },
    "91056": {
        "code": 91056,
        "severity": "WARN",
        "text": "RADIUS DTLS: TLS handshake failed because of unsupported protocol version",
        "description": "RADIUS DTLS: TLS handshake failed because of unsupported protocol version"
    },
    "91057": {
        "code": 91057,
        "severity": "WARN",
        "text": "RADIUS DTLS CoA: TLS handshake failed because of an unknown CA in the certificates chain",
        "description": "RADIUS DTLS CoA: SSL handshake failed because of an unknown CA in the certificates chain"
    },
    "91058": {
        "code": 91058,
        "severity": "WARN",
        "text": "RADIUS DTLS CoA: TLS handshake failed because of a bad certificate in the certificate chain",
        "description": "RADIUS DTLS CoA: TLS handshake failed because of a bad certificate in the certificate chain"
    },
    "91059": {
        "code": 91059,
        "severity": "WARN",
        "text": "RADIUS DTLS CoA: TLS handshake failed because decryption error",
        "description": "RADIUS DTLS CoA: TLS handshake failed because decryption error"
    },
    "91060": {
        "code": 91060,
        "severity": "WARN",
        "text": "RADIUS DTLS CoA: TLS handshake failed because certificate has expired",
        "description": "RADIUS DTLS CoA: TLS handshake failed because certificate has expired"
    },
    "91061": {
        "code": 91061,
        "severity": "WARN",
        "text": "RADIUS DTLS CoA: TLS handshake failed because unknown certificate",
        "description": "RADIUS DTLS CoA: TLS handshake failed because unknown certificate"
    },
    "91062": {
        "code": 91062,
        "severity": "WARN",
        "text": "RADIUS DTLS CoA: TLS handshake failed because of unsupported protocol version",
        "description": "RADIUS DTLS CoA: TLS handshake failed because of unsupported protocol version"
    },
    "91063": {
        "code": 91063,
        "severity": "WARN",
        "text": "RADIUS DTLS CoA: Client Certificate in not found in System certificates list",
        "description": "RADIUS DTLS CoA: Client Certificate in not found in System certificates list"
    },
    "91064": {
        "code": 91064,
        "severity": "WARN",
        "text": "RADIUS DTLS connection disconnect due to OCSP found revoked certificate",
        "description": "OCSP check result is that the certificate used for RADIUS DTLS connection is revoke"
    },
    "91065": {
        "code": 91065,
        "severity": "WARN",
        "text": "RADIUS DTLS connection disconnect due to CRL found revoked certificate",
        "description": "CRL check result is that the certificate used for RADIUS DTLS connection is revoke"
    },
    "91066": {
        "code": 91066,
        "severity": "WARN",
        "text": "RADIUS DTLS connection disconnect because of the client certificate is not yet valid",
        "description": "OCSP check result is that the certificate used for RADIUS DTLS connection is not yet valid"
    },
    "91067": {
        "code": 91067,
        "severity": "WARN",
        "text": "RADIUS DTLS CoA connection disconnect due to OCSP found revoked certificate",
        "description": "OCSP check result is that the certificate used for RADIUS DTLS CoA connection is revoke"
    },
    "91068": {
        "code": 91068,
        "severity": "WARN",
        "text": "RADIUS DTLS CoA connection disconnect due to CRL found revoked certificate",
        "description": "CRL check result is that the certificate used for RADIUS DTLS CoA connection is revoke"
    },
    "91069": {
        "code": 91069,
        "severity": "WARN",
        "text": "RADIUS DTLS CoA connection disconnect because of the server certificate is not yet valid",
        "description": "OCSP check result is that the certificate used for RADIUS DTLS CoA connection is not yet valid"
    },
    "91070": {
        "code": 91070,
        "severity": "INFO",
        "text": "RADIUS DTLS CoA handshake started",
        "description": "RADIUS DTLS CoA handshake started"
    },
    "91071": {
        "code": 91071,
        "severity": "INFO",
        "text": "RADIUS DTLS: Sent an OCSP request to the primary OCSP server for the CA",
        "description": "RADIUS DTLS: Send an OCSP request to the primary OCSP server for the CA."
    },
    "91072": {
        "code": 91072,
        "severity": "INFO",
        "text": "RADIUS DTLS: Sent an OCSP request to the secondary OCSP server for the CA",
        "description": "RADIUS DTLS: Send an OCSP request to the secondary OCSP server for the CA."
    },
    "91073": {
        "code": 91073,
        "severity": "WARN",
        "text": "RADIUS DTLS: Conversation with OCSP server ended with failure",
        "description": "RADIUS DTLS: Conversation with OCSP server ended with failure."
    },
    "91074": {
        "code": 91074,
        "severity": "INFO",
        "text": "RADIUS DTLS: Received OCSP response",
        "description": "RADIUS DTLS: Received OCSP response."
    },
    "91075": {
        "code": 91075,
        "severity": "INFO",
        "text": "RADIUS DTLS: OCSP status of user certificate is good",
        "description": "RADIUS DTLS: The OCSP server reported that the user certificate status is good."
    },
    "91076": {
        "code": 91076,
        "severity": "WARN",
        "text": "RADIUS DTLS: OCSP status of user certificate is revoked",
        "description": "RADIUS DTLS: The OCSP server reported that the user certificate status is revoked."
    },
    "91077": {
        "code": 91077,
        "severity": "INFO",
        "text": "RADIUS DTLS: OCSP status of user certificate is unknown",
        "description": "RADIUS DTLS: The OCSP server reported that the user certificate status is unknown or ISE was unable to connect to the OCSP server."
    },
    "91078": {
        "code": 91078,
        "severity": "WARN",
        "text": "RADIUS DTLS: Handshake failed because OCSP status is unknown",
        "description": "RADIUS DTLS: Handshake failed because OCSP status is unknown."
    },
    "91079": {
        "code": 91079,
        "severity": "INFO",
        "text": "RADIUS DTLS: Performed fallback to secondary OCSP server",
        "description": "RADIUS DTLS: Performed fallback to secondary OCSP server."
    },
    "91080": {
        "code": 91080,
        "severity": "WARN",
        "text": "RADIUS DTLS: Internal error occurred during communication with the OCSP server",
        "description": "RADIUS DTLS: Internal error during communication with the OCSP server. The configuration of the OCSP server doesn't match the ISE OCSP client."
    },
    "91081": {
        "code": 91081,
        "severity": "WARN",
        "text": "RADIUS DTLS: OCSP server URL is invalid",
        "description": "RADIUS DTLS: OCSP server URL is invalid and cannot be properly parsed."
    },
    "91082": {
        "code": 91082,
        "severity": "WARN",
        "text": "RADIUS DTLS: Connection to OCSP server failed",
        "description": "RADIUS DTLS: Connection attempt to OCSP server failed."
    },
    "91083": {
        "code": 91083,
        "severity": "WARN",
        "text": "RADIUS DTLS: OCSP server response is invalid",
        "description": "RADIUS DTLS: OCSP server returned a response that cannot be parsed by ISE."
    },
    "91084": {
        "code": 91084,
        "severity": "WARN",
        "text": "RADIUS DTLS: OCSP server returned an error",
        "description": "RADIUS DTLS: OCSP server returned an error in response to the ISE OCSP request."
    },
    "91085": {
        "code": 91085,
        "severity": "WARN",
        "text": "RADIUS DTLS: OCSP server did not provide the required nonce in response",
        "description": "RADIUS DTLS: Specific OCSP service in ISE is configured to use nonce for OCSP server verification but the OCSP server did not provide a nonce in response."
    },
    "91086": {
        "code": 91086,
        "severity": "WARN",
        "text": "RADIUS DTLS: OCSP server response nonce verification failed",
        "description": "RADIUS DTLS: Cryptographic verification of nonce returned in OCSP server response failed."
    },
    "91087": {
        "code": 91087,
        "severity": "WARN",
        "text": "RADIUS DTLS: OCSP server response time verification failed",
        "description": "RADIUS DTLS: In the OCSP server response verification of 'This Update' or 'Next Update' fields failed."
    },
    "91088": {
        "code": 91088,
        "severity": "WARN",
        "text": "RADIUS DTLS: OCSP server response signature verification failed",
        "description": "RADIUS DTLS: OCSP server response signature verification failed."
    },
    "91089": {
        "code": 91089,
        "severity": "INFO",
        "text": "RADIUS DTLS: Lookup certificate status in OCSP cache",
        "description": "RADIUS DTLS: Lookup certificate status in OCSP cache."
    },
    "91090": {
        "code": 91090,
        "severity": "INFO",
        "text": "RADIUS DTLS:Certificate status was not found in OCSP cache",
        "description": "RADIUS DTLS: Certificate status was not found in OCSP cache; ISE is going to perform OCSP request to the configured OCSP server."
    },
    "91091": {
        "code": 91091,
        "severity": "INFO",
        "text": "RADIUS DTLS: Lookup Certificate status in OCSP cache succeeded",
        "description": "RADIUS DTLS: LookupCertificate status in OCSP cache succeeded; ISE is going to use this status without performing OCSP request to the configured OCSP server."
    },
    "91092": {
        "code": 91092,
        "severity": "INFO",
        "text": "RADIUS DTLS: ISE will continue to CRL verification if it is configured for specific CA",
        "description": "RADIUS DTLS: OCSP verification either failed or returned unknown certificate status. ISE will continue to CRL verification if it is configured for specific CA."
    },
    "91093": {
        "code": 91093,
        "severity": "DEBUG",
        "text": "RADIUS DTLS: OCSP response not cached",
        "description": "RADIUS DTLS: Response from OCSP server indicates that the contents of the response should not be cached"
    },
    "91094": {
        "code": 91094,
        "severity": "INFO",
        "text": "RADIUS DTLS: Take OCSP servers list from AIA extension of client certificate",
        "description": "RADIUS DTLS: Take OCSP servers list from AIA extension of client certificate"
    },
    "91095": {
        "code": 91095,
        "severity": "INFO",
        "text": "RADIUS DTLS: Take OCSP servers list from OCSP service configuration",
        "description": "RADIUS DTLS: Take OCSP servers list from OCSP service configuration"
    },
    "91096": {
        "code": 91096,
        "severity": "INFO",
        "text": "RADIUS DTLS: Sent an OCSP request to the next OCSP server in the list",
        "description": "RADIUS DTLS: Sent an OCSP request to the next OCSP server in the list"
    },
    "91097": {
        "code": 91097,
        "severity": "WARN",
        "text": "RADIUS DTLS: No valid OCSP server URLs found in the AIA extension of client certificate",
        "description": "RADIUS DTLS: If the OCSP service was configured to take OCSP servers list from the AIA extension of client certificate then at least one valid OCSP server URL must be present."
    },
    "91098": {
        "code": 91098,
        "severity": "INFO",
        "text": "RADIUS DTLS: No more OCSP servers in AIA estension of client certificate",
        "description": "RADIUS DTLS: No more OCSP servers in AIA estension of client certificate"
    },
    "91099": {
        "code": 91099,
        "severity": "INFO",
        "text": "RADIUS DTLS: No AIA extension in client certificate",
        "description": "RADIUS DTLS: No AIA extension in client certificate"
    },
    "91100": {
        "code": 91100,
        "severity": "WARN",
        "text": "RADIUS DTLS: Handshake failed because OCSP is unreachable",
        "description": "RADIUS DTLS: Handshake failed because OCSP is unreachable"
    },
    "91101": {
        "code": 91101,
        "severity": "INFO",
        "text": "RADIUS DTLS: User certificate was revoked by CRL verification",
        "description": "RADIUS DTLS: CRL verification returned revoked certificate status."
    },
    "91102": {
        "code": 91102,
        "severity": "WARN",
        "text": "RADIUS DTLS: client Identity check failed",
        "description": "RADIUS DTLS: Client Identity check failed."
    },
    "91103": {
        "code": 91103,
        "severity": "INFO",
        "text": "RADIUS DTLS: client Identity check needed",
        "description": "RADIUS DTLS: Client Identity check needed."
    },
    "91104": {
        "code": 91104,
        "severity": "INFO",
        "text": "RADIUS DTLS: no need to run Client Identity check",
        "description": "RADIUS DTLS: No need to run Client Identity check."
    },
    "91105": {
        "code": 91105,
        "severity": "INFO",
        "text": "RADIUS DTLS: sent client hello verify request",
        "description": "RADIUS DTLS: sent client hello verify request."
    },
    "91106": {
        "code": 91106,
        "severity": "INFO",
        "text": "RADIUS DTLS: received client hello verify request",
        "description": "RADIUS DTLS: received client hello verify request."
    },
    "91107": {
        "code": 91107,
        "severity": "WARN",
        "text": "RADIUS DTLS: TLS handshake failed because of client hello verification failed",
        "description": "RADIUS DTLS: TLS handshake failed because of client hello verification failed."
    },
    "91110": {
        "code": 91110,
        "severity": "WARN",
        "text": "One or more Active Directory diagnostic tests failed during a scheduled run.",
        "description": "One or more Active Directory diagnostic tests failed during a scheduled run."
    },
    "91111": {
        "code": 91111,
        "severity": "WARN",
        "text": "High authentication load detected",
        "description": "High authentication load detected"
    }
}