// Load employee data from data.js
const employees = loadData();

// Render employee list
renderEmployeeList(employees);

// Add event listeners for edit and delete buttons
document.querySelectorAll('.edit-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const employeeId = event.target.dataset.id;
        // Navigate to edit form
        navigateToEditForm(employeeId);
    });
});

document.querySelectorAll('.delete-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const employeeId = event.target.dataset.id;
        // Delete employee
        deleteEmployee(employeeId);
        // Re-render employee list
        renderEmployeeList(employees);
    });
});