document.addEventListener("DOMContentLoaded", function () {
    function isMobile() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    if (isMobile()) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.add('desktop');
    }

    function copyrightDate() {
        var currentYear = new Date().getFullYear();
        document.getElementById("copyright-year").textContent = currentYear;
    }
});
