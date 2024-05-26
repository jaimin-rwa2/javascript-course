
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    
    if(length < 4){
        return `(password length must be at lease 4 char.)`
    }

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const syboles = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? syboles : "";

    if(allowedChars.length === 0){
        return `(At lease 1 set of character needs to be selected.)`
    }

    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]
    }

    return password;
}


const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSybols = true;


const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSybols)

console.log(`Generated password: ${password}`)