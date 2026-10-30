let adjective1 = prompt("Enter an adjective.");
let noun1 = prompt("Enter a noun.");
let adjective2 = prompt("Enter an adjective.");
let noun2 = prompt("Enter a noun.");
let adjective3 = prompt("Enter an adjective.");
let adjective4 = prompt("Enter an adjective.");
let noun3 = prompt("Enter a noun.");
let verb1 = prompt("Enter a past tense verb.");
let noun4 = prompt("Enter a noun.");
let adjective5 = prompt("Enter an adjective.");
let noun5 = prompt("Enter a noun.");
let verb2 = prompt("Enter a verb.");
let adjective6 = prompt("Enter an adjective.");
let noun6 = prompt("Enter a noun.");
let verb3 = prompt("Enter a verb ending in -ing.");
let noun7 = prompt("Enter a noun.");
let adjective7 = prompt("Enter an adjective.");
let verb4 = prompt("Enter a past tense verb.");
let noun8 = prompt("Enter a noun.");
let adverb1 = prompt("Enter an adverb.");
let verb5 = prompt("Enter a verb.");
let adjective8 = prompt("Enter an adjective.");
let noun9 = prompt("Enter a noun.");
let verb6 = prompt("Enter a verb ending in -ing.");
let adverb2 = prompt("Enter an adverb.");
let noun10 = prompt("Enter a noun.");

let story =
`On a(n) <strong>${adjective1}</strong> Halloween many years ago, there lived a strapping young lad named Luca. Luca was an unusually adventurous individual who absolutely loved Halloween. Every year, he would spend countless hours preparing his costume, determined to become the most impressive trick-or-treater in the entire neighborhood. This year, he decided to dress as a <strong>${adjective2}</strong> <strong>${noun1}</strong>, a costume that he believed would earn him fame, admiration, and possibly a lifetime supply of candy.

Luca was accompanied by his <strong>${adjective3}</strong> friend, Smuca, who had a rather unusual personality and an unhealthy obsession with chocolate. Smuca's costume was considerably less impressive, consisting of a <strong>${noun2}</strong> and several pieces of tape. Nevertheless, the two friends departed into the cold October night, carrying enormous bags and preparing for what they expected to be an unforgettable evening.

Their first destination was an enormous mansion located at the end of a dark and suspicious street. The building appeared extremely <strong>${adjective4}</strong>, with broken windows, creaking doors, and an enormous tree hanging over the roof. Despite these obvious warning signs, Luca confidently approached the entrance and knocked three times.

Suddenly, the door opened. Standing in the doorway was a terrifying <strong>${noun3}</strong> wearing an enormous hat. Before Luca could even say trick-or-treat, the creature <strong>${verb1}</strong> directly toward him. Luca immediately dropped his candy bag and sprinted down the driveway, while Smuca followed behind him screaming at the top of his lungs.

After several minutes of recovering from their traumatic experience, the two friends decided to visit a second house. This one appeared much more welcoming, featuring colorful decorations, glowing pumpkins, and a giant inflatable <strong>${noun4}</strong> in the front yard.

As they approached the front door, they noticed a(n) <strong>${adjective5}</strong> individual standing on the porch. The individual offered them a handful of candy before suddenly asking whether they wanted to participate in a special Halloween tradition. Luca, who was always eager to <strong>${verb2}</strong>, immediately accepted.

The individual led them around the back of the house, where an enormous <strong>${noun5}</strong> was sitting in the middle of the yard. It was surrounded by candles, mysterious symbols, and several objects that neither boy could identify. Smuca began <strong>${verb3}</strong> uncontrollably, while Luca attempted to appear brave.

Without warning, the individual pulled out a(n) <strong>${adjective6}</strong> <strong>${noun6}</strong> and pointed toward a nearby forest. He explained that a mysterious creature had been living there for hundreds of years, and that it would occasionally emerge on Halloween night to search for unsuspecting visitors.

Naturally, Luca wanted to investigate. Smuca, however, wanted nothing more than to return home and watch television. After a lengthy argument, Luca convinced his friend to accompany him into the forest.

As they walked through the trees, they heard something moving nearby. A mysterious <strong>${noun7}</strong> suddenly appeared behind a tree, staring directly at them. Luca froze in terror, while Smuca immediately began running in the opposite direction.

The creature was surprisingly <strong>${adjective7}</strong>, and it slowly approached the two boys. Luca attempted to communicate with it, but the creature simply <strong>${verb4}</strong> and disappeared into the darkness.

Confused and frightened, Luca continued deeper into the forest until he discovered an abandoned building. Sitting directly outside the entrance was a(n) <strong>${noun8}</strong>. Written across its surface were the words: 'Enter if you dare.'

Luca looked at Smuca and asked whether he should go inside. Smuca responded <strong>${adverb1}</strong> that entering the building would probably be the worst decision of their entire lives.

Unfortunately, Luca ignored this advice.

He opened the door and stepped inside. The building was completely dark, except for a small light coming from the basement. As he approached the staircase, he heard a strange voice telling him to <strong>${verb5}</strong> before it was too late.

Suddenly, the lights turned on. Standing in the middle of the room was a(n) <strong>${adjective8}</strong> <strong>${noun9}</strong>, surrounded by dozens of Halloween decorations. Smuca, who had finally caught up, was <strong>${verb6}</strong> toward the nearest exit.

Then, without warning, a loud explosion echoed throughout the building. Both boys screamed <strong>${adverb2}</strong> and ran outside, where they discovered that the entire forest had somehow transformed into an enormous Halloween carnival.

There were rides, games, mountains of candy, and even a giant <strong>${noun10}</strong> handing out free chocolate.

After everything they had experienced, Luca and Smuca decided that they had finally found the greatest Halloween celebration in history. They spent the remainder of the evening collecting candy, riding attractions, and telling everyone about their unbelievable adventure.

Eventually, they returned home exhausted, with enormous bags of candy and stories that nobody would ever believe.

And although they promised never to enter another suspicious building again, both boys secretly hoped that next Halloween would be even more exciting.

The End.`;

let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;