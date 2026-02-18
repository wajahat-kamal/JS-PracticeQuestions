
function vowelsAndConsonants(s) {
    let strArray = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u") {
            strArray.pust(s[i])
        }
    }
    const result = strArray.join('')
    console.log(result);
}
vowelsAndConsonants("JavaScriptLoops")