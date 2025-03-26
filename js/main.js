document.getElementById('screenshot-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') {
        alert('Please enter some text.');
        return;
    }

    const button = document.getElementById('screenshot-button');
    button.style.display = 'none'; // Hide the button

    html2canvas(document.body).then(canvas => {
        // Save the image
        let link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = canvas.toDataURL();
        link.click();

        // Open the image in a new tab
        let newTab = window.open();
        newTab.document.body.innerHTML = `<img src="${canvas.toDataURL()}" alt="Screenshot">`;

        button.style.display = 'block'; // Show the button again
    });
});
