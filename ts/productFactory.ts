/// <reference path="./product.ts" />

class productFactory {
    static GetProduct(): Product {

        let random = Math.floor(Math.random() * 9);
        switch(random) {
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

    }
}