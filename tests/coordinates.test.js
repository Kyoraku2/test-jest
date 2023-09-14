let { Coordinates } = require("../src/Coordinates.js");

test('testXY', () => {
    let x = 7.0;
    let y = 42.0;

    let coordinates = new Coordinates(x, y);

    expect(coordinates.getX()).toBe(x);
    expect(coordinates.getY()).toBe(y);
});

test('testXYCast', () => {
    let x = 7.0;
    let y = 42.0;

    let coordinates = new Coordinates(x, y);

    expect(typeof coordinates.getX()).toBe("number");
    expect(typeof coordinates.getY()).toBe("number");
});