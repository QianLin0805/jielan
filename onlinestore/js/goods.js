// JavaScript Document
$(function(){
	//收藏
	$('.collect').on('click',function(){
		if($(this).is('.collected')){
			$(this).removeClass('collected');
			$('.tips p').text('取消收藏成功！');
		}else{
			$(this).addClass('collected');
			$('.tips p').text('添加收藏成功！');
		}
		$('.tips img').attr('src','images/collect1.png');
		$('.tips').show();
		tips();
	});

	//选择参数
	$('.option p').on('click',function(){
		if($(this).is('.active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active').siblings().removeClass('active');
		};
	});

	//购买数量
	$('#num').on('keyup',function(){     //限制输入法
		var ptn=/^\d+$/g;
		if(!ptn.test($(this).val())){
			$(this).val($(this).val().replace(/\D/g,''));
		}
	});
	$('#num').on('blur',function(){
		if($(this).val()==''||$(this).val()<=0){
			$(this).val('1');
			return;
		}
	});
	var resize=null;
	$('#num').on('focus',function(){
		var maskHeight=$('.mask').height();
		if(navigator.platform=='iPhone'){
	        if(!resize){
	            resize=setInterval(function(){
	                if(document.activeElement.nodeName=='INPUT'){
	                    $('.mask').css('height',maskHeight+50);
	                    $('.box').css('bottom','50px');
	                }else{
                        if(resize){
                            clearInterval(resize);
                            resize=null;
                        }
                        $('.mask').css('height',maskHeight);
	                    $('.box').css('bottom',0);
	                }
	            },100);
	        }
    	}
	});
	//加
	$('#addNum').on('click',function(){
		var num=Number($(this).next().val());
		$(this).next().val(num+1);
	});
	//减
	$('#minusNum').on('click',function(){
		var num=Number($(this).prev().val());
		if(num>1){
			$(this).prev().val(num-1);
		}
	});

	var selectAll=false;                        //参数是否全部选择
	function select(obj){                       //跳出选择参数窗口
		if(obj.is('.select')){
			$('.mask,#add,#buy').show();
		}else if(obj.is('.bottom .add')){
			$('.mask,#sure1').show();
		}else if(obj.is('.bottom .buy')){
			$('.mask,#sure2').show();
		}
		$('.box').animate({bottom:0},400);
	}
	function selectOver(obj){                   //关闭选择参数窗口
		var types='';
		var typeName='';
		var pg=$(window).height();
		if(obj.is('.close')){
			var selectNum=0;
			for(var i=0;i<$('.option').length;i++){
				if(!$('.option').eq(i).children('.active').length<=0){
					types=types+'\"'+$('.option').eq(i).children('.active').text()+'\" ';
					selectNum++;
				}
				typeName=typeName+$('.option').eq(i).prev().text()+' ';
			}
			if(types){
				$('.select b').text('已选择');
				$('.select span').text(types);
			}else{
				$('.select b').text('选择');
				$('.select span').text(typeName);
			}
			if(selectNum==$('.option').length){
				selectAll=true;
			}
		}else if(obj.is('.btn')){
			for(var i=0;i<$('.option').length;i++){
				typeName=$('.option').eq(i).prev().text();
				if($('.option').eq(i).children('.active').length<=0){
					$('.tips img').attr('src','images/surprise.png');
					$('.tips p').text('请选择'+typeName);
					$('.tips').show();
					tips();
					return;
				}
				if(i==$('.option').length-1){
					selectAll=true;
				}
				types=types+'\"'+$('.option').eq(i).children('.active').text()+'\" ';
			}
			var num=Number($('#num').val());                            //数量
			$('.select b').text('已选择');
			$('.select span').text(types);
			if(obj.is('#add')||obj.is('#sure1')){
				setTimeout(function(){
					$('.tips img').attr('src','images/radio2.png');
					$('.tips p').text('加入进货单成功！');
					$('.tips').show();
					tips();
				},400);
			}
		}
		if(pg>=600){
			$('.box').animate({bottom:'-530px'},400,function(){
				$('.mask,#add,#buy').hide();
			});
		}else{
			$('.box').animate({bottom:'-430px'},400,function(){
				$('.mask,#add,#buy').hide();
			});
		}
	}

	//跳出选择参数窗口
	$('.select,.bottom .add').on('click',function(){
		select($(this));
	});
	//关闭选择参数窗口
	$('.close,#sure1,#add').on('click',function(){
		selectOver($(this));
	});
	//立刻购买
	$('.bottom .buy').on('click',function(){
		if($('.option').children('.active').length==$('.option').length){
			selectAll=true;
		}
		if(!selectAll){
			select($(this));
			return;
		}
		var num=Number($('#num').val());                            //数量
		window.location.href='sureOrder.html';
	});
	$('#sure2,#buy').on('click',function(){
		selectOver($(this));
		if(!selectAll) return;
		var pg=$(window).height();
		if(pg>=600){
			$('.box').animate({bottom:'-530px'},400,function(){
				$('.mask,#add,#buy').hide();
			});
		}else{
			$('.box').animate({bottom:'-430px'},400,function(){
				$('.mask,#add,#buy').hide();
			});
		}
		var num=Number($('#num').val());                            //数量
		setTimeout(function(){
			window.location.href='sureOrder.html';
		},400);		
	});
});