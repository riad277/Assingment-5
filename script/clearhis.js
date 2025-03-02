document.addEventListener('DOMContentLoaded', function () {
    const clearBtn = document.getElementById('clear-btn');
    const fieldElement = document.getElementById('field');
    const buttons = document.querySelectorAll('.btn');

    clearBtn.addEventListener('click', function () {
        fieldElement.innerHTML = '';
    });

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            const taskName = buttons[i].closest('.bg').querySelector('h3').innerText;
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const message = document.createElement('p');
            message.className = 'bg text-[#000000] opacity-80 text-xs rounded-md m-4 p-4';
            message.innerText = `You have completed the task ${taskName} at ${timeString}`;
            fieldElement.appendChild(message);
        });
    }
});
