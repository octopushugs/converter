chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.trigger == "go")
	if(window.getSelection()) {
		sendResponse({data: window.getSelection().toString()});
	}
	else if(typeof document.getSelection() != "undefined") {
		sendResponse({data: document.getSelection()});
	}
  else
    sendResponse({}); //do nothing
});