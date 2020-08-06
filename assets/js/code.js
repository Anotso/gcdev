document.addEventListener("DOMContentLoaded", function () {
    function printYear(){
        let currentYear = new Date();
        document.getElementById("year").innerHTML = currentYear.getFullYear();
    }
    printYear();
});