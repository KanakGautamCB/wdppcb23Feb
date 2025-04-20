class vehicle{
    constructor(company,year){
        //console.log("This is invoked")
        this.company=company;
        this.year=year;
    }

    details(){
        console.log(`This vehicle was made in ${this.year} by ${this.company}`)
    }
}

class car extends vehicle{
    start(){
        console.log('This car is running')
    }
}

// let v1 = new vehicle('BYD', 2024)

let c1 = new car('Tata',2016);

c1.details()

