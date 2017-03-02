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

	$(".img1, .img2, .img3, .img4, .img5, .img6, .img7, .img8, .img9, .img10, .img11, .img12, img13, .img14, .img15, .img16, .img17, img18").hover(
	
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
   		var availableTags = [{label:"Sachertorte", the_link:"#classics"},{label:"Salzburger Nockerl", the_link:"#nockerl"},{label:"Fortran", the_link:"http://www.yahoo.com"}];
    	$( "#tags" ).autocomplete({
      	source: availableTags,
      	select:function(e,ui) { 
      	location.href = ui.item.the_link;
    //  console.log(ui.item.the_link);
      }
    });
});


var linklist = $('.list');
    var myarr = [];
    for (var i = 0; i < linklist.length ; i++) {
        myarr.push(linklist[i].text.trim().toLowerCase());
    }

$('#txtSearch').keyup(function(){
	$(".searchWidget ul").css('display','inline-block');
	
   var text = $('#txtSearch').val().toLowerCase();
   if(text===null || text===""){
			$(".searchWidget ul").css('display','none');
			}
   for (var j = 0; j < myarr.length; j++)
       {
	   if(myarr[j].indexOf(text) >=0)
	   	   {
		   $('#' + myarr[j]).css('display','inline-block');
		   }
		else
			{
				$('#' + myarr[j]).css('display','none');
			}
	   }
   
});


	
$(function() {
  // this initializes the dialog (and uses some common options that I do)
  $("#dialog1, #dialog2").dialog({
    autoOpen : false, modal : true, show : "blind", hide : "blind"
  });

  // next add the onclick handler
  $("#sachertorte, #sachertortelink").click(function() {
    $("#dialog1").dialog("open");
    return false;
  });
  
    $("#apfelstrudel, #apfelstrudellink").click(function() {
    $("#dialog2").dialog("open");
    return false;
  });
});
  
});

