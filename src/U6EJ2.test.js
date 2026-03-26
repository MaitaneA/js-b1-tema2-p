import '@testing-library/jest-dom';
import { tests } from '../U6/U6EJ2';
describe("tests", () => {  
	const myCars = tests()[0];
	const lessThan25 = tests()[1];
	const newCarsJSON = tests()[2];
	let arrayTest;
	let isValidJson = true;
	try{ 
		arrayTest = JSON.parse(newCarsJSON);
	} catch {
		isValidJson = false;
	} 
	const myJSON= '[{"brand":"Ford","model":"Mustang Boss 429","displacement":7000,"horsePower":375,"year":1969},{"brand":"BMW","model":"520d","displacement":1980,"horsePower":136,"year":2002},{"brand":"Mercedes-Benz","model":"280 SLC","displacement":2746,"horsePower":136,"year":1979}]';
	test('verifies that constant myCars is correctly defined', () => {
		expect(JSON.stringify(myCars)==myJSON).toBe(true);
	});
	test('verifies that constant lessThan25 is correctly defined', () => {
		expect(Array.isArray(lessThan25)).toBe(true);
		expect(lessThan25.length).toBe(1);
		expect(typeof(lessThan25[0])=='object' && !Array.isArray(lessThan25[0])).toBe(true);
		expect(lessThan25[0].brand).toBe('BMW');
		expect(lessThan25[0].model).toBe('520d');
	});
	test('checks if constant newCarsJSON is an valid JSON',() => {
		expect(isValidJson).toBe(true);
		expect(JSON.stringify(lessThan25)==newCarsJSON).toBe(true);
	});
});


