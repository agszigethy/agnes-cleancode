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
});

