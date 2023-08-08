/*
 * @Description:
 * @Version: 1.0
 * @Autor: lingyi
 * @Date: 2022-07-04 13:01:28
 * @LastEditors: lingyi
 * @LastEditTime: 2022-07-29 10:51:43
 */
const { version } = require('./package.json')
const shell = require('shelljs')
const npmLogin = require('npm-cli-login')
const username = 'lingyi'
const password = 'abc123789'
const email = 'ling_yih@163.com'
const registry = 'http://localhost:4873/'

console.log('=========正在登录yarn=========')
npmLogin(username, password, email, registry)
console.log('=========登录完成=========')

console.log(`=========正在发布${version}版本至本地npm库=========`)
shell.exec('npm publish')
console.log('=========发布完成！=========')
