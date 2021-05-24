const BigNumber = web3.BigNumber;
const GPPToken = artifacts.require('GPPToken');

require('chai')
	.use(require('chai-bignumber')(BigNumber))
	.should();

contract('GPPToken', accounts => {
	const _name = 'GPPToken';
	const _symbol = 'GPP';
	const _decimals = 18;

	beforeEach(async function() {
		this.token = await GPPToken.new( _name, _symbol, _decimals);
	});

	describe('Token Attributes: ', function(){
		it('has the correct name', async function() {
			const name = await this.token.name();
			name.should.equal(_name);
		});

		it('has the correct symbol', async function() {
			const symbol = await this.token.symbol();
			symbol.should.equal(_symbol);
		});

		it('has the correct decimals', async function() {
			const decimals = await this.token.decimals();
			decimals.should.be.bignumber.equal(_decimals);
		});
	});
});