// Book Ticket button click interaction
const bookButtons = document.querySelectorAll('.book-btn');

bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = 'Selected ✓';
        button.classList.add('clicked');
        
        // Scroll smoothly to booking form
        document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Validation Function
function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const eventSelect = document.getElementById('eventSelect').value;
    const ticketCount = document.getElementById('ticketCount').value;

    const errorMsg = document.getElementById('errorMsg');
    const successMsg = document.getElementById('successMsg');

    errorMsg.textContent = '';
    successMsg.textContent = '';

    if (name === '' || email === '' || eventSelect === '' || ticketCount === '') {
        errorMsg.textContent = 'Please fill in all required fields!';
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        errorMsg.textContent = 'Please enter a valid email address!';
        return;
    }

    successMsg.textContent = `Success! Thank you ${name}, your booking for ${ticketCount} ticket(s) is confirmed.`;
    document.getElementById('bookingForm').reset();
}