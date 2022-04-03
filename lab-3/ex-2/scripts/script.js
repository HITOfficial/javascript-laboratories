function removeStyles() {
    recRemoveAllStyles(document.querySelector("body"));
    
}

function recRemoveAllStyles(element) {
    // removing all styles
    element.style = "all: revert";
    [...element.children].forEach(recRemoveAllStyles);
}

function recAddAllStyles(element) {
    // removing all styles
    element.style = "";
    [...element.children].forEach(recAddAllStyles);
}

function addStyles() {
    recAddAllStyles(document.querySelector("body"));
}

// window.onload = toggleFunctionality;