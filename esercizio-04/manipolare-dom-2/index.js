//Recuperare il valore di ciascun campo di input  
//e creare un oggetto person contenente le proprietà: firstName, lastName e age.

const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const age = document.getElementById("age").value;

const person = { firstName, lastName, age };

console.log(person);


//Infine recuperare l'elemento form

const formId = document.querySelector("form");
formId.setAttribute("id", "my-form");

const form = document.getElementById("my-form");

//aggiungere l'attributo data-person contenente l'oggetto person in formato json

form.setAttribute("data-person", JSON.stringify(person));