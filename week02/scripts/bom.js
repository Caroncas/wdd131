const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const para = document.querySelector('p');


button.addEventListener('click', () => {
    if (input.value.trim() !== '')
        {
        const li = document.createElement('li');
        li.textContent = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "❌";
        list.append(li);
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        })
        li.appendChild(deleteButton);
        para.textContent = "";
        input.value = '';
        input.focus();
    }
    else 
        {
        input.focus()
        para.textContent = "Please enter a scripture into the selected field";
    }
})

