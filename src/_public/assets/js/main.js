var userAgent, ieReg, ie;
userAgent = window.navigator.userAgent;
ieReg = /msie|Trident.*rv[ :]*11\./gi;
ie = ieReg.test(userAgent);

if(ie) {
	$(".is-imgcontainer").each(function () {
		var $container = $(this),
			imgUrl = $container.find("img").prop("src");
		if (imgUrl) {
		$container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("c-customobjectfit"); // 99other
		}
	});
}
//fix nodelist not working in IE 11

if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
  }
  // -----
  const sections = document.querySelectorAll('.c-observe');
  
  const config = {
	  rootMargin: '10px 0px 0%',
	  threshold: 0,
  };
  
  let observer = new IntersectionObserver(function (entries, self) {
  
	entries.forEach(function(entry){
	  if (entry.isIntersecting) {
			  intersectionHandler(entry);
		  }
	  });
  }, config);
  
  sections.forEach(function(section) {
	  observer.observe(section);
  });
  
  function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActive = document.querySelector('.c-gnav .c-gnav__item.is-active');
  const shouldBeActive = document.querySelector('.c-gnav .c-gnav__item[data-id="'+id+'"]');
  
	  if (currentlyActive) {
		  currentlyActive.classList.remove('is-active');
	  }
	  if (shouldBeActive) {
		  shouldBeActive.classList.add('is-active');
	  }
  }
  // --
  
  const observerFadeOptions = {
	root: null,
	threshold: 0,
	rootMargin: '1000% 0px -10px 0px'
  };
  
  const observerFade = new IntersectionObserver(function(entries) {
	entries.forEach(function(entry) {
		if (entry.isIntersecting) {
			entry.target.classList.add('is-inview');
			observerFade.unobserve(entry.target);
		}
	});
  }, observerFadeOptions);
  
  const observerFadeItem = document.querySelectorAll('.is-notinview');
  
  observerFadeItem.forEach(function(section) {
	observerFade.observe(section);
  });
  

// ---------------------

function stopScrollBody(){

	var scrollTop = $(window).scrollTop();
  
	if ($('body').hasClass('u-stopscrollbody')){
	  let currentTop = $('body').css('top');
	//   $('body').css('position', '');
	  $('body').css('top', '');
	  $('body').removeClass('u-stopscrollbody');
	  $('body, html').animate({ scrollTop: parseInt(currentTop, 10) * -1 }, 0);
	
	} else {
   
	//   $('body').css('position', 'fixed');
	  $('body').css('top', '-' + scrollTop + 'px');
	  $('body').addClass('u-stopscrollbody');
	
	}
  
  }
  
// ---------------------

function activeModalBox(){

	if(!$(".c-modal")[0]) {
		let mkinsert;
		mkinsert = mkinsert.concat('<div class="c-modal">');
		mkinsert = mkinsert.concat('<div class="c-modalbox">');
		mkinsert = mkinsert.concat('</div>');
		mkinsert = mkinsert.concat('</div>');
		$('body').append(mkinsert);
	}
	$('.c-modal').toggleClass('is-active');
}

$('.c-modalbutton').on('click touch', '.is-click', function(){
	activeModalBox();

	return false;
})

$('.c-modal__quit').on('click touch', '.is-click', function(){


	$('.c-modal').removeClass('is-active')

	return false;
})

// ---------------

var spNavBtn = $('.is-gnavspbtnclick');
spNavBtn.on('click touch', function(){
	stopScrollBody()
	return false;
})