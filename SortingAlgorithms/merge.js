merge.addEventListener('click', async () => {
    disableButtons(true)
    await mergeSort()
    disableButtons(false)
    
})


const mergeSort = async (left = 0, right = barArray.length-1) => {
    if (left < right) {

        // divide
        let mid = left + Math.floor((right - left) / 2)

        await mergeSort(left, mid)
        await mergeSort(mid+1, right)

        // merge
        let left2 = mid + 1 
        let templ = left
        let tempr = right
        if(parseInt(barArray[mid].style.height) <= parseInt(barArray[left2].style.height)){
            return
        }

        while(left <= mid && left2 <= right){

            barArray[left].style.backgroundColor = 'red'
            barArray[left2].style.backgroundColor = 'red'
            
            await new Promise(r => setTimeout(r, delay+10))
            if(parseInt(barArray[left].style.height) <= parseInt(barArray[left2].style.height)){
                left += 1
            }
            else{
                let value = barArray[left2]
                let index = left2
                
                while (index != left){
                    swap(barArray[index], barArray[index - 1])
                    index -= 1
                }

                barArray[left] = value
               
                left += 1
                mid += 1
                left2 += 1
            }

        }
        for(let i = templ; i<=tempr; i++){
            barArray[i].style.backgroundColor = 'black'
        }
    }
}