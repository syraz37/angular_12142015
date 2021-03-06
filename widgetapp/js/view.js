(function (angular) {

	ctrl.$inject = ['$scope', 'widgets2', '$stateParams'];

	function ctrl ($scope, widgets, $stateParams) {

		widgets.get($stateParams.widgetId).then(function (result) {
			$scope.widget = result.data;
		});
	}

	angular.module("WidgetApp.Controllers")
		.controller('ViewCtrl', ctrl);

})(angular);