(function () {
    'use strict';

    angular
        .module('priceCalculator')
        .factory('Depot', function () {

            var Depot = function (stockPriceService) {
                this.stockPriceService = stockPriceService;
                this.items = [];
            };

            Depot.prototype.add = function (depotItem) {
                this.items.push(depotItem);
            };

            /**
             * @returns {number} the total value of all DepotItems
             */
            Depot.prototype.getTotalValue = function () {
                // TODO
            };

            return Depot;
        });

}());
