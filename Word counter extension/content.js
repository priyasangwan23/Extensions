chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  if (request.action === "countWords") {

    var text = document.body.innerText;
    var words = text.split(" ");

    sendResponse({ wordCount: words.length });
  }

  return true;
});
