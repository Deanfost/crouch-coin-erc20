const { expect } = require('chai');
const { ethers } = require('ethers');

describe('CrouchCoin', function() {
    // Get contract ABI
    before(async function() {
        this.CrouchCoin = await ethers.getContractFactory('CrouchCoin');
    });

    // Deploy a new instance of the contract
    beforeEach(async function() {
        this.cc = await this.CrouchCoin.deploy();
        await this.cc.deployed();
    });

    // Test cases
    
});
