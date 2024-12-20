import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient()

export const getProjects = async (req: Request, res: Response): Promise<void> => {
    try {
        const projects = await prisma.project.findMany()
        res.json(projects)
    }
    catch {
        res.status(500).json({message: "Error retrieving projects"})
    }
}