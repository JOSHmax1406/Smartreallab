function send() {

var apiKey = "2KBV87EXXZSXGCD1";
var postStr = apiKey;
    postStr +="&field5=";
    postStr += 5;
    postStr += "\r\n\r\n";

var xhr = new XMLHttpRequest();
xhr.open("POST /update HTTP/1.1\n", "api.thingspeak.com", false);
xmlhttp.setRequestHeader("Connection", " close\n");
xmlhttp.setRequestHeader("X-THINGSPEAKAPIKEY", apiKey);
xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded\n");
xmlhttp.setRequestHeader("Content-Length", postStr.length;

xhr.send(postStr);

console.log(xhr.status);
console.log(xhr.statusText);
}

send();