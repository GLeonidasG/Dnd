import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Campaign from "App/Models/Campaign";

export default class CampaignsController {

    async index () : Promise<Campaign[]> {
        return await Campaign.query().preload('character')
    }

    async store ( { request }:HttpContextContract ) {
        const camp = request.only(['name', 'dmId', 'description'])
        await new Campaign().init(camp).save()
    }

    async update ( { request, params }: HttpContextContract ): Promise<void> {
        const camp = request.get()
        const { id } = params
        await Campaign.updateOrCreate({ id: Number(id) }, camp)
    }

    async destroy ( { params }: HttpContextContract ) : Promise<void> {
        const { id } = params
        const camp = await Campaign.find(Number(id))
        await camp?.delete()
    }
}