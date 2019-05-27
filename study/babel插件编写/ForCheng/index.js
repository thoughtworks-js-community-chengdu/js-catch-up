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
};

const calcExpression = (operator, left, right) => {
    let calc = operators[operator];
    if(calc) {
        return calc(left, right)
    }
}

export default function ({ types: t }) {
    return {
        visitor: {
            BinaryExpression(path) {
                let result = calcExpression(path.node.operator, path.node.left.value, path.node.right.value)
                if(result !== undefined) {
                    path.replaceWith(t.numericLiteral(result))
                }
            },
        }
    };
};
