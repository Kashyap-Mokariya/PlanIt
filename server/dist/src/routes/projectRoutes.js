"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projectController_1 = require("@/controllers/projectController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", projectController_1.getProjects);
router.post("/", projectController_1.createProject);
exports.default = router;
