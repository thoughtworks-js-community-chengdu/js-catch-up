/**
 * @name 预计算表达式的值 (只用考虑 加减乘除)
 * @description
 // from
 const num1 = 1 + 1
 const num2 = 1 - 1
 const num3 = 1 * 3
 const num4 = 4 / 2

 // to
 const num1 = 2;
 const num2 = 0;
 const num3 = 3;
 const num4 = 2;
 */

export default function ({ types: t }) {
    return {
        visitor: {
            BinaryExpression(path) {
                let left = parseInt(path.node.left.value)
                let right = parseInt(path.node.right.value)
                if (path.node.operator === '+') {
                    path.replaceWith(t.numericLiteral(left + right))
                } else if (path.node.operator === '-') {
                    path.replaceWith(t.numericLiteral(left - right))
                } else if (path.node.operator === '*') {
                    path.replaceWith(t.numericLiteral(left * right))
                } else if (path.node.operator === '/') {
                    path.replaceWith(t.numericLiteral(left / right))
                }
            },
        }
    };
};
