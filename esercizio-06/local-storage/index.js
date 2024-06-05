
const titleName = document.querySelector(".title-name");
const button = document.querySelector(".btn");

window.addEventListener("load", () => {
    const savedName = localStorage.getItem(".title-name")
    if(".title-name"){
        titleName.innerText = savedName
    }
})
button.addEventListener("click", () => {
  const mail = document.querySelector(".email").value;
  const surname = document.querySelector(".lastname").value;
  const firstName = document.querySelector(".firstname").value;

  if (firstName != "") {
    titleName.innerText = firstName;
    document.querySelector(".firstname").value = "";
  }
  
  localStorage.setItem(".email", mail);
  localStorage.setItem(".title-name", firstName);
  localStorage.setItem(".lastname", surname);

  document.querySelector(".email").value = "";
  document.querySelector(".lastname").value = "";
});
