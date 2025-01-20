document.addEventListener("DOMContentLoaded", () => {
    const customSelect = document.querySelector(".custom-select");
    const selectedOption = customSelect.querySelector(".selected-option");
    const dropdownOptions = customSelect.querySelector(".dropdown-options");
    const options = customSelect.querySelectorAll(".option");

    // Toggle dropdown on click
    selectedOption.addEventListener("click", () => {
        dropdownOptions.classList.toggle("show"); // Use the 'show' class
    });

    // Add event listeners to options
    options.forEach(option => {
        option.addEventListener("click", () => {
            const value = option.getAttribute("data-value");
            selectedOption.textContent = option.textContent;
            selectedOption.setAttribute("data-value", value);
            dropdownOptions.classList.remove("show"); // Hide dropdown after selection
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!customSelect.contains(event.target)) {
            dropdownOptions.classList.remove("show");
        }
    });
});
