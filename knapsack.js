const sik = [2, 3, 7, 14, 30, 57, 120, 251];
const m = 41;
const n = 491;
let temp = 0;
const gk = [];

// Encryption part
for (const number of sik) {
    temp = (number * m) % n;
    gk.push(temp);
}

const str = '10010110';
const textarray = Array.from(str);
let result = 0;
for (let i = 0; i < str.length - 1; i++) {
    if (textarray[i] == '1') {
        result = result + gk[i];
    }
}
console.log(result);

// Decryption part
function modInverse(a, m) {
    for (let x = 1; x < m; x++)
        if (((a % m) * (x % m)) % m == 1)
            return x;
}

const x = modInverse(m, n);
const S = (result * x) % n;

console.log(S);