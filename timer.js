const form = document.getElementById("form");
const countdownDisplay = document.getElementById("countdown-display");

form.onsubmit = function(event) {
    event.preventDefault();

    let countdown = document.getElementById("countdown").value;

    const countDownTimer = setInterval(() => {
        countdownDisplay.innerHTML = countdown;
        countdown--;

        if(countdown < 0) {
            clearInterval(countDownTimer);
            countdownDisplay.innerHTML = "Done!";
        }
    }, 1000);
}