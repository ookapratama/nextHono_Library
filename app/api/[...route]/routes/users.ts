import { Hono } from "hono";
import { userController } from "../../controllers/userController";

const users = new Hono();
const controller = new userController();

// users.get("/", (c) => controller.getUsers(c));

export default users;
