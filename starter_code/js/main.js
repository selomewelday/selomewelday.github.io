$(document).ready (function(){
	$( ".jquery-date-picker" ).datepicker({
	    showButtonPanel: true,
	    dateFormat: "mm/dd/yy",
	    beforeShow: function(){    
	        $(".ui-datepicker").css('font-size', 12) 
	    }
	});

	$('#dropdownarrow').click(function(){
		scrollToAnchor('.branding');
	});

	$('#submitbtn').click(function(){
		scrollToAnchor('.filter-section');
	});

	$('#submitbtn2').click(function(){
		scrollToAnchor('.filter-section');
	});

	$('#submitbtn3').click(function(){
		scrollToAnchor('.filter-section');
	});

	$('#aboutLink').click(function(){
		event.preventDefault();
		scrollToAnchor('#about');
	});

	$('#comingsoonLink').click(function(){
		event.preventDefault();
		scrollToAnchor('#cities-section');
	});

	$('#booknowLink').click(function(){
		event.preventDefault();
		scrollToAnchor('#filter-section');
	});
	
	$('#propertiesLink').click(function(){
		event.preventDefault();
		scrollToAnchor('#carousel');
	});
	$('#uaeLink').click(function(){
		event.preventDefault();
		scrollToAnchor('#dubaicarousel');
	});
	$('#southafricaLink').click(function(){
		event.preventDefault();
		scrollToAnchor('#carousel');
	});
	$('#greeceLink').click(function(){
		event.preventDefault();
		scrollToAnchor('#greececarousel');
	});
		// Show paragraph on read more
	$('.readmore').click(showParagraph);

	function showParagraph() {
		$('#show-this-on-click.hide').slideDown();
		$('.readmore').hide();
		$('.readless').show();
	}

	// Hide paragraph on read less
	$('.readless').click(hideParagraph);

	function hideParagraph() {
		$('#show-this-on-click.hide').slideUp();
		$('.readmore').show();
		$('.readless').hide();
	}

	// Show span on read more
	$('.learnmore').click(showSpan);

	function showSpan() {
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
	}

	function scrollToAnchor(aid){
    	var scrollTarget = $(aid);
    	$('html,body').animate({scrollTop: scrollTarget.offset().top},'slow');
	}	
});