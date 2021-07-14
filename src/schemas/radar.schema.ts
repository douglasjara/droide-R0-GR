import { object, string, number, array } from "yup";

const validProtocols = [
    "closest-enemies", 
    "furthest-enemies", 
    "assist-allies", 
    "avoid-crossfire", 
    "prioritize-mech",
    "avoid-mech"
];

const validEnemyTypes = [
    "soldier",
    "mech"
];

export const evaluateRadarSchema = object({
    body: object({
        protocols: array(string().oneOf(validProtocols)).min(1).required("At least one protocol is needed"),
        scan: array(object({
            coordinates: object({
                x: number().required("X coordinate is missing").integer(),
                y: number().required("Y coordinate is missing").integer(),
            }).required("Coordinates are missing!"),
            enemies: object({
                type: string().required("Type of enemy is missing").oneOf(validEnemyTypes),
                number: number().required("Send the number of enemies").positive().integer(),
            }).required("Enemies?"),
            allies: number().positive().integer().notRequired()
        })).min(1).required("Send scan to evaluate...")
    })
});
