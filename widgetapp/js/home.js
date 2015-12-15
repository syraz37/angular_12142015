(function (angular) {

	ctrl.$inject = ['$scope', 'widgets'];

	function ctrl ($scope, widgets) {
		$scope.widgets = widgets.getAll();

		$scope.deleteWidget = function (widgetId) {
			widgets.delete(widgetId);
		}
	}

	angular.module("WidgetApp.Controllers")
		.controller('HomeCtrl', ctrl);

})(angular);