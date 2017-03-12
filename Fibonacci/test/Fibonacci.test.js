import {expect} from "chai";
import Fibonacci from "../source/Fibonacci.js";

describe("Fibonacci", () => {
    it("shall exist", () => {
        let fibonacci = new Fibonacci();

        expect(fibonacci).to.be.defined;
    });

    it("shall have the ability to get the fibonacci number by index", () => {
        let fibonacci = new Fibonacci();

		expect(fibonacci.getFibonacciNumber(0)).to.equal(0);
    });

    it("shall return the proper indexed Fibonacci number", () => {
    	let fibonacci = new Fibonacci();

    	expect(fibonacci.getFibonacciNumber(0)).to.equal(0);
    	expect(fibonacci.getFibonacciNumber(1)).to.equal(1);
    	expect(fibonacci.getFibonacciNumber(2)).to.equal(1);
    	expect(fibonacci.getFibonacciNumber(3)).to.equal(2);
    	expect(fibonacci.getFibonacciNumber(4)).to.equal(3);
    });

    it("shall have the ability to get the fibonacci sequence in an array", () => {
        let fibonacci = new Fibonacci();
        let n = 10; 
        let expectedSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

        expect(fibonacci.getFibonacciSequence(n)).to.deep.equal(expectedSequence);
    });
});

