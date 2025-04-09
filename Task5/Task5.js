const person = {
    name: 'Alice',
    age: 25
}
const country = {
    city: 'New York',
    country: 'USA',
}
const personArray = convertToArray(person)
const countryArray = convertToArray(country)
console.log(personArray)
console.log(countryArray)

function convertToArray(person, country) {
    return Object.entries(person)
    return Object.entries(country)
}