import { connect } from 'mongoose'

connect(process.env.MONGO_URI)
    .then(()=> console.log('database connected'))
    .catch(error=> console.log(error))
