function displayPetCard()
{
    let card="";
    const DIV = document.getElementById("pets");

    //travel the pets array
    for (let i=0; i < petSalon.pets.length; i++)
    {
        let color = "";
        let pet = petSalon.pets[i];
        if(pet.service == "grooming")
        {
            color = "green";
        }

        //create the template
        card += `
        <div id="${pet.id}" class="pet" style="background-color: ${color};">
        <h6>Name: ${pet.name}</h6>
        <p>Age: ${pet.age}</p>
        <p> Service: ${pet.service}</p>
        </div>
        `;
    }
    console.log(card);
    //insert the template into HTML element
    DIV.innerHTML = card;

}

function displayInformation()
{
    document.getElementById("info").innerHTML=`
    <p> Welcome to ${petSalon.name} </p>
    <p> Located in ${petSalon.address.city} and ${petSalon.address.country}<p>
    <p> name: ${petSalon.pets[0].name}</p>
    <p> name: ${petSalon.pets[1].name}</p>  
    `;
    
}


// function petCard(pet){
//     const petContainer = document.getElementById("petcard-container").innerHTML +=`
//     <div class = "details">
//     <h3>${pet.name}<h3>
//     <p> ${pet.age}</p>
//     <p>Gender: ${pet.gender}</p>
//       <p>Breed: ${pet.breed}</p>
//       <p>Service: ${pet.service}</p>
//     </div>
//   `;


// }