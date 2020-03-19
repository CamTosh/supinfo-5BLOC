require('dotenv').config();

const { 
	getWinnerName,
	getChairperson,
	getWinningProposal,
	getProposals
} = require('./contract');	

const express = require('express');
const app = express();
const PORT = 4444;

const privateKey = process.env.PRIVATE_KEY;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/chairperson', async (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
  const chairperson = await getChairperson();
  res.json(chairperson);
});

app.get('/winnerName', async (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
	const winnerName = await getWinnerName();
  res.json(winnerName);
});

app.get('/winningProposal', async (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
  const winningProposal = await getWinningProposal();
  res.json(winningProposal);
});

app.get('/proposals', async (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
  const proposals = await getProposals();
  res.json(proposals);
});
