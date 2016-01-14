(function (angular) {

	function directive() {

		return {
			require: "ngModel",
			link: function postLink(scope, element, attrs, ctrl) {
				
				function validate (value) {
					if(String(value).length < parseInt(attrs.minimum, 10)) {
						ctrl.$setValidity("minimum", false);
						return;
					} else {
						ctrl.$setValidity("minimum", true);
						return value;
					}
				}

				ctrl.$formatters.push(validate);
				ctrl.$parsers.push(validate);
			}
		}

	}

	angular.module("WidgetApp.Directives")
		.directive('minimum', directive);

})(angular);