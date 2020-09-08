import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";

export default class UsersController {

    async index(): Promise<User[]> {
        return await User.query().preload('campaigns')
    }

    async store ({ request }: HttpContextContract ) {
        const user = request.only(['username','password', 'email'])
        await new User().init(user).save()
    }

}
