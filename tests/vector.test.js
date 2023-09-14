let { Coordinates } = require("../src/Coordinates.js");
let { Vector } = require("../src/Vector.js");

test('coordinates', () => {
    let x1 = 0.0;
    let y1 = 1.0;

    let x2 = 1.0;
    let y2 = 0.0;

    let coordinates1 = new Coordinates(x1, y1);
    let coordinates2 = new Coordinates(x2, y2);

    let vector = new Vector(coordinates1,coordinates2);

    expect(vector.getFirstCoordinates()).toBe(coordinates1);
    expect(vector.getSecondCoordinates()).toBe(coordinates2);

    expect(vector.getFirstCoordinates().constructor.name).toBe("Coordinates");
    expect(vector.getSecondCoordinates().constructor.name).toBe("Coordinates");
});

test('length', () => {
    let x1 = 0.0;
    let y1 = 0.0;

    let x2 = 1.0;
    let y2 = 0.0;

    let coordinates1 = new Coordinates(x1, y1);
    let coordinates2 = new Coordinates(x2, y2);

    let vector = new Vector(coordinates1,coordinates2);

    expect(vector.getLength()).toBe(1);
});

test('lengthRounded', () => {
    let x1 = 0.0;
    let y1 = 1.0;

    let x2 = 1.0;
    let y2 = 0.0;

    let coordinates1 = new Coordinates(x1, y1);
    let coordinates2 = new Coordinates(x2, y2);

    let vector = new Vector(coordinates1,coordinates2);

    expect(vector.getLength()).toBeCloseTo(1.4,1);
});
