//app.js
var app = (function() {

	var api = {
		views: {}.
		models: {},
		collections: {},
		content: null,
		router: null,
		todos: null,
		init: function(){
			this.content = $("#content");
		},
		changeContent: function(el){
			this.content.empty().append(el);
			retunr this;
		},
		title: function(str){
			$("h1").text(str);
			return this;
		}
	};

	var ViewsFactory = {};
	var Router = Backbone.Router.extend({});
	api.router = new Router();

	return api;

})();