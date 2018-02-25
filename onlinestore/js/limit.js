// JavaScript Document
//表单限制
$(function(){
	$('#tel').on('keyup',function(){
		var ptn=/^\d+$/g;
		if(!ptn.test($(this).val())){
			$(this).val($(this).val().replace(/\D/g,''));
		}
	});
	$('#code').on('keyup',function(){
		var ptn=/^\d+$/g;
		if(!ptn.test($(this).val())){
			$(this).val($(this).val().replace(/\D/g,''));
		}
	});
	$('#psd').on('keyup',function(){
		var ptn=/^\w+$/g;
		if(!ptn.test($(this).val())){
			$(this).val($(this).val().replace(/\W/g,''));
		}
	});
	$('#bank').on('keyup',function(){
		var ptn=/^\d+$/g;
		if(!ptn.test($(this).val())){
			$(this).val($(this).val().replace(/\D/g,''));
		}
	});
	$('#code').on('keyup',function(){
		var ptn=/^\d+$/g;
		if(!ptn.test($(this).val())){
			$(this).val($(this).val().replace(/\D/g,''));
		}
	});
})