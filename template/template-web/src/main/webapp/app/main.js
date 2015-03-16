require([ "app","backbone", "underscore", "routers/AppRouter", "models/SessionModel", "polyglot" ],
function(app,Backbone,_, WebRouter, sessionmodel, polyglot) {
	
	// Utility functions are added below
	 app.currencyFormatter = function(currencyClass) {
	  console.log("Currency Formatter Called : Currency Class :: " + currencyClass);
	  if(currencyClass == undefined) {
	   currencyClass = 'currency';
	  }
	  console.log("Currency Formatter Called : Currency Class :: " + currencyClass);
	  var originalID;
	  var originalName;
	  var originalValue;
	  $('.' + currencyClass).each(function() {
	   originalID = $(this).attr('id');
	   
	   if( !(new RegExp(currencyClass).test(originalID)) ) {
	    originalName = $(this).attr('name');
	    originalValue = $(this).attr('value') || 0;
	    console.log("Original ID : " + originalID);
	    console.log("Original name : " + originalName);
	    console.log("Original Value : " + originalValue);
	    
	    if(originalID === undefined) {
	     originalID = originalName;
	    }
	    
	    console.log("Original ID 2: " + originalID);
	    console.log(" ------------------- ");
	    
	    
	    $(this).attr("id",originalID + "_currency");
	    $(this).removeAttr("name");
	    
	    $('<input/>', {
	                 id: originalID ,
	                 name:originalName,
	                 class:originalID,
	                 value:originalValue,
	                 type:"hidden"
	    }).appendTo($(this).parent());
	    
	    var parent = $(this).parent();
	    console.log("Parent : " + parent);
	   }
	  });
	  
	  
	  var curr=0;
	  $('.' + currencyClass).keyup(function(evt) {
	//  $(document).on("keyup", ".currency", function(evt) { 
	//   console.log("Event Parent : " + evt.currentTarget.parentNode.nodeName);
	   var start = this.selectionStart,
	         end = this.selectionEnd;
	   
	      $('.' + currencyClass).formatCurrency({roundToDecimalPlace: -1}); 
	       
	       console.log("Length of Curr : " + curr);
	   console.log("Length of start : " + start);
	   console.log("Length of end : " + end);
	   if(this.value.length > curr+1) {
	    start = start + 1;
	    end = end + 1;
	    console.log("Reached here");
	   }
	   curr = this.value.length;
	   console.log("Length of Currency : " + this.value.length);
	    
//	       $('.' + currencyClass).formatCurrency(); 
	       var id = $(this).attr('id').replace('_currency','');
	       
	       $(this).closest('div').find('#'+id).val($(this).asNumber({ parseType: 'float' }));
	       
//	       $('.'+id).val($(this).asNumber({ parseType: 'float' }));
	       console.log("Original Currency id 2: " + id );
	       console.log("Original Currency Value 2: " + $(this).closest('div').find('#'+id).val() );
	       
	      this.setSelectionRange(start, end);
	       
	  });
	 };
	 // Utility functions Ends Here
	
	var buildSessionModel = function() {
		var sessionData = null;
		app.sessionModel = new sessionmodel();
		sessionData = app.sessionModel.getUser();
		app.sessionModel.set({
			userId : sessionData.userId,
			firstName : sessionData.firstName,
			isDeleted : sessionData.isDeleted,
			isInactive : sessionData.isInactive,
			isLocked : sessionData.isLocked,
			lastName : sessionData.lastName,
			userName : sessionData.userName,
			permissions : sessionData.permissions,
			statusCode : sessionData.statusCode,
			message : sessionData.message,
			roles : sessionData.roles
		});
		console.log(app.sessionModel)
	};
	buildSessionModel();
	// var locale = localStorage.getItem('locale') || 'en';
	 var userLang = navigator.language || navigator.userLanguage; 
	 if(userLang =='undefined'){
		 userLang = "en-US";
	 }
	 var myUrl = '../locales/' + userLang + '.json';
	 
	 $.ajax({
		  url: myUrl,
		  dataType: 'json',
		  async: false,
		  success: function(data) {
			  window.polyglot = new Polyglot({phrases: data});
		  } });
	if(!app.router){
		app.router=new WebRouter();
	}
	Backbone.history.start();
	var current_route = window.location.hash.substr(1);
	if(!current_route){
		app.router.navigate("search",{ trigger:true, replace: true })
	}else{
		app.router.navigate(current_route,{ trigger:true, replace: true })
	}
	
	/*if($.inArray('VendorManagement', app.sessionModel.attributes.permissions)==-1) {
		app.router.navigate("search",{ trigger:true, replace: true });
	} else {
		app.router.navigate("vendor",{ trigger:true, replace: true });
	}*/
});
