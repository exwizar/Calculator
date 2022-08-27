let a = '';
    b  = '',
    sign = '',
    finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];

let btns = document.querySelector('.btns');
let screen = document.querySelector('.calc-screen__answer');
let ac = document.querySelector('.ac');

//ClearALL

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    screen.textContent = 0;
}


// onclick buttons

btns.addEventListener('click', (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) { ac.onclick = clearAll } 

    const key = event.target.textContent;

    if(digit.includes(key)) {
        if(b === '' && sign === "") {
            a += key
            screen.textContent = a
        } else if (!a == '' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key
            screen.textContent = b
        }
  
    }

    if(action.includes(key)) {
        sign = key;
        screen.textContent = sign;
        return
    }

    if (key == '=') {
        if (b === '') b = a;
        if (sign == '+') {
            a = (+a) + (+b);
            finish = true;
            return screen.textContent = a;
        } else if (sign == '-') {
            a = a - b;
            finish = true;
            return screen.textContent = a;
        } else if (sign == '*') {
            a = a * b;
            finish = true;
            return screen.textContent = a;
        } else if (sign =='/') {
            a = a / b;
            finish = true;
            return screen.textContent = a;
        }
        
    }

})
