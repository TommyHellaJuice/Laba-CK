//          1 задание
document.addEventListener("DOMContentLoaded", function () {
    function getCurrentDate() {
        console.log(Date.now());
    }
    var intervalId = setInterval(getCurrentDate, 5000);
    setTimeout(function () {
        clearInterval(intervalId);
    }, 60000);
});
//          2 задание
function createLogger(message) {
    return function () {
        console.log(message);
    };
}
var logger = createLogger("Hello, world!");
logger();