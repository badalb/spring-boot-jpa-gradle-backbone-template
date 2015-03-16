/* # main.js
# Created by Pawan Kumar Choudhary on 3-July-14.
# Description: load script and initilize app and ion sliders.
# Copyright 2014 Panalink, All rights reserved.
*/

define([ "hide-show",
    "jquery-ui-1.10.3.custom.min",
    "bootstrap.min", "bootstrap-hover-dropdown.min", "bootstrap-select.min",
    "jquery.slimscroll.min", "jquery.blockui.min",
    "jquery.uniform.min", "jquery.validate.min", "select2.min", "jquery.multi-select", "bootstrap-datepicker",
    "tmpl.min", "load-image", "jquery.fileupload",
    "jquery.fileupload-process", "jquery.fileupload-image", "jquery.fileupload-ui",
    "jquery.dataTables", "DT_bootstrap",
    "app1", 
    "form-validation", 
    "components-pickers", "components-dropdowns",
    "form-fileupload", "login", "table-managed"
    ], function() {
        App.init();
        /*FormValidation.init();*/
        ComponentsPickers.init();
        ComponentsDropdowns.init();
//        Login.init();
        FormFileUpload.init();
        TableManaged.init();
    });
