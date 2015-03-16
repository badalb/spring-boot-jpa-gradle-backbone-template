/* # app.js
# Created by Pawan Kumar Choudhary on 3-July-14.
# Description: Place third party dependencies in the lib folder, Configure loading modules from the lib directory, except 'app'.
# Copyright 2014 Panalink, All rights reserved.
*/


//require(["lib/jquery-1.10.2.min", 
////"lib/hide-show",
//    "lib/jquery-ui-1.10.3.custom.min",
//    "lib/bootstrap.min", "lib/bootstrap-hover-dropdown.min",
////"jquery.slimscroll.min",
//    "lib/jquery.uniform.min", "lib/jquery.validate.min", "lib/select2.min", "lib/bootstrap-datepicker",
//    "lib/tmpl.min", "lib/load-image.min", "lib/jquery.fileupload",
//    "lib/jquery.fileupload-process", "lib/jquery.fileupload-image", "lib/jquery.fileupload-ui",
//    "lib/app1", "lib/form-validation", "lib/components-pickers", "lib/components-dropdowns",
//    "lib/form-fileupload", "lib/login"
//    ], function($) {

//        App.init();
//        FormValidation.init();
//        FormFileUpload.init();
//        ComponentsPickers.init();
//        ComponentsDropdowns.init();
//        Login.init();
//    });

requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app"
    },
    "shim": {
        "bootstrap.min": ["jquery-1.10.2.min"],
        "bootstrap-hover-dropdown.min": ["jquery-1.10.2.min"],

        "hide-show": ["jquery-1.10.2.min"],
        "jquery.slimscroll.min": ["jquery-1.10.2.min"],
        "jquery.validate.min": ["jquery-1.10.2.min"],        

        "jquery.fileupload-ui": ["jquery-1.10.2.min"],
        "jquery-ui-1.10.3.custom.min": ["jquery-1.10.2.min"],
        "jquery.fileupload": ["jquery-1.10.2.min"],
        "load-image": ["jquery-1.10.2.min"],
        "jquery.fileupload-process": ["jquery-1.10.2.min"],
        "jquery.fileupload-image": ["jquery-1.10.2.min"],        

        "jquery.uniform.min": ["jquery-1.10.2.min"],

        "select2.min": ["jquery-1.10.2.min"],

        "jquery.dataTables": ["jquery-1.10.2.min"],
        "DT_bootstrap": ["bootstrap.min"],
        "table-managed": ["jquery-1.10.2.min"],

        "bootstrap-datepicker": ["jquery-1.10.2.min"],               
        
        "app1": ["jquery-1.10.2.min"]
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
