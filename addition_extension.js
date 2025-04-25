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
              NUM1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
              NUM2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2
              }
            }
          }
        ]
      };
    }

    addNumbers(args) {
      return Number(args.NUM1) + Number(args.NUM2); // Make sure to return the result
    }
  }

  // Register the extension properly
  Scratch.extensions.register(new MyExtension());
