const ArgumentType = require('../extension-support/argument-type');
const BlockType = require('../extension-support/block-type');

class MyExtension {
    getInfo() {
        return {
            id: 'myextension',
            name: 'My Extension',
            blocks: [
                {
                    opcode: 'sayHello',
                    blockType: BlockType.COMMAND,
                    text: 'say hello',
                    arguments: {}
                }
            ]
        };
    }

    sayHello() {
        console.log('Hello from My Extension!');
    }
}

module.exports = MyExtension;
