import { ZanixMongoProvider } from '@zanix/server'

/**
 * @Provider
 * @name MongoProvider
 * @description Provider class
 * @extends { ZanixMongoProvider }
 * @summary Providers are for external APPs connections.
 * -------- This is for Adapters use only.
 */

export class MongoProvider extends ZanixMongoProvider {
  constructor(config: Configuration) {
    super({
      connection: { uri: config.secrets.EXAMPLE_SECRET }
    })
  }
}
