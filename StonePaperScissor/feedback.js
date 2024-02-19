


document.addEventListener('DOMContentLoaded', DOMCreation);

function DOMCreation () {
    const feedbackForm = document.querySelector('.feedback-form');
    feedbackForm.addEventListener('submit', submit);  
}

function submit(e) {
    e.preventDefault();
    const feedbackText = document.querySelector('#feedback').value.trim();
    if (feedbackText !== '') {
        window.location.href = "feedback.html";
    } else {
        alert("Please provide your feedback before submitting.");
    }
}