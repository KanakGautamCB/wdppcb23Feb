function vehicle(comapnay){
    this.comapnay=comapnay;
    this.details=function(){
        console.log(this.comapnay)
    }
}

function car(name,price,comapany){
    this.price=price
    this.name=name
}


function bike(name,price,company){
    this.name=name
    this.price=price;
}

let bike1= new bike('classic',200000,'royal enfield')
