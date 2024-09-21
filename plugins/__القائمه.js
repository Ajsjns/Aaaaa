ction clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor(ms % 3600000 / 60000);
  let s = Math.floor(ms % 60000 / 1000);
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  let d = new Date(new Date + 3600000);
  let locale = 'ar';
  let week = d.toLocaleDateString(locale, { weekday: 'long' });
  let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
  let _uptime = process.uptime() * 1000;
  let uptime = clockString(_uptime);
  let user = global.db.data.users[m.sender];
  let name = conn.getName(m.sender)
  let { money, joincount } = global.db.data.users[m.sender];
  let { exp, limit, level, role } = global.db.data.users[m.sender];
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
  let more = String.fromCharCode(8206);
  let readMore = more.repeat(850);
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
await conn.sendMessage(m.chat'💝', { react: { text: '📂', key: m.key } })
const OBITO = ' https://whatsapp.com/channel/0029VanIroV7YScwYEsjNv1N  '
const mentionId = m.key.participant || m.key.remoteJid;

conn.relayMessage(m.chat, { viewOnceMessage: { message: { interactiveMessage: { header: { title: `gataVidMenu`}, body: { text: `*• ──╾⊱﹝⚡️﹞⊰╼── •*
*مــرحــبــا بــك/ي* @${mentionId.split('@')[0]}
╗──────¤مــعلـ🛖ـومــاتــك
> •مــســتــواك : ${level}
> •بــريــمــيــوم : ${user.premiumTime > 0 ? 'مــمـ🔱ـيز' : (isPrems ? 'مــمـ🔱ـيز' : 'عــ🍁ــادي') || ''}
> •رتــبــتــك : ${role}
*• ──╾⊱﹝⚡️﹞⊰╼── •*
╗───¤مــعلــومــات الــ🤖بــوت
> إســم الــبــوت:OBITO 
> •الــمــطــور :LUFFY/ SHADOW 
> •مــدة الــتــشــغــيل : ${24:00 ساعه}
*• ──╾⊱﹝⚡️﹞⊰╼── •*
*~⌬ تــ✍︎ــوقــيــع ↡~*🖋️
*> OBITO ﹝⚡️﹞LB
*• ──╾⊱﹝⚡️﹞⊰╼── •*
> Copyright © 2024 Obito`,subtitle: "OBITO",},header: { hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url: OBITO } }, { upload: conn.waUploadToServer }, {quoted: m}))},
                  contextInfo: {
                      mentionedJid: [m.sender],
                      isForwarded: false,
                  },nativeFlowMessage: { buttons: [


                          {
                              name: 'single_select',
                              buttonParamsJson: JSON.stringify({
                                  title: '⌈🛡╎القـــــســام ╎🛡⌋',
                                  sections: [
                                      {
                                          title: 'مــرحـ🛡ـبــا بــك فـي مــ☑هــام اوبيتو بـ🤖ـوت',
                                          highlight_label: 'اقــرأ اوامــر يــا بــرو 🤖',
                                          rows : [
                                              {
                                                  header: 'الــقـ👑ـســم الـاول',
                                                  title: 'قسم_اعضاء  #الاعضاء',
                                                  description: '',
                                                  id: '.م1'
                                              },
                                              {
                                                  header: 'الــقـ👨🏻‍💻ـســم الــثــانــي',
                                                  title: 'اقسم_المشرفين #المشرفين',
                                                  description: '',
                                                  id: '.2م' 
                                              },
                                              {
                                                  header: 'الــقـ🕋ـســم الــثــالــث',
                                                  title: 'قسم_الدين #الدين',
                                                  description: '',
                                                  id: '.3م'
                                              },
                                              {
                                                  header: 'الــقـ👑ـســم الــرابــع',
                                                  title: 'قسم_المطور #المطور',
                                                  description: '',
                                                  id: '.4م'
                                              },
                                              {
                                                  header: 'الــقـ🛡ـســم الــخــامــس',
                                                  title: 'قسم_التنزيلات #التنزيلات',
                                                  description: '',
                                                  id: '.5م'
                                              },
                                              {
                                                  header: 'الــقـ🕹ـســم الــســادس',
                                                  title: 'قسم_الالعاب #الالعاب',
                                                  description: '',
                                                  id: '.6م'
                                              },
                                              {
                                                  header: 'الــقـ🌀ـســم الــســابــع',
                                                  title: 'قسم_التحويلات #التحويلات',
                                                  description: '',
                                                  id: '.م7'
                                              },
                                              {
                                                  header: 'الــقـ🎧ـســم الــثــامـن',
                                                  title: 'قسم_الصوتيات #الصوتيات',
                                                  description: '',
                                                  id: '.م8'
                                              },
                                              {
                                                  header: 'الــقـ🤖ـســم الــتــاســع',
                                                  title: 'قسم_الذكاء #الذكاء',
                                                  description: '',
                                                  id: '.م9'
                                              },
                                              {
                                                  header: 'الــقـ🚨ـســم الــعــاشــر',
                                                  title: 'قسم_الدعم #الدعم',
                                                  description: '',
                                                  id: '.م10'
                                              },
                                              {
                                                  header: 'الــقـ🔍ـســم �لــحــاديــة عــشــر',
                                                  title: 'قسم_ابحث #البحث',
                                                  description: '',
                                                  id: '.م11'
                                              },
                                              {
                                                  header: 'الــقـ📽️ـســم الــثــانــي عــشــر',
                                                  title: 'قسم_الافلام #الافلام',
                                                  description: '',
                                                  id: '.م12'
                                              },
                                              {
                                                  header: 'الــقـ👨🏻‍💻ـســم الــثــالــث عــشــر',
                                                  title: '',
                                                  description: '',
                                                  id: '.م13'
                                             }
                                          ]
                                      }
                                  ]
                              }),
                messageParamsJson: ''
              },
              {
    
            name: "quick_reply",
            buttonParamsJson: '{"display_text":"⌈🚀╎الدردشه المجهوله╎🚀⌋","id":".chathom"}' 
                   },
                   {
                      name: "quick_reply",
            buttonParamsJson: '{"SHADOW":"مطورين","LUFFY":".المطور"}'
                   },
                   {
                      name: "quick_reply",
            buttonParamsJson: '{"display_text":"معلومات البوت#","id":".معلومات-البوت"}'
                   },
                   {
             name: "cta_url",
             buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":" https://whatsapp.com/channel/0029VanIroV7YScwYEsjNv1N "}'
                          }
                      ]
                  }
              }
          }
      }
  }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['menu', 'مهام', 'اوامر','الاوامر','قائمة','القائمة']

export default handler;│
