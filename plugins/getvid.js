let fetch = require('node-fetch')
let { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let fs = require('fs')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
if (!args[0]) throw '*[βππππβ] πΈπ½ππ΄πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π΄π½π»π°π²π΄ / π»πΈπ½πΊ π³π΄ ππ½ ππΈπ³π΄πΎ π³π΄ ππΎππππ±π΄*'
await m.reply(global.wait)
try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `β’ ππΈπππ»πΎ: ${ttl}\nβ’ πΏπ΄ππΎ π³π΄π» ππΈπ³π΄πΎ: ${size}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {
await conn.reply(m.chat, '*[β] π΄πππΎπ π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π³π΄ππ²π°ππΆπ°π π΄π» ππΈπ³π΄πΎ*', m)}
}   
handler.command = /^(getvid)$/i
handler.command = /^(getvid|ytmp4.2|ytv.2)$/i
module.exports = handler
