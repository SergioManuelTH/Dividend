// SPDX-License-Identifier: GPL-3.0
//probando git

pragma solidity >=0.7.0 <0.9.0;


contract Dividend{

string public name;
address public owner;



constructor (string memory _n){
    name = _n;
    owner = msg.sender;

}

    function incomeDividend (uint256 dividend) public payable returns (uint256 balance){
        require (msg.sender == owner);
        require (msg.value == dividend);
        return address(this).balance;

    }

    function withdrawalDividend (uint256 amount) public {
        require(address(this).balance >= amount);
        payable(msg.sender).transfer(amount);
        
   }

}