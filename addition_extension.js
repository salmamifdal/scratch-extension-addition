(function(Scratch) {
    'use strict';

    class AdditionExtension {
        getInfo() {
            return {
                id: 'additionExtension', // unique ID
                name: 'Addition Tools', // extension name in Scratch
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
                        }
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
