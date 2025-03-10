document.addEventListener("DOMContentLoaded", function () {
    const patientSearchInput = document.querySelector(".search-wrapper input[placeholder='Pesquisar Paciente']");
    const preceptorSearchInput = document.querySelector(".search-wrapper input[placeholder='Pesquisar Preceptor']");


    function filterTable() {
        const patientFilter = patientSearchInput.value.toLowerCase();
        const preceptorFilter = preceptorSearchInput.value.toLowerCase();

        tableRows.forEach(row => {
            const patientName = row.cells[1].textContent.toLowerCase(); // Column 2 (Paciente)
            const preceptorName = row.cells[0].textContent.toLowerCase(); // Column 1 (Preceptor)

            const matchesPatient = patientName.includes(patientFilter);
            const matchesPreceptor = preceptorName.includes(preceptorFilter);

            if ((patientFilter === "" || matchesPatient) && (preceptorFilter === "" || matchesPreceptor)) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        });
    }

    patientSearchInput.addEventListener("input", filterTable);
    preceptorSearchInput.addEventListener("input", filterTable);

    const statusFilterIcon = document.querySelector(".status-filter-icon");
    const statusDropdown = document.querySelector(".status-dropdown");
    const statusOptions = document.querySelectorAll(".dropdown-item");


    // Show/hide dropdown menu on click
    statusFilterIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents clicking outside from closing immediately
        statusDropdown.classList.toggle("active");
    });

    // Hide dropdown when clicking anywhere else
    document.addEventListener("click", function () {
        statusDropdown.classList.remove("active");
    });

    // Stop closing dropdown when clicking inside it
    statusDropdown.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // Handle filter selection
    statusOptions.forEach(option => {
        option.addEventListener("click", function () {
            const selectedStatus = this.getAttribute("data-status");

            // Loop through table rows to filter
            tableRows.forEach(row => {
                const statusCell = row.querySelector("td:nth-child(9)"); // Status column
                if (statusCell) {
                    const statusText = statusCell.textContent.trim();

                    if (selectedStatus === "All" || statusText === selectedStatus) {
                        row.style.display = ""; // Show row
                    } else {
                        row.style.display = "none"; // Hide row
                    }
                }
            });

            // Close dropdown after selection
            statusDropdown.classList.remove("active");
        });
    });

    const red2greenFilterIcon = document.querySelector(".red2green-filter-icon");
    const red2greenDropdown = document.querySelector(".red2green-dropdown");
    const tableRows = document.querySelectorAll(".table-container table tbody tr");

    // Toggle dropdown visibility when clicking the icon
    red2greenFilterIcon.addEventListener("click", (event) => {
        red2greenDropdown.classList.toggle("hidden");
        event.stopPropagation(); // Prevent event bubbling
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!red2greenDropdown.contains(event.target) && !red2greenFilterIcon.contains(event.target)) {
            red2greenDropdown.classList.add("hidden");
        }
    });

    // Filter table rows based on Red2Green selection
    red2greenDropdown.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", () => {
            const selectedValue = item.getAttribute("data-value");
    
            tableRows.forEach(row => {
                const red2greenCell = row.children[7]; // 8th column (index 7)
                if (selectedValue === "All" || red2greenCell.textContent.trim() === selectedValue) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
    
            red2greenDropdown.classList.add("hidden"); // Hide dropdown after selection
        });
    });
    

});