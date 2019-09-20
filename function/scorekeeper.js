module.exports = function CricketScoreKeeper() {

    var scores = []
    var showscore;
    var scoresheet = [];
    var total = 0;
    var wickets = 10;
    var over = 0;
    var msg = "Game Over"


    function setOvers(set) {
        over = set
        // console.log(over)
       
    }

    function howManyOvers(){
        return over

    }

    function howManyWicktes() {
        return wickets

    }

    function addScore(score) {
        scores = score.split('');
        if (over > 0) {
            if (wickets > 0) {
                for (var x = 1; x < scores.length; x++) {
                    var wick = scores.includes("w");
                    showscore = scores[x];

                    scoresheet.push(showscore);
                }
                if (wick == true) {
                    wickets--
                }

            }
            else{
                ErrorMsg()
            }
           
        } 
        over--
    }


    function showScoreSheet() {
        return scoresheet;
    }

    function CalculateScore() {
        let numOr0 = n => isNaN(n) ? 0 : n
        total = scoresheet.reduce((a, b) =>
        Number(numOr0(a)) + Number(numOr0(b)))
        // console.log(over)
        return total
    }


    function ErrorMsg(){
        return msg
    }


    return {
        setOvers,
        addScore,
        showScoreSheet,
        CalculateScore,
        howManyWicktes,
        howManyOvers,
        ErrorMsg
    }
}