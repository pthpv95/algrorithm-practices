function findTwoSum(items, target){
    let sums = []

    for (let i = 0; i < items.length; i++) {
       for (let j = i + 1; j < items.length; j++) {
            if(items[i] + items[j] === target){
                sums = [i, j]
            }           
       }
    }
    return sums
}



module.exports = {findTwoSum}



