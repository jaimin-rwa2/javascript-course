/* 
    String
*/


// string to Number
let str1 = "56";
let strNumb = Number(str1);   // 56

let str2 = "56.256";
let strInt = parseInt(str2);   // 56

let str3 = "56.256";
let strFloat = parseFloat(str3);   // 56.256

let str4 = "a56";
let output1 = Number(str1);   // NaN
let output2 = parseInt(str1);   // NaN
let output3 = parseFloat(str1);   // NaN


let str5 = "56a";
let output11 = Number(str1);   // NaN
let output22 = parseInt(str1);   // 56
let output33 = parseFloat(str1);   // 56




// String to Boolean
let str6 = "anyString"
let strBool1 = Boolean(str6); // true

let str7 = ""
let strBool2 = Boolean(str7); // false

