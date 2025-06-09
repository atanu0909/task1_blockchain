// Mock validators for different consensus mechanisms
const miners = [
    { id: 1, power: Math.random() * 1000 },
    { id: 2, power: Math.random() * 1000 },
    { id: 3, power: Math.random() * 1000 }
];

const stakers = [
    { id: 1, stake: Math.random() * 1000 },
    { id: 2, stake: Math.random() * 1000 },
    { id: 3, stake: Math.random() * 1000 }
];

const voters = [
    { id: 1, votes: Math.floor(Math.random() * 100) },
    { id: 2, votes: Math.floor(Math.random() * 100) },
    { id: 3, votes: Math.floor(Math.random() * 100) }
];

// Proof of Work simulation
function simulatePoW() {
    console.log('\nSimulating Proof of Work:');
    console.log('Miners:', miners);
    
    const winner = miners.reduce((max, miner) => 
        miner.power > max.power ? miner : max
    );
    
    console.log('Winner selected based on highest computing power:');
    console.log(`Miner ${winner.id} with power ${winner.power}`);
}

// Proof of Stake simulation
function simulatePoS() {
    console.log('\nSimulating Proof of Stake:');
    console.log('Stakers:', stakers);
    
    const winner = stakers.reduce((max, staker) => 
        staker.stake > max.stake ? staker : max
    );
    
    console.log('Winner selected based on highest stake:');
    console.log(`Staker ${winner.id} with stake ${winner.stake}`);
}

// Delegated Proof of Stake simulation
function simulateDPoS() {
    console.log('\nSimulating Delegated Proof of Stake:');
    console.log('Voters:', voters);
    
    // Sort by votes and select top delegate
    const sortedDelegates = [...voters].sort((a, b) => b.votes - a.votes);
    const winner = sortedDelegates[0];
    
    console.log('Winner selected based on most votes:');
    console.log(`Delegate ${winner.id} with ${winner.votes} votes`);
}

// Run all simulations
simulatePoW();
simulatePoS();
simulateDPoS();
