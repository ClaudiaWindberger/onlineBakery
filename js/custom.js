$(document).ready(function() {
	
	//SMOOTH SCROLLING
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
	});
	
	//MENU TOGGLE
	$(".menu").on("click", function() {
      $(".menuOpen").toggle("slide", {direction: "right" }, 1000);
	  $("#nav-toggle").toggleClass( "active" );
	});
	
	//ARROW - 100% SCROLL
	$(".arrow").click(function(){
    $("html, body").animate({ scrollTop: $(window).height()}, 600);
    return false;
	});
	
	//SHOPPING ICON COLOUR CHANGE FOR HOVER
	$(".cd-add-to-cart, .cd-add-to-cart2, .cd-add-to-cart3, .cd-add-to-cart4, .cd-add-to-cart5, .cd-add-to-cart6, .cd-add-to-cart7, .cd-add-to-cart8, .cd-add-to-cart9, .cd-add-to-cart10, .cd-add-to-cart11, .cd-add-to-cart12, .cd-add-to-cart13, .cd-add-to-cart14, .cd-add-to-cart15, .cd-add-to-cart16, .cd-add-to-cart17, .cd-add-to-cart18").hover(function(){
		$(this).find(".fa.fa-shopping-basket").toggleClass("black");
	});
		
		
	//PRODUCT IMAGE HOVER - SHOPPING OPTION SLIDE UP WITH TIMER
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
	
	

	//SEARCH FUNCTION - ADD ALL LIST ITEMS TO ARRAY - CHECK FOR EACH KEYUP IF MATCH IS FOUND
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
		for (var j = 0; j < myarr.length; j++){
		   if(myarr[j].indexOf(text) >=0){
			   $('#' + myarr[j]).css('display','inline-block');
			}
			else{
				$('#' + myarr[j]).css('display','none');
			}
		}
	});


	//PRODUCT POP UP - INITIALIZE DIALOGS AND ADD CLICK EVENTS
	$(function() {
		$("#checkoutDialog, #sachertorteDialog, #apfelstrudelDialog, #linzerDialog, #nockerlDialog, #krapfenDialog, #erdbeerDialog, #apfelkuchenDialog, #weihnachtsDialog, #punschkrapfenDialog, #mohnkuchenDialog, #schaumrollenDialog, #biskuitDialog, #bananenschnitteDialog, #nussstrudelDialog, #gugelhupfDialog, #mohnstrudelDialog, #topfentorteDialog").dialog({
			autoOpen : false, modal : true, show : "blind", hide : "blind", open: function(){
				jQuery('.ui-widget-overlay').bind('click',function(){
					jQuery('#checkoutDialog, #sachertorteDialog, #apfelstrudelDialog, #linzerDialog, #nockerlDialog, #krapfenDialog, #erdbeerDialog, #apfelkuchenDialog, #weihnachtsDialog, #punschkrapfenDialog, #mohnkuchenDialog, #schaumrollenDialog, #biskuitDialog, #bananenschnitteDialog, #nussstrudelDialog, #gugelhupfDialog, #mohnstrudelDialog, #topfentorteDialog').dialog('close');
				});
			}
	});
		$(".checkout").click(function() {
		$("#checkoutDialog").dialog("open");
		return false;
	  });
	  
	  $("#sachertorte, #sachertortelink").click(function() {
		$("#sachertorteDialog").dialog("open");
		return false;
	  });
	  
		$("#apfelstrudel, #apfelstrudellink").click(function() {
		$("#apfelstrudelDialog").dialog("open");
		return false;
	  });
		  $("#linzertorte, #linzertortelink").click(function() {
		$("#linzerDialog").dialog("open");
		return false;
	  });
		  $("#salzburgernockerl, #salzburgernockerllink").click(function() {
		$("#nockerlDialog").dialog("open");
		return false;
	  });
			$("#krapfen, #krapfenlink").click(function() {
		$("#krapfenDialog").dialog("open");
		return false;
	  });
			  $("#erdbeerschnitte, #erdbeerschnittenlink").click(function() {
		$("#erdbeerDialog").dialog("open");
		return false;
	  });
				$("#apfelkuchen, #apfelkuchenlink").click(function() {
		$("#apfelkuchenDialog").dialog("open");
		return false;
	  });
			  $("#weihnachtsbaeckerei, #weihnachtslink").click(function() {
		$("#weihnachtsDialog").dialog("open");
		return false;
	  });
				$("#punschkrapfen, #punschkrapfenlink").click(function() {
		$("#punschkrapfenDialog").dialog("open");
		return false;
	  });
				$("#mohnkuchen, #mohnkuchenlink").click(function() {
		$("#mohnkuchenDialog").dialog("open");
		return false;
	  });
				$("#schaumrollen, #schaumrollenlink").click(function() {
		$("#schaumrollenDialog").dialog("open");
		return false;
	  });
				$("#biskuitroulade, #biskuitlink").click(function() {
		$("#biskuitDialog").dialog("open");
		return false;
	  });
				$("#bananenschnitte, #bananenschnittelink").click(function() {
		$("#bananenschnitteDialog").dialog("open");
		return false;
	  });
				  $("#nussstrudel, #nussstrudellink").click(function() {
		$("#nussstrudelDialog").dialog("open");
		return false;
	  });
				  $("#gugelhupf, #gugelhupflink").click(function() {
		$("#gugelhupfDialog").dialog("open");
		return false;
	  });
				  $("#mohnstrudel, #mohnstrudellink").click(function() {
		$("#mohnstrudelDialog").dialog("open");
		return false;
	  });
				  $("#topfentorte, #topfentortelink").click(function() {
		$("#topfentorteDialog").dialog("open");
		return false;
	  });
	  
	});
 

  
});

