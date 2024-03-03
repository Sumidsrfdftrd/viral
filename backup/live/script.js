document.addEventListener('DOMContentLoaded', function () {
    const targetTime = new Date();
    targetTime.setHours(hour, minute, 0, 0);
    const currentTime = new Date();
    let remainingTime = targetTime - currentTime;
    updateCountdown();
    const countdownInterval = setInterval(function () {
        remainingTime -= 1000;
        updateCountdown();
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('timer').textContent = "Data Leaked!";
        }
    }, 1000);
    function updateCountdown() {
        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        document.getElementById('countdown').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
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
            }
	    else{
 		 setTimeout(function() {
	           element.textContent = '';
                   charIndex = 0;
                   autoWrite(); 
                 }, 2000);
	    }
        }
        setTimeout(autoWrite, 1000);
    });
});