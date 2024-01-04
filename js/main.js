// Define global variables
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");
const container5 = document.querySelector(".container5");
const container6 = document.querySelector(".container6");
const container7 = document.querySelector(".container7");
let accessToken = {};

/* The code `document.addEventListener("DOMContentLoaded", () => { ... })` is adding an event listener
to the document object. The event being listened for is the "DOMContentLoaded" event, which fires
when the initial HTML document has been completely loaded and parsed. */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn-search");
  btn.addEventListener("click", getData);
});

/* To request access tokens, an application must make a POST request with the following multipart form 
data to the token URI: grant_type=client_credentials.
The application must pass basic HTTP auth credentials using the client_id as the user and 
client_secret as the password.*/
var clientId = 'a60c28e171464f5c83c3de5b3e68818f';
var clientSecret = 'YIoaEm3yAfA8yAp5KYsG8qfi2Omve38B';

// Encode the client credentials
var credentials = btoa(clientId + ':' + clientSecret);

// Set up the AJAX request
$.ajax({
  url: 'https://oauth.battle.net/token',
  type: 'POST',
  headers: {
    'Authorization': 'Basic ' + credentials,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: {
    'grant_type': 'client_credentials'
  },
  success: function(response) {
    // Handle the successful response
    accessToken = response.access_token;
  },
  error: function(error) {
    // Handle the error
    console.error(error);
  }
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
      let requestCharName = request.characterName.toLowerCase();
      let requestRealmName = request.realm.toLowerCase();

// Scroll the webpage smoothly to the result containers after the submit button is clicked
  $('html, body').animate({
    scrollTop: $(container2).offset().top
  }, 2000);

/*  This code is making a request to the Blizzard API to fetch data about a World of
  Warcraft character's character appearance */
      
      let url0 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/appearance?namespace=profile-us&locale=en_US&access_token=${accessToken}`;
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
      
      let url1 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/specializations?namespace=profile-us&locale=en_US&access_token=${accessToken}`;
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
      
    let url2 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/character-media?namespace=profile-us&locale=en_US&access_token=${accessToken}`;
    let response2 = await fetch(url2);
    let avatarData = await response2.json();
    try {
      // Container Section 1 - Character Name
      const avatarHeader = document.createElement("h3");
      const avatarSubHeader = document.createElement("h4");
      const avatarElement = document.createElement("img");
      let avatarName = await avatarData.character.name;
      let avatarRealm = await avatarData.character.realm.name;
      let avatarURL = await avatarData.assets[1].value;
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
      avatarElement.style.width = "80%";
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
  
      let url3 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/pvp-bracket/3v3?namespace=profile-us&locale=en_US&access_token=${accessToken}`;
      let response3 = await fetch(url3);
      let arena3sData = await response3.json();
      try {
        // Container Section 3 - Rating
        const ratingHeader = document.createElement("h3");
        const ratingElement = document.createElement("p");
        let ratingData = await arena3sData.rating;
        ratingElement.innerText = ratingData;
        // Style container 3
        ratingHeader.innerHTML = "3v3 Rating";
        ratingHeader.style.background = "#E0F6F6";
        ratingHeader.style.padding = "15px 50px";
        ratingHeader.style.margin = "2% 0";
        ratingHeader.style.border = "2.5px solid black";
        ratingHeader.style.borderRadius = "0 0 15px 15px";
        ratingElement.style.fontFamily = "warcraft, sans-serif";
        ratingElement.style.fontSize = "150%";
        ratingElement.style.margin = "0 0 2% 0";

        // Container Section 4 - Season Match Statistics
        const statsElement1Title = document.createElement("h4");
        const statsElement1 = document.createElement("p");
        const statsElement2Title = document.createElement("h4");
        const statsElement2 = document.createElement("p");
        const statsElement3Title = document.createElement("h4");
        const statsElement3 = document.createElement("p");
        // Fetch API endpoints
        let gamesPlayed = await arena3sData.season_match_statistics.played;
        let gamesWon = await arena3sData.season_match_statistics.won;
        let gamesLost = await arena3sData.season_match_statistics.lost;
        // Add style to container 4
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
        statsElement3.style.marginBottom = "2%";
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

// Make a request to the Blizzard API to fetch data about a World of Warcraft character's 2v2 rating
      let url9 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/pvp-bracket/2v2?namespace=profile-us&locale=en_US&access_token=${accessToken}`;
      let response9 = await fetch(url9);
      let arena2sData = await response9.json();

      try {
        // Container Section 6 - 2v2 Rating
        const ratingHeader2 = document.createElement("h3");
        const ratingElement2 = document.createElement("p");
        let ratingData2 = await arena2sData.rating;
        ratingElement2.innerText = ratingData2;
        // Style container 6
        ratingHeader2.innerHTML = "2v2 Rating";
        ratingHeader2.style.background = "#E0F6F6";
        ratingHeader2.style.padding = "15px 50px";
        ratingHeader2.style.margin = "2% 0";
        ratingHeader2.style.border = "2.5px solid black";
        ratingHeader2.style.borderRadius = "0 0 15px 15px";
        ratingElement2.style.fontFamily = "warcraft, sans-serif";
        ratingElement2.style.fontSize = "150%";
        ratingElement2.style.margin = "0 0 2% 0";

        // Container Section 6 - Season Match Statistics
        const statsElement4Title = document.createElement("h4");
        const statsElement4 = document.createElement("p");
        const statsElement5Title = document.createElement("h4");
        const statsElement5 = document.createElement("p");
        const statsElement6Title = document.createElement("h4");
        const statsElement6 = document.createElement("p");
        // Fetch API endpoints
        let gamesPlayed2 = await arena2sData.season_match_statistics.played;
        let gamesWon2 = await arena2sData.season_match_statistics.won;
        let gamesLost2 = await arena2sData.season_match_statistics.lost;
        // Add style to container 6
        statsElement4Title.innerHTML = "Games played: ";
        statsElement4Title.style.background = "#9CA6B0";
        statsElement4.innerText = gamesPlayed2;
        statsElement4.style.background = "#9CA6B0";
        statsElement5Title.innerHTML = "Won: ";
        statsElement5Title.style.background = "#9CA6B0";
        statsElement5.innerText = gamesWon2;
        statsElement5.style.background = "#9CA6B0"; 
        statsElement6Title.innerHTML = "Lost: ";
        statsElement6Title.style.background = "#9CA6B0";
        statsElement6.innerText = gamesLost2;
        statsElement6.style.background = "#9CA6B0";

        // Make reference to the HTML containers where the info will be displayed
        container6.innerHTML = " ";
        container6.appendChild(ratingHeader2);
        container6.appendChild(ratingElement2);
        container6.appendChild(statsElement4Title);
        container6.appendChild(statsElement4);
        container6.appendChild(statsElement5Title);
        container6.appendChild(statsElement5);
        container6.appendChild(statsElement6Title);
        container6.appendChild(statsElement6);

      } catch {
        err => console.error("oops! sonething went wrongh with your 2v2 data fetch", err.message);
      }

// Make a request to the Blizzard API to fetch data about a World of Warcraft character's rbg rating
      let url10 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/pvp-bracket/rbg?namespace=profile-us&locale=en_US&access_token=${accessToken}`;
      let response10 = await fetch(url10);
      let rbgData = await response10.json();

      try {
        // Container Section 7 - RBG Rating
        const ratingHeader3 = document.createElement("h3");
        const ratingElement3 = document.createElement("p");
        let ratingData3 = await rbgData.rating;
        ratingElement3.innerText = ratingData3;
        // Style container 7
        ratingHeader3.innerHTML = "RBG Rating";
        ratingHeader3.style.background = "#E0F6F6";
        ratingHeader3.style.padding = "15px 50px";
        ratingHeader3.style.margin = "2% 0";
        ratingHeader3.style.border = "2.5px solid black";
        ratingHeader3.style.borderRadius = "0 0 15px 15px";
        ratingElement3.style.fontFamily = "warcraft, sans-serif";
        ratingElement3.style.fontSize = "150%";
        ratingElement3.style.margin = "0 0 2% 0";
        
        // Container Section 7 - Season Match Statistics
        const statsElement7Title = document.createElement("h4");
        const statsElement7 = document.createElement("p");
        const statsElement8Title = document.createElement("h4");
        const statsElement8 = document.createElement("p");
        const statsElement9Title = document.createElement("h4");
        const statsElement9 = document.createElement("p");
        // Fetch API endpoints
        let gamesPlayed3 = await rbgData.season_match_statistics.played;
        let gamesWon3 = await rbgData.season_match_statistics.won;
        let gamesLost3 = await rbgData.season_match_statistics.lost;
        // Add style to container 7
        statsElement7Title.innerHTML = "Games played: ";
        statsElement7Title.style.background = "#9CA6B0";
        statsElement7.innerText = gamesPlayed3;
        statsElement7.style.background = "#9CA6B0";
        statsElement8Title.innerHTML = "Won: ";
        statsElement8Title.style.background = "#9CA6B0";
        statsElement8.innerText = gamesWon3;
        statsElement8.style.background = "#9CA6B0";
        statsElement9Title.innerHTML = "Lost: ";
        statsElement9Title.style.background = "#9CA6B0";
        statsElement9.innerText = gamesLost3;
        statsElement9.style.background = "#9CA6B0";
        statsElement9.style.marginBottom = "2%";
        // Make reference to the HTML containers where the info will be displayed
        container7.innerHTML = " ";
        container7.appendChild(ratingHeader3);
        container7.appendChild(ratingElement3);
        container7.appendChild(statsElement7Title);
        container7.appendChild(statsElement7);
        container7.appendChild(statsElement8Title);
        container7.appendChild(statsElement8);
        container7.appendChild(statsElement9Title);
        container7.appendChild(statsElement9);
      } catch {
        err => console.error("oops! something went wrong with your rbg data fetch", err.message);
      }

/* The following three API requests to the Blizzard API fetch data about a World of
  Warcraft character's solo shuffle statistics. */
        
          // Transform class text to lowercase so that it may be parsed by the url's below
          let cClass = charClass.toLowerCase();
          let s1 = spec1.toLowerCase();
          let s2 = spec2.toLowerCase();
          let s3 = spec3.toLowerCase();


      let url4 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/pvp-bracket/shuffle-${cClass}-${s1}?namespace=profile-us&locale=en_US&access_token=${accessToken}`;
      let response4 = await fetch(url4);
      let shuffleData1 = await response4.json();
      try {
        // Create HTML elements
        const shuffleTitle1 = document.createElement("h3");
        const shuffleRating1 = document.createElement("h4");
        const shufflePlayed1 = document.createElement("p");
        const shuffleWon1 = document.createElement("p");
        const shuffleLost1 = document.createElement("p");

        // Grab solo shuffle statistics from JSON file
        let shuffleRatingSpec1 = await shuffleData1.rating;
        let shuffleRoundsPlayed1 = await shuffleData1.season_round_statistics.played;
        let shuffleRoundsWon1 = await shuffleData1.season_round_statistics.won;
        let shuffleRoundsLost1 = await shuffleData1.season_round_statistics.lost;
        
        // Give HTML elements the JSON data
        
        soloShuffleTitle.style.background = "#E0F6F6";
        soloShuffleTitle.style.padding = "15px 50px";
        soloShuffleTitle.style.margin = "2% 0";
        soloShuffleTitle.style.border = "2.5px solid black";
        soloShuffleTitle.style.borderRadius = "0 0 15px 15px";
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
      
      let url5 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/pvp-bracket/shuffle-${cClass}-${s2}?namespace=profile-us&locale=en_US&access_token=${accessToken}`;
      let response5 = await fetch(url5);
      let shuffleData2 = await response5.json();
      try {
        // Create HTML elements
        const shuffleTitle2 = document.createElement("h3");
        const shuffleRating2 = document.createElement("h4");
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
        container4.innerHTML = " ";
        container4.appendChild(shuffleTitle2);
        container4.appendChild(shuffleRating2);
        container4.appendChild(shufflePlayed2);
        container4.appendChild(shuffleWon2);
        container4.appendChild(shuffleLost2);

      } catch {
        err => console.error("oops!", err.message);
      }
      
      let url6 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/pvp-bracket/shuffle-${cClass}-${s3}?namespace=profile-us&locale=en_US&access_token=${accessToken}`;
      let response6 = await fetch(url6);
      let shuffleData3 = await response6.json();
      try {
        // Create HTML elements
        const shuffleTitle3 = document.createElement("h3");
        const shuffleRating3 = document.createElement("h4");
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
        container4.innerHTML = " ";
        container4.appendChild(shuffleTitle3);
        container4.appendChild(shuffleRating3);
        container4.appendChild(shufflePlayed3);
        container4.appendChild(shuffleWon3);
        container4.appendChild(shuffleLost3);

      } catch {
        err => console.error("oops!", err.message);
      }
    
  /* This code is making an HTTP request to the Blizzard API to fetch data about a World of Warcaft character's
  achievements */
      let url7 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/achievements?namespace=profile-us&locale=en_US&access_token=${accessToken}`;   
      let response7 = await fetch(url7);
      let achievementsData = await response7.json();
      try {
        // Grab achievement data from JSON file
        let gladiator,
            mercilessGladiator,
            vengefulGladiator,
            brutalGladiator,
            deadlyGladiator,
            furiousGladiator,
            relentlessGladiator,
            wrathfulGladiator,
            viciousGladiator,
            ruthlessGladiator,
            cataclysmicGladiator,
            malevolentGladiator,
            tyrannicalGladiator,
            grievousGladiator,
            pridefulGladiator,
            primalGladiator,
            wildGladiator,
            warmongeringGladiator,
            vindictiveGladiator;
        let isGlad = false;

        // Create HTML elements
        const achievementsHeader = document.createElement("h3");
        const achievementsMercilessGladiator = document.createElement("p");
        const achievementsVengefulGladiator = document.createElement("p"); 
        const achievementsBrutalGladiator = document.createElement("p");
        const achievementsDeadlyGladiator = document.createElement("p");
        const achievementsFuriousGladiator = document.createElement("p");
        const achievementsRelentlessGladiator = document.createElement("p");
        const achievementsWrathfulGladiator = document.createElement("p");
        const achievementsViciousGladiator = document.createElement("p");
        const achievementsRuthlessGladiator = document.createElement("p");
        const achievementsCataclysmicGladiator = document.createElement("p");
        const achievementsMalevolentGladiator = document.createElement("p");
        const achievementsTyrannicalGladiator = document.createElement("p");
        const achieveGrievousGladiator = document.createElement("p");
        const achievementsPridefulGladiator = document.createElement("p");
        const achievementsPrimalGladiator = document.createElement("p");
        const achievementsWildGladiator = document.createElement("p");
        const achievementsWarmongeringGladiator = document.createElement("p");
        const achievementsVindictiveGladiator = document.createElement("p");

   

        // Search the JSON file for the achievement name
      
        for (let i = 0; i < achievementsData.achievements.length; i++) {
          if (achievementsData.achievements[i].achievement.name === "Wrathful Gladiator") {
            wrathfulGladiator = await achievementsData.achievements[i].achievement.name;
          } else {
            wrathfulGladiator = `${requestCharName} is not a Wrathful Gladiator.`;
          }
        }
          /*
          if (achievementsData.achievements[i].achievement.name === "Vengeful Gladiator") {
            vengefulGladiator = achievementsData.achievements[i].achievement.name;
          } 
          if (achievementsData.achievements[i].achievement.name === "Brutal Gladiator") {
            brutalGladiator = achievementsData.achievements[i].achievement.name;
          } 
          if (achievementsData.achievements[i].achievement.name === "Deadly Gladiator") {
            deadlyGladiator = achievementsData.achievements[i].achievement.name;
          } 
          if (achievementsData.achievements[i].achievement.name === "Furious Gladiator") {
            furiousGladiator = achievementsData.achievements[i].achievement.name;
          } 
          if (achievementsData.achievements[i].achievement.name === "Relentless Gladiator") {
            relentlessGladiator = achievementsData.achievements[i].achievement.name;
          } 
          if (achievementsData.achievements[i].achievement.name === "Wrathful Gladiator") {
            wrathfulGladiator = achievementsData.achievements[i].achievement.name;
          } 
          if (achievementsData.achievements[i].achievement.name === "Vicious Gladiator") {
            viciousGladiator = achievementsData.achievements[i].achievement.name;
          } 
          if (achievementsData.achievements[i].achievement.name === "Ruthless Gladiator") {
            ruthlessGladiator = achievementsData.achievements[i].achievement.name;
          } 
          if (achievementsData.achievements[i].achievement.name === "Cataclysmic Gladiator") {
            cataclysmicGladiator = achievementsData.achievements[i].achievement.name;
          } 
          if (achievementsData.achievements[i].achievement.name === "Malevolent Gladiator") {
            malevolentGladiator = achievementsData.achievements[i].achievement.name;
          } 
          if (achievementsData.achievements[i].achievement.name === "Tyrannical Gladiator") {
            tyrannicalGladiator = achievementsData.achievements[i].achievement.name;
          } 
          if (achievementsData.achievements[i].achievement.name === "Grievous Gladiator") {
            grievousGladiator = achievementsData.achievements[i].achievement.name;
          } 
          if (achievementsData.achievements[i].achievement.name === "Prideful Gladiator") {
            pridefulGladiator = achievementsData.achievements[i].achievement.name;
          } 
          if (achievementsData.achievements[i].achievement.name === "Primal Gladiator") {
            primalGladiator = achievementsData.achievements[i].achievement.name;
          } 
          if (achievementsData.achievements[i].achievement.name === "Wild Gladiator") {
            wildGladiator = achievementsData.achievements[i].achievement.name;
          } 
          if (achievementsData.achievements[i].achievement.name === "Warmongering Gladiator") {
            warmongeringGladiator = achievementsData.achievements[i].achievement.name;
          } 
          if (achievementsData.achievements[i].achievement.name === "Vindictive Gladiator") {
            vindictiveGladiator = achievementsData.achievements[i].achievement.name;
          } else {
            vindictiveGladiator = `${requestCharName} is not a Vindictive Gladiator.`;
          }
          */
        

        // Give HTML elements the JSON data
        achievementsHeader.innerHTML = "Gladiator Titles";
        achievementsWrathfulGladiator.innerText = wrathfulGladiator;
    
        // Make reference to the HTML containers where the info will be displayed
        container5.innerHTML = " ";
        container5.appendChild(achievementsHeader);
        container5.appendChild(achievementsMercilessGladiator);
        container5.appendChild(achievementsVengefulGladiator);
        container5.appendChild(achievementsBrutalGladiator); 
        container5.appendChild(achievementsDeadlyGladiator);
        container5.appendChild(achievementsFuriousGladiator);
        container5.appendChild(achievementsRelentlessGladiator);
        container5.appendChild(achievementsWrathfulGladiator);
        container5.appendChild(achievementsViciousGladiator);
        container5.appendChild(achievementsRuthlessGladiator);
        container5.appendChild(achievementsCataclysmicGladiator);
        container5.appendChild(achievementsMalevolentGladiator);
        container5.appendChild(achievementsTyrannicalGladiator);
        container5.appendChild(achieveGrievousGladiator);
        container5.appendChild(achievementsPridefulGladiator);
        container5.appendChild(achievementsPrimalGladiator);
        container5.appendChild(achievementsWildGladiator);
        container5.appendChild(achievementsWarmongeringGladiator);
        container5.appendChild(achievementsVindictiveGladiator);

      } catch {
          err => console.error("oops! error with your glad titles container.", err.message);
      }


      

  /* This code is making an HTTP request to the Blizzard API to fetch data about a World of Warcraft
  character's personal rating history. */
      let url8 = `https://us.api.blizzard.com/profile/wow/character/${requestRealmName}/${requestCharName}/achievements/statistics?namespace=profile-us&locale=en_US&access_token=${accessToken}`;
      let response8 = await fetch(url8);
      let pvpHistoryData = await response8.json();
}



// Today's to-do list:
// fetch API endpoints for character's gladiator titles

