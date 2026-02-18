
function vowelsAndConsonants(s) {
    let constantArr = []
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase()
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            console.log(s[i])
        } else {
            constantArr.push(s[i])
        }
    }
    for (const n of constantArr) {
        console.log(n)
    }
}
vowelsAndConsonants("JavaScriptLoops")