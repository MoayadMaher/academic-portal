import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { ExpressError } from "./utils/ExpressError";
import courseRouter from "./router/courseRoutes";
import userRouter from "./router/userRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("poratal backend is running!");
});

app.use("/user", userRouter);
app.use("/course", courseRouter);

app.all("*", (req, res, next) => {
  next(new ExpressError("Not Found", 404));
});

app.use(
  (err: ExpressError, req: Request, res: Response, next: NextFunction) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oh No, Something Went Wrong!";
    res.status(statusCode).json({ error: err.message });
  }
);

const IP_ADDRESS = process.env.ENV === "production" ? "0.0.0.0" : "localhost";
app.listen(Number(port), IP_ADDRESS, () => {
  console.log(`app listening at ${IP_ADDRESS}:${port}`);
});

export default app;
