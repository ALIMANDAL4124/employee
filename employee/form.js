// Get form elements
const form = document.getElementById('add-edit-form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const departmentInput = document.getElementById('department');
const roleInput = document.getElementById('role');

// Add event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Validate form data
    if (validateFormData()) {
        // Save employee data
        saveEmployeeData();
        // Navigate back to dashboard
        navigateToDashboard();
    }
});

// Validate form data
function validateFormData() {
    // Check for required fields
    if (!firstNameInput.value || !lastNameInput.value || !emailInput.value || !departmentInput.value || !roleInput.value) {
        alert('Please fill in all required fields.');
        return false;
    }
    // Check for valid email format
    if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

// Save employee data
function saveEmployeeData() {
    // Get employee data from form
    const employeeData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        department: departmentInput.value,
        role: roleInput}}