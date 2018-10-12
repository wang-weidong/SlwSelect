/**
 * Slw/SlwPlugins v3.0 2016.8 by CSS WangWeidong
 */
var Slw = {}, SlwPlugins = {};
;
(function() {
	Slw.Utils = {
		isnull : function(str) {
			return (str == null || (typeof str == 'undefined') || str == '');
		},
		isIE : function() {
			var userAgent = navigator.userAgent;
			if (userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)) return true;
			var isOpera = userAgent.indexOf("Opera") > -1;
			return userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
		},
		ieVersion : function() {
			var userAgent = navigator.userAgent;
			if (userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)) return 11;
			var version = -1;
			var isOpera = userAgent.indexOf("Opera") > -1;
			var ie = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
			if (ie) {
				var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
				reIE.test(userAgent);
				version = parseFloat(RegExp["$1"]);
			}
			return version;
		}
	};
})(jQuery);
