export function generate(
  length: number = 16,
  alphaLower: boolean = true,
  alphaUpper: boolean = true,
  number: boolean = true,
  special: boolean = false
) {
  if (length < 4) {
    length = 4
  }

  if (length > 50) {
    length = 50
  }

  const alphaCharset = 'abcdefghijklmnopqrstuvwxyz'
  const numberCharset = '0123456789'
  const specialCharset = '!@#$%^&*()_+[]{}|;:,.<>?'

  let combinedCharset = ''

  if (alphaLower) {
    combinedCharset += alphaCharset
  }

  if (alphaUpper) {
    combinedCharset += alphaCharset.toUpperCase()
  }

  if (number) {
    combinedCharset += numberCharset
  }

  if (special) {
    combinedCharset += specialCharset
  }

  let password = ''

  for (let i = 0; i < length; i++) {
    const at = Math.floor(Math.random() * combinedCharset.length)
    password += combinedCharset.charAt(at)
  }

  return password
}
