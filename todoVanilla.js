import "./styles.css";

/// Create the input box
const inputBox = document.createElement("input");
inputBox.setAttribute("type", "text");
inputBox.setAttribute("placeholder", "Type something...");
inputBox.setAttribute("id", "myInput");
inputBox.setAttribute("class", "inputClass");

// Create the submit button
const submitButton = document.createElement("button");
submitButton.textContent = "Add Todo";
submitButton.setAttribute("id", "submitBtn");

// Create a list to hold the submitted items
const itemList = document.createElement("ul"); // Create an unordered list

// Function to handle adding items to the list
function handleSubmit() {
  const userInput = inputBox.value; // Get the value from the input
  if (userInput.trim() !== "") {
    // Check if the input is not empty
    const listItem = document.createElement("li"); // Create a new list item
    listItem.textContent = userInput; // Set the text of the list item

    // Create Update button
    const updateButton = document.createElement("button");
    updateButton.textContent = "Update";

    // Create Remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    // Add click event to update the item
    updateButton.addEventListener("click", function () {
      const newValue = prompt("Update your todo:", listItem.textContent);
      if (newValue && newValue.trim() !== "") {
        listItem.textContent = newValue; // Update the list item's text
        listItem.appendChild(updateButton); // Re-add the update button
        listItem.appendChild(removeButton); // Re-add the remove button
      }
    });

    // Add click event to remove the item
    removeButton.addEventListener("click", function () {
      itemList.removeChild(listItem); // Remove the list item
    });

    // Append buttons to the list item
    listItem.appendChild(updateButton);
    listItem.appendChild(removeButton);

    itemList.appendChild(listItem); // Append the list item to the list
    inputBox.value = ""; // Clear the input box after submission
  } else {
    console.log("Input cannot be empty"); // Optional: log if the input is empty
  }
}

// Add event listener for the button click
submitButton.addEventListener("click", handleSubmit);

// Append the input box, button, and list to the body
document.body.appendChild(inputBox);
document.body.appendChild(submitButton);
document.body.appendChild(itemList); // Append the list to the body
