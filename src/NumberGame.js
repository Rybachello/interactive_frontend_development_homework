class NumberGame {



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
