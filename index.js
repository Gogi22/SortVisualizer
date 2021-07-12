const reset = document.querySelector(".reset")
const newarray = document.querySelector(".newarray")
const bars = document.querySelector(".barsContainer")

const size = document.querySelector(".size")
const speed = document.querySelector(".speed")

const merge = document.querySelector(".merge")
const bubble = document.querySelector(".bubble")
const quick = document.querySelector(".quick")
const insertion = document.querySelector(".insertion")
const selection = document.querySelector(".selection")

let arraySize = size.value
let array = []

size.addEventListener('input', () =>{
    generateArray(parseInt(size.value))
})

const generateArray = (size=50) => {
    bars.innerHTML = ''
    
    array = []
    
    for(let i=0; i<size; i++){
        array.push(Math.ceil(Math.random() * 300)+6)
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
        bars.appendChild(bar)
    }
    
}

generateArray(arraySize)



