
// Get an Inbox SDK App Id from here: https://www.inboxsdk.com/register
InboxSDK.load('1.0', 'INSERT_INBOXSDK_KEY').then(function(sdk){

  // the SDK has been loaded, now do something with it!
  sdk.Compose.registerComposeViewHandler(function(composeView){

    // a compose view has come into existence, do something with it!
    composeView.addButton({
      title: "Templates",
      iconUrl: chrome.extension.getURL('icon.png'),
      hasDropdown: true,
      onClick: function(event) {
        event.dropdown.el.innerHTML  = '<iframe src="http://localhost:3000" width="500" height="500"></iframe>';
      },
    });

    window.onmessage = function(e) {
      let key = 'amplemarket-challenge';
      if (e.data.includes(key)) {
        composeView.setBodyText(e.data.split(key).pop());
      }
    };
  });
});
