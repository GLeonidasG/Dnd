export interface CharacterDTO{
    campId: number;
    userId: number;
    name: string;
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
    totalHp: number;
    currentHp: number;
    weaponId: number;
    armorId: number;
    leftHand: number;
    isAmbidextrous: boolean;
    initiative: number;
    proficiencyBonus: number;
    armorClass: number;
    movement: number;
    deathSuccess: number;
    deathFail: number;
}