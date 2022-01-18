const button=document.querySelector("button")
const bg=document.querySelector("body")
const color=['red','green','yellow','pink']

bg.style.backgroundColor= 'white'

button.addEventListener('click', changeB)

function changeB () {
    const colorIndex=parseInt(Math.random()*color.length)
    bg.style.backgroundColor= color[colorIndex]
}


