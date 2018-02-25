// JavaScript Document
$(function(){
	for(var i=0;i<$('.ban_slide li').length;i++){
		$('.ban_dot').append('<p></p>');
	}
	$('.ban_dot').children().first().addClass('active');
	//图片轮播
	var postNum=0;
	function leftScroll(){
		var num=$('.ban_slide li').length;
		var currentItem=$('.ban_dot').children('.active').index();
		var position=-1920*(currentItem+1);
		if(currentItem<num-1){
			$('.ban_slide').stop().animate({left:position});
			$('.ban_dot').children('.active').next().addClass('active').siblings().removeClass('active');
		}else{
			var firstClone=$('.ban_slide').children().first().clone();
			$('.ban_slide').append(firstClone);
			$('.ban_slide').stop().animate({left:position},function(){
				$(this).children().last().remove();
				$(this).css('left',0);
			});
			$('.ban_dot').children().eq(0).addClass('active').siblings().removeClass('active');
		}
	}
	setInterval(leftScroll,5000);
	$('.ban_dot p').on('click',function(){
		var num=$('.ban_slide li').length;
		var clickIndex=$(this).index();
		var currentIndex=$('.ban_dot').children('.active').index();
		var position=-1920*clickIndex;
		var position2=-1920*num;
		postNum=clickIndex;
		if(clickIndex-currentIndex>=num-1){
			var lastClone=$('.ban_slide').children().last().clone();
			$('.ban_slide').prepend(lastClone).css('left','-1920px');
			$('.ban_slide').stop().animate({left:0},function(){
				$(this).children().first().remove();
				$(this).css('left',position);
			});
		}else if(clickIndex-currentIndex<=-3){
			var firstClone=$('.ban_slide').children().first().clone();
			$('.ban_slide').append(firstClone);
			$('.ban_slide').stop().animate({left:position2},function(){
				$(this).children().last().remove();
				$(this).css('left',0);
			});
		}else{
			$('.ban_slide').stop().animate({left:position});
		}
		$(this).addClass('active').siblings().removeClass('active');
	});
})