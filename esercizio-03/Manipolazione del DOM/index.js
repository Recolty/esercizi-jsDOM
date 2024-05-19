const addProduct = () => {
  const ul = document.querySelector("#to-do-list");
  const input = document.querySelector("#input-list");
  const value = input.value;

  if (value != "") {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const container = document.createElement("div");

    li.innerText = value;
    checkbox.setAttribute("type", "checkbox");

    ul.appendChild(container);
    container.appendChild(checkbox);
    container.appendChild(li);

    li.style.listStyleType = "none";
    container.style.display = "flex";
  }
  input.value = "";
};
