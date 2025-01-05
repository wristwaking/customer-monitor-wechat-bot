const readline = require('readline')
const fs = require('fs')
const moment = require('moment')

let shell = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const contacts = JSON.parse(fs.readFileSync('contacts.json', 'utf8'));

const dictionary = new Map();
contacts.forEach(item => {
    dictionary.set(item, 0);
})

let checkDateFileName = () => {
    shell.question('填写需要统计客服数据的日期: ', answer => {
        let regex = /^\d{4}\.\d{2}\.\d{2}$/;
        if (regex.test(answer)) {
            if (!fs.existsSync(`./客服消息日志/${answer}_消息日志.txt`)) {
                console.log("错误: 日志不存在")
                checkDateFileName()
                return
            }
            fs.readFile(`./客服消息日志/${answer}_消息日志.txt`, (err, data) => {
                let rows = data.toString().split('\n');
                rows.forEach(row => {
                    if (row) {
                        let msg = row.replaceAll("【", "").replaceAll("】", "").split("#")
                        dictionary.set(msg[1], dictionary.get(msg[1]) + 1)
                    }
                })
                let result = "=== Date: " + answer + " ===\n\n"
                contacts.forEach(item => {
                    result = `${result}【${item}】【${dictionary.get(item)} messages】\n`
                })
                console.log("\n" + result)
                fs.writeFileSync(`./客服统计数据/${answer}_统计数据.txt`, result)
                console.log("\n" + "恭喜你数据统计文件创建成功（请到`客服统计数据`文件夹查看）\n")
                pause()
            })
        } else {
            console.log("错误: 日期格式错误")
            checkDateFileName()
            return
        }
    });
}

checkDateFileName()

shell.on('close', () => {
    process.exit(0);
});

function pause() {
    shell.question('按任意键退出当前程序！！！', () => {
        shell.close();
    });
}
