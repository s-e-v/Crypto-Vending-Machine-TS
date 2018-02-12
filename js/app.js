var Coin = /** @class */ (function () {
    function Coin() {
        this.value = .25;
    }
    Object.defineProperty(Coin.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Coin.prototype.getImageUrl = function () {
        return "assets/coin.png";
    };
    return Coin;
}());
var coin = new Coin();
var value = coin.Value;
/// <reference path="./coin.ts" />
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.acceptedCoins = [new Coin()];
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.Value);
        };
    }
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map