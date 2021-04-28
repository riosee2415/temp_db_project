import express from "express";
import {
  ddalgiController1,
  ddalgiController2,
  ddalgiController3,
} from "../controllers/ddalgiController";

const ddalgiRouter = express.Router();

console.log("2. 나는 Router얌! 만나서 정말 좋아!");

ddalgiRouter.get("/ddalgi1", ddalgiController1);
ddalgiRouter.get("/ddalgi2", ddalgiController2);
ddalgiRouter.get("/ddalgi3", ddalgiController3);

export default ddalgiRouter;
