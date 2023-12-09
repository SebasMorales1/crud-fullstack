import app from './app.js'
import { DBconnection } from './db.js'

const PORT = 3000

DBconnection()

app.listen(PORT)
console.log('Servidor ejecutandose en el puerto ' + PORT)