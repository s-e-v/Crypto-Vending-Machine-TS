/// <reference path="./coin.ts" />


class VendingMachine {
    private paid = ko.observable(0);
    acceptedCoins: Coin[] = [new Coin()];
    acceptCoin = (coin: Coin): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);
    }
}