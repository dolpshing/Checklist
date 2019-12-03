const textBoxText = document.getElementById('textbox');
const addButton = document.getElementById('add-btn');
const clearButton = document.getElementById('clear-btn');
const deleteAllButton = document.getElementById('delete-all-btn');

function main() {
  addButton.addEventListener("click", () => {
    console.log(`add button clicked and added ${textBoxText.value}`);
  })
  
  clearButton.addEventListener("click", () => {
    console.log("clear button clicked");
  })
  
  deleteAllButton.addEventListener("click", () => {
    console.log("delete all button clicked");
  })
}

main();