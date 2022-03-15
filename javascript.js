// const averagePopulation = 33000000;
// const country = 'Greece';
// const continent = 'Europe';
// const population = 10720000;
// const language = 'Greek';

// console.log(country);
// console.log(continent);
// console.log(population);

// let isIsland = false;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// console.log(language);

// let populationDivide = population / 2;
// console.log(populationDivide);

// population++;
// console.log(population);
// let populationFinland = 6000000;
// let populationGreece = 10720000;
// console.log(populationGreece >= populationFinland);

// console.log(populationGreece <= averagePopulation);
// const description = `${country} is in Europe, and its ${population} million people speak ${language}`;
// console.log(description);

// if (population > averagePopulation) {
//     console.log(`${country}'s population is above average ! 😁`);

// } else  {
//     console.log(`${country}'s population is ${belowAvarage} million below average . 😒`);
// }

// const numNeighbours = Number(prompt('How many neighbour countries does your country have ?'));
// if (numNeighbours === 1) {
//     console.log(`Only 1 border!'`);
// } else if (numNeighbours > 1) {
//     console.log(`More than 1 border`);
// } else {
//     console.log(`No borders`);
// }
//const newCountry = `Greece`
// const speaksEnglish = false
// const totalpeople = 500000001
// const notIsland = true

// if (totalpeople <= 50000000 && speaksEnglish === true && !notIsland) {
//     console.log(`You found your new home  !`);

// } else if (totalpeople >= 50000000 && speaksEnglish === true && !notIsland) {
//     console.log(`This country  have more than 50.000.000 people`);
// } else if (totalpeople <= 50000000 && speaksEnglish === false && !notIsland) {
//     console.log(`In this country dont speak English`);
// } else if (totalpeople <= 50000000 && speaksEnglish === true && notIsland === true) {
//     console.log(`This place is  Island`);
// } else {
//     console.log(`At this place dont speak english is Island and they have more people  form 50.000.000`);
// }
// const language = `hindi`;

// switch (language) {
//     case `chinese`:
//     case `mandarin`:
//         console.log(`MOST number of native speakers!`);
//         break;
//     case `spanish`:
//         console.log(`2nd place in number of native speakers`);
//         break;
//     case `english`:
//         console.log(`3rd place`);
//         break;
//     case `hindi`:
//         console.log(`Number 4`);
//         break;
//     case `arabic`:
//         console.log(`5th most spoken language`);
//         break;
//     default:
//         console.log(`Great language too :D`);
//}

//const country = `Greece`
//const population = 1110000000
// console.log(
//     `${country}'s population is ${population > 33 ? 'above' :
//         'below'} average`,
// );

/*
const massMark = 95;
const heightMark = 1.88;
const massJhon = 85;
const heightJhon = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJhon = massJhon / heightJhon ** 2;
const markHigherBMI = BMIMark > BMIJhon;


console.log(BMIMark, BMIJhon, markHigherBMI);
*/

/* Re-Challenge 1,2

const massGeo = 78;
const tallGeo = 1.88;
const massKoulis = 80;
const tallKoulis = 1.87;

const BMIGeo = massGeo / tallGeo ** 2;
const BMIKoulis = massKoulis / (tallKoulis * tallKoulis);

// const markHigherBMI = BMIGeo > BMIKoulis;

if (BMIGeo > BMIKoulis) {
    console.log(`Geo's BMI (${BMIGeo}) is higher than Koulis's (${BMIKoulis})!`);
}
else {
    console.log(`Koulis's BMI (${BMIKoulis}) is higher than Geo's (${BMIGeo})!`);
}


// console.log(BMIGeo, BMIKoulis, markHigherBMI);

*/

/* Strings and Template Literals.

const firstName = `Geo`;
const job = `Student`;
const birthYear = 1992;
const year = 2200

const Geo = `I am ${firstName},  a ${year - birthYear} year old  ${job}! `;
console.log(Geo); */

/* if/else
const age = 18;

if (age >= 18) {
    console.log(`Geo can start driving license 🚗 `);
} else {
    const yearsLeft = 18 - age;
    console.log(`Geo is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2001;
let centure;
if (birthYear <= 2000) {
    centure = 20;
} else {
    centure = 21;
}
consolelog(centure); */

/*
console.log(`9` - `5`); //4
console.log(`19` - `13` + `17`); //617
console.log(`19` - `13` + 17); //23
console.log(5 + 6 + `4` + 9 - 4 - 2); // 1143
console.log(`123` < 57); // false
*/

// console.log(21 !== 20); // !== ειναι το αντιθετο του === .
/*
//1
// const DolphinsAverageScore = (96 + 108 + 89) / 3;
// const KoalasAverageScore = (88 + 91 + 110) / 3;

console.log(DolphinsAverageScore, KoalasAverageScore);
//2 1.WinnderIsDolphins , 2
if (DolphinsAverageScore > KoalasAverageScore) {
    console.log(`The winner is Dolphins 🏆!`);
} else if (KoalasAverageScore > DolphinsAverageScore) {
    console.log(`The winner is Koalas 🏆!`);
} else if  (DolphinsAverageScore === KoalasAverageScore)
{
    console.log(`Both wins the trophy !`);
}
*/
// // Challenge Bonus 1 & 2
// const DolphinsAverageScore = (301 + 55 + 55) / 3;
// const KoalasAverageScore = (302 + 55 + 55) / 3;
// const minimumScore = 100;

// console.log(DolphinsAverageScore, KoalasAverageScore);

// if (DolphinsAverageScore > KoalasAverageScore && DolphinsAverageScore >= 100) {
//     console.log(`The winner is Dolphins 🏆!`);
// } else if (KoalasAverageScore > DolphinsAverageScore && KoalasAverageScore >= 100) {
//     console.log(`The winner is Koalas 🏆!`);
// } else if (DolphinsAverageScore === KoalasAverageScore && DolphinsAverageScore >= 100 && KoalasAverageScore >= 100) {
//     console.log(`Both wins the trophy !`);
// } else {
//     console.log(`No one wins the trophy 😭`)
// }

// const day = `friday` //if / else

// if (day === `monday`) {
//     console.log(`Plan course structure`)
//     console.log(`Go to coding meetup`)
// } else if (day === `tuesday`) {
//     console.log(`Prepare theory videos`)
// } else if (day === `wednesday` || day === `thursday`) {
//     console.log(`Write code examples`)
// } else if (day === `friday`) {
//     console.log(`Record videos`)
// } else if (day === `saturday` || day === `sunday`) {
//     console.log(`Enjoy the weekend :D`)
// } else {
//     console.log(`Not a  valid day!`)
// }
// // The switch Statement
// switch (day) {
//     case `monday`: //day === `monday`
//         console.log(`Plan course structure`)
//         console.log(`Go to coding meetup`)
//         break
//     case `tuesday`:
//         console.log(`Prepare theory videos`)
//         break
//     case `wednesday`:
//     case `thursday`:
//         console.log(`Write code examples`)
//         break
//     case `friday`:
//         console.log(`Record videos`)
//         break
//     case `saturday`:
//     case `sunday`:
//         console.log(`Enjoy the weekend :D`)
//         break
//     default:
//         console.log(`Not a  valid day!`)
// }
// const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
//  if (pay <= 49 || pay >= 301) {
//     console.log(`You must pay ${ pay } +  `)
// } else if (pay >= 50 || pay <= 300) {
//     console.log(`You must pay ${ pay } `)
// } else {
//     console.log(`This is not a correct value!`)
// }
