document.addEventListener('DOMContentLoaded', function () {
    const clearBtn = document.getElementById('clear-btn');
    const fieldElement = document.getElementById('field');
    const buttons = document.querySelectorAll('.btn');

    // Clear the field when the clear button is clicked
    clearBtn.addEventListener('click', function () {
        fieldElement.innerHTML = ''; // Clear all child elements inside 'field'
    });

    // Add event listeners to all buttons with the class 'btn'
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            // Get the task name from the closest <h3> element
            const taskName = buttons[i].closest('.bg').querySelector('h3').innerText;

            // Get the current time
            const now = new Date();
            const timeString = now.toLocaleTimeString(); // Format: "HH:MM:SS AM/PM"

            // Create a new message element
            const message = document.createElement('p');
            message.className = 'bg rounded-md m-4 p-2';
            message.innerText = `You have completed the task "${taskName}" at ${timeString}`;

            // Append the message to the 'field' element
            fieldElement.appendChild(message);

            
        });
    }
});