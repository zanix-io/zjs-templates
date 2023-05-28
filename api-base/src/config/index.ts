/**
 * @type {AppSetup['config']}
 *  Do not remove "as a const" or assign a type to this module.
 *  It is for a correct tification of the configuration variables
 */

export = {
  envars: {
    dev: {
      // Port by default: 8080, general definition on .env file or variables property
      PORT: '8081',
      // Example variable
      exampleDevUrl: 'http://${NODE_ENV}.com'
    }
  },
  // Example secret link
  secrets: ['EXAMPLE_SECRET']
} as const
