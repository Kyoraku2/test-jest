const {Coordinates} = require("../src/Coordinates.js");
const {Vector} = require("../src/Vector.js");
const {Clock} = require("../src/Clock.js");

const CURRENT_TIME_MOCKED = 10;
beforeEach(() => {

});

test('getDifference', () => {
    let clock = new Clock();

    expect(clock.getCurrentTime()).toBe(10);
});