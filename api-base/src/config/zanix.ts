/**
 * @type {AppSetup}
 *  Do not remove "as a const" or assign a type to this module, or change generalConfig position.
 *  It is for a correct typing of configuration variables
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
        exampleDevUrl: 'http://${NODE_ENV}.com'
      }
    },
    // Example secret link, for Zanix Secrets
    secrets: ['EXAMPLE_SECRET']
  }
} as const
