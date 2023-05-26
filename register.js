//object literal

let petSalon = {
    name: "The Fashion pet",
    address:{
        country:"Mexico",
        city:"Tijuana",
        zip:"23456"
    },
    phone:"6659987311",
    pets:[]
    
}
// create the pet constructor (name, age, gender,breed, service)

function Pets(name, age, gender, service, breed){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
    this.breed = breed;
}



function displayInformation(){
    document.getElementById("info").innerHTML=`
    <p> Welcome to ${petSalon.name} </p>
    <p> Located in ${petSalon.address.city} and ${petSalon.address.country}

    <p> name: ${petSalon.pets[0].name}</p>
    <p> name: ${petSalon.pets[1].name}</p>
    `;

}

//get the input from the html

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService")

function register(){
    console.log("register");
    //create the object
    let newPet = new Pets(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value);

    //display object
    petSalon.pets.push(newPet);
}


function init(){
    //hook events

//create two pets using the Pet constructor
let pet1 = new Pets("Roxie", 3, "Female","Grooming", "Boxer");
let pet2 = new Pets("Riley", 2, "Female","Grooming", "Pitbull");
console.log(pet1, pet2);

}

window.onload=init;//wait to render HTML