var playing = false;
var score ;
var trialsLeft;
var step;
var action; //used for set interval
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];
$(function(){
    //click on strat / reset button 
   $("#startreset").click(function(){
       
       //yes we are playing
       if(playing == true){
           
            //reload page
           location.reload();
          }else{
              
              //we are not playing
              playing = true; //game initiated
              
              //set score to zero
              score = 0; 
              $("#scorevalue").html(score);
              
              //show trials left
              $("#trialsLeft").show();
              trialsLeft= 3;
              addHearts();
              
              //change button text to reset game
              $("#startreset").html("Reset Game");
              
              
              //hide game over box
              $("#gameOver").hide();
              
              
              //start sending fruits
              startAction();
              
              //send new fruit
              startAction();
          }
   }); 

    $("#fruit1").mouseover(function(){
       score++;
        $("#scorevalue").html(score); //updating score
        //docuemnt.getElementById("slicesound").play();
        $("#slicesound")[0].play(); //play sound
        
        //stop fruit 
        clearInterval(action);
        
        //hide fruit
        $("#fruit1").hide("explode", 500);
        
        //send new fruit
        setTimeout(startAction, 500);
        
    });
//slice a fruit
    //play sound
    //explode fruit

//functions

function addHearts(){
    
    for(i=0; i < trialsLeft; i++){
        $("#trialsLeft").empty();
                  $("#trialsLeft").append('<img src="images/hearts.png" class="life">');
              }
}

//start sending fruits
function startAction(){
    $("#fruit1").show();
    chooseFruit();//choose a random fruit
    $("#fruit1").css({
        'left': Math.round(550*Math.random()), 'top': -50
    });
    //random position
    
    //generate a random step
    step = 1+ Math.round(5*Math.random()); //change step
    
    //move fruit down by one step evey 10ms
    action = setInterval(function(){
        //move fruit by one step
        $("#fruit1").css('top', $("#fruit1").position().top + step);
    
}

//check if the fruit is too low
if($("#fruit1").position().top > $("#fruitsContainer").height()){
    //check if we have trials left
        if(trialsLeft > 1 ){
           $("#fruit1").show();
    chooseFruit();//choose a random fruit
    $("#fruit1").css({
        'left': Math.round(550*Math.random()), 'top': -50
    });
            //reduce trials by 1 
            trialsLeft --;
            
            //populate trials left box
            addHearts();
            
           }else{ //game over
               playing = false; //we are not playing anymmore
               $("#startreset").html("Start Game");//change button to start game
               $("#gameOver").show();
               $("#gameOver").html('<p>Game Over</p> <p>Your Score is' + score + '</p>');
               $("#trialsLeft").hide();
               stopAction();
           }
}
    }, 10);

//generate a random fruit
function chooseFruit(){
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(8 *Math.random())] + '.png');
}

//stop dropping fruits
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
    )};