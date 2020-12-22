$(function(){
	var DELTA = 2750;
	
	function helperOpacityCalc() {
		var $scrollPercent = ($(document).scrollTop() / DELTA);
		
		if($scrollPercent <= 1){
			$('.profile__bg-visual').css({opacity: 1 - $scrollPercent});
		}
	}
	
	helperOpacityCalc();
	
	$(window).on('resize scroll', function() {
		if($(window).width() < 768) {
			helperOpacityCalc();
		} else {
			$('.profile__bg-visual').css({opacity: 1});
		}
	});
});
