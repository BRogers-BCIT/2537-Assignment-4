let matches = undefined;

/* user info */
let clicks = 0;
let pairsMatched = 0;
let pairsUnmatched = 0;
let totalPairs = 0;
let totalTime = 0;

/* Create selected cards one and two */
let cardOne = undefined;
let cardOneNumber = undefined;
let cardTwo = undefined;
let cardTwoNumber = undefined;

/* power up check */
let powerUp = false;
let usedPowerUp = false;


const setup = () => {

    /* update the players time as the game goes on */
    setInterval(() => {
        if (totalPairs != 0) {
            totalTime--;
        }
    }, 1000);

    /* when you click on a card call match checker */
    $(".card").click(function () {
        /* if the power up is in effect or time is out, do nothing */
        if (powerUp == false && totalTime != 0) {

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
        }
        $("#playerInfo").html(`
        <h4> Clicks: ${clicks} </h4>
        <h4> Total Pairs: ${totalPairs} </h4>
        <h4> Pairs Matched: ${pairsMatched} </h4>
        <h4> Pairs Unmatched: ${pairsUnmatched} </h4>
        <h4> Total Time: ${totalTime} </h4>`);
    });

    /* when you click on a difficulty button call difficulty setter */
    $(".difficultyButton").click(function () {
        /* reset the difficulty buttons colors*/
        $(`#easy`).css({ "background-color": "#007bff", "border-color": "#007bff" });
        $(`#medium`).css({ "background-color": "#007bff", "border-color": "#007bff" });
        $(`#hard`).css({ "background-color": "#007bff", "border-color": "#007bff" });

        /* get the difficulty and set the number of pairs */
        let difficulty = $(this).attr('id');
        if (difficulty == "easy") {
            totalPairs = 3;
            totalTime = 30;
        } else if (difficulty == "medium") {
            totalPairs = 6;
            totalTime = 60;
        } else if (difficulty == "hard") {
            totalPairs = 9;
            totalTime = 90;
        }
        pairsUnmatched = totalPairs;

        /* set the difficulty button color and turn on the start and reset buttons*/
        $("#start").css({ "background-color": "#007bff", "border-color": "#007bff" });
        $("#reset").css({ "background-color": "#007bff", "border-color": "#007bff" });
        $(`#${difficulty}`).css({ "background-color": "green", "border-color": "green" });
    });

    /* when you click on a reset button call reset */
    $(".reset").click(function () {


    });

    /* when you click on a start button call start */
    $(".start").click(function () {


    });

    /* when you click on a power up button call power up */
    $(".powerUp").click(function () {
        /* if they have not used the power up and the board is set up */
        if (usedPowerUp == false) {
            if (totalPairs != 0) {

                /* set the power up to used and in effect and flip all the cards */
                usedPowerUp = true;
                powerUp = true;
                for (cards = 1; cards <= totalPairs; cards++) {
                    let card = $(`#card${cards}`);
                    console.log(card);
                    card.toggleClass("flip");
                }

                /* wait a bit then flip the cards back over and set the power up to not in effect */
                setTimeout(function () {
                    for (cards = 1; cards <= totalPairs; cards++) {
                        let card = $(`#card${cards}`);
                        card.toggleClass("flip");
                    }
                    powerUp = false;
                }, 1000);
            }
        }
    });

    /* when you click on a lighting button call lighting */
    $(".lighting").click(function () {
        let light = $(this).attr('id');
        if (light == "dark") {
            $('body').css("background", "gray")
            $('#dark').css("color", "tomato")
            $('#light').css("color", "black")
        } else if (light == "light") {
            $('body').css("background", "white")
            $('#dark').css("color", "white")
            $('#light').css("color", "tomato")
        }
    });
}
$(document).ready(setup);

