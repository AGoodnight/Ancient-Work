(function($){

	$.fn.simpleSlider = function(options){
		
		// the blank object ( {} ) prevents our defaults from being overwritten.
		var settings = $.extend({},$.fn.simpleSlider.defaults ,options);	
		return this;
		
	};
	
	// isolating the defaults and then calling them in the extend above gives users the ability to set defaults at any time.
	$.fn.simpleSlider.defaults ={
		speed:1,
		delay:3,
		auto:true
	}

}(jQuery));
