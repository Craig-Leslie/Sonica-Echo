function printPage() {
    window.print();
}

function autoResize(event) {
    event.target.style.height = 'auto';
    event.target.style.height = (event.target.scrollHeight) + 'px';
}

function popNumbers() {
    const select = document.getElementById('numWeeks');
    for (let i = 1; i <= 52; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
}
window.onload = popNumbers;