document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-btn");
    const inputField = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
  
    // Add todo
    addButton.addEventListener("click", function() {
      const todoText = inputField.value.trim();
      if (todoText !== "") {
        addTodoItem(todoText);
        inputField.value = "";
      }
    });
  
    // Add todo item to the list
    function addTodoItem(todoText) {
      const li = document.createElement("li");
  
      const todoInput = document.createElement("input");
      todoInput.type = "text";
      todoInput.value = todoText;
      todoInput.disabled = true; // Make the input readonly by default
  
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", function() {
        toggleEditMode(todoInput, editButton);
      });
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        li.remove();
      });
  
      li.appendChild(todoInput);
      li.appendChild(editButton);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
    }
  
    // Toggle edit mode
    function toggleEditMode(todoInput, editButton) {
      if (todoInput.disabled) {
        todoInput.disabled = false;
        editButton.textContent = "Save";
      } else {
        todoInput.disabled = true;
        editButton.textContent = "Edit";
      }
    }
  });
  
  document.getElementById('addBookBtn').addEventListener('click', function() {
    // Prompt the user for book details
    const title = prompt("Enter the book's title:");
    const author = prompt("Enter the author's name:");
    const description = prompt("Enter a short description of the book:");

    // If all details are entered, create and display the book card
    if (title && author && description) {
        const bookList = document.getElementById('bookList');
        
        // Create a new book card element
        const bookCard = document.createElement('article');
        bookCard.classList.add('book-card');

        // Add book information to the card
        bookCard.innerHTML = `
            <h2>Title: ${title}</h2>
            <p><strong>Author:</strong> ${author}</p>
            <p><strong>Description:</strong> ${description}</p>
        `;

        // Append the new book card to the list
        bookList.appendChild(bookCard);
    } else {
        alert("Please fill in all the details.");
    }
});
