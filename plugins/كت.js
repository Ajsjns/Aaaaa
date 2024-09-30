let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^كت$/i.test(m.text)) { 
 responses = [ 
 `*∞──────「كـت」──────∞*

*~『لوفي』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『شادو』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『نانو』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『فينوم』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『كريستيانو عمك』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『سون غوكو』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『انتي سبيرال』~*

*∞──────「كـت」──────∞*`

 ];
 }  
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
