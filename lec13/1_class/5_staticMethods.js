class car{
    static year = 2025  
    constructor(name,company,price){
        this.name=name;
        this.company=company;
        this.price=price;
    }

    static comparePrice(carA, carB){
        return carA.price-carB.price;
    }
}

let c1=new car('curvv','tata',25);
let c2=new car('punch','tata',14);

console.log(car.comparePrice(c1,c2))
console.log(car.year)
