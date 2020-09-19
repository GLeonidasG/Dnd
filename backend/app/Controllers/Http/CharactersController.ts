import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Character from "App/Models/Character";
import { CharacterDTO } from "Contracts/dto/CharacterDTO";

export default class CharactersController {
  async index(): Promise<Character[]> {
    return await Character.all();
  }

  async store({ request }: HttpContextContract): Promise<void> {
    const char = request.post() as CharacterDTO;
    await new Character().init(char).save()
  }

  async update({ request, params }: HttpContextContract): Promise<void> {
    const char = request.post() as CharacterDTO;
    const { id } = params
    await Character.updateOrCreate({id: Number(id)}, char)
  }

  async destroy( { params }: HttpContextContract ):Promise<void> {
    const { id } = params
    const char = await Character.find(Number(id))
    await char?.delete()
  }
}
