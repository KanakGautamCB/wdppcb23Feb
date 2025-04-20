class vehicle{
    constructor(company,year){
        //console.log('This is vehicle constructor')
        this.company=company;
        this.year=year;
    }

    details(){
        console.log(`This vehicle was made in ${this.year} by ${this.company}`)
    }
}

class car extends vehicle{
    constructor(name,price,company,year){
        super(company,year)
        //console.log('This is car constructor')
        this.name=name
        this.price=price
    }
    start(){
        console.log('This car is running')
    }

    details(){
        console.log(`This is ${this.name} car with a price of ${this.price}`)
        super.details()
    }
}

let c1= new car('Punch','8L','Tata','2024')
console.log("car object",c1)
console.log("c1 ka parent",c1.__proto__)
console.log("c1 ka prent ka parent",c1.__proto__.__proto__)