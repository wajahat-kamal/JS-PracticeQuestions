// Reverse Words in a Sentence

let text = "JavaScript is Fun"

function reverse_words(text) {
    const split_text = text.split("")
    const reverse_text = split_text.reverse("")
    const join_text = reverse_text.join("")

    return join_text
}
console.log(reverse_words(text))