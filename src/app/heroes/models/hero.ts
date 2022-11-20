export class Hero {
    id:          number | undefined;
    name:        string | undefined;
    slug:        string | undefined;
    powerstats:  Powerstats | undefined;
    appearance:  Appearance | undefined;
    biography:   Biography | undefined;
    work:        Work | undefined;
    connections: Connections | undefined;
    images:      Images | undefined;
    totalHeroesCount: number | undefined;
}

class Appearance {
    gender:    Gender | undefined;
    race:      null | string | undefined;
    height:    string[] | undefined;
    weight:    string[] | undefined;
    eyeColor:  string | undefined;
    hairColor: string | undefined;
}

enum Gender {
    Empty = "-",
    Female = "Female",
    Male = "Male",
}

class Biography {
    fullName:        string | undefined;
    alterEgos:       string | undefined;
    aliases:         string[] | undefined;
    placeOfBirth:    string | undefined;
    firstAppearance: string | undefined;
    publisher:       null | string | undefined;
    alignment:       Alignment | undefined;
}

enum Alignment {
    Bad = "bad",
    Empty = "-",
    Good = "good",
    Neutral = "neutral",
}

class Connections {
    groupAffiliation: string | undefined;
    relatives:        string | undefined;
}

class Images {
    xs: string | undefined;
    sm: string | undefined;
    md: string | undefined;
    lg: string | undefined;
}

class Powerstats {
    intelligence: number | undefined;
    strength:     number | undefined;
    speed:        number | undefined;
    durability:   number | undefined;
    power:        number | undefined;
    combat:       number | undefined;
}

class Work {
    occupation: string | undefined;
    base:       string | undefined;
}
