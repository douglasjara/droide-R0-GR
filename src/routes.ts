import { Express, Request, Response } from "express";
import { validateRequest } from "./middleware";
import { evaluateRadarSchema } from "./schemas/radar.schema";
import { evaluateRadarHandler } from "./controllers/radar.controller";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/radar", validateRequest(evaluateRadarSchema), evaluateRadarHandler);
}