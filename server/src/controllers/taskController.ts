import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient()

export const getTasks = async (req: Request, res: Response): Promise<void> => {

    const { projectId } = req.query

    try {
        const tasks = await prisma.task.findMany({
            where: {
                projectId: Number(projectId)
            },
            include: {
                author: true,
                assignee: true,
                comments: true,
                attachments: true
            }
        })
        res.json(tasks)
    }
    catch (error: any) {
        res.status(500).json({ message: `Error retrieving projects : ${error.message}` })
    }
}

export const createTask = async (req: Request, res: Response): Promise<void> => {

    const {
        title,
        description,
        status,
        priority,
        tags,
        startDate,
        dueDate,
        points,
        projectId,
        authorUserId,
        assignedUserId,
    } = req.body

    try {
        const newTask = await prisma.task.create({
            data: {
                title,
                description,
                status,
                priority,
                tags,
                startDate,
                dueDate,
                points,
                projectId,
                authorUserId,
                assignedUserId,
            }
        })

        res.status(201).json(newTask)
    }
    catch (error: any) {
        res.status(500).json({ message: `Error creating the task : ${error.message}` })
    }
}