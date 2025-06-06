
const trainingDays = [
  "Den 1: Švihadlo 5 min + 20 angličáků + 3x dřepy na jedné noze",
  "Den 2: 10 kliků + 30 angličáků + plank 1 min",
  "Den 3: Švihadlo 7 min + 25 angličáků + 4x dřepy na jedné noze",
  "Den 4: Recovery (lehké protažení)",
  "Den 5: 15 kliků + 40 angličáků + plank 1:30 min",
  "Den 6: Švihadlo 10 min + 30 angličáků + 5x dřepy na jedné noze",
  "Den 7: 20 kliků + 50 angličáků + plank 2 min",
  "Den 8: Švihadlo 5 min + 25 angličáků + 3x dřepy na jedné noze",
  "Den 9: 15 kliků + 35 angličáků + plank 1:30 min",
  "Den 10: Recovery (lehké protažení)",
  "Den 11: Švihadlo 10 min + 40 angličáků + 4x dřepy na jedné noze",
  "Den 12: 20 kliků + 55 angličáků + plank 2 min",
  "Den 13: Švihadlo 7 min + 35 angličáků + 5x dřepy na jedné noze",
  "Den 14: Recovery (lehké protažení)",
  "Den 15: 25 kliků + 60 angličáků + plank 2:30 min",
  "Den 16: Švihadlo 10 min + 40 angličáků + 6x dřepy na jedné noze",
  "Den 17: 30 kliků + 70 angličáků + plank 3 min",
  "Den 18: Recovery (lehké protažení)",
  "Den 19: Švihadlo 12 min + 50 angličáků + 6x dřepy na jedné noze",
  "Den 20: 35 kliků + 75 angličáků + plank 3:30 min",
  "Den 21: Švihadlo 15 min + 60 angličáků + 7x dřepy na jedné noze",
  "Den 22: Recovery (lehké protažení)",
  "Den 23: 40 kliků + 80 angličáků + plank 4 min",
  "Den 24: Švihadlo 15 min + 65 angličáků + 7x dřepy na jedné noze",
  "Den 25: 45 kliků + 90 angličáků + plank 4:30 min",
  "Den 26: Recovery (lehké protažení)",
  "Den 27: Švihadlo 20 min + 70 angličáků + 8x dřepy na jedné noze",
  "Den 28: 50 kliků + 100 angličáků + plank 5 min",
  "Den 29: Švihadlo 20 min + 75 angličáků + 8x dřepy na jedné noze",
  "Den 30: Recovery (lehké protažení)"
];

const motivationalPhrases = [
  "Jdeš na to parádně! 💪",
  "Tělo z betonu není jen sen!",
  "Každý den tě posouvá blíž cíli.",
  "Nezastavuj se, jsi borec!",
  "Tvrdá práce přináší výsledky.",
  "Krok za krokem k dokonalosti.",
  "Dneska si zase o něco silnější.",
  "Vítěz není ten, kdo nikdy neselže.",
  "Tvůj mindset je tvá zbraň.",
  "Nikdy se nevzdávej!"
];

const container = document.getElementById("training-container");
const resetBtn = document.getElementById("reset-btn");

function saveProgress(progress) {
  localStorage.setItem("trainingProgress", JSON.stringify(progress));
}

function loadProgress() {
  const saved = localStorage.getItem("trainingProgress");
  return saved ? JSON.parse(saved) : [];
}

function getRandomMotivation() {
  return motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
}

function createCard(text, index, done) {
  const card = document.createElement("div");
  card.className = "card";
  if (done) card.classList.add("done");
  card.textContent = text;

  card.addEventListener("click", () => {
    done = !done;
    if (done) {
      card.classList.add("done");
      alert(getRandomMotivation());
    } else {
      card.classList.remove("done");
    }
    progress[index] = done;
    saveProgress(progress);
  });

  return card;
}

let progress = loadProgress();

function render() {
  container.innerHTML = "";
  trainingDays.forEach((day, idx) => {
    const done = progress[idx] || false;
    const card = createCard(day, idx, done);
    container.appendChild(card);
  });
}

resetBtn.addEventListener("click", () => {
  if (confirm("Opravdu chceš resetovat progres?")) {
    progress = [];
    saveProgress(progress);
    render();
  }
});

render();
