// All the elements need to wrapped in jquery wrapper
// use '$' or 'jquery'

//const heading = document.querySelector('#heading')
const heading = $('#heading')



// Read Update on element
console.log(heading)

heading.text('Your Website')


// create element

const p = $('<p>I am in website</p>')
$('body').append(p)


// events

heading.click((event)=>{
    console.log(event)
})

heading.mouseenter((event)=>{
    console.log('I am over heading')
})
