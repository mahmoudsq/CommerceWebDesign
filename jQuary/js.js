$(document).ready(function(){
	
	// Change Header Height
		
	//Scroll To features
	$('.nav .arrow i').click(function(){
		$('html, body').animate({
			scrollTop:$('.offer').offset().top
		} ,1500);
	});
	
		//Scroll To features
	$('.offer .arrow i').click(function(){
		$('html, body').animate({
			scrollTop:$('.use').offset().top
		} ,1500);
	});
	
	$('.use .arrow i').click(function(){
		$('html, body').animate({
			scrollTop:$('.option').offset().top
		} ,1500);
	});
	
		$('.option .arrow i').click(function(){
		$('html, body').animate({
			scrollTop:$('.price_table').offset().top
		} ,1500);
	});
	
	$('#miup').mixItUp();
	
	$('.shuffle li').click(function(){
		$(this).addClass('select').siblings().removeClass('select')
	});
	
	$('.links li a').click(function(){
		$('html, body').animate({
			scrollTop:
			$('#' + $(this).data('value')).offset().top - 20
			},	2000);
		});
	})
