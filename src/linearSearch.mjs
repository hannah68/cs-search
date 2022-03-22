export const linearSearch = (list, item) => {
    const t0 = performance.now();

    for(let i = 0; i < list.length; i++){
        if(list[i] === item){
            const t1 = performance.now();
            console.log(`Linear search took ${t1 - t0} milliseconds.`);
            return i
        }
    }
    return -1;
} 