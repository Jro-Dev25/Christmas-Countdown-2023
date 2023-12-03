 const countDown = setInterval(()=> {
            
            const now = Date.now();
            
            const christmasTime = new Date('December 25, 2023, 00:00:00');

            const timeTillChristmas = christmasTime - now;

            const days = Math.floor(timeTillChristmas / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeTillChristmas % (1000 * 60 * 60 * 24) / (1000 * 60 *60)));
            const minutes = Math.floor((timeTillChristmas % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeTillChristmas % (1000 * 60)) / 1000);

            const display = timeTillChristmas < 0 ? `Merry Christmas` : `Days: <span class='time'>${days}</span>, Hours: <span class='time'>${hours}</span>, Minutes: <span class='time'>${minutes}</span>, Seconds: <span class='time'>${seconds}</span>`;

            document.getElementById("countdown").innerHTML = display;

            if ( christmasTime < 0 ) {
                clearInterval(countDown);
            }

        }, 1000)