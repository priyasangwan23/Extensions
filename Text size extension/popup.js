var button = document.getElementById("btn");
button.onclick  = function () {
    // find current tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {


// send message to content.js
chrome.tabs.sendMessage(tabs[0].id, { action: "increaseText" });


});
}