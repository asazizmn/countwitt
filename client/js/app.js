var main = function () {
    "use strict";

    setInterval(function () {
        $.getJSON('count.json', function (count) {
            document.getElementById('countwitt').innerHTML = "[ " + count.awesome + " | awesome ] [ " + count.gnarly + " | gnarly ]";
            console.log(count.awesome);
            console.log(count.gnarly);
        });
    }, 3000);
};

$(document).ready(main);