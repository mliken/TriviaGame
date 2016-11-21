 $(document).ready(function() {
var questions =[
        {
        question: "What is Cenosillicaphobia the fear of?",
        answer: 2,
        choices: {
            "1": "Fear of foam", 
            "2": "Fear of an empty glass", //correct answer
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

    