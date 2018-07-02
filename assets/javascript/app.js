
let i = 0;
let right = 0;
let wrong = 0;
let unanswered = 0;
let intervalId;
let clockRunning= false;

var questions = [
    {   //1
        question: "In all low-income countries across the world today, how many girls finish primary school?",
        choices: ["20%", "40%", "60%" ],
        correct: 2,

    } , 
    {   //2
        question: "Where does the majority of the world population live?",
        choices: ["Low income countries", "Middle income countries", "High income countries" ],
        correct: 1,
        
    } , 
    {   //3
        question: "In the last 20 years the proportion of the world population living in extreme poverty has?",
        choices: ["Almost doubled", "remained more or less the same", "Almost halved" ],
        correct: 2,
        
    } , 
    {   //4
        question: "What is the life expectancy of the world today?",
        choices: ["50 years", "60 years", "70 years" ],
        correct: 2,
        
    } , 
    {   //5
        question: "There are 2 billion children in the world today aged 0-15 years old, how many children will there be in year 2100 according to the United Nations?",
        choices: ["4 billion", "3 billion", "2 billion" ],
        correct: 2,
        
    } , 
    {   //6
        question: "The UN predicts that by 2100 the world population will have increased by another 4 billion people, what is the main reason?",
        choices: ["There will be more children aged below 15", "There will be more adults aged 15-74", "There will be more very old people aged 75 and older" ],
        correct: 1,
        
    } , 
    {   //7
        question: "How did the number of deaths per year from natural disasters change over the last 100 years?",
        choices: ["More than doubled", "Remained about the same", "Decreased to less than half" ],
        correct: 2,
        
    } , 
    {   //8
        question: "There are roughly 7 billion people in the world today, which options more accurately represents where they live?",
        choices: ["1 billion in Europe, 4 billion is Asia, 2 billion in Africa and 1 billion in America", "1 billion in Europe, 3 billion in Asia, 2 billion in Africa and 1 billion in America", "1 billion in Europe, 3 billion in Asia, 1 billion in Africa and 2 billion in America" ],
        correct: 0,
        
    } , 
    {   //9
        question: "How many of the world's 1 year old children today have been vaccinated against some diseases?",
        choices: ["20%", "50%", "80%" ],
        correct: 2,
        
    } , 
    {   //10
        question: "Worldwide, 30 year old men have spent 10 years in school on average, how many years have women of the same age spent in school?",
        choices: ["9 years", "6 years", "3 years" ],
        correct: 0,
        
    } , 
    {   //11
        question: " In 1996 tigers, giant pandas and Black Rhinos were all listed as endangered, how many of these three species are critically endangered today?",
        choices: ["2 of them", "1 of them", "none of them" ],
        correct: 2,
        
    } , 
    {   //12
        question: "How many people in the world have some access to electricity?",
        choices: ["20%", "50%", "80%" ],
        correct: 2,
        
    } , 
    {   //13
        question: "Global climate experts believe that over the next 100 years the average temperature will on average?",
        choices: ["Get warmer", "Remain the same", "Get colder" ],
        correct: 0,
        
    } , 
    
]
    
    
    const reset = function(){
        let currQuest = questions[i];
       
        $('#question').html(questions[i].question);
        
    
        $("#choice1").html(currQuest.choices[0]);
        $("#choice2").html(currQuest.choices[1]);
        $("#choice3").html(currQuest.choices[2]);
            

    }



    const displayResults = function(){
        $('#results').css("display","unset");
        $('.content').css("display","none");
        setTimeout(function(){
            $('#results').css("display","none");
            $('.content').css("display","unset");
            i++;
           
            
            
            
            reset();


        }, 2000);
        
    }






    //TO-DO set an interval clock and append it into the html once the game is initilized
    //This is the click handler event that hides the start button and displays the game
$(".btn").on("click",function(){

    let currQuest = questions[i];
    $('.btn').css("display","none");
    $('.content').css("display","unset");
    $('#question').html(questions[i].question);
                // call reset
    

   
    $("#choice1").html(currQuest.choices[0]);
    $("#choice2").html(currQuest.choices[1]);
    $("#choice3").html(currQuest.choices[2]);

    
});

$("#choice1").on("click", function(){
    let currQuest = questions[i];
     
    if (currQuest.correct === 0){
        right++;
        console.log("correct"); 
        $("#right").html(right);
       
        
        
        
    } else {
        //display incorrect and show correct answer for timeer 
        
        wrong++;
        $("#wrong").html(wrong);
        console.log("wrong");

    }
    displayResults();
        $("#unanswered").html(unanswered); 
}); 

$("#choice2").on("click", function(){
    let currQuest = questions[i];
     
    if (currQuest.correct === 1){
        right++;
        console.log("correct"); 
        $("#right").html(right);
       
        
        
        
    } else {
        //display incorrect and show correct answer for timeer 
        
        wrong++;
        $("#wrong").html(wrong);
        console.log("wrong");

    }
    displayResults();
        $("#unanswered").html(unanswered); 
}); 



$("#choice3").on("click", function(){
    let currQuest = questions[i];
     
    if (currQuest.correct === 2){
        right++;
        console.log("correct"); 
        $("#right").html(right);
       
        
        
        
    } else {
        //display incorrect and show correct answer for timeer 
        
        wrong++;
        $("#wrong").html(wrong);
        console.log("wrong");

    }
    displayResults();
        $("#unanswered").html(unanswered); 
}); 

$("#clock").html();
    
   function() {
    if (!clockRunning){
        intervalId = setInterval(,-1000)
    }
}
 



let timeConverter = function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }






















    
    
    
    
    
    
    
  


//to do randomize the question order and display perecentage on reset


