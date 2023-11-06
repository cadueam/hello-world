const country = 'Brazil'
const continent = 'South America'
let population = 55;

console.log(country)
console.log(continent)
console.log(population)

let isIsland = false;
let language = 'Portuguese'




console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)


console.log(population/2);
population++;
console.log(population);
console.log(population > 6);
console.log(population > 33);

let description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description)

if (population > 33) {
    console.log(`${country}'s population is above average`)    
} else {
    console.log(`${country}'s population is ${33 - population} million below average`)


var a = '9' - '5' ; // 4
var b = '19' - '13' + '17' // 617
var c = '19' - '13' + 17 // 23
var d = '123' < 57; false 
var e = 5 + 6 + '4' + 9 - 4 - 2; //1143

console.log(a,b,c,d,e)


var numNeighbours = 1;
if (numNeighbours == 1 ) {
    console.log('Only 1 border!')
} else if (numNeighbours > 1) {
    console.log('More than 1 border!')
} else {
    console.log('No Borders')
}
 

if (language === 'Portuguese' && population < 50 && !isIsland ) {
    console.log(`You should live in ${country} :)`)    
} else {
    console.log(`${country} does not meet your criteria :(`)
}

switch (language) {
    case 'chinese':
        console.log('Most number of native speakers!')
        break;
    case 'spanish':
        console.log('2nd place in number of natives speakers')
        break;
    case 'Portuguese':
        console.log('Amazing')

    default:
        break;
}

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} avarege`)

var massMark = 78;
var heigthMark = 1.69;
var massJohn = 92;
var heigthJohn = 1.95;


var BMIMark = massMark / (heigthMark * heigthMark);
var BMIJohn = massJohn / (heigthJohn * heigthJohn);

console.log(BMIJohn, BMIMark)

var markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI)


if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
  } else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
  }




  var scoreDolphins = (96 + 108 + 89) / 3
  var scoreKoalas = (88 + 91 + 110) / 3

  if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy")
  } else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy")
  } else {
    console.log("Both win the trophy")
  }



const bill = 400
var tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20; 



console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)


function describeCountry(country, population, capitalCity) {
    // var country = input('What is your country?');
    // var population = input(`What is the population of ${country} ?`);
    // var capitalCity = input(`What is the capital of ${country} ?`);
     
    return `${country} has ${population} million people and it's capital is ${capitalCity}`; 
}

const textDescribed = describeCountry('Brazil', 7, 'Brasília');

console.log(textDescribed)


function percentageOfWorld1(population){
    return (population / 7900) * 100
    
}

const percentageOfWorld2 = function(population) {
    
    return (population / 7900) * 100
}


const percPortugal1 = percentageOfWorld2(10)
const china = percentageOfWorld2(1441)
const usa = percentageOfWorld2(332)

console.log(percPortugal1,china,usa)


const percentageOfWorld3 = (population) => {
    return (population / 7900) * 100
}

const percBrazil = percentageOfWorld3(7)

console.log(percBrazil)

const describePopulation = (country, population) => {
    return `${country} has ${population} million people, wich is about ${(population / 7900) * 100}% of the world! `
}
const brazilPopulation = describePopulation('Brazil', 7)
const usaPopulation = describePopulation('Usa', 25)



console.log(brazilPopulation);
console.log(usaPopulation)



const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3
}
var scoreDolphins = calcAverage(44,23,71);
var scoreKoalas = calcAverage(65,54,49);

function checkWinner(avgDolphins,avgKoalas){
    var avgDolphins = scoreDolphins
    var avgKoalas = scoreKoalas

    if (avgDolphins > avgKoalas && avgDolphins > (avgKoalas * 2)) {
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`
    } else if (avgKoalas > avgDolphins && avgKoalas > (avgDolphins * 2)) {
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`
    } else {
        return `No team has met the winning conditions`
    }
}

console.log(scoreDolphins, scoreKoalas,checkWinner())





function calcTip(bill){
    var tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    tips.push(tip)
    return tip
}

var bills = [125, 555, 44];
var tips = [];


var bill1 = calcTip(bills[0])
var bill2 = calcTip(bills[1])
var bill3 = calcTip(bills[2])

var totals = [bills[0]+tips[0],bills[1]+tips[1], bills[2]+tips[2] ];

console.log(bill1, bill2, bill3)
console.log(tips)
console.log(totals)


const jonas = {
    friends: ['Michael' , 'Sarah', 'Pedro']
}



console.log(`Jonas has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]} `)

// twopointers isPalindrome :)

const isPalindrome = (stringPal) => {
    var right = 0;
    var left = stringPal.length-1

    while (left < right) {
        if (stringPal[left] !== stringPal[right]) {
            return false;
        }

        left++;
        right--;
    }
    
    return true

}

console.log(isPalindrome("abba"))