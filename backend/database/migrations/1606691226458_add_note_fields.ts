import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Campaigns extends BaseSchema {
  protected tableName = 'campaigns'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.text('note')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('note')
    })
  }
}
