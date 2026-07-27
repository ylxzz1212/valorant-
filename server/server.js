const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`本地服务已启动，访问地址：http://localhost:${port}`);
});