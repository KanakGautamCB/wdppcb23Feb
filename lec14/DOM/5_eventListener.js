
//pointer events

// document.querySelector('body').addEventListener('click',(e)=>{
//     e.target.style.backgroundColor='red'
//     setTimeout(()=>{
//         e.target.style.backgroundColor=''
//     },1000)
// })

// document.querySelector('body').addEventListener('dblclick',(e)=>{
//     e.target.style.backgroundColor='yellow'
//     setTimeout(()=>{
//         e.target.style.backgroundColor=''
//     },1000)
// })

// document.querySelector('#movie-heading').addEventListener('mouseover',(e)=>{
//     alert('you are on heading')
// })

// document.querySelector('.movie-list').addEventListener('mouseout',(e)=>{
//     alert('you are out of my list')
// })

//keyboard events

// document.querySelector('body').addEventListener('keydown',()=>{
//     alert('key is pressed')
// })

// document.querySelector('body').addEventListener('keyup',()=>{
//     alert('key is up')
// })


// window events

window.addEventListener('scroll',(ev)=>{
    let xPosition = window.scrollX
    let yPosition = window.scrollY

    console.log(xPosition,yPosition)
})