function assert(actual, expected) {
    if (actual !== expected) {
        throw new Error("Asserted that " + actual + " would equal " + expected);
    } else {
        console.log("Test Passed. Actual: " + actual + ", expected: " + expected);
    }
}

function describe(message, testFunction) {
    console.log("\n" + message);
    try {
        testFunction();
    } catch(err) {
        console.log("Test FAILED: " + err.message);
    }
}

function multiply(a, b) {
    return a * b;
}

describe("A multiplication function", function() {
    assert(multiply(2, 1), 2);
    assert(multiply(-2, 1), -2);
    assert(multiply(2, -1), -2);
    assert(multiply(-2, -1), 2);
})

function divide(a, b) {
    if (b === 0) {
        throw new RangeError("b cannot be 0, fool");
    }
    return a / b;
}

describe("A division function", function() {
    assert(divide(2, 1), 2);
    assert(divide(-2, 1), -2);
    assert(divide(2, -1), -2);
    assert(divide(-2, -1), 2);
})
