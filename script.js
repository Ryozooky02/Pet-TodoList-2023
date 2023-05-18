const inputBox = document.getElementById('InputBox');
const ListBox = document.getElementById('list-container');

function AddTask() {
    if (inputBox.value === '') {
        alert('You must to write something Adil');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        ListBox.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}


ListBox.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", ListBox.innerHTML);
}
function showTask() {
    ListBox.innerHTML = localStorage.getItem("data");
}
showTask();