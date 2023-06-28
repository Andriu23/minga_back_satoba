import express from 'express';
import 'dotenv/config.js' // configurar variables de entorno de mi aplicacion
import indexRouter from './routes/index.js'
import cors from 'cors'
import path from 'path'
import { __dirname } from './utils.js' // importo la configuracion de la ruta padre
import morgan from 'morgan';


let server = express(); // instancia el modulo de express y crea el servidor

// view engine setup
// set configura algo
server.set('views', path.join(__dirname, 'views')); // todas las vistas generadas en el backend estan en la carpeta views
server.set('view engine', 'ejs'); // las vistas se definen con el lenguaje EJS

// middlewares
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors())
server.use(express.static(path.join(__dirname, 'public')));

server.use('/api', indexRouter);

/* // catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
 */
export default server;
