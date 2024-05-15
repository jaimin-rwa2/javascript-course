var a = 10;
const obj = {
    name: 'Jaimin',
    function1() { //function 1
        console.log('a', this);
        var in_function1 = function () {   // function 2
            console.log('b', this)
        }
        // in_function1() 
        in_function1.bind(this)()  // use bind to bind function with this
    },
    function2() { //function 1
        console.log('a', this);
        var in_function2 =  () => {   // function 2
            console.log('b', this)
        }
        in_function2() 
    },
    function3: () => { //function 1
        console.log('a', this);
        var in_function3 =  function(){   // function 2
            console.log('b', this)
        }
        in_function3() 
    },
    function4: () => { //function 1
        console.log('a', this);
        var in_function4 =  () => {   // function 2
            console.log('b', this)
        }
        in_function4() 
    }
}
obj.function1()
obj.function2()
obj.function3()
obj.function4()



/*
    object has function1 and function 2
    function define by function is dynamicly type
        - inside object, `this` keyword will point to object
        - inside function, `this` keyword will point to globle
            - by using bind(this) we can bind function with this
    fucntion define by => is lexical type
        - inside object, 'this' keyword will point to {} empty obj ???
        - inside function, `this` keyword will point to object
*/