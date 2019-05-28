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

const operators = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
    '/' : (a, b) => a / b,
}

const calcArithmetic = (operator, left, right) => {
    let calc = operators[operator]
    if(calc) {
        return calc(left, right)
    }
}

const calcBinaryExpression = (node, types) => {
    if(types.isBinaryExpression(node)) {
        return calcArithmetic(node.operator, calcBinaryExpression(node.left, types), calcBinaryExpression(node.right, types))
    } else {
        return node.value
    }
}

export default function ({ types: t }) {
    return {
        visitor: {
            BinaryExpression(path) {
                let result = calcBinaryExpression(path.node, t)
                if(result !== undefined) {
                    path.replaceWith(t.numericLiteral(result))
                }
            },
        }
    }
}
