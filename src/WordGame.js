/**
 * Created by Rybachello on 3/26/2017.
 */
class WordGame {
    constructor(word = '') {
        this.isGameOver = false;
        this.targetWord = word;
    }

    generateWord() {
        let words = ['paper', 'grill', 'basil', 'hinge', 'ruler'];
        this.targetWord = words[Math.floor(Math.random() * words.length)];
    }

    guess(word) {
        if (word == this.targetWord) {
            this.isGameOver = true;
        }
        let result = [];
        let length = this.targetWord.length >= word.length ? this.targetWord.length : word.length;
        for (let i = 0; i < length; i++) {
            if (word[i] === this.targetWord[i]) {
                result.push(i);
            }
        }
        return result;
    }


    getGeneratedWord() {
        return this.targetWord;
    }

    getIsOverGame() {
        return this.isGameOver;
    }
}
export default WordGame;
