var main = function () {
    "use strict";

    setInterval(function () {
        $.getJSON('count.json', function (count) {
            document.getElementById('countwitt').innerHTML = count.awesome + " tweets with the word \'awesome\' have appeared so far";
            console.log(count.awesome);
        });
    }, 3000);
}

$(document).ready(main);