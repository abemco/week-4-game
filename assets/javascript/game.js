
var random_result;
var lost = 0;
var win = 0;
var previous = 0;




var resetAndStart = function () {

    //Empting the Crystals
    $(".crystals").empty();
    
    //Generate a new result from 19 until 120
    random_result = Math.floor(Math.random() * 101) + 19; 

        //Adding to the DOM
        $("#result").html('Random Result: ' + random_result);

        //For loop 4 Crystals
        for(var i = 0; i < 4; i++){

            //Creating a random number each loop from 1 until 12
            var random = Math.floor(Math.random() * 11) + 1;         

            var crystal = $("<div>");
                crystal.attr({
                    "class": 'crystal',
                    "data-random": random
                });

            $(".crystals").append(crystal);

        }

        $("#previous").html("Total Score: " + previous);

    }

resetAndStart();
    
    //Event Delegation
    $(document).on('click', ".crystal", function () {
        
        var num = parseInt($(this).attr('data-random'));

        previous += num;

        $("#previous").html("Total Score: " + previous);

        console.log(previous);

        if(previous > random_result){
            lost++;

            $("#lost").html("Sorry pal try again: " + lost);

            previous = 0;

            resetAndStart();
        }
        else if(previous === random_result){
            win++;

            $("#win").html("You have chosen wisely: " + win);

            previous = 0;

            resetAndStart();
        }

});



// Speudo coding

// A game with 4 crystals and random result
// Every crystal needs to have a random number between 1 - 12
//A new random number should be generate every single time we win or lost 
// to those 4 crystals
// When clicking any Crystal, it should be adding with the previous result 
// Until it equals the Random Result
// If it is greater then the Random Result , we decrement a lost counter
// If it is equal, then we increment a win counter


