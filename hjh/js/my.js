// JavaScript Document
$(function(){
	(function(){
		var pg=$(window).height();
		$('.share').css({
			height:pg
		});
	})();
	$('#share').on('click',function(){
		$('.share').show();
		$('.share').on('click',function(){
			$(this).hide();
		});
	});
	
	var tel=false,psd=false,psd2=false;
	//验证手机号
	$('#tel').on('keyup',function(event){
		//alert()
		var telVal=$(this).val();
		var ptnTel=/^\d+$/g;
		var ptnTel1=/^1\d{10}$/g;
		//限制只能输入数字
		if(!ptnTel.test(telVal)){
			$(this).val(telVal.replace(/\D/g,''));
		}
		if($(this).val().length>11&&event.keyCode!=8){
			$(this).val($(this).val().substr(0,11));
		}
		if(!ptnTel1.test(telVal)){
			return tel=false;
		}
		tel=true;
	});
	//验证密码
	$('#psd').on('keyup',function(){
		var psdVal=$(this).val();
		var ptnPsd=/^\w+$/g;
		var ptnPsd1=/^\w{6,8}$/g;
		if(!ptnPsd.test(psdVal)){
			$(this).val(psdVal.replace(/\W/g,''));
		}
		if($(this).val().length>8&&event.keyCode!=8){
			$(this).val($(this).val().substr(0,8));
		}
		if(!ptnPsd1.test(psdVal)){
			return psd=false;
		}
		psd=true;
	});
	$('#psd_again').on('keyup',function(){
		var psdVal=$(this).val();
		var ptnPsd=/^\w+$/g;
		var ptnPsd1=/^\w{6,8}$/g;
		if(!ptnPsd.test(psdVal)){
			$(this).val(psdVal.replace(/\W/g,''));
		}
		if($(this).val().length>8&&event.keyCode!=8){
			$(this).val($(this).val().substr(0,8));
		}
		if(!ptnPsd1.test(psdVal)||psdVal!=$('#psd').val()){
			return psd2=false;
		}
		psd2=true;
	});
	//限制验证码
	$('#code').on('keyup',function(){
		var codeVal=$(this).val();
		var ptnCode=/^\d+$/g;
		if(!ptnCode.test(codeVal)){
			$(this).val(codeVal.replace(/\D/g,''));
		}
		if($(this).val().length>6&&event.keyCode!=8){
			$(this).val($(this).val().substr(0,6));
		}
	});
	//注册提交
	$('#regist_sub').on('click',function(){
		if(tel&&psd&&psd2){
			window.location.href='my.html';
		}
	});
	//找回密码提交
	$('#forget_sub').on('click',function(){
		if(tel&&psd){
			window.location.href='login.html';
		}
	});
	//发送验证码
	$('#getCode').bind('click',function(){
		$(this).unbind('click');
		sendcode();
	});
	function sendcode(){
		$('#getCode').css({
			backgroundColor:'#ccc'
		}).html('<span id="time">60</span>s后再次获取');
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
				backgroundColor:'#fa7070'
			}).html('获取验证码');
			clearInterval(timer);
		},60000);
	}
})