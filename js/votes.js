const classBtn = document.querySelector(".btn-class");
const expansionBtn = document.querySelector(".btn-expansion");
const factionBtn = document.querySelector(".btn-faction");

let classVotes = 0;
let expansionVotes = 0;
let factionVotes = 0;

window.addEventListener("DOMContentLoaded", () => {
  classBtn.addEventListener("click", classCounter);
  expansionBtn.addEventListener("click", expansionCounter);
  factionBtn.addEventListener("click", factionCounter);
});

function classCounter(event) {
  // define variables for the class radio fields
  const voteDeathKnight = document.getElementById("death-knight");
  const voteDemonHunter = document.getElementById("demon-hunter");
  const voteDruid = document.getElementById("druid");
  const voteEvoker = document.getElementById("evoker");
  const voteHunter = document.getElementById("hunter");
  const voteMage = document.getElementById("mage");
  const voteMonk = document.getElementById("monk");
  const votePaladin = document.getElementById("paladin");
  const votePriest = document.getElementById("priest");
  const voteRogue = document.getElementById("rogue");
  const voteShaman = document.getElementById("shaman");
  const voteWarlock = document.getElementById("warlock");
  const voteWarrior = document.getElementById("warrior");

  // define variables for the class meters
  const meterDeathKnight = document.getElementById("meter-death-knight");
  const meterDemonHunter = document.getElementById("meter-demon-hunter");
  const meterDruid = document.getElementById("meter-druid");
  const meterEvoker = document.getElementById("meter-evoker");
  const meterHunter = document.getElementById("meter-hunter");
  const meterMage = document.getElementById("meter-mage");
  const meterMonk = document.getElementById("meter-monk");
  const meterPaladin = document.getElementById("meter-paladin");
  const meterPriest = document.getElementById("meter-priest");
  const meterRogue = document.getElementById("meter-rogue");
  const meterShaman = document.getElementById("meter-shaman");
  const meterWarlock = document.getElementById("meter-warlock");
  const meterWarrior = document.getElementById("meter-warrior");
  
  let counterDeathKnight = 0;
  let counterDemonHunter = 0;
  let counterDruid = 0;
  let counterEvoker = 0;
  let counterHunter = 0;
  let counterMage = 0;
  let counterMonk = 0;
  let counterPaladin = 0;
  let counterPriest = 0;
  let counterRogue = 0;
  let counterShaman = 0;
  let counterWarlock = 0;
  let counterWarrior = 0;

  if (voteDeathKnight.checked) {
    counterDeathKnight++;
    meterDeathKnight.value = counterDeathKnight;
    meterDeathKnight.innerHTML = counterDeathKnight;
  } else if (voteDemonHunter.checked) {
    counterDemonHunter++;
    meterDemonHunter.value = counterDemonHunter;
    meterDemonHunter.innerHTML = counterDemonHunter;
  } else if (voteDruid.checked) {
    counterDruid++;
    meterDruid.value = counterDruid;
    meterDruid.innerHTML = counterDruid;
  } else if (voteEvoker.checked) {
    counterEvoker++;
    meterEvoker.value = counterEvoker;
    meterEvoker.innerHTML = counterEvoker;
  } else if (voteHunter.checked) {
    counterHunter++;
    meterHunter.value = counterHunter;
    meterHunter.innerHTML = counterHunter;
  } else if (voteMage.checked) {
    counterMage++;
    meterMage.value = counterMage;
    meterMage.innerHTML = counterMage;
  } else if (voteMonk.checked) {
    counterMonk++;
    meterMonk.value = counterMonk;
    meterMonk.innerHTML = counterMonk;
  } else if (votePaladin.checked) {
    counterPaladin++;
    meterPaladin.value = counterPaladin;
  } else if (votePriest.checked) {
    counterPriest++;
    meterPriest.value = counterPriest;
    meterPriest.innerHTML = counterPriest;
  } else if (voteRogue.checked) {
    counterRogue++;
    meterRogue.value = counterRogue;
    meterRogue.innerHTML = counterRogue;
  } else if (voteShaman.checked) {
    counterShaman++;
    meterRogue.value = counterShaman;
    meterRogue.innerHTML = counterShaman;
  } else if (voteWarlock.checked) {
    counterWarlock++;
    meterWarlock.value = counterWarlock;
    meterWarlock.innerHTML = counterWarlock;
  } else if (voteWarrior.checked) {
    counterWarrior++;
    meterWarrior.value = counterWarrior;
    meterWarrior.innerHTML = counterWarrior;
  } else {
    alert('Please select an option before submitting your vote.');
    return;
  }
}

function expansionCounter(event) {
  // define variables for the expansion radio fields
  const voteVanilla = document.getElementById("vanilla");
  const voteBurningCrusade = document.getElementById("burning-crusade");
  const voteWrathOfTheLichKing = document.getElementById("wrath");
  const voteCataclysm = document.getElementById("cata");
  const voteMistsOfPandaria = document.getElementById("mop");
  const voteWarlordsOfDraenor = document.getElementById("wod");
  const voteLegion = document.getElementById("legion");
  const voteBattleForAzeroth = document.getElementById("bfa");
  const voteShadowlands = document.getElementById("shadowlands");
  const voteDragonflight = document.getElementById("dragonflight");

  // define variables for the expansion meters
  const meterVanilla = document.getElementById("meter-vanilla");
  const meterBurningCrusade = document.getElementById("meter-burning-crusade");
  const meterWrathOfTheLichKing = document.getElementById("meter-wrath");
  const meterCataclysm = document.getElementById("meter-cata");
  const meterMistsOfPandaria = document.getElementById("meter-mop");
  const meterWarlordsOfDraenor = document.getElementById("meter-wod");
  const meterLegion = document.getElementById("meter-legion");
  const meterBattleForAzeroth = document.getElementById("meter-bfa");
  const meterShadowlands = document.getElementById("meter-shadowlands");
  const meterDragonflight = document.getElementById("meter-dragonflight");

  let counterVanilla = 0;
  let counterBurningCrusade = 0;
  let counterWrathOfTheLichKing = 0;
  let counterCataclysm = 0;
  let counterMistsOfPandaria = 0;
  let counterWarlordsOfDraenor = 0;
  let counterLegion = 0;
  let counterBattleForAzeroth = 0;
  let counterShadowlands = 0;
  let counterDragonflight = 0;

  // Check if the user has already voted
  if (localStorage.getItem('hasVoted')) {
    alert('You have already voted. Thank you!');
    return;
  }

  if (voteVanilla.checked) {
    counterVanilla++;
    meterVanilla.value = counterVanilla;
    meterVanilla.innerHTML = counterVanilla;
  } else if (voteBurningCrusade.checked) {
    counterBurningCrusade++;
    meterBurningCrusade.value = counterBurningCrusade;
    meterBurningCrusade.innerHTML = counterBurningCrusade;
  } else if (voteWrathOfTheLichKing.checked) {
    counterWrathOfTheLichKing++;
    meterWrathOfTheLichKing.value = counterWrathOfTheLichKing;
    meterWrathOfTheLichKing.innerHTML = counterWrathOfTheLichKing;
  } else if (voteCataclysm.checked) {
    counterCataclysm++;
    meterCataclysm.value = counterCataclysm;
    meterCataclysm.innerHTML = counterCataclysm;
  } else if (voteMistsOfPandaria.checked) {
    counterMistsOfPandaria++;
    meterMistsOfPandaria.value = counterMistsOfPandaria;
    meterMistsOfPandaria.innerHTML = counterMistsOfPandaria;
  } else if (voteWarlordsOfDraenor.checked) {
    counterWarlordsOfDraenor++;
    meterWarlordsOfDraenor.value = counterWarlordsOfDraenor;
    meterWarlordsOfDraenor.innerHTML = counterWarlordsOfDraenor;
  } else if (voteLegion.checked) {
    counterLegion++;
    meterLegion.value = counterLegion;
    meterLegion.innerHTML = counterLegion;
  } else if (voteBattleForAzeroth.checked) {
    counterBattleForAzeroth++;
    meterBattleForAzeroth.value = counterBattleForAzeroth;
    meterBattleForAzeroth.innerHTML = counterBattleForAzeroth;
  } else if (voteShadowlands.checked) {
    counterShadowlands++;
    meterShadowlands.value = counterShadowlands;
    meterShadowlands.innerHTML = counterShadowlands;
  } else if (voteDragonflight.checked) {
    counterDragonflight++;
    meterDragonflight.value = counterDragonflight;
    meterDragonflight.innerHTML = counterDragonflight;
  } else {
    alert('Please select an option before submitting your vote.');
    return;
  }
}

function factionCounter(event) {
  // define variables for the faction radio fields
  const voteAlliance = document.getElementById("alliance");
  const voteHorde = document.getElementById("horde");
  const voteNeutral = document.getElementById("neutral");

  // define variables for the faction meters
  const meterAlliance = document.getElementById("meter-alliance");
  const meterHorde = document.getElementById("meter-horde");
  const meterNeutral = document.getElementById("meter-neutral");

  let counterAlliance = 0;
  let counterHorde = 0;
  let counterNeutral = 0;

  if (voteAlliance.checked) {
    counterAlliance++;
    meterAlliance.value = counterAlliance;
    meterAlliance.innerHTML = counterAlliance;
  } else if (voteHorde.checked) {
    counterHorde++;
    meterHorde.value = counterHorde;
    meterHorde.innerHTML = counterHorde;
  } else if (voteNeutral.checked) {
    counterNeutral++;
    meterNeutral.value = counterNeutral;
    meterNeutral.innerHTML = counterNeutral;
  }
}

/* 


<h2>Vote for Your Favorite Option</h2>

<form id="votingForm">
  <input type="radio" name="voteOption" value="option1"> Option 1<br>
  <input type="radio" name="voteOption" value="option2"> Option 2<br>
  <input type="radio" name="voteOption" value="option3"> Option 3<br>

  <button type="button" onclick="submitVote()">Submit Vote</button>
</form>

<script>
  // Function to handle form submission and prevent multiple votes
  function submitVote() {
    // Check if the user has already voted
    if (localStorage.getItem('hasVoted')) {
      alert('You have already voted. Thank you!');
      return;
    }

    // Get the selected option
    var selectedOption = document.querySelector('input[name="voteOption"]:checked');

    // Check if an option is selected
    if (!selectedOption) {
      alert('Please select an option before submitting your vote.');
      return;
    }

    // Process the vote (you can send it to a server here)
    var voteValue = selectedOption.value;
    alert('Thank you for voting for ' + voteValue + '!');

    // Mark the user as voted in local storage
    localStorage.setItem('hasVoted', true);
  }

  */