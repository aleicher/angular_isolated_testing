(function () {
    'use strict';

    angular
        .module('priceCalculator')
        .service('StockPriceService', function StockPriceService() {

            /**
             * @param stockId the id of the stock for which the price should be retrieved
             * @returns {number} the stock price in dollars
             */
            this.getStockPrice = function (stockId) {
                return Math.round(Math.random() * 1000 * 100) / 100;
            };

        });
}());
