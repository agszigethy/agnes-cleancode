import {expect} from "chai";
import Fibonacci from "../source/Fibonacci.js";

describe("Fibonacci", () => {
    it("shall exist", () => {
        let fibonacci = new Fibonacci();

        expect(fibonacci).to.be.defined;
    });
});
