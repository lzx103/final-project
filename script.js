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
		$('.tagline').fadeIn(2000);
		$('.fa-star1,.pstar,.break,.about,.contact,.gallery').fadeIn(3000);
		$('#nav').fadeIn(3000);
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
    }, 3100);
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
      // if(height>scrollTop){
        var scrollOpa = ((height - scrollTop * 1.2 + aboutTriggerTop) / (height));
      // }
      // else{
      //   var scrollOpa = ((scrollTop - height *2) / (scrollTop));
      // }
      // console.log(scrollTop, height,scrollOpa)
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