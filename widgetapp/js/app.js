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
			<th>color</th>
			<th>size</th>
			<th>quantity</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		<tr ng-repeat="widget in widgets">
			<td ng-bind="widget.name"></td> 
			<td ng-bind="widget.color"></td>
			<td ng-bind="widget.size"></td>
			<td ng-bind="widget.quantity"></td>
			<td>
				<button ui-sref="view">Edit</button>
				<button ui-sref="view({widgetId: widget.id})">View</button>
				<button ng-click="deleteWidget(widget.id)">Delete</button>
			</td>
		</tr>
	</tbody>
</table>
		`);

		$templateCache.put("tpls/view.html", `
<div>
	<h1 ng-bind="widget.name"></h1>

	<p ng-bind="widget.description"></p>

	<label>Color: 
	<span ng-bind="widget.color"></span></label>
	<label>Size: 
	<span ng-bind="widget.size"></span></label>
	<label>Quantity: 
	<span ng-bind="widget.quantity"></span></label>
</div>
<button>Edit</button>
<button ui-sref="home">Return to List</button>
		`);
	})

})(angular);