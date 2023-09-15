const {Coordinates} = require("../src/Coordinates.js");
const {Vector} = require("../src/Vector.js");
const {Clock} = require("../src/Clock.js");

const CURRENT_TIME_MOCKED = 10;

beforeEach(() => {
    jest.clearAllMocks();
});

test('isMocked', () => {
    let clock = new Clock();

    clock.getCurrentTime = jest.fn().mockReturnValueOnce(CURRENT_TIME_MOCKED);

    expect(clock.getCurrentTime()).toBe(CURRENT_TIME_MOCKED);
});

test('getDifference', () => {
    let clock = new Clock();

    clock.getCurrentTime = jest.fn().mockReturnValueOnce(CURRENT_TIME_MOCKED);

    expect(clock.getDifference()).toBe(CURRENT_TIME_MOCKED - Date.now());
});
