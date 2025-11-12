// Import Web3
import Web3 from 'web3';

// Define an async function to connect MetaMask
async function connectMetaMask() {
    // Check if MetaMask is installed
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("MetaMask connected");

            // Get accounts
            const accounts = await web3.eth.getAccounts();
            console.log("User's Ethereum Address: ", accounts[0]);
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        console.log('MetaMask not installed');
    }
}

// Call the function to initiate the connection
connectMetaMask();

// Listen for network changes
window.ethereum.on('chainChanged', (chainId) => {
    console.log("Network changed to:", chainId);
});
