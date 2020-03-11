const Eth = require('ethjs');
const url = 'https://rinkeby.infura.io/v3/84948fd240eb4034aaa956bc6fb61d40';const eth = new Eth(new Eth.HttpProvider(url));
const { hexToAscii } = require('./utils');

const tokenABI = require('./abi');

const contract = eth.contract(tokenABI).at('0x6eb01adcfccf333604f3a1023d6fc0be0f3b1855');

const getWinnerName = async () => {
	const winner = await contract.winnerName();
	return hexToAscii(winner.winnerName_);
};

const getChairperson = async () => {
	const chairperson = await contract.chairperson();
	return chairperson['0'];
};

const getWinningProposal = async () => {
	const winningProposal = await contract.winningProposal();
	return winningProposal.winningProposal_;
};

module.exports = {
	getWinnerName,
	getChairperson,
	getWinningProposal,
};