function validateInput(input) {
    if (input.value.trim().length < 3) {
        alert('Enter Todo name');
        input.focus()
        return false;
    }
    return true;
};
function getdata() {
    let data = [];
    if (localStorage.getItem('todos')) {
        data = JSON.parse(localStorage.getItem('todos'))
    }
    return data
};
function createRow(todo, index) {
    return `
    <tr>
    <td>${index}</td>
    <td>${todo.name}</td>
    <td><button id="todo-btn">${todo.status}</button></td>
    <td><ion-icon id="icon" name="create-outline"></ion-icon></td>
    <td><ion-icon data-id = ${todo.id} id="icon" class="delete" name="trash-outline"></ion-icon></td>
</tr>
    `
}



export {validateInput, getdata, createRow};