import { spawn } from 'node:child_process'

export function copyToClipboard(password: string) {
  const copyProcess = spawn('pbcopy')
  copyProcess.stdin.write(password)
  copyProcess.stdin.end()
}