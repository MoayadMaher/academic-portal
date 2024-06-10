import express from "express";
import { CourseController } from "../controller/courses.controller";
import { authenticateToken } from "../middleware/authenticateToken";
import { requireRole } from "../middleware/requireRole";
import { asyncWrapper } from "../utils/asyncWrapper";
import { validate } from "../middleware/validationMiddleware";
import { courseSchema } from "../validation/courseValidation";

const router = express.Router();

router
  .route("/")
  .get(authenticateToken, asyncWrapper(CourseController.listCourses))
  .post(
    authenticateToken,
    requireRole("TEACHER"),
    validate(courseSchema),
    asyncWrapper(CourseController.createCourse)
  )
  .put(
    authenticateToken,
    requireRole("TEACHER"),
    asyncWrapper(CourseController.updateCourse)
  );

router.get(
  "/:id",
  authenticateToken,
  asyncWrapper(CourseController.getCoursById)
);

export default router;
