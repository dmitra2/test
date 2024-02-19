// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sectionHeaders = document.querySelectorAll('.history-section-header h2 p');
    sectionHeaders.forEach(header => {
        header.addEventListener('click', () => toggleDescription(header));
    });
});

const toggleDescription = header => {
    const description = header.parentElement.parentElement.nextElementSibling;
    if (description.style.display === "none" || !description.style.display) {
        description.style.display = "flex";
    } else {
        description.style.display = "none";
    }
};
