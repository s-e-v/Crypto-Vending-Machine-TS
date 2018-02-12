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
        return "img/coin.png";
    };
    return Coin;
}());
var coin = new Coin();
var value = coin.Value;
/// <reference path="./coin.ts" />
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = 0;
        this.acceptCoin = function (coin) {
            _this.paid = _this.paid + coin.Value;
            var element = document.getElementById("total");
            element.innerHTML = _this.paid.toString();
        };
    }
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
//# sourceMappingURL=app.js.map