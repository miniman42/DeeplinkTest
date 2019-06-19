var _openWebview = function(autoClose){
	var webview = require('ti.webdialog');
	webview.open({
	        url: "https://applinktest.appspot.com/app-link.html?url=newapp%3A%2F%2Fdeep-link&packageId=com.myapp.newapp",
	        flags: (autoClose?(Ti.Android.FLAG_ACTIVITY_NEW_TASK | Ti.Android.FLAG_ACTIVITY_NO_HISTORY):0),
	        entersReaderIfAvailable: false
	    });
}
function openNormalWebview(e) {
	_openWebview(false);
}
function openAutoCloseWebview(e) {
	_openWebview(true);
}
function doClick(e) {
	$.other.close();
}

$.other.open();
$.other.addEventListener("close",function(){
    Ti.API.error("CLOSING OTHER!");
});
