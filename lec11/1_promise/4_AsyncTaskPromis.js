function download(){
    console.log("Download started")
    return new Promise((resolve,reject)=>{
        let downloadCompleted = true;
        setTimeout(()=>{
            if(downloadCompleted){
                resolve("Download completed")
            }else{
                reject("Download not Completed")
            }
        },5000)
    })
    
}

function compress(msg){
    console.log(msg)
    console.log("compress started")
    return new Promise((resolve,reject)=>{
        let compressCompleted=true;
        setTimeout(()=>{
            if(compressCompleted){
                resolve("compress is completed")
            }else{
                reject("compress is not completed")
            }
        },3000)
    })
    
}

function upload(msg){
    console.log(msg)
    console.log("Upload started")
    return new Promise((resolve,reject)=>{
        let uploadCompleted = true;
        setTimeout(()=>{
            if(uploadCompleted){
                resolve("upload is completed")
            }else{
                reject("upload is not completed")
            }
        },5000)
    })
    
}

function allDone(msg){
    console.log(msg)
    console.log("Process Completed")
}

// download()
//     .then((msg)=>{
//         console.log(msg)
//     })
//     .catch((msg)=>{
//         console.log(msg)
//     })


// download()
//     .then((msg)=>{
//         console.log(msg)
//     })
//     .catch((msg)=>{
//         console.log(msg)
//     })

// download()
//     .then((msg)=>{
//         console.log(msg)
//         compress()
//         .then((msg)=>{
//             console.log(msg)
//             upload()
//             .then((msg)=>{
//                 console.log(msg)
//                 allDone()
//             })
//             .catch((msg)=>{
//                 console.log(err)
//             })
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

download()
    .then(compress)
    .then(upload)
    .then(allDone)
    .catch((msg)=>{
        console.log(msg)
    })