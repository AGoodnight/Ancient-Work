(function($){

	var shade = "#556b2f";

	$.fn.simpleSlider = function(elem,speed,params){
		
		defaults = {
		
			speed:1,
			delay:3,
			auto:true
		
		}
		
		var setPara = function(params){
			for(key in params){
				var param = key.toString();
				for(k in defaults){
					var def = k.toString()
					if(def === param){
						defaults[def] = params[key];		
					}	
				}
			}
		}
		
		$.fn.simpleSlide(elem,speed,params){
			setPara(params);
			
			//make container and slides
			//load images
			//set event listeners
			//init
			
		}
	
		return this;
	};

}(jQuery));