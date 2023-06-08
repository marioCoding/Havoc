const container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn1");
  btn.addEventListener("click", getData);
});

async function getData() {
  // grab data from HTML form
  const charName = document.getElementById("charName");
  const realm = document.getElementById("realm");  
  const request = {
    characterName: charName.value,
    realm: realm.value
  }

  // fetch api
  let url = "https://us.api.blizzard.com/data/wow/pvp-season/35/pvp-leaderboard/3v3?namespace=dynamic-us&locale=en_US&access_token=USaXx5PdA9kGrBpijqm0JdnjXR6W1VLnME";
  let response = await fetch(url);
  let ladder = await response.json();
  try {
    const nameElement = document.createElement("h2");
    let nameData = await ladder.entries.name;
    const realmElement = document.createElement("p");
  } catch {
    err => console.error("oops!", err.message);
  }
  console.log(characterName);
  console.log(realm);
}