function doClick(e) {
	Alloy.createController("other").getView().open();
}

$.index.open();
$.index.addEventListener("close",function(){
    Ti.API.error("CLOSING INDEX!");
});
