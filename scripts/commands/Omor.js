module.exports.config = {
  name: "omor",
  version: "1.0.1",
  permission: 0,
  credits: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
  prefix: false,
  description: "goibot",
  category: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["༅༎নিরবে༅༎কান্না༅༎তাহ্༅༎", "༅༎চোখের༅༎জল༅༎তাহ্༅༎", "༅༎নেশায়༅༎আশক্ত༅༎তাহ্༅༎", "༅༎রাতোর༅༎একা༅༎ক্রিত༅༎তাহ্༅༎", "Works at ⊱༅༎ড্রাগের༅༎শহর༅༎তাহ༅༎", "༅༎ড্রিপে༅༎শান༅༎বাবু༅༎তাহ্༅༎", "シ༆ღ”আঁবেঁগীঁ মঁনঁ তাঁহঁ࿐ღシ", "༊”নিশ্চুপ”আমি”তাহ্’”﹏ღ﹏”", "༊”খুব”অদ্ভুত”তাহ্”﹏ღ﹏”", "༊”অদ্ভুত”স্বপ্ন”তাহ্”﹏ღ﹏”", "༊”ভদ্র”শয়তান”তাহ্”﹏ღ﹏”", "༊”সহজ”সরল”আগুন”তাহ্”﹏ღ﹏”", "༊”ইমোশনাল”‘বাবু’”তাহ্”﹏ღ﹏"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

   if ((event.body.toLowerCase() == "basar sobai kmon ache") || (event.body.toLowerCase() == "Basar sobai kmon ache") ||
(event.body.toLowerCase() == "Bsar sobi kmn ase") ||
(event.body.toLowerCase() == "Basar sobay kamon ase") ||
      (event.body.toLowerCase() == "বাসার সবাই কেমন আছ") ||
      (event.body.toLowerCase() == "Basar sob kmn ase")||
(event.body.toLowerCase() == "tomar basar sobai kmon ache")) {
     return api.sendMessage("-আলহামদুলিল্লাহ-🌺-অনেক অনেক ভালো আছে তোমার বাসার সবাই কেমন আছে-💝🌻", threadID);
   };

  if (event.body.indexOf("Omor") == 0 || (event.body.indexOf("ওমর") == 0)) {
    var msg = {
      body: `•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n${name}\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n ${rand}\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•` 
    }
    return api.sendMessage(msg, threadID, messageID);
  };
}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
