// Grab HTML elements
const textBoxText = document.getElementById('textbox');
const addButton = document.getElementById('add-btn');
const clearButton = document.getElementById('clear-btn');
const deleteAllButton = document.getElementById('delete-all-btn');
const itemList = document.getElementById('item-list');
const checkbox = document.getElementsByClassName('checkbox');

// Main execution
function main() {

    checkButtonPress();
    enterKeyPress();
}

main();

// Checks for clicks on any of the 3 buttons
function checkButtonPress() {
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

// Checks for if the enter key is pressed and exectues addToList()
function enterKeyPress() {
    textBoxText.addEventListener("keypress", (e) => {
        if (e.which === 13 || e.keyCode === 13 || e.key === "Enter") {
            console.log("enter key pressed");
            addToList(textBoxText.value);
            return false;
        }
    })
}

// Creates a new list item and inserts the text in
function addToList(item) {
    if (textBoxText.value != "") {
        textBoxText.value = "";
        const newListItem = document.createElement('li');
        const listItemText = document.createElement('p');
        const listItemCheckbox = document.createElement('div');

        listItemText.innerHTML = item;
        listItemCheckbox.classList.add('checkbox');
        listItemCheckbox.classList.add('unchecked');
        newListItem.appendChild(listItemText);
        newListItem.appendChild(listItemCheckbox);
        itemList.appendChild(newListItem);

        listItemCheckbox.addEventListener('click', () => {
            console.log("checkbox clicked");
            if (listItemCheckbox.classList.contains('unchecked')) {
                listItemCheckbox.classList.remove('unchecked')
                listItemCheckbox.classList.add('checked');
            } else if (listItemCheckbox.classList.contains('checked')) {
                listItemCheckbox.classList.remove('checked');
                listItemCheckbox.classList.add('unchecked');
            }
        })
    } else {
        null;
    }
}

function clearSelected() {
    const selected = document.getElementsByClassName('checked');
    let first = selected.firstElementChild;
    while (first) {
        first.remove();
        first = selected.firstElementChild;
    }
}

// Runs a loop that deletes every list item in itemList
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