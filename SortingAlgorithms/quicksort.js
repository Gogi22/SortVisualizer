quick.addEventListener('click', async () => {
    disableButtons(true)
    await quickSort()
    
    // if function wasn't halted color it
    if (!halt){
        for(let i = 0; i < barArray.length; i++){
            barArray[i].style.backgroundColor = 'black'
        }
    }
    disableButtons(false)
})


const quickSort = async (start = 0, end = barArray.length-1) => {
    if(start < end && !haltRecursion){

        let part = await partition(start, end)
        if (!haltRecursion) await quickSort(start, part-1)
        if (!haltRecursion) await quickSort(part+1, end)
       
    }

}

const partition = async (start, end) => {
    let p_idx = start
    let p = barArray[p_idx]
    while (start < end){
        while(start < barArray.length && parseInt(barArray[start].style.height) <= parseInt(p.style.height)){
            start += 1
        }

        while(parseInt(barArray[end].style.height) > parseInt(p.style.height)){
            end -= 1
        }

        if(halt){
            haltRecursion = true
            return -1
        }
        
        if(start < end){
            barArray[start].style.backgroundColor = 'red'
            barArray[end].style.backgroundColor = 'red'

            await new Promise(r => setTimeout(r, delay+20))
            if(halt){
                haltRecursion = true
                return -1
            }
            swap(barArray[start] , barArray[end])
            barArray[start].style.backgroundColor = 'khaki'
            barArray[end].style.backgroundColor = 'khaki'
        }
    }

    swap(barArray[end], barArray[p_idx])
    barArray[end].style.backgroundColor = 'black'
    return end
}
