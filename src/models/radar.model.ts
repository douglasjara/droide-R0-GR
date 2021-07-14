interface Enemies {
    type: string;
    number: number;
}

interface Coordinates {
    x: number;
    y: number;
    distance: number;
}

interface Scan {
    coordinates: Coordinates;
    enemies: Enemies;
    allies: number;
}

export interface Radar {
    protocols: Array<string>;
    scan: Array<Scan>;
}