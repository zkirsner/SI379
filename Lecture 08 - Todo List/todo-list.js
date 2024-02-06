const taskButton = document.querySelector('#add-todo');
const inputEl = document.querySelector('#todo-input');

function addItemToList() {
    const description = inputEl.value;
    if (description) {
        let newItem = document.createElement('li');
        const doneButton = document.createElement('button');
        doneButton.classList.add('done');
        doneButton.innerText = 'Done';
        doneButton.addEventListener('click', () => {
            newItem.classList.toggle('done');
        });
        newItem.append(description, doneButton);
        // newItem.innerText = description;
        const itemList = document.querySelector("#todo-list");
        itemList.append(newItem); 
        inputEl.value = '';
    }
}

taskButton.addEventListener('click', addItemToList);

inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addItemToList();
    }
});
