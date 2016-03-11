'use strict';

describe('Depot', function () {

  beforeEach(module('priceCalculator'));

  var stockIds = {
    sap: "DE0007164600",
    oracle: "US68389X1054"
  };

  var Depot, DepotItem, StockPriceService;
  beforeEach(inject(function (_Depot_, _DepotItem_, _StockPriceService_) {
    Depot = _Depot_;
    DepotItem = _DepotItem_;
    StockPriceService = _StockPriceService_;
  }));

  it('should calculate the total value 0 when it is empty', function () {
    //Set up an empty depot
    var depot = new Depot();

    //expect that getTotalValue returns 0
    expect(depot.getTotalValue()).toEqual(0);
  });

  it('should calculate the total value of one depot item', function () {
    //Set up a depot with a stub
    var stockPriceStub = {
      getStockPrice: function(stockId) {
        return 42;
      }
    };

    var depot = new Depot(stockPriceStub);

    //Add one depot item with count 1 to the depot
    var depotItem = new DepotItem(stockIds.sap, 1);
    depot.add(depotItem);

    //execute the test method
    expect(depot.getTotalValue()).toEqual(42);
  });

  it('should calculate the total value of multiple depot items', function () {
    //Set up mock/stub
    var mock = sinon.mock(StockPriceService);
    mock.expects('getStockPrice').withArgs(stockIds.sap).once().returns(42);
    mock.expects('getStockPrice').withArgs(stockIds.oracle).once().returns(24);

    // create new depot
    var depot = new Depot(StockPriceService);

    //Add depot items to depot
    var sapDepotItem = new DepotItem(stockIds.sap, 2);
    var oracleDepotItem = new DepotItem(stockIds.oracle, 3);
    depot.add(sapDepotItem);
    depot.add(oracleDepotItem);

    //Execute the test method
    expect(depot.getTotalValue()).toEqual(2*42 + 3*24);

    //Verify results
    mock.verify();
  });
});
