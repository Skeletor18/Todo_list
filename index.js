const it = document.querySelector(".text_todo");
const btn = document.querySelector(".btn");
const todo_list = document.querySelector("#todo-list");

btn.addEventListener("click", () => {
  if (it.value === "") {
    alert("Необходимо ввести текст");
  } else {
    const div = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const input = document.createElement("input");

    input.type = "checkbox";
    deleteBtn.textContent = "Delete";

    div.textContent = it.value;
    div.style.width = "65%";
    div.style.marginTop = "20px";
    div.style.display = "flex";
    div.style.justifyContent = "space-around";
    div.style.height = "50px";
    div.style.borderRadius = "10px";
    div.style.alignItems = "center";
    div.style.fontSize = "25px";
    div.style.border = "2px solid black";
    div.style.borderRadius = "10px 100px / 120px";

    deleteBtn.style.width = "100px";
    deleteBtn.style.height = "35px";
    deleteBtn.style.borderRadius = "10px";
    deleteBtn.style.backgroundColor = "#00bfff";
    deleteBtn.style.border = "#00bfff";
    deleteBtn.style.fontSize = "15px";

    input.style.width = "20px";
    input.style.height = "20px";

    it.value = "";

    todo_list.append(div);
    div.append(deleteBtn);
    div.prepend(input);

    deleteBtn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });

    input.addEventListener("click", (e) => {
      e.target.parentElement.classList.toggle("done")
    });
  }
});
