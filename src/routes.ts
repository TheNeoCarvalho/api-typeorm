import { Router, Request, Response } from 'express'
import { all, save, one, update, finishTask, destroy } from './controller/TaskController'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    return res.status(200).json({msg: 'Ok'})
})

routes.get('/tasks', all)
routes.get('/tasks/:id', one)
routes.post('/tasks', save)
routes.put('/tasks/:id', update)



export default routes
