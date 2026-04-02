import '@testing-library/jest-dom';
import { tests } from '../U5/U5EJ2';
describe("tests", () => {
  let Car = tests();
  const myCar1 = new Car ("Ford", "Mustang Boss 429", 7000, 375, 1969);
  const myCar2 = new Car ("BMW", "520d", 1980, 136, 2002);
  const myCar3 = new Car ("Mercedes-Benz", "280 SLC", 2746, 136, 1979);
  test('checks if Cars is a class',() => {
    expect(typeof(Car)).toBe("function");
  });
  test('checks if the Car\'s class has method compareAntiquity',() => {
    expect(Car.toString().indexOf("compareAntiquity")).toBeGreaterThan(0);
    expect(Car.compareAntiquity(myCar1,myCar3)).toBe(myCar1);
  });
  test('checks if the Car\'s class has method maxDisplacement',() => {
    expect(Car.toString().indexOf("maxDisplacement")).toBeGreaterThan(0);
    expect(Car.maxDisplacement([myCar1, myCar2, myCar3])).toBe(myCar1);
  });
  test('checks if the Car\'s class has method cv2kw',() => {
    expect(Car.toString().indexOf("cv2kw")).toBeGreaterThan(0);
    expect(myCar3.cv2kw()).toBe(100.096);
  });
});
