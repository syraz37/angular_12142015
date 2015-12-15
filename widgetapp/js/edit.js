(function (angular) {

	ctrl.$inject = ['$scope', 'widgets', '$stateParams', '$state'];

	function ctrl ($scope, widgets, $stateParams, $state) {
		$scope.widget = widgets.get(parseInt($stateParams.widgetId, 10));

		$scope.saveWidget = function () {
			if($scope.widget.id) {
				widgets.update($scope.widget);
			} else {
				widgets.insert($scope.widget);
			}
			$state.go('home');
		};

		$scope.deleteWidget = function () {
			if(confirm("Are you sure you want to delete the widget?")) {
				widgets.delete($scope.widget.id);
				$state.go('home');
			};
		};
	}

	angular.module("WidgetApp.Controllers")
		.controller('EditCtrl', ctrl);

})(angular);