var heading = document.getElementById("title");

var executeButton = document.getElementById("executeButton");

var outputSubhead = document.getElementById("main")
var outputParagraph1 = document.getElementById("outputText1");
var outputParagraph2 = document.getElementById("outputText2");
var inputElement1 = document.getElementById("nameInput");
var inputElement = document.getElementById("bdayInput");

let previousBackgroundColorClass = null;
let currentBackgroundColorClass = null;

var horoscopeDefs = [
  "*A horoscope is an astrological chart or diagram representing the positions of the Sun, Moon, planets, astrological aspects and sensitive angles at the time of an event, such as the moment of a person's birth.*",
  "*A horoscope is an astrological forecast that provides insights into an individual's personality, character, and life events based on the positions of celestial bodies, such as the planets and stars, at the time of their birth.*",
  "*A horoscope is like a cosmic blueprint that outlines a person's strengths, weaknesses, potential challenges, and opportunities, offering guidance on various aspects of life, including love, career, and finances.*",
  "*A horoscope can be viewed as a celestial personality profile, revealing a person's intrinsic traits and tendencies according to their astrological sign, helping them better understand themselves and their relationships with others.*",
  "*A horoscope is like an astronomical snapshot that captures the positions of celestial objects at a particular moment, especially at the time of a person's birth, and serves as a map for astrologers to analyze and provide insights into their life journey and potential experiences.*"
  ]

var greetings = [
  "🍀 Today is a good day!", 
  "👏 Expect great things today.", 
  "🌅 A new opportunity is on the horizon...", 
  "🧖‍♀️ Take a moment to relax and unwind.", 
  "🤞 Trust your instincts in decision-making...", 
  "👯 Connect with an old friend today!"]



executeButton.addEventListener("click", generateHoroscope);
title.addEventListener("click", refreshPage);

function refreshPage() {
  location.reload();
}

function getRandomDef() {
  var randomDefIndex = Math.floor(Math.random() * 5);
  return horoscopeDefs[randomDefIndex];
}

function getRandomGreeting() {
  var randomGreetIndex = Math.floor(Math.random() * 6);
  return greetings[randomGreetIndex];
}

window.addEventListener("load", function() {
  var randomDef = getRandomDef();
  var randomGreeting = getRandomGreeting();
  document.getElementById("outputText1").textContent = randomDef;
  document.getElementById("outputText2").textContent = randomGreeting;
  previousBackgroundColorClass = "defaultColor";

})


function generateTodaysHoroscope() {
  var todaysHoroscope = [
    "Your practical and grounded nature will serve you well today. Focus on your responsibilities, and you'll find stability and comfort in your daily routines.",
    "Today, your determination and energy are at their peak. It's an excellent time to tackle challenging tasks and make progress in your goals. Don't be afraid to take the lead and assert yourself.",
    "Communication is key for you today. Express yourself clearly and listen attentively to others. You may discover new and exciting information that could lead to great opportunities.",
    "You should pay attention to your emotions today. Trust your instincts and make choices that align with your feelings. This will lead to greater harmony and fulfillment.",
    "Your natural charisma is on full display today. Use your charm and leadership qualities to inspire and motivate others. It's a great day for social interactions and networking.",
    "Focus on the details and organization today. Your attention to precision will help you overcome challenges and make significant progress in your projects.",
    "You should embrace balance and harmony in your relationships today. Seek compromise and find common ground to enhance your personal and professional connections.",
    "You may experience intense emotions today. Use this energy to transform and reinvent aspects of your life. It's a day for personal growth and self-discovery.",
    "You are in an adventurous mood. Explore new horizons, whether it's through travel or expanding your knowledge. Embrace opportunities for personal and intellectual growth.",
    "You should focus on your long-term goals and ambitions today. Your disciplined approach will help you make steady progress toward your objectives.",
    "Your innovative and forward-thinking nature shines today. Embrace change and unconventional ideas. Your unique perspective can lead to breakthroughs.",
    "You should pay attention to your intuition and dreams today. Your subconscious mind holds valuable insights. Trust your inner guidance for solutions to any challenges."
    ]

  var randomToday = Math.floor(Math.random() * 12);
  return todaysHoroscope[randomToday];
}

function restyleBackgroundColor(newClass) {
  if (previousBackgroundColorClass) {
    document.body.classList.remove(previousBackgroundColorClass);
  }
  document.body.classList.add(newClass);
  
  previousBackgroundColorClass = newClass; 
  currentBackgroundColorClass = newClass;
}


function generateHoroscope() {

  outputSubhead.classList.toggle("specialTitle");

  var nameInputText = inputElement1.value;
  console.log(nameInputText);
  var bdayInputText = inputElement.value;
  console.log(bdayInputText);
  var currentInputNameAsNumber = parseFloat(nameInputText);
  console.log(currentInputNameAsNumber);
  var currentInputBdayAsNumber = parseInt(bdayInputText);
  console.log(currentInputBdayAsNumber);

  main.classList.add("nameSign");

//ARIES
  if ((currentInputBdayAsNumber >= 321 && currentInputBdayAsNumber <= 331) || (currentInputBdayAsNumber >= 401 && currentInputBdayAsNumber <= 419)) {
    restyleBackgroundColor("ariesColor");
    // previousBackgroundColorClass = "ariesColor";

   	outputSubhead.innerHTML = nameInputText + ", you are an Aries!";
    outputParagraph1.innerHTML = "♈︎ As the first sign of the zodiac, Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations and they'll make sure they always come out on top!";

    outputParagraph2.innerHTML = "🔮 " + generateTodaysHoroscope();
  }

//TAURUS
  else if ((currentInputBdayAsNumber >= 420 && currentInputBdayAsNumber <= 430) || (currentInputBdayAsNumber >= 501 && currentInputBdayAsNumber <= 520)) {
    restyleBackgroundColor("taurusColor");

    outputSubhead.innerHTML = nameInputText + ", you are a Taurus!";
    outputParagraph1.innerHTML = "♉︎ What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread? Why Taurus, of course! Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.";

    outputParagraph2.innerHTML = "🔮 " + generateTodaysHoroscope();
  }

//GEMINI
  else if ((currentInputBdayAsNumber >= 521 && currentInputBdayAsNumber <= 531) || (currentInputBdayAsNumber >= 601 && currentInputBdayAsNumber <= 620 )) {
    restyleBackgroundColor("geminiColor");

    outputSubhead.innerHTML = nameInputText + ", you are a Gemini!";
    outputParagraph1.innerHTML = "♊︎ Have you ever been so busy that you wished you could clone yourself just to get everything done? That's the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself. You know, NBD!";

    outputParagraph2.innerHTML = "🔮 " + generateTodaysHoroscope();
  }

//CANCER
  else if ((currentInputBdayAsNumber >= 621 && currentInputBdayAsNumber <= 631) || (currentInputBdayAsNumber >=701 && currentInputBdayAsNumber <= 722)) {
    restyleBackgroundColor("cancerColor");

    outputSubhead.innerHTML = nameInputText + ", you are a Cancer!";
    outputParagraph1.innerHTML = "♋︎ Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But—just like the hard-shelled crustaceans—this water sign is willing to do whatever it takes to protect itself emotionally. In order to get to know this sign, you're going to need to establish trust!";

    outputParagraph2.innerHTML = "🔮 " + generateTodaysHoroscope();
  }

//LEO
  else if ((currentInputBdayAsNumber >= 723 && currentInputBdayAsNumber <= 731) || ( currentInputBdayAsNumber >= 801 && currentInputBdayAsNumber <= 822 )) {
    restyleBackgroundColor("leoColor");

    outputSubhead.innerHTML = nameInputText + ", you are a Leo!";
    outputParagraph1.innerHTML = "♌︎ Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves.";

    outputParagraph2.innerHTML = "🔮 " + generateTodaysHoroscope();
  }

//VIRGO
  else if ((currentInputBdayAsNumber >= 823 && currentInputBdayAsNumber <= 831) || (currentInputBdayAsNumber >=901 && currentInputBdayAsNumber <= 922 )) {
    restyleBackgroundColor("virgoColor");

    outputSubhead.innerHTML = nameInputText + ", you are a Virgo!";
    outputParagraph1.innerHTML = "♍︎ You know the expression, 'if you want something done, give it to a busy person?' Well, that definitely is the Virgo anthem. Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.";

    outputParagraph2.innerHTML = "🔮 " + generateTodaysHoroscope();
  }

//LIBRA
  else if ((currentInputBdayAsNumber >= 923 && currentInputBdayAsNumber <= 930) || (currentInputBdayAsNumber >=1001 && currentInputBdayAsNumber <= 1022 )) {
    restyleBackgroundColor("libraColor");

    outputSubhead.innerHTML = nameInputText + ", you are a Libra!";
    outputParagraph1.innerHTML = "♎︎ Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart.";

    outputParagraph2.innerHTML = "🔮 " + generateTodaysHoroscope();
  }

//SCORPIO
  else if ((currentInputBdayAsNumber >= 1023 && currentInputBdayAsNumber <= 1031) || (currentInputBdayAsNumber >= 1101 && currentInputBdayAsNumber <= 1121)) {
    restyleBackgroundColor("scorpioColor");

    outputSubhead.innerHTML = nameInputText + ", you are a Scorpio!";
    outputParagraph1.innerHTML = "♏︎ Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac.";

    outputParagraph2.innerHTML = "🔮 " + generateTodaysHoroscope();
  }

//SAGITTARIUS
  else if ((currentInputBdayAsNumber >= 1122 && currentInputBdayAsNumber <= 1130) || (currentInputBdayAsNumber >= 1201 && currentInputBdayAsNumber <= 1221)) {
    restyleBackgroundColor("sagittariusColor");

    outputSubhead.innerHTML = nameInputText + ", you are a Sagittarius!";
    outputParagraph1.innerHTML = "♐︎ Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.";

    outputParagraph2.innerHTML = "🔮 " + generateTodaysHoroscope();
  }

//CAPRICORN
  else if ((currentInputBdayAsNumber >= 1222 && currentInputBdayAsNumber <= 1231) || (currentInputBdayAsNumber <= 119 && currentInputBdayAsNumber >= 101)) {
    restyleBackgroundColor("capricornColor");

    outputSubhead.innerHTML = nameInputText + ", you are a Capricorn!";
    outputParagraph1.innerHTML = "♑︎ What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.";

    outputParagraph2.innerHTML = "🔮 " + generateTodaysHoroscope();
  }

//AQUARIUS
  else if ((currentInputBdayAsNumber >= 120 && currentInputBdayAsNumber <= 131) || (currentInputBdayAsNumber >= 201 && currentInputBdayAsNumber <= 218)) {
    restyleBackgroundColor("aquariusColor");

    outputSubhead.innerHTML = nameInputText + ", you are an Aquarius!";
    outputParagraph1.innerHTML = "♒︎ Despite the 'aqua' in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place.";

    outputParagraph2.innerHTML = "🔮 " + generateTodaysHoroscope();
  }

//PISCES
  else if ((currentInputBdayAsNumber >= 219 && currentInputBdayAsNumber <= 229) || (currentInputBdayAsNumber >= 301 && currentInputBdayAsNumber <= 320)) {
    restyleBackgroundColor("piscesColor");

    outputSubhead.innerHTML = nameInputText + ", you are a Pisces!";
    outputParagraph1.innerHTML = "♓︎ If you looked up the word 'psychic' in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and that’s because it’s the last of the last. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality.";

    outputParagraph2.innerHTML = "🔮 " + generateTodaysHoroscope();
  }

  else {
    restyleBackgroundColor("invalidColor");
    outputSubhead.innerHTML = "Please enter valid details! 😡";
  }

}







