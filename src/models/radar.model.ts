interface Enemies {
    type: string;
    number: number;
}

interface Allies {
    type: string;
    number: number;
}

interface Coordinates {
    x: number;
    y: number;
}

interface Scan {
    coordinates: Coordinates;
    enemies: Enemies;
    allies: Allies;
}

export interface Radar {
    protocols: Array<string>;
    scan: Array<Scan>;
}