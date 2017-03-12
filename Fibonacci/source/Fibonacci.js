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

	getFibonacciSequence(n) {
		let fibonacciSequence = [];
		for (let i = 0; i < n; i++) {
			fibonacciSequence.push(this.getFibonacciNumber(i));
		}

		return fibonacciSequence;
	}
}

let fib = new Fibonacci();
fib.getFibonacciSequence(10);

export default Fibonacci;

