// wait for message from popup
chrome.runtime.onMessage.addListener(function (message) {

  // check what message came
  if (message.action === "changeColor") {

    // change webpage background color
    document.body.style.backgroundColor = "lightblue";

  }

});
