/*
Bank account list
*/

// Account prototype object
const Account = {
  init(owner) {
    this.owner = owner;
    this.balance = 0;
  },
  // Add an amount to the bank balance
  credit(amount) {
    this.balance += amount;
  },
  // Return account description
  describe() {
    return `owner: ${this.owner}, balance: ${this.balance}`;
  }
};

// Factory function to create and setup an account
function createAccount(owner) {
  const account = Object.create(Account);
  account.init(owner);
  return account;
}

const accountList = [];
// Add 3 accounts to the list
accountList.push(createAccount("Sean"));
accountList.push(createAccount("Brad"));
accountList.push(createAccount("Georges"));

// Credit and describe each account
for (const account of accountList) {
  account.credit(1000);
  console.log(account.describe());
}
