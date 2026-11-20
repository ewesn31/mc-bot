const mineflayer = require('mineflayer')
const express = require('express')

const app = express()
app.get('/', (req, res) => res.send('Bot Aktif!'))
app.listen(process.env.PORT || 3000)

function botuBaslat() {
  const bot = mineflayer.createBot({
    host: 'arabama-bin-arabama-bin.mcsh.gg', // Buraya kendi sunucu adresini yaz (örn: sunucum.mcsh.gg)
    port: 14220,
    username: '7_24_Bot',
    version: '1.21.11'
  })

  // İzleyici modunda yerinden kıpırdamadan her 15 saniyede bir kafasını çevirir (AFK atılmasını önler)
  bot.on('spawn', () => {
    setInterval(() => {
      const rastgeleYon = Math.random() * Math.PI * 2
      bot.look(rastgeleYon, 0)
    }, 15000)
  })

  bot.on('end', () => {
    setTimeout(botuBaslat, 10000)
  })

  bot.on('error', (err) => console.log('Hata:', err))
}

botuBaslat()
