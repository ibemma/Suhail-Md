const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_27_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDc3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk2LFxuICAgICAgICA1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDkzLFxuICAgICAgICA0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY4LFxuICAgICAgICA3NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MixcbiAgICAgICAgMjM1LFxuICAgICAgICA2MixcbiAgICAgICAgMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MixcbiAgICAgICAgNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTExLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiejl0SGlpWnlNL3hjQUlRdVBUcC9LY0xNNnJuaWhZU3BkTXNROUxzbUhJRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUTJNNG53VnFRVUtPbVpQNDQwdU90UVwiLFxuICBcInBob25lSWRcIjogXCIzYWQ3M2JlNi04ODgzLTQzNjMtYjRjNC1jYzBkYjlhMmExNjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAxOTAsXG4gICAgICA5NixcbiAgICAgIDc5LFxuICAgICAgOTksXG4gICAgICA0NCxcbiAgICAgIDg5LFxuICAgICAgMTk1LFxuICAgICAgOTQsXG4gICAgICAxOTgsXG4gICAgICAxNTQsXG4gICAgICAxMTQsXG4gICAgICAxMTksXG4gICAgICA2MSxcbiAgICAgIDQwLFxuICAgICAgMjIyLFxuICAgICAgMTUwLFxuICAgICAgMjQxLFxuICAgICAgMjM5LFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDEyNyxcbiAgICAgIDgzLFxuICAgICAgMjUyLFxuICAgICAgMjE4LFxuICAgICAgODIsXG4gICAgICAxMjUsXG4gICAgICAyNDgsXG4gICAgICAxNTQsXG4gICAgICA5NSxcbiAgICAgIDM5LFxuICAgICAgMTcyLFxuICAgICAgMzYsXG4gICAgICAyNTQsXG4gICAgICAxNzYsXG4gICAgICAxOTYsXG4gICAgICAxMjMsXG4gICAgICAxOTMsXG4gICAgICAyNDEsXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkYxWEs3OE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODA5ODIwOTc6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJJR0dFU1QgRU1NQSdTIFBOTFwiLFxuICAgIFwibGlkXCI6IFwiNTcyMjY2NjQzOTQ5ODY6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKT3BucTRGRU9LL2xMVUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9TRWRWd2Z3VjhGWkRJd21oeUhqc1pFZzVhc0dFc0dBcFBkWSthZHFnaHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUmV2bkxxbGNvNnArSUhhS2tHNGtNODJUc2NiQjdyYmF0SVViZ2U0V1NPdnZvcUpRQ0ZaNzRYc1hVWFJ0NW1kMjBpR015VHk2ZW41eEEzOEpvWnZ0REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQi83aHpkZW9WWnlDU2hoeHExWVgveTE3R1RSVXMrTE4rUiszajJ4S2NxMkF1MXp3eWVLTEZvT01VZzFiSUJqTHpYRWsyVjVhTkNhOEtlVmNyWllNQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA4MDk4MjA5Nzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIwOTc2Mzhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "EMMA BOT",
  ownername:process.env.OWNER_NAME|| "EMMANUEL",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
