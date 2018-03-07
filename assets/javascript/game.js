
var random_result;
var lost;
var win;




random_result = Math.floor(Math.random() * 101) + 19; //hoisting


$("#result").html('Random Result: ' + random_result);

for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);


    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

    $(".crystals").append(crystal);

}


$(".crystal").on('click', function () {
    
    console.log($(this).attr('data-random'));

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


