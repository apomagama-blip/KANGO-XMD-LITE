//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0xxczdTRnVDNnFBbE0ySWpaeFUzcDdQR2hqTFN5bWpnS1ppbnVNMjgyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3pDSC9DS2JrT01OZnR1bHdJSkMrS3p5WGZQMGpSOFRyTVo5Q1BFaVh6cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSzUvcEJSWVVCL2tBNlNPUkUyWk5VanVsZW5sNXd2K1FtcitpMVpFemt3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSjN0UHNwdlkrMDBwU0N6bUVpaklaM0NJV2hxWEpXYjZvbFNkOFpkeGhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVBTys2ZjJwNGxubkRLQi92K3pSbVdzUnJSSG82eGo4b0pNUGxWbUx4VU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndnYzJVSDE1YkFOdXExY05xWXdEL1lOWjZyMXJoUVFkTjBJR2pBYVI0QUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUFiMWlMNFZTcjNBLzRHQnozV0s0UnJtcm9GVkJqV05kZmJCVWQ3ekVVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYk44SXdkVEpOSW5zekVubkFqMXVrUlE0YTRVc281RmRLeUxjMVU1UmN6MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNNbXlHRXE5UzFYMmtkekl2UWFFOURCUHF1cnVpVW1UUHd5YnUrWHp6V0U0eUgwcWpXWkxFbTU3UTBWUVNZd1IvUitvQjd0aDd1ek1KYzlRNmRNZUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoiZmYxcHVaRnpOREdyeTBJeldORlp4MUMybUZKQmZUR2dZRGI2SEtSd3dLRT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcwMzI0NzQ2MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTVGRjA2ODRGODZBRDhGNzMzNTIyOTg0RERGNDBFNzMiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2OTY2Nzk3N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDMyNDc0NjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1MkM2RDBCNEJCRThDN0E3ODM2NDQ3QTlDN0UwRTZCIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Njk2Njc5Nzh9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiNlBMV1A0Sk0iLCJtZSI6eyJpZCI6Ijk0NzAzMjQ3NDYyOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiY2hhbW9kIGxha3NoYW4iLCJsaWQiOiIxODUzNzU2NzA3MTA0Mjg6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BMVm5uVVErZnJyeXdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZpWGJsMjhzcGkwWm42VkJZMDFQck9ibnkwRDlsaUtXQVR4K3FZT3V3QW89IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJvVjkrTWVkZ2FjUWlYbG9tKy9uTG1SWmxXSndGM0dkWTRldnYrTWNCS2JXVVkwOGI4UWVadnd4RVh5djZFdlBuZ0x6dWYvbE1QZjJKL2NJZFBKMkJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvLzZpcEk2bXhJRmZJQWlSbjYxTW1ZSkx6ekFuZ0NydHJuMjJ1cWVMaU9tT1NFUXo1eU1TTGdub2FybEhrTzRBdVhpcFpRWHB6RDJCalRrYUtpS2xEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE4NTM3NTY3MDcxMDQyODoyQGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWWWwyNWR2TEtZdEdaK2xRV05OVDZ6bTU4dEEvWllpbGdFOGZxbURyc0FLIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVRQXhBQSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Njk2Njc5NzQsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGFkIn0=' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '233509977126' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
