const randomSrings = require('../index');

describe('Probar funcionabilidades de randomString', () => {
	test('Probar la funcinabilidad', () => {
		expect(typeof (randomSrings())).toBe('string');
	});

	test('Comprobar que no existe una ciudad', () => {
		expect(randomSrings()).not.toMatch(/Cordoba/);
	});
});