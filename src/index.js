const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let num_arr = [];
    let morse_arr = [];
    let morse_str = "";
    let decoded_letter = [];
    for (let arr = Array.from(expr); arr.length; ) {
        let spl = arr.splice(0,10);
        let new_item = spl.join('');
        num_arr.push(new_item);
    }
    for (let i = 0; i < num_arr.length; i++) {
        for (let arr_from_str = Array.from(num_arr[i]); arr_from_str.length; ) {
            let spl_two = arr_from_str.splice(0, 2);
            let new_item_two = spl_two.join('');

            if (new_item_two === "10") {
                new_item_two = ".";
                morse_str = morse_str.concat(new_item_two);
            }
            else if (new_item_two === "11") {
                new_item_two = "-";
                morse_str = morse_str.concat(new_item_two);
            }
            else if (new_item_two === "00") {

            }
        }
        morse_arr.push(morse_str);
        morse_str = "";
    }
    for (let i = 0; i < morse_arr.length; i++) {
        let code = morse_arr[i];
        if (code === "") {
            decoded_letter.push(" ");
        } else {
            for (let key in MORSE_TABLE) {
                if(key === code) {
                    decoded_letter.push(MORSE_TABLE[key]);
                }
            }
        }
    }
    let decoded_word = decoded_letter.join("");
    console.log(decoded_word);
    return decoded_word
}

module.exports = {
    decode
}