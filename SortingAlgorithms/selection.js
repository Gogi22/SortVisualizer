selection.addEventListener('click', async () => {
    disableButtons(true)
    await selectionSort()
    disableButtons(false)
    
})


const selectionSort = async () => {
    for(let i=0; i<barArray.length-1; i++){
        let min_idx = i+1
        for(let j = i+1; j<barArray.length; j++){

            // stop sorting if pressed reset
            barArray[j].style.backgroundColor = selectedColor
            await new Promise(r => setTimeout(r, delay-20))
            
            if(halt)return
            
            if(parseInt(barArray[min_idx].style.height) > parseInt(barArray[j].style.height)){
                barArray[min_idx].style.backgroundColor = defaultColor
                min_idx = j
                barArray[j].style.backgroundColor = selectedColor
            }
            else{
                barArray[j].style.backgroundColor = defaultColor
            }
        }

        barArray[min_idx].style.backgroundColor = defaultColor
        if(parseInt(barArray[min_idx].style.height) < parseInt(barArray[i].style.height)){
            swap(barArray[min_idx], barArray[i])
        }
        barArray[i].style.backgroundColor = sortedColor
        
    }
    barArray[barArray.length-1].style.backgroundColor = sortedColor
}