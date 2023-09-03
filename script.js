let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
buttons.forEach(button => {
    button.addEventListener('click', (c) => {
        if (c.target.innerHTML === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = 'Error';
            }
        } else if (c.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        } else if (c.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += c.target.innerHTML;
            input.value = string;
        }
    });
});
