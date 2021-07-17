const newarrayRandom = document.querySelector('.newarrayRandom')
const newarrayReversed = document.querySelector('.newarrayReversed')
const bars = document.querySelector('.barsContainer')

const size = document.querySelector('.size')
const speed = document.querySelector('.speed')

const merge = document.querySelector('.merge')
const bubble = document.querySelector('.bubble')
const quick = document.querySelector('.quick')
const insertion = document.querySelector('.insertion')
const selection = document.querySelector('.selection')

const barArray = bars.childNodes;


const defaultColor = 'rgb(173,216,230)'
const selectedColor = 'rgb(204, 67, 172)'
const sortedColor =  'rgb(46, 40, 43)'


let arraySize = size.value
let array = []
let delay = 200

let haltRecursion = false //for quickSort

speed.addEventListener('input', ()=>{
    // reverse the value
    delay = 501 - parseInt(speed.value)
})

size.addEventListener('input', () =>{
    generateArray(false, parseInt(size.value))
})

halt=false

newarrayRandom.addEventListener('click', () =>{
    halt = true
    generateArray(false, parseInt(size.value))
})

newarrayReversed.addEventListener('click', () =>{
    halt = true
    generateArray(true, parseInt(size.value))
})


const generateArray = (reverse, size) => {
    bars.innerHTML = ''
    
    array = []
    
    for(let i=0; i<size; i++){
        array.push(Math.ceil(Math.random() * 300)+10)
    }
    
    if(reverse){
        array.sort(function(a, b){return b - a})
    }
    
    for(let i=0; i<size; i++){
        const bar = document.createElement('div')
        bar.style.height = `${array[i]*2}px`
        if(size >= 64) {
            bar.classList.add('largeBar')
        }
        else if(size >= 32) {
            bar.classList.add('mediumBar')
        }
        else if(size >= 16){
            bar.classList.add('smallBar')
        }
        else {
            bar.classList.add('microBar')
            p = document.createElement('p')
            p.textContent = array[i]
            bar.appendChild(p)
        }
        bar.style.backgroundColor = defaultColor
        bars.appendChild(bar)
    }
    
}

const swap = (bar1, bar2) => {
    [bar1.style.height, bar2.style.height] = [bar2.style.height, bar1.style.height];
    if(bar1.hasChildNodes()){
        let temp = bar1.firstChild.textContent
        bar1.firstChild.textContent = bar2.firstChild.textContent
        bar2.firstChild.textContent = temp
    }
}

// toggles buttons
const disableButtons = show => {
    s = show ?  "none" : "auto"
    merge.style.pointerEvents = s
    bubble.style.pointerEvents = s
    quick.style.pointerEvents = s
    insertion.style.pointerEvents = s
    selection.style.pointerEvents = s
    size.style.pointerEvents = s
    halt = false    
    haltRecursion = false
}

generateArray(false, arraySize)



