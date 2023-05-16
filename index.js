const setup = () => {
    $(".card").click(function () {
        $(this).toggleClass("flip");
    });
}
$(document).ready(setup);