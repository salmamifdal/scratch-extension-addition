class MyExtension {
    getInfo() {
        return {
            id: 'my_extension',
            name: 'My Custom Extension',
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
                            defaultValue: 1
                        }
                    }
                }
            ]
        };
    }

    addNumbers(args) {
        return args.NUM1 + args.NUM2;
    }
}

Scratch.extensions.register(new MyExtension());
