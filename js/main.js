$(document).ready(function() {


$('.btn-modal').on('click', function() {
	$('.modal').hide();
	let $modal = $($(this).data('modal'));
	$modal.fadeIn(400);
	return false;
})
$('.modal__overlay').on('click', function() {
	$('.modal').fadeOut(400);
	return false;
})


});