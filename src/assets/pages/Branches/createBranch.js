export function createAndAppendDiv(inputValue) {
  const newDiv = document.createElement("div");
  const newH1 = document.createElement("h1");
  newH1.textContent = inputValue;
  newDiv.appendChild(newH1);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("flex", "items-center", "gap-2");

  const editButton = document.createElement("button");
  editButton.classList.add("pi", "pi-pencil", "p-button");
  buttonsDiv.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("pi", "pi-trash", "p-button");
  buttonsDiv.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    newDiv.remove();
  });

  newDiv.appendChild(buttonsDiv);

  newDiv.classList.add("bg-white", "rounded-md", "p-4", "mt-4", "flex", "items-center", "justify-between");

  return newDiv;
}