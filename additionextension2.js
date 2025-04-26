const Scratch = window.Scratch;
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
    return Number(args.NUM1) + Number(args.NUM2);
  }

  subtractNumbers(args) {
    return Number(args.NUM2) - Number(args.NUM1);
  }

  multiplyNumbers(args) {
    return Number(args.NUM1) * Number(args.NUM2);
  }

  divideNumbers(args) {
    if (Number(args.NUM2) === 0) return 'undefined';
    return Number(args.NUM1) / Number(args.NUM2);
  }
}

Scratch.extensions.register(new MyExtension());
