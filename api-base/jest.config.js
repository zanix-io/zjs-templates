module.exports = {
  moduleNameMapper: {
    'services/(.*)': '<rootDir>/src/core/services/$1',
    'adapters/(.*)': '<rootDir>/src/core/adapters/$1',
    'models/(.*)': '<rootDir>/src/core/adapters/data/models/$1',
    'providers/(.*)': '<rootDir>/src/core/adapters/interactors/providers/$1',
    'clients/(.*)': '<rootDir>/src/core/adapters/interactors/clients/$1',
    'app/utils/(.*)': '<rootDir>/src/commons/utils/$1',
    'app/utils': '<rootDir>/src/commons/utils/index',
    'middlewares/(.*)': '<rootDir>/src/commons/middlewares/$1',
    middlewares: '<rootDir>/src/commons/middlewares/index',
    'rtos/(.*)': '<rootDir>/src/commons/rtos/$1',
    rtos: '<rootDir>/src/commons/rtos/index'
  }
}
