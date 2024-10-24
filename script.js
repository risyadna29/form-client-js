function showError(elementId, message) {
    const error = document.getElementById(elementId);
    const input = document.getElementById(elementId.replace('Error', ''));
    error.style.display = 'block';
    error.textContent = message;
    input.classList.add('input-error');
}

function hideError(elementId) {
    const error = document.getElementById(elementId);
    const input = document.getElementById(elementId.replace('Error', ''));
    error.style.display = 'none';
    input.classList.remove('input-error');
}

function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.style.display = 'none');

    const inputs = document.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], input[type="password"], textarea');
    inputs.forEach(input => input.classList.remove('input-error'));

    const firstName = document.getElementById('firstName').value.trim();
    if (firstName === '') {
        showError('firstNameError', 'Nama depan wajib diisi');
        isValid = false;
    } else if (firstName.length < 2) {
        showError('firstNameError', 'Nama depan minimal 2 karakter');
        isValid = false;
    }

    const lastName = document.getElementById('lastName').value.trim();
    if (lastName === '') {
        showError('lastNameError', 'Nama belakang wajib diisi');
        isValid = false;
    } else if (lastName.length < 2) {
        showError('lastNameError', 'Nama belakang minimal 2 karakter');
        isValid = false;
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        showError('genderError', 'Pilih gender Anda');
        isValid = false;
    }

    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/;
    if (phone === '') {
        showError('phoneError', 'Nomor telepon wajib diisi');
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        showError('phoneError', 'Format nomor telepon tidak valid');
        isValid = false;
    }

    const address = document.getElementById('address').value.trim();
    if (address === '') {
        showError('addressError', 'Alamat wajib diisi');
        isValid = false;
    } else if (address.length < 10) {
        showError('addressError', 'Alamat terlalu singkat (minimal 10 karakter)');
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError('emailError', 'Email wajib diisi');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('emailError', 'Format email tidak valid');
        isValid = false;
    }

    const password = document.getElementById('password').value;
    if (password === '') {
        showError('passwordError', 'Password wajib diisi');
        isValid = false;
    } else if (password.length < 8) {
        showError('passwordError', 'Password minimal 8 karakter');
        isValid = false;
    }

    if (isValid) {
        alert('Pendaftaran member berhasil!');
        document.getElementById('memberForm').reset();
    }

    return isValid;
}
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('input', function() {
        const errorId = this.id + 'Error';
        hideError(errorId);
    });
});