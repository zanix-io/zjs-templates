import { ZanixMongoProvider } from '@zanix/server'

/**
 * @Provider
 * @name MongoProvider
 * @description Mongo Provider Class
 * @extends { ZanixMongoProvider }
 * @summary Provider for database connections.
 * -------- This is for Adapters use only.
 * -------- You can also implement seeders in this section.
 */

export class MongoProvider extends ZanixMongoProvider {
  constructor(config: Configuration) {
    super({
      connection: { uri: config.getSecret('EXAMPLE_SECRET') }
    })
  }
}
