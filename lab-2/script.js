

function getData() {
    document.querySelector(".text-output").innerText = document.querySelector('.text').value + 'Type: ' + typeof (document.querySelector('.text').value);
    document.querySelector(".number-output").innerText = document.querySelector('.number').value + 'Type: ' + typeof (document.querySelector('.number').value);
}