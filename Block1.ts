
// let firstString = "mouse";
// let secondString = "eousm";

// function reqAnagramm(firstString: string, secondString: string, index: number, pos: number, counter: number, arr: string[]): boolean{
//     index = index || 0;
//     pos = pos || 0;
//     counter = counter || 0;
//     arr = arr || [];
//     let newStr1 = firstString.split('');
//     let newStr2 = secondString.split('');
//     if (index < newStr1.length) {
//         if (newStr2.includes(newStr1[index])) {
//             arr.push(newStr1[index]);
//         }
//         else {
//             return false;
//         }
//         reqAnagramm(firstString, secondString, ++index, pos, counter, arr);
//     }
//     return arr.length === newStr1.length;

// let someNumber = 3243166532;

// interface obj {
//     [temp: string]: number;
// }
// function reqoursionCountNum(someNumber: number, index: number, obj2: obj, counter: number, temp: number) : obj{
// debugger;
// index = index || 1;
// counter = counter || 1;
// obj2 = obj2 || {};

// temp = Math.floor((someNumber / counter) % 10);
// someNumber = Math.floor(someNumber / 10);
// if (someNumber) {
//     if (obj2.hasOwnProperty(temp)) {
//         obj2[temp] + 1;
//         reqoursionCountNum(someNumber, index, obj2, counter, temp);
//     } else {
//         obj2[temp] = 1;
//         reqoursionCountNum(someNumber, index, obj2, counter, temp);
//     }
// } else {
//     if (obj2.hasOwnProperty(temp)) {
//         obj2[temp] + 1;
//     } else {
//         obj2[temp] = 1;
//     }
// }
// return obj2;
// }

// let newStr = 'This is string that has has no repeats repeats';

// interface obj{
//     [newString: string]: number,
// }
// function reqoursionUniqueWords(newStr: string, index: number, obj2: obj): number {
//     index = index || 0;
//     obj2 = obj2 || {};
//     let newString = newStr.replace(/\-/g, '').split(' ');
//     if (newString.length > index) {
//         obj2[newString[index]] = ++obj2[newString[index]] || 1;
//         return reqoursionUniqueWords(newStr, ++index, obj2);
//     }
//     let arr = Object.values(obj2);
//     let counter = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 1) {
//             counter += 1;
//         }
//     }
//     return counter;
// }

// interface memo {
//     [prop: string]: number[],
// }
// function memoFibonacci(): Function {
//     let memo2: memo = {};
//     const reqFib = function reqFibonacci(number: number): number[] {
//         number = number || 0;
//         let fibArr = [0, 1];
//         if (number < 1) {
//             return [];
//         } else if (number === 1) {
//             return [0];
//         } else if (number === 2) {
//             return fibArr;
//         }
//         fibArr = memo2[number] || fibArr;
//         if (memo2[number] === undefined) {
//             if (number >= 3) {
//                 fibArr = reqFibonacci(--number);
//                 console.log(fibArr);
//                 fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
//                 memo2[++number] = fibArr.concat();
//             }
//         } else {
//             console.log("fetching from cache");
//             return memo2[number];
//         }
//         return fibArr;
//     }
//     return reqFib;
// }

// let str = 'this string has no repeats no repeats and is unique string';

// interface obj{
//     [prop: string]: number,
// }
// function reqoursionCountWords(str: string, index: number, obj2: obj): object {
//     index = index || 0;
//     obj2 = obj2 || {};
//     let newString = str.replace(/\-/g, '').split(' ');
//     if (newString.length > index) {
//         obj2[newString[index]] = ++obj2[newString[index]] || 1;
//         return reqoursionCountWords(str, ++index, obj2);
//     }
//     return obj2;
// }

// interface memo {
//     [prop: string]: number,
// }
// function memoFactorial(): Function {
//     let memo2: memo = {};
//     const memoFac = function memoizedFactorial(number: number): number {
//         if (number === 0) {
//             return 1;
//         } else if (memo2[number]) {
//             console.log("from cache");
//             return memo2[number];
//         }
//         return memo2[number] = number * memoizedFactorial(number - 1);
//     }
//     return memoFac;
// }

// class Rectangle {
//     height;
//     width;
//     constructor(height: number, width: number) {
//         this.height = height;
//         this.width = width;
//     }
//     square() {
//         return this.width * this.height;
//     }
//     perimeter() {
//         return (this.width * 2) + (this.height * 2);
//     }
// }
// class Triangle {
//     a;
//     b;
//     c;
//     constructor(a: number, b: number, c: number) {
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     square() {
//         return 1 / 2 * this.a * this.b * Math.sin((this.c * Math.PI) / 180);
//     }
//     perimeter() {
//         return this.a + this.b + this.c;
//     }
// }
// class Circle {
//     radius;
//     constructor(radius: number) {
//         this.radius = radius;
//     }
//     square() {
//         return Math.PI * Math.pow(this.radius, 2);
//     }
//     perimeter() {
//         return Math.PI * 2 * this.radius;
//     }
// }


// let arr = [2, -3, 3, 1, 5, 0, 4, 8, 9, -9, -7, -5, 6, 12, 14, 2, 7];

// function recoursionCountMultiplesTwo(arr: number[], index: number, multiples: number): number {
//     multiples = multiples || 0;
//     index = index || 0;

//     if (arr[index] % 2 === 0) {
//         multiples += arr[index];
//     }

//     if (++index < arr.length) {
//         return recoursionCountMultiplesTwo(arr, index, multiples);
//     }

//     return multiples;
// }

// function recoursionCountMultiplesThree(arr: number[], index: number, multiples: number): number {
//     multiples = multiples || 0;
//     index = index || 0;

//     if (arr[index] % 3 === 0) {
//         multiples += arr[index];
//     }

//     if (++index < arr.length) {
//         return recoursionCountMultiplesThree(arr, index, multiples);
//     }

//     return multiples;
// }

// function recoursionCountNotOvenAndPos(arr: number[], index: number, multiples: number): number {
//     multiples = multiples || 0;
//     index = index || 0;

//     if (arr[index] % 2 != 0 && arr[index] > 0) {
//         multiples += arr[index];
//     }

//     if (++index < arr.length) {
//         return recoursionCountNotOvenAndPos(arr, index, multiples);
//     }

//     return multiples;
// }

// function recoursionCountZero(arr: number[], index: number, counter: number): number {
//     counter = counter || 0;
//     index = index || 0;

//     if (arr[index] === 0) {
//         counter++;
//     }

//     if (++index < arr.length) {
//         return recoursionCountZero(arr, index, counter);
//     }

//     return counter;
// }

// function recoursionCountPos(arr: number[], index: number, counter: number): number {
//     counter = counter || 0;
//     index = index || 0;

//     if (arr[index] >= 0) {
//         counter++;
//     }

//     if (++index < arr.length) {
//         return recoursionCountPos(arr, index, counter);
//     }

//     return counter;
// }

// function recoursionCountNeg(arr: number[], index: number, counter: number): number {
//     counter = counter || 0;
//     index = index || 0;

//     if (arr[index] < 0) {
//         counter++;
//     }

//     if (++index < arr.length) {
//         return recoursionCountNeg(arr, index, counter);
//     }

//     return counter;
// }

// function recoursionCountNaturals(arr: number[], index: number, counter: number): number {
//     counter = counter || 0;
//     index = index || 0;

//     if (arr[index] / arr[index] == 1 && (Math.sqrt(arr[index]) * Math.sqrt(arr[index])) != arr[index] && arr[index] > 0 && arr[index] % 2 != 0 || arr[index] === 2) {
//         counter++;
//     }

//     if (++index < arr.length) {
//         return recoursionCountNaturals(arr, index, counter);
//     }

//     return counter;
// }

// let num = 124;

// function reqoursionSecondarySystem(num: number, str: string, timed: number, temp: number, arr: number[], isFlag: boolean): string {
//     arr = arr || [];
//     timed = timed || 0;
//     temp = temp || 0;
//     str = str || '';
//     isFlag = isFlag || false;
//     if (num >= 1) {
//         timed = num;
//         num = num / 2;
//         temp = num;
//         num = Math.floor(num);
//         temp = Math.floor(temp);
//         temp *= 2;
//         timed -= temp;
//         arr.push(timed);
//         temp = 0;
//         timed = 0;
//         reqoursionSecondarySystem(num, str, timed, temp, arr, true);
//     }
//     if (isFlag === false) {
//         arr.reverse();
//         str = arr.join("");
//     }
//     return str;
// }

// let str = '1111100';

// function reqoursionDecimalSystem(str: string, index: number, counter: number, summ: number, arr: number[], newStr: number): number{
//     counter = counter || 1;
//     summ = summ || 0;
//     arr = arr || [];
//     newStr = parseInt(str);
//     while (newStr > 0) {
//         arr.push(newStr % 10);
//         newStr = Math.floor(newStr / 10);
//     }
//     arr.reverse();

//     if (index === 0) {
//         arr[index] *= counter;
//         summ += arr[index];
//         return summ;
//     }
//     index = index || (arr.length - 1);
//     if (index >= 0) {
//         arr[index] *= counter;
//         summ += arr[index];
//         counter *= 2;
//         return reqoursionDecimalSystem(str, --index, counter, summ, arr, newStr);
//     }
//     return summ;
// }

// let multipleArr = [[1, 2, 6, 4, 0, -7], [9, 2, 0, 8, 5, -1, 3, 4], [2, 0, 3, -6], [-1, 1, 4, 7, -9, 0, 5],];

// function countTwo(multipleArr: number[][]): number {
//     let counter = 0;
//     for (let i = 0; i < multipleArr.length; i++) {
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             if (multipleArr[i][j] % 2 == 0) {
//                 counter += multipleArr[i][j];
//             }
//         }
//     }
//     return counter;
// }

// function countcthree(multipleArr: number[][]): number {
//     let counter = 0;
//     for (let i = 0; i < multipleArr.length; i++) {
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             if (multipleArr[i][j] % 3 == 0) {
//                 counter += multipleArr[i][j];
//             }
//         }
//     }
//     return counter;
// }

// function countNotOvenAndPos(multipleArr: number[][]): number {
//     let counter = 0;
//     for (let i = 0; i < multipleArr.length; i++) {
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             if (multipleArr[i][j] % 2 != 0 && multipleArr[i][j] > 0) {
//                 counter += multipleArr[i][j];
//             }
//         }
//     }
//     return counter;
// }

// function countZero(multipleArr: number[][]): number {
//     let counter = 0;
//     for (let i = 0; i < multipleArr.length; i++) {
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             if (multipleArr[i][j] === 0) {
//                 counter++;
//             }
//         }
//     }
//     return counter;
// }

// function countPos(multipleArr: number[][]): number {
//     let counter = 0;
//     for (let i = 0; i < multipleArr.length; i++) {
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             if (multipleArr[i][j] >= 0) {
//                 counter++;
//             }
//         }
//     }
//     return counter;
// }

// function countNeg(multipleArr: number[][]): number {
//     let counter = 0;
//     for (let i = 0; i < multipleArr.length; i++) {
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             if (multipleArr[i][j] < 0) {
//                 counter++;
//             }
//         }
//     }
//     return counter;
// }

// function countSimple(multipleArr: number[][]): number {
//     let counter = 0;
//     let contrArr = [];
//     for (let i = 0; i < multipleArr.length; i++) {
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             if (multipleArr[i][j] / multipleArr[i][j] == 1 && (Math.sqrt(multipleArr[i][j]) * Math.sqrt(multipleArr[i][j])) != multipleArr[i][j] && multipleArr[i][j] > 0 && multipleArr[i][j] % 2 != 0 || multipleArr[i][j] === 2) {
//                 counter++;
//                 contrArr.push(multipleArr[i][j]);
//             }
//         }
//     }
//     return counter;
// }

// function reqoursionSummOfRange(min: number, max: number, summ: number): number {
//     summ = summ || 0;
//     if (min <= max) {
//         summ += min;
//         return reqoursionSummOfRange(++min, max, summ);
//     }
//     return summ;
// }

// function reqoursionSummOfRangeCThree(min: number, max: number, summ: number): number {
//     summ = summ || 0;
//     if (min <= max) {
//         if (min % 3 == 0) {
//             summ += min;
//             return reqoursionSummOfRangeCThree(++min, max, summ);
//         }
//         return reqoursionSummOfRangeCThree(++min, max, summ);
//     }
//     return summ;
// }

// function reqoursionSummOfRangeBiggerThanZ(min: number, max: number, summ: number): number {
//     summ = summ || 0;
//     if (min <= max) {
//         if (min > 0) {
//             summ += min;
//             return reqoursionSummOfRangeBiggerThanZ(++min, max, summ);
//         }
//         return reqoursionSummOfRangeBiggerThanZ(++min, max, summ);
//     }
//     return summ;
// }

// let matrix = [
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
// ];

// function transponationRecoursion(matrix: number[][], index: number, pos: number, arr: number[][]): number[][] {
//     index = index || 0;
//     pos = pos || 0;
//     arr = arr || [];
//     if (index < matrix.length) {
//         if (pos < matrix[index].length) {
//             if (Array.isArray(arr[pos])) {
//                 arr[pos][index] = matrix[index][pos];
//             }
//             else {
//                 arr[pos] = [matrix[index][pos]];
//             }
//             transponationRecoursion(matrix, index, ++pos, arr);
//         }
//         else {
//             pos = 0;
//             transponationRecoursion(matrix, ++index, pos, arr);
//         }
//     }
//     return arr;
// }

// let matrix1 = [
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
// ];

// let matrix2 = [
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
// ];

// function reqoursionSummMatrix(matrix1: number[][], matrix2: number[][], index: number, pos: number, arr: number[][]): number[][] {
//     index = index || 0;
//     pos = pos || 0;
//     arr = arr || [];
//     if (index < matrix1.length) {
//         if (pos < matrix1[index].length) {
//             if (Array.isArray(arr[index])) {
//                 arr[index][pos] = matrix1[index][pos] + matrix2[index][pos];
//             } else {
//                 arr[index] = [];
//                 arr[index][pos] = matrix1[index][pos] + matrix2[index][pos];
//             }
//             reqoursionSummMatrix(matrix1, matrix2, index, ++pos, arr);
//         } else {
//             pos = 0;
//             reqoursionSummMatrix(matrix1, matrix2, ++index, pos, arr);
//         }
//     }
//     return arr;
// }


// function matrixDeleteRow(matrix: number[][]) {
//     for ( let i = 0; i < matrix.length; i++ ) {
//         for ( let j = 0; j < matrix[i].length; j++ ) {
//             if (matrix[i][j] == 0) {
//                 matrix.splice(i, 1);
//                 break;
//             }
//         }
//     }
//     return matrix;
// }

// function reqursMatrixDeleteCol(matrix: number[][]) {
//     let colDelete = (j: number) => {
//         for ( let i = 0; i < matrix.length; i++ ) {
//             matrix[i].splice(j, 1);
//         }
//     }

//     for ( let i = 0; i < matrix.length; i++ ) {
//         for ( let j = 0; j < matrix[i].length; j++ ) {
//             if (matrix[i][j] == 0) {
//                 colDelete(j);
//                 break;
//             }
//         }
//     }

//     return matrix;
// }
