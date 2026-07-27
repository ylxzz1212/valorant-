const { APP_SECRET, sign } = require("./_lib");

module.exports = async (req, res) => {
    res.setHeader("Access‑Control‑Allow‑Origin", "*");
    if(req.method === "OPTIONS") return res.status(200).end();

    const body = req.body;
    const clientSign = body.sign;
    delete body.sign;
    const calcSign = sign(body);

    if(calcSign !== clientSign){
        return res.send("fail");
    }
    // 验签成功，这里可以做订单标记，简易版直接返回成功
    res.send("success");
};