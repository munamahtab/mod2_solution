(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', myToBuyController)
	.controller('AlreadyBoughtController', myAlreadyBoughtController)
	.service('ShoppingListCheckOffService', myShoppingListCheckOffService);

	
	myToBuyController.$inject = ['ShoppingListCheckOffService'];
	function myToBuyController(ShoppingListCheckOffService) {
		var ToBuyCtrl = this;
		ToBuyCtrl.toBuy = ShoppingListCheckOffService.getBuyItems();
		ToBuyCtrl.RemoveItem = function (itemName, quantity, index) {
			ShoppingListCheckOffService.RemoveItem(itemName, quantity, index);
		};
	};


	myAlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function myAlreadyBoughtController(ShoppingListCheckOffService) {
		var AlreadyBoughtCtrl = this;
		AlreadyBoughtCtrl.gotIt = ShoppingListCheckOffService.getGotIt();
	};
	

	function myShoppingListCheckOffService() {
		var service = this;
		var toBuy = [
		   
			{name: 'Coockies', quantity: 10},
			{name: 'Cereal', quantity: 4},
			{name: 'Orange juice', quantity: 5},
			{name: 'Sugry drinks', quantity: 6},
			{name: 'Candy', quantity: 7},
			{name: 'Cerael bars', quantity: 7},
			{name: 'Egg', quantity: 12}
		];

		var gotIt = [];
		
		service.getBuyItems = function () {
			return toBuy;
		};


		service.RemoveItem = function (itemName, quantity, index) {
			var item = {
				name: itemName,
				quantity: quantity
			};
			toBuy.splice(index, 1);
			gotIt.push(item);
			
		};

		service.getGotIt = function () {
			return gotIt;
		};
		
	};
})();