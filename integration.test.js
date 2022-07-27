const displayBankStatement = require("./displayBank");
const bankAccount = require("./bankAccount");


describe("print", () => {
    
    const mockDate = new Date('2022-07-23')
    global.Date = jest.fn().mockImplementation(() => mockDate) // mock Date "new" constructor
    global.Date.now = jest.fn().mockReturnValue(mockDate.valueOf()) // mock Date.now
  
  it("just prints the header if there are no transactions", () => {
    const account = new bankAccount();
    const statement = new displayBankStatement(account.myTransactions());
    expect(statement.printStatement()).toEqual("date || credit || debit || balance");
  });
  it("prints out a single transaction", () => {
    const account = new bankAccount();
    account.deposit(1000);
    const statement = new displayBankStatement(account.myTransactions());
    expect(statement.printStatement()).toEqual(
      "date || credit || debit || balance\n23/07/2022 || || 1000.00 || 1000.00"
    );
  });
  it("prints out a two transaction", () => {
    const account = new bankAccount();
    account.deposit(1000);
    account.withdraw(500);
    let statement = new displayBankStatement(account.myTransactions());
    expect(statement.printStatement()).toEqual(
      statement.printStatement(),
      "date || credit || debit || balance\n 23/07/2022 || || 1000.00 || 1000.00\n23/07/2022 || 500.00 || || 500.00"
    );
  });
  
});