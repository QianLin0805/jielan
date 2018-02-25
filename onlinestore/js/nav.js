$(function(){
	$('.nav li a').on('click',function(event){
		if($(this).is('.current')){
			event.preventDefault();
		}
	});
})