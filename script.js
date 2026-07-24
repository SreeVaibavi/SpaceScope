// SpaceScope Planet Data

const planets = [
    {
        name: "Mercury",
        emoji: "☿️",
        description: "The smallest planet and the closest planet to the Sun.",
        fact: "A year on Mercury lasts only 88 Earth days."
    },
    {
        name: "Venus",
        emoji: "♀️",
        description: "The hottest planet in our solar system.",
        fact: "Venus rotates in the opposite direction to most planets."
    },
    {
        name: "Earth",
        emoji: "🌍",
        description: "Our home planet and the only known planet with life.",
        fact: "About 71% of Earth's surface is covered by water."
    },
    {
        name: "Mars",
        emoji: "🔴",
        description: "The Red Planet and one of the most explored planets.",
        fact: "Mars has the largest volcano in the solar system."
    },
    {
        name: "Jupiter",
        emoji: "🟠",
        description: "The largest planet in our solar system.",
        fact: "Jupiter is so large that more than 1,300 Earths could fit inside it."
    },
    {
        name: "Saturn",
        emoji: "🪐",
        description: "A gas giant famous for its spectacular rings.",
        fact: "Saturn's rings are made mostly of ice and rock particles."
    },
    {
        name: "Uranus",
        emoji: "🔵",
        description: "An ice giant that rotates almost completely on its side.",
        fact: "A season on Uranus can last more than 20 Earth years."
    },
    {
        name: "Neptune",
        emoji: "🔵",
        description: "The farthest known planet from the Sun.",
        fact: "Neptune has the fastest winds in the solar system."
    }
];


// Get the planet container from HTML

const planetContainer = document.getElementById("planet-container");


// Create planet cards automatically

planets.forEach(function(planet) {

    const planetCard = document.createElement("div");

    planetCard.className = "planet-card";

    planetCard.innerHTML = `
        <div class="planet-icon">${planet.emoji}</div>

        <h3>${planet.name}</h3>

        <p>${planet.description}</p>

        <button onclick="showPlanet('${planet.name}')">
            Explore ${planet.name}
        </button>
    `;

    planetContainer.appendChild(planetCard);

});


// Homepage Explore Button

function showMessage() {

    alert(
        "Welcome to SpaceScope! 🚀\n\n" +
        "Your journey through the universe begins now."
    );

}


// Show Planet Information

function showPlanet(planetName) {

    const selectedPlanet = planets.find(function(planet) {

        return planet.name === planetName;

    });


    alert(
        selectedPlanet.emoji + " " + selectedPlanet.name +
        "\n\n" +

        selectedPlanet.description +
        "\n\n" +

        "✨ Amazing Fact:\n" +
        selectedPlanet.fact
    );

}


// Show Mission Information

function showMission(missionName) {

    alert(
        "🚀 " + missionName +
        "\n\n" +

        "Humanity continues to explore the unknown " +
        "and push the boundaries of space exploration."
    );

}


// Console Message

console.log("🌌 SpaceScope loaded successfully!");

console.log("🪐 " + planets.length + " planets ready to explore.");
      
   
