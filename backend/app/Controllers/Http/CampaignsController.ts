import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Campaign from "App/Models/Campaign";

export default class CampaignsController {

    async index () : Promise<Campaign[]> {
        return await Campaign.all()
    }

    async store ( { request }:HttpContextContract ) {
        const camp = request.only(['name', 'dmId', 'description'])
        await new Campaign().init(camp).save()
    }

}
