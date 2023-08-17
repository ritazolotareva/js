    let tasksList = [];
    
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
        button.disabled = true;

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        input.addEventListener('input', function() {
            if (input.value !== '') {
                button.disabled = false;
            } else {
                button.disabled = true;
            }
        })

        return {
            form, input, button
        }
    }

    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(obj) {
        let item = document.createElement('li');
        let buttonGroup = document.createElement('div')
        let doneButton = document.createElement('button')
        let deleteButton = document.createElement('button')

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-center');
        item.textContent = obj.name;
        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Done';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Delete';
        
        if (obj.done == true) item.classList.add('list-group-item-success');

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);
        
        saveToLocalStorage(obj.name);

        return {
            item, doneButton, deleteButton,
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
    
            let newItem = {
                name: todoItemForm.input.value,
                done: false,
            }

            let todoItem = createTodoItem(newItem);
            todoItem.doneButton.addEventListener('click', function () {
                todoItem.item.classList.toggle('list-group-item-success');
            });
            todoItem.deleteButton.addEventListener('click', function () {
                if (confirm('Are you sure?')) {
                    todoItem.item.remove();
                }
            })

            tasksList.push(newItem);
            console.log(tasksList);

            todoList.append(todoItem.item);
            todoItemForm.button.disabled = true;
            todoItemForm.input.value = '';
        });
    }

    function saveToLocalStorage(data) {
        JSON.stringify(data);
        localStorage.setItem('dataList', data)
    }

    function renderFromLocalStorage(data) {
        let list = localStorage.getItem('dataList');
        JSON.parse(list);
    }
    
    
    window.createTodoApp = createTodoApp;