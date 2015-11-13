$(document).ready(function(){
	$('.hello,.tagline,.fa-star1,.pstar,.break,.about,.contact,.gallery').css("display","none");
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
		$('.tagline').fadeIn(1500);
		$('.fa-star1,.pstar,.break,.about,.contact,.gallery').fadeIn(2000);
		$('#nav').fadeIn(2000);
		$('.hello').hover(function(){
			$(this).css("font-size","150px");
			$(this).css("cursor", "auto");	
		});

    setTimeout(function() {
      aboutend = $('.about-trigger-end').offset().top+300;
      contactend = $('.contact-trigger-end').offset().top+250;
      galleryend = $('.gallery-trigger-end').offset().top;
      
      var starwhite = $('.about').offset().top-500;
      var $w = $(window).scroll(function(){
        if($w.scrollTop() > starwhite){
          $('.fa-star1').css("color","white")

          var glowpx = $(window).scrollTop();
          var stringglow = "0 0 "+glowpx/100+"px yellow";
          $('.fa-star1').css("text-shadow", stringglow);          
        }
        else{
          $('.fa-star1').css("color","")
          $('.fa-star1').css("text-shadow", "");
        }  
      });

      var starbig = $(window).scroll(function(){
        var glowpx = $(window).scrollTop();
        if(15<glowpx/20 && glowpx/20<30){
          $('.fa-star1').css("font-size",glowpx/20+'px')
        }
        else{
          $('.fa-star1').css("font-size",""+'px')
        }
       }); 

      var starchange = function(){
        var glowpx = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var s1Top = (glowpx / docHeight) * 50 + (winHeight * 0.5);
        var s2Top = (glowpx / docHeight) * -550 + (winHeight * 0.7);
        var s3Top = (glowpx / docHeight) * -300 + (winHeight * 0.9);
        var s4Top = (glowpx / docHeight) * -700 + (winHeight * 0.8);
        var s5Top = (glowpx / docHeight) * -200 + (winHeight * 0.3);
        var s6Top = (glowpx / docHeight) * -200 + (winHeight * 0.9);
        $('.s1').css('top', s1Top);
        $('.s2').css('top', s2Top);
        $('.s3').css('top', s3Top);
        $('.s4').css('top', s4Top);
        $('.s5').css('top', s5Top);
        $('.s6').css('top', s6Top);
      };
      starchange();
      $(window).scroll(function () {
        starchange();
      });

      // var $w = $(window).scroll(function(){
      //   var starend = $('.gallery-trigger-end').offset().top-395;
      //   if($w.scrollTop() > starend){
      //     $('.fa-star1').css("visibility","hidden")
      //   }
      //   else{
      //     $('.fa-star1').css("visibility","")
      //   }
      //   console.log(starend,$w.scrollTop())
      // });
    }, 2500);
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


	var controller = new ScrollMagic.Controller();
	var scene = new ScrollMagic.Scene({
    	triggerElement:".about-trigger",
    	duration:100,
 	})
 	.setTween("#animate1", {display:"initial"}) // trigger a TweenMax.to tween
  	.addTo(controller);

  var aboutfade = function(){
      var scrollTop = $(window).scrollTop();
      var height = $(window).height();
      var aboutTriggerTop = $('.about-trigger').offset().top;
      var scrollOpa = ((height - scrollTop * 1.2 + aboutTriggerTop) / (height));
     
      $('.about-box').css({
          'opacity': scrollOpa
      });
  }
  aboutfade();
  $(window).scroll(function () {
      aboutfade();
  });

	var aboutend = $('.about-trigger-end').offset().top+300;
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

  var contactfade = function(){
      var scrollTop = $(window).scrollTop();
      var height = $(window).height();
      var contactTriggerTop = $('.contact-trigger').offset().top;
      // if(height>scrollTop){
        var scrollOpa = ((height - scrollTop * 1.3 + contactTriggerTop) / (height));
      // }
      // else{
      //   var scrollOpa = ((scrollTop - height *2) / (scrollTop));
      // }
      // console.log(scrollTop, height,scrollOpa)
      $('.contact-box').css({
          'opacity': scrollOpa
      });
  }
  contactfade();
  $(window).scroll(function () {
      contactfade();
  });

	var contactend = $('.contact-trigger-end').offset().top+250;
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

  var galleryfade = function(){
      var scrollTop = $(window).scrollTop();
      var height = $(window).height();
      var galleryTriggerTop = $('.gallery-trigger').offset().top;
      var scrollOpa = ((height - scrollTop * 1.2 + galleryTriggerTop) / (height));
      $('.gallery-box').css({
          'opacity': scrollOpa
      });
  }
  galleryfade();
  $(window).scroll(function () {
      galleryfade();
  });

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

	$('.nav-link a').hover(function(){
		$(this).css("text-shadow","0 0 5px white, 0 0 3px #ffffb3");
	}, function(){
		$(this).css("text-shadow","");	
	});

  $('.fa-bars').hover(function(){
    $(this).css("cursor", "pointer");
  }, function(){
    $(this).css("cursor", "auto");  
  });

  $('.fa-bars').click(function(){
    if($('.nav-link').css("display")==="none"){
      $('.nav-link').css("display","block");
      $('.nav-link').css("float","left"); 
    }
    else{
      $('.nav-link').css("display","none");
    } 
  });
	
});