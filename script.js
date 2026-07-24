const planets = [
    {
        name: "Mercury",
        emoji: "☿️",
        description: "The smallest planet and the closest planet to the Sun."
    },
    {
        name: "Venus",
        emoji: "♀️",
        description: "The hottest planet in our solar system."
    },
    {
        name: "Earth",
        emoji: "🌍",
        description: "Our home planet and the only known planet with life."
    },
    {
        name: "Mars",
        emoji: "🔴",
        description: "The Red Planet and one of the most explored planets."
    },
    {
        name: "Jupiter",
        emoji: "🪐",
        description: "The largest planet in our solar system."
    },
    {
        name: "Saturn",
        emoji: "🪐",
        description: "Famous for its beautiful rings."
    },
    {
        name: "Uranus",
        emoji: "🔵",
        description: "A unique ice giant that rotates on its side."
    },
    {
        name: "Neptune",
        emoji: "🔵",
        description: "The farthest planet from the Sun."
    }
];

function showMessage() {
    alert("Welcome to SpaceScope! 🚀 Explore the universe and discover amazing cosmic facts.");
}

console.log("SpaceScope planet data loaded!");

planets.forEach(function(planet) {
    console.log(planet.name + ": " + planet.description);
});
