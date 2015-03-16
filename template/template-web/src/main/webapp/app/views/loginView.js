define(["text!templates/login.html","views/headerView","views/navigationView","app", "models/SessionModel"],function(loginPage,headerview,navigationview,app, sessionmodel){
	 var LoginView = Backbone.View.extend( {
		 initialize: function(){
				
		},
	el:"#maincontainer",
	
	 events          : {
         'click #submit' : 'onLoginAttempt',
         'click #forget-password':'resetPassword',
         'click #back-btn':'showloginformfromResetPassword'
        /* 'click #register-btn':'showRegistrationForm',*/
        /* 'click #register-back-btn':'showloginformfromRegistration',*/
        /* 'click #register-submit-btn':'register'*/
         
     },
     register:function(){
    	 if ($('#registrationForm').validate().form()) {
    		 console.log("sending request");
    		 var self = this;
             var url = "/register";
             var responseObject = $.ajax({
                 type: "POST",
                 url: url,
                 data:$("#registrationForm").serializeArray(),
                 async: false
             });
             responseObject.done(function(response){
            	
            	 
             }
            		 );
             responseObject.fail(function(response){
            	 
             });
    	 }
     },
     onLoginAttempt : function ( evt ) {
    	 if ($('.login-form').validate().form()) {
    	 var self = this;
         var url = app.context() + "/login";
         var responseObject = $.ajax({
             type: "POST",
             url: url,
             data: $("#loginForm").serialize(),
             async: false
         });
         responseObject.done(function(response){
        	 app.sessionModel=new sessionmodel();
        	 app.sessionModel.set({userId:response.userId, statusCode: response.statusCode, message: response.message});
        	 window.location.assign("index1");
        	// window.location.assign("index");
        	 
         }
        		 );
         responseObject.fail(function(response){
        	 var respObj =JSON.parse(response.responseText);
        	 console.log(respObj);
        	 app.sessionModel=new sessionmodel();
        	 app.sessionModel.set({ statusCode: respObj.statusCode, message: respObj.message});
        	 self.render(app.sessionModel);
        	 $('.alert-danger').show();
         });
    	 }
         
     },
     showRegistrationForm:function(){
    	$('#loginForm').hide();
         $('#registrationForm').show();
     }
     ,
     resetPassword:function(){
    	 $('#loginForm').hide();
         $('#forgotPasswordForm').show();
     },
     showloginformfromResetPassword:function(){
    	 $('#loginForm').show();
         $('#forgotPasswordForm').hide();
     },
     showloginformfromRegistration:function(){
    	 $('#loginForm').show();
         $('#registrationForm').hide();
     },
     
     render : function (msg) {
    	 if(!msg){
    		 msg=new sessionmodel();
    	 }
    	 console.log(msg);
    	 var errMsg = msg.get("message");
 	 	this.template = _.template( loginPage );
	     	this.$el.html("");
	     	this.$el.html(this.template({message:errMsg}));
	     	this.handleLogin();
	     	this.handleForgetPassword();
	     /*	this.handleRegister();*/
	     	return this;
     },
     handleLogin:function() {

 		$('#loginForm').validate({
 	            errorElement: 'span', //default input error message container
 	            errorClass: 'help-block', // default input error message class
 	            focusInvalid: false, // do not focus the last invalid input
 	            rules: {
 	                username: {
 	                    required: true
 	                },
 	                password: {
 	                    required: false
 	                },
 	                remember: {
 	                    required: false
 	                }
 	            },

 	            messages: {
 	                username: {
 	                    required: "Username is required."
 	                },
 	                password: {
 	                    required: "Password is required."
 	                }
 	            },

 	            invalidHandler: function (event, validator) { //display error alert on form submit   
 	                $('.login-form').show();
 	            },

 	            highlight: function (element) { // hightlight error inputs
 	                $(element)
 	                    .closest('.form-group').addClass('has-error'); // set error class to the control group
 	            },

 	            success: function (label) {
 	                label.closest('.form-group').removeClass('has-error');
 	                label.remove();
 	            },

 	            errorPlacement: function (error, element) {
 	                error.insertAfter(element.closest('.input-icon'));
 	            }
 	        });

 	        
 	},
 	 handleForgetPassword :function () {
		$('#forgotPasswordForm').validate({
	            errorElement: 'span', //default input error message container
	            errorClass: 'help-block', // default input error message class
	            focusInvalid: false, // do not focus the last invalid input
	            ignore: "",
	            rules: {
	                email: {
	                    required: true,
	                    email: true
	                }
	            },

	            messages: {
	                email: {
	                    required: "Email is required."
	                }
	            },

	            invalidHandler: function (event, validator) { //display error alert on form submit   

	            },

	            highlight: function (element) { // hightlight error inputs
	                $(element)
	                    .closest('.form-group').addClass('has-error'); // set error class to the control group
	            },

	            success: function (label) {
	                label.closest('.form-group').removeClass('has-error');
	                label.remove();
	            },

	            errorPlacement: function (error, element) {
	                error.insertAfter(element.closest('.input-icon'));
	            }
	        });
	},
	handleRegister : function () {

		function format(state) {
            if (!state.id) return state.text; // optgroup
            return "<img class='flag' src='assets/img/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
        }
		$("#select2_sample4").select2({
		  	placeholder: '<i class="fa fa-map-marker"></i>&nbsp;Select a Country',
            allowClear: true,
            formatResult: format,
            formatSelection: format,
            escapeMarkup: function (m) {
                return m;
            }
        });
			$('#select2_sample4').change(function () {
                //$('.register-form').validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });
         $('#registrationForm').validate({
	            errorElement: 'span', //default input error message container
	            errorClass: 'help-block', // default input error message class
	            focusInvalid: false, // do not focus the last invalid input
	            ignore: "",
	            rules: {
	                
	                fullname: {
	                    required: true
	                },
	                email: {
	                    required: true,
	                    email: true
	                },
	                address: {
	                    required: true
	                },
	                city: {
	                    required: true
	                },
	                country: {
	                    required: true
	                },

	                username: {
	                    required: true
	                },
	                password: {
	                    required: true
	                },
	                rpassword: {
	                    equalTo: "#register_password"
	                },

	                tnc: {
	                    required: true
	                }
	            },

	            messages: { // custom messages for radio buttons and checkboxes
	                tnc: {
	                    required: "Please accept TNC first."
	                }
	            },

	            invalidHandler: function (event, validator) { //display error alert on form submit   

	            },

	            highlight: function (element) { // hightlight error inputs
	                $(element)
	                    .closest('.form-group').addClass('has-error'); // set error class to the control group
	            },

	            success: function (label) {
	                label.closest('.form-group').removeClass('has-error');
	                label.remove();
	            },

	            errorPlacement: function (error, element) {
	                if (element.attr("name") == "tnc") { // insert checkbox errors after the container                  
	                    error.insertAfter($('#register_tnc_error'));
	                } else if (element.closest('.input-icon').size() === 1) {
	                    error.insertAfter(element.closest('.input-icon'));
	                } else {
	                	error.insertAfter(element);
	                }
	            }
	        });

	}

	 
	 } );

	    return LoginView;
     
});