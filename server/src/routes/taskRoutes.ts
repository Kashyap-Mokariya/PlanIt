import { createTask, getTasks, getUserTasks, updateTaskStatus } from "@/controllers/taskController";
import { Router } from "express";

const router = Router()

router.get("/", getTasks)
router.get("/user/:userId", getUserTasks)
router.post("/", createTask)
router.patch("/:taskId/status", updateTaskStatus)

export default router