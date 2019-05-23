/**
 * @name 模板字符串的转换
 * @description
 *  const name = "test"
    // from
    const desc = `my name is ${name}`
    // to
    const desc = 'my name is ' + name
 */

export default function({ types: t }) {
  return {
    visitor: {
      TemplateElement(path, state) {
        // TODO:
        console.log(path)
      },
    }
  };
};
