import '@testing-library/jest-dom';
import { tests } from '../U3/U3EJ1';
describe("tests", () => {
  let Car = tests();
  const myCar1 = new Car ("Ford", "Mustang Boss 429", 7000, 375, 1969);
myCar1.carAntiquity = 5;
  test('checks if Cars is a class',() => {
    expect(typeof(Car)).toBe("function");
  });
  test('checks if the Car\'s class has getter getCarDescription',() => {
    expect(Car.toString().indexOf("getCarDescription")).toBeGreaterThan(0);
    expect(myCar1.getCarDescription).toBe("Ford Mustang Boss 429 7000cc");
  });
  test('checks if the Car\'s class has setter carAntiquity',() => {
    expect(Car.toString().indexOf("carAntiquity")).toBeGreaterThan(0);
    expect(myCar1.year).toBe(2018);
  });
});
