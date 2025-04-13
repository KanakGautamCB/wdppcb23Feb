let kalTimeSeAaunga = new Promise((resolve,reject)=>{
    let kalTimeSeAaya= false;
    if(kalTimeSeAaya){
        resolve("Aaja andar baith jaa")
    }else{
        reject("bahar nikal nalayak")
    }
})

kalTimeSeAaunga
    .then((msg)=>{
        console.log(msg)
    })
    .catch((err)=>{
        console.log(err)
    })