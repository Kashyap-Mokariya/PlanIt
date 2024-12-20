import { createProject, getProjects } from "@/controllers/projectController";
import { Router } from "express";

const router = Router()

router.get("/", getProjects)
router.post("/", createProject)

export default router