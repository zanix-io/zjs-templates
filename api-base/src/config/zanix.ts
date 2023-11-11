/**
 * @type {AppSetup}
 * Please refrain from removing "as a const" or assigning a type to this module,
 * and please do not alter the position of the generalConfig.
 * These actions are essential to ensure the accurate typing of configuration variables.
 */

const generalConfig: AppSetup = {
  PORT: 9000, // Default port: 8080, you can also define it in .env files, envars or variables property
  global: {
    cors: {
      origin: ''
    }
  }
}

export default {
  ...generalConfig,
  config: {
    variables: [], // Other variables. Can be secrets hosted on envars
    envars: {
      dev: {
        // Example variable
        exampleDevUri: 'http://${NODE_ENV}.com'
      }
    },
    // Example secret link, for Zanix Secrets
    secrets: ['EXAMPLE_SECRET']
  },
  dependencies: {
    services: ['example-service'],
    adapters: ['example-adapter', 'client-adapter', 'database-adapter'],
    jobs: ['example-job']
  }
} as const
