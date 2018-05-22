//Adjust Header Height
$('header').height($(window).innerHeight());

//Smooth Scroll
$('nav ul li a').click(function(event) {
	/* Act on the event */
	event.preventDefault();
	$('body, html').animate({
		scrollTop: $('#' + $(this).data('scroll')).offset().top
	}, 1000)
});



//Menu in Mobile and Tablet
$(document).ready(function($) {
	checksize();

	$(window).resize(checksize);
});
function checksize() {
	if($(window).innerWidth() + 17 <= 991){
		$('.mynavbar').css('display', 'none');

		$('.navbar-toggler').click(function(e) {
			$('.navbar-nav').animate({
				right: 0
			},600 )
			$('.mynavbar').fadeIn(600);
		});

		$('.mynavbar').click(function() {
			$('.navbar-nav').animate({
				right: '-' + $('.navbar-nav').innerWidth()
			},600 )
			$('.mynavbar').fadeOut(600);
		});

		$('.navbar-nav').click(function(event) {
			/* Act on the event */
			event.stopPropagation();
		});

	}else{
		$('.mynavbar').css('display', 'flex');
	}
}
console.log($(window).width() + 17);