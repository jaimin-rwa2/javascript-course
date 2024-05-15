// Syntax Error example (missing closing parenthesis)
try {
    console.log("Hello, world!";
  } catch (error) {
    console.error("Syntax Error:", error.message);
  }
  
  // Reference Error example (using an undeclared variable)
  try {
    console.log(nonExistentVariable);
  } catch (error) {
    console.error("Reference Error:", error.message);
  }
  
  // Type Error example (calling a method on a non-function value)
  try {
    const num = 10;
    num();
  } catch (error) {
    console.error("Type Error:", error.message);
  }
  
  // Range Error example (accessing an out-of-bounds array element)
  try {
    const arr = [1, 2, 3];
    console.log(arr[5]);
  } catch (error) {
    console.error("Range Error:", error.message );
  }
    
  // Unhandled Promise Rejection example
  const promise = new Promise((resolve, reject) => {
    reject(new Error("Promise rejected"));
  });
  
  promise.then(() => {
    console.log("Promise resolved");
  });
  
  // Handling custom errors
  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  try {
    throw new CustomError("This is a custom error");
  } catch (error) {
    console.error(error.name + ": " + error.message);
  }
  