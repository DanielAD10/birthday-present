const form = document.getElementById("form");
const countdownDisplay = document.getElementById("countdown-display");

form.onsubmit = function(event) {
    event.preventDefault();

    let countdown = document.getElementById("countdown").value;
    const birthDate = new Date(countdown);
    // console.log(birthDate);
    const currentDate = new Date();
    console.log(currentDate);

    if (birthDate == currentDate) {
        console.log('Happy Birthday');
    } else {
        console.log('Your Birthday is coming soon');
    }

    const countDownTimer = setInterval(() => {
        // countdownDisplay.innerHTML = countdown;
        

        if(countdown < 0) {
            clearInterval(countDownTimer);
            countdownDisplay.innerHTML = "Done!";
        }
    }, 1000);
}