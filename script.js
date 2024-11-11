document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('login-modal');
    const personIcon = document.getElementById('person-icon');
    const closeBtn = document.querySelector('.close');

    personIcon.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
