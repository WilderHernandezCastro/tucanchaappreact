//configurar aplicacion de exoress,
//aca se llama lo que se crea en los otros modulos como por ejemplo carpeta routes archivo productroutes.js
import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

import {createRoles} from './libs/initialSetup'
import producRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import usersRoutes from './routes/user.routes'

const app = express()
createRoles();

app.set('pkg', pkg);

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.json({
        name: app.get('pkg').name,
        autor: app.get('pkg').autor,
        description:app.get('pkg').description,
        version: app.get('pkg').version
    })    
})

app.use('/api/products', producRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)

export default app;