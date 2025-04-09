const numar = Number(prompt("Scrieti numarul de verificare:"));
let nrprim = true;

if (numar > 1) {
    for (let i = 2; i <= numar / 2; i++) {
        if (numar % i == 0) {
            nrprim = false;
            break;
        }
    }
}
else if (numar == 1) {
    console.log("1 nu este numar prim.");
}
else {
    console.log(numar + " nu este numar prim.");
}


if (nrprim) {
    console.log(numar + " este numar prim.");
}
else {
    console.log(numar + " nu este numar prim.");
}