let celsius = Number(prompt("Scrieti temperatura in Celsius:"));
console.log(convert(celsius))
function convert(celsius) {
    celsius = (celsius * 9 / 5) + 32;
    return celsius;
}