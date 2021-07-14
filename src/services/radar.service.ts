import { Radar } from "../models/radar.model";

export function evaluateRadar(input: Radar) {
  try {
    var validTargets = input.scan.filter(target => {
      target.coordinates.distance = Math.sqrt((target.coordinates.x ** 2) + (target.coordinates.y ** 2));
      return target.coordinates.distance < 100;
    });

    if (input.protocols.includes("prioritize-mech")) {
      const validTargetsTemp = validTargets.filter(target => {
        return target.enemies.type == "mech";
      });
      validTargets = validTargetsTemp.length > 0 ? validTargetsTemp : validTargets;
    } else if (input.protocols.includes("avoid-mech")) {
      validTargets = validTargets.filter(target => {
        return target.enemies.type != "mech";
      });
    }

    if (input.protocols.includes("avoid-crossfire")) {
      validTargets = validTargets.filter(target => {
        return target.allies == 0 || target.allies == undefined;
      });
    } else if (input.protocols.includes("assist-allies")) {
      const validTargetsTemp = validTargets.filter(target => {
        return target.allies > 0;
      });
      validTargets = validTargetsTemp.length > 0 ? validTargetsTemp : validTargets;
    }

    if (input.protocols.includes("closest-enemies")) {
      validTargets.sort((target1, target2) => 
        target1.coordinates.distance - target2.coordinates.distance
      );
    } else if (input.protocols.includes("furthest-enemies")) {
      validTargets.sort((target1, target2) => 
        target2.coordinates.distance - target1.coordinates.distance
      );
    }

    return validTargets.length > 0 ? 
    { x: validTargets[0].coordinates.x, y: validTargets[0].coordinates.y } : 
    {};
  } catch (e) {
    throw new Error(e);
  }
}