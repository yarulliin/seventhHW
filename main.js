const form = document.getElementById('form');
const add = document.getElementById('add');
const create = document.getElementById('create');
const input = document.getElementById('input');
const text = document.getElementsByClassName('text');
const remove = document.getElementsByClassName('remove');

add.addEventListener('click', () => {
    input.insertAdjacentHTML('beforeend', `<input type="text" placeholder="Введите текст" class="text"> <button class="remove">x</button>`);

    Array.from(text, (elem, i) => {
        Array.from(remove, (el, j) => {
            el.addEventListener('click', () => {
                if (i == j + 1) {
                    el.remove();
                    elem.remove();
                }
            })
        })
    })
})

create.addEventListener('click', () => {
    if (document.getElementById('el')) {
        document.getElementById('el').remove();
    }

    const block = document.createElement('div');

    block.id = 'el';
    block.style.margin = '0px auto';
    block.style.padding = '5px';
    block.style.textAlign = 'center';
    block.style.overflow = 'auto';
    block.style.boxSizing = 'border-box';
    block.style.width = checkInput(document.getElementById('width').value, 'width');
    block.style.height = checkInput(document.getElementById('height').value, 'height');
    block.style.backgroundColor = checkInput(document.getElementById('color').value, 'color');

    if (block.style.width && block.style.height && block.style.backgroundColor && checkInput(text)) {
        for (el of text) {
            block.insertAdjacentHTML('beforeend', `${el.value}<br>`);
        }
    }
    else {
        block.textContent = 'Invalid values';
        block.style.width = 'auto';
        block.style.height = 'auto';
        block.style.backgroundColor = '#fff';
    }

    form.insertAdjacentElement('afterend', block);
})

function checkInput(arg, name) {
    if (name == 'width') {
        if (arg >= 50 && arg <= 1000) {
            return `${arg}px`;
        }
        else return false;
    }

    if (name == 'height') {
        if (arg >= 50 && arg <= 600) {
            return `${arg}px`;
        }
        else return false;
    }

    if (name == 'color') {
        if (typeof arg == 'string' && arg.length) {
            return arg;
        }
        else return false;
    }
    
    for (el of arg) {
        if (!el.value.length) {
            return false;
        }
    }

    return true;
}