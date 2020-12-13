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
