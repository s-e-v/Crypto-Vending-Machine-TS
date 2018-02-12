/// <reference path="./coin.ts" />


class VendingMachine {
    private paid = 0;
    acceptCoin = (coin: Coin): void => {
        this.paid = this.paid + coin.Value;
        let element = document.getElementById("total");
        element.innerHTML = this.paid.toString();
    }
}