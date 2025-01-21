import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testPathIgnorePatterns: ['dist/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['@babel/preset-env'] }]
  }
};

export default config;