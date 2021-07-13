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
            
            if(halt){
                halt = false
                generateArray(size.value)
                return
            }
            barArray[j+1].style.backgroundColor = 'red'
            barArray[j].style.backgroundColor = 'red'

            await new Promise(r => setTimeout(r, delay+20))
            
            swap(barArray[j+1], barArray[j])

            barArray[j+1].style.backgroundColor = 'khaki'
            barArray[j].style.backgroundColor = 'khaki'
            
            j -= 1
        }
        for(let j = i; j >= 0; j--){
            barArray[j].style.backgroundColor = 'black'
        }
    }
}