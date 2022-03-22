// Binary Search is a divide-and-conquer algorithm, that divides the array roughly in half every time it checks whether an element of the array is the one we're looking for.In other words, we divide the problem into simpler problems until it becomes simple enough to solve them directly.

export const binarySearch = (list, item) => {
    const t0 = performance.now();
    let left = 0;
    let right = list.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right)/2);

        if(list[mid] === item) {
            const t1 = performance.now();
            console.log(`Binary search took ${t1 - t0} milliseconds.`);
            return item;
        }
        else if(list[mid] < item){
            left = mid + 1;
            
        }else{
            right = mid - 1;
        }
    }
    if(left = item){
        return left
    }
    return -1;
} 