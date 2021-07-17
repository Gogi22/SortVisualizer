insertion.addEventListener('click', async () => {
    disableButtons(true)
    await insertionSort()
    disableButtons(false)
    
})


const insertionSort = async () => {
    for(let i=1; i<barArray.length; i++){

        let height = parseInt(barArray[i].style.height)
        
        let j = i-1
        while (j>=0 && height < parseInt(barArray[j].style.height)){
            
            barArray[j+1].style.backgroundColor = selectedColor
            barArray[j].style.backgroundColor = selectedColor
            
            await new Promise(r => setTimeout(r, delay+20))
            
            if(halt) return
            swap(barArray[j+1], barArray[j])

            barArray[j+1].style.backgroundColor = defaultColor
            barArray[j].style.backgroundColor = defaultColor
            
            j -= 1
        }
        for(let j = i; j >= 0; j--){
            barArray[j].style.backgroundColor = sortedColor
        }
    }
}