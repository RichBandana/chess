const web3 = new Web3(window.ethereum);
const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your contract address
const contractABI = [ /* ABI from your contract */ ];
const myContract = new web3.eth.Contract(contractABI, contractAddress);

let player1Wallet = 0; // Wallet for Player 1
let player2Wallet = 0; // Wallet for Player 2
let currentPlayer = 1; // 1 for Player 1, 2 for Player 2

async function creditPlayerWallet(player, moveQuality) {
    const reward = calculateReward(moveQuality);
    if (player === 1) {
        player1Wallet += reward;
        await myContract.methods.creditWallet(player1Wallet).send({ from: /* Player 1 address */ });
    } else {
        player2Wallet += reward;
        await myContract.methods.creditWallet(player2Wallet).send({ from: /* Player 2 address */ });
    }
    console.log(`Player ${player} credited with ${reward} tokens!`);
}

function calculateReward(moveQuality) {
    return moveQuality === 'good' ? 10 : 20; 
}

// Check if MetaMask is installed
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');

    const connectWalletButton = document.getElementById('connectWallet');
    const walletAddressDisplay = document.getElementById('walletAddressDisplay'); // Adjusted for ID

    connectWalletButton.addEventListener('click', async () => {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];

            // Display the connected wallet address
            walletAddressDisplay.innerText = `Wallet Address: ${account}`; // Updated to display the connected account

            // Initialize Web3 with the current provider
            const web3 = new Web3(window.ethereum);
            console.log('Web3 initialized:', web3);
        } catch (error) {
            console.error('User denied account access:', error);
        }
    });
} else {
    console.log('MetaMask is not installed. Please install it to use this app.');
}
