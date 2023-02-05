const array = [1, 2, 3, 4, 5, 6, 7, 8];

function newArray() {
    let arr = array.filter((value, index) => index !== 5);
    return arr;
}

console.log(newArray());