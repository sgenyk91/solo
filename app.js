var app = angular.module("main", []);

app.controller("RestaurantController", function() {
	this.restaurant = restaurantList;
});

var restaurantList = [{
		name: "Taqueria Castillo Mason"
	}, {
		name: "Taqueria Cancun"
	}];