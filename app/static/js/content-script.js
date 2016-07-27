/* eslint-disable */

var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('js/webpage.js');
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);

var shortcuts;

window.addEventListener('message', function(event) {
  // We only accept messages from ourselves
  if (event.source !== window)
    return;

  if (event.data.type && (event.data.type == 'shortcuts-reveal')) {
    console.log("Content script received: %O", event.data.payload);
    shortcuts = event.data.payload.shortcuts;
  }
}, false);

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.type === 'get-shortcuts') {
    sendResponse(shortcuts);
  }
});
