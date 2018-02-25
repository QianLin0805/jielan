// JavaScript Document
$(function(){
	var pk=$(window).width();
	var pg=$(window).height();
	(function (){
		var bili=pk/640;
		var size=$('.fruit p').text().length;
		var time=new Date();
		var live=true;
		//一些布局
		$('.banner').css('height',bili*203);
		$('.slide li').css('width',pk);
		$('.notice,.fruit').css('width',pk/2-20);
		$('.sqt,.news,.lottery,.deliver').css('width',pk/2-13);
		$('.tip').css('height',pg);
		
		$('.index').addClass('current');   //导航
		$('.time').text(time.getFullYear()+'-'+time.getMonth()+'-'+time.getDate());  //时间
		
		if(size>10){
			$('.fruit p').text($('.fruit p').text().substring(0,9)+'...');
		}
		
		//轮播白点个数
		for(var i=0;i<$('.slide li').length;i++){
			$('.dot ul').append('<li></li>');
		}
		
		//是否显示导航
		if(!live){
			$('header').addClass('not_yet');
			$('.banner').css('top',0);
			$('.list').css('marginTop',bili*203+3+'px');
			$('.index_wrap').css('height',pg);
			$('.tip').show();
		}else{
			$('header').removeClass('not_yet');
			$('.banner').css('top','40px');
			$('.list').css('marginTop',bili*203+43+'px');
			$('.index_wrap').css('height','auto');
			$('.tip').hide();
		}
	})();
	
	//图片轮播
	var i=1;
	var j=$('.slide').children().length;
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
	function leftScroll(){
		var length=-(pk*i);
		var length2=9*i;
		var firstClone=$('.slide').children().first().clone();
		if(i<j){
			$('.slide').animate({left:length},600);
			$('.move_dot').animate({left:length2},600);
			i++;
		}else{
			$('.slide').append(firstClone).animate({left:length},600,function(){
				$(this).css('left',0).children().last().remove();
			});
			$('.move_dot').animate({left:length2-4.5},300,function(){
				$(this).css('left','-4.5px');
				$(this).animate({left:0},300);
			});
			return i=1;
		}
	}
	function rightScroll(){
		var length=-pk*(i-2);
		var length2=9*(i-2);
		var lastClone=$('.slide').children().last().clone();
		if(i>1){
			$('.slide').animate({left:length},600);
			$('.move_dot').animate({left:length2},600);
			i--;
		}else{
			$('.slide').css('left',-pk);
			$('.slide').prepend(lastClone).animate({left:0},600,function(){
				$(this).css('left',(1-j)*pk).children().first().remove();
			});
			$('.move_dot').animate({left:'-4.5px'},300,function(){
				$(this).css('left',j*9-4.5);
				$(this).animate({left:(j-1)*9},300);
			});
			return i=3;
		}
	}
	
	//天气
	var startX;
	var startP;
	var targetP;
	$('.weather').on('touchstart',function(){
		startX=event.touches[0].pageX;
		startP=$(this).offset().left;
	});
	$('.weather').on('touchmove',function(){
		event.preventDefault();
		targetP=event.changedTouches[0].pageX-startX;
		if(($(this).offset().left<=0&&targetP<0)||($(this).offset().left>=(pk-100)&&targetP>0)){
			return false;
		}else{
			$(this).css('left',targetP+startP);
		}
	});
})