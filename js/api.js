var apikey_status = "MW9POWJuZEYzcFpZOEZDRU9JTFhnQT09";
var apikey_session = "RHVCZ3RRc1k4NFV1QW1xWWVYcDRuLytoU1U3OVA5Y0ZMcldROXZSRGtwMD0=";
var apikey_sessionid = "MDIvbE1mVUJVUnYrWWlYTXMyY2Qva2lJK3hBTEVqd3VYUzNUTlFhZXdORT0=";

//send user status and update user status for chrome
function sendUserStatus(data = {}, url = domain_str + "/user-status-update-api") {
    return fetch(url, {
        method: "POST",
        crossDomain: true,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': apikey_status,
        },
        body: JSON.stringify(data)
    });
    // })
    //     .then(apires => apires.json())
    //     .then(apires => console.log(" sendUserStatus ", apires));
}

//send session update
function sendUserSession(data = {}, url = domain_str + "/user-session-status-update-api") {
    return fetch(url, {
        method: "POST",
        crossDomain: true,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': apikey_session,
        },
        body: JSON.stringify(data),
    })
    // .then(apires => apires.json())
    .then(apires => console.log(" sendUserSession ", apires))
    .catch(error => console.error(error));
}

//send session update
function getTokenStatus(data = {}, url = domain_str + "/brightchats-webrtc-token-validate") {
    return fetch(url, {
        method: "POST",
        crossDomain: true,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': apikey_sessionid,
        },
        body: JSON.stringify(data),
    })
    .then(apires => apires.json());
    // .then(apires => console.log(" API response  ", apires))
    // .catch(error => console.error(error));
}