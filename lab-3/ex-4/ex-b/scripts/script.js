class Span extends HTMLElement {
    constructor() {
        super();
    }
}
window.customElements.define('custom-span',Span);


function checkToUpdate() {
    console.log('update');
    inputElement = document.querySelector("input[type='number']");
    actualValue = parseInt(inputElement.value);
    inputElement.value = actualValue;
    if (actualValue > 0) {
        actualValue -= 1;
        inputElement.value = actualValue;
        [...(document.querySelectorAll("custom-span"))].forEach(e => {
            e.innerText = actualValue;
        });

    }
}

window.onload = setInterval(checkToUpdate, 1000);

