"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teamController_1 = require("@/controllers/teamController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", teamController_1.getTeams);
exports.default = router;
