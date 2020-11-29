import { schema, rules } from "@ioc:Adonis/Core/Validator"

export const userRegisterValidation = schema.create({
  username: schema.string(),
  email: schema.string({}, [ rules.email() ]),
  password: schema.string({}, [ rules.confirmed() ])
})

export const userLoginValidation = schema.create({
  email: schema.string({}, [ rules.email(), rules.unique({ table: 'users', column: 'email' }) ]),
  password: schema.string()
})
