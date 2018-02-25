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
});
$(document).ready(function(){
	//60s发送验证码
	$('#getCode').bind('click',function(){
		$(this).unbind('click');
		sendcode();
	});
	function sendcode(){
		$('#getCode').css({
			color:'#ccc',
			borderColor:'#ccc'
		}).html('<i id="time" style="font-size:15px;">60</i><b style="font-size:16px;">s</b>后再次获取');
		var timer=setInterval(function(){
			var i=60;
			if(i>0){
				var time=parseInt($('#time').text());
				$('#time').text(time-1);
				i--;
			}
		},1000);
		setTimeout(function(){
			$('#getCode').bind('click',function(){sendcode()}).css({
				color:'#111',
				borderColor:'#111'
			}).html('获取验证码');
			clearInterval(timer);
		},60000);
	}
	//验证姓名
	var name=false;
	$('#name').on('keyup',function(){
		var nameVal=$(this).val();
		var ptnName=/^[一-龥·a-zA-Z]+$/g;
		var ptnName1=/^[一-龥·a-zA-Z]{2,50}$/g;
		//限制只能输入中文
		if(!ptnName.test(nameVal)){
			$(this).val(nameVal.replace(/[^一-龥·a-zA-Z]/g,''));
		}
		if(nameVal.length>50){
			$(this).val($(this).val().substr(0,50));
		}
		//验证姓名
		if(!ptnName1.test(nameVal)){
			return name=false;
		}
		name=true;
	});
	//验证手机号
	var tel=false;
	$('#tel').on('keyup',function(){
		var telVal=$(this).val();
		var ptnTel=/^\d+$/g;
		var ptnTel1=/^1\d{10}$/g;
		//限制只能输入数字
		if(!ptnTel.test(telVal)){
			$(this).val(telVal.replace(/\D/g,''));
		}
		if(telVal.length>11){
			$(this).val($(this).val().substr(0,11));
		}
		//验证手机号
		if(!ptnTel1.test(telVal)){
			return tel=false;
		}
		tel=true;
	});
	//验证码
	$('#code').on('keyup',function(){
		var codeVal=$(this).val();
		var ptnCode=/^\d+$/g;
		if(!ptnCode.test(codeVal)){
			$(this).val(codeVal.replace(/\D/g,''));
		}
		if(codeVal.length>8){
			$(this).val($(this).val().substr(0,8));
		}
	});
	$('#complete').on('click',function(){
		if(name&&tel){
			window.location.href='regist2.html';
		}
	});
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
		$('#area').text('').css('color','#000').append(province);
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
		$('#area').html('例：<i id="province">省</i>/<i id="city">市</i>/<i id="section">区</i>').css('color','#999');
		$('.select').children('ul').animate({bottom:'-160px'},300,function(){
			$('.select').hide();
		});
		$('#close').animate({bottom:'-200px'},300);
		$('#select_bg').fadeOut(150);
	});
});