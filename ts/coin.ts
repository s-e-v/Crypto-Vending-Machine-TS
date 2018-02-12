class Coin {
    private value: number = .25;
    get Value() {
        return this.value;
    }
    set Value(newValue: number) {
        this.value = newValue;
    }
    getImageUrl(): string {
        return "assets/coin.png";
    }
}

const coin = new Coin();
const value = coin.Value;