let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// text.length

/* this are same */
// text.charAt(0)  
// text[1]
// text.at(-1)  

// text[0] = a  // dose not work, strings are read only

// text.charCodeAt(0)  // ASCII Code

/* slice type functions */
// text.slice(-7,-1)
// text.substring(-2, 4)  // -ve will replace with zero here
// text.substr(5, 3)   // from 5 take 3  : if we pass only one pram then it will take all after that param

//toUpperCase 
//toLowerCase

/* concat */
// text = "Hello" + " " + "World!";
// text = "Hello".concat(" ", "World!");   // we can do multiple concat also


/* trim */
//trimStart
//trimEnd
// let newText = text.trim().toLowerCase()   // us this to store in database


/* replace(a, b) and replaceAll(a, b) // replace a with b */ 
// replace with reguler exprations
// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools");

// str.split(",")