const displayBankStatement = require("./displayBank")

describe("statement", () => {
  it('prints out the header if no transaction is being done', () => {
    const display = new displayBankStatement()
   expect(display.header()).toEqual("Tarclays")
  })
  it
  it('prints out the header and  one transaction', () => {
     date = new Date("2023/01/10") 
    const displayDouble = {
      dealingsHistory: () => [
        {date: date, credit: null, debit: 1000.00, balance: 1000.00 }
     ],
    };
    const display = new displayBankStatement(displayDouble.dealingsHistory());
    expect(display.printStatement()).toEqual(
      "date || credit || debit || balance\n10/01/2023 || || 1000.00 || 1000.00"
    )
  })
  it('prints out the header and another transaction', () => {
     date = new Date("2023/01/13") 
    const displayDouble = {
      dealingsHistory: () => [
        {date: date, credit: null, debit: 1000.00, balance: 1000.00 },
        {date: date, credit: 2000.00, debit:null, balance: 3000.00}
      ],
    };
    const display = new displayBankStatement(displayDouble.dealingsHistory());
    expect(display.printStatement()).toEqual(
      "date || credit || debit || balance\n13/01/2023 || || 1000.00 || 1000.00\n13/01/2023 || 2000.00 || || 3000.00"
    )
  })
})