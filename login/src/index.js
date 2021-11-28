//sirve para que arranque la aplicacion.
import app from './app'
import './database'
app.listen(3000)
console.log('Servidor escuchando en el puerto', 3000)