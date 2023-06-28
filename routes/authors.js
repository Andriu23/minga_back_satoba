import Router from 'express'
import read from '../controllers/authors/read.js'
const author_router = Router()

// author_router.post()   // POST para crear un author
author_router.get(
    '/', 
    read
)    // GET para leer (TODOS o solo uno)
// author_router.put()    // PUT para actualizar un autor
// author_router.delete() // DELETE para eliminar un autor

export default author_router

