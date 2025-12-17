// get the button from popup.html
var button = document.getElementById("btn");

// when button is clicked
button.onclick = function () {

  // find the current open tab
  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs) {

      // send message to the webpage
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "changeColor" }
      );

    }
  );

};
