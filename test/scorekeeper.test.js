const assert = require("assert");
const scoreKeep = require("../function/scorekeeper.js");

describe('Cricket Score tests', function () {
    it('This tests should be able to set the call cost', function () {
        let scoreKeep = scoreKeeper();
        scoreKeeper.setCallCost(3.50)
        assert.equal(3.50, scoreKeep.getCallCost());
    });


    it('This tests should be able to set the call and sms cost', function () {
        let scoreKeep = scoreKeeper();
        scoreKeep.setCallCost(3.50)
        scoreKeep.setSmsCost(0.85)
        assert.equal(3.50, scoreKeep.getCallCost());
        assert.equal(0.85, scoreKeep.getSmsCost());
    });
});