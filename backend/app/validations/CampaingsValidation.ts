import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CampaignCreateValidation = schema.create({
  dm_id: schema.number(),
  name: schema.string(),
  description: schema.string.optional(),
})
