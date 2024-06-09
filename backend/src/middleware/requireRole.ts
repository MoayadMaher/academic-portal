import { Request, Response, NextFunction } from "express";

export function requireRole(requiredRole: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || req.user.role !== requiredRole) {
      return res
        .status(403)
        .json({ message: "Access denied. Insufficient permissions." });
    }
    next();
  };
}
