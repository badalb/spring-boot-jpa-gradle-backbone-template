define(["text!templates/header.html", "backbone"],function(headerPage, Backbone){
	
	var HeaderView = Backbone.View.extend( {
		 initialize: function(){
			 
			},
			el:"#header",
			render : function (msg) {
		    	 if(!msg){
		    		 msg="";
		    	 }
		 	 		this.template = _.template( headerPage );
			     	this.$el.html("");
			     	this.$el.html(this.template({userName:msg}));
			     	return this;
		     }
	});
	return HeaderView;
});