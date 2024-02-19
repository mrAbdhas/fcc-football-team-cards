//Access html elements with getElementBuId() and assigning them to variables
const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

// Data structure setup: hold all information about the football team in an object.
const myFavoriteFootballTeam = {
    team: "Argentina",
    sport: "Football",
    year: 1986,
    isWorldCupWinner: true,
    headCoach: {
        coachName: "Carlos Bilardo",
        matches: 7,
    },
    players: [ /*property key named players, with the value of an array
                that holds objects, with each players data*/
        {
            name: "Sergio Almirón",
            position: "forward",
            number: 1,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Sergio Batista",
            position: "midfielder",
            number: 2,
            isCaptain: false,
            nickname: null,
        },
        {
         name: "Ricardo Bochini",
         position: "midfielder",
         number: 3,
         isCaptain: false,
         nickname: "El Bocha",
       },
       {
         name: "Claudio Borghi",
         position: "midfielder",
         number: 4,
         isCaptain: false,
         nickname: "Bichi",
       },
       {
         name: "José Luis Brown",
         position: "defender",
         number: 5,
         isCaptain: false,
         nickname: "Tata",
       },
       {
         name: "Daniel Passarella",
         position: "defender",
         number: 6,
         isCaptain: false,
         nickname: "El Gran Capitán",
       },
       {
         name: "Jorge Burruchaga",
         position: "forward",
         number: 7,
         isCaptain: false,
         nickname: "Burru",
       },
       {
         name: "Néstor Clausen",
         position: "defender",
         number: 8,
         isCaptain: false,
         nickname: null,
       },
       {
         name: "José Luis Cuciuffo",
         position: "defender",
         number: 9,
         isCaptain: false,
         nickname: "El Cuchu",
       },
       {
         name: "Diego Maradona",
         position: "midfielder",
         number: 10,
         isCaptain: true,
         nickname: "El Pibe de Oro",
       },
       {
         name: "Jorge Valdano",
         position: "forward",
         number: 11,
         isCaptain: false,
         nickname: "The Philosopher of Football",
       },
       {
         name: "Héctor Enrique",
         position: "midfielder",
         number: 12,
         isCaptain: false,
         nickname: null,
       },
       {
         name: "Oscar Garré",
         position: "defender",
         number: 13,
         isCaptain: false,
         nickname: null,
       },
       {
         name: "Ricardo Giusti",
         position: "midfielder",
         number: 14,
         isCaptain: false,
         nickname: null,
       },
       {
         name: "Luis Islas",
         position: "goalkeeper",
         number: 15,
         isCaptain: false,
         nickname: "El loco",
       },
       {
         name: "Julio Olarticoechea",
         position: "defender",
         number: 16,
         isCaptain: false,
         nickname: null,
       },
       {
         name: "Pedro Pasculli",
         position: "forward",
         number: 17,
         isCaptain: false,
         nickname: null,
       },
       {
         name: "Nery Pumpido",
         position: "goalkeeper",
         number: 18,
         isCaptain: false,
         nickname: null,
       },
       {
         name: "Oscar Ruggeri",
         position: "defender",
         number: 19,
         isCaptain: false,
         nickname: "El Cabezón",
       },
       {
         name: "Carlos Tapia",
         position: "midfielder",
         number: 20,
         isCaptain: false,
         nickname: null,
       },
       {
         name: "Marcelo Trobbiani",
         position: "midfielder",
         number: 21,
         isCaptain: false,
         nickname: "Calesita",
       },
       {
         name: "Héctor Zelada",
         position: "goalkeeper",
         number: 22,
         isCaptain: false,
         nickname: null,
       },
    ],
};

//Ensure immutability of object myFavoriteFootballTeam.
Object.freeze(myFavoriteFootballTeam);

/*Access myFavoriteFootballTeam object. 
Using Destructuring assignment to unpack 
values from arrays, or properties from objects,
and assign them to variables.*/
// Object destructuring  
const {sport, team, year, players} = myFavoriteFootballTeam;
const {coachName} = myFavoriteFootballTeam.headCoach;

//Display team infomation on UI 
typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

//Function that Generate HTML player cards based on an array of player objects, and update the content of the playerCards container.
const setPlayerCards = (arr = players) => { // Define function setPlayerCards with an optional parameter 'arr' defaulted to the players array.

  // Create new array using map() by iterating through players array and return a new array.
  // Use the addition assignment += operator to append the new array to playerCards.innerHTML.
  playerCards.innerHTML += arr.map(({name, position, number, isCaptain, nickname}) =>   //acces objects in arr array, unpack using Destructuring assignment, assigning them into variables.
    //Template literals containing HTML content for the player cards
    `
      <div class="player-card">
        <h2>${name}${isCaptain ? "(Captain)" : ""}</h2>
        <p>Position: ${position}</p>
        <p>Number: ${number}</p>
        <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
      </div>
    `

  ).join("");// Chain the .join() method to the .map() method to remove commas between each player card.
}

/*Event listener detect user selection on dropdown menu.
and update UI according to the selection*/
playersDropdownList.addEventListener("change", (e) => {
  /*e.target.value represents the value property from the 
  playersDropdownList element.
  /* console.log(e.target.value) 
  following value properties: all, nicknames, position, midfielder
  defender and goalkeeper*/ 

  playerCards.innerHTML = ""; //Reset the content for the playerCards element

  //Check user selection from the player dropdown menu, and filter out cards based on the selection.
  switch (e.target.value) { //e.target.value represents the value property from the playersDropdownList element.
    case "nickname":
      // Filter players by nickname and update player cards
      setPlayerCards(players.filter((player) => player.nickname !== null)
      ); //Call setPlayerCards function with argument players.filter(), Add call back funtion with parameter player and implicitly return player.nickname is not null.
      break;
    case "position":
      // Filter players by forward position and update player cards
      setPlayerCards(players.filter((player) => player.position === "forward")
      );
      break;
    case "midfielder":
      // Filter players by midfielder position and update player cards
      setPlayerCards(players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
       // Filter players by defender position and update player cards
      setPlayerCards(players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      // Filter players by goalkeeper position and update player cards
      setPlayerCards(players.filter((player) => player.position === "goalkeeper")
      );
      break;
    default: //default clause, if none of the other case clauses match user selection
      setPlayerCards(); //for the defualt case clause call setPlayerCards() function.
  }
}
); 