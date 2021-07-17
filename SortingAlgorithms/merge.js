merge.addEventListener('click', async () => {
    disableButtons(true)
    await mergeSort()
    disableButtons(false)
    
})


const mergeSort = async (left = 0, right = barArray.length-1) => {
    if (left < right && !haltRecursion) {

        // divide
        let mid = left + Math.floor((right - left) / 2)

        await mergeSort(left, mid)
        if (!haltRecursion) await mergeSort(mid+1, right)
        if (haltRecursion) return

        // merge
        let left2 = mid + 1 
        let templ = left
        let tempr = right
        if(parseInt(barArray[mid].style.height) <= parseInt(barArray[left2].style.height)) return
       
        while(left <= mid && left2 <= right){

            barArray[left].style.backgroundColor = selectedColor
            barArray[left2].style.backgroundColor = selectedColor
            
            await new Promise(r => setTimeout(r, delay+10))
            
            if(halt){
                haltRecursion = true
                return
            }

            if(parseInt(barArray[left].style.height) <= parseInt(barArray[left2].style.height)){
                left += 1
            }
            else{
                let value = barArray[left2]
                let index = left2
                
                while (index != left){
                    if(halt){
                        generateArray(size.value)
                        haltRecursion = true
                        return -1
                    }
                    swap(barArray[index], barArray[index - 1])
                    index -= 1
                }

                barArray[left] = value
               
                left += 1
                mid += 1
                left2 += 1
            }

        }

        // color whole section
        for(let i = templ; i<=tempr; i++){
            barArray[i].style.backgroundColor = sortedColor
        }
    }
}