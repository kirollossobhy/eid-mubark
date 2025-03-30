

document.getElementById('screenshot-button').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') {
        alert('Please enter some text.');
        return;
    }

    const button = document.getElementById('screenshot-button');
    button.style.display = 'none'; // Temporarily hide the button

    const imgCover = document.querySelector('.img-cover'); // Target the `.img-cover` element
    html2canvas(imgCover, { scale: 2 }).then(canvas => {
        // Save the image
        let link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = canvas.toDataURL();
        link.click();

        // Show the button again
        button.style.display = 'block';
    });
});