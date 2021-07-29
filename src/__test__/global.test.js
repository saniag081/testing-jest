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

