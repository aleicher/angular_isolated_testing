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
    //Set up an empty depot
    var depot = new Depot();

    //expect that getTotalValue returns 0
    expect(depot.getTotalValue()).toEqual(0);
  });

  it('should calculate the total value of one depot item', function () {
    // TODO Set up a depot with a stub
    var stockPriceStub = {
      getStockPrice: function(stockId) {
        return 42;
      }
    };

    var depot = new Depot(stockPriceStub);

    // TODO Add one depot item with count 1 to the depot
    var depotItem = new DepotItem(stockIds.sap, 1);
    depot.add(depotItem);

    // TODO execute the test method
    expect(depot.getTotalValue()).toEqual(42);
  });

  it('should calculate the total value of multiple depot items', function () {
    // TODO Set up mock/stub

    // TODO Add depot items to depot

    // TODO Execute the test method

    // TODO Verify results
  });
});
