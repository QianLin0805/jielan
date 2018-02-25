// JavaScript Document
function buju(){
	var tipWidth=$('.tip').innerWidth();
	$('.tip').css('marginLeft',-tipWidth/2);
}

function show(){
	var pg=$(window).height();
	$('.choose').show().animate({left:'-220px'},200,"linear",function(){
		$('.wy').css({
			height:pg
		});
	});
}
function hide(){
	$('.choose').animate({left:0},200,"linear",function(){
		$(this).hide();
		$('.wy').css({
			height:'auto'
		});
	});
}

$(function(){
	(function(){
		var tipWidth=$('.tip').innerWidth();
		if(tipWidth!=null)$('.tip').css('marginLeft',-tipWidth/2);
	})();
})