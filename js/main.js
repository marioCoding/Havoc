// Define global variables
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");

/* The code `document.addEventListener("DOMContentLoaded", () => { ... })` is adding an event listener
to the document object. The event being listened for is the "DOMContentLoaded" event, which fires
when the initial HTML document has been completely loaded and parsed. */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn1");
  btn.addEventListener("click", getData);
});

async function getData(event) {
/* This code is grabbing the values entered in the HTML form fields with the IDs "charName" and
  "realmName". It then creates a request object with properties "characterName" and "realm" and
  assigns the corresponding values from the form fields. */
      const charName = document.getElementById("charName");
      const realm = document.getElementById("realmName");  
      const request = {
        characterName: charName.value,
        realm: realm.value
      };
      let requestCharName = request.characterName;
      let requestRealmName = request.realm;

/*  This code is making an API request to the Blizzard API to fetch data about a World of
  Warcraft character's character appearance */
      
      let url0 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/appearance?namespace=profile-us&locale=en_US&access_token=USXKXQSiqHxN6R39kxn3plUh5QWh3VFkio`;
      let response0 = await fetch(url0);
      let appearanceData = await response0.json();
      let charClass;
      try {
        charClass = appearanceData.playable_class.name;
      } catch {
        err => console.error("oops!", err.message);
      }

/* This code is making an API request to the Blizzard API to fetch data about a World of
  Warcraft character's specialization. */
      
      let url1 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/specializations?namespace=profile-us&locale=en_US&access_token=USXKXQSiqHxN6R39kxn3plUh5QWh3VFkio`;
      let response1 = await fetch(url1);
      let specData = await response1.json()

        let spec1;
        let spec2;
        let spec3;
        try {
          spec1 = specData.specializations[0].specialization.name;
          spec2 = specData.specializations[1].specialization.name;
          spec3 = specData.specializations[2].specialization.name;
        } catch {
          err => console.error("oops!", err.message);
        }
  
/* This code is making an API request to the Blizzard API to fetch data about a World of Warcraft
  character's avatar. */
      
    let url2 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/character-media?namespace=profile-us&locale=en_US&access_token=USXKXQSiqHxN6R39kxn3plUh5QWh3VFkio`;
    let response2 = await fetch(url2);
    let avatarData = await response2.json();
    try {
      // Container Section 1 - Character Name
      const avatarHeader = document.createElement("h3");
      const avatarSubHeader = document.createElement("h4");
      const avatarElement = document.createElement("img");
      let avatarName = await avatarData.character.name;
      let avatarRealm = await avatarData.character.realm.name;
      let avatarURL = await avatarData.assets[2].value;
      avatarElement.src = avatarURL;

      // Style container 1
      avatarHeader.innerText = avatarName;
      avatarHeader.style.fontFamily = "warcraft, sans-serif";
      avatarHeader.style.fontSize = "300%";
      avatarHeader.style.background = "#9CA6B0";
      avatarSubHeader.innerText = avatarRealm;
      avatarSubHeader.style.fontFamily = "warcraft, sans-serif";
      avatarSubHeader.style.fontSize = "200%";
      avatarSubHeader.style.background = "#9CA6B0";
      avatarElement.style.width = "100%";
      avatarElement.style.background = "black";
      avatarElement.style.margin = "5%";
      avatarElement.style.borderRadius = "50px";
      avatarElement.style.borderStyle = "inset";

      // make reference to the html containers where the info will be displayed
      container2.innerHTML = " ";
      container2.appendChild(avatarHeader);
      container2.appendChild(avatarSubHeader);
      container2.appendChild(avatarElement);
      } catch {
        err => console.error("oops!", err.message);
      }

/* This code is making an API request to the Blizzard API to fetch data about a World of
  Warcraft character's PvP statistics. */
  
      let url3 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/pvp-bracket/3v3?namespace=profile-us&locale=en_US&access_token=USXKXQSiqHxN6R39kxn3plUh5QWh3VFkio`;
      let response3 = await fetch(url3);
      let pvpData = await response3.json();
      try {
        // Container Section 3 - Rating
        const ratingHeader = document.createElement("h4");
        const ratingElement = document.createElement("p");
        let ratingData = await pvpData.rating;
        ratingElement.innerText = ratingData;
        // Style container 3
        ratingHeader.innerHTML = "3v3 Rating: ";
        ratingHeader.style.background = "#9CA6B0";
        ratingElement.style.background = "#9CA6B0";
        ratingElement.style.fontFamily = "warcraft, sans-serif";
        ratingElement.style.fontSize = "150%";

        // Container Section 4 - Season Match Statistics
        const statsHeader = document.createElement("h3");
        const statsElement1Title = document.createElement("h4");
        const statsElement1 = document.createElement("p");
        const statsElement2Title = document.createElement("h4");
        const statsElement2 = document.createElement("p");
        const statsElement3Title = document.createElement("h4");
        const statsElement3 = document.createElement("p");
        let gamesPlayed = await pvpData.season_match_statistics.played;
        let gamesWon = await pvpData.season_match_statistics.won;
        let gamesLost = await pvpData.season_match_statistics.lost;
        statsElement1Title.innerHTML = "Games played: ";
        statsElement1Title.style.background = "#9CA6B0";
        statsElement1.innerText = gamesPlayed;
        statsElement1.style.background = "#9CA6B0";
        statsElement2Title.innerHTML = "Won: ";
        statsElement2Title.style.background = "#9CA6B0";
        statsElement2.innerText = gamesWon;
        statsElement2.style.background = "#9CA6B0"; 
        statsElement3Title.innerHTML = "Lost: ";
        statsElement3Title.style.background = "#9CA6B0";
        statsElement3.innerText = gamesLost;
        statsElement3.style.background = "#9CA6B0";
        // Style container 4

        // make reference to the html containers where the info will be displayed
        container3.innerHTML = " ";
        container3.appendChild(ratingHeader);
        container3.appendChild(ratingElement);
        container3.appendChild(statsElement1Title);
        container3.appendChild(statsElement1);
        container3.appendChild(statsElement2Title);
        container3.appendChild(statsElement2);
        container3.appendChild(statsElement3Title);
        container3.appendChild(statsElement3);

      } catch {
        err => console.error("oops!", err.message);
      }

/* The following three API requests to the Blizzard API fetch data about a World of
  Warcraft character's solo shuffle statistics. */
        
          // Transform class text to lowercase so that it may be parsed by the url's below
          let cClass = charClass.toLowerCase();
          let s1 = spec1.toLowerCase();
          let s2 = spec2.toLowerCase();
          let s3 = spec3.toLowerCase();

      let url4 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/pvp-bracket/shuffle-${cClass}-${s1}?namespace=profile-us&locale=en_US&access_token=USXKXQSiqHxN6R39kxn3plUh5QWh3VFkio`;
      let response4 = await fetch(url4);
      let shuffleData1 = await response4.json();
      try {
        // Create HTML elements
        const shuffleTitle1 = document.createElement("h4");
        const shuffleRating1 = document.createElement("h3");
        const shufflePlayed1 = document.createElement("p");
        const shuffleWon1 = document.createElement("p");
        const shuffleLost1 = document.createElement("p");

        // Grab solo shuffle statistics from JSON file
        let shuffleRatingSpec1 = await shuffleData1.rating;
        let shuffleRoundsPlayed1 = await shuffleData1.season_round_statistics.played;
        let shuffleRoundsWon1 = await shuffleData1.season_round_statistics.won;
        let shuffleRoundsLost1 = await shuffleData1.season_round_statistics.lost;
        
        // Give HTML elements the JSON data
        shuffleRating1.innerText = shuffleRatingSpec1;
        shufflePlayed1.innerText = shuffleRoundsPlayed1;
        shuffleWon1.innerText = shuffleRoundsWon1;
        shuffleLost1.innerText = shuffleRoundsLost1;

        // Style HTML elements 
        shuffleTitle1.innerHTML = `${spec1} rating: `;

        // Make reference to the HTML containers where the info will be displayed
        container4.innerHTML = " ";
        container4.appendChild(shuffleTitle1);
        container4.appendChild(shuffleRating1);
        container4.appendChild(shufflePlayed1);
        container4.appendChild(shuffleWon1);
        container4.appendChild(shuffleLost1);
      
      } catch {
        err => console.error("oops!", err.message);
      }
      
      let url5 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/pvp-bracket/shuffle-${cClass}-${s2}?namespace=profile-us&locale=en_US&access_token=USXKXQSiqHxN6R39kxn3plUh5QWh3VFkio`;
      let response5 = await fetch(url5);
      let shuffleData2 = await response5.json();
      try {
        // Create HTML elements
        const shuffleTitle2 = document.createElement("h4");
        const shuffleRating2 = document.createElement("h3");
        const shufflePlayed2 = document.createElement("p");
        const shuffleWon2 = document.createElement("p");
        const shuffleLost2 = document.createElement("p");

        // Grab solo shuffle statistics from JSON file
        let shuffleRatingSpec2 = await shuffleData2.rating;
        let shuffleRoundsPlayed2 = await shuffleData2.season_round_statistics.played;
        let shuffleRoundsWon2 = await shuffleData2.season_round_statistics.won;
        let shuffleRoundsLost2 = await shuffleData2.season_round_statistics.lost;

        // Give HTML elements the JSON data
        shuffleRating2.innerText = shuffleRatingSpec2;
        shufflePlayed2.innerText = shuffleRoundsPlayed2;
        shuffleWon2.innerText = shuffleRoundsWon2;
        shuffleLost2.innerText = shuffleRoundsLost2;

        // Style HTML elements
        shuffleTitle2.innerHTML = `${spec2} rating: `;

        // Make reference to the HTML containers where the info will be displayed
        container4.appendChild(shuffleTitle2);
        container4.appendChild(shuffleRating2);
        container4.appendChild(shufflePlayed2);
        container4.appendChild(shuffleWon2);
        container4.appendChild(shuffleLost2);

      } catch {
        err => console.error("oops!", err.message);
      }
      
      let url6 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/pvp-bracket/shuffle-${cClass}-${s3}?namespace=profile-us&locale=en_US&access_token=USXKXQSiqHxN6R39kxn3plUh5QWh3VFkio`;
      let response6 = await fetch(url6);
      let shuffleData3 = await response6.json();
      try {
        // Create HTML elements
        const shuffleTitle3 = document.createElement("h4");
        const shuffleRating3 = document.createElement("h3");
        const shufflePlayed3 = document.createElement("p");
        const shuffleWon3 = document.createElement("p");
        const shuffleLost3 = document.createElement("p");

        // Grab solo shuffle statistics from JSON file
        let shuffleRatingSpec3 = await shuffleData3.rating;
        let shuffleRoundsPlayed3 = await shuffleData3.season_round_statistics.played;
        let shuffleRoundsWon3 = await shuffleData3.season_round_statistics.won;
        let shuffleRoundsLost3 = await shuffleData3.season_round_statistics.lost;

        // Give HTML elements the JSON data
        shuffleRating3.innerText = shuffleRatingSpec3;
        shufflePlayed3.innerText = shuffleRoundsPlayed3;
        shuffleWon3.innerText = shuffleRoundsWon3;
        shuffleLost3.innerText = shuffleRoundsLost3;

        // Style HTML elements
        shuffleTitle3.innerHTML = `${spec3} rating: `;

        // Make reference to the HTML containers where the info will be displayed
        container4.appendChild(shuffleTitle3);
        container4.appendChild(shuffleRating3);
        container4.appendChild(shufflePlayed3);
        container4.appendChild(shuffleWon3);
        container4.appendChild(shuffleLost3);

      } catch {
        err => console.error("oops!", err.message);
      }
    
  /* This code is making an API request to the Blizzard API to fetch data about a World of Warcaft character's
  achievements */
      let url7 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/achievements?namespace=profile-us&locale=en_US&access_token=USXKXQSiqHxN6R39kxn3plUh5QWh3VFkio`;   
      let response7 = await fetch(url7);
      let achievementsData = await response7.json();

  /* This code is making an API request to the Blizzard API to fetch data about a World of Warcraft
  character's personal rating history. */
      let url8 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/achievements/statistics?namespace=profile-us&locale=en_US&access_token=USXKXQSiqHxN6R39kxn3plUh5QWh3VFkio`;
      let response8 = await fetch(url8);
      let pvpHistoryData = await response8.json();
}