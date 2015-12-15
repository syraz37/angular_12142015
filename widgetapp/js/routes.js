(function (angular) {
		
	config.$inject = ["$stateProvider", "$urlRouterProvider"];

	function config ($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("home", {
				url: "/",
				controller: "HomeCtrl",
				templateUrl: "tpls/home.html"
			})
			.state("view", {
				url: "/widgets/:widgetId",
				controller: "ViewCtrl",
				templateUrl: "tpls/view.html"
			})

	}

	angular.module("WidgetApp.Services").config(config);

})(angular);