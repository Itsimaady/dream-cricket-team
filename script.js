// ===============================
// Player Data Array
// ===============================
const players = [
  {
    name: "Virat Kohli",
    image: "images/kohli.jpg",
    jersey: 18,
    matches: 274,
    strikeRate: "138.15",
    performance: "113 vs Sri Lanka"
  },
  {
    name: "Jasprit Bumrah",
    image: "images/bumrah.jpg",
    jersey: 93,
    matches: 100,
    strikeRate: "N/A",
    performance: "6/19 vs England"
  },
  {
    name: "Rohit Sharma",
    image: "images/rohit.jpg",
    jersey: 45,
    matches: 250,
    strikeRate: "139.84",
    performance: "118 vs Pakistan"
  },
  {
    name: "Hardik Pandya",
    image: "images/hardik.jpg",
    jersey: 33,
    matches: 130,
    strikeRate: "145.67",
    performance: "71* vs Australia"
  },
  {
    name: "Ravindra Jadeja",
    image: "images/jadeja.jpg",
    jersey: 8,
    matches: 180,
    strikeRate: "130.20",
    performance: "3/18 vs New Zealand"
  }
];

// ===============================
// DOM Elements
// ===============================
const grid = document.getElementById("playerGrid");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

// ===============================
// Render Player Cards
// ===============================
players.forEach(player => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${player.image}" alt="${player.name}">
    <h3>${player.name}</h3>
  `;
  card.addEventListener("click", () => openModal(player));
  grid.appendChild(card);
});

// ===============================
// Open Modal with Player Info
// ===============================
function openModal(player) {
  document.getElementById("modalName").textContent = player.name;
  document.getElementById("modalJersey").textContent = player.jersey;
  document.getElementById("modalMatches").textContent = player.matches;
  document.getElementById("modalStrike").textContent = player.strikeRate;
  document.getElementById("modalPerformance").textContent = player.performance;
  modal.classList.remove("hidden");
}

// ===============================
// Close Modal Events
// ===============================
closeBtn.addEventListener("click", () => modal.classList.add("hidden"));

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
