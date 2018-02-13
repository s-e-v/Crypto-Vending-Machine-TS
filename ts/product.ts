/// <reference path="./productCategory.ts" />

interface Product {
    name: string;
    price: number;
    category?: ProductCategory;
}

class Initial implements Product {
    name = "Please select a product";
    price = 0;
}

class Maserati implements Product {
    name = "Maserati";
    price = 11.760;
    category = new Cars();
}

class JetOne implements Product {
    name = "JetOne Jet";
    price = 42;
    category = new Jets();
}

class VillaFlorida implements Product {
    name = "Villa in Florida - 8 bed";
    price = 58.8;
    category = new Villas();
}

class IphoneX implements Product {
    name = "iPhone X";
    price = 0.1185;
    category = new Phones();
}

class Chelsea implements Product {
    name = "Chelsea Season Ticket 18/19";
    price = 0.1176;
    category = new Football();
}

class Usd implements Product {
    name = "USD";
    price = 0.00010;
    category = new Money();
}

class Alienware implements Product {
    name = "Alienware";
    price = 0.2352;
    category = new Computers();
}

class Ducati implements Product {
    name = "Ducati Monster";
    price = 1.5;
    category = new Motorcycles();
}

class CocaCola implements Product {
    name = "Coca-Cola can";
    price = 0.00024;
    category = new Sodas();
}