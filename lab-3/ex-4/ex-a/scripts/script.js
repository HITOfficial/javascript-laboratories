function checkToUpdate() {
    console.log('update');
    inputElement = document.querySelector("input[type='number']");
    actualValue = parseInt(inputElement.value);
    inputElement.value = actualValue;
    if (actualValue > 0) {
        actualValue -= 1;
        inputElement.value = actualValue;
        [...(document.querySelectorAll("span"))].forEach(e => {
            e.innerText = actualValue;
        });

    }
}

window.onload = setInterval(checkToUpdate, 1000);

