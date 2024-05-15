/* --- Data Types0 --- */


// Primitive :- it store values it self only
console.log("Number     :", typeof(5.5))
console.log("Boolean    :",typeof(true))

console.log("String     :",typeof("string"))
console.log("undefine   :",typeof(undefined))
console.log("null       :",typeof(null))
console.log("Symbol     :",typeof(Symbol("Symbol")))

// Non-Primitive :- it store all type of data inside
console.log("object     :",typeof({}))
console.log("Array      :",typeof([]))
console.log("function   :",typeof(function(){}))  // function is also object


// OUTPUT:
// 	number     : number
// 	boolean    : boolean
// 	string     : string
// 	undefine   : undefined
// 	null       : object        // null dtpe is object but null is show as object
// 	Symbol     : symbol
// 	object     : object
// 	Array      : object        // Array is also object
// 	function   : function      // function is also object



/* --- type conversion --- */
Number("56")            // true false return 1 and zero
parseInt(1)             // true false return Nan 
parseFloat("56.2235")   // x.toFixed(2) :- need only last two Floating values,  
                        // x.toPrecision(2) : if 2nd FP is 5 or gt 5 then it will merge to 1

String(52)   //  variable.toString() : works but not as expected
Boolean(54)  // 0, 0.0, "", null, undefine give false other return true even empty [] return true.


/* ---  compare --- */
console.log('52 == 52 :', 52 == 52)
console.log('52 === 52 :', 52 === 52)
console.log('52 == "52" :', 52 == "52")
console.log('52 === "52" :', 52 === "52")
console.log('52 == ["52"] :', 52 == ["52"])
console.log('52 === ["52"] :', 52 === ["52"])


/* --- eval() : to evalualt string as sum--- */
eval("3+(4/2)")