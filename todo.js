
let myArray = JSON.parse(localStorage.getItem('tasks')) || [];
renderlist();

function toDoList() {
    const inputi = document.querySelector(".inputi");
    const inp1 = inputi.value;
    if (!inp1) return;
    myArray.push(inp1);
    inputi.value = '';
    renderlist();
}

function renderlist() {
    let htmllista = '';
    for (let i = 0; i < myArray.length; i++) {
        const item = myArray[i];
        htmllista += `
        <p id="p-delete">
            <input type="checkbox">
            ${item} 
            <button class="delete-btn" onclick="deleteTask(${i})">Delete</button>
        </p>`;
    }
    document.querySelector('.taskat').innerHTML = htmllista;
    localStorage.setItem('tasks', JSON.stringify(myArray));
}

function deleteTask(index) {
    myArray.splice(index, 1);
    renderlist();
}

