require('dotenv').config();
const privateKey = process.env.PRIVATE_KEY;

const { 
	getWinnerName,
	getChairperson,
	getWinningProposal,
} = require('./contract');	

(async () => {
	const chairperson = await getChairperson();
	console.log(`ChairPerson: ${chairperson}`);

	const winnerName = await getWinnerName();
	console.log(`Winner name: ${winnerName}`);

	const winningProposal = await getWinningProposal();
	console.log(`Winning proposal: ${winningProposal}`);
})();
