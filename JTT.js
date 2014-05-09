$(document).ready(function() {
	$('#ben').click(function() {
		var details_html = $(this).parent().find('#ben-details').html();
    $('.face-info').html( details_html );
	});
	$('#zach').click(function() {
		var details_html = $(this).parent().find('#zach-details').html();
    $('.face-info').html( details_html );
	});
	$('#neil').click(function() {
		var details_html = $(this).parent().find('#neil-details').html();
    $('.face-info').html( details_html );
	});
	$('#kelly').click(function() {
		var details_html = $(this).parent().find('#kelly-details').html();
    $('.face-info').html( details_html );
	});
	$('#jason').click(function() {
		var details_html = $(this).parent().find('#jason-details').html();
    $('.face-info').html( details_html );
	});
	$('#max').click(function() {
		var details_html = $(this).parent().find('#max-details').html();
    $('.face-info').html( details_html );
	});
	$('#cai').click(function() {
		var details_html = $(this).parent().find('#cai-details').html();
    $('.face-info').html( details_html );
	});
});