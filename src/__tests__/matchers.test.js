describe('matchers', () => {
    it('toBe', () => {
        expect(true).toBe(true)
    })
    it('test to equal', () => {
        const data = { one: 1 }
        data['two'] = 2
        expect(data).toEqual({ one: 1, two: 2 })
    })
    it('not', () => {
        expect(true).not.toBe(false)
    })
})
describe('matchers numbers', () => {
    it('two plus two', () => {
        const value = 2 + 2
        expect(value).toBeGreaterThan(3)
        expect(value).toBeGreaterThanOrEqual(3.6)
        expect(value).toBeLessThan(5)
        expect(value).toBeLessThanOrEqual(4.8)
    })
})
describe('matchers strings', () => {
    it('string', () => {
        expect('team').not.toMatch(/I/)
    })
})

describe('throw Errors', () => {
 
})