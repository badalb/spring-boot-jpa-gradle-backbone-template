define([ "backbone", "app" ], function(Backbone, app) {
	var SessionModel = Backbone.Model.extend({

		defaults : {
			userId : null,
			firstName : null,
			isDeleted : false,
			isInactive : false,
			isLocked : false,
			lastName : null,
			userName : null,
			permissions : null,
			statusCode : null,
			message : null,
			roles: null
		},
		
		url :function (){
			var gurl=app.context()+ "/success";
			return gurl
		},

		getUser : function() {
			var self = this;
			var resp = null;
			var url = this.url();
			var responseObject = $.ajax({
				type : "GET",
				url : url,
				async : false
			});

			responseObject.done(function(response) {
				resp = response;
			});
			responseObject.fail(function(response) {
				resp = response;
			});

			return resp;
		},
		logout:function(){
			var self = this;
			var resp = null;
			var url = this.url;
			var responseObject = $.ajax({
				type : "POST",
				url : app.context() +"/logout",
				async : false
			});

			responseObject.done(function(response) {
				resp = response;
			});
			responseObject.fail(function(response) {
				resp = response;
			});

			return resp;
		}
	});

	return SessionModel;

})