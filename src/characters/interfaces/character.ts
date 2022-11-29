export interface Character {
    appearance:                  number[];
    better_call_saul_appearance: number[];
    birthday:                    string;
    category:                    Category;
    char_id:                     number;
    img:                         string;
    name:                        string;
    nickname:                    string;
    occupation:                  string[];
    portrayed:                   string;
    status:                      Status;
}

export enum Category {
    BetterCallSaul = "Better Call Saul",
    BreakingBad = "Breaking Bad",
    BreakingBadBetterCallSaul = "Breaking Bad, Better Call Saul",
}

export enum Status {
    Alive = "Alive",
    Deceased = "Deceased",
    PresumedDead = "Presumed dead",
    Unknown = "Unknown",
}
