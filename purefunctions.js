// Pure functions ensure predictability and reusability

// Impure function
let x = 2;
let y = 3;
function timesImpure(){
    y *= x;
    return y;
}
console.log(y)
console.log(timesImpure())
console.log(y)
console.log(timesImpure())
console.log(y)

/*
Our function has read and changed a variable outside of itself.
This means:
    - Function has side effects which may not be known by the functions name.
    - Function relies on outside data:
        - Will give a different result each time its called.
        - Code cannot be easily reused elsewhere as it relies on specific global data.
*/

// Pure function
x = 2;
y = 3;
function timesPure(x,y){
    return x * y;
}
console.log(y)
console.log(timesPure(x, y))
console.log(y)
console.log(timesPure(x, y))
console.log(y)

/*
    Our function only generates result from internal data and has no side-effects.
    This means:
        - User will not be surprised by unpredicatble side effects.
        - Doesn't rely on external data:
            - Can be recalled many times without changing result.
            - Code can be reused in other projects with different global data.
*/