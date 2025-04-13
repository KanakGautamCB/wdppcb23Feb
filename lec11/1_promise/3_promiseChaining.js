let kalTimeSeAaunga = new Promise((resolve,reject)=>{
    let kalTimeSeAaya= true;
    if(kalTimeSeAaya){
        resolve("Aaja andar baith jaa")
    }else{
        reject("bahar nikal nalayak")
    }
})

kalTimeSeAaunga
    .then((msg)=>{
        console.log(msg)
        return "Task complete kar"
    })
    .then((msg)=>{
        console.log(msg)
        return "sabash"
    })
    .then((msg)=>{
        console.log(msg)
    })
    .catch((err)=>{
        console.log(err)
    })