document.getElementById('see-qr-btn').addEventListener('click', function() {
    const qrDisplay = document.getElementById('qr-display');
    qrDisplay.style.display = qrDisplay.style.display === 'none' ? 'block' : 'none';
});

// QR Code zoom functionality
document.getElementById('qr-image').addEventListener('click', function() {
    document.getElementById('qr-modal').style.display = 'block';
});

document.querySelector('.qr-close').addEventListener('click', function() {
    document.getElementById('qr-modal').style.display = 'none';
});

// Close modal when clicking outside the image
document.getElementById('qr-modal').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});