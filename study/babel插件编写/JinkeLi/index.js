/**
 * @name 模板字符串的转换
 * @description
 *  const name = "test"
    // from
    const desc = `my name is ${name}`
    // to
    const desc = 'my name is ' + name
 */

export default function ({ types: t }) {
  return {
    visitor: {
      TemplateLiteral(path) {
        const { node } = path
        let params
        let str
        if (
          node &&
          node.expressions &&
          node.quasis &&
          node.expressions.length >= 1 &&
          node.quasis.length >= 1 &&
          node.expressions.every((expression) => t.isIdentifier(expression))
        ) {
          params = node.expressions.reduce((str, { name }, i) => {
            if (i > 0) {
              str += " + "
            }
            str += name
            return str
          }, "")

          const element = node.quasis[0]
          if(t.isTemplateElement(element)) {
            str = element.value.raw
          }
        }

        if(!params) {
          return
        }
        const result = `'${str}' + ${params}`
        path.replaceWithSourceString(result)
      },
    }
  };
};
