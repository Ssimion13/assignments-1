const {assert} = require('chai');
const disemvowel = require("./app");

// Test Suite
describe("Disemvoweling warmup", () => {
    it("should pull all vowels out", () => {
        assert.deepEqual(disemvowel("Pickle Rick!"), {str: "pcklrck!",
  vowels: "iei"})
    });
})
