const bankAccount = require("./bankAccount")

describe("bank", () => {
  const mockDate = new Date('2022-07-23')
    global.Date = jest.fn().mockImplementation(() => mockDate) // mock Date "new" constructor
    global.Date.now = jest.fn().mockReturnValue(mockDate.valueOf()) // mock Date.now

  it("can deposit money into bank account", () => {
    const account = new bankAccount;
    account.deposit(1000)
    expect(account.myTransactions()).toEqual([
      { date: mockDate, credit: null, debit: 1000, balance: 1000 }
    ])
  })
    it("can deposit more money into bank account - second transaction", () => {
      const account = new bankAccount;
      account.deposit(1000)
      account.deposit(1000)
      expect(account.myTransactions()).toEqual([
        { date: mockDate, credit: null, debit: 1000, balance: 1000 },
        { date: mockDate, credit: null, debit: 1000, balance: 2000 },
      ])
    })
  
  it("Keeps a log of deposits - third transactions", () => {
    const account = new bankAccount();
    account.deposit(1000);
    account.withdraw(500);
    expect(account.myTransactions()).toEqual([
      { date: mockDate, credit: null, debit: 1000, balance: 1000 },
      { date: mockDate, credit: 500, debit: null, balance: 500 },
    ]);
  });
})