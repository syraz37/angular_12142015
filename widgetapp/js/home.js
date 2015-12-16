(function (angular) {

	ctrl.$inject = ['$scope', 'widgets2'];

	function ctrl ($scope, widgets) {

		widgets.getAll().then(function (results) {
			$scope.widgets = results.data;
		});

		$scope.deleteWidget = function (widgetId) {
			if(confirm("Are you sure you want to delete the widget?")) {
				widgets.delete(widgetId);
			};
		}

	}

	angular.module("WidgetApp.Controllers")
		.controller('HomeCtrl', ctrl);

})(angular);