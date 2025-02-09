//Aqui insertaremos todos los modulos que usaremos para este proyecto
import express from 'express';
import morgan from 'morgan';

import ejs from 'ejs';

//inicializamos express
const app = express();
//settings
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs')
//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//settings del servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`El puerto esta escuchando en el puerto ${PORT}`)
});
