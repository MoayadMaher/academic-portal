import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export class CourseController {
  static async createCourse(req: Request, res: Response) {
    const { name, description, startDate, endDate, teacherId } = req.body;
    console.log(req.body);
    try {
      const course = await prisma.course.create({
        data: {
          name,
          description,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          teacherId,
        },
      });
      res.status(201).json(course);
    } catch (error) {
      res.status(400).json({ message: "Error creating course." });
    }
  }

  static async updateCourse(req: Request, res: Response) {
    const { id, name, description, startDate, endDate } = req.body;
    try {
      const course = await prisma.course.update({
        where: { id },
        data: {
          name,
          description,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
        },
      });

      res.status(200).json(course);
    } catch (error) {
      res.status(400).json({ message: "Error updating course." });
    }
  }

  static async listCourses(req: Request, res: Response) {
    try {
      const courses = await prisma.course.findMany();
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving courses." });
    }
  }
}
