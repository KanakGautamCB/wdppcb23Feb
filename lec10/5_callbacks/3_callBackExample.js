function download(cb){
    console.log("Download started")
    setTimeout(()=>{
        console.log("Download completed")
        cb()
    },5000)
}

function compress(cb){
    console.log("compress started")
    setTimeout(()=>{
        console.log("compress completed")
        cb()
    },4000)
}

function upload(cb){
    console.log("Upload started")
    setTimeout(()=>{
        console.log("Upload completed")
        cb()
    },5000)
}

function allDone(){
    console.log("Process Completed")
}

