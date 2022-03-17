'strick mode';
let expect = chai.expect;

describe('TESTING', function () {
    it('3 0 111 for 111', function () {
        expect(numbersSumInString('111')).to.equal(3);
        expect(lettersInString('111')).to.equal(0);
        expect(updateTotalSum('111')).to.equal(111);
    });
    it('0 0 0  for aaa', function () {
        expect(numbersSumInString('aaa')).to.equal(0);
        expect(lettersInString('aaa')).to.equal(3);
        expect(updateTotalSum('aaa')).to.equal(0);
    });
    it('50 3 0 for aaa325', function () {
        expect(numbersSumInString('aaa325')).to.equal(10);
        expect(lettersInString('aaa325')).to.equal(3);
        expect(updateTotalSum('aaa325')).to.equal(0);
    });
    it('0 0 0 for empty string', function () {
        expect(numbersSumInString('')).to.equal(0);
        expect(lettersInString('')).to.equal(0);
        expect(updateTotalSum('')).to.equal(0);
    });
});

function promptDataRun() {
    let totalSum = 0;
    while (true) {
        let promptData = window.prompt('insert data');
        if (promptData === null) {
            break;
        }
        let a = numbersSumInString(promptData);
        let b = totalSum += updateTotalSum(promptData);
        window.alert(`${numbersSumInString(promptData)}, ${lettersInString(promptData)}, ${totalSum}`);
    }
}

function numbersSumInString(data) {
    return ((data.split('').filter(char => char >= 0 && char <= 9)).map(a => parseInt(a)).reduce((a, b) => a + b, 0))
}

function lettersInString(data) {
    return (data.split('').filter(char => char >= 'a' && char <= 'z')).length;
}

function updateTotalSum(data) {
    if (!(data.length > 0 && data[0] >= 0 && data[0] <= 9)) {
        return 0;
    }
    else {
        return parseInt((data.split('').filter(char => char >= 0 && char <= 9).join('')));
    }
}

window.onload = promptDataRun;
