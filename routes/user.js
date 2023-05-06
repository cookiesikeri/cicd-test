import express from "express";
import { getUsers, addUser } from "../controllers/user.js";

export const router = express.Router();
router.get("/user", getUsers);
router.post("/user", addUser);
