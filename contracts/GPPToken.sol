pragma solidity ^0.4.24;


import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol";

contract GPPToken is ERC20Mintable, ERC20Pausable, ERC20Detailed {
	constructor(string name, string symbol, uint8 decimals)
		ERC20Detailed(name, symbol, decimals)
		public
		{
    // _name = name;
    // _symbol = symbol;
    // _decimals = decimals;
  }	
}

