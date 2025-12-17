chrome.runtime.onMessage.addListener(function (message) {


if (message.action === "increaseText") {


document.body.style.fontSize = "20px";


}
});