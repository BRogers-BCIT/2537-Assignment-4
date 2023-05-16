let matches = undefined;

/* user info */
let clicks = 0;
let pairsMatched = 0;
let pairsUnmatched = 0;
let totalPairs = 0;

/* Create selected cards one and two */
let cardOne = undefined;
let cardOneNumber = undefined;
let cardTwo = undefined;
let cardTwoNumber = undefined;


const setup = () => {

    /* when you click on a card call match checker */
    $(".card").click(function () {
        /* Increment the number of clicks */
        clicks++;


        /* if the same card is clicked twice, do nothing and reset card two */
        cardTwoNumber = jQuery(this).attr('id');
        if (cardOneNumber == cardTwoNumber) {
            console.log("same card");
            cardTwo = undefined;
            cardTwoNumber = undefined;
            return;
        }

        /* prevent more than two cards from being selected */
        if (cardOne != undefined && cardTwo != undefined) {
            console.log("two cards");
            return;
        }

        /* flip the selected card over over */
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
                pairsMatched++;
                pairsUnmatched--;
                if (matches == totalPairs) {
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
    });

    /* when you click on a difficulty button call difficulty setter */
    $(".difficultyButton").click(function () {


    });
    /* when you click on a reset button call reset */
    $(".reset").click(function () {


    });
    /* when you click on a start button call start */
    $(".start").click(function () {


    });
    /* when you click on a power up button call power up */
    $(".powerUp").click(function () {


    });
    /* when you click on a lighting button call lighting */
    $(".lighting").click(function () {


    });
}
$(document).ready(setup);

