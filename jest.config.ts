import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  testEnvironment: 'node',
  testPathIgnorePatterns: ['dist/'],
  transformIgnorePatterns: [
    '/node_modules/(?!chalk)',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['@babel/preset-env'] }]
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}

export default config;