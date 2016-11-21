 $(document).ready(function() {
var questions =[
        {
        question: "Name the primary red grape used in Argentina",
        answer: 4,
        choices: {
            "1": "Pinot Noir",
            "2": "Burgundy",
            "3": "Syrah", 
            "4": "Malbec", //correct answer
            }
        },             
        {
        question: "What is Cenosillicaphobia the fear of?",
        answer: 2,
        choices: {
            "1": "Fear of foam", 
            "2": "Fear of an empty glass", 
            "3": "Fear of carbonation",
            "4": "Fear of a spilling"
            }
        },

        {
        question: "What is the terminology of the study of fermentation? ",
        answer: 1,
        choices: {
            "1": "Zymurgy", //correct answer
            "2": "Etymology", 
            "3": "Beerology",
            "4": "Aerology"
            }
        },
        {
        question: "What causes a beer's skunked taste?",
        answer: 3,
        choices: {
            "1": "Bacteria", 
            "2": "Gingivitis",
            "3": "Too much light", //correct answer
            "4": "The type of hops"
            }
        },
        {
        question: "What country is generally acknowledged as the birthplace of wine?",
        answer: 1,
        choices: {
            "1": "France", //correct answer
            "2": "Italy", 
            "3": "Egypt",
            "4": "Argentina"
            }
        },       
         
         {
        question: "What is fermentation?",
        answer: 1,
        choices: {
            "1": "A process where a sugar is broken down into ethanol and carbon dioxide", //correct answer
            "2": "A process where a sugar is broken down into yeast and carbon dioxide",
            "3": "A process where a yeast is broken down into ethanol and carbon dioxide",
            "4": "A process where a sugar is broken down into ethanol and oxygen"
            }
        },               
         {
        question: "Which of the following regions is not an old world wine region?",
        answer: 2,
        choices: {
            "1": "France",
            "2": "Australia", //correct
            "3": "Germany",
            "4": "Italy" 
            }
        },              
         {
        question: "What is the oldest alcoholic drink?",
        answer: 3,
        choices: {
            "1": "Scotch", 
            "2": "Wine",
            "3": "Beer", //correct
            "4": "Moonshine"
            }
        }
    ];           
                
        // library end

        // console.log("library length: " + Object.keys(library).length);

    var next;
    var timer;
    var correct = 0;
    var incorrect = 0;
    var i = 0;
    var time;
    //click listeners for answers
    userAnswer('#answer1');
    userAnswer('#answer2');
    userAnswer('#answer3');
    userAnswer('#answer4');

    //starts game when START button clicked
    function startGame(){
        $('#start').on('click', function(){
            $('.triviaQuestions').removeClass('noShow')
            displayQuestions();
            $("#start").addClass('noShow');
            $("#finalScore").addClass('noShow');
        })
    }
    startGame();

    //displays questions after each is answered or time runs out
    function displayQuestions(){
        //restarts countdown timer at each question
        clearTimeout(next);
        stopCounter();
        counter();

        $("#question").html("<h2>"+questions[i].question+ "</h2");
        $("#answer1").text(questions[i].choices[1]);
        $("#answer2").text(questions[i].choices[2]);
        $("#answer3").text(questions[i].choices[3]);
        $("#answer4").text(questions[i].choices[4]);
    }
    //moves to next array element: next question
    function nextQuestion(){
        i++;
        if(i == questions.length){
            return gameEnd();
        }
        stopCounter();
        //timeout for displaying answers
        var next = setTimeout(function(){ displayQuestions() },3000);
    }
    //click listener for each answer
    function userAnswer(id){
        $(id).on('click',function(){
            clearInterval(timer);
            userAnswer = $(this).text();
            //variable contains the number of correct answer
            var answerNumber = questions[i].answer;
            //variable contains the string of correct answer
            var answerString = questions[i].choices[answerNumber]
            //checks answers if right or wrong
            if(userAnswer == answerString){
                correct++;
             //displays incorrect   
            } else{
                incorrect++;
                
            }
            nextQuestion();
        });
    }
    //time countdown, checks if time runs out
    var countDown = function(){
        time--;
        console.log("i variable: "+i)
        console.log("time variable: "+time);
        $('#timer').text(time);
        if(time == 0){
            stopCounter();
            nextQuestion();
            showAnswers();
        }
    }
    //timer for each question: 15 seconds
    var counter = function(){
        clearInterval(timer);
        time = 15;
        timer = setInterval(countDown,1000);
    }
    //stops timer
    function stopCounter(){
        clearInterval(timer);
    }
    //displays game score
    var gameEnd = function(){
        stopCounter();
        $(".triviaQuestions").addClass("noShow");
        $('#correct').text(correct);
        $('#incorrect').text(incorrect);
        $('#finalScore').removeClass("noShow");
    }
    //click to restart game
    function restart(){
        $('#reset').on('click', function(){
            reset();
            $('.triviaQuestions').removeClass('noShow')
            displayQuestions();
            $("#start").addClass('noShow');
            $("#finalScore").addClass('noShow');
        });
    }
    restart();
    //resets variables
    var reset = function(){
        i = 0;
        correct = 0;
        incorrect =0;
    }
});

       
        