import { getProjects } from "@/controllers/projectController";
import { Router } from "express";

const router = Router()

router.get("/", getProjects)

export default router