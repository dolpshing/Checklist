const textBoxText = document.getElementById('textbox');
const addButton = document.getElementById('add-btn');
const clearButton = document.getElementById('clear-btn');
const deleteAllButton = document.getElementById('delete-all-btn');
const itemList = document.getElementById('item-list');

function main() {
    addButton.addEventListener("click", () => {
        console.log(`${textBoxText.value} has been added to the list`);
        addToList(textBoxText.value);
    })

    clearButton.addEventListener("click", () => {
        console.log("clear button clicked");
    })

    deleteAllButton.addEventListener("click", () => {
        console.log("all list items have been deleted");
        deleteAllItems();
    })
}

main();

function addToList(item) {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = item;
    itemList.appendChild(newListItem);
}

function deleteAllItems() {
    // sets first to the first child element of the parent "itemList"
    let first = itemList.firstElementChild;
    // while loop as long as there remains a "firstElementChild"
    while (first) {
        // remove the child
        first.remove();
        // as soon as the child is removed, assign first to the next first (second one, etc.)
        first = itemList.firstElementChild;
        // eventually there will be no more children, and the loop will stop
        // all items will be deleted
    }
}