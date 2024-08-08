// Here is some json data and problems to solve with said data.
// Solutions are given in the file jsonmanipulationsolutions.js

const userData = [
    {
      id: 1,
      name: "Alice Johnson"
    },
    {
      id: 3,
      name: "Charlie Brown"
    },
    {
      id: 2,
      name: "Bob Smith"
    },
    {
      id: 4,
      name: "Diana Prince"
    },
    {
      id: 5,
      name: "Edward Nygma"
    },
    {
      id: 6,
      name: "Alice Johnson" // TWO ALICES!
    },
]

const teamData = [
      {
        id: 1,
        name: "Development",
        members: [
          1, 2, 3
        ]
      },
      {
        id: 2,
        name: "Marketing",
        members: [
          2, 4
        ]
      },
      {
        id: 3,
        name: "Design",
        members: [
          1, 3, 4, 6
        ]
      }
]


// Challenge 1: Get a list of all users sorted in alphabetical order
console.log("Challenge 1");
 

// Challenge 2: Get a list of all users names only
console.log("\nChallenge 2");
 

// Challenge 3: Get a list of every user id of users with an 'a' in their name
console.log("\nChallenge 3");
 

//Challenge 4: Get the first team each "Alice Johnson" is a member of
console.log("\nChallenge 4");
 

// Challenge 5: List EVERY team with each member's name
console.log("\nChallenge 5");
 