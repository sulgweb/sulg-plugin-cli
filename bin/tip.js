/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-01-29 09:22:03
 * @LastEditTime: 2021-01-29 09:40:22
 * @Copyright: 1.0.0
 */
const chalk = require('chalk')
module.exports =  {
  succes: (msg) => console.log(chalk.green.bold(`\n ✅   ${msg}\n`)),
  fail: (msg) => console.log(chalk.red.bold(`\n ❌   ${msg}\n`)),
  info: (msg) => console.log(chalk.blue(`\n ❗️   ${msg}\n`)),
};