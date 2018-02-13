abstract class Coin {
    constructor(public value: number) {
        this.value = value;
    }
    abstract getImageUrl(): string;
}

class BitCoin extends Coin {
    constructor() {
        super(.25);
    }
    getImageUrl(): string {
        return "assets/bitcoin.png";
    }
}

class DogeCoin extends Coin {
    constructor() {
        super(.25);
    }
    getImageUrl(): string {
        return "assets/dogecoin.png";
    }
}

class Ether extends Coin {
    constructor() {
        super(.25);
    }
    getImageUrl(): string {
        return "assets/ether.png";
    }
}

class LiteCoin extends Coin {
    constructor() {
        super(.25);
    }
    getImageUrl(): string {
        return "assets/litecoin.png";
    }
}