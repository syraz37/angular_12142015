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
				<button ui-sref="edit({widgetId: widget.id})">Edit</button>
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
<button ui-sref="edit({widgetId: widget.id})">Edit</button>
<button ui-sref="home">Return to List</button>
		`);




		$templateCache.put("tpls/edit.html", `

<form>
	<label>Name: <input ng-model="widget.name" /></label>
	<label>Description: <input ng-model="widget.description" /></label>
	<label>Color: <input ng-model="widget.color" /></label>
	<label>Size: <input ng-model="widget.size" /></label>
	<label>Quantity: <input ng-model="widget.quantity" /></label>
	
	<button>Save</button>
	<button ui-sref="home">Return to List</button>
	<button ui-sref="home">Return to List</button>
</form>

		`);
	})

})(angular);