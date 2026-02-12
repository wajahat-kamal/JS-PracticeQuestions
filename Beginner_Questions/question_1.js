// Reverse Words in a Sentence

let text = "JavaScript is Fun"

function reverse_words(text) {
    let split_text = text.split(" ")
    const reverse_text = split_text.reverse()

    return reverse_text
}
console.log(reverse_words(text))