// feedback.js
document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedbackForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value || "Anonymous",
            email: document.getElementById('email').value || "Not provided",
            rating: document.querySelector('input[name="rating"]:checked')?.value || "No rating",
            message: document.getElementById('message').value,
            date: new Date().toLocaleString()
        };

        const feedbacks = JSON.parse(localStorage.getItem('piggyFeedback')) || [];
        feedbacks.push(formData);
        localStorage.setItem('piggyFeedback', JSON.stringify(feedbacks));

        feedbackForm.style.display = 'none';
        thankYouMessage.style.display = 'block';
        feedbackForm.reset();
    });
});