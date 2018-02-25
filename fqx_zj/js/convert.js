// JavaScript Document
$(document).ready(function(){
	var pingkuan=$(window).width();
	var pinggao=$(window).height();
	var bili=pingkuan/640;
    function buju(){
		$('.wrap').css({
			height:pinggao
		});
		$('.hongbao').css({
			height:pinggao //-bili*385+'px'
		});
		$('.hongbao').children('img').css({
			marginTop:-bili*385+'px'
		});
	}
	buju();
	$('#convert').bind('click',function(){
		$('.wrap').show();
		$('.box').show().addClass('animate1');
	});
	$('.wrap_bg').on('click',function(){
		$(this).parent().hide();
		$('.box').removeClass('animate1');
		$('#count').val('');
	});
	//限制兑换表单只能输入数字
	var count=false;
	$('#count').on('keyup',function(){
		var countVal=$(this).val();
		var ptnCount=/^\d+$/g;
		if(!ptnCount.test(countVal)){
			$(this).val(countVal.replace(/\D/g,''));
			return count=false;
		}
		count=true;
	});
	$('#lj_convert').bind('click',function(){
		//验证数额
		var myCent=parseInt($('#myCent').text());
		var countEnter=parseInt($('#count').val());
		if(countEnter==0||$('#count').val()==''){
			$('.tishi').show().text('请输入兑换金额');
			setTimeout(function(){
				$('.tishi').hide();
			},1000);
			return;
		}
		if(countEnter>myCent){
			$('.tishi').show().text('积分不足，请重新输入');
			setTimeout(function(){
				$('.tishi').hide();
			},1000);
			return;
		}
		//页面添加数据
		var convertItem;
		if($('ul').children().length==0){
			convertItem='<li class="con_after" style="border:none;"><span></span><b>已兑换</b><i></i></li>';
		}else{
			convertItem='<li class="con_after"><span></span><b>已兑换</b><i></i></li>';
		}
		$('.box').removeClass('animate1').addClass('animate2');
		$('#myCent').text(myCent-countEnter);
		$('ul').prepend(convertItem);
		$('ul li:eq(0)').children('span').text('2015-07-27');
		$('ul li:eq(0)').children('i').text('-'+countEnter);
		$('#count').val('');
		//红包动画
		setTimeout(function(){
			$('.box').hide().removeClass('animate2');
			$('.wrap').hide();
			$('.hongbao').show();
			$('.hongbao').children('a').show().prev().show();
			$('.hongbao').addClass('animate3');
		},210);
		//获得红包数量
		$('.hongbao').children('a').bind('click',function(){
			$(this).hide().prev().hide();
			$('.money').html('恭喜您获得<br /><span>123.00</span>元红包').css('top',0).animate({top:'50%'},400);
			$('.hbbg').bind('click',function(){
				$(this).unbind('bind');
				$('.hongbao').hide().removeClass('animate3');
				$('.money').html('');
			});
			setTimeout(function(){
				$('.hongbao').hide().removeClass('animate3');
				$('.money').html('');
			},4400);
		});
	});
});