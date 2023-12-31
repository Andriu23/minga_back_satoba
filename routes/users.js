import Router from 'express'
import read from '../controllers/auth/read.js'

const auth_router = Router()

// auth_router.post()   // POST para crear un author
auth_router.get('/', read)    // GET para leer (TODOS o solo uno)
// auth_router.put()    // PUT para actualizar un autor
// auth_router.delete() // DELETE para eliminar un autor

export default auth_router