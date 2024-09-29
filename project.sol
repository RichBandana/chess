// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChessGame {
    // Variables to store game data
    address public owner;
    mapping(address => uint256) public playerEarnings;

    constructor() {
        owner = msg.sender; // Set the contract owner
    }

    function playGame() public {
        // Game logic here
        // For example, reward players for correct moves
        playerEarnings[msg.sender] += 1; // Example reward
    }

    function withdrawEarnings() public {
        uint256 earnings = playerEarnings[msg.sender];
        require(earnings > 0, "No earnings to withdraw");
        playerEarnings[msg.sender] = 0;
        payable(msg.sender).transfer(earnings);
    }

    // Fallback function to accept ETH
    receive() external payable {}
}


