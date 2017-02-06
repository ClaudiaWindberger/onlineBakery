$(document).ready(function() {
	$('.menu').on('click', function() {
      $('.menuOpen').toggle("slide", {direction: "right" }, 1000);
	  $("#nav-toggle").toggleClass( "active" );
	});
	$('.arrow').click(function(){
    $("html, body").animate({ scrollTop: $(window).height()}, 600);
    return false;
});

  $( function() {
    var availableTags = [
      "Cake1",
      "Cake2",
      "cake3"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );
  
  
});

