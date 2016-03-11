(function () {
    'use strict';

    angular
        .module('priceCalculator')
        .factory('DepotItem', function () {

            var DepotItem = function DepotItem(stockId, count) {
                this.stockId = stockId;
                this.count = count;
            };

            return DepotItem;
        });

}());
