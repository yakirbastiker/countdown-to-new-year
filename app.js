const countdown = document.querySelector('.countdown');


const launcDate = new Date('jan 1, 2019 00:00:00').getTime();

//update ui

const intvl = setInterval(()=>{
    //get today date & time
    const now = new Date().getTime();
    // lunchdate - now
    const distance = launcDate -now;
    //time calc

    const days = Math.floor(distance / (1000 * 60 *60 *24));
    const hours = Math.floor((distance % (1000 * 60 *60 *24)) / (1000 * 60 *60));
    const mins = Math.floor((distance % (1000 * 60 *60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    //display 

    countdown.innerHTML = `<div>${days}<span>Days</span></div><div>${hours}<span>Hours</span></div><div>${mins}<span>Minutes</span></div><div>${secs}<span>Seconds</span></div>`;

    if(distance <0){
        clearInterval(intvl);
        countdown.style.color = "#17a2b8";
        countdown.innerHTML = "launched";
    }

},1000);

