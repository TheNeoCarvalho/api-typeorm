import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Tasks } from "../entity/Task";

export const all = async (req: Request, res: Response) => {

    const tasks = await getRepository(Tasks).find()
    return res.status(200).json(tasks)

}

export const one = async (req: Request, res: Response) => {

    const {id} = req.params
    const task = await getRepository(Tasks).findOne(id)
    return res.status(202).json(task)

}

export const save = async (req: Request, res: Response) => {

    const task = await getRepository(Tasks).save(req.body)
    return res.status(201).json(task)

}

export const update = async (req: Request, res: Response) => {

    const {id} = req.params
    const task = await getRepository(Tasks).update(id, req.body)

    if(task.affected > 0){
        const taskUpdated= await getRepository(Tasks).findOne(id)
        return res.status(202).json(taskUpdated)
    }

    return res.status(404).json({ msg: "Task not found"})

}

export const finishTask = async (req: Request, res: Response) => {

    const {id} = req.params
    const task = await getRepository(Tasks).update(id, {
        finished: true
    })

    if(task.affected > 0){
        const taskUpdated= await getRepository(Tasks).findOne(id)
        return res.status(202).json({ msg: "Task Finished" })
    }

    return res.status(404).json({ msg: "Task not found"})

}
