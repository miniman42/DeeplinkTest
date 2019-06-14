// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
function handleIntent(intent) {
    // Handle the intent here.
    var DEEPLINK=intent.data;
    Ti.API.error("HANDLING DEEPLINK INTENT:"+DEEPLINK);
    if (intent.data && intent.data.indexOf("deep-link") !== -1) {
        Ti.API.error("GOT DEEPLINK INTENT WE WANTED...:"+DEEPLINK);
    }
}
Ti.Android.rootActivity.addEventListener("newintent", handleIntent);
handleIntent(Ti.Android.rootActivity.intent);
