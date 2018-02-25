// JavaScript Document
angular.module('myApp',[]).controller('dataCtrl',function($scope){
	$pageCount=10;                  //总页数
	$scope.currentPage=1;           //当前页
	$scope.firstNumber=1;           //页码第一个数字
    $scope.data = [                 //第一页数据
		{href:"caseDetail.html",src:"images/news/pic1.jpg",title:"公安便民亭现场1",time:"2015-11-30"},
		{href:"caseDetail.html",src:"images/news/pic2.jpg",title:"公安便民亭现场2",time:"2015-11-29"},
		{href:"caseDetail.html",src:"images/news/pic3.jpg",title:"公安便民亭现场3",time:"2015-11-28"},
		{href:"caseDetail.html",src:"images/news/pic4.jpg",title:"公安便民亭现场4",time:"2015-11-27"},
		{href:"caseDetail.html",src:"images/news/pic5.jpg",title:"公安便民亭现场5",time:"2015-11-26"},
		{href:"caseDetail.html",src:"images/news/pic6.jpg",title:"公安便民亭现场6",time:"2015-11-25"},
		{href:"caseDetail.html",src:"images/news/pic7.jpg",title:"公安便民亭现场7",time:"2015-11-24"},
		{href:"caseDetail.html",src:"images/news/pic8.jpg",title:"公安便民亭现场8",time:"2015-11-23"},
		{href:"caseDetail.html",src:"images/news/pic9.jpg",title:"公安便民亭现场9",time:"2015-11-22"}
	];
	//页面跳转
	$scope.skit = function($event){
		//点击某一页
		if($event.target.tagName=='I'&&$event.target.innerHTML==$scope.firstNumber+4){
			if($event.target.innerHTML==$scope.currentPage)return;
			$scope.currentPage=$event.target.innerHTML;   //返回当前页
			if($pageCount-$event.target.innerHTML>=2){
				$scope.firstNumber=$scope.firstNumber+2;  //返回第一个页码
				$('.pages').eq(2).addClass('current').siblings().removeClass('current');
			}else if($pageCount==$event.target.innerHTML){
				$('.pages').eq(4).addClass('current').siblings().removeClass('current');
			}else{
				$scope.firstNumber=$scope.firstNumber+1;  //返回第一个页码
				$('.pages').eq(2).addClass('current').siblings().removeClass('current');
			}
			//数据更换
			$scope.data = [
				{href:"caseDetail.html",src:"images/news/pic1.jpg",title:"公安便民亭现场11",time:"2015-11-30"},
				{href:"caseDetail.html",src:"images/news/pic2.jpg",title:"公安便民亭现场12",time:"2015-11-29"},
				{href:"caseDetail.html",src:"images/news/pic3.jpg",title:"公安便民亭现场13",time:"2015-11-28"},
				{href:"caseDetail.html",src:"images/news/pic4.jpg",title:"公安便民亭现场14",time:"2015-11-27"},
				{href:"caseDetail.html",src:"images/news/pic5.jpg",title:"公安便民亭现场15",time:"2015-11-26"},
				{href:"caseDetail.html",src:"images/news/pic6.jpg",title:"公安便民亭现场16",time:"2015-11-25"},
				{href:"caseDetail.html",src:"images/news/pic7.jpg",title:"公安便民亭现场17",time:"2015-11-24"},
				{href:"caseDetail.html",src:"images/news/pic8.jpg",title:"公安便民亭现场18",time:"2015-11-23"},
				{href:"caseDetail.html",src:"images/news/pic9.jpg",title:"公安便民亭现场19",time:"2015-11-22"}
			]
		}else if($event.target.tagName=='I'&&$event.target.innerHTML==$scope.firstNumber){
			if($event.target.innerHTML==$scope.currentPage)return;
			$scope.currentPage=$event.target.innerHTML;   //返回当前页
			if($scope.firstNumber>2){
				$scope.firstNumber=$event.target.innerHTML-2;  //返回第一个页码
				$('.pages').eq(2).addClass('current').siblings().removeClass('current');
			}else if($scope.firstNumber==1){
				$('.pages').eq(0).addClass('current').siblings().removeClass('current');
			}else{
				$scope.firstNumber=1;  //返回第一个页码
				$('.pages').eq(1).addClass('current').siblings().removeClass('current');
			}
			//数据更换
			$scope.data = [
				{href:"caseDetail.html",src:"images/news/pic1.jpg",title:"公安便民亭现场11",time:"2015-11-30"},
				{href:"caseDetail.html",src:"images/news/pic2.jpg",title:"公安便民亭现场12",time:"2015-11-29"},
				{href:"caseDetail.html",src:"images/news/pic3.jpg",title:"公安便民亭现场13",time:"2015-11-28"},
				{href:"caseDetail.html",src:"images/news/pic4.jpg",title:"公安便民亭现场14",time:"2015-11-27"},
				{href:"caseDetail.html",src:"images/news/pic5.jpg",title:"公安便民亭现场15",time:"2015-11-26"},
				{href:"caseDetail.html",src:"images/news/pic6.jpg",title:"公安便民亭现场16",time:"2015-11-25"},
				{href:"caseDetail.html",src:"images/news/pic7.jpg",title:"公安便民亭现场17",time:"2015-11-24"},
				{href:"caseDetail.html",src:"images/news/pic8.jpg",title:"公安便民亭现场18",time:"2015-11-23"},
				{href:"caseDetail.html",src:"images/news/pic9.jpg",title:"公安便民亭现场19",time:"2015-11-22"}
			]
		}else if($event.target.tagName=='I'&&$event.target.innerHTML>$scope.firstNumber&&$event.target.innerHTML<$scope.firstNumber+4){
			if($event.target.innerHTML==$scope.currentPage)return;
			$scope.currentPage=$event.target.innerHTML;   //返回当前页
			var indexNum=$event.target.innerHTML-$scope.firstNumber;
			$('.pages').eq(indexNum).addClass('current').siblings().removeClass('current');
			//数据更换
			$scope.data = [
				{href:"caseDetail.html",src:"images/news/pic1.jpg",title:"公安便民亭现场11",time:"2015-11-30"},
				{href:"caseDetail.html",src:"images/news/pic2.jpg",title:"公安便民亭现场12",time:"2015-11-29"},
				{href:"caseDetail.html",src:"images/news/pic3.jpg",title:"公安便民亭现场13",time:"2015-11-28"},
				{href:"caseDetail.html",src:"images/news/pic4.jpg",title:"公安便民亭现场14",time:"2015-11-27"},
				{href:"caseDetail.html",src:"images/news/pic5.jpg",title:"公安便民亭现场15",time:"2015-11-26"},
				{href:"caseDetail.html",src:"images/news/pic6.jpg",title:"公安便民亭现场16",time:"2015-11-25"},
				{href:"caseDetail.html",src:"images/news/pic7.jpg",title:"公安便民亭现场17",time:"2015-11-24"},
				{href:"caseDetail.html",src:"images/news/pic8.jpg",title:"公安便民亭现场18",time:"2015-11-23"},
				{href:"caseDetail.html",src:"images/news/pic9.jpg",title:"公安便民亭现场19",time:"2015-11-22"}
			]
		}
		//首页
		if($event.target.innerHTML=='首页'){
			if($scope.currentPage==1)return;
			$scope.currentPage=1;   //返回当前页
			$scope.firstNumber=1;   //返回第一个页码
			$('.pages').eq(0).addClass('current').siblings().removeClass('current');
			//数据更换
			$scope.data = [
				{href:"caseDetail.html",src:"images/news/pic1.jpg",title:"公安便民亭现场11",time:"2015-11-30"},
				{href:"caseDetail.html",src:"images/news/pic2.jpg",title:"公安便民亭现场12",time:"2015-11-29"},
				{href:"caseDetail.html",src:"images/news/pic3.jpg",title:"公安便民亭现场13",time:"2015-11-28"},
				{href:"caseDetail.html",src:"images/news/pic4.jpg",title:"公安便民亭现场14",time:"2015-11-27"},
				{href:"caseDetail.html",src:"images/news/pic5.jpg",title:"公安便民亭现场15",time:"2015-11-26"},
				{href:"caseDetail.html",src:"images/news/pic6.jpg",title:"公安便民亭现场16",time:"2015-11-25"},
				{href:"caseDetail.html",src:"images/news/pic7.jpg",title:"公安便民亭现场17",time:"2015-11-24"},
				{href:"caseDetail.html",src:"images/news/pic8.jpg",title:"公安便民亭现场18",time:"2015-11-23"},
				{href:"caseDetail.html",src:"images/news/pic9.jpg",title:"公安便民亭现场19",time:"2015-11-22"}
			]
		}
		//上一页
		if($event.target.innerHTML=='上一页'){
			if($scope.currentPage==1)return;
			$scope.currentPage=$scope.currentPage-1;       //返回当前页
			if($('.page i.current').index()>2){
				$('.page i.current').removeClass('current').prev().addClass('current');
			}else{
				$scope.firstNumber=$scope.firstNumber-1;   //返回第一个页码
			}
			//数据更换
			$scope.data = [
				{href:"caseDetail.html",src:"images/news/pic1.jpg",title:"公安便民亭现场11",time:"2015-11-30"},
				{href:"caseDetail.html",src:"images/news/pic2.jpg",title:"公安便民亭现场12",time:"2015-11-29"},
				{href:"caseDetail.html",src:"images/news/pic3.jpg",title:"公安便民亭现场13",time:"2015-11-28"},
				{href:"caseDetail.html",src:"images/news/pic4.jpg",title:"公安便民亭现场14",time:"2015-11-27"},
				{href:"caseDetail.html",src:"images/news/pic5.jpg",title:"公安便民亭现场15",time:"2015-11-26"},
				{href:"caseDetail.html",src:"images/news/pic6.jpg",title:"公安便民亭现场16",time:"2015-11-25"},
				{href:"caseDetail.html",src:"images/news/pic7.jpg",title:"公安便民亭现场17",time:"2015-11-24"},
				{href:"caseDetail.html",src:"images/news/pic8.jpg",title:"公安便民亭现场18",time:"2015-11-23"},
				{href:"caseDetail.html",src:"images/news/pic9.jpg",title:"公安便民亭现场19",time:"2015-11-22"}
			]
		}
		//下一页
		if($event.target.innerHTML=='下一页'){
			if($scope.currentPage==$pageCount)return;
			$scope.currentPage=$scope.currentPage+1;       //返回当前页
			if($('.page i.current').index()==6){
				$scope.firstNumber=$scope.firstNumber+1;   //返回第一个页
			}else{
				$('.page i.current').removeClass('current').next().addClass('current');
			}
			//数据更换
			$scope.data = [
				{href:"caseDetail.html",src:"images/news/pic1.jpg",title:"公安便民亭现场11",time:"2015-11-30"},
				{href:"caseDetail.html",src:"images/news/pic2.jpg",title:"公安便民亭现场12",time:"2015-11-29"},
				{href:"caseDetail.html",src:"images/news/pic3.jpg",title:"公安便民亭现场13",time:"2015-11-28"},
				{href:"caseDetail.html",src:"images/news/pic4.jpg",title:"公安便民亭现场14",time:"2015-11-27"},
				{href:"caseDetail.html",src:"images/news/pic5.jpg",title:"公安便民亭现场15",time:"2015-11-26"},
				{href:"caseDetail.html",src:"images/news/pic6.jpg",title:"公安便民亭现场16",time:"2015-11-25"},
				{href:"caseDetail.html",src:"images/news/pic7.jpg",title:"公安便民亭现场17",time:"2015-11-24"},
				{href:"caseDetail.html",src:"images/news/pic8.jpg",title:"公安便民亭现场18",time:"2015-11-23"},
				{href:"caseDetail.html",src:"images/news/pic9.jpg",title:"公安便民亭现场19",time:"2015-11-22"}
			]
		}
		//尾页
		if($event.target.innerHTML=='尾页'){
			if($scope.currentPage==$pageCount)return;
			$scope.currentPage=$pageCount;   //返回当前页
			$scope.firstNumber=$pageCount-4;
			$('.pages').eq(4).addClass('current').siblings().removeClass('current');
			//数据更换
			$scope.data = [
				{href:"caseDetail.html",src:"images/news/pic1.jpg",title:"公安便民亭现场11",time:"2015-11-30"},
				{href:"caseDetail.html",src:"images/news/pic2.jpg",title:"公安便民亭现场12",time:"2015-11-29"},
				{href:"caseDetail.html",src:"images/news/pic3.jpg",title:"公安便民亭现场13",time:"2015-11-28"},
				{href:"caseDetail.html",src:"images/news/pic4.jpg",title:"公安便民亭现场14",time:"2015-11-27"},
				{href:"caseDetail.html",src:"images/news/pic5.jpg",title:"公安便民亭现场15",time:"2015-11-26"},
				{href:"caseDetail.html",src:"images/news/pic6.jpg",title:"公安便民亭现场16",time:"2015-11-25"},
				{href:"caseDetail.html",src:"images/news/pic7.jpg",title:"公安便民亭现场17",time:"2015-11-24"},
				{href:"caseDetail.html",src:"images/news/pic8.jpg",title:"公安便民亭现场18",time:"2015-11-23"},
				{href:"caseDetail.html",src:"images/news/pic9.jpg",title:"公安便民亭现场19",time:"2015-11-22"}
			]
		}
	};
});
$(function(){
	function slide(){
		$('.case_list li a').bind('mouseenter',function(){
			$(this).children('div').stop().animate({top:0},300);
		});
		$('.case_list li a').bind('mouseleave',function(){
			$(this).children('div').stop().animate({top:'-245px'},300);
		});
	}
	$('.case_pic').on('click',function(){
		var listTop=$('.case_list').offset().top;
		$('html,body').animate({'scrollTop':listTop},'fast');
	});
	slide();
	$('.page span,.pages').on('click',function(){
		slide();
	});
})