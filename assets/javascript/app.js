
let i = 0;
let right = 0;
let wrong = 0;
let unanswered = 0;
let intervalId;
let clockRunning= false;
let secs = 15;

var questions = [
    {   //1
        question: "In all low-income countries across the world today, how many girls finish primary school?",
        choices: ["20%", "40%", "60%" ],
        correct: 2,
        imageYes: "<img src = 'http://img.timeinc.net/time/daily/2010/1004/360_india_education_0426.jpg' width='350' height='300' />",
        imageNo:  "<img src = 'https://sd.keepcalm-o-matic.co.uk/i/too-bad-so-sad-.png' width='350' height='300' />",
        
        
    } , 
    {   //2
        question: "Where does the majority of the world population live?",
        choices: ["Low income countries", "Middle income countries", "High income countries" ],
        correct: 1,
        imageYes: "<img src = 'https://www.researchgate.net/profile/Anne-Marie_Boulay/publication/258173386/figure/fig5/AS:614026874736660@1523406823399/2-Adaptation-capacity-based-on-World-Bank-country-classification-No-adaptation-for.png' width='450' height='300' />",
        imageNo: "<img src = 'https://memegenerator.net/img/instances/59454237/no-bananas-for-you.jpg' width='350' height='300' />",
        
    } , 
    {   //3
        question: "In the last 20 years the proportion of the world population living in extreme poverty has?",
        choices: ["Almost doubled", "remained more or less the same", "Almost halved" ],
        correct: 2,
        imageYes: "<img src = 'https://thumbs2.tunefiles.com/104,038fb747c3445d4f.jpg' width='300' height='250' />",
        imageNo: "<img src = 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11986794.jpg' width='400' height='200' />",
        
        
    } , 
    {   //4
        question: "What is the life expectancy of the world today?",
        choices: ["50 years", "60 years", "70 years" ],
        correct: 2,
        imageYes:"<img src = 'http://truthstar.tgt5cps4e32fytbrgae.netdna-cdn.com/wp-content/uploads/2014/05/Longevity.jpg' width='350' height='250' />",
        imageNo:"<img src = 'http://goodbyemailbox.com/blog/wp-content/uploads/2011/02/022211-no-dice.jpg' width='350' height='250' />",
        
    } , 
    {   //5
        question: "There are 2 billion children in the world today aged 0-15 years old, how many children will there be in year 2100 according to the United Nations?",
        choices: ["4 billion", "3 billion", "2 billion" ],
        correct: 2,
        imageYes:"<img src = 'https://www.in.gov/children/images/children-1.jpg' width='350' height='250' />",
        imageNo:"<img src = 'https://memegenerator.net/img/instances/28849865/me-so-sorry.jpg' width='350' height='250' />",
        
        
    } , 
    {   //6
        question: "The UN predicts that by 2100 the world population will have increased by another 4 billion people, what is the main reason?",
        choices: ["There will be more children aged below 15", "There will be more adults aged 15-74", "There will be more very old people aged 75 and older" ],
        correct: 1,
        imageYes:"<img src = 'https://westfaironline.com/wp-content/uploads/2018/03/population_increase.jpg' width='350' height='250' />",
        imageNo:"<img src = 'https://i.ytimg.com/vi/kOagDqludhU/maxresdefault.jpg' width='350' height='250' />",
        
        
    } , 
    {   //7
        question: "How did the number of deaths per year from natural disasters change over the last 100 years?",
        choices: ["More than doubled", "Remained about the same", "Decreased to less than half" ],
        correct: 2,
        imageYes:"<img src = 'https://skymetweather.com/content/wp-content/uploads/2015/03/hurricane-woman.jpg' width='350' height='250' />",
        imageNo:"<img src = 'http://weknowmemes.com/wp-content/uploads/2012/04/glenn-close-glenn-close-but-no-cigar.jpg' width='350' height='250' />",
        
        
    } , 
    {   //8
        question: "There are roughly 7 billion people in the world today, which options more accurately represents where they live?",
        choices: ["1 billion in Europe, 4 billion is Asia, 2 billion in Africa and 1 billion in America", "1 billion in Europe, 3 billion in Asia, 2 billion in Africa and 1 billion in America", "1 billion in Europe, 3 billion in Asia, 1 billion in Africa and 2 billion in America" ],
        correct: 0,
        imageYes:"<img src = 'https://cdn1.vox-cdn.com/assets/4657359/global_population.gif' width='350' height='250' />",
        imageNo:"<img src = 'https://thumbs.gfycat.com/DistinctUnrulyKillifish-max-1mb.gif' width='350' height='250' />",
        
        
    } , 
    {   //9
        question: "How many of the world's 1 year old children today have been vaccinated against some diseases?",
        choices: ["20%", "50%", "80%" ],
        correct: 2,
        imageYes:"<img src = 'https://www.thelocal.it/userdata/images/article/c76e972bdeba61c431b03c34d53b270a5da66b74018c0a8fa751cb5136118127.jpg' width='350' height='250' />",
        imageNo:"<img src = 'https://i.pinimg.com/originals/a8/eb/b8/a8ebb863ef4b3a74b3f274cb7c351466.jpg' width='350' height='300' />",
        
        
    } , 
    {   //10
        question: "Worldwide, 30 year old men have spent 10 years in school on average, how many years have women of the same age spent in school?",
        choices: ["9 years", "6 years", "3 years" ],
        correct: 0,
        imageYes:"<img src = 'https://i.gifer.com/VwAW.gif' width='350' height='250' />",
        imageNo:"<img src = 'https://cdn.dribbble.com/users/134903/screenshots/1657391/noluck_1x.png' width='350' height='250' />",
        
        
    } , 
    {   //11
        question: " In 1996 tigers, giant pandas and Black Rhinos were all listed as endangered, how many of these three species are critically endangered today?",
        choices: ["2 of them", "1 of them", "none of them" ],
        correct: 2,
        imageYes:"<img src = 'https://c402277.ssl.cf1.rackcdn.com/photos/1467/images/hero_full/White_Rhino_8.7.2012_Hero_And_Circleb_HI_58736.jpg?1345595555' width='350' height='250' />",
        imageNo:"<img src = 'https://crazyasabagofhammers.com/wp-content/uploads/2017/06/Armish-Swing-and-A-Miss.jpg' width='350' height='250' />",
        
        
    } , 
    {   //12
        question: "How many people in the world have some access to electricity?",
        choices: ["20%", "50%", "80%" ],
        correct: 2,
        imageYes:"<img src = 'http://granitegrok.com/wp-content/uploads/electricity-procurement1.jpg' width='350' height='250' />",
        imageNo:"<img src = 'https://orig00.deviantart.net/8dbd/f/2010/159/6/d/one_tough_cookie_by_v_trooper.gif' width='300' height='300' />",
        
    } , 
    {   //13
        question: "Global climate experts believe that over the next 100 years the average temperature will on average?",
        choices: ["Get warmer", "Remain the same", "Get colder" ],
        correct: 0,
        imageYes:"<img src = 'https://cdn.images.express.co.uk/img/dynamic/151/590x/global-warming-natural-845901.jpg' width='350' height='250' />",
        imageNo:"<img src = 'https://st2.depositphotos.com/1186248/6498/i/950/depositphotos_64981829-stock-photo-bad-decision.jpg' width='300' height='250' />",
        
    } , 
    
]
    
    const countDown = function(){
      clockRunning = true;
      intervalId = setInterval(function(){
        secs--; 
        $("#clock").html(secs+" Seconds Remaining!");

        if ( secs <= 0){
            clearInterval(intervalId);
            unanswered++;
            $("#unanswered").html(unanswered);
            $('#text').html("Just Pick one! Even a blind monkey finds a banana every once in a while!");
            $("#picture").html("<img src = 'https://i.ytimg.com/vi/wKdubjjYVjk/maxresdefault.jpg' width='350' height='250' />");

            displayResults();
            

        }
      } ,1000);



    }

    

    
    const reset = function(){
        let currQuest = questions[i];
        secs = 15;
        $("#clock").html(secs+" Seconds Remaining!");
        
        clearInterval(intervalId);
        countDown();
        
        $('#question').html(questions[i].question);
        
    
        $("#choice1").html(currQuest.choices[0]);
        $("#choice2").html(currQuest.choices[1]);
        $("#choice3").html(currQuest.choices[2]);
         

    }

    $("#startBtn").on("click",function(){
        $('#startBtn').css("display","none");
        $('.content').css("display","unset");
        alert("On average, a chimpanzee guessing randomly will acheive higher than 30% accuracy on this quiz. How will you compare?");
        reset();
        
    
        
    });

    $("#newGame").on("click",function(){
        i = 0;
        right = 0;
        wrong = 0;
        unanswered = 0;
        secs = 15;
        $("#wrong").html(wrong);
        $("#right").html(right);
        $("#unanswered").html(unanswered);
        $('#startBtn').css("display","none");
        $('.content').css("display","unset");
        $("#newGame").css("display","none");
        $("#results").css("display","none");
        $(".backgroundImage").css("background-image", "url('https://cdn.allwallpaper.in/wallpapers/2560x1600/15092/green-matrix-background-2560x1600-wallpaper.jpg')");
        $(".main").css("opacity","unset");
        reset();


    });



    const displayResults = function(){
        $('#results').css("display","unset");
        $('.content').css("display","none");
        
        if (i >= questions.length-1){
            $('#results').css("display","unset");
            $('.content').css("display","none");
            $('#newGame').css("display","unset");
            clearInterval(intervalId);
            var percentage = Math.round(right/questions.length*100);
            $("#percent").html(percentage);
            if (percentage > 30){
                alert('Congratulations, you are smarter than a chimpanze!');
                $(".backgroundImage").css("background-image", "url('https://i.pinimg.com/736x/83/b6/ab/83b6ab67ec82c41175bfc76199b18d47.jpg')");
                $(".main").css("opacity","0.5");
            }
            else { alert("Unfortunately, you are not smarter than a chimpanze :(");
                $(".backgroundImage").css("background-image", "url('https://image.dhgate.com/albu_858040473_00/1.0x0.jpg')");
                $(".main").css("opacity","0.5");
        }

        
        }
        else {
            setTimeout(function(){
                $('#results').css("display","none");
                $('.content').css("display","unset");
                i++;
               
                
                
                
                reset();
    
    
            }, 4000);
        }
        
    };







$("#choice1").on("click", function(){
    let currQuest = questions[i];
     
    if (currQuest.correct === 0){
        right++;
        console.log("correct"); 
        $("#right").html(right);
        $("#picture").html(currQuest.imageYes);
        $('#text').html(currQuest.choices[currQuest.correct]+ " is correct!");
       
        
        
        
    } else {
        //display incorrect and show correct answer for timeer 
        
        wrong++;
        $("#wrong").html(wrong);
        console.log("wrong");
        $("#picture").html(currQuest.imageNo);
        $('#text').html("Sorry, the correct answer was: " + currQuest.choices[currQuest.correct]);

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
        $("#picture").html(currQuest.imageYes);
        $('#text').html(currQuest.choices[currQuest.correct]+ " is correct!");
       
       
        
        
        
    } else {
        //display incorrect and show correct answer for timeer 
        
        wrong++;
        $("#wrong").html(wrong);
        console.log("wrong");
        $("#picture").html(currQuest.imageNo);
        $('#text').html("Sorry, the correct answer was: " + currQuest.choices[currQuest.correct]);


    }
    displayResults();
       
       
}); 



$("#choice3").on("click", function(){
    let currQuest = questions[i];
     
    if (currQuest.correct === 2){
        right++;
        console.log("correct"); 
        $("#right").html(right);
        $("#picture").html(currQuest.imageYes);
        $('#text').html(currQuest.choices[currQuest.correct]+ " is correct!");

        console.log(currQuest.imageYes);
       
       
        
        
        
    } else {
        //display incorrect and show correct answer picture for timeer 
        
        wrong++;
        $("#wrong").html(wrong);
        console.log("wrong");
        $("#picture").html(currQuest.imageNo);
        $('#text').html("Sorry, the correct answer was: " + currQuest.choices[currQuest.correct]);


    }
    displayResults();
    
      
}); 


