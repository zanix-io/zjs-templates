/**
 * @type {AppSetup}
 *  Do not remove "as a const" or assign a type to this module.
 *  It is for a correct typing of configuration variables
 */

export default {
  PORT: 9000, // Default port: 8080, you can also define it in .env files, envars or variables property
  config: {
    envars: {
      dev: {
        // Example variable
        exampleDevUrl: 'http://${NODE_ENV}.com'
      }
    },
    // Example secret link
    secrets: ['EXAMPLE_SECRET']
  },
  global: {
    cors: {
      origin: ''
    }
  }
} as const
