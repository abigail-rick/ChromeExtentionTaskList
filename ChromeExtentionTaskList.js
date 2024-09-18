let myTasks = []; 
const taskBtn = document.getElementById('task-btn');
const saveBtn = document.getElementById('save-btn');
const deleteBtn = document.getElementById('delete-btn');
const inputEl = document.getElementById('input-el');  
const ulLi = document.getElementById('ul-el');

inputbtn.addEventListener('click', function(){
localStorage.setItem("myTasks", JSON.stringify(myTasks));
