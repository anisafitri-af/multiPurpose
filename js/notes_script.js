var listNum = 0;

function addList() {
    var inputTitle = document.getElementById('title').value;
    var inputNotes = document.getElementById('notesEntry').value;
    var title = document.createElement('h3');
    var notes = document.createElement('p');
    var container = document.createElement('div');
    container.classList.add('addList')
    title.innerHTML = inputTitle;
    notes.innerHTML = inputNotes;
    document.getElementById('mainpage').appendChild(container);
    document.getElementsByClassName('addList')[listNum].appendChild(title);
    document.getElementsByClassName('addList')[listNum].appendChild(notes);
    listNum++;
}

function clearAll() {
    var container = document.querySelectorAll('.addList');
    container.forEach(function(item) {
        item.remove();
    });
    listNum = 0;
    numbering = 1;
}