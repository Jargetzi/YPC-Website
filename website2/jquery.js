$(document).ready(function(){

	//	This is for paralax scrolling
	var $window = $(window);
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
		});
	});
	
	//	This is for displaying the correct info when the circle buttons are pressed
	$(".displayInfo").hide();
	var activeBtn = 0;
	
	$("#btn1").click(function() {
		//alert("andlfan");
		if(activeBtn != 1) {
			$(".displayInfo").hide();
		}
		activeBtn=1;
		$("#intro").toggle('slow', function(){});
	});
	
	$("#btn2").click(function() {
		if(activeBtn != 2) {
			$(".displayInfo").hide();
		}
		activeBtn=2;
		$("#projects").toggle('slow',function(){});
	});
	
	$("#btn3").click(function() {
		if(activeBtn != 3) {
			$(".displayInfo").hide();
		}
		activeBtn=3;
		$("#partner").toggle('slow',function(){});
	});
	
	$("#btn4").click(function() {
		if(activeBtn != 4) {
			$(".displayInfo").hide();
		}
		activeBtn=4;
		$("#people").toggle('slow',function(){});
	});
	
	//	Default displayInfo2 to hidden
	$(".displayInfo2").hide();
	
	$("#btn5").click(function() {
		if(activeBtn != 5) {
			$(".displayInfo2").hide();
		}
		activeBtn=5;
		$("#shortTermGoals").toggle('slow',function(){});
	});
	
	$("#btn6").click(function() {
		if(activeBtn != 6) {
			$(".displayInfo2").hide();
		}
		activeBtn=6;
		$("#longTermGoals").toggle('slow',function(){});
	});
	
	$(".close_btn").click(function() {
		var classvar = $(this).closest("div").attr("class");
		
		if(classvar == "displayInfo") {
			$(".displayInfo").hide();
		} else {
			$(".displayInfo2").hide();
		}
	});
	
	//	This is for jquery scroll effect when the nav is clicked
	function scrollToAnchor(aid){
		var aTag = $("a[name='"+ aid +"']");
		$('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}
	
	$('#top_nav').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
	$('#goals_nav').click(function() {
		scrollToAnchor("goals");
	});
	$('#employees_nav').click(function() {
		
		if(activeBtn != 4) { 
			$(".displayInfo").hide();
			$("#people").toggle('slow',function(){});
			activeBtn = 4;
		} else {
			$("#people").toggle('slow',function(){});
		}
		scrollToAnchor("peops");
	});
	
	$('#experience_nav').click(function() {
		
		if(activeBtn != 2) { 
			$(".displayInfo").hide();
			$("#projects").toggle('slow',function(){});
			activeBtn = 2;
		} else {
			$("#projects").toggle('slow',function(){});
		}
		scrollToAnchor("experienceAnchor");
	});
});

	//	This adjusts the nav menu when it changes sizes
	$(function() {  
		var pull        = $('#pull');  
			menu        = $('nav ul');  
			menuHeight  = menu.height();  
	  
		$(pull).on('click', function(e) {  
			e.preventDefault();  
			menu.slideToggle();  
		});  
	});  
	
	$(window).resize(function(){  
		var w = $(window).width();  
		if(w > 320 && menu.is(':hidden')) {  
			menu.removeAttr('style');  
		}  
	});