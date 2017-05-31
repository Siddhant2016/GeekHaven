$(document).on('click', 'a.p', function (event) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $($.attr(this,'href')).offset().top
	}, 500);
});

$(document).ready(function() {
	$('.thar-three').click(function(){
			$('#main-heading').hide(500);
			$('#holder').hide(500);
			$('#intro').hide(500);
			var href = $(this).attr('href');
			setTimeout(function(){window.location = href}, 800);
			return false;
	});		
});

$(document).ready(function(){
	$('#banner-text').show(500);
	$('#holder').show(500);
	$('#heading').show(500);
	$('#slider').show(500);
	$('#up').show(500);
	$('#platform').show(500);
	$('#main-heading').show(500);
	$('#intro').show(500);
});


function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
