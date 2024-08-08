// ASYNCHRONOUS PROGRAMMING

// Using import instead of require given ES6 module (look it up if confused!)
import promptSync from 'prompt-sync';
import readline from 'readline';

/*
As beginners, we are likely to learn completely synchronous programming.
That is, we will write scripts where lines will predictably execute in
a certain order of without exception.

In real applications this is not usually the case. Real applications need
to react to input from external sources (user input, messages from a server, 
etc.) asynchronously. We usually wouldn't want to pause a whole application 
every time we query input from the user, nor pause as we wait for a response 
from a server.

Hence, asynchronous programming:
*/

// Synchronous input example
function doSynchronousPrompt(){
    const prompt = promptSync();
    console.log("Continue on to do other tasks...");
    var input = prompt("Getting Input... "); // We wait for input before calling the following lines
    console.log(input);
    console.log("Continue on to do other tasks...");
}

// Asynchronous input example
function doAsynchronousPrompt(){
    const rl = readline.createInterface({ // Sets up input-output
        input: process.stdin,
        output: process.stdout,
      });
      
      rl.question(`Getting Input...\n`, name => {  // function/action to be called when line is inputted 
        console.log(name);
        rl.close(); // Closes input-output
      });

      // This will be printed immediately; we aren't waiting for input
      // before continuing.

      console.log("Continue on to do other tasks...");
}

/*
Asynchronous programming is crucial for websites:
we assign events to be called when the user clicks buttons,
and we assign events to run when servers/APIs respond
to our requests.

In Javascript we use promises for asynchronous operations.
Promises are objects which represent a value that
may or may not be delivered in the future.
*/

function wait2Seconds(){
    setTimeout(() => { // Uses a promise but its not explicated
        console.log("Waited 2 seconds");
    }, 2000); 
}

// Here we use promises explicitly:
// This example gets numbers from user input and sums them
// over 4 seconds. It returns a reject if the sum is not great enough.
function sumOver4Seconds(){
    
    let completed = false;
    let sum = 0;

    const rl = readline.createInterface({ // Set up IO
        input: process.stdin,
        output: process.stdout,
        });


    // Creating a new promise
    const myPromise = new Promise((resolve, reject) => { 
        setTimeout(() => {
            // When 4 seconds pass, check if sum is great enough
            completed = true;
            let success = sum > 4;
            if (success) {
                // Sum is big
                resolve(`Operation was successful with sum ${sum}!`);
            } else {
                // Sum is too small
                reject(`Operation failed. Sum ${sum} too low!`);
            }
        }, 4000);
    });
 
    myPromise
    .then(result => { // Subscribe lambda expression for success callback
        console.log(result); // Output: Operation was successful!
    })
    .catch(error => { // Subscribe lambda expression for failure callback
        console.error(error); // Output: Operation failed.
    }).finally(() => { // Subscribe lambda expression for finally callback
        rl.close(); // Closes IO for user
    });

    function getMoreSum(){
        rl.question(`Add: `, input => { // With input, add data
            if(!isNaN(Number(input))){ 
                sum += Number(input); // Adds number to sum
            }
            if(!completed) {
                getMoreSum(); // If we are not completed, get more
            }
        });
    }

    getMoreSum();
    
}

/* async and await keywords */

// We use 'async' to describe that this function must return a promise.
// We use 'await' to stop executing until a promise is resolved or rejected.
// In other words, 'await' makes things synchronous again.

function wait2SecondsFullAsync(){

    console.log("Start 2 second wait");
    // We use async in this function to describe that the function must return a promise
    async function wait2Seconds(){ // Function creates a promise
        return new Promise((resolve, reject) => {
        // Making a promise that 10 seconds will pass
        setTimeout(() => {
            resolve("Completed 2 seconds");
        }, 2000);
    });
    }

    wait2Seconds()
      .then(result => { // Subscribes lambda function to be called on success
        console.log(result); // Output: Operation was successful!
      })
      .catch(error => { // Subscribes lambda function to be called on failure
        console.error(error); // Output: Operation failed.
      });

      console.log("Continue on to do other tasks...");

} 

// We must define function with async, as it uses await inside
async function wait2SecondsAwait(){
    console.log("Start 2 second wait");
    async function wait2Seconds(){
        return new Promise((resolve, reject) => {
        // Making a promise that 10 seconds will pass
        setTimeout(() => {
            resolve("Waited 2 seconds");
        }, 2000);
    });
    }

    // await makes us wait until the promis is fulfilled or rejected
    // before continuing
    let message = await wait2Seconds(); 
    console.log(message); 

    console.log("Continue on to do other tasks...");
}

/* Complex async functions */
async function make2MessagesAsync(){
    async function makeMessageIn2Seconds(){
        return new Promise((resolve, reject) => {
        // Making a promise that 10 seconds will pass
        setTimeout(() => {
            resolve("Created this message.");
        }, 2000);
    });}

    async function printMessageIn2Seconds(msg){
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(msg);
            resolve("Completed.");
        }, 2000);
    });}

    async function fetchData() {
        // make message in 2 seconds
        let response = await makeMessageIn2Seconds(); 
        // then print message created in 2 more seconds
        let data = await printMessageIn2Seconds(response); 
        return data;
    }

    let result = await fetchData(); // What if we remove await here?

    console.log(result);
}
