function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]); return null;
}
function tishi(){
	setTimeout(function(){
		$('.tishi').hide();
	},1000);
}
var link="http://qyh.jielanwx.com/";
//var link="http://115.236.91.116:9002/feel/";