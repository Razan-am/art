/*
1- Write a JavaScript program to know if the input is + or - , " 0 considered as + "?
*/
/*
2- Write a JavaScript program takes 3 input from the user and print the max on the console?
*/
/*
3- Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, 
it will check if the current number is odd or even, and display a message on the console?
Sample Output:
"0 is even"
"1 is odd"
"2 is even"
.
.
.
.
.
"19 is odd"
"20 is even"
*/
/*
4- Write a JavaScript program to calculate the sum of even numbers from 1-100 ?
*/
/*
5- Write a JavaScript program to take 2 numbers from the user and print 
ex:-
num1 = 3
num2 = 3
the sum is 6
the multiplication is 9
*/

//--------------------------------------------------


// //1:

// var input = prompt('please enter a number');


// if (input >= 0) {
//     let result = confirm('it is apositive number (+)');
// }
// else{
//     let result = confirm('it is anigative number (-)');
// }

//----------------------------------------------------------


//2:

// alert ('hello please enter 3 numbers from ');

// // var a = prompt('please enter the first number');

// var correct = false;

// do {
//   var a = prompt("please enter the first number");
//   if (!isNaN(a)) {
//     document.write("your number is " + a);
//     correct = true;
//     break;
//   }
// } while (!correct);

// // var b = prompt('please enter the secound number');

// var correct = false;

// do {
//   var b = prompt("please enter the secound number");
//   if (!isNaN(b)) {
//     document.write("your number is " + b);
//     correct = true;
//     break;
//   }
// } while (!correct);

// // var c = prompt('please enter the third number');

// var correct = false;

// do {
//   var c = prompt("please enter the third number");
//   if (!isNaN(c)) {
//     document.write("your number is " + c);
//     correct = true;
//     break;
//   }
// } while (!correct);

// if (a > b && a > c){
//   console.log (a);
// }
// else if (b > a && b > c) {
//   console.log (b);
// }else{
//   console.log (c);
// }

//--------------------------------------------------------

// //3

// var user = Number(prompt('please enter a number'));


// if (user <=20 && user >= 0){

// for ( var i=user; i <= 20; i++);{

//   if ( user %2 == 0) {
//   console.log(user,' is even.');
//  }else {
//     console.log(user,'is odd.');
//      }
//  }

// }else {
//   user = Number(prompt('please enter a number'));
// }

//--------------------------------------------------------

// //4 

// var user = Number(prompt('please enter a number between (1-100)'));



// if (user <=100 && user >= 1){


// var sum = 0;
// for (var i = user; i <= 100; i++) {
//     sum = sum +i;
//     console.log('The sum of the numbers:', sum);

// }else {

//   while ( user >100 || user <1 ){
//   user = Number(prompt('please enter a number between (1-100)'));
//   }

//   var sum = 0;
//  for (var i = user; i <= 100; i++) {
//     sum = sum +i;
//     console.log('The sum of the numbers:', sum);
// }
// } 

//-------------------------------------------------------

// //5

// var operator = prompt('Enter operator ( either +, -, * or / ): ');

// var num1 = prompt('Enter first number: ');
// var num2 = prompt('Enter second number: ');


// let result;

// if (operator == '+') {
//     result = num1 + num2;
// }
// else if (operator == '-') {
//     result = num1 - num2;
// }
// else if (operator == '*') {
//     result = num1 * num2;
// }
// else {
//     result = num1 / num2;
// }

// console.log(`${num1} ${operator} ${num2} = ${result}`);

