$(document).on('click', 'a.p', function (event) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $($.attr(this,'href')).offset().top
	}, 500);
});



function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
