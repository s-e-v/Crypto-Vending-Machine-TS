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
    function Coin(value) {
        this.value = value;
        this.value = value;
    }
    return Coin;
}());
var BitCoin = /** @class */ (function (_super) {
    __extends(BitCoin, _super);
    function BitCoin() {
        return _super.call(this, 1) || this;
    }
    BitCoin.prototype.getImageUrl = function () {
        return "assets/bitcoin.gif";
    };
    return BitCoin;
}(Coin));
var DogeCoin = /** @class */ (function (_super) {
    __extends(DogeCoin, _super);
    function DogeCoin() {
        return _super.call(this, .00000058) || this;
    }
    DogeCoin.prototype.getImageUrl = function () {
        return "assets/dogecoin.gif";
    };
    return DogeCoin;
}(Coin));
var Ether = /** @class */ (function (_super) {
    __extends(Ether, _super);
    function Ether() {
        return _super.call(this, 0.09903249) || this;
    }
    Ether.prototype.getImageUrl = function () {
        return "assets/ether.gif";
    };
    return Ether;
}(Coin));
var LiteCoin = /** @class */ (function (_super) {
    __extends(LiteCoin, _super);
    function LiteCoin() {
        return _super.call(this, 0.0182) || this;
    }
    LiteCoin.prototype.getImageUrl = function () {
        return "assets/litecoin.gif";
    };
    return LiteCoin;
}(Coin));
var ProductCategory = /** @class */ (function () {
    function ProductCategory() {
        this.imgPath = "assets/";
    }
    return ProductCategory;
}());
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Luxury Cars";
        return _this;
    }
    Cars.prototype.getImageUrl = function () {
        return this.imgPath + "maserati.png";
    };
    return Cars;
}(ProductCategory));
var Jets = /** @class */ (function (_super) {
    __extends(Jets, _super);
    function Jets() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Private Jets";
        return _this;
    }
    Jets.prototype.getImageUrl = function () {
        return this.imgPath + "privatejet.png";
    };
    return Jets;
}(ProductCategory));
var Football = /** @class */ (function (_super) {
    __extends(Football, _super);
    function Football() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Football Tickets";
        return _this;
    }
    Football.prototype.getImageUrl = function () {
        return this.imgPath + "chelsea.jpg";
    };
    return Football;
}(ProductCategory));
var Sodas = /** @class */ (function (_super) {
    __extends(Sodas, _super);
    function Sodas() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Not so luxury soda drinks";
        return _this;
    }
    Sodas.prototype.getImageUrl = function () {
        return this.imgPath + "cocacola.png";
    };
    return Sodas;
}(ProductCategory));
var Motorcycles = /** @class */ (function (_super) {
    __extends(Motorcycles, _super);
    function Motorcycles() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Motorcycles";
        return _this;
    }
    Motorcycles.prototype.getImageUrl = function () {
        return this.imgPath + "ducati.png";
    };
    return Motorcycles;
}(ProductCategory));
var Villas = /** @class */ (function (_super) {
    __extends(Villas, _super);
    function Villas() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Villas";
        return _this;
    }
    Villas.prototype.getImageUrl = function () {
        return this.imgPath + "villa.jpg";
    };
    return Villas;
}(ProductCategory));
var Computers = /** @class */ (function (_super) {
    __extends(Computers, _super);
    function Computers() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Computers";
        return _this;
    }
    Computers.prototype.getImageUrl = function () {
        return this.imgPath + "alienware.png";
    };
    return Computers;
}(ProductCategory));
var Phones = /** @class */ (function (_super) {
    __extends(Phones, _super);
    function Phones() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Phones";
        return _this;
    }
    Phones.prototype.getImageUrl = function () {
        return this.imgPath + "iphonex.png";
    };
    return Phones;
}(ProductCategory));
var Money = /** @class */ (function (_super) {
    __extends(Money, _super);
    function Money() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Money";
        return _this;
    }
    Money.prototype.getImageUrl = function () {
        return this.imgPath + "usd.png";
    };
    return Money;
}(ProductCategory));
/// <reference path="./productCategory.ts" />
var Initial = /** @class */ (function () {
    function Initial() {
        this.name = "Please select a product";
        this.price = 0;
    }
    return Initial;
}());
var Maserati = /** @class */ (function () {
    function Maserati() {
        this.name = "Maserati";
        this.price = 11.760;
        this.category = new Cars();
    }
    return Maserati;
}());
var JetOne = /** @class */ (function () {
    function JetOne() {
        this.name = "JetOne Jet";
        this.price = 42;
        this.category = new Jets();
    }
    return JetOne;
}());
var VillaFlorida = /** @class */ (function () {
    function VillaFlorida() {
        this.name = "Villa in Florida - 8 bed";
        this.price = 58.8;
        this.category = new Villas();
    }
    return VillaFlorida;
}());
var IphoneX = /** @class */ (function () {
    function IphoneX() {
        this.name = "iPhone X";
        this.price = 0.1185;
        this.category = new Phones();
    }
    return IphoneX;
}());
var Chelsea = /** @class */ (function () {
    function Chelsea() {
        this.name = "Chelsea Season Ticket 18/19";
        this.price = 0.1176;
        this.category = new Football();
    }
    return Chelsea;
}());
var Usd = /** @class */ (function () {
    function Usd() {
        this.name = "USD";
        this.price = 0.00010;
        this.category = new Money();
    }
    return Usd;
}());
var Alienware = /** @class */ (function () {
    function Alienware() {
        this.name = "Alienware";
        this.price = 0.2352;
        this.category = new Computers();
    }
    return Alienware;
}());
var Ducati = /** @class */ (function () {
    function Ducati() {
        this.name = "Ducati Monster";
        this.price = 1.5;
        this.category = new Motorcycles();
    }
    return Ducati;
}());
var CocaCola = /** @class */ (function () {
    function CocaCola() {
        this.name = "Coca-Cola can";
        this.price = 0.00024;
        this.category = new Sodas();
    }
    return CocaCola;
}());
/// <reference path="./product.ts" />
var productFactory = /** @class */ (function () {
    function productFactory() {
    }
    productFactory.GetProduct = function () {
        var random = Math.floor(Math.random() * 9);
        switch (random) {
            case 0: return new CocaCola();
            case 1: return new Maserati();
            case 2: return new Ducati();
            case 3: return new VillaFlorida();
            case 4: return new IphoneX();
            case 5: return new Chelsea();
            case 6: return new JetOne();
            case 7: return new Usd();
            case 8: return new Alienware();
        }
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
        this.balanceCheck = function () {
            var retrievedObject = localStorage.getItem('wallets');
            if (retrievedObject == null) {
                var data = { "wallet": { "coins": 0 } };
                localStorage.setItem('wallets', JSON.stringify(data));
                return 0;
            }
            var parsedObject = JSON.parse(retrievedObject);
            return parsedObject.wallet.coins;
        };
        this.paid = ko.observable(this.balanceCheck());
        this.selectedCell = ko.observable(new Cell(new Initial()));
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new DogeCoin(), new BitCoin(), new Ether(), new LiteCoin()];
        this.canPay = ko.pureComputed(function () { return _this.paid() - _this.selectedCell().product.price >= 0; });
        this.select = function (cell) {
            cell.sold(false);
            _this.selectedCell(cell);
        };
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.value);
            var data = { "wallet": { "coins": (_this.balanceCheck() + coin.value) } };
            localStorage.setItem('wallets', JSON.stringify(data));
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
            var data = { "wallet": { "coins": (_this.balanceCheck() - _this.selectedCell().product.price) } };
            localStorage.setItem('wallets', JSON.stringify(data));
        };
        this.donate = function () {
            _this.paid(0);
            var data = { "wallet": { "coins": 0 } };
            localStorage.setItem('wallets', JSON.stringify(data));
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