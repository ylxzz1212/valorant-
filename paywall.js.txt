// 前端付费状态公共脚本
window.PAY = {
    paid: false
}

async function refreshPayStatus() {
    const res = await fetch("/api/order-status");
    const json = await res.json();
    window.PAY.paid = !!json.paid;
    return window.PAY.paid;
}