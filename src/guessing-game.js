class GuessingGame {
	constructor() { }

	setRange(min, max) {
		this.max = max;
		this.min = min;
	}

	guess() {
		this.guessNumber = Math.round((this.min + this.max) / 2);
		return this.guessNumber;
	}

	lower() {
		this.max = this.guessNumber;
	}

	greater() {
		this.min = this.guessNumber;
	}
}

module.exports = GuessingGame;
