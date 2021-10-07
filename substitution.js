const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let text = "ENJOYTHEDAY";
let s = 4;

function encrypt(text, s) {
    let result = ""
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.toUpperCase(text[i])) {
            let ch = String.fromCharCode((char.charCodeAt(0) + s - 65) % 26 + 65);
            result += ch;
        } else {
            let ch = String.fromCharCode((char.charCodeAt(0) + s - 97) % 26 + 97);
            result += ch;
        }
    }
    return result;
}

console.log("Text  : " + text);
console.log("Key : " + s);
console.log("Cipher: " + encrypt(text, s));


function frequencyAnalysis(cipher) {
    cipher = cipher.toUpperCase();
    let frequency = [];

    for (const letter of letters) {
        frequency[letter] = 0;
    }
    for (const text of cipher) {
        if (letters.includes(text)) {
            frequency[text] += 1
        }
    }
    return frequency;
}

console.log(frequencyAnalysis(text));