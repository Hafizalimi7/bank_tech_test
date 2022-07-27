class Account{
  constructor(){
    this.balance = 0
    this.transactions = []
  }

  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push({
      date: new Date(),
      credit: amount,
      debit: null,
      balance: this.balance,
    });
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      date: new Date(),
      credit: null,
      debit: amount,
      balance: this.balance,
    });
  }
  myTransactions(){
    return this.transactions
  }
}

module.exports = Account;