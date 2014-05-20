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

	$(function(){
    $('li').okhover();  
}):

});

function init()
{
  context= myCanvas.getContext('2d');
  setInterval(draw,10);
}

function draw()
{
  context.clearRect(0,0, 300,300);
  context.beginPath();
  context.fillStyle="#0000ff";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  context.arc(x,y,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();
  // Boundary Logic
if( x<0 || x>300) dx=-dx; 
if( y<0 || y>300) dy=-dy; 
x+=dx; 
y+=dy;
}