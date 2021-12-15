interface IWorkers {
    name: string;
    surname: string;
    department: number;
    position: string;
    salary: number;
    dismissed: boolean;
}


const workersArr: IWorkers[] = [{
    name: 'Ivan',
    surname: 'Petrov',
    department: 1,
    position: 'deputyhead',
    salary: 20000,
    dismissed: false,
},
{
    name: 'Vadim',
    surname: 'Zholud',
    department: 1,
    position: 'deputy director',
    salary: 18000,
    dismissed: false,
},
{
    name: 'Michail',
    surname: 'Polovnik',
    department: 1,
    position: 'seniorchef',
    salary: 15000,
    dismissed: false,
},
{
    name: 'Vasiliy',
    surname: 'Gordiy',
    department: 1,
    position: 'chef',
    salary: 13000,
    dismissed: false,
},
{
    name: 'Stepan',
    surname: 'Monobrov',
    department: 1,
    position: 'chef',
    salary: 13500,
    dismissed: true,
},
{
    name: 'Ignat',
    surname: 'Pobegushka',
    department: 1,
    position: 'waiter',
    salary: 9500,
    dismissed: false,
},
{
    name: 'Victor',
    surname: 'Sito',
    department: 1,
    position: 'seniorchef',
    salary: 16000,
    dismissed: false,
},
{
    name: 'Nikita',
    surname: 'Soteynikov',
    department: 1,
    position: 'seniorchef',
    salary: 16200,
    dismissed: false,
},
{
    name: 'Akakiy',
    surname: 'Kolovrat',
    department: 1,
    position: 'chef',
    salary: 12800,
    dismissed: true,
},
{
    name: 'Yan',
    surname: 'Riurik',
    department: 1,
    position: 'chef',
    salary: 13100,
    dismissed: false,
},
{
    name: 'Vladimir',
    surname: 'Kolokol',
    department: 2,
    position: 'deputyhead',
    salary: 19000,
    dismissed: true,
},
{
    name: 'Iliya',
    surname: 'Lopata',
    department: 2,
    position: 'deputy director',
    salary: 17000,
    dismissed: false,
},
{
    name: 'Victor',
    surname: 'Pavlik',
    department: 2,
    position: 'seniorchef',
    salary: 15000,
    dismissed: false,
},
{
    name: 'Evpatiy',
    surname: 'Yasnosolnishko',
    department: 2,
    position: 'chef',
    salary: 12900,
    dismissed: false,
},
{
    name: 'Agomen',
    surname: 'Mondrizgi',
    department: 2,
    position: 'chef',
    salary: 13300,
    dismissed: false,
},
{
    name: 'Armen',
    surname: 'Gigigiurishvili',
    department: 2,
    position: 'waiter',
    salary: 9000,
    dismissed: false,
},
{
    name: 'Shi-no',
    surname: 'Yiung',
    department: 2,
    position: 'seniorchef',
    salary: 16100,
    dismissed: false,
},
{
    name: 'Enrike',
    surname: 'Mondaless',
    department: 2,
    position: 'seniorchef',
    salary: 16200,
    dismissed: false,
},
{
    name: 'Evpatiy',
    surname: 'Yasnosolnishko',
    department: 2,
    position: 'chef',
    salary: 12900,
    dismissed: false,
},
{
    name: 'Klint',
    surname: 'Eastwood',
    department: 2,
    position: 'chef',
    salary: 14300,
    dismissed: false,
},
{
    name: 'Efim',
    surname: 'Shiza',
    department: 3,
    position: 'deputyhead',
    salary: 18500,
    dismissed: false,
},
{
    name: 'Svyatizar',
    surname: 'Molot',
    department: 3,
    position: 'deputy director',
    salary: 17500,
    dismissed: false,
},
{
    name: 'Alex',
    surname: 'Maslo',
    department: 3,
    position: 'seniorchef',
    salary: 15500,
    dismissed: false,
},
{
    name: 'victoria',
    surname: 'Vlasova',
    department: 3,
    position: 'chef',
    salary: 13000,
    dismissed: false,
},
{
    name: 'Tatyana',
    surname: 'Korzh',
    department: 3,
    position: 'chef',
    salary: 13000,
    dismissed: false,
},
{
    name: 'Gurgen',
    surname: 'Akapyan',
    department: 3,
    position: 'waiter',
    salary: 9100,
    dismissed: false,
},
{
    name: 'Papau',
    surname: 'Oueo',
    department: 3,
    position: 'seniorchef',
    salary: 16300,
    dismissed: false,
},
{
    name: 'Enrike',
    surname: 'Mondaless',
    department: 3,
    position: 'seniorchef',
    salary: 16200,
    dismissed: false,
},
{
    name: 'Ekaterina',
    surname: 'Orlova',
    department: 3,
    position: 'chef',
    salary: 13500,
    dismissed: false,
},
{
    name: 'Sergey',
    surname: 'Mozgovitiy',
    department: 3,
    position: 'chef',
    salary: 12800,
    dismissed: true,
},
{
    name: 'Ada',
    surname: 'Voroncova',
    department: 4,
    position: 'deputyhead',
    salary: 21000,
    dismissed: false,
},
{
    name: 'Slava',
    surname: 'Trudu',
    department: 4,
    position: 'deputy director',
    salary: 16900,
    dismissed: false,
},
{
    name: 'Victor',
    surname: 'Pavlik',
    department: 4,
    position: 'seniorchef',
    salary: 15300,
    dismissed: false,
},
{
    name: 'Ludmila',
    surname: 'Nazarova',
    department: 4,
    position: 'chef',
    salary: 13300,
    dismissed: false,
},
{
    name: 'Agafon',
    surname: 'Kunilakis',
    department: 4,
    position: 'chef',
    salary: 13700,
    dismissed: false,
},
{
    name: 'Tumbau',
    surname: 'Gogonoleole',
    department: 4,
    position: 'waiter',
    salary: 9600,
    dismissed: false,
},
{
    name: 'Shi-no',
    surname: 'Yiung',
    department: 4,
    position: 'seniorchef',
    salary: 16400,
    dismissed: false,
},
{
    name: 'Enrike',
    surname: 'Mondaless',
    department: 4,
    position: 'seniorchef',
    salary: 16800,
    dismissed: false,
},
{
    name: 'Egor',
    surname: 'Zatoka',
    department: 4,
    position: 'chef',
    salary: 12400,
    dismissed: true,
},
{
    name: 'Bogdan',
    surname: 'Salo',
    department: 4,
    position: 'chef',
    salary: 13200,
    dismissed: false,
},
];

interface IDepartment {
    id: number,
    name: string;
}


const department: IDepartment[] = [
    {
        id: 1,
        name: 'Texas Rangers',
    },

    {
        id: 2,
        name: 'Gore Konditery',
    },

    {
        id: 3,
        name: 'Myasnoy Otdel',
    },

    {
        id: 4,
        name: 'Molekulyarka',
    },
];

interface IPosition {
    id: number,
    name: string;
}

const position: IPosition[] = [
    {
        id: 1,
        name: 'deputyhead',
    },

    {
        id: 2,
        name: 'deputy director',
    },

    {
        id: 3,
        name: 'seniorchef',
    },

    {
        id: 4,
        name: 'chef',
    },

    {
        id: 5,
        name: 'waiter',
    },
];

class Restoraunt {
    data;
    constructor(data: IWorkers[]) {
        this.data = data;
    }

    countWholeSalaryDepartment(dismissed: boolean): number[] {
        let wholeSalary: number[] = [];
        this.data.forEach((value) => {
            wholeSalary[value.department] = wholeSalary[value.department] || 0;

            if (value.dismissed === dismissed) {
                wholeSalary[value.department] += value.salary;
            }
        });
        wholeSalary.shift();
        return wholeSalary;
    };

    dismissedWorkers(dismissed: boolean): number[] {
        let department: number[] = [];
        this.data.forEach((value) => {
            department[value.department] = department[value.department] || 0;

            if (value.dismissed === dismissed) {
                ++department[value.department];
            };
        });
        department.shift();
        return department;
    };

    middleDepartmentSalary(dismissed: boolean): number[] {
        let activeWorkers = rest.dismissedWorkers(dismissed);
        let wholeSalary = rest.countWholeSalaryDepartment(dismissed);
        let middleSalary: number[] = [];
        for (let i in activeWorkers) {
            middleSalary[i] = Math.round(wholeSalary[i] / activeWorkers[i]);
        }
        return middleSalary;
    };

    minDepartmentSalary(dismissed: boolean) {
        let minDepSalary: Record<string, number> = {};
        let min: boolean | number = false;
        for (let j = 0; j < department.length; j++) {
            min = 0;
            for (let i = 0; i < workersArr.length; i++) {
                if (workersArr[i].dismissed === dismissed && (min > workersArr[i].salary || min === 0) && workersArr[i].department == department[j].id) {
                    min = workersArr[i].salary;
                }
            }
            minDepSalary[department[j].name] = min;
        }
        return minDepSalary;
    }

    maxDepartmentSalary(dismissed: boolean) {
        let maxDepSalary: Record<string, number> = {};
        let max: boolean | number = false;
        for (let j = 0; j < department.length; j++) {
            max = 0;
            for (let i = 0; i < workersArr.length; i++) {
                if (workersArr[i].dismissed === dismissed && (max < workersArr[i].salary || max === 0) && workersArr[i].department == department[j].id) {
                    max = workersArr[i].salary;
                }
            }
            maxDepSalary[department[j].name] = max;
        }
        return maxDepSalary;
    }

    minPositionSalary(dismissed: boolean) {
        let minPosSalary: Record<string, number> = {};
        let min: boolean | number = false;
        for (let j = 0; j < position.length; j++) {
            min = 0;
            for (let i = 0; i < workersArr.length; i++) {
                if (workersArr[i].dismissed === dismissed && (min > workersArr[i].salary || min === 0) && workersArr[i].position == position[j].name) {
                    min = workersArr[i].salary;
                }
            }
            minPosSalary[position[j].name] = min;
        }
        return minPosSalary;
    }

    maxPositionSalary(dismissed: boolean) {
        let maxPosSalary: Record<string, number> = {};
        let max: boolean | number = false;
        for (let j = 0; j < position.length; j++) {
            max = 0;
            for (let i = 0; i < workersArr.length; i++) {
                if (workersArr[i].dismissed === dismissed && (max < workersArr[i].salary || max === 0) && workersArr[i].position == position[j].name) {
                    max = workersArr[i].salary;
                }
            }
            maxPosSalary[position[j].name] = max;
        }
        return maxPosSalary;
    }

    showDepartmentWithoutPosition(position: string) {
        let departmentWithoutPosition = [];
        label:
        for (let j = 0; j < department.length; j++) {
            for (let i = 0; i < workersArr.length; i++) {
                if (workersArr[i].dismissed === false && workersArr[i].position == position && workersArr[i].department == department[j].id) {
                    continue label;
                }
            }
            departmentWithoutPosition.push(department[j].name);
        }
        return departmentWithoutPosition;
    };
};



const rest = new Restoraunt(workersArr);