import Router from 'express'
import read from '../controllers/mangas/read.js'
const manga_router = Router()

// manga_router.post()   // POST para crear un author
manga_router.get('/', read)    // GET para leer (TODOS o solo uno)
// manga_router.put()    // PUT para actualizar un autor
// manga_router.delete() // DELETE para eliminar un autor

export default manga_router
