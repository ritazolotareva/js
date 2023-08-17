    let tasks = []; 

    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Enter new item';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Add item';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form, input, button
        }
    }

    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(name) {
        let item = document.createElement('li');
        let buttonGroup = document.createElement('div')
        let doneButton = document.createElement('button')
        let deleteButton = document.createElement('button')

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-center');
        item.textContent = name;
        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Done';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Delete';

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        setDataToLS(item);

        return {
            item, doneButton, deleteButton
        }
    }

    function createTodoApp(container, title = 'To Do List') {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
    
        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
    
        todoItemForm.form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (!todoItemForm.input.value) {
                return;
            }
    
            let todoItem = createTodoItem(todoItemForm.input.value);
            todoItem.doneButton.addEventListener('click', function () {
                todoItem.item.classList.toggle('list-group-item-success');
            });
            todoItem.deleteButton.addEventListener('click', function () {
                if (confirm('Are you sure?')) {
                    todoItem.item.remove();
                    // removeFromList(todoItem);/
                }
            })
    
            todoList.append(todoItem.item);
            todoItemForm.input.value = '';
        });
    }

    function dataToJson(data) {
        return JSON.stringify(data);
    }

    function jsonToData(data) {
        return JSON.parse(data);
    }

    function getListItem() {
        return localStorage.getItem('listData');
    }

    function setListItem(data) {
        localStorage.setItem('listData', data);
    }

    function setDataToLS(item) {
        let data = localStorage.getItem('listData');

        data = data ? JSON.parse(data) : [];
        data.push(item);
        setListItem(dataToJson(data));
    }

    function removeFromList(id) {
        let data = jsonToData(getListItem());
        let newList = [];
        for (let i = 0; i < data.length; ++i) {
            if (data[i].id !== id) {
                newList.push(data[i])
            }
        }
        setListItem(dataToJson(newList));
    }
        
    
    
    window.createTodoApp = createTodoApp;