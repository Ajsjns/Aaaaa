//*رد بوت اوبيتو تبع لوفي
// معلش ي لوفي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*هلا بيك يعمري ☕️ *'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*🩶وعليكم السلام*',  
     ]; 
   }else if (/^اوبيتو|اوبيتو$/i.test(m.text)) { 
     responses = [ 
'*لا تناديني وإلا صتحبح جزء من خطتي☕️*'
     ]; 
 }else if (/^اوبيتو من عمك|اوبيتو عمك$/i.test(m.text)) { 
     responses = [ 
'*اوبيتو اككيد😈❤‍🔥*'
     ]; 
   }else if (/^اوبيتو هل انت مرتبط$/i.test(m.text)) { 
     responses = [ 
'*سوف يندم كاكاشي على نهاز يلي زاد فيه*'
   ]; 
   }else if (/^اوبيتو تحبني؟|بوت تحبني$/i.test(m.text)) { 
     responses = [ 
'*نعم انهم يكثرون😉*',
'*احب اخي🫀*',
'*احبك في الله🖤*',
]; 
   }else if (/^اوبيتو تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*انت تعرفني🤨*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك😌*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*قول سلام عليكم 😁♥*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*حل عني 😂*',  

     ]; 
   }else if (/^اوبيتو من وين انت$/i.test(m.text)) { 
     responses = [ 
'🇩🇿جزائر'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*نعم انها بنت تدور في قلبك صارحها🐱*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🐦‍⬛',  

     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       'هاي',  

     ];
     }else if (/^❤|♥$/i.test(m.text)) { 
     responses = [ 
       '*😂🫵💔🔫*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا♥*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد♥*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^obito$/i.test(m.text)) { 
     responses = [ 
       '*تحت امرك حبي*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا♥*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
