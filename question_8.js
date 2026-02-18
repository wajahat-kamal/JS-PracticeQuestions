

function regexVar(s) {

    let first = s[0]
    let last = s[s.length - 1]

    if ("aeoui".includes(first)) {
        if ("aeiou".includes(last)) {
            if (first === last) {
                return true
            } else false;
        } else false;
    } else false;

    // return re;
}
console.log(regexVar("bcd"))