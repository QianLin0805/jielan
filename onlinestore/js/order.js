// JavaScript Document
$(function(){
	if($('#scroller').height()<=$('#wrapper').height()){
		loadover = true;        //控制是否已全部加载
		$('.loadover').show();
		$('#pullUp').hide();
	}else{
		loadover = false;
		$('.loadover').hide()
		$('#pullUp').show();
	}
	if(loadover){
		$('.pullUpIcon,.pullUpLabel').hide();
		$('.loadover2').show();
	}
	$('.list a').on('click',function(){
		if($(this).is('.current')){
			event.preventDefault();
		}
	});
    $('.cancelBtn').on('click',function(){       //待发货删除订单
        var that=$(this);
        $('.cancelOrder').show();
        $('.cancel').unbind('click');
        $('.cancel').bind('click',function(){
            $('.cancelOrder').hide();
        });
        $('.sure').on('click',function(){
            $('.cancelOrder').hide();
            that.parent().parent().remove();
            myScroll.refresh();
        });
    });
    $('.surepay').on('click',function(){       //待收货确认收货
        var that=$(this);
        $('.sureOrder').show();
        $('.cancel').unbind('click');
        $('.cancel').bind('click',function(){
            $('.sureOrder').hide();
        });
        $('.sure').on('click',function(){
            $('.sureOrder').hide();
            window.location.href='success.html';
        });
    });
    $('.deleteBtn').on('click',function(){     //交易成功删除订单
        var that=$(this);
        $('.deleteOrder').show();
        $('.cancel').unbind('click');
        $('.cancel').bind('click',function(){
            $('.deleteOrder').hide();
        });
        $('.sure').on('click',function(){
            $('.deleteOrder').hide();
            that.parent().parent().remove();
            myScroll.refresh();
        });
    });
});