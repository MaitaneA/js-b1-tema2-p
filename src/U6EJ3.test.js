import '@testing-library/jest-dom';
import { tests } from '../U6/U6EJ3';
describe("tests", () => {  
	const myTriangles = tests()[0];
	const equilateralsTriangles = tests()[1];
	const newTrianglesJSON = tests()[2];
	let arrayTest;
	let isValidJson = true;
	try{ 
		arrayTest = JSON.parse(newTrianglesJSON);
	} catch {
		isValidJson = false;
	} 
	const myJSON = '[{"base":10,"height":5,"rightTriangle":true},{"base":10,"height":8.660254037844386,"rightTriangle":false},{"base":15,"height":7,"rightTriangle":true}]';
	test('verifies that constant myTriangles is correctly defined', () => {
		expect(JSON.stringify(myTriangles)==myJSON).toBe(true);
	});
	test('verifies that constant equilateralsTriangles is correctly defined', () => {
		expect(Array.isArray(equilateralsTriangles)).toBe(true);
		expect(equilateralsTriangles.length).toBe(1);
		expect(typeof(equilateralsTriangles[0])=='object' && !Array.isArray(equilateralsTriangles[0])).toBe(true);
		expect(parseInt(equilateralsTriangles[0].base)).toBe(10);
		expect(parseInt(equilateralsTriangles[0].height)).toBe(8);
	});
	test('checks if constant newTrianglesJSON is an valid JSON',() => {
		expect(isValidJson).toBe(true);
		expect(JSON.stringify(equilateralsTriangles)==newTrianglesJSON).toBe(true);
	});
});


