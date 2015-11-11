$(document).ready(function(){
	$('.hello,.tagline,.fa-star,.pstar,.break').css("display","none");
	$('.hello').fadeIn(2000);

	$('.hello').hover(function(){
		$(this).css("font-size","160px");
		$(this).css("cursor", "pointer");
	}, function(){
		$(this).css("font-size","150px");
		$(this).css("cursor", "auto");	
	});
	$('.hello').click(function(){
		// $('.body-index').css("background","url('austin1.jpg') no-repeat 50% 50% fixed");
		// $('.body-index').css("background-size","cover");
		// $('.hello').css("display","none");
		// $('.tagline').css("display","none");
		// $('.header-index').fadeIn(2000);
		$('.tagline').fadeIn(2000);
		$('.fa-star,.pstar,.break').fadeIn(3000);
		$('#nav').fadeIn(3000);
		$('.hello').hover(function(){
			$(this).css("font-size","150px");
			$(this).css("cursor", "auto");	
		});
	});
	
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

    var starwhite = $('.about').offset().top-500;
  	var $w = $(window).scroll(function(){
  		if($w.scrollTop() > starwhite){
  			$('.fa-star').css("color","white")
  		}
  		else{
  			$('.fa-star').css("color","")
  		}
  	});

	var controller = new ScrollMagic.Controller();
	var scene = new ScrollMagic.Scene({
    	triggerElement:".about-trigger",
    	duration:100,
 	})
 	.setTween("#animate1", {display:"initial"}) // trigger a TweenMax.to tween
  	.addTo(controller);

  	var aboutend = $('.about-trigger-end').offset().top-100;
  	var $w = $(window).scroll(function(){
  		if($w.scrollTop() > aboutend){
  			$('.about-box').css("visibility","hidden")
  		}
  		else{
  			$('.about-box').css("visibility","")
  		}
  	});

  	var scene = new ScrollMagic.Scene({
    	triggerElement:".contact-trigger",
    	duration:100,
 	})
 	.setTween("#animate2", {display:"initial"}) // trigger a TweenMax.to tween
  	.addTo(controller);

  	var contactend = $('.contact-trigger-end').offset().top-100;
  	var $w = $(window).scroll(function(){
  		if($w.scrollTop() > contactend){
  			$('.contact-box').css("visibility","hidden")
  		}
  		else{
  			$('.contact-box').css("visibility","")
  		}
  	});

  	var scene = new ScrollMagic.Scene({
    	triggerElement:".gallery-trigger",
    	duration:100,
 	})
 	.setTween("#animate3", {display:"initial"}) // trigger a TweenMax.to tween
  	.addTo(controller);

  	var galleryend = $('.gallery-trigger-end').offset().top;
  	var $w = $(window).scroll(function(){
  		if($w.scrollTop() > galleryend){
  			$('.gallery-box').css("visibility","hidden")
  		}
  		else{
  			$('.gallery-box').css("visibility","")
  		}
  	});

  	$(".about-link").click(function() {
        $('body').animate({
                scrollTop: $(".about").offset().top},
            1000);
        return false;
    });

    $(".contact-link").click(function() {
        $("body").animate({
                scrollTop: $(".contact").offset().top},
            1500);
        return false;
    });

    $(".gallery-link").click(function() {
        $("body").animate({
                scrollTop: $(".gallery").offset().top},
            1500);
        return false;
    });

    var starend = $('.gallery-trigger-end').offset().top;
  	var $w = $(window).scroll(function(){
  		if($w.scrollTop() > starend){
  			$('.fa-star').css("visibility","hidden")
  		}
  		else{
  			$('.fa-star').css("visibility","")
  		}
  	});

  // 	var scene = new ScrollMagic.Scene({
  //   	triggerElement:".about-trigger-end"
 	// })
 	// .setTween("#animate1", {display:"none"}) // trigger a TweenMax.to tween
  // 	.addTo(controller); 
	
	


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