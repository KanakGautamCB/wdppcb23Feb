//public

// class coffeeMaker{
//     waterAmount=0

//     constructor(type){
//         this.type=type
//     }
// }

// let cm = new coffeeMaker('espresso')
// console.log(cm.waterAmount)


//protected

// class vehicle{
//     _year=2025

//     constructor(company){
//         this.company=company
//     }
// }

// class car extends vehicle{

//     constructor(name,company){
//         super(company)
//         this.name=name
//         console.log(`this car has a name ${this.name} made by ${this.company} in ${this._year}`)
//     }
// }

// let c1=new car('punch','tata')
// console.log(c1.year)



//private

class coffeeMaker{
    #waterAmount=0

    constructor(type){
        this.type=type
        //console.log(this.#waterAmount)
    }

    details(){
        console.log(this.#waterAmount)
    }
}

let cm = new coffeeMaker('latte')
cm.details()

