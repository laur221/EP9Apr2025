const obiect1 = {
    a: 1,
    b: 2
}
const obiect2 = {
    b: 3,
    c: 4
}
console.log(unire(obiect1, obiect2));
function unire(obiect1, obiect2) {
    return Object.assign({}, obiect1, obiect2);
}