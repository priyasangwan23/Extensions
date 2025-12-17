var button = document.getElementById("countBtn");
var result = document.getElementById("result");

button.addEventListener("click", function () {

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "countWords" },
      function (response) {

        result.innerText = "Words: " + response.wordCount;

      }
    );

  });

});
