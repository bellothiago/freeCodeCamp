const footballTeam = {
  team: "Argentina",
  year: 2022,
  headCoach: "Lionel Sebastián Scaloni",
  players: [
    {
      name: "Gerónimo Rulli",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Emiliano Martínez",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Franco Armani",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Gonzalo Ariel Montiel",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Cristian Romero",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Nicolás Alejandro Tagliafico",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Juan Marcos Foyth",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Germán Alejo Pezzella",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Lisandro Martínez",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Marcos Javier Acuña",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Nahuel Molina",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Nicolás Otamendi",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Enzo Fernández",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Rodrigo Javier De Paul",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Thiago Almada",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Exequiel Palacios",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Guido Rodríguez",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Ángel Fabián Di María",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Alejandro Gómez",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Alexis Mac Allister",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Leandro Daniel Paredes",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Ángel Correa",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Lautaro Javier Martínez",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Paulo Dybala",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Julián Álvarez",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Lionel Andrés Messi",
      position: "forward",
      isCaptain: true
    }
  ]
};

document.querySelector("#head-coach").innerText = footballTeam.headCoach;
document.querySelector("#team").innerText = footballTeam.team;
document.querySelector("#year").innerText = footballTeam.year;

function showPlayers(playersArray) {
  document.querySelector("#player-cards").innerHTML = "";
  for (let player of playersArray) {
    document.querySelector("#player-cards").innerHTML += `
      <div class="player-card">
        <h2>${player.isCaptain === true ? "(Captain) " : ""}${player.name}</h2>
        <p>Position: ${player.position}</p>
      </div>
    `
  }
}

showPlayers(footballTeam.players);

const selectElement = document.querySelector("#players");

selectElement.addEventListener("change", () => {
  if (selectElement.value === "all") {
    showPlayers(footballTeam.players)
  } else {
    showPlayers(footballTeam.players.filter(player => player.position === selectElement.value));
  }
})