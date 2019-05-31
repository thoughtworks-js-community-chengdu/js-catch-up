import { transform } from '@babel/core'
import Plugin from '.'

describe('test', () => {
  beforeEach(() => {
    String.prototype.trimAll = function () {
      return this.replace(/\s/g, "")
    }
  })

  it('test single parameter', () => {
    const code = `
      const name = "bob";
      const desc = \`my name is \${name}\ age\`;
    `
    const result = transform(code, {
      plugins: [Plugin]
    })

    expect(result.code.trimAll()).toEqual(`
      const name = "bob";
      const desc = 'my name is ' + name;
    `.trimAll())
  })

  it('test multiple parameters', () => {
    const code = `
      const name = "bob";
      const age = 18;
      const desc = \`my name is \${name}\ age is \${age}\`;
    `
    const result = transform(code, {
      plugins: [Plugin]
    })

    expect(result.code.trimAll()).toEqual(`
      const name = "bob";
      const age = 18;
      const desc = 'my name is ' + name + age;
    `.trimAll())
  })

  it('test in console', () => {
    const code = `
      const name = "bob";
      console.log(\`my name is \${name}\`);
    `
    const result = transform(code, {
      plugins: [Plugin]
    })

    expect(result.code.trimAll()).toEqual(`
      const name = "bob";
      console.log('my name is ' + name);
    `.trimAll())
  })
})
