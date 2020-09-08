import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { CampaignDTO } from 'Contracts/dto/CampaignDTO'

export default class Campaign extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public dmId: number

  @column()
  public name: string

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  init ( camp: CampaignDTO ): Campaign {
    this.dmId = camp.dmId
    this.name = camp.name
    this.description = camp.description
    return this
  }
}
