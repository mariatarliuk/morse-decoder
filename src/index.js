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
   let arr=expr.split('');
   let newArr = []
   while(arr.length!==0) {
      newArr.push(arr.splice(0,10))
   }
   for(let i=0; i<newArr.length;i++) {
      newArr[i]= newArr[i].join('')
   }
   for(let i=0;i<newArr.length;i++) {
      newArr[i] = newArr[i].replace(/11/g, '-').replace(/10/g, '.').replace(/\*+/g, ' ').replace(/0/g, '')
   }
   let result = []

   for(let i=0;i<newArr.length;i++) {
      if(newArr[i] in MORSE_TABLE) result.push(MORSE_TABLE[newArr[i]])
      if(newArr[i]===' ') result.push(' ')
      }
   return result.join('')
}

module.exports = {
    decode
}
