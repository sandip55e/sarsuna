(function ($) {
	
	$.fn.nthParent = function (n) {
        var div = this;
        for (var i = 0; i < n; i++)
            div = div.parent();
        return div;
    };
    
    	
	$(document).ready(function() {
        
        /***** Scroll to Top *****/ 
		$(".back-to-top").click(function(event) {
			event.preventDefault();
			$("html, body").animate({ scrollTop: 0 }, 1000);			
		});
        
        
        
        
        
    });    
})(jQuery);