// Reverse Words in a Sentence

let text = "JavaScript is Fun"

function reverse_words(text) {
    const reverse_text = text.split("").reverse().join("")

    return reverse_text
}
console.log(reverse_words(text))