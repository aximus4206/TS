
// Object.defineProperty(Object.prototype, 'myOwnBind', {
//     value: function (objContext: Record<number | string | symbol, Function>, ...restArgs: number[] | string[]) {
//         let object = {
//             ...objContext,
//         };
//         let uniqueProperty: symbol = Symbol();
//         object[uniqueProperty] = this;

//         return function (...args: number[]) {
//             let result = object[uniqueProperty](...restArgs, ...args);
//             delete object[uniqueProperty];
//             return result;
//         };
//     }
// });

// Object.defineProperty(Object.prototype, 'myOwnCall', {
//     value: function (objContext: Record<number | string | symbol, Function>, ...restArgs: number[] | string[]) {
//         let uniqueProperty = Symbol();
//         objContext[uniqueProperty] = this;
//         let result = objContext[uniqueProperty](...restArgs);
//         delete objContext[uniqueProperty];
//         return result;
//     }
// });

// Object.defineProperty(Array.prototype, 'myOwnPush', {
//     value: function (...args: number[] | string[]) {
//        for (let i = 0; i < args.length; i++) {
//           this[this.length] = args[i];
//        }
//        return this;
//     }
// });

// Object.defineProperty(Array.prototype, 'myOwnMap', {
//     value: function (funClbck: Function) {
//         let arr = [];

//         for ( let i = 0; i < this.length; i++ ) {
//             arr.push(funClbck(this[i], i, this));
//         }

//         return arr;
//     }
// });

// Object.defineProperty(Array.prototype, 'myOwnForEach', {
//     value: function (funClbck: Function, index: number) {
//         index = index || 0;

//         if (index < this.length) {
//             funClbck(this[index], this);
//             this.myOwnForEach(funClbck, ++index);
//         };
//     }
// });

// Object.defineProperty(Array.prototype, 'myOwnFilter', {
//     value: function (funClbck: Function) {
//         const arr = [];

//         for ( let i = 0; i < this.length; i++ ) {
//             if (funClbck(this[i])) {
//                 arr.push(this[i]);
//             }
//         }

//         return arr;
//     }
// });

// Object.defineProperty(Array.prototype, 'myOwnReduce', {
//     value: function (funClbck: Function, result: number) {
//         let index = 0;
//         if (result == undefined) {
//             index = 1;
//             result = this[0];
//         }
//         for ( let i = index; i < this.length; i++ ) {
//             result = funClbck(result, this[i], i, this);
//         }
//         return result;
//     }
// });

// let fibIterator = {
//     firstNum: 0,
//     secondNum: 1,
//     countNums: 10,
//     [Symbol.iterator]() {
//         let currentNum = this.firstNum;
//         let nextNum = this.secondNum;
//         let countNums = this.countNums;
//         let arr = [currentNum, nextNum];
//         return {
//             next() {
//                 arr.push(arr[currentNum] + arr[nextNum++])
//                 currentNum++;
//                 if (arr.length <= countNums && currentNum < countNums) {
//                   return { done: false, value: arr }
//                 } else {
//                   return { done: true, value: undefined };
//                 }
//             }
//         };
//     }
// };
// let fibIter = fibIterator[Symbol.iterator]();

// function* fibGenerator(countNums: number, firstNum: number, secondNum: number): Generator {
//     firstNum = firstNum || 0;
//     secondNum = secondNum || 1;

//     if (countNums == 0) {
//         return firstNum;
//     }

//     yield firstNum 
//     yield* fibGenerator(countNums - 1, secondNum, firstNum + secondNum);
// };
// let generatorFib = fibGenerator(5, 0, 1);

// function* fibGenerator(countNums, firstNum, secondNum) {
//     firstNum = firstNum || 0;
//     secondNum = secondNum || 1;
//     if (countNums == 0) {
//         return firstNum;
//     }
//     yield firstNum;
//     yield* fibGenerator(countNums - 1, secondNum, firstNum + secondNum);
// }
// ;
// let generatorFib = fibGenerator(5, 0, 1);
