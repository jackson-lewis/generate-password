import { Charsets } from './types'

export class PasswordGenerator {
  length: number
  alphaLower: boolean
  alphaUpper: boolean
  number: boolean
  special: boolean
  charsets: Charsets
  usedCharsets: number[] = []

  constructor(
    length: number = 16,
    alphaLower: boolean = true,
    alphaUpper: boolean = true,
    number: boolean = true,
    special: boolean = false
  ) {
    this.length = this.validateLength(length)
    this.alphaLower = alphaLower
    this.alphaUpper = alphaUpper
    this.number = number
    this.special = special
    this.charsets = this.getCharsets()
  }

  generate() {
    let password = ''

    for (let index = 0; index < this.length; index++) {
      const charset = this.getCharset(index)
      const at = Math.floor(Math.random() * charset.length)
      password += charset.charAt(at)
    }

    return password
  }

  validateLength(length: number) {
    if (length < 4) {
      return 4
    }
  
    if (length > 50) {
      return 50
    }
  
    return length
  }

  getCharsets() {
    const alphaCharset = 'abcdefghijklmnopqrstuvwxyz'
    const numberCharset = '0123456789'
    const specialCharset = '!@#$%^&*()_+[]{}|;:,.<>?'
  
    const charsets: Charsets = {
      alphaLower: alphaCharset,
      alphaUpper: alphaCharset.toUpperCase(),
      number: numberCharset,
      special: specialCharset
    }
  
    if (!this.special)  {
      delete charsets.special
    }
  
    if (!this.number)  {
      delete charsets.number
    }
  
    if (!this.alphaUpper)  {
      delete charsets.alphaUpper
    }
  
    /**
     * Only disable lowercase if one of 
     * uppercase, number, or special is enabled
     */
    if (!this.alphaLower && (this.alphaUpper || this.number || this.special)) {
      delete charsets.alphaLower
    }
  
    return charsets
  }

  getCharset(index: number) {
    let charsetIndex = 
      Math.floor(Math.random() * Object.keys(this.charsets).length)

    if (!this.usedCharsets.includes(charsetIndex)) {
      this.usedCharsets.push(charsetIndex)
    }

    if (
      Object.keys(this.charsets).length - this.usedCharsets.length >= 
        this.length - index
    ) {
      const unusedCharsets = Object.keys(this.charsets)
        .filter((_, j) => !this.usedCharsets.includes(j))

      const nextCharset = unusedCharsets[0]
      charsetIndex = Object.keys(this.charsets).indexOf(nextCharset)

      this.usedCharsets.push(charsetIndex)
    }

    return Object.values(this.charsets)[charsetIndex]
  }
}


export default function generate(
  length: number = 16,
  alphaLower: boolean = true,
  alphaUpper: boolean = true,
  number: boolean = true,
  special: boolean = false
) {
  const generator = new PasswordGenerator(
    length,
    alphaLower,
    alphaUpper,
    number,
    special
  )

  return generator.generate()
}
