document.addEventListener('DOMContentLoaded', function () {
    // Set the target time to 11:00 AM
    const targetTime = new Date();
    targetTime.setHours(23, 55, 0, 0); // set final time here

    // Calculate the remaining time until 11:00 AM
    const currentTime = new Date();
    let remainingTime = targetTime - currentTime;

    // Update the countdown element with the calculated time
    updateCountdown();

    // Start the countdown interval
    const countdownInterval = setInterval(function () {
        remainingTime -= 1000;
        updateCountdown();

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('timer').textContent = "Time's up!";
        }
    }, 1000);

    // Function to update the countdown element
    function updateCountdown() {
        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        document.getElementById('countdown').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
// Autowriting effect
    const autoWriteElements = document.querySelectorAll('.autoWrite');
    autoWriteElements.forEach(element => {
        const originalText = element.getAttribute('data-text');
        element.textContent = ''; // Clear the content initially
        let charIndex = 0;

        function autoWrite() {
            if (charIndex <= originalText.length) {
                element.textContent += originalText.charAt(charIndex);
                charIndex += 1;
                setTimeout(autoWrite, 200); // Adjust the speed of autowriting
            }
	    else{
 		 setTimeout(function() {
	           element.textContent = ''; // Clear the content initially
                   charIndex = 0;
                   autoWrite(); 
                            // Code for the else block after the delay
                 }, 2000);
	    }
        }

        setTimeout(autoWrite, 1000); // Delay the autowriting to give time for other elements to load
    });
});
function showLocation(locationName) {
  const locationInfo = document.getElementById('location-info');
  const mouseX = event.clientX + window.scrollX; // Adjust the mouse X coordinate relative to the map container
  const mouseY = event.clientY + window.scrollY; // Adjust the mouse Y coordinate relative to the map container

  locationInfo.textContent = `${locationName}`;
  locationInfo.style.top = mouseY + 'px';
  locationInfo.style.left = mouseX + 'px';
  locationInfo.style.display = 'block';

  setTimeout(() => {
    locationInfo.style.display = 'none';
  }, 60000); // Display the location info for 3 seconds (adjust as needed)
}

