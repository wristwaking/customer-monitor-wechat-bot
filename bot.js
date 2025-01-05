const { WechatyBuilder } = require('wechaty');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const { insertObjIntoText } = require('./util');

const groups = JSON.parse(fs.readFileSync('groups.json', 'utf8'));
console.log(`\n【启动：读取客服群组】` + groups)
const contacts = JSON.parse(fs.readFileSync('contacts.json', 'utf8'));
console.log(`\n【启动：读取客服人员】` + contacts + '\n')
const bot = WechatyBuilder.build()

bot.on('scan', (code, status) => {
    qrcode.generate(code, { small: true });
})

bot.on('login', user => console.log(`User ${user} logged in`))

bot.on('message', async message => {
    const room = message.room()
    if (room && groups.includes(await room.topic())) {
        if (message.payload.type != 7) {
            return;
        } else {
            let talkerName = message.talker().payload.name;
            if (contacts.includes(talkerName)) {
                let msg = message.text()
                insertObjIntoText({ name: talkerName, msg: msg })
            }
        }
    }
});

bot.start();
