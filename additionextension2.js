const Scratch = window.Scratch;

function validateNumber(input) {
  const num = Number(input);
  return isNaN(num) ? 0 : num;
}

class MyExtension {
  getInfo() {
    return {
      id: 'addition',
      name: 'Addition',
      blocks: [
        {
          opcode: 'addNumbers',
          blockType: Scratch.BlockType.REPORTER,
          text: 'add [NUM1] and [NUM2]',
          arguments: {
            NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
            NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
          }
        },
        {
          opcode: 'subtractNumbers',
          blockType: Scratch.BlockType.REPORTER,
          text: 'subtract [NUM1] from [NUM2]',
          arguments: {
            NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
            NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
          }
        },
        {
          opcode: 'multiplyNumbers',
          blockType: Scratch.BlockType.REPORTER,
          text: 'multiply [NUM1] and [NUM2]',
          arguments: {
            NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
            NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }
          }
        },
        {
          opcode: 'divideNumbers',
          blockType: Scratch.BlockType.REPORTER,
          text: 'divide [NUM1] by [NUM2]',
          arguments: {
            NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 6 },
            NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
          }
        }
      ]
    };
  }

  addNumbers(args) {
    const num1 = validateNumber(args.NUM1);
    const num2 = validateNumber(args.NUM2);
    return num1 + num2;
  }

  subtractNumbers(args) {
    const num1 = validateNumber(args.NUM1);
    const num2 = validateNumber(args.NUM2);
    return num2 - num1;
  }

  multiplyNumbers(args) {
    const num1 = validateNumber(args.NUM1);
    const num2 = validateNumber(args.NUM2);
    return num1 * num2;
  }

  divideNumbers(args) {
    const num1 = validateNumber(args.NUM1);
    const num2 = validateNumber(args.NUM2);
    if (num2 === 0) return 'Error: Division by zero';
    return num1 / num2;
  }
}

Scratch.extensions.register(new MyExtension());
