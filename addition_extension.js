class AdditionExtension {
    getInfo() {
        return {
            id: 'additionExtension',
            name: 'Addition',
            blocks: [
                {
                    opcode: 'addOnePlusOne',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '1 + 1',
                    func: 'addOnePlusOne'
                }
            ]
        };
    }

    addOnePlusOne() {
        return 2;
    }
}

// This line registers the extension with Scratch
Scratch.extensions.register(new AdditionExtension());
