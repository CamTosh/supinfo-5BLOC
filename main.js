var app = new Vue({
  el: '#app',
  data: function() {
  	return {
    	api: 'http://localhost:4444',
    	chairPerson: null,
      winningProposal: null,
		  results: []
  	}
  },
  mounted() {
    this.getChairperson();
    this.getProposals();
  	this.getWinningProposal();
  },
  methods: {
  	getProposals: function() {
  		fetch(`${this.api}/proposals`).then((r) => r.json()).then((r) => this.results = r);
  	},
    getChairperson: function() {
      fetch(`${this.api}/chairPerson`).then((r) => r.json()).then((r) => this.chairPerson = r);
    },
  	getWinningProposal: function() {
  		fetch(`${this.api}/winningProposal`).then((r) => r.json()).then((r) => this.winningProposal = r);
  	},
  }
});