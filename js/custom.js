$(document).ready(function() {
	$('.menu').on('click', function() {
      $('.menuOpen').toggle("slide", {direction: "right" }, 1000);
	  $("#nav-toggle").toggleClass( "active" );
	});
	$('.arrow').click(function(){
    $("html, body").animate({ scrollTop: $(window).height()}, 600);
    return false;
	});
	
	$(".priceTag button").hover(function(){
		$(".fa.fa-shopping-basket").toggleClass("black");
		});

var time_id;

	$(".img1, .img2, .img3").hover(
	
	function(e){
		e.preventDefault();
    	var hovered = $(this);
			if (time_id) {
			clearTimeout(time_id);
			} 
			time_id = setTimeout(function () {
				hovered.find("div:first").stop(true, true).slideDown('slow');
			}, 500);
	}, 
	
	function (e) {
		e.preventDefault();
    	var hovered = $(this);
			if (time_id) {
			clearTimeout(time_id);
    		} 
			time_id = setTimeout(function () {
				hovered.find("div:first").stop(true, true).slideUp('slow');
			}, 200);
	});
	

 	$(function() {
   		var availableTags = [{label:"Basic", the_link:"http://www.msn.com"},{label:"C++", the_link:"http://www.ibm.com"},{label:"Fortran", the_link:"http://www.yahoo.com"}];
    	$( "#tags" ).autocomplete({
      	source: availableTags,
      	select:function(e,ui) { 
      	location.href = ui.item.the_link;
    //  console.log(ui.item.the_link);
      }
    });
});

  
});

