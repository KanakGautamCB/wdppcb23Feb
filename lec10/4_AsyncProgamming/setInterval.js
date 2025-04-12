let intervalId = setInterval(()=>{
    console.log("hello how are you")
},2000)

setTimeout(()=>{
    clearInterval(intervalId)
},8050)

