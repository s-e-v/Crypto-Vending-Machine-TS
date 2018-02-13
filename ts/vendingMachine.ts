/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="./productFactory.ts" />


enum VendingMachineSize {
    small = 5,
    medium = 9,
    large = 12
}

class Cell {
    constructor (public product: Product) {
    }
    stock = ko.observable(3);
    sold = ko.observable(false);
}

class VendingMachine {
    balanceCheck = (): number => {
        let retrievedObject = localStorage.getItem('wallets');
        if (retrievedObject == null) {
            let data = {"wallet":{"coins":0}};
            localStorage.setItem('wallets', JSON.stringify(data));
            return 0;
        }
        let parsedObject = JSON.parse(retrievedObject);
        return parsedObject.wallet.coins;
    }

    paid = ko.observable(this.balanceCheck());
    selectedCell = ko.observable(new Cell(new Initial()));
    cells = ko.observableArray([]);
    acceptedCoins: Coin[] = [new DogeCoin(), new BitCoin(), new Ether(), new LiteCoin()];
    canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);

    set size(givenSize: VendingMachineSize) {
        this.cells([]);
        for (let index = 0; index < givenSize; index++) {
            let product = productFactory.GetProduct();
            this.cells.push(new Cell(product));

        }
    }

    select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }

    acceptCoin = (coin: Coin): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.value);
        let data = {"wallet":{"coins": (this.balanceCheck() + coin.value)}};
        localStorage.setItem('wallets', JSON.stringify(data));
    }

    pay = (): void => {
        if (this.selectedCell().stock() < 1) {
            alert("I'm sorry, no more stock..");
            return
        }
        let currentPaid = this.paid();
        this.paid(Math.round(((currentPaid - this.selectedCell().product.price)*100))/100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
        let data = {"wallet":{"coins": (this.balanceCheck() - this.selectedCell().product.price)}};
        localStorage.setItem('wallets', JSON.stringify(data));
    }

    donate = (): void => {
        this.paid(0);
        let data = {"wallet":{"coins": 0}};
        localStorage.setItem('wallets', JSON.stringify(data));
    }
}