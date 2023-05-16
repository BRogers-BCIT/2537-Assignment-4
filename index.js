const setup = () => {
    /* Create selected cards one and two */
    let cardOne = undefined;
    let cardTwo = undefined;

    /* when you click on a car */
    $(".card").click(function () {

        /* flip it over */
        $(this).toggleClass("flip");

        /* if no cards are selected then record the card image */
        if (!cardOne) {
            cardOne = $(this).find(".frontFace")[0];
            console.log(cardOne);

        } else {

            /* if one card is selected then record the card image and preform comparison*/
            cardTwo = $(this).find(".frontFace")[0];
            console.log(cardTwo);

            /* if the cards match */
            if (cardOne.src === cardTwo.src) {
                console.log("match");

                /* remove the click event from the cards */
                $(cardOne).parent().off("click");
                $(cardTwo).parent().off("click");

                /* reset the selected cards */
                cardOne = undefined;
                cardTwo = undefined;

            } else {

                /* if the cards don't match, wait a bit, then flip them back over*/
                setTimeout(function () {
                    $(cardOne).parent().toggleClass("flip");
                    $(cardTwo).parent().toggleClass("flip");

                    /* reset the selected cards */
                    cardOne = undefined;
                    cardTwo = undefined;

                }, 1000);

            }

        }

    });
}
$(document).ready(setup);