class DisplayBankStatement{
  constructor(transactions){
    this.transactions = transactions;
  }
  header(){
    return "Tarclays"
  }
  printStatement(){
    return `date || credit || debit || balance${this.transactionsList()}`
  }
   
  formatDate(date) {
    return date.toLocaleString().split(",")[0];
  }

  transactionsList(){
    let list = ""
    this.transactions.forEach((transaction) => {
      list = list.concat(`\n${this.formatDate(transaction.date)} || `);
      if (transaction.credit == null) {
        list = list.concat("|| ")
      }else {
        list = list.concat(`${transaction.credit}.00 || `);
      }
      if (transaction.debit == null) {
        list = list.concat("|| ");
      }else {
         list = list.concat(`${transaction.debit}.00 || `);
      }
      list = list.concat(`${transaction.balance}.00`)
    });
    return list;
  }
}

// const display = new DisplayBankStatement()
// console.log(display.formatDate("20/11/2023"))
// console.log(display.formatDate("23/11/2023"))
// console.log(display.transactionList())


module.exports = DisplayBankStatement;