const path = require('path');

module.exports = function (wallaby) {
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(__dirname, 'node_modules') +
    path.delimiter +
    path.join(__dirname, 'node_modules/react-scripts-ts/node_modules');
  require('module').Module._initPaths();

  // Babel needs this
  // create-react-app-typescript does not use this
  // process.env.NODE_ENV = 'development';

  return {
    files: [
      'src/**/*.ts?(x)',
      'src/**/*.snap',
      '!src/**/*.stories.ts?(x)',
      '!src/**/*.test.ts?(x)',
      '.storybook/config.js'
    ],

    tests: [
      'src/**/*.test.ts?(x)',
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript(Object.assign(
        require('./tsconfig.json').compilerOptions
        // require('./tsconfig.test.json').compilerOptions)
      ))
    },

    preprocessors: {
      '.storybook/config.js': f => f.content.replace('.tsx$', '.js$')
    },

    setup: (wallaby) => {
      wallaby.testFramework.configure({
        moduleNameMapper: {
          '^.+\\.(jpg|jpeg|png|gif|svg)$': require.resolve('react-scripts-ts/config/jest/fileTransform.js'),
          '^.+\\.css$': require.resolve('react-scripts-ts/config/jest/cssTransform.js')
        }
      });
    },

    testFramework: 'jest'
  };
};