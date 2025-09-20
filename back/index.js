const express = require('express')
const sequelize = require('./database')
const models = require('./models')
const PORT = 5000
const cors = require('cors')
const fileUpload = require('express-fileupload')

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(express.urlencoded({extended: true}))

 app.get('/blogs', (req, res) => {
        async function getAll(){
            const [news, meta] = await sequelize.query('SELECT * FROM xinokus.blogs')
            return res.json(news)
        }
        getAll()
    })

 app.get('/plans', (req, res) => {
        async function getAll(){
            const [news, meta] = await sequelize.query('SELECT * FROM xinokus.plans')
            return res.json(news)
        }
        getAll()
    })

 app.get('/comments', (req, res) => {
        async function getAll(){
            const [news, meta] = await sequelize.query('SELECT * FROM xinokus.comments')
            return res.json(news)
        }
        getAll()
    })

 app.post('/subscribes', (req, res) => {
        async function create(){
            const {email} = req.body
            const subscribe = await models.Subscribe.create({email})
            return res.json(subscribe)
        }
        create()
    })

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
    catch(e){
        console.log(e)
    }
}

start()