'use strict';

describe('Depot', function () {

    beforeEach(module('priceCalculator'));

    var stockIds = {
        sap: "DE0007164600",
        oracle: "US68389X1054"
    };

    var Depot, DepotItem;
    beforeEach(inject(function (_Depot_, _DepotItem_) {
        Depot = _Depot_;
        DepotItem = _DepotItem_;
    }));

    it('should calculate the total value 0 when it is empty', function () {
        // TODO Set up an empty depot

        // TODO expect that getTotalValue returns 0
    });

    it('should calculate the total value of one depot item', function () {
        // TODO Set up a depot with a stub

        // TODO Add one depot item with count 1 to the depot

        // TODO execute the test method
    });

    it('should calculate the total value of multiple depot items', function () {
        // TODO Set up mock/stub

        // TODO Add depot items to depot

        // TODO Execute the test method

        // TODO Verify results
    });
});
