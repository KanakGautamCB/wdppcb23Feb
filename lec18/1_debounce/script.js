
function debounce(cb){
    let timer;
    return function(){
        clearTimeout(timer);

        timer = setTimeout(()=>{
            cb()
        },2000)
    }
}

const inputBox = document.querySelector('#input-box').addEventListener('keydown',debounce(fun))

function fun(){
    console.log(document.querySelector('#input-box').value)
}



