require([
    "app",
    "routers/AppRouter",
    "backbone",
    "underscore",
    "views/loginView"
],
function(app, WebRouter,Backbone,_,loginview) {
	var test = new loginview();
	test.render();
});
