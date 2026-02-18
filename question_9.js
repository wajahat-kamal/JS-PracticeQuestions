
function reverseString(s) {
    try {
        return s.split("").reverse().join('')
    } catch (error) {
        console.log(error)
    }
}

console.log(reverseString("Wajahat"));
console.log(reverseString("12345"));
