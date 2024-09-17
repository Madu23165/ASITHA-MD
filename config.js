const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "yQcU3KoR#QBSfMILN_6crFg4RBGD9RJ4SWwYx_O50k2hMg3mt1YY",
MONGODB: process.env.MONGODB || "",//enter mongo db url
};
