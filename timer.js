(function () {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    let birthday = "Nov 16, 2023 13:00:00",
    countdown = new Date(birthday).getTime(),

    x = setInterval(function () {
        let currentDate = new Date().getTime(),
        distance = countdown - currentDate;

        document.getElementById("days").innerText = Math.floor(distance/(day)),

        document.getElementById("hour").innerText = Math.floor((distance % (day)) / (hour)),

        document.getElementById("minute").innerText = Math.floor((distance % (hour)) / (minute)),

        document.getElementById("second").innerText = Math.floor((distance % (minute)) / (second))

        // when the date is reached,
        if(distance < 0) {
            let headline = document.getElementById("headline");

            countdown = document.getElementById("countdown");

            content = document.getElementById("content");

            headline.innerText = "It's your Birthday";
            countdown.style.display = "none";
            content.style.display = "block";

            clearInterval(x);
        }
        //seconds
    }, 0)
}());

const event = document.getElementById("suprise");
function giftCard() {
    let giftCard = document.getElementById("card");

    content.style.display = "none";
    headline.style.display = "none";
    giftCard.style.display = "block";
}