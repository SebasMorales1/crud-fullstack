import express from 'express'
import morgan from 'morgan'
import tasksRoute from './routes/tasks.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use(tasksRoute)

export default app