interface IOwnBalance {
    ownBalance: number,
    active: boolean,
    activetedDate: string,
    expiredDate: string,
    currency: string,
}

interface ICreditBalance {
    creditBalance: number,
    creditLimit: number,
    active: boolean,
    activetedDate: string,
    expiredDate: string,
    currency: string,
}

interface ICredit {
    ownBalance: IOwnBalance,
    creditBalance: ICreditBalance,
}

interface IDebitBalance {
    curentBalance: number,
    active: boolean,
    activetedDate: string,
    expiredDate: string,
    currency: string,
}

interface IClients {
    name: string,
    surname: string,
    isActive: boolean,
    debit: IDebitBalance,
    credit: ICredit,
}


const bankClients: IClients[] = [
    {
        name: 'Vasiliy',
        surname: 'Zazhitochniy',
        isActive: true,
        debit: {
            curentBalance: 8000,
            active: true,
            activetedDate: '04.06.2015',
            expiredDate: '04.06.2028',
            currency: 'USD',
        },
        credit: {
            ownBalance: {
                ownBalance: 10000,
                active: true,
                activetedDate: '04.06.2016',
                expiredDate: '04.06.2028',
                currency: 'UAH',
            },
            creditBalance: {
                creditBalance: 10000,
                creditLimit: 20000,
                active: false,
                activetedDate: '04.06.2016',
                expiredDate: '04.06.2028',
                currency: 'EUR',
            }
        },
    },
    {
        name: 'Margarita',
        surname: 'Nahlebnikova',
        isActive: true,
        debit: {
            curentBalance: 7000,
            active: false,
            activetedDate: '21.10.2015',
            expiredDate: '21.10.2025',
            currency: 'UAH',
        },
        credit: {
            ownBalance: {
                ownBalance: 6000,
                active: true,
                activetedDate: '21.10.2015',
                expiredDate: '21.10.2025',
                currency: 'USD',
            },
            creditBalance: {
                creditBalance: 0,
                creditLimit: 10000,
                active: false,
                activetedDate: '21.10.2015',
                expiredDate: '21.10.2025',
                currency: 'UAH',
            },
        },
    },
    {
        name: 'Ignat',
        surname: 'Magnat',
        isActive: false,
        debit: {
            curentBalance: 8090,
            active: true,
            activetedDate: '14.01.2013',
            expiredDate: '14.01.2023',
            currency: 'UAH',
        },
        credit: {
            ownBalance: {
                ownBalance: 5000,
                active: false,
                activetedDate: '19.10.2015',
                expiredDate: '19.10.2025',
                currency: 'USD',
            },
            creditBalance: {
                creditBalance: 100000,
                creditLimit: 500000,
                active: false,
                activetedDate: '19.10.2015',
                expiredDate: '19.10.2025',
                currency: 'RUR',
            }
        },
    },
    {
        name: 'Azul',
        surname: 'Ryabko',
        isActive: true,
        debit: {
            curentBalance: 3800,
            active: true,
            activetedDate: '21.08.2016',
            expiredDate: '21.08.2028',
            currency: 'EUR',
        },
        credit: {
            ownBalance: {
                ownBalance: 15000,
                active: true,
                activetedDate: '21.08.2016',
                expiredDate: '21.08.2028',
                currency: 'UAH',
            },
            creditBalance: {
                creditBalance: 0,
                creditLimit: 30000,
                active: false,
                activetedDate: '21.08.2016',
                expiredDate: '21.08.2028',
                currency: 'EUR',
            }
        },
    },
    {
        name: 'Vladimir',
        surname: 'Mamontov',
        isActive: true,
        debit: {
            curentBalance: 20000,
            active: true,
            activetedDate: '02.04.2016',
            expiredDate: '02.04.2028',
            currency: 'RUR',
        },
        credit: {
            ownBalance: {
                ownBalance: 50000,
                active: false,
                activetedDate: '02.04.2016',
                expiredDate: '02.04.2028',
                currency: 'RUR',
            },
            creditBalance: {
                creditBalance: 35000,
                creditLimit: 50000,
                active: true,
                activetedDate: '02.04.2021',
                expiredDate: '02.04.2032',
                currency: 'RUR',
            }
        },
    },
    {
        name: 'Georgiy',
        surname: 'Managerovich',
        isActive: false,
        debit: {
            curentBalance: 10000,
            active: false,
            activetedDate: '26.03.2016',
            expiredDate: '26.03.2026',
            currency: 'EUR',
        },
        credit: {
            ownBalance: {
                ownBalance: 10000,
                active: false,
                activetedDate: '23.09.2016',
                expiredDate: '23.09.2028',
                currency: 'USD',
            },
            creditBalance: {
                creditBalance: 3000,
                creditLimit: 10000,
                active: true,
                activetedDate: '15.11.2016',
                expiredDate: '15.11.2028',
                currency: 'UAH',
            }
        },
    },
    {
        name: 'Igor',
        surname: 'Talkov',
        isActive: true,
        debit: {
            curentBalance: 90000,
            active: false,
            activetedDate: '10.10.2014',
            expiredDate: '10.10.2024',
            currency: 'RUR'
        },
        credit: {
            ownBalance: {
                ownBalance: 80000,
                active: true,
                activetedDate: '10.10.2016',
                expiredDate: '10.10.2028',
                currency: 'USD',
            },
            creditBalance: {
                creditBalance: 90000,
                creditLimit: 100000,
                active: true,
                activetedDate: '10.10.2016',
                expiredDate: '10.10.2028',
                currency: 'UAH',
            }
        },
    },
];

class Bank {
    data: IClients[];
    constructor(data: IClients[]) {
        this.data = data;
    }

    fetchApiData(data: Record<string, number>, callback: Function) {
        return fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(result => result.json())
            .then(function (currencyValue) {
                let currency: Record<string, number> = {};
                currencyValue.forEach((data: Record<string, number>) => {
                    currency[data.ccy] = currency[data.ccy] || 0;
                    currency[data.ccy] = data.buy;
                })
                return callback(data, currency);
            });
    }


    countTotalBalanceBank() {
        let totalBalance: Record<string, number> = {};
        this.data.forEach((client) => {
            totalBalance[client.credit.ownBalance.currency] = totalBalance[client.credit.ownBalance.currency] || 0;
            totalBalance[client.credit.ownBalance.currency] += client.credit.ownBalance.ownBalance;
            totalBalance[client.credit.creditBalance.currency] = totalBalance[client.credit.creditBalance.currency] || 0;
            totalBalance[client.credit.creditBalance.currency] += client.credit.creditBalance.creditBalance;
            totalBalance[client.debit.currency] = totalBalance[client.debit.currency] || 0;
            totalBalance[client.debit.currency] += client.debit.curentBalance;
        });
        return this.fetchApiData(totalBalance, (data: Record<string, number>, currency: number[]) => {
            let convertTotalBalance = data.UAH;
            data.UAH = 0;
            for (let value in currency) {
                for (let num in totalBalance) {
                    if (value === num) {
                        convertTotalBalance += totalBalance[num] * currency[value];
                    };
                };
            };

            return Math.round(convertTotalBalance);
        });
    }

    countCreditMoney() {
        let creditMoney: Record<string, number> = {};
        this.data.forEach((client) => {
            creditMoney[client.credit.creditBalance.currency] = creditMoney[client.credit.creditBalance.currency] || 0;
            creditMoney[client.credit.creditBalance.currency] += client.credit.creditBalance.creditBalance;
        });
        return this.fetchApiData(creditMoney, (data: Record<string, number>, currency: number[]) => {
            let convertCreditMoney = data.UAH;
            data.UAH = 0;

            for (let value in currency) {
                for (let num in creditMoney) {
                    if (value === num) {
                        convertCreditMoney += creditMoney[num] * currency[value];
                    };
                };
            };
            return Math.round(convertCreditMoney);
        });
    }

    countLoanDebtorsTotalDebt() {
        let loanDebtorsDebt: Record<string, number> = {};
        this.data.forEach((client) => {
            loanDebtorsDebt[client.credit.creditBalance.currency] = loanDebtorsDebt[client.credit.creditBalance.currency] || 0;
            if (client.isActive === false) {
                loanDebtorsDebt[client.credit.creditBalance.currency] += client.credit.creditBalance.creditBalance;
            }
        });
        return this.fetchApiData(loanDebtorsDebt, (data: Record<string, number>, currency: number[]) => {
            let convertLoanDebtorsDebt = data.UAH;
            data.UAH = 0;

            for (let value in currency) {
                for (let num in loanDebtorsDebt) {
                    if (value === num) {
                        convertLoanDebtorsDebt += loanDebtorsDebt[num] * currency[value];
                    };
                };
            };

            return Math.round(convertLoanDebtorsDebt);
        });
    }
}
const bankOschad = new Bank(bankClients);