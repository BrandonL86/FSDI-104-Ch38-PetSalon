//object literal

let petSalon = {
    name: "The Fashion pet",
    address:{
        country:"Mexico",
        city:"Tijuana",
        zip:"23456"
    },
    phone:"6659987311",
    pets:[
        {
        name: "Roxie",
        age: 3,
        gender:'Female',
        breed:"Boxer",
        service:"Grooming",
        payment:"debit",
    },
    {
        name: "Riley",
        age: 2,
        gender:"Female",
        breed:"Pitbull",
        service:"Nail Trimming",
        payment:"credit",
    },
    {
        name: "Little Man",
        age: 4,
        gender: "Male",
        breed:"French Bulldog",
        service:"Vaccine",
        payment:"venmo",
    }
]
    
}

// create the pet constructor (name, age, gender,breed, service)
let counter=0;
function Pets(name, age, gender, service, breed, payment)
{
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
    this.breed = breed;
    this.payment = payment;
    this.id = counter++;
    
}

//get the input from the html

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService")
let inputPayment = document.getElementById("txtPayment")

function isValid(aPet)
//we need to assume that the valid pet is true
{
    let valid = true;

    if(aPet.name == "")
    {
        //if you get here it means the pet is not valid
        valid = false;
        inputName.classList.add("Error");
    }
    if(aPet.service == ""){
        valid=false;
        inputService.classList.add("Error");
    }
    if(aPet.age == ""){
        valid=false;
        inputAge.classList.add("Error");
    }
    if(aPet.gender == ""){
        valid=false;
        inputGender.classList.add("Error");
    }
    if(aPet.breed == ""){
        valid=false;
        inputBreed.classList.add("Error");
    }
    if(aPet.payment == ""){
        valid=false;
        inputPayment.classList.add("Error");
    }
    return valid;

}

function clearInputs(){
    inputName.value="";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
    inputPayment.value = "";
}





function register()
{
    //create the object
    let newPet = new Pets(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputPayment.value); 
    if(isValid(newPet))
    {
        petSalon.pets.push(newPet);
        // displayPetCard();
        clearInputs();
    }
    //display object
    // petSalon.pets.push(newPet);
    console.log(newPet);
    // displayPetCard();
    displayPetTable()
}


function deletePet(id){
    console.log("Deleting pet" + id);
    document.getElementById(id).remove();//removes from HTML
    // what about the array?
    for (let i = 0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        if(pet.id == id){
            deleteIndex=i;
        }
    }
    petSalon.pets.splice(id,1);

}


function init()
{
    //hook events
    
    //create two pets using the Pet constructor
    let pet1 = new Pets("Roxie", 3, "Female","Grooming", "Boxer");
    let pet2 = new Pets("Riley", 2, "Female","Grooming", "Pitbull");
    // petSalon.pets.push(newPet);
    console.log(pet1, pet2);
//    displayPetCard();
displayPetTable()
    
}

window.onload=init;//wait to render HTML