document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const resume = document.getElementById('resume').value;
        
        let errorMessages = [];
        
        if (name.trim() === '') {
            errorMessages.push('Full Name is required.');
        }
        
        if (email.trim() === '') {
            errorMessages.push('Email is required.');
        } else if (!validateEmail(email)) {
            errorMessages.push('Invalid email format.');
        }
        
        if (phone.trim() === '') {
            errorMessages.push('Phone Number is required.');
        }
        
        if (resume.trim() === '') {
            errorMessages.push('Resume is required.');
        }
        
        if (errorMessages.length > 0) {
            event.preventDefault();
            alert(errorMessages.join('\n'));
        }
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
