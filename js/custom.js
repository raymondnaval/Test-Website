(function($){

	$(document).ready(function(){

		$(".carousel-outer").carousel({

			waitTime : 2000,
			carouselInner : ".carousel-inner",
			wrapper : ".wrapper",
			leftTransparentElement : ".left-transparent",
			rightTransparentElement : ".right-transparent",
			carouselItem : ".carousel-item",
			customHeight : 300,
			leftLink : ".left-link",
			rightLink : ".right-link",
			scrollButtonsContainer : ".scroll-buttons",
			scrollButtonClass : ".scroll-button",
			autoSlide : true

		});

	});

})(jQuery)