// Select the dropdown toggle and options container
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownOptions = document.querySelector('.dropdown-options');

// Add an event listener to the dropdown toggle
dropdownToggle.addEventListener('click', () => {
    // Toggle the visibility of the options container
    dropdownOptions.classList.toggle('show');
});

// Close the dropdown if clicked outside of it
document.addEventListener('click', (event) => {
    if (!dropdownToggle.contains(event.target) && !dropdownOptions.contains(event.target)) {
        dropdownOptions.classList.remove('show');
    }
});


// Add event listeners to each dropdown option
const dropdownItems = document.querySelectorAll('.dropdown-options .option');
dropdownItems.forEach(option => {
    option.addEventListener('click', () => {
        // Set the text of the dropdown toggle to the selected preceptor's name
        dropdownToggle.textContent = option.textContent;
        
        // Hide the dropdown options
        dropdownOptions.classList.remove('show');
    });
});

