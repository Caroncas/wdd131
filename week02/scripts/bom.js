const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______');

const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContext = input.value;
deleteButton.textContent = '❌';

li.append(deleteButton);
li.append(li);

//you need to find a way to add aria-label="Close" to the close button emoticon label for screen readers