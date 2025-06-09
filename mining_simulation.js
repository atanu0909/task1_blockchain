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

    mineBlock(difficulty) {
        const startTime = Date.now();
        let attempts = 0;
        
        // Create difficulty string (e.g., "0000" for difficulty of 4)
        const target = '0'.repeat(difficulty);
        
        while (this.hash.substring(0, difficulty) !== target) {
            this.nonce++;
            attempts++;
            this.hash = this.calculateHash();
        }
        
        const endTime = Date.now();
        const timeTaken = (endTime - startTime) / 1000; // Convert to seconds
        
        console.log(`Block mined! Nonce: ${this.nonce}`);
        console.log(`Attempts needed: ${attempts}`);
        console.log(`Time taken: ${timeTaken} seconds`);
        return this.hash;
    }
}

// Create and mine a block
const block = new Block(1, { amount: 100 });
console.log('Mining block with difficulty 4 (hash must start with "0000")...');
block.mineBlock(4);
