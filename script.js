$(document).ready(function(){
	var title = function(){
        var scrollTop = $(window).scrollTop();
        var height = $(window).height();
        var scrollOpa = ((height - scrollTop *2) / (height));

        $('.hello, .tagline, .pstar').css({
            'opacity': scrollOpa
        });
    }
    title();
    $(window).scroll(function () {
        title();
    });

	$('.hello,.tagline,.fa-star,.pstar').css("display","none");
	$('.hello').fadeIn(2000);
	$('.tagline').fadeIn(3500);
	$('.fa-star,.pstar').fadeIn(5000);

	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({
    	triggerElement:".about-trigger",
    	duration:100,
 	})
 	.setTween("#animate1", {display:"initial"}) // trigger a TweenMax.to tween
  	.addTo(controller);

  	var scene = new ScrollMagic.Scene({
    	triggerElement:".contact-trigger",
    	duration:100,
 	})
 	.setTween("#animate2", {display:"initial"}) // trigger a TweenMax.to tween
  	.addTo(controller);


  // 	var scene = new ScrollMagic.Scene({
  //   	triggerElement:".about-trigger-end"
 	// })
 	// .setTween("#animate1", {display:"none"}) // trigger a TweenMax.to tween
  // 	.addTo(controller); 
	// $('.hello').hover(function(){
	// 	$(this).css("font-size","160px");
	// 	$(this).css("cursor", "pointer");
	// }, function(){
	// 	$(this).css("font-size","150px");
	// 	$(this).css("cursor", "auto");	
	// });
	// $('.hello').click(function(){
	// 	$('.body-index').css("background","url('austin1.jpg') no-repeat 50% 50% fixed");
	// 	$('.body-index').css("background-size","cover");
	// 	$('.hello').css("display","none");
	// 	$('.tagline').css("display","none");
	// 	$('.header-index').fadeIn(2000);
	// 	$('#nav').fadeIn(3000);
	// });

	


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