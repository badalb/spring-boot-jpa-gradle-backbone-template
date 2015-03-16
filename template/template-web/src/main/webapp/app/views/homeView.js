define(["text!templates/hello.html", "backbone","app"],
		function(helloPage, Backbone,app){
	 var HomeView = Backbone.View.extend( {
		 initialize: function(){
		 },
		 el:"#maincontainer",
		 events          : {
	      
	         
	     },
	     render : function () {
	    	 /*if(app.vendorCompanyModel) {
	    		 app.vendorCompanyModel = null;
	    	 }*/
	    	 
	    	 this.template = _.template( helloPage );
	     	 this.$el.html("");
	     	 this.$el.html(this.template());
	     	 
	     	 /*if(app.homeView.companyView) {
	     		app.homeView.companyView.model = new vendorcompanymodel();
	     	 }*/
	     	 //this.showCompanyTab();
	     	 return this;
	     }
	 });
	 return HomeView;
});