(function(angular) {

	"use strict";

	angular.module('WidgetApp.Services', []);
	angular.module('WidgetApp.Controllers', ['WidgetApp.Services']);

	angular.module('WidgetApp', ['ui.router', 'WidgetApp.Controllers'])
	.run(function ($templateCache) {
		$templateCache.put("tpls/home.html", `
<table class="table">
	<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
			<th>color</th>
			<th>size</th>
			<th>quantity</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		<tr ng-repeat="widget in widgets">
			<td ng-bind="widget.name"></td>
			<td ng-bind="widget.description"></td>
			<td ng-bind="widget.color"></td>
			<td ng-bind="widget.size"></td>
			<td ng-bind="widget.quantity"></td>
			<td>
				<button ng-click="edit">Edit</button>
				<button ng-click="edit">View</button>
				<button ng-click="deleteWidget(widget.id)">Delete</button>
			</td>
		</tr>
	</tbody>
</table>
		`);
	})

})(angular);