/* Index of this file

	(1) Image Hover fade effect
	(2) Tabs and Toggles Script
	(3) Hover Social Media Icons
	(4) Pagination	
	(5) Animated Menu
	(6) Flickr Widget
	(7) Ordered List
	(8) Hide Info Boxes
	(9) Flex slider - Post Format Gallery, Logo, Recent Projects etc.
	(10) Rotate Testimonials
	(11) Portfolio
	(12) Mobile menu
	(13) prettyPhoto media fix
	(14) Comment Form	
	(16) Contact Form

*/

(function ($) {	$(document).ready(function(){
// Do not delete above line
/****************************************************************/
/****************************************************************/

jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',slideshow:3000, autoplay_slideshow: false});
jQuery('.fitVids').fitVids();
jQuery('.fluid-video').fitVids();

/***************************************************************
* (1) Image Hover fade effect *
****************************************************************/

$(document).ready(function(){

	$(".fade-img").show();
	$(".fade-img img").fadeTo('normal', 1, function() {
		$get_id = $(this).parent().parent().attr("data-lang");
		if($get_id !== ""){
			$(this).parent().parent().addClass($get_id);
			$(this).hover(function(){
				$(this).fadeTo('normal', 0.2);
			}, function() {
					$(this).fadeTo('normal', 1);
			});
		}
	});

	$(".fade-img2").show();
	$(".fade-img2 img").fadeTo('fast', 1.0, function() {
		$get_id = $(this).parent().parent().attr("data-lang");
		if($get_id !== ""){
			$(this).parent().parent().addClass($get_id);
			$(this).hover(function(){
				$(this).fadeTo('fast', 0.1);
			}, function() {
					$(this).fadeTo('fast', 1.0);
			});
		}
	});

	$(".fade-img3").show();
	$(".fade-img3").fadeTo('normal', 1, function() {
		$get_id = $(this).parent().parent().attr("a");
		if($get_id !== ""){
			$(this).parent().parent().addClass($get_id);
			$(this).hover(function(){
				$(this).fadeTo('normal', 0.7);
			}, function() {
					$(this).fadeTo('normal', 1);
			});
		}
	});

	$(".flexslider .slides > li .tm_hover").fadeTo("normal", 0);
	$(".flexslider .slides > li .tm_hover").hover(function(){
	$(this).stop().fadeTo("normal", 1.0);
	},function(){
	$(this).stop().fadeTo("normal", 0);
	});

	$(".my_tab_style1").tabs({ fx: { opacity: 'show' } });
	$(".my_tab_style2").tabs({ event: "mouseover" });

});

/***************************************************************
* (2) Tabs and Toggles Script *
****************************************************************/


$(".toggle_box").each( function () {
	if($(this).attr('data-id') == 'closed') {
		$(this).accordion({ header: '.toggle_box_title', collapsible: true, active: false  });
	} else {
		$(this).accordion({ header: '.toggle_box_title', collapsible: true});
	}
});

$(".toggle_icon").each( function () {
	if($(this).attr('data-id') == 'closed') {
		$(this).accordion({ header: '.toggle_icon_title', collapsible: true, active: false  });
	} else {
		$(this).accordion({ header: '.toggle_icon_title', collapsible: true});
	}
});

/***************************************************************
* (3) Hover Social Media Icons *
****************************************************************/

$(".social-icons ul li,.sm_icons ul li").fadeTo("normal", 0.4);
	$(".social-icons ul li,.sm_icons ul li").hover(function(){
		$(this).stop().fadeTo("normal", 1);
	},function(){
		$(this).stop().fadeTo("normal", 0.4);
	});

$("#footer .social-icons ul li,#footer .sm_icons ul li").fadeTo("normal", 0.8);
	$("#footer .social-icons ul li,#footer .sm_icons ul li").hover(function(){
		$(this).stop().fadeTo("normal", 1);
	},function(){
		$(this).stop().fadeTo("normal", 0.8);
	});

/***************************************************************
* (4) Pagination *
****************************************************************/
$(function() {

	/* initiate plugin assigning the desired button labels  */
    var itemsPerPage = parseInt($("div.holder").attr("data-itemsPerPage") || 9),
		pageNext = $("div.holder").attr("data-pageNext") || 'Next',
		pagePrev = $("div.holder").attr("data-pagePrev") || 'Prev';

	$('.portfolio').pajinate({
		items_per_page : itemsPerPage,
		nav_label_prev: pagePrev,
		nav_label_next: pageNext
	});

});

/***************************************************************
* (5) Animated Menu *
****************************************************************/

$("#sti-menu").each(function(){
	var $this				= $(this),
		hoverMenuBg			= $this.attr("data-hoverMenuBg") || '#ee7e2c',
		defaultBg			= $this.attr("data-defaultBg") || '#ffffff',
		defaultText			= $this.attr("data-defaultText") || '#313131',
		defaultIconColor	= $this.attr("data-defaultIcon") || '#ee7e2c';

	$(this).iconmenu({
		boxAnimSpeed		: 300,
		defaultTextColor	: defaultText,
		defaultBgHoverColor	: hoverMenuBg,
		defaultBgColor		: defaultBg,
		defaultIconColor	: defaultIconColor
	});

});

/***************************************************************
* (6) Flickr Widget *
****************************************************************/

// Flickr Widget
var flickrId = $(".flickr_photos").attr("data-flickr-id") || '90291761@N02',
	flickrDisplayPhotos = parseInt($(".flickr_photos").attr("data-display-photos") || 6);

$(".flickr_photos").append('<ul id="cbox" class="thumbs ">');

$('#cbox').jflickrfeed({
	limit	: flickrDisplayPhotos,
	qstrings: {
		id: flickrId  // replace example flickr id with your flickr id
	},
	itemTemplate: '<li>'+'<a href="{{link}}" title="{{title}}">' + '<img src="{{image_s}}" alt="{{title}}" />' + '</a>' + '</li>'
});

// Flickr Content area
var flickrId2 = $(".flickr_photos2").attr("data-flickr-id2") || '90291761@N02',
	flickrDisplayPhotos2 = parseInt($(".flickr_photos2").attr("data-display-photos2") || 6);

$(".flickr_photos2").append('<ul id="cbox2" class="thumbs ">');

$('#cbox2').jflickrfeed({
	limit	: flickrDisplayPhotos2,
	qstrings: {
		id: flickrId2  // replace example flickr id with your flickr id
	},
	itemTemplate: '<li>'+'<a href="{{link}}" title="{{title}}">' + '<img src="{{image_s}}" alt="{{title}}" />' + '</a>' + '</li>'
});


/***************************************************************
* (7) Ordered List *
****************************************************************/

$(".steps_with_circle ol").each (function () {
    $("li", this).each (function (i) {
        $(this).prepend("<span>" + (i+1) + "</span>" );
    });
});

$(".steps_with_box ol li:first")
    .addClass("first");
    $(".steps_with_box ol li:last")
    .addClass("last");

/***************************************************************
* (8) Hide Info Boxes *
****************************************************************/

function hide_boxes(){
	$('span.hide-boxes,p.hide-boxes2').click(function() {
		$(this).parent().fadeOut();
	});
}
hide_boxes();

/****************************************************************************
* (9) Flex slider * - Post Format Gallery, Logo, Recent Projects etc.
****************************************************************************/

// Home padge Default Slider

$(".swm_home_slider").each(function(){

	var $this				= $(this),
		slideAnimation		= $this.attr("data-slideAnimation") || 'fade',
		autoslideOn			= $this.attr("data-autoSlide") || 0,
		autoslideInterval	= parseInt($this.attr("data-autoSlideInterval") || 7000),		
		arrowNav			= $this.attr("data-arrowNavigation") || true;

	if(autoslideOn == "true") { autoslideOn = true; } else { autoslideOn = false; }
	if(arrowNav == "true") { arrowNav = true; } else { arrowNav = false; }
	$(this).flexslider({
		animation: slideAnimation,
		slideshow: autoslideOn,
		controlNav: false,
		directionNav : arrowNav,
		slideshowSpeed: autoslideInterval,
		smoothHeight: false,
		pauseOnAction: true,
		easing: 'easeOutExpo',
		pauseOnHover: 1,
		useCSS: false,
		start: function(slider){
			$('body').removeClass('loading');
		}
	});
});


// Image Slider -Shortcodes

$(".swm_image_slider").each(function(){

	var $this				= $(this),
		slideAnimation		= $this.attr("data-slideAnimation") || 'fade',
		autoslideOn			= $this.attr("data-autoSlide") || 0,
		autoslideInterval	= parseInt($this.attr("data-autoSlideInterval") || 7000),
		bulletNav			= $this.attr("data-bulletNavigation") || true,
		arrowNav			= $this.attr("data-arrowNavigation") || true;

	if(autoslideOn == "true") { autoslideOn = true; } else { autoslideOn = false; }
	if(bulletNav == "true") { bulletNav = true; } else { bulletNav = false; }
	if(arrowNav == "true") { arrowNav = true; } else { arrowNav = false; }	

	$(this).imagesLoaded( function() {
		$(this).flexslider({
		animation: slideAnimation,
		slideshow: autoslideOn,
		controlNav: bulletNav,
		directionNav : arrowNav,
		slideshowSpeed: autoslideInterval,
		smoothHeight: true,
		useCSS: false,
		start: function(slider){
			$('body').removeClass('loading');
		}
		});
	});

});

// Post Format Gallery Slider

$(".swm_slider").each(function(){

	var $this				= $(this),
		autoslideOn			= $this.attr("data-autoSlide") || 0,
		autoslideInterval	= parseInt($this.attr("data-autoSlideInterval") || 7000),
		bulletNav			= $this.attr("data-bulletNavigation") || true,
		arrowNav			= $this.attr("data-arrowNavigation") || true;

	if(autoslideOn == "true") { autoslideOn = true; } else { autoslideOn = false; }
	if(bulletNav == "true") { bulletNav = true; } else { bulletNav = false; }
	if(arrowNav == "true") { arrowNav = true; } else { arrowNav = false; }

	if ( $.browser.msie ){
    if($.browser.version == '8.0') {
		$(this).flexslider({
			animation: "slide",
			slideshow: autoslideOn,
			controlNav: bulletNav,
			directionNav : arrowNav,
			slideshowSpeed: autoslideInterval,
            smoothHeight: true,
            start: function(slider){
				$('body').removeClass('loading');
			}
        });
    }
}

	$(this).imagesLoaded( function() {
		$(this).flexslider({
		animation: "slide",
		slideshow: autoslideOn,
		controlNav: bulletNav,
		directionNav : arrowNav,
		slideshowSpeed: autoslideInterval,
		smoothHeight: true,
		useCSS: false,
		start: function(slider){
			$('body').removeClass('loading');
		}
		});
	});

});

// Recent Projects Slider

$(".rp_slider").each(function(){

	var $this				= $(this),
		autoslideOn			= $this.attr("data-autoSlide") || 0,
		autoslideInterval	= parseInt($this.attr("data-autoSlideInterval") || 7000);

	if(autoslideOn == "true") { autoslideOn = true; } else { autoslideOn = false; }

	$(this).imagesLoaded( function() {
        $(this).flexslider({
			slideshowSpeed: autoslideInterval,
			animation: "slide",
			animationLoop: true,
			itemWidth: 163,
			itemMargin: 20,
			slideshow: autoslideOn
        });
	});
});


// Recent Projects Slider Home

$(".rp_slider_home").each(function(){

	var $this				= $(this),
		autoslideOn			= $this.attr("data-autoSlide") || 0,
		autoslideInterval	= parseInt($this.attr("data-autoSlideInterval") || 7000);

	if(autoslideOn == "true") { autoslideOn = true; } else { autoslideOn = false; }

	$(this).imagesLoaded( function() {
        $(this).flexslider({
			slideshowSpeed: autoslideInterval,
			animation: "slide",
			animationLoop: true,
			itemWidth: 163,
			itemMargin: 20,
			slideshow: autoslideOn
        });
	});
});


// Logo Slider

$(".logo_slider").each(function(){

	var $this				= $(this),
		autoslideOn			= $this.attr("data-autoSlide") || 0,
		autoslideInterval	= parseInt($this.attr("data-autoSlideInterval") || 7000);

	if(autoslideOn == "true") { autoslideOn = true; } else { autoslideOn = false; }
	
	$(this).imagesLoaded( function() {
        $(this).flexslider({
			slideshowSpeed: autoslideInterval,
			animation: "slide",
			animationLoop: true,
			itemWidth: 148,
			itemMargin: 2,
			slideshow: autoslideOn
        });
	});
});

// Team Member Slider

$(".tm_slider").each(function(){

	var $this				= $(this),
		autoslideOn			= $this.attr("data-autoSlide") || 0,
		autoslideInterval	= parseInt($this.attr("data-autoSlideInterval") || 7000);

	if(autoslideOn == "true") { autoslideOn = true; } else { autoslideOn = false; }

	$(this).imagesLoaded( function() {
        $(this).flexslider({
			slideshowSpeed: autoslideInterval,
			animation: "slide",
			animationLoop: true,
			itemWidth: 175,
			itemMargin: 15,
			slideshow: autoslideOn
        });
	});
});

/***************************************************************
* (10) Rotate Testimonials *
****************************************************************/

$(".testimonials-bx-slider").each(function(){

	var $this				= $(this),
		animationType		= $this.attr("data-animationType") || 'fade',
		autoSlideshow		= $this.attr("data-autoSlideshow") || true,
		smoothHeight		= $this.attr("data-smoothHeight") || true,
		pauseHover			= $this.attr("data-pauseHover") || true,
		displayNavigation	= $this.attr("data-displayNavigation") || true,
		slideshowSpeed		= parseInt($this.attr("data-slideshowSpeed") || 500),
		slideshowInterval	= parseInt($this.attr("data-slideshowInterval") || 4000);

	if(autoSlideshow == "true") { autoSlideshow = true; } else { autoSlideshow = false; }
	if(smoothHeight == "true") { smoothHeight = true; } else { smoothHeight = false; }
	if(pauseHover == "true") { pauseHover = true; } else { pauseHover = false; }
	if(displayNavigation == "true") { displayNavigation = true; } else { displayNavigation = false; }

	$(this).bxSlider({
		mode: animationType,
		auto:autoSlideshow,
		autoHover:pauseHover,
		adaptiveHeight: smoothHeight,
		adaptiveHeightSpeed:500,
		speed:slideshowSpeed,
		pause:slideshowInterval,
		controls:displayNavigation
	});
});

/***************************************************************
* (11) Portfolio *
****************************************************************/

$(".pf_sort").imagesLoaded( function() {
	$('.pf_sort').isotope({
	itemSelector: '.pf_isotope',
	masonry: {
		//custom addition
	}
	});
});

$('.filter_menu a').click(function(){
	var selector = $(this).attr('data-filter');
	$('.pf_sort').isotope({filter: selector});
	$('.filter_menu a.active').removeClass('active');
	$(this).addClass('active');
	return false;
});

/***************************************************************
* (12) Mobile menu *
****************************************************************/

 $('.sf-menu').tinyNav({
    active: 'active',  // class name of active link
    header: 'Navigation'  // default display text for dropdown
});

/***************************************************************
* (13) prettyPhoto media fix *
****************************************************************/

// store the viewport width in a variable
var viewportWidth = $('body').innerWidth();

$("a.lightbox").prettyPhoto({
    theme: 'pp_default',
    changepicturecallback: function(){
        // 1024px is presumed here to be the widest mobile device. Adjust at will.
        if (viewportWidth < 1025) {
            $(".pp_pic_holder.pp_default").css("top",window.pageYOffset+"px");
        }
    }
});

/***************************************************************
* (14) Comment Form *
****************************************************************/

var $comment_form = $('form#commentform');
$comment_form.find('input:text, textarea').each(function(index,domElements){
	var $comment_input = jQuery(domElements),
		$comment_label = $comment_input.siblings('label'),
		comment_label_value = $comment_input.siblings('label').text();
	if ( $comment_label.length ) {
		$comment_label.hide();
		if ( $comment_input.siblings('span.required') ) {
			comment_label_value += $comment_input.siblings('span.required').text();
			$comment_input.siblings('span.required').hide();
		}
		$comment_input.val(comment_label_value);
	}
}).bind('focus',function(){
	var comment_label = jQuery(this).siblings('label').text();
	if ( jQuery(this).siblings('span.required').length ) comment_label += jQuery(this).siblings('span.required').text();
	if (jQuery(this).val() === comment_label) jQuery(this).val("");
}).bind('blur',function(){
	var comment_label = jQuery(this).siblings('label').text();
	if ( jQuery(this).siblings('span.required').length ) comment_label += jQuery(this).siblings('span.required').text();
	if (jQuery(this).val() === "") jQuery(this).val( comment_label );
});

$comment_form.submit(function(){
	$comment_form.find('input:text, textarea').each(function(index,domElements){
		var $comment_input = jQuery(domElements),
			$comment_label = $comment_input.siblings('label'),
			comment_label_value = $comment_input.siblings('label').text();

		if ( $comment_label.length && $comment_label.is(':hidden') ) {
			if ( $comment_label.text() === $comment_input.val() )
				$comment_input.val( '' );
		}
	});
});

/****************************************************************/
/****************************************************************/
}); })(jQuery);
// Do not delete above line


/***************************************************************
* (16) Contact Form *
****************************************************************/

jQuery(document).ready(function(){
	jQuery("input:text, input:password, textarea").forminput();
	jQuery("#contact_form").contact_form({
			response: "#msg",
			submit: "#submit",
			timer: 4500,
			easing: "",
			speedIn: 700,
			speedOut: 700
	});
});
// Input Field Script
(function($) {
	$.fn.forminput = function() {
		return this.each(function() {
			var $root = $(this);
			var inputValue = $root.val();
			
			function reset() {
				var value = $root.val();
				if(inputValue == value) {
					$root.val("");
				}
			}
			
			function blur() {
				var value = $root.val();
				if(value === ""){
					$root.val(inputValue);
				}
			}
			
			$root.focus(function() {
				reset();
			});
			$root.blur(function() {
				blur();
			});
		});
	};
})(jQuery);

// Form Script
(function($) {
	$.fn.contact_form = function(options) {
		var defaults = {
			response: "#msg",
			submit: "#submit",
			timer: 4500,
			easing: "",
			speedIn: 700,
			speedOut: 700
		};
		var options = $.extend({}, defaults, options);
		
		return this.each(function () {
			var $root = $(this);
			var $response = $(options.response);
			var $submit = $(options.submit);
			
			function showMsg($timer) {
				$response.css("opacity", 0);
				$response.show().stop().animate({
					opacity: 1
				}, options.speedIn, options.easing, function(){
					interval = setInterval(hideMsg, $timer);
				});
			}
			
			function hideMsg() {
				clearInterval(interval);
				$response.stop().animate({
					opacity:0
				}, options.speedIn, options.easing, function() {
					$response.hide();
					$submit.fadeIn(700);
				});
			}
			
			$root.submit(function(){
				$.ajax({
					type: "POST",
					url: "sendmail.php",
					data: $(this).serialize(),
					success: function(output) {
						$(document).ajaxComplete(function() {
							if(output == 'ok') {
								$('#contactdiv').html("<div id='smessage'></div>");
								$('#smessage').html("<h5>Contact Form Submitted!</h5>").append("<p>We will be in touch soon.</p>").hide().fadeIn(1500, function() {
								$('#smessage').append("");
								});
							} else {
								$('#msg').html(output);
								showMsg(options.timer);
							}
						});
					}
				});
				return false;
			});
		});
	};
})(jQuery);