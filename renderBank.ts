class BankView {
    data: IClients[];
    modalValue: boolean | null;
    buttonWindowOpen: HTMLElement;
    cardItem: HTMLElement;
    modal: HTMLElement;
    modalWindow: HTMLElement;
    information: HTMLElement;
    constructor(data: IClients[]) {
        this.data = data;
        this.information = document.querySelector('.information') as HTMLElement;
        this.buttonWindowOpen = document.querySelector('.createButton') as HTMLElement;
        this.cardItem = document.querySelector('.cards__item') as HTMLElement;
        this.modal = document.querySelector('.modal') as HTMLElement;
        this.modalWindow = document.querySelector('.modal__window') as HTMLElement;
        this.modalValue = null;
        this.aboutBank();
        this.showClient();
    }

    aboutBank() {
        let totalBalance = bankOschad.countTotalBalanceBank();
        let creditMoney = bankOschad.countCreditMoney();
        let debtorsTotalDebts = bankOschad.countLoanDebtorsTotalDebt();

        const totalBankBalance = document.createElement('div');
        totalBankBalance.className = 'totalBankBalance';

        totalBalance.then((result: string) => {
            totalBankBalance.innerHTML = `
            <p class="info"> Bank current balance : ${result} UAH</p>
            `;
        });

        const totalCreditMoney = document.createElement('div');
        totalCreditMoney.className = 'totalCreditMoney';

        creditMoney.then((result: string) => {
            totalCreditMoney.innerHTML = `
            <p class="info"> Current credit money : ${result} UAH</p>
            `;
        });

        const debtorsDebt = document.createElement('div');
        debtorsDebt.className = 'debtorsDebt';

        debtorsTotalDebts.then((result: string) => {
            debtorsDebt.innerHTML = `
            <p class="info"> Total debt : ${result} UAH</p>
            `;
        });

        this.information.append(totalBankBalance);
        this.information.append(debtorsDebt);
        this.information.append(totalCreditMoney);
    }

    showClient() {
        this.cardItem.innerHTML = ' ';
        const cards = this.data.map((data, index) => this.showClients(data, index));
        this.cardItem.append(...cards);
    }

    showClients(data: IClients, index: number) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <h3 class="client-fullname"> Fullname: <span class="fullname">${data.name} ${data.surname}</span></h3>
        <p class="client-info">Balance: ${data.credit.ownBalance.ownBalance} ${data.credit.ownBalance.currency}</p>
        <p class="client-info">Credit Balance: ${data.credit.creditBalance.creditBalance} ${data.credit.creditBalance.currency}</p>
        <p class="client-info">Credit Limit: ${data.credit.creditBalance.creditLimit} ${data.credit.creditBalance.currency}</p>
        <p class="client-info">Debit Balance: ${data.debit.curentBalance} ${data.debit.currency}</p>
        <p class="client-info">Activeted date: ${data.credit.ownBalance.activetedDate}</p>
        <p class="client-info">Expired date: ${data.credit.ownBalance.expiredDate}</p>
        <p class="client-info">Client status: ${data.isActive ? 'active' : 'inactive'}</p>
        `;

        const cardButtonContainer = document.createElement('div');
        cardButtonContainer.className = 'cardButtonContainer';
        card.append(cardButtonContainer);

        const modifyButton = document.createElement('button');
        modifyButton.className = 'button';
        modifyButton.innerHTML = 'Modify';
        cardButtonContainer.appendChild(modifyButton);
        modifyButton.addEventListener('click', this.modifyWindow.bind(this, data, index));

        this.buttonWindowOpen.addEventListener('click', this.createWindow.bind(this, data));

        const deleteButton = document.createElement('button');
        deleteButton.className = 'button';
        deleteButton.innerHTML = 'Delete';
        cardButtonContainer.appendChild(deleteButton);
        deleteButton.addEventListener('click', this.deleteClient.bind(this, index));

        return card;
    }

    modalDisplay(data: IClients, index: number) {
        this.modal.classList.add('active');
        this.modalWindow.innerHTML = `
        <h2>Operate window</h2>
        <div class="modal-item">
            <p> Name </p>
            <input class="input" type="text" placeholder="Type client name" name="name"> 
        </div>
        <div class="modal-item">
            <p> Surname </p>
            <input class="input" type="text" placeholder="Type client surname " name="surname"> 
        </div>
        <div class="modal-item">
            <p> Debit Balance </p>
            <input class="input" type="text" placeholder="Type client Debit Balance" name="curentBalance"> 
        </div>
        <div class="modal-item">
            <p> Activeted Date </p>
            <input class="input" type="text" placeholder="Type client balance Activeted Date " name="activetedDate"> 
        </div>
        <div class="modal-item">
            <p> Expired Date </p>
            <input class="input" type="text" placeholder="Type client balance Expired Date " name="expiredDate"> 
        </div>
        <div class="modal-item">
            <p> Own Balance </p>
            <input class="input" type="text" placeholder="Type client Balance " name="ownBalance"> 
        </div>
        <div class="modal-item">
            <p> Сredit Balance </p>
            <input class="input" type="text" placeholder="Type client Сredit Balance " name="creditBalance"> 
        </div>
        <div class="modal-item">
            <p> Сredit Limit </p>
            <input class="input" type="text" placeholder="Type client Сredit Limit " name="creditLimit"> 
        </div>
        <div class="modal-item">
            <p> Currency </p>
            <input class="input" type="text" placeholder="Type client Currency " name="currency"> 
        </div>
        <div class="modal-check">
            <p> Status (active) </p>
            <input class="check" type="checkbox" name="isActive"> 
        </div>
        `;

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'buttonContainer';
        this.modalWindow.append(buttonContainer);

        const confirmButton = document.createElement('div');
        confirmButton.className = 'confirmButton';
        buttonContainer.appendChild(confirmButton);

        const button = document.createElement('button');
        button.className = 'createNewClient';
        button.innerText = 'Confirm';
        confirmButton.appendChild(button);

        confirmButton.addEventListener('click', this.createNewClient.bind(this, index));

        const closeDiv = document.createElement('div');
        closeDiv.className = 'closeDiv';
        buttonContainer.appendChild(closeDiv);

        const buttonClose = document.createElement('button');
        buttonClose.className = 'closeButton';
        buttonClose.innerText = 'Close';
        closeDiv.appendChild(buttonClose);

        closeDiv.addEventListener('click', this.closeWindow.bind(this));
    }

    createWindow(data: IClients, index: any) {
        this.modalValue = false;
        this.modalDisplay(data, index);
    }

    modifyWindow(data: IClients, index: number) {
        this.modalValue = true;
        this.modalDisplay(data, index);
    }

    closeWindow() {
        this.modal.classList.remove('active');
    }

    createClient(event: any) {
        event.preventDefault();

        let newClient = new FormData(event.target.closest('form'));
        let regularExpName = /^[a-zA-Z]{4,18}$/;
        let regularExpBal = /^[\d]{1,12}$/;
        let regularDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

        this.data.unshift({
            name: String(newClient.get('name')) || 'Name',
            surname: String(newClient.get('surname')) || 'Surname',
            isActive: Boolean(newClient.get('isActive')) || false,
            debit: {
                curentBalance: Number(newClient.get('debitBalance')) || 0,
                currency: String(newClient.get('currency')) || 'UAH',
                active: Boolean(newClient.get('activeUser')) || false,
                activetedDate: String(newClient.get('activetedData')) || 'Activeted Date',
                expiredDate: String(newClient.get('expiredData')) || 'Expired Date',

            },
            credit: {
                ownBalance: {
                    ownBalance: Number(newClient.get('ownBalance')) || 0,
                    activetedDate: String(newClient.get('activetedDate')) || 'Activeted Date',
                    expiredDate: String(newClient.get('expiredDate')) || 'Expired Date',
                    currency: String(newClient.get('currency')) || 'UAH',
                    active: Boolean(newClient.get('activeUser')) || false,
                },
                creditBalance: {
                    creditBalance: Number(newClient.get('creditBalance')) || 0,
                    creditLimit: Number(newClient.get('creditLimit')) || 0,
                    currency: String(newClient.get('currency')) || 'UAH',
                    active: Boolean(newClient.get('activeUser')) || false,
                    activetedDate: String(newClient.get('activetedData')) || 'Activeted Data',
                    expiredDate: String(newClient.get('expiredData')) || 'Expired Data',

                },
            },
        });
        if (this.data[0].name.match(regularExpName) && Number(this.data[0].name) !== 0 &&
            this.data[0].surname.match(regularExpName) && Number(this.data[0].surname) !== 0 &&
            regularExpBal.test(String(this.data[0].credit.ownBalance.ownBalance)) && this.data[0].credit.ownBalance.ownBalance !== 0 &&
            this.data[0].credit.ownBalance.activetedDate.match(regularDate) && Number(this.data[0].credit.ownBalance.activetedDate) !== 0 &&
            this.data[0].credit.ownBalance.expiredDate.match(regularDate) && Number(this.data[0].credit.ownBalance.expiredDate) !== 0 &&
            regularExpBal.test(String(this.data[0].credit.creditBalance.creditBalance)) && this.data[0].credit.creditBalance.creditBalance !== 0 &&
            regularExpBal.test(String(this.data[0].credit.creditBalance.creditLimit)) && this.data[0].credit.creditBalance.creditLimit !== 0) {
            this.showClient();
        } else {
            alert('Typed incorrect value, or some of the fields are empty!');
            this.closeWindow();
        }
    }

    createNewClient(index: number, event: any) {
        this.information.innerHTML = ' ';
        if (this.modalValue === true) {
            this.modifyClient(event, index);
        } else if (this.modalValue === false) {
            this.createClient(event);
        }
        this.closeWindow();
        this.aboutBank();
    }

    deleteClient(index: number) {
        this.information.innerHTML = ' ';
        this.data.splice(index, 1);
        this.showClient();
        this.aboutBank();
    }

    modifyClient(event: any, index: number) {
        event.preventDefault();

        let workerModify = new FormData(event.target.closest('form'));
        let regularExpName = /^[a-zA-Z]{4,18}$/;
        let regularExpBal = /^[\d]{1,12}$/;
        let regularDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

        this.data[index].name = String(workerModify.get('name')) || this.data[index].name;
        this.data[index].surname = String(workerModify.get('surname')) || this.data[index].surname;
        this.data[index].credit.ownBalance.ownBalance = Number(workerModify.get('balance')) || this.data[index].credit.ownBalance.ownBalance;
        this.data[index].credit.ownBalance.activetedDate = String(workerModify.get('activetedDate')) || this.data[index].credit.ownBalance.activetedDate;
        this.data[index].credit.ownBalance.expiredDate = String(workerModify.get('expiredDate')) || this.data[index].credit.ownBalance.expiredDate;
        this.data[index].credit.creditBalance.creditBalance = Number(workerModify.get('creditBalance')) || this.data[index].credit.creditBalance.creditBalance;
        this.data[index].credit.creditBalance.creditLimit = Number(workerModify.get('creditLimit')) || this.data[index].credit.creditBalance.creditLimit;
        this.data[index].isActive = Boolean(workerModify.get('isActive')) || this.data[index].isActive;

        if (this.data[index].name.match(regularExpName) && Number(this.data[index].name) !== 0 &&
            this.data[index].surname.match(regularExpName) && Number(this.data[index].surname) !== 0 &&
            regularExpBal.test(String(this.data[index].credit.ownBalance.ownBalance)) && this.data[index].credit.ownBalance.ownBalance !== 0 &&
            this.data[index].credit.ownBalance.activetedDate.match(regularDate) && Number(this.data[index].credit.ownBalance.activetedDate) !== 0 &&
            this.data[index].credit.ownBalance.expiredDate.match(regularDate) && Number(this.data[index].credit.ownBalance.expiredDate) !== 0 &&
            regularExpBal.test(String(this.data[index].credit.creditBalance.creditBalance)) && this.data[index].credit.creditBalance.creditBalance !== 0 &&
            regularExpBal.test(String(this.data[index].credit.creditBalance.creditLimit)) && this.data[index].credit.creditBalance.creditLimit !== 0) {
            this.showClient();
        } else {
            alert('Typed incorrect value, or some of the fields are empty!');
            this.closeWindow();
        }
    }

}
const theBankView = new BankView(bankClients);