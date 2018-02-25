// JavaScript Document
function tips(){
	setTimeout(function(){
		$('.tips').fadeOut(300);
	},1000);
}
function getString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]); return null;
}
function getObjectURL(file) {
	var url = null ; 
	if (window.createObjectURL!=undefined) {                   // basic
		url = window.createObjectURL(file);
	} else if (window.URL!=undefined) {                        // mozilla(firefox)
		url = window.URL.createObjectURL(file);
	} else if (window.webkitURL!=undefined) {                  // webkit or chrome
		url = window.webkitURL.createObjectURL(file);
	}
	return url ;
}