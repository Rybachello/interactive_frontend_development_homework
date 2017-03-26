/**
 * Created by Rybachello on 3/23/2017.
 */
class NumberGame {

    constructor(number) {
        this.isGameOver = false;
        this.targetNumber = number;
    }

    generateNumber(min, max) {
        this.targetNumber = Math.floor(Math.random() * (max - min + 1) + min);
    }

    guess(number) {
        if (number == this.targetNumber) {
            this.isGameOver = true;
            return `${number}:was correct`;
        }
        return `${number}:was ` + ((number > this.targetNumber) ? 'greater' : 'under') + ' than target';
    }

    getGeneratedNumber() {
        return this.targetNumber;
    }

    getIsOverGame() {
        return this.isGameOver;
    }
}
export default NumberGame;
