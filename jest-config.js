module.exports = {
    'verbose':true,
    'moduleFileExtensions':[
        'js'
    ],
    'testMatch':[
        '<rootDir>/**.spec.js'
    ],
    "coverageThreshold": {
        "global": {
          "branches": 80,
          "functions": 100,
          "lines":100,
        }
      }
};
