const userData = [
    {
      id: 1,
      name: "Alice Johnson"
    },
    {
      id: 2,
      name: "Bob Smith"
    },
    {
      id: 3,
      name: "Charlie Brown"
    },
    {
      id: 4,
      name: "Diana Prince"
    },
    {
      id: 5,
      name: "Edward Nygma"
    }
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
          1, 3, 4
        ]
      }
]


// Challenge 1: get a list of all users sorted in alphabetical order

let userNames = userData.map(s => s.name).sort();
console.log(userNames);

// Challenge 2: Get a list of every user id of users an 'a' in their name

let userIDs = userData.filter(s => s.name.toLowerCase().includes('a')).map(s => s["id"]);
console.log(userIDs);

// Challenge 3: Get the first team "Alice Johnson" is a member of

const Alice = userData.filter((user) => {
    return user.name === "Alice Johnson"
});

const AlicesFirstTeam = Alice.map((user) => {
    return teamData.find((team) => {
        return team.members.includes(user["id"]);
    });
});

console.log(AlicesFirstTeam);


// Challenge 4: List each user with the first team they are a part of

const userWithTeams = userData.map((user) => {
    const teamOfUser = teamData.find((team) => {
        return team.members.includes(user["id"]);
    })?? null;

    if(teamOfUser === null)
    {
        return null;
    }

    return {
        userID: user.id,
        userName: user.name,
        firstTeam: teamOfUser.name
    }
}).filter(s => s != null);

console.log(userWithTeams);


// Challenge 5: List EVERY team for each person.

const teamsWithUsers = teamData.map((team)  => {
    const userList = team.members.map((userID) => {
        return userData.find((user) => user.id === userID);
    });
    return {
        teamName: team.name,
        users: userList
    }
});
 
console.log(teamsWithUsers);
console.log(teamsWithUsers[0].users);