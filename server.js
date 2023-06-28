import server from './app.js'
import 'dotenv/config.js'
import './config/database.js'

const PORT = process.env.PORT || 8080
const ready = ()=>console.log('server running on port '+PORT)

server.listen(PORT,ready)