// JavaScript Document
$(document).ready(function(){
	var pingkuan=$(window).width();
	var pinggao=$(window).height();
	var startX;
	var startY;
	var x;
	var y;
	//图片轮播
	var i=1;
	var j=$('.banner').children().length;
	function leftScroll(){
		var length=-(pingkuan*i);
		var firstClone=$('.banner').children().first().clone();
		if(i<j){
			$('.banner').animate({left:length},600);
			$('.circle').children().eq(i).addClass('ban_current').siblings().removeClass('ban_current');
			i++;
		}else{
			$('.banner').append(firstClone).animate({left:length},600,function(){
				$(this).css('left',0).children().last().remove();
			});
			$('.circle').children().eq(0).addClass('ban_current').siblings().removeClass('ban_current');
			return i=1;
		}
	}
	function rightScroll(){
		var length=-pingkuan*(i-2);
		var lastClone=$('.banner').children().last().clone();
		if(i>1){
			$('.banner').animate({left:length},600);
			$('.circle').children().eq(i-2).addClass('ban_current').siblings().removeClass('ban_current');
			i--;
		}else{
			$('.banner').css('left',-pingkuan);
			$('.banner').prepend(lastClone).animate({left:0},600,function(){
				$(this).css('left',(1-j)*pingkuan).children().first().remove();
			});
			$('.circle').children().eq(j-1).addClass('ban_current').siblings().removeClass('ban_current');
			return i=3;
		}
	}
	$('.banner').on('touchstart',function(){
		startX=event.touches[0].pageX;
	});
	$('.banner').on('touchmove',function(){
		event.preventDefault();
	});
	$('.banner').on('touchend',function(){
		x=event.changedTouches[0].pageX-startX;
		if(x<0){
			leftScroll();
		}else if(x>0){
			rightScroll();
		}
	});
	setInterval(leftScroll,4000);
	
	//图标滚动
	var p=1;
	var q=$('.index_ul2').children().length;
	$('#right').bind('click',function(){
		var lengthL=-0.9*pingkuan*p-0.05*pingkuan*(p-1);
		var firstClone=$('.index_ul2').children().first().clone();
		if(p<q){
			$('.index_ul2').animate({left:lengthL});
			p++;
		}else{
			$('.index_ul2').append(firstClone).animate({left:lengthL},function(){
				$(this).css('left','5%').children().last().remove();
			});
			return p=1;
		}
	});
	$('#left').bind('click',function(){
		var lengthR=-0.9*pingkuan*(p-2)-0.05*pingkuan*(p-3);
		var lastClone=$('.index_ul2').children().last().clone();
		if(p>1){
			$('.index_ul2').animate({left:lengthR});
			p--;
		}else{
			$('.index_ul2').css('left',-0.95*pingkuan);
			$('.index_ul2').prepend(lastClone).animate({left:'5%'},function(){
				$(this).css('left',0.9*(1-q)*pingkuan+0.05*(2-q)*pingkuan).children().first().remove();
			});
			return p=q;
		}
	});
	
	//搜索表单移入
	$('.head p').children('input').bind('click',function(){
		$('.search').show().animate({top:0});
	});
	//搜索表单移出
	$('.search_head').children('img').bind('click',function(){
		$('.search').animate({top:-pinggao},function(){
			$(this).hide();
		});
	});
	//搜索表单划动移出
	$('.search').on('touchstart',function(){
		startY=event.touches[0].pageY;
	});
	$('.search').on('touchmove',function(){
		event.preventDefault();
	});
	$('.search').on('touchend',function(){
		y=event.changedTouches[0].pageY-startY;
		if(y<-80){
			$('.search').animate({top:-pinggao},function(){
				$(this).hide();
			});
		}
	});
	//输入框
	$('.search_head div').children('input').bind('keyup',function(){
		var searchContent=$(this).val();
		if(searchContent!==''){
			$(this).css('backgroundImage','none').next().next().hide();
		}else{
			$(this).css('backgroundImage','url(images/index/search1.png)').next().next().show();
		}
	});
	
	//选择地区
	//移入
	$('.head').children('a').bind('click',function(){
		$('.choose').show().animate({left:0},'fast');
		$('.wrap').animate({left:'84%'},'fast');
	});
	//移出
	$('.cho_wrap h1 a').bind('click',function(){
		$('.wrap').animate({left:0},'fast');
		$('.choose').animate({left:'-84%'},'fast',function(){
			$(this).hide();
		});
	});
	//手指划动移出
	$('.choose').on('touchstart',function(){
		startX=event.touches[0].pageX;
	});
	$('.choose').on('touchmove',function(){
		event.preventDefault();
	});
	$('.choose').on('touchend',function(){
		x=event.changedTouches[0].pageX-startX;
		if(x<-80){
			$('.wrap').animate({left:0},'fast');
			$('.choose').animate({left:'-84%'},'fast',function(){
				$(this).hide();
			});
		}
	});
	/*//区域主题切换
	$('.cho_slide').children().first().bind('click',function(){
		$(this).addClass('cho_cur').next().removeClass('cho_cur');
		$('.cho_area').fadeIn().next().fadeOut();
	});
	$('.cho_slide').children().last().bind('click',function(){
		$(this).addClass('cho_cur').prev().removeClass('cho_cur');
		$('.cho_topic').fadeIn().prev().fadeOut();
	});*/
	//选择地区
	$('.county select').bind('change',function(){
		var selectValue=$(this).find("option:selected").attr('value');
		var selectText=$(this).find("option:selected").text();
		var selectIndex=$(this).find("option:selected").index();
		$('.now_area').children().text(selectText);
		$('.head a').children('span').text(selectValue);
		$('.street').children('select').eq(selectIndex).show().siblings('select').hide();
	});
	
	$('.arrow').bind('click',function(){
		var startStation=$(this).prev().text();
		var endStation=$(this).next().next().text();
		$(this).prev().text(endStation);
		$(this).next().next().text(startStation);
	});
})