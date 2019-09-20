const assert = require("assert");
const scoreKeep = require("../function/scorekeeper.js");

describe('Cricket Score tests', function () {
    
    it('This tests should be able to set the amount of overs', function () {
        let scoreKeeper = scoreKeep();
        scoreKeeper.setOvers(5);
        scoreKeeper.addScore("123-w6")
        scoreKeeper.addScore("463-ww")
        scoreKeeper.addScore("463-ww")
       
        assert.equal(2, scoreKeeper.howManyOvers() )
       
    });
    
    
    it('This tests calulates the total amount of points for 1 over', function () {
        let scoreKeeper = scoreKeep();
        scoreKeeper.setOvers(1)
        scoreKeeper.addScore("123-w6");
        scoreKeeper.addScore("463-ww");
        scoreKeeper.showScoreSheet();
        

        assert.equal(11,  scoreKeeper.CalculateScore())
       
    });

    it('This tests calulates the total amount of runs for 3 overs', function () {
        let scoreKeeper = scoreKeep();
        scoreKeeper.setOvers(3)
        
        scoreKeeper.addScore("123-w6");
        scoreKeeper.addScore("463-ww");
        scoreKeeper.addScore("463-ww");
        scoreKeeper.showScoreSheet();
       

        assert.equal( 29, scoreKeeper.CalculateScore())
       
    });

    it('This tests calulates the total amount of runs for 5 overs and ignores the rest', function () {
        let scoreKeeper = scoreKeep();
        scoreKeeper.setOvers(5)
        
        scoreKeeper.addScore("123-w6");
        scoreKeeper.addScore("463-ww");
        scoreKeeper.addScore("463-ww");
        scoreKeeper.addScore("463-ww");
        scoreKeeper.addScore("463-ww");
        scoreKeeper.addScore("463-ww");
        scoreKeeper.addScore("463-ww");

        scoreKeeper.showScoreSheet();
       
        assert.equal(47, scoreKeeper.CalculateScore())
    });

    it('This tests returns the amount of overs leftover', function () {
        let scoreKeeper = scoreKeep();
        scoreKeeper.setOvers(4)
       
        scoreKeeper.addScore("123-w6");
        scoreKeeper.addScore("463-ww");
       
        assert.equal(2,  scoreKeeper.howManyOvers())
       
    });

    it('This tests calulates the total amount of runs for 3 overs', function () {
        let scoreKeeper = scoreKeep();
        scoreKeeper.setOvers(5)
        
        scoreKeeper.addScore("123-w6");
        scoreKeeper.addScore("463-ww");
        scoreKeeper.addScore("463-ww");
        scoreKeeper.addScore("463-ww");
        scoreKeeper.addScore("463-ww");
        scoreKeeper.showScoreSheet();

        assert.equal(5, scoreKeeper.howManyWicktes())
       
    });
});