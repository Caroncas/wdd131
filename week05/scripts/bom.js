const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const para = document.querySelector('p');
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
        para.textContent = "";
        input.value = '';
        input.focus();
    }
    else 
        {
        input.focus();
        para.textContent = "Please enter a scripture into the selected field";
    };
    
})

function displayList(item) {
    const li = document.createElement('li');
    li.textContent = item;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "❌";
    list.append(li);
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
}

function setChapterList() {
    localStorage.setItem('favBomList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('favBomList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}