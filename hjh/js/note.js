// JavaScript Document
var loadOver=true;
	
var myScroll,pullUpEl, pullUpOffset;
function pullUpAction () {
	if(!loadOver){
		return;
	}
	setTimeout(function () {
		for(var i=0;i<3;i++){
			var liClone=$('#list').children().eq(i).clone();
			$('#list').append(liClone);
		}
		myScroll.refresh();     //数据加载完成后，调用界面更新方法
	}, 1000);
}
function loaded(){
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;
	
	myScroll=new iScroll(
		"wrapper",
		{
			checkDOMChanges: true,
			scrollbarClass: 'myScrollbar',
			useTransition: false,
			onRefresh: function () {
				if (pullUpEl.className.match('loading') && loadOver) {
					pullUpEl.className = '';
					pullUpEl.innerHTML = '上拉加载更多...';
				}
			},
			onScrollMove: function () {
				if (this.y < (this.maxScrollY - 10) && !pullUpEl.className.match('flip') && loadOver) {
					pullUpEl.className = 'flip';
					pullUpEl.innerHTML = '松手开始更新...';
					this.maxScrollY = this.maxScrollY;
				} else if (this.y > (this.maxScrollY + 10) && pullUpEl.className.match('flip') && loadOver) {
					pullUpEl.className = '';
					pullUpEl.innerHTML = '上拉加载更多...';
					this.maxScrollY = pullUpOffset;
				}
			},
			onScrollEnd: function () {
				if (pullUpEl.className.match('flip') && loadOver) {
					pullUpEl.className = 'loading';
					pullUpEl.innerHTML = '加载中...';				
					pullUpAction();	// Execute custom function (ajax call?)
				}
			}
		}
	);
	setTimeout(function (){ document.getElementById('wrapper').style.left = '0'; }, 800);
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', loaded, false);

function loadContent(){
	if(!loadOver){
		$('#pullUp').text('已全部加载');
	}else{
		$('#pullUp').text('上拉加载更多...');
	}
}