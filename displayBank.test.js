const displayBankStatement = require("./displayBank")

describe("statement", () => {
  const mockDate = new Date('2022-07-23')
  global.Date = jest.fn().mockImplementation(() => mockDate) // mock Date "new" constructor
  global.Date.now = jest.fn().mockReturnValue(mockDate.valueOf()) // mock Date.now
  
  it('prints out the header if no transaction is being done', () => {
    const display = new displayBankStatement()
    expect(display.header()).toEqual("Tarclays")
  })

  it('prints out the header and  one transaction', () => {
    const displayDouble = {
      dealingsHistory: () => [
        {date: mockDate, credit: null, debit: 1000.00, balance: 1000.00 }
      ],
    };
    const display = new displayBankStatement(displayDouble.dealingsHistory());
    expect(display.header()).toEqual("Tarclays")
    expect(display.printStatement()).toEqual(
      "date || credit || debit || balance\n23/07/2022 || || 1000.00 || 1000.00"
      )
    });
  it('prints out the header and another transaction', () => {
    const displayDouble = {
      dealingsHistory: () => [
        {date: mockDate, credit: null, debit: 1000.00, balance: 1000.00 },
        {date: mockDate, credit: 2000.00, debit:null, balance: 3000.00}
      ],
    };
    const display = new displayBankStatement(displayDouble.dealingsHistory());
    expect(display.header()).toEqual("Tarclays")
    expect(display.printStatement()).toEqual(
      "date || credit || debit || balance\n23/07/2022 || || 1000.00 || 1000.00\n23/07/2022 || 2000.00 || || 3000.00"
      )
    })
})