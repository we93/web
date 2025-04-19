document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('loginFormContainer').style.display = 'block';
    document.getElementById('registerFormContainer').style.display = 'none';
    this.classList.add('active');
    document.getElementById('showRegister').classList.remove('active');
});

document.getElementById('showRegister').addEventListener('click', function() {
    document.getElementById('registerFormContainer').style.display = 'block';
    document.getElementById('loginFormContainer').style.display = 'none';
    this.classList.add('active');
    document.getElementById('showLogin').classList.remove('active');
});

// Toggle password visibility
document.getElementById('togglePassword').addEventListener('change', function() {
    const passwordField = document.getElementById('newPassword');
    passwordField.type = this.checked ? 'text' : 'password';
});

// Save registration details
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newUsername && email && newPassword) {
        localStorage.setItem('username', newUsername);
        localStorage.setItem('email', email);
        localStorage.setItem('password', newPassword);

        alert('Registration successful!');
        // Optionally switch to login form
        document.getElementById('showLogin').click();
    } else {
        alert('Please fill in all fields.');
    }
});

// Handle login details
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        alert('Invalid username or password.');
    }
});
