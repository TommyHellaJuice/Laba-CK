//          1 задание
document.addEventListener("DOMContentLoaded", function() {
    function getCurrentDate(): void
    { 
        console.log(Date.now()); 
    }

    let intervalId = setInterval(getCurrentDate, 5000);

    setTimeout(function() {
        clearInterval(intervalId);
    }, 60000);
});


//          2 задание
function createLogger(message: string): Function
{
    return function() {
        console.log(message);
    };
}

const logger: Function = createLogger("Hello, world!");
logger();