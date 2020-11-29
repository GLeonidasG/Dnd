import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";
import { UserDTO } from 'Contracts/dto/UserDTO';

export default class UsersController {

    async index(): Promise<User[]> {
        return await User.query().preload('campaigns').preload('character')
    }

    async store ({ request }: HttpContextContract ) {
        const user = request.post() as UserDTO
        await new User().init(user).save()
    }

    async update ( { request, params }: HttpContextContract ): Promise<void> {
        const user = request.get()
        const { id } = params
        await User.updateOrCreate({id: Number(id)}, user)
    }

    async destroy ( { params }: HttpContextContract ): Promise<void> {
        const { id } = params;
        const user = await User.find(Number(id))
        await user?.delete()
    }

}
