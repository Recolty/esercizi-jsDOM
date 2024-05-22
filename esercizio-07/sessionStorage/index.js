const titleName = document.querySelector(".title-name");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  const mail = document.querySelector(".email").value;
  const surname = document.querySelector(".lastname").value;
  const firstName = document.querySelector(".firstname").value;

  if (firstName != "") {
    titleName.innerText = firstName;
    document.querySelector(".firstname").value = "";
  }
  
  sessionStorage.setItem(".email", mail);
  sessionStorage.setItem(".title-name", firstName);
  sessionStorage.setItem(".lastname", surname);

  document.querySelector(".email").value = "";
  document.querySelector(".lastname").value = "";
});