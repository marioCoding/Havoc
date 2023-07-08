const container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn1");
  btn.addEventListener("click", getData);
});

async function getData() {
  // grab data from HTML form
  const charName = document.getElementById("charName");
  const realm = document.getElementById("realmName");  
  const request = {
    characterName: charName.value,
    realm: realm.value
  };
  /*
   // Style request object properties so that the input text matches the API syntax
   request.characterName.style.textTransform = "lowercase";
   request.realm.style.textTransform = "lowercase";
  */ 

  // fetch api
  let requestCharName = request.characterName;
  let requestRealmName = request.realm;
  let url = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/pvp-bracket/3v3?namespace=profile-us&locale=en_US&access_token=USbE88pUWi4SdNY3ImdYgsqOst8sqDSvTv`;
  let response = await fetch(url);
  let data = await response.json();
  try {
    // Container Section 1 - Character Name
    const nameHeader = document.createElement("h3");
    const nameElement = document.createElement("p");
    let nameData = await data.character.name;
    nameHeader.textContent = nameData;
    // Style container 1
      nameHeader.innerHTML = "Name: ";
      nameHeader.style.fontSize = "200%";
      nameElement.style.fontSize = "150%";

    // Container Section 2 - Realm Name
    const realmHeader = document.createElement("h3");
    const realmElement = document.createElement("p");
    let realmData = await data.character.realm.slug;
    realmHeader.textContent = realmData;
    // Style container 2
      realmHeader.innerHTML = "Realm name: ";
      realmHeader.style.fontSize = "200%";
      realmElement.style.fontSize = "150%";
      console.log("realmElement");

    /* Container 3 - Position in Leaderboard
    const rankHeader = document.createElement("h3");
    const rankElement = document.createElement("p");
    let rankData = await data.rank;
    realmElement.textContent = rankData;
    // Style Container 3
      realmHeader.innerHTML = "Rank in Leaderboard: ";
      realmHeader.style.fontSize = "200%";
      realmElement.style.fontSize = "150%";
    */ 

    // Container Section 4 - Rating
    const ratingHeader = document.createElement("h3");
    const ratingElement = document.createElement("p");
    let ratingData = await data.rating;
    ratingElement.innerText = ratingData;
    // Style container 4

    // Container Section 5 - Season Match Statistics
    const statsHeader = document.createElement("h3");
    const statsElement1 = document.createElement("p");
    const statsElement2 = document.createElement("p");
    const statsElement3 = document.createElement("p");
    let gamesPlayed = await data.season_match_statistics.played;
    let gamesWon = await data.season_match_statistics.won;
    let gamesLost = await data.season_match_statistics.lost;
    statsElement1.innerText = gamesPlayed;
    statsElement2.innerText = gamesWon;
    statsElement3.innerText = gamesLost;
    // Style container 5

    // make reference to the html containers where the info will be displayed
    container.innerHTML = " ";
    container.appendChild(nameHeader);
    container.appendChild(nameElement);
    container.appendChild(realmHeader);
    container.appendChild(realmElement);
    container.appendChild(ratingHeader);
    container.appendChild(ratingElement);
    container.appendChild(statsElement1);
    container.appendChild(statsElement2);
    container.appendChild(statsElement3);

  } catch {
    err => console.error("oops!", err.message);
  }
}