// JavaScript Document
$(function(){
	//评论数目
	(function(){
		var commentCount=$('.item').length;
		$('.reply_all').text(commentCount);
	})();
	
	$(document).on('touchstart',function(event){
		if($(event.target).closest('.comment_box').length==0){
			$('.comment_box').hide().removeClass('show');
		}
		if($(event.target).closest('.bottom').length==0){
			$('.leave_message').blur();
		}
	});
	
	//页面点赞
	$('.hand').on('click',function(){
		var praiseAll=parseInt($('.praise_all').text());
		if(!$(this).is('.praised')){
			$(this).addClass('praised').attr('src','images/hand2.png');
			$('.praise_all').text(praiseAll+1).css('backgroundImage','url(images/praise1.png)');
		}else{
			$(this).removeClass('praised').attr('src','images/hand1.png');
			$('.praise_all').text(praiseAll-1).css('backgroundImage','url(images/praise.png)');
		}
	});
	
	//弹出隐藏点赞回复按钮
	$('.reply_pic').on('touchstart',function(event){
		event.preventDefault();
		event.stopPropagation();
	});
	$('.reply_pic').on('touchend',function(event){
		var picNum=$(this).parent().parent().index()-1;
		$('.item').eq(picNum).siblings('.item').children('.comment_more').children('.comment_box').hide();
		if($(this).next().is(':hidden')){
			$(this).next().removeClass('hide').addClass('show').show();
		}else{
			$(this).next().removeClass('show').addClass('hide');
			setTimeout(function(){
				$('.comment_box').eq(picNum).hide();
			},300);
		}
	});
	
	//评论点赞
	$('.praise').on('touchstart',function(event){
		event.preventDefault();
	});
	$('.praise').on('touchend',function(){
		var itemNum=$(this).parent().parent().parent().index()-1;
		var praiseCount=parseInt($('.item').eq(itemNum).children('h3').children('.praise_count').text());
		//alert(praiseCount)
		if($(this).is('.cancal')){
			$('.praise_count').eq(itemNum).text(praiseCount-1).css('backgroundImage','url(images/praise.png)');
			$(this).removeClass('cancal');
			$(this).children('i').text('赞');
			$(this).children('img').addClass('big');
		}else{
			$('.praise_count').eq(itemNum).text(praiseCount+1).css('backgroundImage','url(images/praise1.png)');
			$(this).addClass('cancal');
			$(this).children('i').text('取消');
			$(this).children('img').addClass('big');
		}
		setTimeout(function(){
			$('.comment_box').eq(itemNum).hide().removeClass('show');
			$('.praise').eq(itemNum).children('img').removeClass('big');
		},350);
	});
	
	//评论
	$('.comment').on('touchstart',function(event){
		event.preventDefault();
		$('.send2').unbind('click');
		$('.leave_message').val('');
		$('.send1').css('background','#ccc');
	});
	$('.comment').on('touchend',function(event){
		var myname="myname";
		var that=$(this).parent().parent().next().html();
		var itemNum=$(this).parent().parent().parent().index()-1;
		$(this).parent().hide().removeClass('show');
		$('.bottom1').hide();
		$('.bottom2').show();
		$('#leave_message2').trigger('focus');
		var replyTop=$('.reply_pic').eq(itemNum).children().offset().top+25;
		if(navigator.platform=='iPhone'){
			setTimeout(function(){
				var viewHeight=window.innerHeight-61;
				if(replyTop>viewHeight){
					$(window).scrollTop(replyTop-viewHeight);
					$('.bottom2').css('top',replyTop+11);
				}else{
					$(window).scrollTop(0);
					$('.bottom2').css('top',viewHeight);
				}
			},500);
		}else if(/Linux/g.test(navigator.platform)){
			setTimeout(function(){
				var viewHeight=window.innerHeight-61;
				if(replyTop>viewHeight){
					$(window).scrollTop(replyTop-viewHeight);
				}else{
					$(window).scrollTop(0);
				}
			},500);
		}
		$('.send2').bind('click',function(){
			var message=$('#leave_message2').val();
			if($('#leave_message2').val()!=''){
				$('#leave_message2').val('');
				if(that==undefined){
					$('.item').eq(itemNum).append('<div class="reply"><img src="images/delta1.png" alt="" /><p><span>'+myname+'</span>：<i>'+message+'</i></p></div>');
				}else{
					$('.reply').eq(itemNum).append('<p><span>'+myname+'</span>：<i>'+message+'</i></p>');
				}
				$('.bottom1').show();
				$('.bottom2').hide();
				$('.send2').css('background','#ccc');
			}
		});
	});
	
	//回复
	$('.reply').children('p').on('click',function(){
		var myname="myname";
		var that=$(this);
		var itemNum=$(this).parent().parent().index()-1;
		var replyPerson=$(this).children().first().text();
		$('.send1').css('background','#ccc');
		$('.send2').unbind('click');
		$('.bottom1').hide();
		$('.bottom2').show();
		$('.leave_message').val('');
		$('#leave_message2').trigger('focus');
		$('#leave_message2').val('');
		$('#leave_message2').attr('placeholder','回复'+replyPerson+'：');
		var replyTop=$(this).offset().top+$(this).height();
		if(navigator.platform=='iPhone'){
			setTimeout(function(){
				var viewHeight=window.innerHeight-61;
				if(replyTop>viewHeight){
					$(window).scrollTop(replyTop-viewHeight);
					$('.bottom2').css('top',replyTop+11);
				}else{
					$(window).scrollTop(0);
					$('.bottom2').css('top',viewHeight);
				}
			},500);
		}else if(/Linux/g.test(navigator.platform)){
			setTimeout(function(){
				var viewHeight=window.innerHeight-61;
				if(replyTop>viewHeight){
					$(window).scrollTop(replyTop-viewHeight);
				}else{
					$(window).scrollTop(0);
				}
			},500);
		}
		$('.send2').bind('click',function(){
			var message=$('#leave_message2').val();
			if($('#leave_message2').val()!=''){
				$('#leave_message2').val('').attr('placeholder','回复：');
				that.after('<p><span>'+myname+'</span> 回复 <span>'+replyPerson+'</span>：<i>'+message+'</i></p>');
				$('.bottom1').show();
				$('.bottom2').hide();
				$('.send2').css('background','#ccc');
			}
		});
	});
	
	//输入
	function entry1(){
		$('#leave_message1').on('keyup',function(){
			if($('#leave_message1').val()==''){
				$('.send1').css('background','#ccc');
			}else{
				$('.send1').css('background','#00b034');
			}
		});
	}
	function entry2(){
		$('#leave_message2').on('keyup',function(){
			if($('#leave_message2').val()==''){
				$('.send2').css('background','#ccc');
			}else{
				$('.send2').css('background','#00b034');
			}
		});
	}
	(function(){
		var resize1=null;
		var resize2=null;
		//说说看法
		var pingkuan=$(window).width();
		document.getElementById('leave_message1').addEventListener('focus',function(){
			$('#leave_message1').animate({
				width:pingkuan-92+'px',
				marginLeft:'36px',
				marginRight:'10px'
			},'fast');
			$('.bot_wrap').animate({left:'-68px'},'fast');
			var replyTop=$('.item').eq(0).offset().top;
			entry1();
			if(navigator.platform=='iPhone'){
				setTimeout(function(){
					var viewHeight=window.innerHeight-50;
					if(replyTop>viewHeight){
						$(window).scrollTop(replyTop-viewHeight);
						$('.bottom1').css('top',replyTop);
					}else{
						$(window).scrollTop(0);
						$('.bottom1').css('top',viewHeight);
					}
				},400);
				if(!resize1){
					resize1=setInterval(function(){
						if(document.activeElement.nodeName=='INPUT'){
							$('.bottom1').css({
								position:'absolute',
								bottom:''
							});
						}else{
							$('.bottom1').css({
								position:'fixed',
								top:'',
								bottom:0
							});
							if(resize1){
								clearInterval(resize1);
								resize1=null;
							}
						}
					},400);
				}
			}else if(/Linux/g.test(navigator.platform)){
				setTimeout(function(){
					var viewHeight=window.innerHeight-50;
					if(replyTop>viewHeight){
						$(window).scrollTop(replyTop-viewHeight);
					}else{
						$(window).scrollTop(0);
					}
				},400);
			}
		},false);
		$('.send1').bind('click',function(){
			var replyContent=$('#leave_message1').val();
			var myname="myname";
			var time="1分钟";
			var replyCount=parseInt($('#replyNum').text());
			$('.item').eq(0).before('<div class="item"><h3><b>'+myname+'</b><span class="praise_count">0</span></h3><p class="message">'+replyContent+'</p><div class="comment_more"><span>'+time+'</span>前<div class="reply_pic"><img src="images/reply.png" alt="" /></div><div class="comment_box"><p class="praise"><img src="images/hart.png" alt="" /><i>赞</i></p><p class="comment"><img src="images/comment1.png" alt="" /><i>评论</i></p></div></div></div>');
			$('#leave_message1').val('');
			$('.send1').css('background','#ccc');
			$('#leave_message1').animate({
				width:pingkuan-68+'px',
				marginLeft:'10px',
				marginRight:'12px'
			},'fast');
			$('.bot_wrap').animate({left:0},'fast');
		});
		document.getElementById('leave_message1').addEventListener('blur',function(){
			if($('#leave_message1').val()==''){
				$('#leave_message1').animate({
					width:pingkuan-68+'px',
					marginLeft:'10px',
					marginRight:'12px'
				},'fast');
				$('.bot_wrap').animate({left:0},'fast');
			}
		},false);
		
		document.getElementById('leave_message2').addEventListener('focus',function(){
			entry2();
			if(navigator.platform!='iPhone'){return;}
			if(!resize2){
				resize2=setInterval(function(){
					if(document.activeElement.nodeName=='INPUT'){
						$('.bottom2').css({
							position:'absolute',
							bottom:''
						});
					}else{
						$('.bottom2').css({
							position:'fixed',
							top:'',
							bottom:0
						});
						if(resize2){
							clearInterval(resize2);
							resize2=null;
						}
					}
				},500);
			}
		},false);
		document.getElementById('leave_message2').addEventListener('blur',function(){
			if($('#leave_message2').val()==''){
				$('.publish1').show();
				$('.publish2').hide();
			}
		},false);
	})();
	/*$('.leave_message').on('focus',function(){
		$(this).on('keyup',function(){
			if($(this).val()!=''){
				$('.send').css('background','#00b034');
			}else{
				$('.send').css('background','#ccc');
			}
		});
		$(this).on('blur',function(){
		});
		$('.send').on('click',function(){
			if($('.leave_message').val!=''){
				$('.leave_message').val('');
				$('.defeat').show();
				setTimeout(function(){
					$('.defeat').hide();
				},1000);
			}
		});
	});*/
});