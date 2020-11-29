import { schema } from '@ioc:Adonis/Core/Validator';

export const characterCreateValidation = schema.create({
  camp_id: schema.number(),
  user_id: schema.number(),
  name: schema.string(),
  str: schema.number(),
  dex: schema.number(),
  con: schema.number(),
  int: schema.number(),
  wis: schema.number(),
  cha: schema.number(),
  totalHp: schema.number(),
  weaponId: schema.number(),
  armorId: schema.number(),
  leftHand: schema.number(),
  isAmbidextrous: schema.boolean(),
  initiative: schema.number(),
  proficiencyBonus: schema.number(),
  armorClass: schema.number(),
  movement: schema.number(),
})
