
function vowelsAndConsonants(s) {
    let constantArr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u") {
            console.log(s[i])
        } else{
            constantArr.push(s[i])
        }
    }
    for (const n of constantArr) {
        console.log(n)
    }
}
vowelsAndConsonants("JavaScriptLoops")