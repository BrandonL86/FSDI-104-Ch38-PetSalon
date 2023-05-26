let students = ["Adam", "Brandon", "Anthony", "Marquice"];
let ages = [23, 25, 31, 32];
//object literal
let s1 = {
    name:"Adam",
    age:28,
    hobbies:["Go to gym", "Drink water", "Study for FSDI"],
    address:{
        country:"USA",
        city:"San Diego",
        street:"Center",
        number:"1234"
    }
}

let s2 = {
    name:"Anthony",
    age:28,
    hobbies:["Go to gym", "Drink water", "Study for FSDI"],
    address:{
        country:"USA",
        city:"San Diego",
        street:"Center",
        number:"1234"
    }
}
students.push(s1,s2);
console.log(students);

//object constructor

function Student(name, age, gender){
    //attributes
    this.name = name;
    this.age = age;
    this.gender = gender;
}
//creating new objects using the constructor Student
let sc1 = new Student("Brandon", 25, "Male");
let sc2 = new Student("Marquice", 26, "Male");

console.log(sc1,sc2);

//create an object constructor and create two objects

function VideoGames(title, console, rating, genre){
    this.title = title;
    this.console = console;
    this.rating = rating;
    this.genre = genre;
}

let xbox = new VideoGames("Call of Duty", "xbox", "MA", "Shooter");
let PS = new VideoGames("God of War", "Playstation", "MA", "Action");



