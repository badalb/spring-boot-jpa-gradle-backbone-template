define([ "app", "views/loginView", "views/homeView", "views/headerView",
		"views/navigationView", "models/SessionModel",'jquery-cookie'],
		function(app, loginview, homeview, headerview, navigationview,
				sessionmodel) {
	Backbone.View.prototype.close = function(){
	      this.unbind();
	      if (this.onClose){
	       this.onClose();
	      }
	    };
			var AppRouter = Backbone.Router.extend({
				initialize : function() {

				},
				routes : {
					"logout":"logout",
					"search":"vendor"
				},

				vendor : function() {
					
					if(!app.homeView){
						app.homeView=new homeview();
					}
						app.homeView.render();
									
				},
				propertyDetail:function(mlsname,mlsnumber,listingstatus){
					if(!app.detailView){
						app.detailView=new detailView();
					}
					
					app.detailView.fetchPropertyDetail(mlsname,mlsnumber,listingstatus);
				},
				jobStatus:function(){
					if(!app.jobView){
						app.jobView = new jobView();
					}
			    	app.jobView.setElement($('#maincontainer')).render();
					app.jobView.fetchJobStatusDetails();
			    		    				    	
				},
				
				vendorSearch : function(){
			    	if(!app.searchView){
			    		 app.searchView=new searchView();
					}
			    	app.searchView.setElement($('#maincontainer')).render();
			    	
				
			    	
			    	if(!app.headerView){
						app.headerView=new headerview();
					}
			    	app.headerView.render(app.sessionModel.get("userName"));
					if(!app.navigationView){
						app.navigationView=new navigationview();
					}
					app.navigationView.render();

				},
				logout:function(){
					var resp=app.sessionModel.logout();
					app.sessionModel.clear()
					window.location.assign("login");
				}

			});
			return AppRouter;
		});