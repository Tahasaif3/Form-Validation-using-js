document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        validateForm();
    });

    function validateForm() {
        // Reset error messages
        resetErrors();

        // Validate Name
        if (nameInput.value.trim() === '') {
            setError('nameError', 'Name is required');
        }

        // Validate Email
        if (emailInput.value.trim() === '') {
            setError('emailError', 'Email is required');
        } else if (!isValidEmail(emailInput.value)) {
            setError('emailError', 'Please enter a valid email');
        }

        // Validate Password
        if (passwordInput.value === '') {
            setError('passwordError', 'Password is required');
        } else if (passwordInput.value.length < 6) {
            setError('passwordError', 'Password must be at least 6 characters');
        }

        // If no errors, form is valid
        if (!document.querySelector('.error').textContent) {
            alert('Form submitted successfully!');
            form.reset();
        }
    }

    function setError(id, message) {
        document.getElementById(id).textContent = message;
    }

    function resetErrors() {
        document.querySelectorAll('.error').forEach(error => error.textContent = '');
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});