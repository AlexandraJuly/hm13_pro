const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function removeElement(array,item) {
    let index = array.indexOf(item);
        if (array !== -1) 
            array.splice(index, 1);
        console.log(array);
}

console.log(removeElement(arr,5));