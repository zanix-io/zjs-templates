module.exports = {
  moduleNameMapper: {
    'adapters/(.*)': '<rootDir>/src/app/adapters/$1',
    'services/(.*)': '<rootDir>/src/app/services/$1',
    'providers/(.*)': '<rootDir>/src/commons/(providers)/$1',
    'clients/(.*)': '<rootDir>/src/commons/(clients)/$1',
    middlewares: '<rootDir>/src/commons/middlewares/index',
    utilities: '<rootDir>/src/commons/utils/index',
    models: '<rootDir>/src/commons/models/index',
    config: '<rootDir>/src/config/index'
  }
}
