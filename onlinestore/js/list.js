// JavaScript Document
document.onreadystatechange = function (){ 
	if(document.readyState=="complete"){
		if($('#scroller').height()<=$('#wrapper').height()){
			loadover = true;        //控制是否已全部加载
			$('.loadover').show();
			$('#pullUp').hide();
		}else{
			loadover = false;
			$('.loadover').hide()
			$('#pullUp').show();
		}
	}
	if(loadover){
		$('.pullUpIcon,.pullUpLabel').hide();
		$('.loadover2').show();
	}
}
$(function(){
	(function buju(){
		var bili=pk/750;
		if(pk>640){
			$('.list li').css('width',316+'px');
		}else{
			$('.list li').css('width',0.5*pk-4+'px');
		}
	})();
	$('.top li a').on('click',function(event){
		if($(this).is('.current')){
			event.preventDefault();
		}
	});
	$('#classify').on('click',function(){
		if($('.shadow').is(':hidden')){
			$(this).attr('src','images/classify_red.png');
			$('.shadow').show();
		}else{
			$(this).attr('src','images/classify_grey.png');
			$('.shadow').hide();
		}
	});
	
	createWaterFall();     //创建瀑布流
});