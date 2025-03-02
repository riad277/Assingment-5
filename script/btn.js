const buttons = document.querySelectorAll('.btn');
const assignElement = document.getElementById('assing');
const increaseElement = document.getElementById('increase');

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function () {
        button.disabled = true;
        button.style.opacity = '0.3';

        let currentAssignValue = parseInt(assignElement.innerText, 10);
        currentAssignValue -= 1;
        assignElement.innerText = currentAssignValue;

        let currentIncreaseValue = parseInt(increaseElement.innerText, 10);
        currentIncreaseValue += 1;
        increaseElement.innerText = currentIncreaseValue;

        alert('Board updated Successfully');
    });
}
