let array = [1, 2, 3, 4]
console.log(reverse(array));
array = ['a', 'b', 'c']
console.log(reverse(array));

function reverse(array) {
    array.reverse();
    return array;
}