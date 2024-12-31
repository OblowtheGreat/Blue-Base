document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");
    const eventDate = new Date("2024-08-03T09:00:00"); // Example event date

    function updateCountdown() {
        const now = new Date();
        const timeLeft = eventDate - now;

        if (timeLeft <= 0) {
            countdownElement.textContent = "The event is happening now!";
            clearInterval(countdownTimer);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining.`;
    }

    const countdownTimer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
});
