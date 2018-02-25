// JavaScript Document
$(function(){
	$('.destruction').on('click',function(){    //说明
		$('.close').unbind('click');
		$('.mask').show();
		$('.close').bind('click',function(){
			$('.mask').hide();
		});
	});
	//结算
	function account(){
		$('.account').unbind('click');
		if(Number($('#count').text())>0){
			$('.account').addClass('able').bind('click',function(){
				window.location.href='sureOrder.html';                  //结算跳页面
			});
		}else{
			$('.account').removeClass('able').unbind('click');
		}
	}
	//小计
	function count(obj){
		var count;
		if(obj.is('.select')){
			var shop=obj.parent().parent().parent();
			count=Number(shop.children('.count').children().children().text());
			var price=Number(obj.parent().children('.price').children('b').text());
			var num=Number(obj.parent().parent().children('div').children('input').val());
			if(!obj.is(':checked')){
				shop.children('h2').children('input').get(0).checked=false;
				$('#selectAll').get(0).checked=false;
				count-=price*num;
			}else{
				count+=price*num;
			}
			shop.children('.count').children().children().text(count.toFixed(2));
		}else if(obj.is('.selectAll')){
			var shop=obj.parent().parent();
			count=0;
			for(var i=0;i<shop.children('.item').length;i++){
				var price=Number(shop.children('.item').eq(i).children('a').children('.price').children('b').text());
				var num=Number(shop.children('.item').eq(i).children('div').children('input').val());
				if(obj.is(':checked')){
					shop.children('.item').eq(i).children('a').children('input').get(0).checked=true;
					count+=price*num;
				}else{
					shop.children('.item').eq(i).children('a').children('input').get(0).checked=false;
				}
			}
			if(obj.is(':checked')){
				shop.children('.count').children().children().text(count.toFixed(2));
			}else{
				$('#selectAll').get(0).checked=false;
				shop.children('.count').children().children().text('0.00');
			}
			
		};
	}
	//加减
	function addCount(obj,x){
		if(!obj.parent().prev().children('input').is(':checked')) return;
		var shop=obj.parent().parent().parent();
		var count=Number(shop.children('.count').children().children().text());
		var price=Number(obj.parent().prev().children('.price').children('b').text())*x;
		shop.children('.count').children().children().text((count+price).toFixed(2));
	}
	//合计
	function countAll(){
		var countAll=0;
		for(var i=0;i<$('.list li').length;i++){
			countAll+=Number($('.count').eq(i).children('span').children('i').text());
		}
		$('#count').text(countAll.toFixed(2));
	}
	//减
	$('.minus').on('click',function(){
		var num=Number($(this).next().val());
		if(num>1){
			$(this).next().val(num-1);
			addCount($(this),-1);
			countAll();
		}
	});
	//加
	$('.add').on('click',function(){
		var num=Number($(this).prev().val());
		$(this).prev().val(num+1);
		addCount($(this),1);
		countAll();
	});
	//表单输入
	$('.num').on('keyup',function(){
		var ptn=/^\d+$/g;
		if(!ptn.test($(this).val())){
			$(this).val($(this).val().replace(/\D/g,''));
		}
	});
	$('.num').on('blur',function(){
		if($(this).val()==''||$(this).val()<=0){
			$(this).val('1');
			return;
		}
		if(!$(this).parent().prev().children('input').is(':checked')) return;
		var count=0;
		var shop=$(this).parent().parent().parent();
		for(var i=0;i<shop.children('.item').length;i++){
			var price=Number(shop.children('.item').eq(i).children('a').children('.price').children('b').text());
			var num=Number(shop.children('.item').eq(i).children('div').children('input').val());
			if(!shop.children('.item').eq(i).children('a').children('input').is(':checked')){
				continue;
			}
			count+=price*num;
		}
		shop.children('.count').children().children().text(count.toFixed(2));
		countAll();
	});
	//单个订单勾选
	$('.select').on('click',function(){
		count($(this));
		countAll();
		account();
	});
	//单个店铺勾选
	$('.selectAll').on('click',function(){
		count($(this));
		countAll();
		account();
	});
	//全选
	$('#selectAll').on('click',function(){
		for(var i=0;i<$('input[type=checkbox]').length-1;i++){
			if($(this).is(':checked')){
				$('input[type=checkbox]').eq(i).get(0).checked=true;
			}else{
				$('input[type=checkbox]').eq(i).get(0).checked=false;
			}
		}
		for(var i=0;i<$('.list li').length;i++){
			var shop=$('.list').children().eq(i);
			if($(this).is(':checked')){
				var count=0;
				for(var j=0;j<shop.children('.item').length;j++){
					var price=Number(shop.children('.item').eq(j).children('a').children('.price').children('b').text());
					var num=Number(shop.children('.item').eq(j).children('div').children('input').val());
					count+=price*num;
				}
				shop.children('.count').children().children().text(count.toFixed(2));
			}else{
				shop.children('.count').children().children().text('0.00');
			}
		}
		countAll();
		account();
	});
});