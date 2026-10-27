// Effect 1: switch the page theme after a click
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Ieslēgt gaišo tēmu";
  } else {
    themeButton.textContent = "Ieslēgt tumšo tēmu";
  }
});

// Effect 2: show or hide travel tips
const tipsButton = document.getElementById("tipsButton");
const tips = document.getElementById("tips");

tipsButton.addEventListener("click", function () {
  tips.hidden = !tips.hidden;
  tipsButton.setAttribute("aria-expanded", String(!tips.hidden));

  if (tips.hidden) {
    tipsButton.textContent = "Rādīt padomus";
  } else {
    tipsButton.textContent = "Paslēpt padomus";
  }
});

// Effect 3: update a recommendation when the selection changes
const destination = document.getElementById("destination");
const recommendation = document.getElementById("recommendation");

destination.addEventListener("change", function () {
  if (destination.value === "riga") {
    recommendation.textContent =
      "Rīgā iesakām pastaigu pa Vecrīgu un Bastejkalnu.";
  } else if (destination.value === "jurmala") {
    recommendation.textContent =
      "Jūrmalā iesakām pastaigu gar jūru un pa Jomas ielu.";
  } else if (destination.value === "sigulda") {
    recommendation.textContent =
      "Siguldā iesakām apmeklēt Turaidas pili un dabas takas.";
  } else {
    recommendation.textContent =
      "Izvēlies pilsētu, lai saņemtu ieteikumu.";
  }
});