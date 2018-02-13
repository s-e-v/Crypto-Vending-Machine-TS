abstract class ProductCategory {
    protected imgPath = "assets/";
    name: string;
    abstract getImageUrl(): string;
}

class Cars extends ProductCategory {
    name = "Luxury Cars";
    getImageUrl() {
        return this.imgPath + "maserati.png";
    }
}

class Jets extends ProductCategory {
    name = "Private Jets";
    getImageUrl() {
        return this.imgPath + "privatejet.png";
    }
}

class Football extends ProductCategory {
    name = "Football Tickets";
    getImageUrl() {
        return this.imgPath + "chelsea.jpg";
    }
}

class Sodas extends ProductCategory {
    name = "Not so luxury soda drinks";
    getImageUrl() {
        return this.imgPath + "cocacola.png";
    }
}

class Motorcycles extends ProductCategory {
    name = "Motorcycles";
    getImageUrl() {
        return this.imgPath + "ducati.png";
    }
}

class Villas extends ProductCategory {
    name = "Villas";
    getImageUrl() {
        return this.imgPath + "villa.jpg";
    }
}

class Computers extends ProductCategory {
    name = "Computers";
    getImageUrl() {
        return this.imgPath + "alienware.png";
    }
}

class Phones extends ProductCategory {
    name = "Phones";
    getImageUrl() {
        return this.imgPath + "iphonex.png";
    }
}

class Money extends ProductCategory {
    name = "Money";
    getImageUrl() {
        return this.imgPath + "usd.png";
    }
}