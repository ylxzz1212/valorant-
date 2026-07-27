const crypto = require("crypto");
require("dotenv").config();

const APP_ID = process.env.HUPIJIA_APP_ID;
const APP_SECRET = process.env.HUPIJIA_APP_SECRET;

function sign(params) {
    const keys = Object.keys(params).sort();
    let str = "";
    for (const k of keys) {
        if (params[k] !== "" && params[k] !== undefined) {
            str += `${k}=${params[k]}&`;
        }
    }
    str += `key=${APP_SECRET}`;
    return crypto.createHash("md5").update(str).digest("hex").toUpperCase();
}

module.exports = {
    APP_ID,
    sign
};