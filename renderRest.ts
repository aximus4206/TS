class RestView {
    data: IWorkers[];
    modalValue: boolean | null;
    buttonWindowOpen: HTMLElement;
    modal: HTMLElement;
    modalWindow: HTMLElement;
    information: HTMLElement;
    leftCol: HTMLElement;
    rightCol: HTMLElement;
    cardItem: HTMLElement;
    constructor(data: IWorkers[]) {
        this.data = data;
        this.information = document.querySelector('.information') as HTMLElement;
        this.leftCol = document.querySelector('.left-col') as HTMLElement;
        this.rightCol = document.querySelector('.right-col') as HTMLElement;
        this.cardItem = document.querySelector('.cards__item') as HTMLElement;
        this.buttonWindowOpen = document.querySelector('.createButton') as HTMLElement;
        this.modal = document.querySelector('.modal') as HTMLElement;
        this.modalWindow = document.querySelector('.modal__window') as HTMLElement;
        this.modalValue = null;
        this.aboutRestoraunt();
        this.showWorker();
    }

    aboutRestoraunt() {
        let departmentsSalary = rest.countWholeSalaryDepartment(false);
        let middleDepartmentsSalary = rest.middleDepartmentSalary(false);
        let minDepartmentsSalary = rest.minDepartmentSalary(false);
        let maxDepartmentsSalary = rest.maxDepartmentSalary(false);
        let minPositionsSalary = rest.minPositionSalary(false);
        let maxPositionsSalary = rest.maxPositionSalary(false);
        let withoutDeputy = rest.showDepartmentWithoutPosition('deputyhead');
        let areDismissed = rest.dismissedWorkers(true);

        const departmentsSalaryInfo = document.createElement('div');
        departmentsSalaryInfo.className = 'departmentsSalary';

        const departmentSalaryHeader = document.createElement('h3');
        departmentSalaryHeader.innerHTML = '<h3>Total salary of department:</h3>';

        const middleDepartmentsSalaryInfo = document.createElement('div');
        middleDepartmentsSalaryInfo.className = 'departmentsMiddleSalary';

        const middleDepartmentsSalaryHeader = document.createElement('h3');
        middleDepartmentsSalaryHeader.innerHTML = '<h3>Middle salary of department:</h3>';

        const minDepartmentsSalaryInfo = document.createElement('div');
        minDepartmentsSalaryInfo.className = 'departmentsMinSalary';

        const minDepartmentsSalaryHeader = document.createElement('h3');
        minDepartmentsSalaryHeader.innerHTML = '<h3>Smallest salary of department:</h3>';

        const maxDepartmentsSalaryInfo = document.createElement('div');
        maxDepartmentsSalaryInfo.className = 'departmentsMaxSalary';

        const maxDepartmentsSalaryHeader = document.createElement('h3');
        maxDepartmentsSalaryHeader.innerHTML = '<h3>Highest salary of department:</h3>';

        const minPositionsSalaryInfo = document.createElement('div');
        minPositionsSalaryInfo.className = 'positionsMinSalary';

        const minPositionsSalaryHeader = document.createElement('h3');
        minPositionsSalaryHeader.innerHTML = '<h3>Smallest salary of each position:</h3>';

        const maxPositionsSalaryInfo = document.createElement('div');
        maxPositionsSalaryInfo.className = 'positionsMaxSalary';

        const maxPositionsSalaryHeader = document.createElement('h3');
        maxPositionsSalaryHeader.innerHTML = '<h3>Highest salary of each position:</h3>';

        const departmentsWithoutDeputyInfo = document.createElement('div');
        departmentsWithoutDeputyInfo.className = 'departmentWithoutDeputy';

        const departmentsWithoutDeputyHeader = document.createElement('h3');
        departmentsWithoutDeputyHeader.innerHTML = '<h3>Department without deputy:</h3>';

        const dismissedAmountInfo = document.createElement('div');
        dismissedAmountInfo.className = 'dismissedAmount';

        const dismissedAmountHeader = document.createElement('h3');
        dismissedAmountHeader.innerHTML = '<h3>Dismissed in department:</h3>';

        for (let value in departmentsSalary) {
            let result: any = value;
            departmentsSalaryInfo.innerHTML += `<p class="info"> ${department[result].id} department: ${departmentsSalary[value]} $</p>`;
        }

        for (let value in middleDepartmentsSalary) {
            let result: any = value;
            middleDepartmentsSalaryInfo.innerHTML += `<p class="info"> ${department[result].id} department: ${middleDepartmentsSalary[value]} $</p>`;
        }

        for (let value in minDepartmentsSalary) {
            minDepartmentsSalaryInfo.innerHTML += `<p class="info"> ${value}: ${minDepartmentsSalary[value]} $</p>`;
        }

        for (let value in maxDepartmentsSalary) {
            maxDepartmentsSalaryInfo.innerHTML += `<p class="info"> ${value}: ${maxDepartmentsSalary[value]} $</p>`;
        }

        for (let value in minPositionsSalary) {
            minPositionsSalaryInfo.innerHTML += `<p class="info"> ${value}: ${minPositionsSalary[value]} $</p>`;
        }

        for (let value in maxPositionsSalary) {
            maxPositionsSalaryInfo.innerHTML += `<p class="info"> ${value}: ${maxPositionsSalary[value]} $</p>`;
        }

        for (let value in withoutDeputy) {
            departmentsWithoutDeputyInfo.innerHTML += `<p class="info"> ${withoutDeputy[value]} </p>`;
        }

        for (let value in areDismissed) {
            let result: any = value;
            dismissedAmountInfo.innerHTML += `<p class="info"> ${department[result].id} department: ${areDismissed[value]} worker(s)</p>`;
        }

        this.leftCol.append(departmentSalaryHeader);
        this.leftCol.append(departmentsSalaryInfo);
        this.leftCol.append(middleDepartmentsSalaryHeader);
        this.leftCol.append(middleDepartmentsSalaryInfo);
        this.leftCol.append(minDepartmentsSalaryHeader);
        this.leftCol.append(minDepartmentsSalaryInfo);
        this.leftCol.append(maxDepartmentsSalaryHeader);
        this.leftCol.append(maxDepartmentsSalaryInfo);
        this.rightCol.append(minPositionsSalaryHeader);
        this.rightCol.append(minPositionsSalaryInfo);
        this.rightCol.append(maxPositionsSalaryHeader);
        this.rightCol.append(maxPositionsSalaryInfo);
        this.rightCol.append(departmentsWithoutDeputyHeader);
        this.rightCol.append(departmentsWithoutDeputyInfo);
        this.rightCol.append(dismissedAmountHeader);
        this.rightCol.append(dismissedAmountInfo);
    }

    showWorker() {
        this.cardItem.innerHTML = ' ';
        const cards = this.data.map((data, index) => this.showWorkers(data, index));
        this.cardItem.append(...cards);
    }

    showWorkers(data: IWorkers, index: number) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <h3 class="fullname">fullname: <span class="fullname-user">${data.name} ${data.surname}</span></h3>
        <div class="card-container">
        <p class="personal-info">department: ${data.department}</p>
        <p class="personal-info">position: ${data.position}</p>
        </div>
        <div class="card-container">
        <p class="personal-info">salary: ${data.salary}$</p>
        <p class="personal-info">dismissed: ${data.dismissed ? 'dismissed' : 'active'}</p>
        </div>
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
        deleteButton.addEventListener('click', this.deleteWorker.bind(this, index));

        return card;
    }

    modalDisplay(data: IWorkers, index: number) {
        this.modal.classList.add('active');
        this.modalWindow.innerHTML = `
        <h2>Operate window</h2>
        <div class="modal-item">
            <p> Name </p>
            <input class="modal-name field" type="text" placeholder="Type worker name" name="name"> 
        </div>
        <div class="modal-item">
            <p> Surname </p>
            <input class="modal-surname field" type="text" placeholder="Type worker surname" name="surname"> 
        </div>
        <div class="modal-item">
            <p> Department </p>
            <input class="modal-dep field" type="text" placeholder="Type worker department" name="department"> 
        </div>
        <div class="modal-item">
            <p> Position </p>
            <input class="modal-pos field" type="text" placeholder="Type worker position" name="position"> 
        </div>
        <div class="modal-item">
            <p> Salary </p>
            <input class="modal-salary field" type="text" placeholder="Type worker salary" name="salary"> 
        </div>
        <div class="modal-check">
            <p> Dismissed </p>
            <input class="choose" type="checkbox" placeholder="Choose dismissed or active" name="dismissed"> 
        </div>
        `;

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'buttonContainer';
        this.modalWindow.append(buttonContainer);

        const confirmButton = document.createElement('div');
        confirmButton.className = 'confirmButton';
        buttonContainer.appendChild(confirmButton);

        const button = document.createElement('button');
        button.className = 'createNewWorker';
        button.innerText = 'Confirm';
        confirmButton.appendChild(button);

        const closeDiv = document.createElement('div');
        closeDiv.className = 'closeDiv';
        buttonContainer.appendChild(closeDiv);

        const buttonClose = document.createElement('button');
        buttonClose.className = 'closeButton';
        buttonClose.innerText = 'Close';
        closeDiv.appendChild(buttonClose);

        closeDiv.addEventListener('click', this.closeWindow.bind(this));
        confirmButton.addEventListener('click', this.createNewWorker.bind(this, index));
    }

    createWindow(data: IWorkers, index: any) {
        this.modalValue = false;
        this.modalDisplay(data, index);
    }

    closeWindow() {
        this.modal.classList.remove('active');
    }

    modifyWindow(data: IWorkers, index: number) {
        this.modalValue = true;
        this.modalDisplay(data, index);
    }

    createWorker(event: any) {
        event.preventDefault();

        let newWorker = new FormData(event.target.closest('form'));
        let regularExpName = /^[a-zA-Z]{4,18}$/;
        let regularExpDep = /^[\d]{1}$/;
        let regularExpSal = /^[\d]{1,9}$/;

        this.data.unshift({
            name: String(newWorker.get('name')) || 'Name',
            surname: String(newWorker.get('surname')) || 'Surname',
            department: Number(newWorker.get('department')) || 0,
            position: String(newWorker.get('position')) || 'Position',
            salary: Number(newWorker.get('salary')) || 0,
            dismissed: Boolean(newWorker.get('dismissed')) || false,
        });
        if (this.data[0].name.match(regularExpName) &&
            Number(this.data[0].name) !== 0 && this.data[0].surname.match(regularExpName) &&
            Number(this.data[0].surname) !== 0 && regularExpDep.test(String(this.data[0].department)) &&
            this.data[0].department !== 0 &&
            this.data[0].position.match(regularExpName) && Number(this.data[0].position) !== 0 &&
            regularExpSal.test(String(this.data[0].salary)) && this.data[0].salary !== 0) {
            this.showWorker();
        } else {
            alert('Typed incorrect value, or some of the fields are empty!');
            this.closeWindow();
        }
    }

    createNewWorker(index: number, event: any) {
        this.leftCol.innerHTML = ' ';
        this.rightCol.innerHTML = ' ';
        if (this.modalValue === true) {
            this.modifyWorker(event, index);
        } else if (this.modalValue === false) {
            this.createWorker(event);
        }
        this.closeWindow();
        this.aboutRestoraunt();
    }

    deleteWorker(index: number) {
        this.leftCol.innerHTML = ' ';
        this.rightCol.innerHTML = ' ';
        this.data.splice(index, 1);
        this.showWorker();
        this.aboutRestoraunt();
    }

    modifyWorker(event: any, index: number) {
        event.preventDefault();

        let workerModify = new FormData(event.target.closest('form'));
        let regularExpName = /^[a-zA-Z]{4,18}$/;
        let regularExpDep = /^[\d]{1}$/;
        let regularExpSal = /^[\d]{1,9}$/;

        this.data[index].name = String(workerModify.get('name')) || this.data[index].name;
        this.data[index].surname = String(workerModify.get('surname')) || this.data[index].surname;
        this.data[index].department = Number(workerModify.get('department')) || this.data[index].department;
        this.data[index].position = String(workerModify.get('position')) || this.data[index].position;
        this.data[index].salary = Number(workerModify.get('salary')) || this.data[index].salary;
        this.data[index].dismissed = Boolean(workerModify.get('dismissed')) || this.data[index].dismissed;

        if (this.data[index].name.match(regularExpName) && Number(this.data[index].name) !== 0 &&
            this.data[index].surname.match(regularExpName) && Number(this.data[index].surname) !== 0 &&
            regularExpDep.test(String(this.data[index].department)) && this.data[index].department !== 0 &&
            this.data[index].position.match(regularExpName) && Number(this.data[index].position) !== 0 &&
            regularExpSal.test(String(this.data[index].salary)) && this.data[index].salary !== 0) {
            this.showWorker();
        } else {
            alert('Typed incorrect value, or some of the fields are empty!');
            this.closeWindow();
        }
    }
}
const restorauntView = new RestView(workersArr);