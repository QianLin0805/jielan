// JavaScript Document
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
	//身份证
	var iCard=false;
	$('#iCard').on('keyup',function(){
		var cardVal=$(this).val();
		var ptnCard=/^\d+[X]?$/g;
		var ptnCard1=/^\d{15}$/g;
		var ptnCard2=/^\d{17}[0-9X]?$/g;
		//限制只能输入数字或字母X
		if(!ptnCard.test(cardVal)){
			$(this).val(cardVal.replace(/[^\dX]/g,''));
		}
		if(cardVal.length>18){
			$(this).val($(this).val().substr(0,18));
		}
		//验证身份证
		if(ptnCard1.test(cardVal)||ptnCard2.test(cardVal)){
			iCard=true;
		}else{
			return iCard=false;
		}
	});
	$('#complete').on('click',function(){
		if(name&&tel&&iCard){
			window.location.href='regist2.html';
		}
	});
});