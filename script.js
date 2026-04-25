let inputBox = document.querySelector("#input-box");
let myButton = document.querySelector(".btn")
let listContainer = document.querySelector(".list-container")


// Add a task when clicking the "Add" button
myButton.addEventListener("click",()=>{
    if (inputBox.value === "") {
        alert("please enter the value")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); 

        // Create or append an Edit button for the task
        let editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.classList.add("edit-btn");
        editButton.addEventListener("click", () => editTask(li));
        li.appendChild(editButton);

        // here add cross icon via span tag and cross icon code
        let span = document.createElement("span")
        span.innerHTML = "×"
        li.appendChild(span)
    }
    // inputBox.value = ""; value is used to remove the from input foe new input
    inputBox.value = "";

    });
    
// now we add new feature is if we clicked on li then li should be checked and then if we again clicked on li then li should be unchecked and other feature is remove task when click on cross button
listContainer.addEventListener("click",(e)=>{
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked'); 
    }
    else if(e.target.tagName === 'SPAN'){
e.target.parentElement.remove();
    }
})

// Edit task function
function editTask(taskItem) {
    let newText = prompt("Edit your task:", taskItem.firstChild.textContent);
    if (newText && newText.trim() !== "") {
        taskItem.firstChild.textContent = newText.trim(); // Update task text
    }
}