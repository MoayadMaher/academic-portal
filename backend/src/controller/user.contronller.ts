import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class UserController {
  static async register(req: Request, res: Response) {
    const { name, email, password, role } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role,
        },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: "Error creating user." });
    }
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });
      if (!user) return res.status(404).send("User not found.");
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) return res.status(400).send("Invalid credentials.");
      const token = jwt.sign(
        { userId: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET!,
        { expiresIn: "12h" }
      );
      res.json({
        token,
        user: {
          name: user.name,
          email: user.email,
          role: user.role,
          id: user.id,
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Error logging in." });
    }
  }

  static async me(req: Request, res: Response) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const user = jwt.decode(token!);

    res.json(user);
  }
}
