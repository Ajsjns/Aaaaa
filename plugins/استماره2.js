let handler = async (m, { conn, command, text }) => {
let love = `
『 نرحب بجميع الاوتاكو 』
✯≼══━━﹂🏮﹁━━══≽✯

⛩️┃『𝐀.𝐊.𝐓『💧』𝐇𝐮𝐧𝐭𝐞𝐫𝐬 』┃⛩️

*⟽ ⎎مۘــمۘــيــزا̍ت ا̍ڵــنــقـ📜ـٰابة*
*┇مشرفين عادلين👨‍⚖️*               
*┇اعضا محترمين🪇*
*┇فعاليات يوميه🎮*   
*┇إعطاء إشراف لمن يستحقه🎗️*
*┇تصفيه اسبوعيه للأصنام👤*
✯≼══━━﹂🏮﹁━━══≽✯
*رابط الاستقبال:↶*
*『 https://chat.whatsapp.com/BT7EMwqQMXjLAcYILpgSkO 』*

*┇🏮من طرف ┇لوفي┇🏮*
✯≼══━━﹂🏮﹁━━══≽✯

 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^استماره2$/i
export default handler
