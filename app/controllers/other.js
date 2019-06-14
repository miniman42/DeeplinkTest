function doClick(e) {
	$.other.close();
}

$.other.open();
$.other.addEventListener("close",function(){
    Ti.API.error("CLOSING OTHER!");
});
