let inputElement = document.querySelector('input');
let allBtn = document.querySelectorAll('button');

allBtn.forEach(ele => ele.addEventListener('click', ()=>{
    let val = ele.innerText;
    if(val === '='){
        try {
            let cal = inputElement.value;
            let result = eval(cal);
            inputElement.value = result;
        } catch (error) {
            inputElement.value = 'Invalid';
        }
    }else if(val === 'X2'){
        inputElement.value = inputElement.value * inputElement.value;
        // console.log(inputElement.value * inputElement.value)
    }else{
        inputElement.value = inputElement.value + val;
    }
}))



let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', ()=>{
    inputElement.value = '';
})
