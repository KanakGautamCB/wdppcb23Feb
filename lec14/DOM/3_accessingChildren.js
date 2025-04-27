let list = document.querySelector('.movie-list')

let children = list.children

for(let i=0;i<children.length;i++){
    console.log(children[i])
}

setTimeout(()=>{
    children[0].remove()
},4000)