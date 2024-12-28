import { search } from "@/controllers/searchController";
import { Router } from "express";

const router = Router()

router.get("/", search)

export default router