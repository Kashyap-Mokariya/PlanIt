import { getTeams } from "@/controllers/teamController";
import { Router } from "express";

const router = Router()

router.get("/", getTeams) 

export default router