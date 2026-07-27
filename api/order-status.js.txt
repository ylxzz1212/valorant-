module.exports = async (req, res) => {
    res.setHeader("Access‑Control‑Allow‑Origin", "*");
    res.setHeader("Access‑Control‑Allow‑Methods", "GET,OPTIONS");
    if (req.method === "OPTIONS") return res.status(200).end();

    // 简易演示版本：默认未付费，正式项目需要数据库存储订单状态
    res.json({ paid: false });
};