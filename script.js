let btn = document.getElementById('cipher');
btn.onclick = function () {
    out.innerText = rot13(txt.value);
}

let txt = document.getElementById('text');

let out = document.getElementById('output');

function rot13(message) {
    //your code here
    let arr = message.split(' ');
    let newArr = [];
    for (let item of arr) {
        newArr.push(cipher(item));
    }
    let newMessage = newArr.join(' ');
    //function that ciphers a single word
    function cipher(word) {
        let char = '';
        let ascii = 0;
        let newWord = '';
        for (let index in word) {
            ascii = word.charCodeAt(index);

            if (ascii >= 97 && ascii <= 122) {
                //Small letter
                if (ascii >= 97 && ascii <= 109) {
                    ascii += 13;
                    char = String.fromCharCode(ascii);
                } else {
                    ascii -= 13;
                    char = String.fromCharCode(ascii);
                }
                newWord += char;

            } else if (ascii >= 65 && ascii <= 90) {
                //Capital letter
                if (ascii >= 65 && ascii <= 77) {
                    ascii += 13;
                    char = String.fromCharCode(ascii);
                } else {
                    ascii -= 13;
                    char = String.fromCharCode(ascii);
                }
                newWord += char;

            } else {
                //Not a letter
                char = String.fromCharCode(ascii);
                newWord += char;
            }
        }
        return newWord;
    }

    return newMessage;
}
