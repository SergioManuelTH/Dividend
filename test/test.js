const Dividend = artifacts.require("Dividend");

contract("Dividend testing", (accounts) => {
    
  [alice, bob] = accounts;
  console.log('Alice address: ', alice);
  console.log('Bob address: ', bob);

  /*let dividendoInstance;
  beforeEach(async () => {
    dividendoInstance = await Dividendo.new();
  });
  */

    context('Constructor', async () => {
        it('Testing name=TESTCOIN', async () => {
          const dividendInstance = await Dividend.deployed();
          const name = await dividendInstance.name();
          console.log(name);
          expect(name).to.equal('TESTCOIN');
        });
        it('Testing owner=first account(alice)', async () => {
            const dividendInstance = await Dividend.deployed();
            const owner = await dividendInstance.owner();
            console.log(owner);
            //assert.equal(owner,alice); 
            expect(owner).to.equal(alice);
        });
    });
    
    context('Execution', async () => {
        it('Testing incomeDividend', async () => {
            const dividendInstance = await Dividend.deployed();
            const balance = await dividendInstance.incomeDividend(500, {value:500});
            //console.log(balance);
            //assert.equal(balance,500);
            //expect(nombre).to.equal('TESTCOIN');
          });
          it('Testing withdrawalDividend', async () => {
            const dividendInstance = await Dividend.deployed();
            const balance = await dividendInstance.withdrawalDividend(250, {from:bob});
            //console.log(balance);
            //assert.equal(balance,500);
            //expect(nombre).to.equal('TESTCOIN');
          });
        



        /*it('Unable to make a transfer without sufficient balance', async () => {
          try {
            const result = await moneyInstance.transfer(1001, bob, {from: alice});
            expect(result.receipt.status).to.equal(false);
          } catch (error) {
            expect(error.reason).to.equal('Insufficient balance');
          }
        })*/
    });
    
    

})


