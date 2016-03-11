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
              //  TODO
              var sum = 0;
              for (var i=0; i<this.items.length; i++) {
                sum += this.items[i].count * this.stockPriceService.getStockPrice(this.items[i].stockId);
              }

              return sum;
            };


            return Depot;
        });

}());
