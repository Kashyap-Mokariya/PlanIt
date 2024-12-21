import { createTask, getTasks } from "@/controllers/taskController";
import { Router } from "express";

const router = Router()

router.get("/", getTasks)
router.post("/", createTask)

export default router