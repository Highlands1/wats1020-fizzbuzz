// Place your FizzBuzz code here. 
// Place your FizzBuzz code here. 
//* Write a script to execute the FizzBuzz rules in the file `fizzbuzz.js` and determine the first 20 correct responses.
//* Log all output to the console using `console.log()` statements.
//* Iterate using a `for` loop through the sequence of numbers 1-20.
//* For each number, check these conditions and respond appropriately:

for (i=1; i<=20; i++) {
  // divisable by 3
  if (i % 3 === 0 ) {
    //if so divisable by 5
    if (i % 5 === 0) {
      //divisable by both print FizzBuzz
      console.log ("FizzBuzz");
      //if ot print Fizz
    } else {
      console.log ("Fizz");
    } 
  } else if (i % 5 === 0) {
      //divisable by 5 print Buzz
      console.log ("Buzz");
  } else {
    //  * If none of these conditions are met, print the number to the console.
    console.log(i);
  }
}