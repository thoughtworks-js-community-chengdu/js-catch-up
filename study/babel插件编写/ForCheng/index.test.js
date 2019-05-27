import { transform } from '@babel/core'
import Plugin from './index'

describe('test', () => {
    beforeEach(() => {
        String.prototype.trimAll = function () {
            return this.replace(/\s/g, "")
        }
    })

    it('test arithmetic for two numbers', () => {
        const code = `
            const num1 = 1 + 1
            const num2 = 1 - 1
            const num3 = 1 * 3
            const num4 = 4 / 2
        `
        const result = transform(code, {
            plugins: [Plugin]
        })

        expect(result.code.trimAll()).toEqual(`
            const num1 = 2;
            const num2 = 0;
            const num3 = 3;
            const num4 = 2;`.trimAll())
    })
})
