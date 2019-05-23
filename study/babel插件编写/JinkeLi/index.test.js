import { transform } from '@babel/core'
import Plugin from 'index'

describe('test', () => {
  beforeEach(() => {
    String.prototype.trimAll = function () {
      return this.replace(/\s/g, "")
    }
  })
  it('test expression', () => {
    const code = `
      const name = "bob"
      const desc = \`my name is ${name}\`
    `
    const result = transform(code, {
      plugins: [Plugin]
    })

    expect(result.code.trimAll()).toEqual(`
      const name = "bob"
      const desc = 'my name is ' + ${name}
    `.trimAll())
  })
})
