import { DEFAULT_LENGTH } from '@/consts'
import generate, { PasswordGenerator } from '@/generate'

describe('Password length', () => {
  it('should generate a password with the default 16 characters', () => {
    const generator = new PasswordGenerator()
    expect(generator.length).toEqual(DEFAULT_LENGTH)
  })

  it('should generate a password with 12 characters', () => {
    const generator = new PasswordGenerator(12)
    expect(generator.length).toEqual(12)
  })

  it('should not generate a password with less than 4 characters', () => {
    const generator = new PasswordGenerator(2)
    expect(generator.length).toEqual(4)
  })

  it('should not generate passwords over 50 characters', () => {
    const generator = new PasswordGenerator(51)
    expect(generator.length).toEqual(50)
  })
})

describe('Password varieties', () => {
  it('should only include lowercase', () => {
    const password = generate(16, true, false, false, false)
    expect(password).toMatch(/^[a-z]{16}$/)
  })

  it('should only include uppercase', () => {
    const password = generate(16, false, true, false, false)
    expect(password).toMatch(/^[A-Z]{16}$/)
  })

  it('should only include numeric', () => {
    const password = generate(16, false, false, true, false)
    expect(password).toMatch(/^[0-9]{16}$/)
  })

  it('should only include special characters', () => {
    const password = generate(16, false, false, false, true)
    expect(password).toMatch(/^[!@#$%^&*()_+\[\]{}|;:,.<>?]{16}$/)
  })
})

describe('Password minimum requirements', () => {
  it('should return password with lowercase if no options enabled', () => {
    const password = generate(16, false, false, false, false)
    expect(password).toMatch(/^[a-z]{16}$/)
  })

  it('should always include at least 1 letter and 1 number', () => {
    const password = generate(4, true, false, true, false)
    expect(password).toMatch(/^([a-z0-9]{1})([a-z0-9]{1})([a-z0-9]{1})([a-z0-9]{1})$/)
  })

  it('should always include at least 1 letter, number and special', () => {
    const password = generate(4, true, true, true, true)
    expect(password).toMatch(/([a-zA-Z0-9!@#$%^&*()_+\[\]{}\|;:,\.<>?]{1})([a-zA-Z0-9!@#$%^&*()_+\[\]{}\|;:,\.<>?]{1})([a-zA-Z0-9!@#$%^&*()_+\[\]{}\|;:,\.<>?]{1})([a-zA-Z0-9!@#$%^&*()_+\[\]{}\|;:,\.<>?]{1})/)
  })
})