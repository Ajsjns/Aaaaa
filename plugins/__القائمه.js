function clockString(ms) {
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
const OBITO = 'https://telegra.ph/file/5fc26caa7580823ce9dda.jpg'
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
                                                  description: 'import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './Menu2.jpg'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/.')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `⎔⋅• ━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━ •⋅⎔
> obito↳⚡️↲𝐁𝐎𝐓
*⌬∙ • ──╾⊱﹝🏮﹞⊰╼── • ∙⌬*
> 〔قـسـم الاعـضـاء┊ ˼‏ 🍁👌˹ 〕
*⌬∙ • ──╾⊱﹝🏮﹞⊰╼── • ∙⌬*
           *اوبيتو بــ🤖ــوت*
*⌬∙ • ──╾⊱﹝🏮﹞⊰╼── • ∙⌬*
> 🍁👌.عمل
> 🍁👌.طرد
> 🍁👌.توقيت
> 🍁👌.بنك
> 🍁👌.سحب
> 🍁👌.ايداع
> 🍁👌.محفظة
> 🍁👌.منشني
> 🍁👌.تفعيل
> 🍁👌.الغاء-التفعيل
> 🍁👌.عملات
> 🍁👌.المشرفين
> 🍁👌.بروفايل
> 🍁👌.لفل
> 🍁👌.خط
> 🍁👌.توب
> 🍁👌.يومي
> 🍁👌.الماس
> 🍁👌.ترتيب_البنك
> 🍁👌.هجوم
*⌬∙ • ──╾⊱﹝⚡️﹞⊰╼── • ∙⌬*
*~⌬ تــ✍︎ــوقــيــع ↡~*🖋️
*⌞🏮┊𝐎𝐁𝐈𝐓𝐎 『 ⚡️ 』 𝐋𝐁┊🏮⌝*
*⌬∙ • ──╾⊱﹝🏮﹞⊰╼── • ∙⌬*`.trim()
   const _0x3c7cab = _0x5a1d;

        function _0x5a1d(_0x1b92fa, _0x42ca62) {
            const _0x5a1d39 = _0x42ca();
            _0x5a1d = function (_0x28d0f5, _0x342e36) {
                _0x28d0f5 = _0x28d0f5 - 0x0;
                let _0x4abc25 = _0x5a1d39[_0x28d0f5];
                return _0x4abc25;
            };
            return _0x5a1d(_0x1b92fa, _0x42ca62);
        }

        function _0x42ca() {
            const _0xe1e20e = ['2409147cMTtvV', '70SxKSwY', 'trim', '2708027tOnEUS', '831853GQAjyu', '6ZrUjVF', '𝐎𝐁𝐈𝐓𝐎 『 ⚡️ 』 𝐋𝐁', '406070MLYaeB', 'https://whatsapp.com/channel/0029VanIroV7YScwYEsjNv1N', '4YbGMkZ', '840496IPJeXP', '322835aPaRGc', 'VIDEO', '3639410cLSfPv', 'sender', '9LtUyCF'];
            _0x42ca = function () {
                return _0xe1e20e;
            };
            return _0x42ca();
        }(function (_0x2979d9, _0x233f8f) {
            const _0x32315e = _0x5a1d;
            const _0x3b1890 = _0x2979d9();
            while (!![]) {
                try {
                    const _0x2cc4d6 = parseInt(_0x32315e(0x5)) / 0x1 + parseInt(_0x32315e(0x1)) / 0x2 + -parseInt(_0x32315e(0xa)) / 0x3 * (parseInt(_0x32315e(0x3)) / 0x4) + parseInt(_0x32315e(0x7)) / 0x5 + -parseInt(_0x32315e(0xf)) / 0x6 * (parseInt(_0x32315e(0xd)) / 0x7) + parseInt(_0x32315e(0x4)) / 0x8 * (-parseInt(_0x32315e(0x9)) / 0x9) + -parseInt(_0x32315e(0xb)) / 0xa * (-parseInt(_0x32315e(0xe)) / 0xb);
                    if (_0x2cc4d6 === _0x233f8f) {
                        break;
                    } else {
                        _0x3b1890['push'](_0x3b1890['shift']());
                    }
                } catch (_0x3284ad) {
                    _0x3b1890['push'](_0x3b1890['shift']());
                }
            }
        }(_0x42ca, 0x772cd));
        let buttonMessage = {
            'image': pp,
            'caption': str[_0x3c7cab(0xc)](),
            'mentions': [m[_0x3c7cab(0x8)]],
            'footer': '' + wm,
            'headerType': 0x4,
            'contextInfo': {
                'mentionedJid': [m['sender']],
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': _0x3c7cab(0x6),
                    'mediaUrl': null,
                    'title': _0x3c7cab(0x0),
                    'body': null,
                    'thumbnail': img,
                    'sourceUrl': _0x3c7cab(0x2)
                }
            }
        };
        conn.sendMessage(m.chat, buttonMessage, {
            quoted: m
        })

    } catch {
        conn.reply(m.chat, '[❗خطاء❗]', m)
    }
}
handler.command = /^(م1|قسم الجروبات)$/i
handler.exp = 20
handler.fail = null
export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}'
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
                                                  description: '> ˼⚡️˹↜ قــســم المـطـوࢪ  ↶
╮────────────────⟢ـ
┊˼➕˹┊⟣｢.انـشـئ｣
┊˼💁🏻‍♂️˹┊⟣｢.لـمـسـتـخـدم｣
┊˼⚜️˹┊⟣｢.لـنـخـبـه｣
┊˼💎˹┊⟣｢.ضيف_الماس｣
┊˼⚡˹┊⟣｢.اڪـسـبـي｣
┊˼💸˹┊⟣｢.ضيف_فلوس｣
┊˼🧋˹┊⟣｢.خصم_خبرة｣
┊˼🔄˹┊⟣｢.ريستارت｣
┊˼👑˹┊⟣｢.ادمـن｣
┊˼🚫˹┊⟣｢.خـاص｣
┊˼⭕˹┊⟣｢.عـام｣
┊˼⛔˹┊⟣｢.المـحـظـوࢪيـن｣
┊˼🛑˹┊⟣｢.بـان｣
┊˼🔘˹┊⟣｢.انـبـان｣
┊˼📵˹┊⟣｢.بـلـوڪ ｣
┊˼✔️˹┊⟣｢.انـبـلـوڪ｣
┊˼📛˹┊⟣｢.الـبـلـوڪـات｣
┊˼🎗️˹┊⟣｢.اعـلان｣
┊˼⌨️˹┊⟣｢.سكراب｣
┊˼📁˹┊⟣｢.مـلـف｣
┊˼👋🏻˹┊⟣｢.اطـࢪد｣
┊˼💠˹┊⟣｢.اخـࢪج｣
┊˼🔮˹┊⟣｢.لـبـࢪوفـايـل｣
┊˼💬˹┊⟣｢.اعادة_تعيين_الرسائل_لكل_المستخدمين｣
╯────────────────⟢',
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
                                                  description: '> ˼🔥˹↜ قــســم  الـتـحـويـلات↶
╮──────────────────⟢ـ 
┊˼🔥˹┊⟣｢.لانمي｣
┊˼🔥˹┊⟣｢.لكرتون｣
┊˼🔥˹┊⟣｢.لتـلـيـجـࢪاف｣
┊˼🔥˹┊⟣｢.لرابط｣
┊˼🔥˹┊⟣｢.لـفـيـديـو｣
┊˼🔥˹┊⟣｢.لصـوࢪه｣
┊˼🔥˹┊⟣｢.لصـوت｣
┊˼🔥˹┊⟣｢.لࢪيـڪـوࢪد｣
┊˼🔥˹┊⟣｢.لـمـتـحـࢪڪ｣
┊˼🔥˹┊⟣｢.لـبـڪـسـل｣
┊˼🔥˹┊⟣｢.لـبـلـوࢪ｣
┊˼🔥˹┊⟣｢.اسـتـيـڪـر｣
┊˼🔥˹┊⟣｢.نـࢪد｣
┊˼🔥˹┊⟣｢.دمـج｣
┊˼🔥˹┊⟣｢.اسـتـڪ｣
┊˼🔥˹┊⟣｢.دائـࢪي｣
┊˼🔥˹┊⟣｢.مـلـصـق｣
┊˼🔥˹┊⟣｢.تـلـيـجـࢪام｣
┊˼🔥˹┊⟣｢.سـࢪقـه｣
┊˼🔥˹┊⟣｢.ســتـڪ｣
┊˼🔥˹┊⟣｢.عـمـيـق｣
┊˼🔥˹┊⟣｢.2عـمـيـق ｣
┊˼🔥˹┊⟣｢.مـنـفـوخ｣
┊˼🔥˹┊⟣｢.صـاخـب｣
┊˼🔥˹┊⟣｢.سـࢪيـع｣
┊˼🔥˹┊⟣｢.عكس｣
┊˼🔥˹┊⟣｢.بـطـئ｣
┊˼🔥˹┊⟣｢.سـلـس｣
┊˼🔥˹┊⟣｢.ࢪوبـوت｣
┊˼🔥˹┊⟣｢.نـيـت ڪـوࢪ｣
┊˼🔥˹┊⟣｢.تـخـيـن｣
┊˼🔥˹┊⟣｢.سـنـجـاب ｣
╯──────────────────⟢ـ',
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
                                                  description: '> ˼⚡️˹↜ قــســم الـذڪـاء الـاصـطـنـاعـي  ↶
╮──────────────────⟢ـ 
┊˼🤖˹┊⟣｢.هيفن｣
┊˼🤖˹┊⟣｢.نيون｣
┊˼🤖˹┊⟣｢.كاكاشي｣
┊˼🤖˹┊⟣｢.زاو_فان｣
┊˼🤖˹┊⟣｢.ماكيما｣
┊˼🤖˹┊⟣｢.غوجو｣
┊˼🤖˹┊⟣｢.سونغ｣
┊˼🤖˹┊⟣｢.بيني｣
┊˼🤖˹┊⟣｢.سكاي｣
┊˼🤖˹┊⟣｢.اينديفار｣
┊˼🤖˹┊⟣｢.ماش｣
┊˼🤖˹┊⟣｢.موزان｣
┊˼🤖˹┊⟣｢.يوريتشي｣
┊˼🤖˹┊⟣｢.كايدو｣
┊˼🤖˹┊⟣｢.ميلوداس｣
┊˼🤖˹┊⟣｢.إليزابيث｣
┊˼🤖˹┊⟣｢.نامي｣
┊˼🤖˹┊⟣｢.ميكاسا｣
┊˼🤖˹┊⟣｢.ايتاتشي｣
┊˼🤖˹┊⟣｢.روجر｣
┊˼🤖˹┊⟣｢.اسكانور｣
┊˼🤖˹┊⟣｢.كيلوا｣
┊˼🤖˹┊⟣｢.زورو｣
┊˼🤖˹┊⟣｢.ليفاي｣
┊˼🤖˹┊⟣｢.تانجيرو｣
┊˼🤖˹┊⟣｢.روبين｣
┊˼🤖˹┊⟣｢.هانكوك｣
┊˼🤖˹┊⟣｢.هيستوريا｣
┊˼🤖˹┊⟣｢.ماو_ماو｣
┊˼🤖˹┊⟣｢.فريرن｣
┊˼🤖˹┊⟣｢.كوشينا｣
┊˼🤖˹┊⟣｢.هيناتا｣
┊˼🤖˹┊⟣｢.أنيا｣
┊˼🤖˹┊⟣｢.ميتسوري｣
┊˼🤖˹┊⟣｢.سيلفي｣
┊˼🤖˹┊⟣｢.سمسم｣
┊˼🤖˹┊⟣｢.تيسيا｣
┊˼🤖˹┊⟣｢.بلاك｣
┊˼🤖˹┊⟣｢.اني｣
┊˼🤖˹┊⟣｢.لوفي｣
┊˼🤖˹┊⟣｢.ارثر｣
┊˼🤖˹┊⟣｢.شادو｣
┊˼🤖˹┊⟣｢.اوبيتو｣
┊˼🤖˹┊⟣｢.مـاࢪي｣
┊˼🤖˹┊⟣｢.داࢪک｣
┊˼🤖˹┊⟣｢.دحيح｣
┊˼🤖˹┊⟣｢.تحدث｣
┊˼🏞️˹┊⟣｢.اࢪسـم｣
┊˼🎇˹┊⟣｢.لوغو｣
┊˼🎇˹┊⟣｢.لـوغـو 1｣
┊˼🎇˹┊⟣｢.لـوغـو 2｣
┊˼🎇˹┊⟣｢.لـوغـو 3｣
┊˼🎇˹┊⟣｢.لـوغـو 4｣
┊˼🎇˹┊⟣｢.لـوغـو 5｣
┊˼🎇˹┊⟣｢.لـوغـو 6｣
┊˼🌌˹┊⟣｢.تـصـمـيـم 1｣
┊˼🎇˹┊⟣｢.تـصـمـيـم 2｣
╯──────────────────⟢',
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
                                            {
                                      header: 'الــقـ👨🏻‍💻ـســم الــرابــع عــشــر',
                                                  title: '',
                                                  description: '> ˼🏛˹↜ قــســم الـبـنـک ↶
╮──────────────────⟢ـ 
┊˼🏛˹┊⟣｢.راتب｣
┊˼🏛˹┊⟣｢.عجله｣
┊˼🏛˹┊⟣｢.تداول｣
┊˼🏛˹┊⟣｢.ࢪهـان｣
┊˼🏛˹┊⟣｢.حـظ｣
┊˼🏛˹┊⟣｢.الماس｣
┊˼🏛˹┊⟣｢.صـحـه｣
┊˼🏛˹┊⟣｢.هـديـه｣
┊˼🏛˹┊⟣｢.ڪـشـف｣
┊˼🏛˹┊⟣｢.لـفــل｣
┊˼🏛˹┊⟣｢.الـاغـنـي｣
┊˼🏛˹┊⟣｢.غـابـه｣
┊˼🏛˹┊⟣｢.مـغـامـࢪه｣
┊˼🏛˹┊⟣｢.يـومـي｣
┊˼🏛˹┊⟣｢.اسـبـوعـي｣
┊˼🏛˹┊⟣｢.بـڪـج｣
┊˼🏛˹┊⟣｢.بـقـشـيـش｣
┊˼🏛˹┊⟣｢.عـمـل｣
┊˼🏛˹┊⟣｢.زࢪف｣
┊˼🏛˹┊⟣｢.بـࢪوفـايـل｣
┊˼🏛˹┊⟣｢.عـمـلات｣
┊˼🏛˹┊⟣｢.عـمـلاتـي｣
┊˼🏛˹┊⟣｢.مـحـفـظـه｣
┊˼🏛˹┊⟣｢.تـسـجـيل｣
┊˼🏛˹┊⟣｢.ايـدي｣
┊˼🏛˹┊⟣｢.تـࢪک｣
┊˼🏛˹┊⟣｢.رسائل｣
┊˼🏛˹┊⟣｢.رسائل_المجموعة｣
┊˼🏛˹┊⟣｢.اعادة_تعيين_رسائلي｣
┊˼🏛˹┊⟣｢.اعادة_تعيين_رسائل_المجموعة｣
╯──────────────────⟢ـ',
                                                  id: '.م14'
                                            }
                                            {
                              ),
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
             buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":" https://whatsapp.com/channel/0029Vag5dT01t90dVIah1X1p","merchant_url":"https://whatsapp.com/channel/0029Vag5dT01t90dVIah1X1p "}'
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
