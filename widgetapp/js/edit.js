(function (angular) {

	ctrl.$inject = ['$scope', 'widgets2', 'colors', '$stateParams', '$state'];

	function ctrl ($scope, widgets, colors, $stateParams, $state) {
		if($stateParams.widgetId) {
			widgets.get($stateParams.widgetId).then(function (results) {
				$scope.widget = results.data;
			});
		} else {
			$scope.widget = {};
		}

		$scope.colors = colors.getAll();

		$scope.saveWidget = function () {
			if($scope.widget._id) {
				widgets.update($scope.widget).then(function () {
					$state.go('home');
				});
			} else {
				widgets.insert($scope.widget).then(function () {
					$state.go('home');
				});
			}
		};

		$scope.deleteWidget = function () {
			if(confirm("Are you sure you want to delete the widget?")) {
				widgets.delete($scope.widget._id).then(function () {
					$state.go('home');
				});
			};
		};
	}

	angular.module("WidgetApp.Controllers")
		.controller('EditCtrl', ctrl);

})(angular);