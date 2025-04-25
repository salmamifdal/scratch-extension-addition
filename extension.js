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
                },
                {
                    opcode: 'addWithEmoji',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'add [A] and [B] with emoji',
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 2
                        },
                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 3
                        }
                    }
                },
                {
                    opcode: 'randomAddition',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'random add between [MIN] and [MAX]',
                    arguments: {
                        MIN: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        MAX: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10
                        }
                    }
                }
            ]
        };
    }

    addNumbers(args) {
        return Number(args.NUM1) + Number(args.NUM2);
    }

    addWithEmoji(args) {
        const sum = Number(args.A) + Number(args.B);
        return `${args.A} + ${args.B} = ${sum} 🎉`;
    }

    randomAddition(args) {
        const min = Number(args.MIN);
        const max = Number(args.MAX);
        const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
        const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
        const sum = num1 + num2;
        return `${num1} + ${num2} = ${sum}`;
    }
}

Scratch.extensions.register(new MyExtension());
