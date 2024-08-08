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

const usersSorted = userData.sort((a,b) =>  a.name.localeCompare(b.name));
console.log(usersSorted);

// Challenge 2: Get a list of all users names only
console.log("\nChallenge 2");

const userNames = userData.map((a) => a.name);
console.log(userNames);

// Challenge 3: Get a list of every user id of users with an 'a' in their name
console.log("\nChallenge 3");

const filteredNames = userData.filter(user => user.name.toLowerCase().includes('a'));
const filteredUserIDs = filteredNames.map((a) => a.id);
console.log(filteredUserIDs);

//Challenge 4: Get the first team each "Alice Johnson" is a member of
console.log("\nChallenge 4");

const alices = userData.filter((user) =>  user.name === "Alice Johnson");

const alicesFirstTeam = alices.map((user) => {
return teamData.find((team) => team.members.includes(user.id));
});
console.log(alicesFirstTeam);

// Challenge 5: List EVERY team with each member's name
console.log("\nChallenge 5");

const teamsWithNames = teamData.map((team) => {
  const memberNames = team.members.map((memberId) => userData.find((user) => user.id === memberId).name);
  return {
    id: team.id,
    name: team.name,
    members: memberNames
  }
});

console.log(teamsWithNames);