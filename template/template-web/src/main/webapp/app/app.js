/**
 * @desc app globals
 */
define([], function() {

	var app = {
		env : 'dev',
		hostname:'investor',
		context : function() {
			var rootcontext = '';
			if (this.env == 'prod') {
				var loc = window.location;
				var path = loc.pathname;
				var ctx = path.split('/')[1];
				rootcontext = "/" + ctx + "/";
				//for iframe
				if (window.location.hostname == this.hostname) {
					rootcontext = "/" + ctx+"/api/v1/";
				}
			}
			return rootcontext;
		}
	};
	return app;
});