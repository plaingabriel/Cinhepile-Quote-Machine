// Quotes matrix
const quotes = [
  [
    "I am not in danger, Skyler. I am the danger.",
    "Walter White",
    "./images/WalterWhite.jpg",
  ],
  [
    "Chaos isn't a pit. Chaos is a ladder.",
    "Petyr 'Littlefinger' Baelish",
    "./images/Littlefinger.jpg",
  ],
  [
    "You're a disease, and I'm the cure.",
    "Marion Cobretti",
    "./images/MarionCobretti.jpg",
  ],
  [
    "I'm gonna make him an offer he can't refuse.",
    "Vito Corleone",
    "./images/VitoCorleone.jpg",
  ],
  ["Hasta la vista, baby.", "Terminator", "./images/Terminator.jpg"],
  ["You talkin' to me?", "Travis Bickle", "./images/TravisBickle.jpg"],
  [
    "I Love the Smell of Napalm in the Morning.",
    "Lt. Colonel Bill Kilgore",
    "./images/BillKilgore.jpg",
  ],
  ["Rosebud.", "Charles Foster Kane", "./images/CharlesFosterKane.jpg"],
  [
    "Say hello to my little friend!",
    "Tony Montana",
    "./images/TonyMontana.jpg",
  ],
  ["Mejor afuera que adentro", "Shrek", "./images/Shrek.jpg"],
  ["That is the right answer, alchemist.", "The Truth", "./images/Truth.png"],
  [
    "I may have lost an eye, but I gained a dragon.",
    "Aemond Targaryen",
    "./images/AemondTargaryen.jpg",
  ],
  [
    "Oceans rise. Empires fall. It's much harder when it's all your call.",
    "King George III",
    "./images/KingGeorgeIII.jpg",
  ],
];

// Person object
type Person = {
  quote: String;
  author: String;
  url: String;
};

// Persons empty arr
let P: Person[] = [];

// Fill the empty arr
for (let i = 0; i < quotes.length; i++) {
  let person: Person = {
    quote: quotes[i][0],
    author: quotes[i][1],
    url: quotes[i][2],
  };
  P.push(person);
}

export default P;
