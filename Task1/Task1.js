let celsius = Number(prompt("Scrieti temperatura in Celsius:"));
convert(celsius)
function convert(celsius) {
    celsius = (celsius * 9 / 5) + 32;
    console.log(celsius)
}