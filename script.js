// Accessing elements
const toggleContainer = document.getElementById('toggle-container');
const body = document.body;
const modeText = document.getElementById('mode-text');
const sunMoonImage = document.getElementById('sun-moon-image');

// Function to toggle dark and light mode
toggleContainer.addEventListener('click', () => {
    // Toggle dark and light mode classes on body
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Change text based on mode
    if (body.classList.contains('dark-mode')) {
        modeText.textContent = 'Toggle to get Light Mode';
    } else {
        modeText.textContent = 'Toggle to get Dark Mode';
    }
});
