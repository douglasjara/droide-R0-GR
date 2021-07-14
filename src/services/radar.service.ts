import { Radar } from "../models/radar.model";

export function evaluateRadar(input: Radar) {
  try {
    return {x: 0, y: 0};
  } catch (e) {
    throw new Error(e);
  }
}