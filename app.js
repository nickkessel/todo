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

  }
}

const listSection = document.querySelector("#myUL");

myTodoList = new Todo_Class(listSection);

document.querySelector(".addBtn").addEventListener("click", function() {
  myTodoList.add()
})
