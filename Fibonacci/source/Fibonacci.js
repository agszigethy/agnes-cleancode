class Fibonacci { 
	getFibonacciNumber(index) {
		if (index === 0) {
			return 0;
		}

		if (index === 1) {
			return 1;
		}

		return this.getFibonacciNumber(index - 1) + this.getFibonacciNumber(index - 2);
	}
}

export default Fibonacci;

