
//1 - var,let,const declare,reassign and redeclare the answer
var a = 20;
var a = 40; // redeclare allowed
    a = 70;// reassign allowed
console.log("Output of A : " + a);

let b = 30;
//let b = 60; redeclare not allowed
    b = 40; // reassign allowed
console.log("Output of B : " + b);

const c = 40;
//const c = 60; redeclare not allowed
    //c = 65; reassign not allowed
console.log("Output of C : " + c);

//2 - data Typeof
var name1 = "Thangarasu G";
var age1 = 25;
var programmingKnowledge = "Javascript";

console.log(name1, typeof name1);
console.log(age1, typeof age1);
console.log(programmingKnowledge, typeof programmingKnowledge);

//3 - array 5 fruits
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Fruits : " + fruits);
console.log("First Fruits : " + fruits[0]);
console.log("Last Fruits : " + fruits[fruits.length - 1]);

//4 - object
let employee = {
    name: "Thangarasu G",
    role: "Java Full Stack Developer",
    cgpa: 7
}
console.log("Employee Name : " + employee.name);
console.log("Employee Role : " + employee.role);
console.log("Employee CGPA : " + employee.cgpa);

//5 - prompt() - alert()
let name2 = prompt("Enter Your Name");
let age2 = prompt("Enter Your Age");

alert("Hello! " + name2);
alert("Welcome to The Website");
console.log("Age Is : " + age2);

//6 - Arithmetic operator
let d = 34;
let e = 35;

console.log("Answer of d+e : " + (d+e));
console.log("Answer of d-e : " + (d-e));
console.log("Answer of d*e : " + (d*e));
console.log("Answer of d/e : " + (d/e));
console.log("Answer of d%e : " + (d%e));
console.log("Answer of d**e : " + (d**e));

//7 - predict the output
let f = 5;
console.log("Answer of F : " + (f++));
console.log("Answer of F : " + f);
console.log("Answer of F : " + (++f));

//8 - perdict output
let g = 10;
let h = g--;
let i = --g;

console.log("Answer of G : " + g);
console.log("Answer of H : "  + h);
console.log("Answer of I : " + i);

//9 - Assignment operator
let j = 20;

j += 5;
console.log("Answer of j+= : " + j);

j -=5;
console.log("Answer of j-= : " + j);

j *= 5;
console.log("Answer of j*= : " + j);

j /= 5;
console.log("Answer of j/= : " + j);

j %= 2;
console.log("Answer of j%= : " + j);

//10 - perdict result

console.log("LoosyTypeEq : " + (5 == "5"));
console.log("StrictiyTypeEq : " + (5 === "5"));
console.log("LoosyNotEq : " + (10 != "10"));
console.log("StrictiyNotEq : " + (10 !== "10"));

//11 - Logical operator
let age3 = 25;
let hasID = true;

console.log("&& operator : " + (age3 >= 18 && hasID));
console.log("|| operator : " + (age3 >= 18 || hasID));
console.log("! operator : " +(!(age3 >= 20)));

console.log("&& operator : " + (age3 < 18 && hasID));
console.log("|| operator : " + (age3 > 18 || hasID));
console.log("! operator : " +(!(age3 <= 20)));

//12 - Ternaey operator

let age4 = 19;

let result = age4 >= 18 ? "You are eligible":"You are not eligible";

console.log("Result : " + result);

//13 -   perdict the data type of each expression

console.log(typeof ("hello" + 10));
console.log(typeof (10 + true));
console.log(typeof (10 + null));
console.log(typeof ("hello" + undefined));

//14 - prompt input using Number()

let value = Number(prompt("Enter the number"));
let result1 = value + 10;
console.log("Results : " + result1);

//15 - Boolean conversion


console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(0));
console.log(Boolean(true));

//16 - if else statement

let positive = 7;

if (positive > 0) {
    console.log("Positive number");
} else {
    console.log("Zero or negative number");
}

//17 - Time-based messages using else-if

let time = Number(prompt("Enter the Hour(0-23):"));

if(time >=1 && time <=6){
    console.log("Hey Early Morning");
}else if(time >= 6 && time < 12){
    console.log("Good Morning");
}else if (time >= 12 && time < 17){
    console.log("Good Afternoon");
}else if(time >= 17 && time < 19){
    console.log("Good Evening");
}else if(time >= 19 && time <=24){
    console.log("Good Night");
}else{
    console.log("Time is Invalid ");
}

//18 - Nested if - Age, height and weight eligibility

let age5 = 25;
let height = 168;
let weight = 68;

if(age5 > 18){

    if(height > 159){
        if(weight > 59){
            console.log("Your Eligible");
        }else{
            console.log("Your weight not eligible");
        }
    }else{
        console.log("Your Height Not Eligible");
    }
    }else{
    console.log(" Your age not eligible");
    }

 //19 - Traffic light using switch
let color = "green";

switch (color) {
    case "red":
        console.log("Stop the vehicle");
        break;
    case "yellow":
        console.log("Ready to Ride");
        break;
    case "green":
        console.log("Go Go");
        break;
    default:
        console.log("Traffic Light error");
        break;
}

//20  - for loop statement

console.log("1 to 20 :");

for(let k=1; k<=20; k++){
    console.log(k);
}

//21 - Print even numbers from 2 to 20

console.log("Even Numbers :");

for(let l=2; l<=20; l+=2){
    console.log(l);
}

//22 - while loop - Print 10 down to 1

console.log("10 to 1 :");

let m = 10;
while (m >= 1) {
    console.log(m);
    m--;
}

//23 - do-while loop - Print 1 to 10
console.log("! to 10 :");

let n = 1;
do{
    console.log(n);
    n++;
}while (n <= 10)

//24 - for-of - Print each character
console.log("Character : ");

let text = "Javascript";
for(let cha of text ){
    console.log(cha);
}

//25 - for-of - Print 5 student names array

let employee1 =["Priya", "Gowtham", "Suriya", "Thangarasu", "Kavi"];

for(let employee2 of employee1){
    console.log(employee2);
}

//26 - for-in - Print object keys and values

let student = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}

//27 - Two numbers

let o = Number(prompt("Enter The First Number :"));
let p = Number(prompt("Enter The Second Number :"));

console.log("Sum : " +(o+p));
console.log("Difference : " + (o-p));
console.log("Product : " + (o*p));

if(p !== 0){
    console.log("Remainder : " + (o%p));
}else{
    console.log("Remainder is Undefined");
}

//28 - Print numbers greater than 10

console.log("Greater 10 :");

let number1 = [5,7,65,11,16];

for(numbers of number1){
    if(numbers > 10){
        console.log(numbers);
    }
}

//29 - Age eligibility using prompt() and alert()

let age6 = Number(prompt("Enter Your age :"));

if(age6 >= 18){
    alert("You are Eligible");
}else{
    alert("You are not eligible");
}

//30 - Simple calculator using switch

let q = Number(prompt("Enter the switch number 1 :"));
let r = Number(prompt("Enter the switch number 2 :"));

let operation = prompt("choose the operation: addition, subtraction, multiplication, division");

switch (operation) {
    case "addition":
        alert("Result : " + (q+r));
        break;
    case "subtraction":
        alert("Result : " + (q-r));
        break;
    case "multiplication":
        alert("Result : " + (q*r));
        break;
    case "division":
        if(r !== 0){
        alert("Result : "+ (q/r));
    }else{
        alert("Cannot divide by zero");
    }
        break;
    default:
        alert("Invalid  Operation");
        break;
}








