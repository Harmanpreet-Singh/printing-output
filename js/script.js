/********************* Task 1   ***********************/

var a = 3;
var b = 5;
var c;

var OP = "var a = 3\nvar b = 5\nvar c"
    + "\n-----------"
    + "\na + b = " + (a + b)
    + "\na - b = " + (a - b)
    + "\na * b = " + (a * b)
    + "\na / b = " + (a / b)

    + "\na % b = " + (a % b)
    + "\n(a += b) = " + (a += b)
    + "\n(a -= b) = " + (a -= b)
    + "\n(a *= b) = " + (a *= b)
    + "\n(a /= b) = " + (a /= b)
    + "\n(a %= b) = " + (a %= b)
    + "\n(a == b) = " + (a == b)
    + "\n(a != b) = " + (a != b)
    + "\n(a > b) = " + (a > b)
    + "\n(a < b) = " + (a < b)
    + "\n(!a && !c)  = " + (!a && !c)
    + "\n(!a || !c)  = " + (!a || !c);

alert(OP)


/********************* Task 2   ***********************/


first_name = 'Harmanpreet'
last_name = 'Singh'
email = 'sing0678@algonquinlive.com'
output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email + ".";

console.log(output);


/********************* Task 3   ***********************/


var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100)
];
console.log(numbers)


var sum = numbers[0] + numbers[numbers.length - 1];

var msg = numbers[0] + " + " + numbers[numbers.length - 1] + " = " + sum;

if ((sum % 2) == 0) {
    alert(msg + "\nThis is an Even number.");
}
else
    alert(msg + "\nThis is an Odd number.");
