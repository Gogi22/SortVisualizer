quick.addEventListener('click', async () => {
    disableButtons(true)
    await quickSort()
    disableButtons(false)
})


const quickSort = async (start = 0, end = barArray.length-1) => {
    if(start < end){

        let part = await partition(start, end)

        quickSort(start, part-1)
        quickSort(part+1, end)
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

        if(start < end){
            swap(barArray[start] , barArray[end])
        }
    }
    
    swap(barArray[end], barArray[p_idx])
    return end
}