const chai = require("chai");
const assert = chai.assert;

const firstLastOverAge = require("./main").firstLastOverAge;
const difference = require("./main").difference;

const people = [
    {
        firstName: "Jerry",
        lastName: "Gergich",
        age: 52
    },
    {
        firstName: "Leslie",
        lastName: "Knope",
        age: 40
    },
    {
        firstName: "Tommy",
        lastName: "Haverford",
        age: 10
    },
    {
        firstName: "Ronny",
        lastName: "Swanson",
        age: 7
    }
]

describe("Higher order functions", () => {
    it("should find the difference of numbers in an array", () => {
        assert.equal(difference([2, 1]), 1);
        assert.equal(difference([-1, 1]), -2);
    })
    it("should return a number", () => {
        assert.typeOf(difference([2, 1]), "number");
    })
    it("should correctly filter people and display full names", () => {
        assert.deepEqual(firstLastOverAge(people, 10), ["Jerry Gergich", "Leslie Knope"]);
    })
})
