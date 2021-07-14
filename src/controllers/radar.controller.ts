import { Request, Response } from "express";
import { evaluateRadar } from "../services/radar.service";
import log from "../logger";

export function evaluateRadarHandler(req: Request, res: Response) {
  try {
    const radar = evaluateRadar(req.body);
    return res.send(radar);
  } catch (e) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}