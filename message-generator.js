//Message generator
//generate a message which will be of the form " I ___ , because you ____, and I hope _____." 
//This message will be positive or negative randomly and the blanks will be filled in from as selection of positive or negative fragments.s

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function generateMessage(){
    var posOrNeg = getRandomInt(2);
    var posStatement1 = ["like you", "love you", "admire you","adore you", "enjoy your company",
                         "want to spend more time with you","can't get enough of you","think you are wonderful",
                          ];
    var posStatement2 = ["are wonderful", "are lovely","are kind", "are beautiful", "are friendly","are sweet","are full of life", "see the best in people",
                        "have a great attitude", "think positively"];
    var posStatement3 = ["you'll always be my friend", "good things will happen to you", "all your dreams will come true",
                         "you live a long and happy life", "life is wonderful for you", "we can be friends"];
    var negStatement1 = ["hate you", "despise you", "loathe you", "can\'t stand you", "really dislike you"];
    var negStatement2 = ["nasty", "unkind", "stupid", "smelly", "a liar"];
    var negStatement3 = ["nothing good will ever happen to you", "you will always be unhappy", "no one will be friends with you"];
    
    if (posOrNeg == 1){
       // console.log(posStatement1.length);
        var s1 = posStatement1[getRandomInt(posStatement1.length)];
        var s2 = posStatement2[getRandomInt(posStatement2.length)];
        var s3 = posStatement3[getRandomInt(posStatement3.length)]

    } else {
        var s1 = negStatement1[getRandomInt(negStatement1.length)];
        var s2 = negStatement2[getRandomInt(negStatement2.length)];
        var s3 = negStatement3[getRandomInt(negStatement3.length)]
    }
    var statement = `I ${s1}, because you ${s2}, and I hope ${s3}.`;
    
    console.log(statement);
}

generateMessage();