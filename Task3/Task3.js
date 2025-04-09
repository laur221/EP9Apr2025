let array = [1, 2, 3, 4]
reverse(array);
console.log(array);
array = ['a', 'b', 'c']
reverse(array);
console.log(array);

function reverse(array) {
    array.reverse();
    return array;
}