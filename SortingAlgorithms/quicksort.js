quick.addEventListener('click', async () => {
    disableButtons(true)
    finishEarly = false
    await quickSort()
    disableButtons(false)
})


const quickSort = async (start = 0, end = barArray.length-1) => {
    if(start < end && !finishEarly){

        let part = await partition(start, end)
        if (finishEarly) {
            return
        }
        await quickSort(start, part-1)
        if (finishEarly) {
            return
        }
        await quickSort(part+1, end)
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

        await new Promise(r => setTimeout(r, delay+20))

        if(halt){
                halt = false
                generateArray(size.value)
                finishEarly = true
                return -1
            }

        if(start < end){
            swap(barArray[start] , barArray[end])
        }
    }
    
    swap(barArray[end], barArray[p_idx])
    barArray[end].style.backgroundColor = 'black'
    return end
}