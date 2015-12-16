(function(angular) {


	function provider () {

		var _baseUrl;

		return {
			setBaseUrl: function (baseUrl) {
				_baseUrl = baseUrl;
			},
			$get: ["$http", function factory($http) {
				return {
					getAll: function () {
						return $http.get(_baseUrl);
					},
					get: function (widgetId) {
						return $http.get(_baseUrl + "/" + encodeURIComponent(widgetId));
					},
					insert: function (widget) {
						return $http.post(_baseUrl, widget);
					},
					update: function (widget) {
						return $http.put(_baseUrl + "/" + encodeURIComponent(widget._id), widget);
					},
					delete: function (widgetId) {
						return $http.delete(_baseUrl + "/" + encodeURIComponent(widgetId));
					}
				}
			}]
		};
	}

	angular.module('WidgetApp.Services')
		.provider('widgets2', provider);

})(angular);