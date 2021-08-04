const text = 'Hola Mundo'
const fruits = ['manzana','melon','banana']

test('Debe contener un texto', () => {
	expect(text).toMatch(/Mundo/)
})

test('Tenemos una banana?', () => {
	expect(fruits).toContain('banana')
})

test('Mayor que', () => {
	expect(10).toBeGreaterThan(9)
})

test('verdadero', () => {
	expect(true).toBeTruthy()
})

const reverseString = (str, callback) => {
	callback(str.split("").reverse().join(""))
}

test('Probar Callback', () => {
	reverseString('Hola', (str) => {
		expect(str).toBe('aloH');
	});
})

const reverseString2 = str => {
	return new Promise((resolve, reject) => {
		if (!str) {
			reject(Error('Error'))
		}
		resolve(str.split("").reverse().join(""))
	})
}

test('Probar una promesa', () => {
	return reverseString2('Hola')
		.then(str => {
			expect(str).toBe('aloH')
		});
});

test('Probar sync/wait', async () => {
	const str = await reverseString2('Hola')
	expect(str).toBe('aloH');
});

// afterEach(() => console.log('Despues de cada prueba'));
// afterAll(() => console.log('Despues de todas las pruebas'));

// beforeEach(() => console.log('Antes de cada prueba'));
// beforeAll(() => console.log('Antes de todas las peubas'));