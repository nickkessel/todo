const todoObjectList = [];

class Todo_Class {
  constructor(item){
    this.ulElement =item;
  }

  add() {
    const todoInput = document.querySelector("#myInput").value;
    if(todoInput == "") {
      alert("wheres the item?")
    } else {
      const todoObject = {
        id: todoObjectList.length,
        todoText : todoInput,
        isDone : false,
      }

      todoObjectList.unshift(todoObject);
      this.display()
      document.querySelector("#myInput").value = '';
    }
  }

  done_undone(x){

  }

  deleteElement(x){

  }

  display(){
    this.ulElement.innerHTML = "";
    todoObjectList.forEach((object_item) => {
      const liElement = document.createElement("li");
      const delBtn = document.createElement("i");

      liElement.innerText = object_item.todoText;
      liElement.setAttribute("data-id", object_item.id);

      delBtn.setAttribute("data-id", object_item.id);
      delBtn.classList.add("far", "fa-trash-alt");

      liElement.appendChild(delBtn);
      
    })

  }
}

const listSection = document.querySelector("#myUL");

myTodoList = new Todo_Class(listSection);

document.querySelector(".addBtn").addEventListener("click", function() {
  myTodoList.add()
})
