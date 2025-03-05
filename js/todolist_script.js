var listNum = 0;
var numbering = 1;
function addList() {
    var inputText = document.getElementById('listInput');
    var newList = document.createElement('p');
    var listContainer = document.createElement('div');
    listContainer.classList.add('addList');
    newList.innerHTML = numbering + '. ' + inputText.value;
    document.getElementById('mainpage').appendChild(listContainer);
    document.getElementsByClassName('addList')[listNum].appendChild(newList);
    listNum++;
    numbering ++;
    inputText.value = " ";
}

function clearAll() {
    var container = document.querySelectorAll('.addList');
    container.forEach(function(item) {
        item.remove();
    });
    listNum = 0;
    numbering = 1;
}