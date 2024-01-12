        let timer;
        let seconds = 0, minutes = 0, hours = 0;

        function start() {
            if (!timer) {
                timer = setInterval(updateStopwatch, 1000);
            }
        }

        function stop() {
            clearInterval(timer);
            timer = null;
        }

        function reset() {
            stop();
            seconds = 0;
            minutes = 0;
            hours = 0;
            updateStopwatch();
        }

        function updateStopwatch() {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }

            const displayHours = hours < 10 ? "0" + hours : hours;
            const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
            const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

            document.getElementById("stopwatch").innerText = `${displayHours}:${displayMinutes}:${displaySeconds}`;
        }
    