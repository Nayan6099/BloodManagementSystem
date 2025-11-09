import { ethers } from 'ethers';

async function connectMetaMask() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        try {
            // Request account access
            await provider.send('eth_requestAccounts', []);
            const signer = provider.getSigner();
            console.log("MetaMask connected");

            // Get user's Ethereum address
            const signerAddress = await signer.getAddress();
            console.log("User's Ethereum Address: ", signerAddress);

            // Send a transaction
            const tx = {
                to: '0xRecipientAddress', // recipient address
                value: ethers.utils.parseEther('0.1'), // value in ETH
            };
            const txResponse = await signer.sendTransaction(tx);
            console.log('Transaction hash:', txResponse.hash);
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        console.log('MetaMask not installed');
    }
}

// Call the function to initiate connection
connectMetaMask();

// Handle network changes
window.ethereum.on('chainChanged', (chainId) => {
    console.log("Network changed to:", chainId);
});
