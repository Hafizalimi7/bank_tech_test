#The Specification is shown below the header "Bank tech test".



#You should be able to interact with your code via Node. (You don't need to implement a command line interface that takes input from STDIN.)


#You would be able to deposit and withdraw money
#You will be able to see account statement (date, amount, balance) printing.

Technologies 
It has been built on Javascript. 

It was built using TDD throughout. Testing technology was Node.


To run locally:
git clone https://github.com/Hafizalimi7/bank_tech_test.git
npm install


Testing:
To run the tests:
node

##Example
Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see



date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

input                        || output
nothing                      || header
deposit(1000), on 10-01-2023 || header , 10-01-2023
deposit(2000), on 13-01-2023 || header, 13-01-2023
withdraw(500), on 14-01-2023 || header, 14-01-2023



