chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'sr-get-url') {
    sendResponse(window.location.hostname);
  }
});
