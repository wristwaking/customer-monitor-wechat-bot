# customer-monitor-wechat-bot 微信客服数据监控机器人搭建

**customer-monitor-wechat-bot 客户信息：Iproremovol-Alex**

这是一款基于wechaty微信协议框架搭建微信客服数据监控插件程序。项目通过记录微信群客服会话数据，支持脚本快速指定日期统计导出数据，通过electron-ui面板即可方便操作。

# 启动程序扫码登录微信
```bash
node bot.js
```

# 统计指定日期范围客服数据
```
node tool.js

填写需要统计客服数据的日期: YYYY.MM.DD （例如：2025.01.01）
```

# 客服消息日志（目录：客服消息日志）

![image](https://github.com/user-attachments/assets/175d5500-c71f-426b-bf80-4a5052d43599)

```
【13:40:04】#【雨落晴天】#【测试】
【13:40:29】#【一语中的】#【牛逼】
【14:02:00】#【雨落晴天】#【在的】
```

# 客服统计数据（目录：客服统计数据）

![image](https://github.com/user-attachments/assets/90461f99-77cc-4002-aff4-e24a445441a6)

```
=== Date: 2023.12.05 ===

【一语中的】【1 messages】
【雨落晴天】【1 messages】
```

# 附加：wechaty WechatifiedContactImpl

```
WechatifiedContactImpl {
  _events: [Object: null prototype
  ] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  id: '@5f2864c3550d21e1057f83a1cadd2e300d4410ad1c0bd24b65157309fa31c0ef',
  payload: {
    address: undefined,
    alias: '',
    avatar: '/cgi-bin/mmwebwx-bin/webwxgeticon?seq=755506774&username=@5f2864c3550d21e1057f83a1cadd2e300d4410ad1c0bd24b65157309fa31c0ef&skey=',
    city: '南通',
    friend: true,
    gender: 1,
    id: '@5f2864c3550d21e1057f83a1cadd2e300d4410ad1c0bd24b65157309fa31c0ef',
    name: '雨落晴天',
    phone: [],
    province: '江苏',
    signature: undefined,
    star: false,
    weixin: undefined,
    type: 1
  },
  [Symbol(kCapture)
  ]: false
}
```

