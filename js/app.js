var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Coin = /** @class */ (function () {
    function Coin() {
    }
    return Coin;
}());
var BitCoin = /** @class */ (function (_super) {
    __extends(BitCoin, _super);
    function BitCoin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = .25;
        return _this;
    }
    Object.defineProperty(BitCoin.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    BitCoin.prototype.getImageUrl = function () {
        return "assets/bitcoin.png";
    };
    return BitCoin;
}(Coin));
var DogeCoin = /** @class */ (function (_super) {
    __extends(DogeCoin, _super);
    function DogeCoin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = .25;
        return _this;
    }
    Object.defineProperty(DogeCoin.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    DogeCoin.prototype.getImageUrl = function () {
        return "assets/dogecoin.png";
    };
    return DogeCoin;
}(Coin));
var Ether = /** @class */ (function (_super) {
    __extends(Ether, _super);
    function Ether() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = .25;
        return _this;
    }
    Object.defineProperty(Ether.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Ether.prototype.getImageUrl = function () {
        return "assets/ether.png";
    };
    return Ether;
}(Coin));
var LiteCoin = /** @class */ (function (_super) {
    __extends(LiteCoin, _super);
    function LiteCoin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = .25;
        return _this;
    }
    Object.defineProperty(LiteCoin.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    LiteCoin.prototype.getImageUrl = function () {
        return "assets/litecoin.png";
    };
    return LiteCoin;
}(Coin));
var SodaCategory = /** @class */ (function () {
    function SodaCategory() {
        this.name = "Soda";
    }
    SodaCategory.prototype.getImageUrl = function () {
        return "assets/soda.png";
    };
    return SodaCategory;
}());
/// <reference path="./productCategory.ts" />
var CocaCola = /** @class */ (function () {
    function CocaCola() {
        this.name = "Coca-Cola";
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
/// <reference path="./product.ts" />
var productFactory = /** @class */ (function () {
    function productFactory() {
    }
    productFactory.GetProduct = function () {
        return new CocaCola;
    };
    return productFactory;
}());
/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="./productFactory.ts" />
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 5] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = /** @class */ (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.selectedCell = ko.observable(new Cell(new CocaCola()));
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new DogeCoin(), new BitCoin(), new Ether(), new LiteCoin()];
        this.canPay = ko.pureComputed(function () { return _this.paid() - _this.selectedCell().product.price >= 0; });
        this.select = function (cell) {
            cell.sold(false);
            _this.selectedCell(cell);
        };
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.Value);
        };
        this.pay = function () {
            if (_this.selectedCell().stock() < 1) {
                alert("I'm sorry, no more stock..");
                return;
            }
            var currentPaid = _this.paid();
            _this.paid(Math.round(((currentPaid - _this.selectedCell().product.price) * 100)) / 100);
            var currentStock = _this.selectedCell().stock();
            _this.selectedCell().stock(currentStock - 1);
            _this.selectedCell().sold(true);
        };
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        set: function (givenSize) {
            this.cells([]);
            for (var index = 0; index < givenSize; index++) {
                var product = productFactory.GetProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map