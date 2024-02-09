// Register a click event listener on a button
const button = document.getElementById("btn");
const deleteButton = document.getElementById("deleteBtn");
// button.addEventListener("click", () => {
//     console.log("Button was clicked!")
// })

// Culmination of DOM Manipulation

// Create Element Function
button.addEventListener("click", () => {
    const list = document.getElementById("list");
    const listItem = document.createElement("li");
    listItem.textContent = "New Item!";
    list.appendChild(listItem);
});

// Remove Elements Function
deleteButton.addEventListener("click", () => {
    
    const list = document.getElementById("list").children;
    list[list.length - 1].remove()
})


    