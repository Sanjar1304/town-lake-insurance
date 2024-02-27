// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: 'src',
    frameworks: ['parallel','jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-parallel'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter')
    ],
    parallelOptions: {
      executors: 2, // Defaults to cpu-count - 1 // some times,its working with 3 instances too
      shardStrategy: 'round-robin',
    },
    client: {
      jasmine: {
        random: false
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: path.join(__dirname, 'coverage', 'client'),
      reports: ['lcov'],
      fixWebpackSourcePaths: true,
      thresholds: {
        emitWarning: false,
        global: {
          functions: 80
        },
      }
    },
    reporters: ['progress', 'kjhtml', 'coverage-istanbul', 'junit'],
    junitReporter: {
      outputDir: path.join(__dirname, 'coverage', 'client')
    },
    port: 9877,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    captureTimeout: 300000,
    flags: [
      '--disable-web-security',
      '--disable-gpu',
      '--no-sandbox'
    ],
    singleRun: false,
    restartOnFileChange: true
  });
};
