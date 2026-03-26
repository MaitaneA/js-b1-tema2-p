import '@testing-library/jest-dom';
import { tests } from '../U2/U2EJ1.js';
describe("tests", () => {
    const myCar1 = tests()[0];
    const myCar2 = tests()[1];
    const myCar3 = tests()[2];
    test('verifies that myCar1, myCar2, myCar3 are objects', () => {
        expect(typeof(myCar1)=='object' && !Array.isArray(myCar1)).toBe(true);
        expect(typeof(myCar2)=='object' && !Array.isArray(myCar2)).toBe(true);
        expect(typeof(myCar3)=='object' && !Array.isArray(myCar3)).toBe(true);
    });
    test('verifies properties in myCar1', () => {
        expect(myCar1.brand).toBe("Ford");
        expect(myCar1.model).toBe("Mustang Boss 429");
        expect(myCar1.displacement).toBe(7000);
        expect(myCar1.horsePower).toBe(375);
        expect(myCar1.year).toBe(1969);
    });
    test('verifies properties in myCar2', () => {
        expect(myCar2.brand).toBe("BMW");
        expect(myCar2.model).toBe("520d");
        expect(myCar2.displacement).toBe(1980);
        expect(myCar2.horsePower).toBe(136);
        expect(myCar2.year).toBe(2002);
    });
    test('verifies properties in myCar3', () => {
        expect(myCar3.brand).toBe("Mercedes-Benz");
        expect(myCar3.model).toBe("280 SLC");
        expect(myCar3.displacement).toBe(2746);
        expect(myCar3.horsePower).toBe(136);
        expect(myCar3.year).toBe(1979);
    });
});
