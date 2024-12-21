import { createTask, getTasks, updateTaskStatus } from "@/controllers/taskController";
import { Router } from "express";

const router = Router()

router.get("/", getTasks)
router.post("/", createTask)
router.patch("/:taskId/status", updateTaskStatus)

export default router