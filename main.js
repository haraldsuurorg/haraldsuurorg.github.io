document.addEventListener("DOMContentLoaded", function () {
    let jsKütusekulu = document.getElementById("kütusekulu");
    let jsKilomeetrid = document.getElementById("kilomeetrid");
    let jsVastus = document.getElementById("vastus");

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        let kütusekuluValue = parseFloat(jsKütusekulu.value);
        let kilomeetridValue = parseFloat(jsKilomeetrid.value);

        if (isNaN(kütusekuluValue) || isNaN(kilomeetridValue) || kütusekuluValue < 0 || kilomeetridValue < 0) {
            jsVastus.innerHTML = "Invalid input";
        } else {
            let result = kütusekuluValue / (kilomeetridValue / 100);
            jsVastus.innerHTML = result.toFixed(1) + " l/100km";
        }
    });
});