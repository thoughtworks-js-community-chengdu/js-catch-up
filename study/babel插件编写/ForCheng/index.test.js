import { transform } from '@babel/core'
import Plugin from './index'

describe('test', () => {
    beforeEach(() => {
        String.prototype.trimAll = function () {
            return this.replace(/\s/g, "")
        }
    })

    it('preset arithmetic for two numbers', () => {
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


    it('preset arithmetic for multiple numbers', () => {
        const code = `
            const num1 = 1 + 1 * 3
            const num2 = (1 + 1) * 3
            const num3 = (1 + 1) * 3 - 6
            const num4 = (1 + 1) * 3 / 2 - 2 * 0
        `
        const result = transform(code, {
            plugins: [Plugin]
        })

        expect(result.code.trimAll()).toEqual(`
            const num1 = 4;
            const num2 = 6;
            const num3 = 0;
            const num4 = 3;
            `.trimAll())
    })

    it('preset arithmetic when binary expression includes identifier', () => {
        const code = `
            const num1 = 1 + 1 * i
            const num2 = (1 + i) * 3
            const num3 = (1 + 1) * 3 - i
            const num4 = (i + 1) * 3 / 2 - 2 * 0 + j
        `
        const result = transform(code, {
            plugins: [Plugin]
        })

        expect(result.code.trimAll()).toEqual(`
            const num1 = 1 + 1 * i;
            const num2 = (1 + i) * 3;
            const num3 = 6 - i;
            const num4 = (i + 1) * 3 / 2 - 0 + j;
            `.trimAll())
    })
})
