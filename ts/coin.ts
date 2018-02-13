abstract class Coin {
    constructor(public value: number) {
        this.value = value;
    }
    abstract getImageUrl(): string;
}

class BitCoin extends Coin {
    constructor() {
        super(1);
    }
    getImageUrl(): string {
        return "assets/bitcoin.gif";
    }
}

class DogeCoin extends Coin {
    constructor() {
        super(.00000058);
    }
    getImageUrl(): string {
        return "assets/dogecoin.gif";
    }
}

class Ether extends Coin {
    constructor() {
        super(0.09903249);
    }
    getImageUrl(): string {
        return "assets/ether.gif";
    }
}

class LiteCoin extends Coin {
    constructor() {
        super(0.0182);
    }
    getImageUrl(): string {
        return "assets/litecoin.gif";
    }
}