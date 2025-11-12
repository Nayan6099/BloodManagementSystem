 useEffect(() => {
        const init = async () => {
            // load web3
            const tempWeb3 = await getWeb3();
            // loadBlockchainData
            const tempAccounts = await tempWeb3.eth.getAccounts();
            const networkId = await tempWeb3.eth.net.getId();
            let freelancecon;

            const listener = (accs) => {
                setAccounts(accs);
            };

            window.ethereum.on("accountsChanged", listener);


            // console.log(tempWeb3);
            // console.log(tempAccounts);
            // //
            // console.log(networkId);
            // console.log(freelance);

            const networkdata = freelance.networks[networkId];
            // console.log("networkdata",networkdata);
            if (networkdata) {
                const abi = freelance.abi;
                // console.log("freelance.abi", freelance.abi);
                freelancecon = new tempWeb3.eth.Contract(
                    abi,
                    networkdata.address
                );

                // console.log("freelancecon",freelancecon);
            }

            // saving this to states
            setWeb3(tempWeb3);
            setAccounts(tempAccounts);
            setContract(freelancecon);
            // console.log("contract init", contract);
            // console.log("accounts", accounts);
            // console.log("web3", web3);
        };

        init();
    }, []);