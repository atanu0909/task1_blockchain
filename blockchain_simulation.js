const crypto = require('crypto');

class Block {
    constructor(index, data, previousHash = '') {
        this.index = index;
        this.timestamp = new Date();
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return crypto.createHash('sha256')
            .update(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce)
            .digest('hex');
    }
}

// Create three linked blocks
let block1 = new Block(0, { amount: 50 });
let block2 = new Block(1, { amount: 100 }, block1.hash);
let block3 = new Block(2, { amount: 75 }, block2.hash);

// Display all blocks
console.log('Original Chain:');
console.log('Block 1:', block1);
console.log('Block 2:', block2);
console.log('Block 3:', block3);

// Tamper with Block 1
console.log('\nTampering with Block 1...');
block1.data = { amount: 150 };
block1.hash = block1.calculateHash();

console.log('\nAfter tampering:');
console.log('Block 1:', block1);
console.log('Block 2:', block2);
console.log('Block 3:', block3);

console.log('\nChain is now invalid because Block 2 still references old hash of Block 1!');
