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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255717364556";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_44_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNixcbiAgICAgICAgODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTczLFxuICAgICAgICAzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgODksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDYxLFxuICAgICAgICA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODksXG4gICAgICAgIDgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDU3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MixcbiAgICAgICAgODksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQxLFxuICAgICAgICA0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTExLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgMCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDMxLFxuICAgICAgICA3MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI4LFxuICAgICAgICA2NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3MmJkM3VCZWxCN096enJpUmxFSzlUUFVKUU96WlVnZ3VNVXUvZS9sNGc0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTcxNzM2NDU1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjUyRDFFMkJDNUMwRDU0Mzk0MDM4MUUwMjFDMzdENThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MzU0NjQ4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzE3MzY0NTU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNEM2MTlGOEEwNDZBNzRBQzMzMjlBNkIzOUY0QUI4OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgzNTQ2NDlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSkJmTjZidnhSZmlDZU9PeklQN0ZEZ1wiLFxuICBcInBob25lSWRcIjogXCJmNDEwZGY5Ni00YmZlLTQyZWItYmRkNy1lODdiMTkzNjE5ODhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgMTMwLFxuICAgICAgMTIzLFxuICAgICAgMTcyLFxuICAgICAgMTczLFxuICAgICAgOTAsXG4gICAgICAxOTEsXG4gICAgICAxNTIsXG4gICAgICA1OCxcbiAgICAgIDE1MCxcbiAgICAgIDEyMixcbiAgICAgIDI0MixcbiAgICAgIDU0LFxuICAgICAgMjMzLFxuICAgICAgMjQ0LFxuICAgICAgMTksXG4gICAgICAxMzgsXG4gICAgICA0LFxuICAgICAgMTMsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgMjE3LFxuICAgICAgODAsXG4gICAgICAxNjcsXG4gICAgICAxMjcsXG4gICAgICAyNTMsXG4gICAgICAyMzYsXG4gICAgICAxMjcsXG4gICAgICAxMzMsXG4gICAgICA2OSxcbiAgICAgIDE1MSxcbiAgICAgIDI0MyxcbiAgICAgIDExNCxcbiAgICAgIDEzLFxuICAgICAgMjA5LFxuICAgICAgMTg1LFxuICAgICAgMTEwLFxuICAgICAgMTQ2LFxuICAgICAgMTksXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWERBWjY5TVZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTcxNzM2NDU1NjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2tpcHBlclwiLFxuICAgIFwibGlkXCI6IFwiMTEwMjUyMjgwMjUwMzcyOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHpJenRnRUVNNkZzTE1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwVlZ5Y09oemJVVFVuZE4ySUJ6aFA3N0FYL0lUMFhjSVVJdUt2cE9kR2lFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkh0Zjc0U0dNeGNuY3dMVjNVUlFERHZicFBjS25aSm5rSHJpV0FmU0E4UUZEQ1lXK3AyVWJtcWtIMUF0cGtkdy8vbGVxbzZqYVhOaUxWVnVWOW9QbUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjd1dU5CL3cvVXFPY0xqSlVBNTRkQ2ZlZE5sQUZXb3A3aEVTbEVydzRwL0ZNa1B4MTFnaUN3OG9SUUhWUUNrL1hQbnlQZUdoU29RcDFpdTFxUU9BcGh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTcxNzM2NDU1NjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MzU0NjQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjJiXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOMmIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNRVQ5VythaVBLNkF5NUxiM1VxcEp1YmxCOHhjYzZ2c0xwL2ExT1BqaFE0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNTk1Nzg0MjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODI5NjM1NzM0N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
