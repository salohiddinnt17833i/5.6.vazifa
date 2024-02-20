import { validateInput, getdata, createRow } from "./function.js";

const input = document.querySelector('#text');
const button = document.querySelector('#button');
const addTbody = document.querySelector('#tbody');


button && button.addEventListener('click', function (e) {
    e.preventDefault();
    let isValid = validateInput(input)
    if (isValid) {
        const todo = {
            name: input.value,
            status: 'todo',
            id: Date.now(),
        }
        let todos = getdata();
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos))
        input.value = ' '


        let tr = createRow(todo, todos.length)
        tbody.innerHTML += tr;
        location.reload();
    }
})



document.addEventListener('DOMContentLoaded', function () {
    let todos = getdata();
    if (todos.length) {
        todos.forEach((todo, index) => {
            let tr = createRow(todo, index)
            addTbody.innerHTML += tr;
        });
    }
    const deleteButton = document.querySelectorAll('.delete')
    if (deleteButton.length) {
        deleteButton.forEach((del) =>{
            del && del.addEventListener('click', function () {
                let isDelete = confirm('Rostdan ham ushbu malumotni ochirmoqchimisiz')
                let id = this.getAttribute('data-id');
                if (isDelete) {
                    todos = todos.filter(todo =>{
                        return todo.id != id;
                    })
                    
                    localStorage.setItem('todos', JSON.stringify(todos));
                    location.reload();
                }
            })
        })
    }
})