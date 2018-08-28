# EthBlockchain
Building Dapp using Ethereum Blockchahin.  Using tools like Angular,  Bootstrap 4, Truffle, and Web3.
This application is suppose to mimic having an open regulatory process where  the government is open an transparent about the approval of new drugs. Using blockchian helps in aided this.

How to run:
prequeiste-> you will need npm, truffle, and @angular 

1. You will need truffle -> npm install truffle  
2. You will need angular -> npm install @angular/cli
3. Now go into the frontEnd directory where package.json and use the command 'npm install' to download rest of the needed modules (note frontEnd will need more work to be fully connect to test blockchain)
4. Back out of frontEnd directory and go back to root run 'truffle develop' to start  truffle cli next run 'compile' and 'migrate'  to deploy DrugApprover contract to the truffle test chain.
5. Run test  command within truffle cli to test out basic functionality  of contract 
6. You can interact with the contract through the truffle cli 
7. The goal was to run commands from the frontEnd by using another terminal window and typing ng serve 
8. Use your browser to go to localhost:4200 to see frontEnd( Not fully working from frontEnd yet)
 