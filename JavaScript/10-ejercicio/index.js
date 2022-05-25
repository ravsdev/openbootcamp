import {suma, multiplica} from './controller.js';
import chalk from 'chalk';

let a=suma(1,2);
let b=suma(4,5);
// console.log(multiplica(suma(1, 2), suma(4, 5)));
console.log(`${a} + ${b} = `, chalk.green(multiplica(a,b)));