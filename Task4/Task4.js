const array = [1, 2, 2, 3, 2, 4];
const verify = prompt(array + "\nScrieti ce doriti de verificat:");
console.log(checkcount(array, verify));
function checkcount(array, verify) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == verify) {
            count++;
        }
    }
    return count;
}