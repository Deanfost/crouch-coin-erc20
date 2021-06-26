// Run through 'npm run deploy-hh'

async function main() {
    // We get the contract to deploy
    const CrouchCoin = await ethers.getContractFactory("CrouchCoin");
    console.log("Deploying contract...");
    const cc = await CrouchCoin.deploy();
    await cc.deployed();
    console.log("Contract deployed to:", cc.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
