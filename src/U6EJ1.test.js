import '@testing-library/jest-dom';
import { tests } from '../U6/U6EJ1';
describe("tests", () => {  
	const Planet = tests()[0];
	const planetsAsJson = tests()[1];
	const planetsBTE = tests()[2];
	let arrayTest;
	let isValidJson = true;
	try{ 
		arrayTest = JSON.parse(planetsAsJson);
	} catch {
		isValidJson = false;
	} 
	test('verifies that Planet is defined as class', () => {
		expect(typeof(Planet)=='function').toBe(true);
	});
	test('verifies that planetsAsJson contains almost 3 Planets', () => {
		expect(isValidJson).toBe(true);
		expect(Array.isArray(arrayTest)).toBe(true);
		expect(arrayTest.length>=3).toBe(true);
		expect(typeof(arrayTest[0])=='object' && !Array.isArray(arrayTest[0])).toBe(true);
		expect(typeof(arrayTest[1])=='object' && !Array.isArray(arrayTest[1])).toBe(true);
		expect(typeof(arrayTest[2])=='object' && !Array.isArray(arrayTest[2])).toBe(true);
	});
	test('checks if all the planets contained in the planetsBTE constant are bigger than Earth',() => {
		planetsBTE.forEach(function(myPlanet){
			expect(myPlanet.diameter > 12756).toBe(true);
		});
	});
});


