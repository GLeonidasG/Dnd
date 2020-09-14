import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Character from "App/Models/Character";
import { CharacterDTO } from "Contracts/dto/CharacterDTO";

export default class CharactersController {
  async index(): Promise<Character[]> {
    return await Character.all();
  }

  async store({ request }: HttpContextContract): Promise<void> {
    const char = request.only([
      "campId",
      "userId",
      "name",
      "str",
      "dex",
      "con",
      "int",
      "wis",
      "cha",
      "totalHp",
      "currentHp",
      "weaponId",
      "armorId",
      "leftHand",
      "isAmbidextrous",
      "initiative",
      "proficiencyBonus",
      "armorClass",
      "movement",
      "deathSuccess",
      "deathFail",
    ]) as CharacterDTO;
    await new Character().init(char).save()
  }
}
