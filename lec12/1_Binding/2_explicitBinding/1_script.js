function printPersonalDetails(city, country){
    console.log(this.name)
    console.log(this.age)
    console.log(this.college)
    console.log(city)
    console.log(country)
}

let p1={
    name:"pratham",
    age:19,
    college:"BVP"
}

let p2={
    name:"Aryan",
    age:18,
    college:"MAIT"
}

// In call we send context first and then parameters required by the function
//printPersonalDetails.call(p2,"Delhi","India");


// apply has same functionality as call except here parameters are enclosed in an array
//printPersonalDetails.apply(p2,["Delhi","India"]);

let f1 = printPersonalDetails.bind(p1,"Delhi","India");
let f2 = printPersonalDetails.bind(p2,"Delhi","India");

// f1();
// f1();

f2();
f2();
f2();

