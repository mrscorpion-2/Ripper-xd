const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╼
╵  *🤖 ${settings.botName || 'ʀɪᴘᴘᴇʀ-xᴅ'}*  
╵  ᴠᴇʀsɪᴏɴ: *${settings.version || '3.0.0'}*
╵   ʙʏ ${settings.botOwner || 'Mʀ Lᴡᴀᴢɪ'}
╵  ʏᴛ : ${global.ytch}
╰╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╼

*ᴀᴠᴀɪʟᴀʙʟᴇ ᴄᴍᴅs*


 ╭╴╴╴❲Gᴇɴᴇʀᴀʟ ᴄᴍᴅs❳╴╴╴╼
 ╵ ↳ .help or .menu
 ╵ ↳ .ping
 ╵ ↳ .alive
 ╵ ↳ .tts <text>
 ╵ ↳ .owner
 ╵ ↳ .joke
 ╵ ↳ .quote
 ╵ ↳ .fact
 ╵ ↳ .weather <city>
 ╵ ↳ .news
 ╵ ↳ .attp <text>
 ╵ ↳ .lyrics <song_title>
 ╵ ↳ .8ball <question>
 ╵ ↳ .groupinfo
 ╵ ↳ .staff or .admins 
 ╵ ↳ .vv
 ╵ ↳ .trt <text> <lang>
 ╵ ↳ .ss <link>
 ╵ ↳ .jid
 ╵ ↳ .url
 ╰╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╼


╭╴╴╴❲Aᴅᴍɪɴ ᴄᴍᴅs❳╴╴╴╴╴╼
╵ ↳ .ban @user
╵ ↳ .promote @user
╵ ↳ .demote @user
╵ ↳ .mute <minutes>
╵ ↳ .unmute
╵ ↳ .delete or .del
╵ ↳ .kick @user
╵ ↳ .warnings @user
╵ ↳ .warn @user
╵ ↳ .antilink
╵ ↳ .antibadword
╵ ↳ .clear
╵ ↳ .tag <message>
╵ ↳ .tagall
╵ ↳ .tagnotadmin
╵ ↳ .hidetag <message>
╵ ↳ .chatbot
╵ ↳ .resetlink
╵ ↳ .antitag <on/off>
╵ ↳ .welcome <on/off>
╵ ↳ .goodbye <on/off>
╵ ↳ .setgdesc <description>
╵ ↳ .setgname <new name>
╵ ↳ .setgpp (reply to image)
╰╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╼


╭╴╴╴❲Oᴡɴᴇʀ ᴄᴍᴅs❳╴╴╴╴╴╼
╵ ↳ .mode <public/private>
╵ ↳ .clearsession
╵ ↳ .antidelete
╵ ↳ .cleartmp
╵ ↳ .update
╵ ↳ .settings
╵ ↳ .setpp <reply to image>
╵ ↳ .autoreact <on/off>
╵ ↳ .autostatus <on/off>
╵ ↳ .autostatus react <on/off>
╵ ↳ .autotyping <on/off>
╵ ↳ .autoread <on/off>
╵ ↳ .anticall <on/off>
╵ ↳ .pmblocker <on/off/status>
╵ ↳ .pmblocker setmsg <text>
╵ ↳ .setmention <reply to msg>
╵ ↳ .mention <on/off>
╰╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╼


╭╴╴╴❲ɪᴍᴀɢᴇ/sᴛɪᴄᴋᴇʀ ᴄᴍᴅs❳╴╴╴╴╼
╵ ↳ .blur <image>
╵ ↳ .simage <reply to sticker>
╵ ↳ .sticker <reply to image>
╵ ↳ .removebg
╵ ↳ .remini
╵ ↳ .crop <reply to image>
╵ ↳ .tgsticker <Link>
╵ ↳ .meme
╵ ↳ .take <packname> 
╵ ↳ .emojimix <emj1>+<emj2>
╵ ↳ .igs <insta link>
╵ ↳ .igsc <insta link>
╰╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╼  


╭╴╴╴❲ᴘɪᴇs ᴄᴍᴅs❳╴╴╴╴╼
╵ ↳ .pies <country>
╵ ↳ .china 
╵ ↳ .indonesia 
╵ ↳ .japan 
╵ ↳ .korea 
╵ ↳ .hijab
╰╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╼


╭╴╴╴❲Gᴀᴍᴇ ᴄᴍᴅs❳╴╴╴╼
╵ ↳ .tictactoe @user
╵ ↳ .hangman
╵ ↳ .guess <letter>
╵ ↳ .trivia
╵ ↳ .answer <answer>
╵ ↳ .truth
╵ ↳ .dare
╰╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╼


╭╴╴╴❲Aɪ ᴄᴍᴅs❳╴╴╴╼
╵ ↳ .gpt <question>
╵ ↳ .gemini <question>
╵ ↳ .imagine <prompt>
╵ ↳ .flux <prompt>
╵ ↳ .sora <prompt>
╰╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╼


╭╴╴╴❲Fᴜɴ ᴄᴍᴅs❳╴╴╴╴╼
╵ ↳ .compliment @user
╵ ↳ .insult @user
╵ ↳ .flirt 
╵ ↳ .shayari
╵ ↳ .goodnight
╵ ↳ .roseday
╵ ↳ .character @user
╵ ↳ .wasted @user
╵ ↳ .ship @user
╵ ↳ .simp @user
╵ ↳ .stupid @user [text]
╰╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╼


╭╴╴╴❲ᴛᴇxᴛᴍᴀᴋᴇʀ❳╴╴╴╼
╵ ↳ .metallic <text>
╵ ↳ .ice <text>
╵ ↳ .snow <text>
╵ ↳ .impressive <text>
╵ ↳ .matrix <text>
╵ ↳ .light <text>
╵ ↳ .neon <text>
╵ ↳ .devil <text>
╵ ↳ .purple <text>
╵ ↳ .thunder <text>
╵ ↳ .leaves <text>
╵ ↳ .1917 <text>
╵ ↳ .arena <text>
╵ ↳ .hacker <text>
╵ ↳ .sand <text>
╵ ↳ .blackpink <text>
╵ ↳ .glitch <text>
╵ ↳ .fire <text>
╰╴╴╴╴╴╴╴╴╴╴╴╴╴╴╼


╭╴╴╴❲ᴅᴏᴡɴʟᴏᴅᴇʀ❳╴╴╴╴╼
╵ ↳ .play <song_name>
╵ ↳ .song <song_name>
╵ ↳ .spotify <query>
╵ ↳ .instagram <link>
╵ ↳ .facebook <link>
╵ ↳ .tiktok <link>
╵ ↳ .video <song name>
╵ ↳ .ytmp4 <Link>
╰╴╴╴╴╴╴╴╴╴╴╴╴╴╴╼


╭╴╴╴❲ᴍɪsᴄ❳╴╴╴╴╼
╵ ↳ .heart
╵ ↳ .horny
╵ ↳ .circle
╵ ↳ .lgbt
╵ ↳ .lolice
╵ ↳ .its-so-stupid
╵ ↳ .namecard 
╵ ↳ .oogway
╵ ↳ .tweet
╵ ↳ .ytcomment 
╵ ↳ .comrade 
╵ ↳ .gay 
╵ ↳ .glass 
╵ ↳ .jail
╵ ↳ .passed 
╵ ↳ .triggered
╰╴╴╴╴╴╴╴╴╴╴╴╴╴╼


╭╴╴╴❲ᴀɴɪᴍᴇ❳╴╴╴╴╼
╵ ↳ .nom 
╵ ↳ .poke 
╵ ↳ .cry 
╵ ↳ .kiss 
╵ ↳ .pat 
╵ ↳ .hug 
╵ ↳ .wink 
╵ ↳ .facepalm 
╰╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╼


╭╴╴╴❲ɢɪᴛʜᴜʙ ᴄᴍᴅs❳╴╴╴╴╼
╵ ↳ .git
╵ ↳ .github
╵ ↳ .sc
╵ ↳ .script
╵ ↳ .repo
╰╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╴╼
> ᴍᴀᴅᴇ ʙʏ Mʀ Lᴡᴀᴢɪ Dᴇᴠ

ᴊᴏɪɴ ᴍʏ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴍᴏʀᴇ ᴜᴏᴅᴀᴛᴇs:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363427699653625@newsletter',
                        newsletterName: '𝚃𝙴𝙲𝙷 𝚇𝚇',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363427699653625@newsletter',
                        newsletterName: 'Ripper xd by Mr Lwazi',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;