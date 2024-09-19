let myTasks = []; 
const taskBtn = document.getElementById('task-btn');
const deleteBtn = document.getElementById('delete-btn');
const input = document.getElementById('input-el');
const output = document.getElementById('output');

taskBtn.addEventListener('click', function(){
    if(input.value !== ""){
        chrome.tabs.query({active: true, currentWindow: true,}, function(tabs){
        let task = {
            name: input.value,
            url: tabs[0].url
        };

        myTasks.push(task);
        input.value = "";
        localStorage.setItem("myTasks", JSON.stringify(myTasks));

        displayTask(myTasks);
        });
    }
});

function displayTask(tasks){
    let listOfTasks = "";
    for(let i = 0; i < tasks.length; i++){
    listOfTasks +=
            `<li>
            ${tasks[i].name} -
            <a target='_blank' href=${tasks[i].url}'>
            ${tasks[i].url}
            </a>
            </li>`
    }
    output.innerHTML = listOfTasks;
};

deleteBtn.addEventListener('click', function(){
    myTasks = [];
    output.textContent = "";
    localStorage.clear();
});

