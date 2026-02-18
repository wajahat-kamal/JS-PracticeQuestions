
function reverseString(s) {
    let reverseArr = []
    for (let i = 0; i < s.length; i++) {
        reverseArr.push(s[i])
    }
    const result = reverseArr.reverse().join('')
    return result
}

console.log(reverseString("Wajahat"));
