selection.addEventListener('click', async () => {
    disableButtons(true)
    await selectionSort()
    disableButtons(false)
    
})


const selectionSort = async () => {
    for(let i=0; i<barArray.length-1; i++){
        barArray[i].style.backgroundColor = 'violet'
        let min_idx = i+1
        for(let j = i+1; j<barArray.length; j++){

            // stop sorting if pressed reset
            if(halt){
                generateArray(size.value)
                return
            }
            
            barArray[j].style.backgroundColor = 'red'
            await new Promise(r => setTimeout(r, delay-20))
            
            if(parseInt(barArray[min_idx].style.height) > parseInt(barArray[j].style.height)){
                barArray[min_idx].style.backgroundColor = 'khaki'
                min_idx = j
                barArray[j].style.backgroundColor = 'red'
            }
            else{
                barArray[j].style.backgroundColor = 'khaki'
            }
        }

        barArray[min_idx].style.backgroundColor = 'khaki'
        if(parseInt(barArray[min_idx].style.height) < parseInt(barArray[i].style.height)){
            swap(barArray[min_idx], barArray[i])
        }
        barArray[i].style.backgroundColor = 'black'
        
    }
    barArray[barArray.length-1].style.backgroundColor = 'black'
}