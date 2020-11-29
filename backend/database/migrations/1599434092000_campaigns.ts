import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Campaigns extends BaseSchema {
  protected tableName = 'campaigns'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('dm_id')
        .unsigned()
        .notNullable()
      table.foreign('dm_id')
        .references('users.id')
        .onDelete('CASCADE')
      table.string('name', 25)
      table.text('description')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
