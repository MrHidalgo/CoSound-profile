$(function(){
	var DELTA = 1000;
	
	function helperOpacityCalc() {
		var $scrollPercent = ($(document).scrollTop() / DELTA);
		
		if($scrollPercent <= 1){
			$('.profile__bg-visual').css({opacity: 1 - $scrollPercent});
		}
	}
	
	helperOpacityCalc();
	
	$(window).on('resize scroll', function() {
		helperOpacityCalc();
	});
});
