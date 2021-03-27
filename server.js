const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let cats = {
    'victoria': {
        'name': 'Victoria',
        'age': 'Kitten',
        'markings': 'White',
        'gender': 'Female', 
        'threeWords': ['Young', 'Inhibited', 'Inquisitive'],
        'role': 'Dancer',
        'originalLondonCast': 'Finola Hughes',
        'originalBroadwayCast': 'Cynthia Onrubia',
        'nineEightFilm': 'Phyllida Crowley Smith',
        'img': 'https://i.pinimg.com/564x/ea/25/8c/ea258c0d0b4d6fd65ea753ad9fb4c92f.jpg'
    },
    'mistoffelees':{
        'name': 'Mistoffelees',
        'age': 'Young Adult',
        'markings': 'Black and White/Tuxedo',
        'gender': 'Male', 
        'threeWords': ['Competitive', 'Neat', 'Electric'],
        'role': 'Dancer',
        'originalLondonCast': 'Wayne Sleep',
        'originalBroadwayCast': 'Timothy Scott',
        'nineEightFilm': 'Jacob Brent',
        'img': 'https://i.pinimg.com/originals/33/5b/02/335b02b3a0055cc2cf0daf289df7fe34.jpg'
    },
    'munkustrap':{
        'name': 'Munkustrap',
        'age': 'Adult',
        'markings': 'Silver Tabby',
        'gender': 'Male', 
        'threeWords': ['Imposing', 'Energetic', 'Courageous'],
        'role': 'Singer (baritone)',
        'originalLondonCast': 'Jeff Shankley',
        'originalBroadwayCast': 'Harry Groener',
        'nineEightFilm': 'Michael Gruber',
        'img': 'https://64.media.tumblr.com/52c413f973501184c57c7b49ff661b05/tumblr_inline_pgpkpfr2g81utna18_540.png'
    },
    'bombalurina':{
        'name': 'Bombalurina',
        'age': 'Adult',
        'markings': 'Red, black, and white',
        'gender': 'Female', 
        'threeWords': ['Generous', 'Voluptuous', 'Frank'],
        'role': 'Singer(mezzo), dancer',
        'originalLondonCast': 'Geraldine Gardner',
        'originalBroadwayCast': 'Donna King',
        'nineEightFilm': 'Rosemaire Ford',
        'img': 'https://i.pinimg.com/originals/30/3a/3a/303a3ae6937b6a222c31bbca9fededd9.jpg'
    },
    'demeter':{
        'name': 'Demeter',
        'age': 'Adult',
        'markings': 'Gold, black, and white',
        'gender': 'Female', 
        'threeWords': ['Skittish', 'cautious', 'paranoid'],
        'role': 'Singer (mezzo), dancer',
        'originalLondonCast': 'Sharon Lee-Hall',
        'originalBroadwayCast': 'Wendy Edmead',
        'nineEightFilm': 'Aeva May',
        'img': 'https://i.pinimg.com/originals/1d/ac/aa/1dacaa208a1fed905aeb6d820952b3e7.jpg'
    },
    'unknown':{
        'name': 'unknown',
        'age': 'unknown',
        'markings': 'unknown',
        'gender': 'unknown', 
        'threeWords': 'unknown',
        'role': 'unknown',
        'originalLondonCast': 'unknown',
        'originalBroadwayCast': 'unknown',
        'nineEightFilm': 'unknown',
        'img': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/cats/:name', (request, response) => {
    const catName = request.params.name.toLowerCase()
    if (cats[catName]) {
        response.json(cats[catName])
    } else {
        response.json(cats['unknown'])
    }  
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})