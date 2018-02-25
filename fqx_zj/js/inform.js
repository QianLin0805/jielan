// JavaScript Document
var pingkuan=$(window).width();
var pinggao=$(window).height();
$(window).load(function(){
	function buju(){
		$('.select').css({
			height:pinggao
		});
		$('.select ul li').css({
			width:pingkuan
		});
	}
	buju();
	var card=$('#card').text();
	if(card==''){
		$('#card').hide();
		$('.card').bind('click',function(){
			window.location.href='addcard1.html';
		});
	}else{
		$('#card').next().hide();
		$('.card').bind('click',function(){
			window.location.href='mycard.html';
		});
	}
});
$(document).ready(function(){
	//选择地区
	$('.area').bind('click',function(){
		$('.select').show();
		$('#select_bg').fadeIn(150);
		$('.province').show().animate({bottom:'40px'},300);
		$('#close').animate({bottom:0},300);
	});
	//选择省份
	$('.province').children().bind('click',function(){
		var province=$(this).text();
		$('#area').text('').append(province);
		$('.province').animate({bottom:'-160px'},300,function(){
			$(this).hide().next().show();
			$('.city').animate({bottom:'40px'},300);
			$('#close').animate({bottom:0},300);
		});
		$('#close').animate({bottom:'-200px'},300);
	});
	//选择城市
	$('.city').children().bind('click',function(){
		var city=$(this).text();
		$('#area').append('/'+city);
		$('.city').animate({bottom:'-160px'},300,function(){
			$(this).hide().next().show();
			$('.section').animate({bottom:'40px'},300);
			$('#close').animate({bottom:0},300);
		});
		$('#close').animate({bottom:'-200px'},300);
	});
	//选择区域
	$('.section').children().bind('click',function(){
		var section=$(this).text();
		$('#area').append('/'+section);
		$('.section').animate({bottom:'-160px'},300,function(){
			$(this).hide();
			$('.select').hide();
		});
		$('#select_bg').fadeOut(150);
		$('#close').animate({bottom:'-200px'},300);
	});
	//点击背景、关闭 关闭选择界面
	$('#select_bg,#close').bind('click',function(){
		$('#area').html('浙江省/杭州市/滨江区');    //返回初始设置地区
		$('.select').children('ul').animate({bottom:'-160px'},300,function(){
			$('.select').hide();
		});
		$('#close').animate({bottom:'-200px'},300);
		$('#select_bg').fadeOut(150);
	});
});