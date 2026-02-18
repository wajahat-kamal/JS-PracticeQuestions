

function regexVar(s) {

    let first = s[0]
    let last = s[s.length - 1]

    const vowel = "aeiou"

    if (vowel.includes(first) && vowel.includes(last) && first === last) {
        return true;
    } else {
        return false;
    }

    // return re;
}
console.log(regexVar("bcda"))