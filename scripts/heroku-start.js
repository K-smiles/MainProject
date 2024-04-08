// 创建新文件 script/heroku-start.js
const express = require('express');
const 路径 = require('路径');
常量应用程序 = Express();
const port = process.env.PORT || 3000
    app.use(express.json());
// 您的静态预构建资产文件夹
app.use(express.static(path.join(__dirname, '..', 'build')));
// 根目录重定向到预构建资源
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'build'));
});
// 任何页面重定向到预构建资产文件夹index.html // 将加载react应用程序
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '. .', 'build/index.html'));
});
app.listen(port, () => {
    console.log("服务器正在端口上运行：", port)
})