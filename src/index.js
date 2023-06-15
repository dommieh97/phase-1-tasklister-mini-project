document.addEventListener("DOMContentLoaded", ()=> 
    {
        const inputBox = document.getElementById("new-task-description");
    
        const button = document.getElementById("create-task-form");

        button.addEventListener('submit', (e) => 
        {
            e.preventDefault();
           
           if (inputBox.value === '')
           {
            return;
           }
           
           const div = document.createElement('div');
           const h2 = document.createElement('h2');
           const ul = document.createElement('ul');

           div.id = 'list';
           ul.id = 'tasks';

           h2.textContent = 'A Todo:';

           const todoLi = document.createElement('li');
           todoLi.textContent = inputBox.value;
           inputBox.value = '';


           todoLi.addEventListener('click', (e) =>
            {
                div.remove();
            });

           div.append(h2,ul);

           ul.append(todoLi);
           document.body.append(div);

        
        })
        
        

    
    
    });