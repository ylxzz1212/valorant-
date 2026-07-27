const axios = require("axios");
const { APP_ID, sign } = require("./_lib");

module.exports = async (req, res) => {
    res.setHeader("Access‑Control‑Allow‑Origin", "*");
    res.setHeader("Access‑Control‑Allow‑Methods", "GET,POST,OPTIONS");
    if (req.method === "OPTIONS") return res.status(200).end();

    const orderId = Date.now().toString();
    const params = {
        app_id: APP_ID,
        order_id: orderId,
        amount: "9.90",
        notify_url: process.env.CALLBACK_URL,
        return_url: process.env.API_BASE + "/index.html"
    };
    params.sign = sign(params);

    try {
        const r = await axios.post("https://api.hupijiao.com/v1/pay/create", params);
        res.json(r.data);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};