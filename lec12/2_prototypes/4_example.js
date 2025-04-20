function vehicle(comapnay,year){
    this.comapnay=comapnay;
    this.year=year
    this.details=function(){
        console.log(this.comapnay)
        console.log(this.year)
    }
}

function car(name,price,comapany,year){
    vehicle.call(this,comapany,year)
    this.price=price
    this.name=name
}


function bike(name,price,company,year){
    vehicle.call(this,company,year)
    this.name=name
    this.price=price;
}

let bike1= new bike('classic',200000,'royal enfield',2008)
bike1.details()
