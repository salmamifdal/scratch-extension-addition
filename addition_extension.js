(function(Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('This extension requires unsandboxed mode.');
    }

    class AdditionExtension {
        getInfo() {
            return {
                id: 'additionExtension',
                name: 'Addition Tools',
                blocks: [
                    {
                        opcode: 'addTwoNumbers',
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
                        },
                        func: 'addTwoNumbers'
                    }
                ]
            };
        }

        addTwoNumbers(args) {
            return Number(args.NUM1) + Number(args.NUM2);
        }
    }

    Scratch.extensions.register(new AdditionExtension());
})(Scratch);
