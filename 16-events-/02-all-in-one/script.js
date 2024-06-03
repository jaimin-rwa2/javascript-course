document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#registrationForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // what is this
        validateForm();
    });

    function validateForm() {
        const name = document.querySelector('#name').value.trim();
        const password = document.querySelector('#password').value.trim();
        const date = document.querySelector('#date').value;
        const hobby = document.querySelector('#hobby').value.trim();
        const email = document.querySelector('#email').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');

        let isValid = true;
        let errorMessage = '';

        // Validate name
        if (name === '') {
            isValid = false;
            errorMessage += 'Name is required.\n';
        }

        // Validate password
        if (password.length < 6) {
            isValid = false;
            errorMessage += 'Password must be at least 6 characters long.\n';
        }

        // Validate date
        if (date === '') {
            isValid = false;
            errorMessage += 'Date is required.\n';
        }

        // Validate email
        if (!validateEmail(email)) {
            isValid = false;
            errorMessage += 'Email is not valid.\n';
        }

        // Validate gender
        if (!gender) {
            isValid = false;
            errorMessage += 'Gender is required.\n';
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.submit(); // Uncomment this line to actually submit the form
        } else {
            alert(errorMessage);
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});