const matches = undefined;
const clicks = 0;
const pairMatched = 0;
const pairsUnmatched = 0;
const totalPairs = 0;

const start = () => {

}

const restart = () => {

}

const setDifficulty = () => {

}

const win = () => {

}

const updateInfo = () => {

}

const matchCheck = () => {
    /* Increment the number of clicks */
    clicks++;

    cardTwoNumber = jQuery(this).attr('id');
    /* if the same card is clicked twice, do nothing and reset card two */
    if (cardOneNumber == cardTwoNumber) {
        console.log("same card");
        cardTwo = undefined;
        cardTwoNumber = undefined;
        return;
    }

    if (cardOne != undefined && cardTwo != undefined) {
        console.log("two cards");
        return;
    }

    /* flip it over */
    $(this).toggleClass("flip");

    /* if no cards are selected then record the card image */
    if (!cardOne) {
        cardOne = $(this).find(".frontFace")[0];
        cardOneNumber = jQuery(this).attr('id');

    } else {
        /* if one card is selected then record the card image and preform comparison*/
        cardTwo = $(this).find(".frontFace")[0];

        /* if the cards match */
        if (cardOne.src === cardTwo.src) {

            /* remove the click event from the cards */
            $(cardOne).parent().off("click");
            $(cardTwo).parent().off("click");

            /* if all cards are matched, win the game */
            matches++;
            if (matches == 3) {
                win();
            }

            /* reset the selected cards */
            cardOne = undefined;
            cardOneNumber = undefined;
            cardTwo = undefined;

        } else {

            /* if the cards don't match, wait a bit, then flip them back over*/
            setTimeout(function () {
                $(cardOne).parent().toggleClass("flip");
                $(cardTwo).parent().toggleClass("flip");

                /* reset the selected cards */
                cardOne = undefined;
                cardOneNumber = undefined;
                cardTwo = undefined;

            }, 1000);

        }

    }
}

const setup = () => {

    /* Create selected cards one and two */
    let cardOne = undefined;
    let cardOneNumber = undefined;
    let cardTwo = undefined;
    let cardTwoNumber = undefined;

    /* when you click on a card call match checker */
    $(".card").click(matchCheck);
}
$(document).ready(setup);