//Message generator
//generate a message which will be of the form " I ___ , because you are ____, and I hope _____." 
//This message will be positive or negative randomly and the blanks will be filled in from as selection of positive or negative fragments.s

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function generateMessage(){
    var posOrNeg = getRandomInt(2);
    var posStatement1 = ["like you", "love you", "admire you","adore you", "enjoy your company", "want to spend more time with you"];
    var posStatement2 = ["wonderful", "lovely","kind", "beautiful", "friendly","sweet"];
    var posStatement3 = ["you'll always be my friend.", "good things will happen to you.", "all your dreams will come true."];
    if (posOrNeg == 1){
       // console.log(posStatement1.length);
        var s1 = posStatement1[getRandomInt(posStatement1.length)];
        var s2 = posStatement2[getRandomInt(posStatement2.length)];
        var s3 = posStatement3[getRandomInt(posStatement3.length)]
        var statement = `I ${s1}, because you are ${s2}, and I hope ${s3}`;

    } else {
        var statement = "I have nothin bad to say yet!";
    }
    
    console.log(statement);
}

generateMessage();