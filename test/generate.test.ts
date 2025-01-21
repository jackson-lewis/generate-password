import { generatePassword } from '../src/generate'

describe('Generate password', () => {
  it('should generate a password with 8 characters', () => {
    const password = generatePassword(8)
  })
})
