$(document).ready(function(){
	$('.hello', '.tagline').css("display","none");
	$('.hello', '.tagline').fadeIn(3000);
	$('.hello').hover(function(){
		$(this).css("font-size","160px");
		$(this).css("cursor", "pointer");
	}, function(){
		$(this).css("font-size","150px");
		$(this).css("cursor", "auto");	
	});
	$('.hello').click(function(){
		$('.body-index').css("background","url('austin1.jpg') no-repeat 50% 50% fixed");
		$('.body-index').css("background-size","cover");
		$('.hello').css("display","none");
		$('.tagline').css("display","none");
		$('.header-index').fadeIn(2000);
		$('#nav').fadeIn(3000);
	});


	// $('.nav-link a').hover(function(){
	// 	$(this).css("color","#6600CC");
	// }, function(){
	// 	$(this).css("color","black");	
	// });

	// $('.begin').hover(function(){
	// 	$(this).css("box-shadow", "0px 0px 100px 50px #6600CC");
	// 	$(this).css("background-color", "rgba(102, 0, 204, 0.9)");
	// 	$(this).css("cursor", "pointer");
	// }, function(){
	// 	$(this).css("box-shadow", "none");
	// 	$(this).css("background-color", "black");
	// 	$(this).css("cursor", "auto");
	// });
	
});