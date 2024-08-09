// LAMBDA EXPRESSIONS

// What is a lambda expression? 
// A function without a name.

console.log("PART 1");

/* Here are normal functions with names.*/
function foo(x)
{
    console.log(x);
}

function koo(y)
{
    return y * 2;
}

function doo(z, w)
{
    return z + w;
}

/* 
Here are functions without names, i.e, lambda expressions. 
We have declared the expressions but we haven't used them for anything
or assigned them to a variable so unlike a function which we can call
by name, they currently disappears and have no purpose.
*/
(x) => {
    console.log(x);
}

(y) => {
    return y*2;
}

(z, w) => {
    return z+w;
}

// We can also declare them like this if they have just one line.
// NO curly brackets needed, and no "return" needed.
(x) => console.log(x);
y => y * 2;
(z, w) => z+w;


// Here we assign a variable to the lambda expression 
let fooVariable1 = (x) => {
    console.log(x);
}

/* 
Here we assign a variable to the same lambda expression
*/
let fooVariable2 = (x) => console.log(x);


foo(1); // Function called by name
fooVariable1(2); // Variable which equals a function is called
fooVariable2(3); // Variable which equals a function is called
((x) => console.log(x))(4) // Expression which equals a function is called


// But, what's the point of Lambda functions?
// They allow us to concisely define throwaway functions. 
// This is great for highly functional code.

console.log();
console.log("PART 2");

let array = [1, 2, 3, 4]

// Consider these two:

//  DOUBLE EACH ELEMENT WITH MAP STYLE 1
function timesTwo(x){
    return x * 2;
}
let newArray1 = array.map(timesTwo);
console.log(newArray1);

// DOUBLE EACH ELEMENT WITH MAP STYLE 2
let newArray2 = array.map(s => s*2);
console.log(newArray1);

// STYLE 1 is longer than STYLE 2, but we could reuse the function timesTwo multiple times.

/* 
Its up to the developer's judgement where to use lambda functions/expressions
over normal functions. But here are some main considerations:

-   If we were to use the function in many places, it may be more maintainable
    and readable to define it as a typical named function.

-   If we are only using a function once, in one specific context, it is
    likely cleaner and more maintainable to define it only in that one place
    as a lambda expression (or maybe an embedded function!).

*/
