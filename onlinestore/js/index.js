// JavaScript Document
$(function(){
	var pk=$(window).width();
	var bili=pk/750;
	(function buju(){
		if(pk>640){
			$('.main ul li').css('width',318+'px');
		}else{
			$('.main ul li').css('width',0.5*pk-2+'px');
		}
	})();
	$(window).scroll(function(){
		if($(window).scrollTop()>=$('.banner').height()){
			$('.toTop').css('display','block');
		}
	});
	$('.toTop').on('click',function(){
		$('html, body').animate({ scrollTop: 0 }, 120);
	});
})