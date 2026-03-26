import '@testing-library/jest-dom';
import { tests } from '../U5/U5EJ1';
describe("tests", () => {  
	const Planet = tests()[0];
	const myPlanet1 = tests()[1];
	const myPlanet2 = tests()[2];
	const myPlanet3 = tests()[3];
	const myPlanet4 = tests()[4];
	const myPlanet5 = tests()[5];
	const myPlanet6 = tests()[6];
	const myPlanet7 = tests()[7];
	const myPlanet8 = tests()[8];
	const starName = tests()[9];
	const PWR = tests()[10];
	const venusToSarturn = tests()[11];
	test('verifies that myPlanet1, myPlanet2, ..., myPlanet8 are objects', () => {
		expect(typeof(myPlanet1)=='object' && !Array.isArray(myPlanet1)).toBe(true);
		expect(typeof(myPlanet2)=='object' && !Array.isArray(myPlanet2)).toBe(true);
		expect(typeof(myPlanet3)=='object' && !Array.isArray(myPlanet3)).toBe(true);
		expect(typeof(myPlanet4)=='object' && !Array.isArray(myPlanet4)).toBe(true);
		expect(typeof(myPlanet5)=='object' && !Array.isArray(myPlanet5)).toBe(true);
		expect(typeof(myPlanet6)=='object' && !Array.isArray(myPlanet6)).toBe(true);
		expect(typeof(myPlanet7)=='object' && !Array.isArray(myPlanet7)).toBe(true);
		expect(typeof(myPlanet8)=='object' && !Array.isArray(myPlanet8)).toBe(true);
	});
	test('verifies properties in myPlanet1', () => {
		expect(myPlanet1.name).toBe("Mercury");
		expect(myPlanet1.distanceToSun).toBe(58344000);
		expect(myPlanet1.hasRings).toBe(false);
		expect(myPlanet1.diameter).toBe(4878);
	});
	test('verifies properties in myPlanet8', () => {
		expect(myPlanet8.name).toBe("Neptune");
		expect(myPlanet8.distanceToSun).toBe(4300000000);
		expect(myPlanet8.hasRings).toBe(true);
		expect(myPlanet8.diameter).toBe(49538);
	});
	test('checks if the starName constant contains the name of Star',() => {
		expect(starName).toBe("the Sun");
	});
	test('checks if the PWR constant contains all the planets with rings',() => {
		expect(PWR.filter(e => e.name === 'Jupiter').length > 0).toBe(true);
		expect(PWR.filter(e => e.name === 'Saturn').length > 0).toBe(true);
		expect(PWR.filter(e => e.name === 'Uranus').length > 0).toBe(true);
		expect(PWR.filter(e => e.name === 'Neptune').length > 0).toBe(true);
		expect(PWR.filter(e => e.name === 'Mercury').length > 0).toBe(false);
		expect(PWR.filter(e => e.name === 'Earth').length > 0).toBe(false);
		expect(PWR.filter(e => e.name === 'Venus').length > 0).toBe(false);
		expect(PWR.filter(e => e.name === 'Mars').length > 0).toBe(false);
	});
	test('checks if the venusToSarturn constant contains the distance between Venus and Saturn',() => {
		expect(venusToSarturn).toBe(1427184000-107712000);
	});
});


