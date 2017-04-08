/*jshint esversion: 6*/
/* Step 1
 *
 * Declare a variable named "unicorn"
 * then set it's value to null;
 *
 */
const unicorn = null;
/* Step 2
 *
 * Declare a variable named "videogame_system"
 * then assign it to be the value of "Atari"
 *
 */
const videogame_system = "Atari";
/* Step 3
 *
 * Declare a variable named "sahara_animal"
 * and assign the value of sahara_animal to "The Addax"
 *
 */
const sahara_animal = "The Addax";
/* Step 4
 *
 * Declare a variable named "planets"
 * and assign the value of planets to an array containing
 * each planet in our solar system, in order of distance from the sun
 * Capitalize the names.
 */
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
/* Step 5
 *
 * Declare a variable named "galilean_moons"
 * and assign the value of galilean_moons to an array containing
 * each galilean moon of Jupiter
 *
 */
const galilean_moons = ["Io", "Europa", "Ganymede", "Callisto"];
/* Step 6 φ
 *
 * Declare a variable named "golden_ratio"
 * and assign the value of golden_ratio to 1.61803398874
 *
 */
const golden_ratio = 1.61803398874;
/* Step 7
 *
 * Declare a variable named "earths_water_composition"
 * and assign the value of earths_water_composition to 0.71
 *
 */
const earths_water_composition = 0.71;
/* Step 8
 *
 * Declare a variable named "club_name"
 * and assign the value of club_name to "Fight Club"
 *
 */
const club_name = "Fight Club";
/* Step 9
 *
 * Define a literal object named "gender"
 * with properties and values set to:
 *
 *   female  => "female"
 *   male    => "male"
 *   unknown => undefined
 */
const gender = {
  female : "female",
  male : "male",
  unknown : undefined
};
/* Step 10
 *
 *
 * Define a literal object named "princess_leia"
 * with properties and values set to:
 *
 *   name    => "Leia Organa"
 *   money   => 890
 *   age     => 20
 *   gender  => gender.female
 *
 */
const princess_leia = {
  name : "Leia Organa",
  money : 890,
  age : 20,
  gender : gender.female
};
/* Step 11
 *
 * Define a literal object named "domains"
 * with properties and values set to:
 *
 *   ycombinator.com                  => "198.41.190.47"
 *   laughingsquid.com                => "162.159.247.97"
 *   slumlordhosting.com              => "198.61.179.126"
 *   jsonformatter.curiousconcept.com => "104.28.5.70"
 *
 */
const domains = {
  "ycombinator.com" : "198.41.190.47",
  "laughingsquid.com" : "162.159.247.97",
  "slumlordhosting.com" : "198.61.179.126",
  "jsonformatter.curiousconcept.com" : "104.28.5.70"
};
/* Step 12
 *
 * Define a literal object named "browsers"
 * with properties and values set to:
 *
 *   Chromium   => "google.com"
 *   Safari     => "apple.com"
 *   Opera      => "opera.com"
 *   Firefox    => "mozilla.org"
 *   Sleipnir   => "fenrir-inc.com"
 *   Konqueror  => "konqueror.org"
 *
 */
const browsers = {
  Chromium : "google.com",
  Safari : "apple.com",
  Opera : "opera.com",
  Firefox : "mozilla.org",
  Sleipnir : "fenrir-inc.com",
  Konqueror : "konqueror.org"
};

/* Step 13
 *
 * Define a literal object named "rainbow"
 * with properties and values set to:
 *
 *  colors    => [LITERAL OBJECT]
 *                  red       => "#F0280A"
 *                  orange    => "#FF8800"
 *                  yellow    => "#FFDD00"
 *                  green     => "#51AB0C"
 *                  blue      => "#1593ED"
 *                  indigo    => "#5215ED"
 *                  violet    => "#A915ED"
 *  isDouble  => true
 *
 */
const rainbow = {
  colors: {
    red : "#F0280A",
    orange : "#FF8800",
    yellow : "#FFDD00",
    green : "#51AB0C",
    blue : "#1593ED",
    indigo : "#5215ED",
    violet : "#A915ED"
  },
  isDouble : true
};


/* Step 14
 *
 * Declare an array named "linuxFlavors"
 * with the following values:
 *
 * "Gentoo"
 * "Fedora"
 * "Debian"
 * "Slackware"
 * "Red Hat"
 * "Bieber Linux"
 *
 */
const linuxFlavors = ["Gentoo", "Fedora", "Debian", "Slackware", "Red Hat", "Bieber Linux"];
/* Step 15
 *
 * Declare an array named "DNA" with the
 * following values:
 *
 * "nucleatides"
 * "guanine"
 * "adenine"
 * "thymine"
 * "cytosine"
 *
 */
const DNA = ["nucleatides", "guanine", "adenine", "thymine", "cytosine"];
/* Step 16
 *
 * Define a literal object named "laptopCosts"
 * with properties and values set to:
 *
 * MacBook      => 1500
 * Alienware    => 2500
 * HP           => 499
 * Surface      => 320
 *
 */
const laptopCosts = {
  MacBook : 1500,
  Alienware : 2500,
  HP : 499,
  Surface : 320
};
/* Step 17
 *
 * Declare an array named "livingOrganismClassification"
 * with the following values:
 *
 * "Kingdom"
 * "Phylum"
 * "Class"
 * "Order"
 * "Family"
 * "Genus"
 * "Species"
 *
 */
const livingOrganismClassification = ["Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"];
/* Step 18
 *
 * Declare an array named "scmList" with
 * the following values:
 *
 * "git"
 * "svn"
 * "mercurial"
 * "bazaar"
 * "cvs"
 *
 */
const scmList = ["git", "svn", "mercurial", "bazaar", "cvs"];
/* Step 19
 *
 * Define a literal object named "beers" with
 * properties and values set to:
 *
 * IPA          => "Ale"
 * Lager        => "Strong"
 * Heffeweisen  => "German"
 * Stout        => [Array]
 *                  "Thick"
 *                  "Dark"
 * Porter       => "Bitter"
 * Ale          => [Array]
 *                  "Light"
 *                  "Golden"
 *
 */
const beers = {
  IPA : "Ale",
  Lager : "Strong",
  Heffeweisen : "German",
  Stout : ["Thick", "Dark"],
  Porter : "Bitter",
  Ale: ["Light", "Golden"]
};
/* Step 20
 *
 * Define a function named 'sahara_river'
 * that returns the string 'Nile River'
 *
 * @return {String}
 *
 */
const sahara_river = () => 'Nile River';
/* Step 21
 *
 * Define a function named "addNumbers"
 * that returns the sum of two numbers
 *
 * @param {Number}
 * @param {Number}
 * @return {Number}
 *
 */
const addNumbers = (x, y) => x + y;
/* Step 22
 *
 * Define a function named "installLinux"
 * that takes a type of Linux as a parameter,
 * checks if it exists in "linuxFlavors" and
 * returns success or failure
 *
 * @param {String}
 * @return {Bool}
 *
 */
const installLinux = (string) => {
  if (linuxFlavors.indexOf(string) === -1) {
    return false;
  } else {
    return true;
  }
};
/* Step 23
 *
 * Define a function named "drink" that takes
 * a type of beer as a paramater. If it is not
 * a valid type of beer as defined in "beers",
 * return false. If it is valid, return the following phrases:
 *
 * "This {beerName} is {beerDescription}."
 *
 * Or, if there are multiple descriptions:
 *
 * "This {beerName is {beerDescription1} and {beerDescription2} and..."
 *
 * @param {String}
 * @return {Bool when False, String when True}
 *
 */
const drink = (beerName) => {
  if (beers.hasOwnProperty(beerName)) {
    if (Array.isArray(beers[beerName])) {
      return `This ${beerName} is ${beers[beerName][0]} and ${beers[beerName][1]}.`;
    } else {
      return `This ${beerName} is ${beers[beerName]}.`;
    }
  } else {
    return false;
  }
};
/* Step 24
 *
 * Define a function named "browseURL" that takes
 * a browser and validates it, as defined by "browsers"
 * If the browser doesn't exist, return false.
 * If the browser exists, return the value which is a partial URL.
 *
 * @param {String}
 * @return {String if true else return false}
 *
 */
const browseURL = (urlString) => {
  if(browsers.hasOwnProperty(urlString)) {
    return browsers[urlString];
  } else {
    return false;
  }
};
/* Step 25
 *
 * Define a function named "listLivingOrgClass" that
 * returns an HTML-formatted unordered list (<ul>) of all
 * living organism classifications as an list element(<li>)
 *
 * @return {String}
 *
 */
const listLivingOrgClass = () => {
  let htmlFormat = '<ul>';
  for(let i = 0; i < livingOrganismClassification.length; i++) {
    htmlFormat += `<li>${livingOrganismClassification[i]}</li>`;
  }
  htmlFormat += '</ul>';
  return htmlFormat;
};
/* Step 26
 *
 * Define a function named "favoritePlanet" that
 * takes in the person's current planet and validates
 * that the planet exists. If it doesn't, return the
 * following message:
 *
 * "{currentPlanet} is not a planet!"
 *
 * If the planet does exist, select a different, random
 * planet from the "planets" variable. Once selected,
 * return the following message:
 *
 * "I'm from {currentPlanet}, but I wish I could go to {randomPlanet}."
 *
 * @param {String}
 * @return {String}
 *
 */
const favoritePlanet = (planetStr) => {
  if(planets.indexOf(planetStr) !== -1) {
    return `I'm from ${planetStr}, but I wish I could go to ${planets[Math.floor(Math.random() * planets.length)]}.`;
  } else {
    return `${planetStr} is not a planet!`;
  }
};
/* Step 27
 *
 * Define a class named "Person" that has properties for
 * "name," "money," "age," and "gender." Pass values for
 * all these properies in the constructor. Create methods
 * named "spendMoney" and "earnMoney" that each take an
 * amount of money and add or subtract them to this
 * person's money.
 *
 * class
 *   Person
 * properties
 *   @param {String} name
 *   @param {String} money
 *   @param {String} age
 *   @param {String} gender
 *
 * methods
 *   spendMoney
 *   earnMoney
 *
 */
function Person(name, money, age, gender) {
  this.name = name;
  this.money = money;
  this.age = age;
  this.gender = gender;
}
Person.prototype.spendMoney = function(amount) {
  return this.money -= amount;
};

Person.prototype.earnMoney = function(amount) {
  return this.money += amount;
};

/* Step 28
 *
 * Define a function named "purchaseLaptop" that takes
 * a laptop as a parameter. If the laptop is valid as
 * defined in "laptopCosts" then return the cost as a string. Otherwise,
 * return -1
 *
 * @param {String}
 * @return {String}
 *
 */
const purchaseLaptop = (lapTopStr) => {
  if (laptopCosts.hasOwnProperty(lapTopStr)) {
    return String(laptopCosts[lapTopStr]);
  } else {
    return -1;
  }
};

/* Step 29
 *
 * Define a function named "canTalkAbout" that takes
 * a club as a parameter. Return true if you can
 * talk about the club and false if the club passed
 * in has the same value as "club_name"
 *
 * @param {String}
 * @return {Bool}
 *
 */
const canTalkAbout = (clubName) => {
  if (clubName === club_name) {
    return false;
  } else {
    return true;
  }
};
/* Step 30
 *
 * Define an ES5 class named "Pen" with a property for
 * color and a class method named "write" that takes
 * a message string as a parameter and returns the
 * string back with the pen's color added to the
 * beginning of the string
 *
 * example: "{color}: {Message passed in}"
 *
 * class
 *   Pen
 *
 * properties
 *   @param {String} color
 *
 * methods
 *   write
 *
 */
function Pen(color) {
  this.color = color;
}
Pen.prototype.write = function(msgStr) {
  return `${this.color}: ${msgStr}`;
};

/* Step 31
 *
 * Define an ES5 class named "Garden" with a property for
 * the number of plants and whether it was recently
 * watered.
 *
 * Define a class method named "water" which
 * sets the recently watered property to true
 *
 * Define class method named "grow" which adds a plant to
 * the garden if it was recently watered and exhausts the water.
 * If this method is called and the 'isWatered' property is
 * false, it should return false;
 *
 * class
 *   Garden
 *
 * properties
 *   @param {Number} plantsTotal
 *   @property {Bool:Not Passed as Argument - Default Value FALSE} isWatered
 *
 * methods
 *   water
 *   grow
 *
 */
function Garden(plantsTotal) {
  this.plantsTotal = plantsTotal;
  this.isWatered = false;
}

Garden.prototype.water = function() {
  this.isWatered = true;
};

Garden.prototype.grow = function() {
  if (this.isWatered) {
    this.plantsTotal ++;
    this.isWatered = false;
  } else {
    return false;
  }
};
/* Step 32
 *
 * Define an ES5 class named "SolarSystem" with a property
 * "planets" that is initialized as an empty array. Add
 * a method "addPlanet" that adds a planet to the list
 * and a method "removePlanet" that removes a planet.
 *
 * class
 *   SolarSystem
 * properties
 *   planets
 * methods
 *   addPlanet
 *   removePlanet
 *
 */
function SolarSystem() {
  this.planets = [];
}

SolarSystem.prototype.addPlanet = function (planet) {
  this.planets.push(planet);
};
SolarSystem.prototype.removePlanet = function (planet) {
  this.planets.splice(this.planets.indexOf(planet), 1);
};
/* Step 33
 *
 * Define an ES5 class named "PrincessLeia" that is a subclass of "Person"
 * with properties "name," "money," "age," "gender," and
 * "isInTrouble"(initialized as null)
 *
 * Add a method "shootsGun" that returns a message
 * "Leia shoots her gun wildly"
 * and sets the isInTrouble property to FALSE
 *
 * Add a method "getsInTrouble" that returns a message
 * "Help me Obi-wan Kenobi, you're my only hope"
 * and sets the property 'isInTroube' to TRUE
 *
 * Add a method "marries" that takes a prospective
 * love interest and returns true for "Han Solo" or false for anyone
 * else.
 *
 * In the 'marries' method - Add a message of disapproval for "Luke Skywalker"
 * "Gross!"
 *
 *
 * class
 *   PrincessLeia
 * properties
 *   isInTrouble
 * methods
 *   shootsGun
 *   getsInTrouble
 *   marries
 *
 */
function PrincessLeia(name, money, age, gender) {
  Person.call(this, name, money, age, gender);
  this.isInTrouble = null;
}
PrincessLeia.prototype = Object.create(Person.prototype, {
  constructor : PrincessLeia
});

PrincessLeia.prototype.shootsGun = function() {
  this.isInTrouble = false;
  return "Leia shoots her gun wildly";
};

PrincessLeia.prototype.getsInTrouble = function () {
  this.isInTrouble = true;
  return "Help me Obi-wan Kenobi, you're my only hope";
};

PrincessLeia.prototype.marries = function(loveInterest) {
  if (loveInterest === "Han Solo") {
    return true;
  } else {
    if (loveInterest === "Luke Skywalker") {
      return "Gross!";
    }
    return false;
  }
};


/* Step 34
 *
 * Define an ES5 class named "Stapler" with properties "color"
 * and "maxPapers". Add a method "staplePapers" that accepts a
 * number of papers as a parameter and returns true if the
 * papers are less than or equal to the papers and false
 * if there are too many papers to staple.
 *
 * class
 *   Stapler
 * properties
 *   color
 *   maxPapers
 * methods
 *   staplePapers
 *
 */
function Stapler(color, maxPapers) {
  this.color = color;
  this.maxPapers = maxPapers;
}

Stapler.prototype.staplePapers = function(numOfPapers) {
  if (numOfPapers <= this.maxPapers) {
    return true;
  } else {
    return false;
  }
};

/* Step 35
 *
 * Define an ES5 class named "Scientist" that extends the Person Class that takes
 * name, money, age, and gender as well as new instance properties
 * "disciplines" and "discoveries" which initializes as empty arrays.
 *
 * Add a method named 'addDiscipline' that takes a string as an argument and
 * adds it to the discipline property. Return the value of the discipline property
 *
 * Add a method named 'checkDisciple' that takes a string as an argument and
 * checks if the argument can be found in the discipline property. Return false
 * if it is not found otherwise return back true.
 *
 * Add a method named 'addDiscovery' that takes a string as an argument and
 * adds it to the discoveries property. Return back the contents of the discoveries
 * property as a String made up of all the elements found see below
 *
 * examples:
 * ["Gravity"] will be returned as:
 * "I discovered Gravity."
 *
 * ["Gravity", "Theory of Relativity"] will be returned as:
 * "I discovered Gravity and Theory of Relativity."
 *
 * ["Gravity", "Theory of Relativity", "Jesus Christ"] will be returned as:
 *       "I discovered Gravity, Theory of Relativity, and Jesus Christ."
 *
 * class
 *   Scientist
 * properties
 *   disciplines
 *   discoveries
 * methods
 *   addDiscipline
 *   checkDiscipline
 *   addDiscovery
 *
 */
function Scientist(name, money, age, gender) {
  Person.call(this, name, money, age, gender);
  this.disciplines = [];
  this.discoveries = [];
}

Scientist.prototype = Object.create(Person.prototype, {
  constructor : Scientist
});

Scientist.prototype.addDiscipline = function(newDiscp) {
  this.disciplines.push(newDiscp);
  return this.disciplines;
};

Scientist.prototype.checkDiscipline = function(disciple) {
  if (this.disciplines.indexOf(disciple) !== -1) {
    return true;
  } else {
    return false;
  }
};

Scientist.prototype.addDiscovery = function(discovery) {
  this.discoveries.push(discovery);
  let retStr = 'I discovered ';
  if (this.discoveries.length === 1) {
    retStr += `${this.discoveries[0]}.`;
    return retStr;
  } else if (this.discoveries.length === 2) {
    retStr += `${this.discoveries[0]} and ${this.discoveries[1]}.`;
    return retStr;
  } else {
    retStr += `${this.discoveries[0]}, `;
    for (var i = 1; i < this.discoveries.length - 1; i++) {
      retStr += `${this.discoveries[i]}, `;
    }
    retStr += `and ${this.discoveries[this.discoveries.length - 1]}.`;
    return retStr;
  }
};

/* Step 36
 *B
 * Define an ES5 class named "BankAccount" that has properties
 * "balance" and "owner." Add a method "withdraw" that allows
 * the owner to remove money from the account and add it to
 * their Person object, "deposit" that lets a Person spend
 * money to increase their balance, and "rob" that allows
 * any Person object to take money from the bank account.
 *
 * class
 *   BankAccount
 * properties
 *   balance
 *   owner
 * methods
 *   withdraw
 *   deposit
 *   rob
 *
 */
/*function BankAccount(balance, owner) {
  this.balance = balance;
  this.owner = owner;
}

BankAccount.prototype.withdraw = function(amount, owner) {
  if (this.owner === owner) {

  }
};*/

/* Step 37
 *
 * WIP
 * PacMan
 *  x
 *  y
 *  north()
 *  south()
 *  east()
 *  west()
 *  getPosition()
 *
 *
 */


/* Step 38
 *
 * WIP
 * beer
 *  temperature 50
 *  volume 12
 *  dispense()
 *  getVolume()
 *
 */


/* Step 39
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 40
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 41
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 42
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 43
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 44
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 45
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 46
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 47
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 48
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 49
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/**
 * Define a Classes
 */

/**
 * Step 50
 *
 * Animal class
 * @param {string} species The animal species
 * @param {string} gender  male or female
 */
class Animal {
  constructor(species, gender) {
    this.species = species;
    this.gender = gender;
  }
}

/**
 * Step 51
 *
 * Vehicle class
 * @param {string} make The vehicle's make
 * @param {string} model The vehicle's model
 */
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

/**
 * Step 52
 *
 * Shape class
 * @param {number} sides The number of sides, should be a number
 * greater or equal to 3, if the number is less than 3 then set the
 * value of the sides property to null.
 *
 */
class Shape {
  constructor(sides) {
    if (sides < 3 || typeof sides !== "number") {
      this.sides = null;
    } else {
      this.sides = sides;
    }
  }
}

/**
 * Step 53
 *
 * Box class
 * @param {anything} contents The contents of the box
 * @param {boolean} isOpen     Whether the box is opened or closed
 */
class Box {
  constructor(contents, isOpen) {
    this.contents = contents;
    this.isOpen = isOpen;
  }
}

/**
 * Step 54
 *
 * Door class
 * @param {boolean} isOpen Whether the door is opened or closed
 */
class Door {
  constructor(isOpen) {
    this.isOpen = isOpen;
  }
}
/**
 * Step 55
 *
 * Shoe class
 * @param {number} size  The shoe size
 * @param {string} color The shoe color
 */
class Shoe {
  constructor(size, colors) {
    this.size = size;
    this.color = colors;
  }
}

/**
 * Step 56
 *
 * House class
 * @param {number} stories How many stories tall the house is
 */
class House {
  constructor(stories) {
    this.stories = stories;
  }
}
/**
 * Step 57
 *
 * Lightbulb class
 * @param {boolean} isOn Whether the light is on or off
 */
class Lightbulb {
  constructor(isOn) {
    this.isOn = isOn;
  }
}
/**
 * Step 58
 *
 * Cookie class
 * @param {string} flavor The cookie's flavor
 */
class Cookie {
  constructor(flavor) {
    this.flavor = flavor;
  }
}
/**
 * Step 59
 *
 * Meal class
 * @param {Array} foods All the foods in the meal
 */
class Meal {
  constructor(foods) {
    this.foods = foods;
  }
}
/**
 * Create a new instance of the Classes you defined above, below!
 * Steps 60-80 (each variable is a 'step')
 */


// Create 2 different species of animals
let george = new Animal("Monkey", "male");
let nemo = new Animal("Fish", "male");

// Create 2 different vehicles
var civic = new Vehicle('Honda', 'Civic');
var forte = new Vehicle('KIA', 'Forte');

// Create 2 shapes with different numbers of sides
var square = new Shape(4);
var hexagon = new Shape(6);

// Create 2 boxes
let cat = new Animal('Cat', "female");
var catBox = new Box(cat, true);
var christmasPresent = new Box('Everything', false);

// Create 2 doors
var automaticDoor = new Door(true);
var bankVault = new Door(false);

// Create 2 shoes
var rubySlippers = new Shoe(7, 'red');
var dressShoes = new Shoe(10, 'black');

// Create 2 houses
var singleStory = new House(1);
var twoStory = new House(2);

// Create 2 lightbulbs
var incandescent = new Lightbulb(true);
var halogen = new Lightbulb(false);

// Create 2 cookies of different flavors
var chocolateChip = new Cookie("chocolate");
var gingerbread = new Cookie('gingerbread');

// Create 2 different meals
var breakfast = new Meal(['cereal', 'milk']);
var dinner = new Meal(['fish', 'vegetables']);


 /* Steps 81 to 90
 *
 * Create methods
 *
 */


/* Step 81
 *
 * Declare an Animal method called isWarmBlooded that returns
 * a true if the animal species is warm-blooded, false if cold-blooded.
 * Three species are provided below.  If the species is anything else,
 * return the string indicated below.
 *
 *            this.species =>
 *                "Fish"   => false
 *                "Monkey" => true
 *                "Bird"   => true
 *       Any other species => "Could not determine if warm-blooded"
 *
 */
Animal.prototype.isWarmBlooded = function() {
  if (this.species === 'Fish') {
    return false;
  } else if (this.species === 'Monkey') {
    return true;
  } else if (this.species === 'Bird') {
    return true;
  } else {
    return 'Could not determine if warm-blooded';
  }
};

/* Step 82
 *
 * Declare a Vehicle method called drive that accepts a parameter
 * called streetName.  If streetName is a string and is not empty,
 * return "Driving on {streetName}", else return "Driving forward".
 *
 */
Vehicle.prototype.drive = function(streetName) {
  if (typeof streetName === 'string' && streetName.length > 0) {
    return `Driving on ${streetName}`;
  } else {
    return `Driving forward`;
  }
};

 /* Step 83
 *
 * Declare a Shape method called getType that returns a string
 * containing the type of shape based on the sides property.
 *
 *       this.sides =>
 *                3 => "triangle"
 *                4 => "quadrilateral"
 *                5 => "pentagon"
 *                6 => "hexagon"
 *                7 => "heptagon"
 *                8 => "octagon"
 *                9 => "nonagon"
 *               10 => "decagon"
 * Any other number => "Could not determine type"
 *
 */
Shape.prototype.getType = function() {
  console.log(this.sides);
  switch(this.sides) {
    case 3:
      return 'triangle';
    case 4:
      return 'quadrilateral';
    case 5:
      return 'pentagon';
    case 6 :
      return 'hexagon';
    case 7 :
      return 'heptagon';
    case 8 :
      return 'octagon';
    case 9 :
      return 'nonagon';
    case 10:
      return 'decagon';
    default:
      return 'Could not determine type';
  }
};

/* Step 84
 *
 * Declare a Box method called openBox that opens the box
 * if it is already closed.
 * But it should not close the box if it is already open.
 * Return true if openBox opens the box, false otherwise.
 *
 */
Box.prototype.openBox = function() {
  if (!this.isOpen) {
    this.isOpen = true;
    return true;
  } else {
    return false;
  }
};
 /* Step 85
 *
 * Declare a Door method called openClose that opens the door
 * if it is already closed, or closes the door if it is already open.
 * Return true if openClose opens the door, false if openClose closes the door.
 *
 */
Door.prototype.openClose = function() {
  this.isOpen = !this.isOpen;
  return this.isOpen;
};

/* Step 86
 *
 * Declare a Shoe method called findShoes that returns a string containing
 * the color and size of the shoe ("Found red shoes of size 7").
 *
 */
Shoe.prototype.findShoes = function() {
  return `Found ${this.color} shoes of size ${this.size}`;
};

 /* Step 87
 *
 * Declare a House method called isATallStory that accepts a
 * param number called storiesTooTall.
 * If the house's stories property is greater than or equal to
 * storiesTooTall, return true, else return false.
 *
 */
House.prototype.isATallStory = function(storiesTooTall) {
  if (this.stories >= storiesTooTall) {
    return true;
  } else {
    return false;
  }
};

 /* Step 88
 *
 * Declare a Lightbulb method called flipSwitch that accepts a
 * param string called on.  If on is the string "on", set
 * the isOn property to true.  If on is any other string,
 * set isOn to false.
 * Return true if isOn is true, false otherwise.
 *
 */
Lightbulb.prototype.flipSwitch = function(on) {
  if (on === 'on') {
    this.isOn = true;
    return true;
  } else {
    this.isOn = false;
    return false;
  }
};
 /* Step 89
 *
 * Declare a Cookie method called swipedByCookieMonster that accepts
 * a param called dayOfTheWeek.  If the cookie's flavor is "chocolate"
 * and the dayOfTheWeek is "Monday", return true.  Else return false.
 *
 */


 /* Step 90
 *
 * Declare a Meal method called containsJunkFood that returns true if
 * at least one of the items in the foods array is junk food, false otherwise.
 * To check if the food item is junk food, create an array called
 * junkFood containing the following strings: "chips", "soda", "ice cream",
 * "popcorn", and "candy".
 *
 * Use Array's indexOf method to check if the foods array contains junk food.
 * Note that if an element is not found in the array, indexOf returns -1.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 */


 /* Steps 91 to 100
 *
 * Call methods
 *
 */


/* Step 91
 *
 * Call the isWarmBlooded method on three Animal instances
 * and assign the values to each variable below.
 *
 */
var warmBloodedAnimal;
var coldBloodedAnimal;
var notWarmOrColdAnimal;


/* Step 92
 *
 * Call the drive method on two Vehicle instances
 * and assign the values to each variable below.
 *
 */
var streetDriving;
var forwardDriving;


 /* Step 93
 *
 * Call the getType method on two Shape instances
 * and assign the values to each variable below.
 *
 */
var decagon;
var polygon;


/* Step 94
 *
 * Call the openBox method on two Box instances
 * and assign the values to each variable below.
 *
 */
var openAClosedBox;
var closeAnOpenBox;


 /* Step 95
 *
 * Call the openClose method on two Door instances
 * and assign the values to each variable below.
 *
 */
var openAClosedDoor;
var closeAnOpenDoor;


/* Step 96
 *
 * Call the findShoes method on two Shoe instances
 * and assign the values to each variable below.
 *
 */
var redShoesSize7;
var blackShoesSize10;


 /* Step 97
 *
 * Call the isATallStory method on two House instances
 * and assign the values to each variable below.
 *
 */
var farTooTallAStory;
var shortStory;


 /* Step 98
 *
 * Call the switch method on two Lightbulb instances
 * and assign the values to each variable below.
 *
 */
var kitchenLightsOn;
var porchLightsOff;


 /* Step 99
 *
 * Call the swipedByCookieMonster method on two Cookie instances
 * and assign the values to each variable below.
 *
 */
var cookieMonsterPwns;
var cookieMonsterBlocked;


 /* Step 100
 *
 * Call the containsJunkFood method on two Meal instances
 * and assign the values to each variable below.
 *
 */
var badForYou;
var goodForYou;
