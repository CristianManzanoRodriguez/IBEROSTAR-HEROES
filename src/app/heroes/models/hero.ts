export class Hero {    
    id:          number | undefined;
    name:        string | undefined;
    slug:        string | undefined;
    powerstats:  Powerstats | undefined;
    connections: Connections | undefined;
    biography: Biography | undefined;
    images:      Images | undefined;

}

export class Connections {
    groupAffiliation: string | undefined;
}

class Images {
    xs: string | undefined;
    sm: string | undefined;
    md: string | undefined;
    lg: string | undefined;
}

export class Powerstats {
    intelligence: number | undefined;
    strength:     number | undefined;
    speed:        number | undefined;
    durability:   number | undefined;
    power:        number | undefined;
    combat:       number | undefined;
}

export class Biography {
    alignment: string | undefined;
}
