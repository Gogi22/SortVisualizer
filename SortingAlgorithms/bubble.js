bubble.addEventListener('click', async () => {
    disableButtons(true)
    await bubbleSort()
    console.log('bubble')
    disableButtons(false)
    
})

const bubbleSort = async () => {
    for(let i=0; i<barArray.length; i++){
        for(let j=0; j<barArray.length-i-1; j++){

            // stop sorting if pressed reset
            if(halt) return

            // select
            barArray[j].style.backgroundColor= selectedColor
            barArray[j+1].style.backgroundColor= selectedColor

            if(parseInt(barArray[j].style.height) > parseInt(barArray[j+1].style.height)){
                await new Promise(r => setTimeout(r, delay))
                swap(barArray[j], barArray[j+1])
            }

            // unselect
            barArray[j].style.backgroundColor= defaultColor
            barArray[j+1].style.backgroundColor= defaultColor
        }

        // sorted
        barArray[barArray.length-i-1].style.backgroundColor= sortedColor
    }
}