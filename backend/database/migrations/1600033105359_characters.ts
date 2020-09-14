import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Characters extends BaseSchema {
  protected tableName = 'characters'

  public async up () {
  this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer ('camp_id').references('campaign.id')
      table.integer ('user_id').references('user.id')
      table.string ('name')
      table.integer ('str')
      table.integer ('dex')
      table.integer ('con')
      table.integer ('int')
      table.integer ('wis')
      table.integer ('cha')
      table.integer ('total_hp')
      table.integer ('current_hp')
      table.integer ('weapon_id')
      table.integer ('armor_id')
      table.integer ('left_hand')
      table.boolean ('is_ambidextrous')
      table.integer ('initiative')
      table.integer ('proficiency_bonus')
      table.integer ('armor_class')
      table.integer ('movement')
      table.integer ('death_success')
      table.integer ('death_fail')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
