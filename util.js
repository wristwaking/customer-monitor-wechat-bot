const fs = require('fs')
const moment = require('moment')

let insertObjIntoText = (content) => {
    let dateFileName = moment().format("YYYY.MM.DD")
    let name = content.name
    let msg = content.msg.replaceAll('\n', '').replaceAll('#', '')
    let nowTime = moment().format("HH:mm:ss")
    let insertText = `【${nowTime}】#【${name}】#【${msg}】`
    console.log(insertText)
    fs.appendFileSync(`./客服消息日志/${dateFileName}_消息日志.txt`, insertText + '\n')
}

module.exports = {
    insertObjIntoText
}