const sayHelloWorld = require('./sayHelloWorld')

describe('Say Hello tests', () => {
    it('Should say Hello World!', () => {
        const response = sayHelloWorld.sayHello()
        expect(response).toBe('Hello World!')
    })

    it('Should say Hello Matheus!', () => {
        const response = sayHelloWorld.sayHello('Matheus')
        expect(response).toBe('Hello Matheus!')
    })
})