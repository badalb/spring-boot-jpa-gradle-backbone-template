define(["text!templates/navigation.html", "backbone","app", "SecurityUtil"],function(navigationPage, Backbone, app, securityUtil){
	
	var NavigationView = Backbone.View.extend( {
		 initialize: function(){
			//console.log(app.sessionModel.attributes.permissions);
			//console.log(securityUtil.isAuthorised("VendorManagement", app.sessionModel.attributes.permissions))
			 var vendorManagement = ["VendorManagement"];
			 var vendorSearch = ["VendorSearch"];
			 this.navpermissions = {'vendorManagement':securityUtil.isAuthorised(vendorManagement, app.sessionModel.attributes.permissions),
			                        'vendorSearch':securityUtil.isAuthorised(vendorSearch, app.sessionModel.attributes.permissions)};
			 
			 
			},
			events          : {
		         /*"click a[href=#vendor]":"showCreateVendorPage",*/
		         "click a[href=#search]":"showSearchPage"*/
		    },
			el:"#sideNavigation",
			navpermissions:null,
			render : function(){
		 	 		this.template = _.template( navigationPage );
			     	this.$el.html("");
			     	console.log(this.navpermissions)
			     	this.$el.html(this.template({navpermission:this.navpermissions}));
			     	return this;
		    }/*,
		    showCreateVendorPage : function() {
		    	if(!app.homeView){
		    		 app.homeView=new vendorcompanyview();
				}
		    	app.homeView.setElement($('#maincontainer')).render();
		    },*/
		    
		    showSearchPage : function() {
		    	this.clearOrganizationData();
		    	if(!app.searchView){
		    		 app.searchView=new searchView();
				}
		    	app.searchView.setElement($('#maincontainer')).render();
		    },
		    clearOrganizationData : function() {
		    	app.vendorCompanyModel = null;
		     	app.vendorId = null;
		    }
 		    
		    
	});
	return NavigationView;
});