document.addEventListener('DOMContentLoaded', function () {
    const timerContainers = document.querySelectorAll('.timer-container');
    timerContainers.forEach((timerContainer, index) => {
        const targetTime = new Date();
        targetTime.setHours(hour, minute, 0, 0);
        let remainingTime = targetTime - new Date();
        const countdownId = `countdown${index + 1}`;
        updateCountdown(countdownId, remainingTime);
        const countdownInterval = setInterval(function () {
            remainingTime -= 1000;
            updateCountdown(countdownId, remainingTime);
            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                timerContainer.textContent = "Data Leaked!";
            }
        }, 1000);
    });
    function updateCountdown(countdownId, remainingTime) {
        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        document.getElementById(countdownId).textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    const autoWriteElements = document.querySelectorAll('.autoWrite');
    autoWriteElements.forEach(element => {
        const originalText = element.getAttribute('data-text');
        element.textContent = '';
        let charIndex = 0;
        function autoWrite() {
            if (charIndex <= originalText.length) {
                element.textContent += originalText.charAt(charIndex);
                charIndex += 1;
                setTimeout(autoWrite, 200);
            } else {
                setTimeout(function () {
                    element.textContent = '';
                    charIndex = 0;
                    autoWrite();
                }, 2000);
            }
        }
        setTimeout(autoWrite, 1000);
    });
});
