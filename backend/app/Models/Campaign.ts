import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { CampaignDTO } from 'Contracts/dto/CampaignDTO'
import Character from './Character'

export default class Campaign extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'dm_id' })
  public dm_id: number

  @hasMany( () => Character, { foreignKey: 'camp_id' } )
  public character: HasMany<typeof Character>

  @column()
  public name: string

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  init ( camp: CampaignDTO ): Campaign {
    this.dm_id = camp.dmId
    this.name = camp.name
    this.description = camp.description
    return this
  }
}
