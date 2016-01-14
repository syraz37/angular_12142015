(function (angular) {

	function directive() {

		return {
			require: "ngModel",
			link: function postLink(scope, element, attrs, ctrl) {
				

			}
		}

	}

	angular.module("WidgetApp.Directives")
		.directive('alert', directive);

})(angular);