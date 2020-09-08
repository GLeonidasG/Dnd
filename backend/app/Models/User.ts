import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Campaign from './Campaign'
import { UserDTO } from 'Contracts/dto/UserDTO'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column()
  public password: string

  @column()
  public email: string

  @hasMany( () => Campaign, { foreignKey: 'dmId' } )
  public campaigns: HasMany<typeof Campaign>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  init( user: UserDTO ): User{
    this.username = user.username
    this.password = user.password
    this.email = user.email
    return this;
  }
}
