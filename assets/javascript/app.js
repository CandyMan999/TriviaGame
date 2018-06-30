var questions = ["In all low-income countries across the world today, how many girls finish primary school?" , "Where does the majority of the world population live?", "In the last 20 years the proportion of the world population living in extreme poverty has?","What is the life expectancy of the world today?","There are 2 billion children in the world today aged 0-15 years old, how many children will there be in year 2100 according to the United Nations?"," The UN predicts that by 2100 the world population will have increased by another 4 billion people, what is the main reason?","How did the number of deaths per year from natural disasters change over the last 100 years?","There are roughly 7 billion people in the world today, which options more accurately represents where they live?","How many of the world's 1 year old children today have been vaccinated against some diseases?","Worldwide, 30 year old men have spent 10 years in school on average, how many years have women of the same age spent in school?"," In 1996 tigers, giant pandas and Black Rhinos were all listed as endangered, how many of these three species are critically endangered today?","How many people in the world have some access to electricity?","Global climate experts believe that over the next 100 years the average temperature will on average?"]
// This generates a random question
//let randNum = Math.floor(Math.random() * questions.length);
//let randQuest = questions[randNum];

    //TO-DO set an interval clock and append it into the html once the game is initilized
    //This is the click handler event that hides the start button and displays the game
$(".btn").on("click",function(){
    $('.btn').css("display","none");
    $('.content').css("display","unset");
    
    //This generates the questions

    for(i = 0; i < questions.length; i++){
        $("#question").html(questions[i]);
    
    //Write an if statement that inserts the corresonding potential answers into the html
    
    if (questions[i] === questions[12]){
        $("#choice1").html("A. Get warmer");
        $("#choice2").html("B. Remain the same");
        $("#choice3").html("C. Get colder");
    }

    
    
    
    
    
    };
    
    if ($("#choice1").on("click",function(){
        alert("correct"); 
        $("#question").html(questions[i+1]);
    }));   








});