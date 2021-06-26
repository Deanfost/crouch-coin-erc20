// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CrouchCoin is ERC20 {
    constructor() ERC20("MyNFT", "MNFT") { }
}
