import express from "express";
import User from "../model/user";
import { createSinger } from "../controller/post/post.singer";
import { createUser } from "../controller/post/post.user";

const router = express.Router();

router.post("/create_singer", createSinger);

router.post("/create", createUser);

//get

router.get("");

export default router;
