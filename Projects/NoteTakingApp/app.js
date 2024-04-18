let inputElement = document.querySelector('input');
let btnElement = document.querySelector('button');
let ulElement = document.querySelector('#list');


btnElement.addEventListener('click', (e)=>{
    let noteText = inputElement.value;
    let li = document.createElement('li');
    li.innerText = noteText;
    ulElement.appendChild(li);
    inputElement.value = '';
    
    li.addEventListener('click', ()=>{
        li.remove();
    })
})