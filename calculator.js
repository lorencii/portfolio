let display = document.querySelector('#inputi');

const appendValue = (value) => {
    display.value += value;
};

const clearDisplay = () => {
    display.value = "";
};

const deleteLast = () => {
    display.value = display.value.slice(0, -1);
};

const percent = () => {
    display.value = eval(display.value) / 100;
};

const calculate = () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
};

const sqr = () =>{
    display.value=eval(Math.sqrt(display.value));
}


