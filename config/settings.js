const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6289652707119'] // no own
global.author = '𝕯𝖎𝖕𝖗𝖆𝖏𝖆' // nama author 
global.packname = '𝐀𝐫𝐱𝐃𝐢𝐩-𝐌𝐃' // nama pack sticker
global.namabot = '𝐀𝐫𝐱𝐃𝐢𝐩-𝐁𝐎𝐓' // nama bot mu
global.group = 'https://bit.ly/xdbotwhatsapp' // grup mu
global.pic = 'https://telegra.ph/file/78aa014526d416f980a7b.jpg' // logo lu


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
