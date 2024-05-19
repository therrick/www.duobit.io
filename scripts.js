document.addEventListener('DOMContentLoaded', function() {
    const digits = document.querySelectorAll('.digit');

    digits.forEach(digit => {
        digit.addEventListener('mouseenter', function() {
            this.textContent = '1';
        });

        digit.addEventListener('mouseleave', function() {
            this.textContent = '0';
        });
    });
});
