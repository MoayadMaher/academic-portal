import express from "express";
import { UserController } from "../controller/user.contronller";
import { asyncWrapper } from "../utils/asyncWrapper";
import { validate } from "../middleware/validationMiddleware";
import { registerSchema, loginSchema } from "../validation/userValidation";

const router = express.Router();

router
  .route("/register")
  .post(validate(registerSchema), asyncWrapper(UserController.register))
  .all((req, res) => {
    res.status(405).json({ message: "Method not allowed." });
  });

router
  .route("/login")
  .post(validate(loginSchema), asyncWrapper(UserController.login))
  .all((req, res) => {
    res.status(405).json({ message: "Method not allowed." });
  });

router.get("/me", asyncWrapper(UserController.me));

export default router;
