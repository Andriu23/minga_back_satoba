import Router from 'express'
import read from '../controllers/categories/read.js'
const category_router = Router()

// category_router.post()   // POST para crear un author
category_router.get('/', read)    // GET para leer (TODOS o solo uno)
// category_router.put()    // PUT para actualizar un autor
// category_router.delete() // DELETE para eliminar un autor

export default category_router