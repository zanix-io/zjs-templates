module.exports = {
  moduleNameMapper: {
    services: '<rootDir>/src/core/services/index',
    'services/(.*)': '<rootDir>/src/core/services/$1',
    adapters: '<rootDir>/src/core/adapters/index',
    'adapters/(.*)': '<rootDir>/src/core/adapters/$1',
    'models/(.*)': '<rootDir>/src/core/adapters/data/(models)/$1',
    'providers/(.*)': '<rootDir>/src/core/adapters/interactors/providers/$1',
    'clients/(.*)': '<rootDir>/src/core/adapters/interactors/clients/$1',
    'app/utils/(.*)': '<rootDir>/src/shared/utils/$1',
    'app/utils': '<rootDir>/src/shared/utils/index',
    middlewares: '<rootDir>/src/shared/middlewares/index',
    'middlewares/(.*)': '<rootDir>/src/shared/middlewares/$1',
    rtos: '<rootDir>/src/shared/rtos/index',
    'rtos/(.*)': '<rootDir>/src/shared/rtos/$1'
  }
}
