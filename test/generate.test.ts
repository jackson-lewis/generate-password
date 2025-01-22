import { generate } from '@/generate'

describe('Password length', () => {
  it('should generate a password with the default 16 characters', () => {
    const password = generate()
    expect(password).toHaveLength(16)
  })

  it('should generate a password with 12 characters', () => {
    const password = generate(12)
    expect(password).toHaveLength(12)
  })

  it('should not generate a password with less than 4 characters', () => {
    const password = generate(2)
    expect(password).toHaveLength(4)
  })

  it('should not generate passwords over 50 characters', () => {
    const password = generate(51)
    expect(password).toHaveLength(50)
  })
})
