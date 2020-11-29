import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { CharacterDTO } from "Contracts/dto/CharacterDTO";

export default class Character extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public camp_id: number;

  @column()
  public user_id: number;

  @column()
  public name: string;

  @column()
  public str: number;

  @column()
  public dex: number;

  @column()
  public con: number;

  @column()
  public int: number;

  @column()
  public wis: number;

  @column()
  public cha: number;

  @column()
  public totalHp: number;

  @column()
  public currentHp: number;

  @column()
  public weaponId: number;

  @column()
  public armorId: number;

  @column()
  public leftHand: number;

  @column()
  public isAmbidextrous: boolean;

  @column()
  public initiative: number;

  @column()
  public proficiencyBonus: number;

  @column()
  public armorClass: number;

  @column()
  public movement: number;

  @column()
  public deathSuccess: number;

  @column()
  public deathFail: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  public init(char: CharacterDTO): Character {
    this.camp_id = char.campId;
    this.user_id = char.userId;
    this.name = char.name;
    this.str = char.str;
    this.dex = char.dex;
    this.con = char.con;
    this.int = char.int;
    this.wis = char.wis;
    this.cha = char.cha;
    this.totalHp = char.totalHp;
    this.currentHp = char.currentHp;
    this.weaponId = char.weaponId;
    this.armorId = char.armorId;
    this.leftHand = char.leftHand;
    this.isAmbidextrous = char.isAmbidextrous;
    this.initiative = char.initiative;
    this.proficiencyBonus = char.proficiencyBonus;
    this.armorClass = char.armorClass;
    this.movement = char.movement;
    this.deathSuccess = char.deathSuccess;
    this.deathFail = char.deathFail;
    return this;
  }
}
