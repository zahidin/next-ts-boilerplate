module.exports = {
  roots: ['<rootDir>'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  setupFiles: ['<rootDir>/src/config/setup.js'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](build|docs|node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testRegex: '/src/.*\\.(test|spec)\\.tsx?$',
};
