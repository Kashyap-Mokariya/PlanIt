"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskController_1 = require("@/controllers/taskController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", taskController_1.getTasks);
router.post("/", taskController_1.createTask);
router.patch("/:taskId/status", taskController_1.updateTaskStatus);
exports.default = router;
