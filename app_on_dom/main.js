(function() {
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

        return {
            item, doneButton, deleteButton
        }
    }

    let container = document.getElementById('todo-app');

    let todoAppTitle = createAppTitle('To Do List');
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();
    // let todoItems = [createTodoItem('clean the bedroom'), createTodoItem('buy bread')];

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);
    // todoList.append(todoItems[0].item);
    // todoList.append(todoItems[1].item);

    todoItemForm.form.addEventListener('submit', function(e) {
        e.preventDefault();
        if(!todoItemForm.input.value) {
            return;
        }

        let todoItem = createTodoItem(todoItemForm.input.value);
        todoItem.doneButton.addEventListener('click', function() {
            todoItem.item.classList.toggle('list-group-item-success');
        });
        todoItem.deleteButton.addEventListener('click', function() {
            if(confirm('Are you sure?')) {
                todoItem.item.remove();
            }
        })

        todoList.append(todoItem.item);
        todoItemForm.input.value = '';
    }
    );
})();