/* global $ navigator Waypoint WOW ProgressBar H animateOn mixitup lightbox */

"use strict";

//Document ready
$(document).ready(function() {

	/****************
	    - Intro -
	*****************/
	//Image background
	if ($(".intro.image-bg").length>0) {
		$(".intro.image-bg").backstretch("images/image/IMG_0130_edited.jpg");
	}

	//Slide background
	if ($(".intro.slide-bg").length>0) {
		$(".intro.slide-bg").backstretch([
			"images/slide/1.jpg",
			"images/slide/2.jpg",
			"images/slide/3.jpg"
		], {duration:3000, fade:750});
	}

	//Video background
	if ($(".intro.video-bg").length>0) {
		//Hide loader on mobile
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			$(".player").hide();
			$(".player-controls").hide();
		}

		//Youtube player
		$(".player").mb_YTPlayer();

		//Player controls
		$('#play').on("click", function() {
			$('.player').playYTP();
		});

		$('#pause').on("click", function() {
			$('.player').pauseYTP();
		});
	}

	/***************
	    - Blog -
	***************/
	if ($(".intro.blog").length>0) {
		$(".intro.blog").backstretch("images/blog/post-bg.jpg");
	}

	/***************
	    - Menu -
	***************/
	//Open menu
	$(".menu-btn-open").on("click", function(e) {
		e.preventDefault();

		$(".menu-lightbox").fadeIn("normal", function(){$(this).addClass("active")});
        $(".menu-btn-close").addClass("loaded");
	});

	//Close menu
	$(".menu-btn-close").on("click", function(e) {
		e.preventDefault();

		$(".menu-lightbox").delay(100).removeClass("active").delay(200).fadeOut("slow");
        $(".menu-btn-close").removeClass("loaded");
	});

	//Menu item
	$(".menu li a").on("click", function(e) {
		$(".menu-btn-close").trigger("click");
	});

	/**********************
	    - Text slider -
	**********************/
	var animationDelay = 2500,
		revealDuration = 1000,
		revealAnimationDelay = 1500;

	$('.intro-text').each(function() {
		var headline = $(this);
		var spanWrapper = headline.find('.words-wrapper');
		var newWidth = spanWrapper.width()+10;

		spanWrapper.css('width', newWidth);

		//Trigger animation
		setTimeout(function() {
			hideWord(headline.find('.is-visible').eq(0));
		}, animationDelay);
	});

	function hideWord($word) {
    	var nextWord = takeNext($word);

        $word.parents(".words-wrapper").animate({width:"2px"}, revealDuration,
			function() {
        		switchWord($word, nextWord);
         		showWord(nextWord);
    		}
		);
    }

    function showWord($word, $duration) {
        $word.parents(".words-wrapper").animate({"width":$word.width()+10}, revealDuration,
			function() {
           		setTimeout(function() {
					hideWord($word);
				}, revealAnimationDelay);
       		}
		);
    }

	function switchWord($oldWord, $newWord) {
        $oldWord.removeClass("is-visible").addClass("is-hidden");
        $newWord.removeClass("is-hidden").addClass("is-visible");
    }

	function takeNext($word) {
        return (!$word.is(":last-child")) ? $word.next() : $word.parent().children().eq(0);
    }

		/****************
		     -Skills-
		 ***************/

		$(document).ready(function(){
			$('.waypoint').waypoint(function(){
				var H = new ProgressBar.Circle(".html-progress", {
					color: '#aaa',
					strokeWidth: 4,
					trialWidth: 1,
					easing: 'easeInOut',
					duration: 3000,
					text: {
						autoStyleContainer: false
					},
					from: { color: '#aaa', width: 1 },
					to: { color: '#BF0039', width: 4 },
					step: function(state, circle) {
						circle.path.setAttribute('stroke', state.color);
						circle.path.setAttribute('stroke-width', state.width);

						var value = Math.round(circle.value() * 100);
						if (value === 0) {
							circle.setText('');
						} else {
							circle.setText(value + "%");
						}
					}
				});
				H.text.style.fontSize = '35px';
				H.animate(0.90);

			var C = new ProgressBar.Circle(".css-progress", {
				  color: '#aaa',
				  // This has to be the same size as the maximum width to
				  // prevent clipping
				  strokeWidth: 4,
				  trailWidth: 1,
				  easing: 'easeInOut',
				  duration: 3000,
				  text: {
				    autoStyleContainer: false
				  },
				  from: { color: '#aaa', width: 1 },
				  to: { color: '#0F8B8D', width: 4 },
				  // Set default step function for all animate calls
				  step: function(state, circle) {
				    circle.path.setAttribute('stroke', state.color);
				    circle.path.setAttribute('stroke-width', state.width);

				    var value = Math.round(circle.value() * 100);
				    if (value === 0) {
				      circle.setText('');
				    } else {
				      circle.setText(value + "%");
				    }

				  }
				});
				C.text.style.fontSize = '35px';
				C.animate(.85);

				var J = new ProgressBar.Circle(".js-progress", {
				  color: '#aaa',
				  // This has to be the same size as the maximum width to
				  // prevent clipping
				  strokeWidth: 4,
				  trailWidth: 1,
				  easing: 'easeInOut',
				  duration: 3000,
				  text: {
				    autoStyleContainer: false
				  },
				  from: { color: '#aaa', width: 1 },
				  to: { color: '#EC9A29', width: 4 },
				  // Set default step function for all animate calls
				  step: function(state, circle) {
				    circle.path.setAttribute('stroke', state.color);
				    circle.path.setAttribute('stroke-width', state.width);

				    var value = Math.round(circle.value() * 100);
				    if (value === 0) {
				      circle.setText('');
				    } else {
				      circle.setText(value + "%");
				    }

				  }
				});
				J.text.style.fontSize = '35px';
				J.animate(0.73);

				var N = new ProgressBar.Circle(".node-progress", {
				  color: '#aaa',
				  // This has to be the same size as the maximum width to
				  // prevent clipping
				  strokeWidth: 4,
				  trailWidth: 1,
				  easing: 'easeInOut',
				  duration: 3000,
				  text: {
				    autoStyleContainer: false
				  },
				  from: { color: '#aaa', width: 1 },
				  to: { color: '#143642', width: 4 },
				  // Set default step function for all animate calls
				  step: function(state, circle) {
				    circle.path.setAttribute('stroke', state.color);
				    circle.path.setAttribute('stroke-width', state.width);

				    var value = Math.round(circle.value() * 100);
				    if (value === 0) {
				      circle.setText('');
				    } else {
				      circle.setText(value + "%");
				    }

				  }
				});
				N.text.style.fontSize = '35px';
				N.animate(.66);

					var E = new ProgressBar.Circle(".express-progress", {
					  color: '#aaa',
					  // This has to be the same size as the maximum width to
					  // prevent clipping
					  strokeWidth: 4,
					  trailWidth: 1,
					  easing: 'easeInOut',
					  duration: 3000,
					  text: {
					    autoStyleContainer: false
					  },
					  from: { color: '#aaa', width: 1 },
					  to: { color: '#DAD2D8', width: 4 },
					  // Set default step function for all animate calls
					  step: function(state, circle) {
					    circle.path.setAttribute('stroke', state.color);
					    circle.path.setAttribute('stroke-width', state.width);

					    var value = Math.round(circle.value() * 100);
					    if (value === 0) {
					      circle.setText('');
					    } else {
					      circle.setText(value + "%");
					    }

					  }
					});
					E.text.style.fontSize = '35px';
					E.animate(.61);

					var M = new ProgressBar.Circle(".mongo-progress", {
					  color: '#aaa',
					  // This has to be the same size as the maximum width to
					  // prevent clipping
					  strokeWidth: 4,
					  trailWidth: 1,
					  easing: 'easeInOut',
					  duration: 3000,
					  text: {
					    autoStyleContainer: false
					  },
					  from: { color: '#aaa', width: 1 },
					  to: { color: '#BF0039', width: 4 },
					  // Set default step function for all animate calls
					  step: function(state, circle) {
					    circle.path.setAttribute('stroke', state.color);
					    circle.path.setAttribute('stroke-width', state.width);

					    var value = Math.round(circle.value() * 100);
					    if (value === 0) {
					      circle.setText('');
					    } else {
					      circle.setText(value + "%");
					    }

					  }
					});
					M.text.style.fontSize = '35px';
					M.animate(.76);

				var B = new ProgressBar.Circle(".blender-progress", {
					color: '#aaa',
					strokeWidth: 4,
					trailWidth: 1,
					easing: 'easeInOut',
					duration: 3000,
					text: {
						autoStyleContainer: false
					},
					from: { color: '#aaa', width: 1 },
					to: { color: '#DAD2D8', width: 4 },
					step: function(state, circle) {
						circle.path.setAttribute('stroke', state.color);
						circle.path.setAttribute('stroke-width', state.width);

						var value = Math.round(circle.value() * 100);
						if (value === 0) {
							circle.setText('');
						} else {
							circle.setText(value + "%");
						}
					}
				});
				B.text.style.fontSize = "35px";
				B.animate(.95);

				var A = new ProgressBar.Circle(".ae-progress", {
					color: '#aaa',
					strokeWidth: 4,
					trialWidth: 1,
					easing: 'easeInOut',
					duration: 3000,
					text: {
						autoStyleContainer: false
					},
					from: { color: '#aaa', width: 1},
					to: { color: '#143642', width: 4 },
					step: function(state, circle) {
						circle.path.setAttribute('stroke', state.color);
						circle.path.setAttribute('stroke-width', state.width);

						var value = Math.round(circle.value() * 100);
						if (value === 0) {
							circle.setText('');
						} else {
							circle.setText(value + "%");
						}
					}
					});
					A.text.style.fontSize = "35px";
					A.animate(.95);

					var P = new ProgressBar.Circle(".premiere-progress", {
					color: '#aaa',
					strokeWidth: 4,
					trialWidth: 1,
					easing: 'easeInOut',
					duration: 3000,
					text: {
						autoStyleContainer: false
					},
					from: { color: '#aaa', width: 1},
					to: { color: '#EC9A29', width: 4 },
					step: function(state, circle) {
						circle.path.setAttribute('stroke', state.color);
						circle.path.setAttribute('stroke-width', state.width);

						var value = Math.round(circle.value() * 100);
						if (value === 0) {
							circle.setText('');
						} else {
							circle.setText(value + "%");
						}
					}
					});
					P.text.style.fontSize = "35px";
					P.animate(.97);

					var beat = new ProgressBar.Circle(".beat-progress", {
					color: '#aaa',
					strokeWidth: 4,
					trialWidth: 1,
					easing: 'easeInOut',
					duration: 6000,
					text: {
						autoStyleContainer: false
					},
					from: { color: '#EC9A29', width: 4},
					to: { color: '#EC9A29', width: 4 },
					step: function(state, circle) {
						circle.path.setAttribute('stroke', state.color);
						circle.path.setAttribute('stroke-width', state.width);

						var value = Math.round(circle.value() * 100);
						if (value === 0) {
							circle.setText('');
						} else {
							circle.setText(value + "%");
						}
					}
					});
					beat.text.style.fontSize = "35px";
					beat.animate(.12);

				this.destroy();
			});
		});





		/****************
		    - Works -
		****************/
		$(".works-filters li").on("click", function(e) {
			e.preventDefault();

			var $that = $(this);

			$(".works-filters li").removeClass("active");
			$that.addClass("active");
		});

		//Mixitup
		if ($(".works").length>0) {
			var $works = document.querySelector(".works");
			var mixer = mixitup($works);
		}

		//Lightbox
	    if(lightbox.length>0) {
	        lightbox.option({
	          "resizeDuration":200,
	          "wrapAround":true,
	          "disableScrolling":true,
	          "alwaysShowNavOnTouchDevices":true
	        });
		}

	    /***********************
		    - Testimonials -
		***********************/
		$(document).ready(function(){
			$('.multiple-items').slick({
				autoplay:true,
				autoplaySpeed: 3000,
				centerMode:true,
				centerPadding: '20%',
				slidesToShow: 1,
				slidesToScroll: 1,
				swipeToSlide: true
			});
		});

	/*end knowledge.js*/

    /************************
	    - WOW animation -
	************************/
     new WOW().init();

   	/***********************
	    - Contact form -
	***********************/
    

	/****************************
	    - Menu click scroll -
	****************************/
	$(document).on("scroll", onScroll);

	$(".menu li a, .scroll-btn a[href^='#']").on("click", function(e) {
		e.preventDefault();
		$(document).off("scroll");

		$("a").each(function () {
			$(this).removeClass("active");
		});

		$(this).addClass("active");

		var target = this.hash;
		var $target = $(target);

		$("html, body").stop().animate({
			"scrollTop":($target.offset().top+2)
		}, 500, "swing", function() {
			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});

	});

    function onScroll(event) {
        var pos = $(document).scrollTop();

        $(".menu a").each(function() {
            var that = $(this);
            var target = $(that.attr("href"));

            if (target.position().top<=pos && (target.position().top+target.height())>pos) {
                $(".menu li a").removeClass("active");
                that.addClass("active");
            } else {
                that.removeClass("active");
            }
        });
    }

});

//Share Functions
function shareTo(network, title, image, url) {
	//Window size
	var w = 650, h = 350, params = 'width='+w+', height='+h+', resizable=1';

	//Title
	if (typeof title==='undefined') {
		title = $('title').text();
	} else if (typeof title==='string') {
		if ($(title).length>0) title = $(title).text();
	}

	//Image
	if (typeof image==='undefined') {
		image = '';
	} else if (typeof image==='string') {
		if (!/http/i.test(image)) {
			if ($(image).length>0) {
				if ($(image).is('img')) image = $(image).attr('src');
				else image = $(image).find('img').eq(0).attr('src');
			} else image = '';
		}
	}

	//Url
	if (typeof url==='undefined') {
		url = document.location.href;
	} else {
		url = document.location.protocol+'//'+document.location.host+document.location.pathname+url;
	}

	//Share
	if (network==='twitter') {
		return window.open('http://twitter.com/intent/tweet?text='+encodeURIComponent(title+' '+url), 'share', params);
	} else if (network==='facebook') {
		return window.open('https://www.facebook.com/sharer/sharer.php?s=100&p[url]='+encodeURIComponent(url)+'&p[title]='+encodeURIComponent(title)+'&p[images][0]='+encodeURIComponent(image), 'share', params);
	} else if (network==='pinterest') {
		window.open('http://pinterest.com/pin/create/bookmarklet/?media='+image+'&description='+title+' '+encodeURIComponent(url), 'share', params);
	} else if (network==='google') {
		return window.open('https://plus.google.com/share?url='+encodeURIComponent(url), 'share', params);
	} else if (network==='linkedin') {
		return window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(url)+'&title='+title, 'share', params);
	}

	return;
}

/**********************
	- Window load -
**********************/
$(window).on("load", function() {
	$(".page-loader").fadeOut();
});
